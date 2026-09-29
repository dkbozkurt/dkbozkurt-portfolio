import React, { useMemo } from "react";

// Everything here animates `transform` and `opacity` only, through CSS
// keyframes (see globals.css). That keeps the particles on the compositor:
// no JS runs per frame, so a screenful of highlighted cards costs the main
// thread nothing while the visitor scrolls.

const SPARKLE_COUNT = 7;
const EMBER_COUNT = 9;

// Small deterministic PRNG, seeded per card. Every highlighted card gets its
// own arrangement, but the same card always looks the same (and server and
// client agree, so there is no hydration mismatch).
function mulberry32(seed: number) {
    return () => {
        seed = (seed + 0x6d2b79f5) | 0;
        let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

function hashString(value: string) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
        hash = Math.imul(hash ^ value.charCodeAt(i), 16777619);
    }
    return hash >>> 0;
}

type ParticleStyle = React.CSSProperties & Record<`--${string}`, string>;

function buildParticles(seed: string) {
    const random = mulberry32(hashString(seed));
    const between = (min: number, max: number) => min + random() * (max - min);

    // Sparkles sit on a loose ring around the app icon (centred at roughly
    // 50% / 32% of the card), which keeps them off the title and button. Each
    // one owns an arc of the ring so they never bunch up on one side.
    const phase = random() * Math.PI * 2;
    const sparkles: ParticleStyle[] = Array.from({ length: SPARKLE_COUNT }, (_, i) => {
        const angle = phase + (i / SPARKLE_COUNT) * Math.PI * 2 + between(-0.3, 0.3);
        return {
            left: `${50 + Math.cos(angle) * between(30, 42)}%`,
            top: `${32 + Math.sin(angle) * between(22, 30)}%`,
            "--size": `${between(12, 28).toFixed(1)}px`,
            "--dur": `${between(2.2, 3.4).toFixed(2)}s`,
            "--delay": `${(-random() * 3.4).toFixed(2)}s`,
            "--spin": `${between(60, 140).toFixed(0)}deg`,
        };
    });

    // Embers drift up from the bottom edge and fade out before the top.
    // Negative delays start each one mid-flight, so the effect is already
    // "full" the moment the card scrolls in instead of ramping up.
    const embers: ParticleStyle[] = Array.from({ length: EMBER_COUNT }, () => ({
        left: `${between(4, 96)}%`,
        "--size": `${between(4, 9).toFixed(1)}px`,
        "--rise": `${between(130, 230).toFixed(0)}px`,
        "--drift": `${between(-24, 24).toFixed(0)}px`,
        "--dur": `${between(3.2, 5.6).toFixed(2)}s`,
        "--delay": `${(-random() * 5.6).toFixed(2)}s`,
    }));

    return { sparkles, embers };
}

function SparkleShape() {
    return (
        <svg viewBox="0 0 24 24" className="block w-full h-full" aria-hidden="true">
            <path
                fill="currentColor"
                d="M12 0C12.7 7.3 16.7 11.3 24 12 16.7 12.7 12.7 16.7 12 24 11.3 16.7 7.3 12.7 0 12 7.3 11.3 11.3 7.3 12 0Z"
            />
        </svg>
    );
}

/**
 * Static part of the highlight: the warm tint and golden inner rim. Cheap
 * enough to keep on every highlighted card, including off-screen ones, so a
 * card never changes colour as it enters the animation window.
 */
export function PlayableHighlightBase() {
    return (
        <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden rounded-lg pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/60 via-yellow-300/20 to-amber-400/30 dark:from-yellow-200/30 dark:via-yellow-300/20 dark:to-amber-500/40" />
            <div className="absolute inset-0 rounded-lg shadow-[inset_0_0_0_1.5px_rgba(245,158,11,0.55)] dark:shadow-[inset_0_0_0_1.5px_rgba(253,224,71,0.6)]" />
        </div>
    );
}

/**
 * Animated part of the highlight. Only mounted while the card is near the
 * viewport — the parent decides that.
 */
export function PlayableHighlightParticles({ seed }: { seed: string }) {
    const { sparkles, embers } = useMemo(() => buildParticles(seed), [seed]);

    const layerClass = "absolute inset-0 overflow-hidden rounded-lg pointer-events-none [--k:0.7] sm:[--k:1]";

    return (
        <>
            {/* Behind the icon (which is z-10). */}
            <div aria-hidden="true" className={`${layerClass} z-[5]`}>
                {/* Breathing glow behind the icon and along the rim. */}
                <div className="hl-anim hl-glow absolute left-1/2 top-[34%] h-[88%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.85),rgba(253,224,71,0.45)_45%,transparent)] dark:bg-[radial-gradient(closest-side,rgba(254,249,195,0.55),rgba(250,204,21,0.3)_45%,transparent)]" />
                <div className="hl-anim hl-rim absolute inset-0 rounded-lg shadow-[inset_0_0_18px_2px_rgba(251,191,36,0.55)] dark:shadow-[inset_0_0_22px_3px_rgba(253,224,71,0.45)]" />

                {/* Light sweep. */}
                <div className="hl-anim hl-sweep absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/70 to-transparent dark:via-white/40" />

                {embers.map((style, i) => (
                    <span
                        key={`e${i}`}
                        style={style}
                        className="hl-anim hl-ember absolute bottom-0 rounded-full bg-[radial-gradient(circle,#fff_0%,#fef08a_35%,rgba(251,191,36,0.9)_55%,rgba(251,191,36,0)_75%)]"
                    />
                ))}
            </div>

            {/* In front of the icon, so the sparkles can catch its edges. */}
            <div aria-hidden="true" className={`${layerClass} z-20`}>
                {sparkles.map((style, i) => (
                    <span
                        key={`s${i}`}
                        style={style}
                        className="hl-anim hl-sparkle absolute -translate-x-1/2 -translate-y-1/2 text-white"
                    >
                        {/* Soft halo, drawn with a gradient rather than a CSS
                            filter so it rides along in the same layer. */}
                        <span className="absolute inset-[-70%] rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.9),rgba(251,191,36,0.55)_40%,rgba(251,191,36,0)_100%)]" />
                        <span className="relative block w-full h-full">
                            <SparkleShape />
                        </span>
                    </span>
                ))}
            </div>
        </>
    );
}
