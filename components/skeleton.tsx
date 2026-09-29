import React from "react";

/**
 * Shared loading placeholder.
 *
 * The sweep is a child element rather than an animated `background-position`
 * so it only ever composites a transform — the playables grid can show a
 * couple of hundred of these at once without the main thread noticing.
 */
export function Skeleton({
    className = "",
    animate = true,
}: {
    className?: string;
    /**
     * Off-screen placeholders pass `false`: they still reserve layout, but a
     * shimmer nobody can see is wasted compositing.
     */
    animate?: boolean;
}) {
    // Callers overlaying an image pass `absolute`. Adding `relative` as well
    // would win (Tailwind emits it later), leaving the placeholder in-flow and
    // zero-height. Either one positions the shimmer child.
    const position = /(^|\s)(absolute|fixed)(\s|$)/.test(className) ? "" : "relative";

    return (
        <div
            aria-hidden="true"
            className={`${position} overflow-hidden bg-gray-200/80 dark:bg-white/[0.08] ${className}`}
        >
            {animate && (
                <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent motion-reduce:animate-none dark:via-white/10" />
            )}
        </div>
    );
}
