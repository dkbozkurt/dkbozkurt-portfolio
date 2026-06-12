import { playableAdsData } from "./data";

/**
 * Deterministic short id derived from a playable's URL.
 * Stable across reloads/deploys — the same playable always gets the same id,
 * so shareable links keep working.
 *
 * Algorithm: djb2 hash → unsigned 32-bit → base36, last 6 chars.
 * 36^6 ≈ 2.1B possible values; collision risk is negligible for ~120 entries.
 */
export function getPlayableId(url: string): string {
    let hash = 5381;
    for (let i = 0; i < url.length; i++) {
        hash = ((hash << 5) + hash + url.charCodeAt(i)) | 0;
    }
    const unsigned = hash >>> 0;
    return unsigned.toString(36).padStart(6, "0").slice(-6);
}

export function findPlayableById(id: string) {
    return playableAdsData.find((p) => getPlayableId(p.url) === id);
}

/**
 * We embed the play id inside the URL fragment so the section anchor
 * (#playableAds) stays first, e.g. /#playableAds?play=ab12cd
 */
const PLAY_HASH_RE = /^#playableAds\?play=([A-Za-z0-9]+)/;

export function parsePlayIdFromHash(hash: string): string | null {
    const m = hash.match(PLAY_HASH_RE);
    return m ? m[1] : null;
}

export function buildPlayableHash(id: string): string {
    return `#playableAds?play=${id}`;
}

export const PLAYABLE_SECTION_HASH = "#playableAds";
