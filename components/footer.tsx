import React from 'react'

export default function Footer() {
  return (
    // The "ğ" below is the only character on the page outside Inter's
    // preloaded latin subset, and it pulls in the 85 KB latin-ext file.
    // `content-visibility: auto` skips laying out the footer until it is near
    // the viewport, so that download waits until the visitor scrolls down
    // instead of competing with the hero on first load. The intrinsic sizes
    // are the footer's measured height per breakpoint, so the page doesn't
    // change length when it renders.
    <footer
    className='px-4 mb-10 text-center text-gray-500 [content-visibility:auto] [contain-intrinsic-size:auto_4.75rem] sm:[contain-intrinsic-size:auto_3.75rem] lg:[contain-intrinsic-size:auto_2.75rem]'
    >
        <small
        className="block mb-2 text-s"
        >
            &copy; 2024 Doğukan Kaan Bozkurt. All rights reserved.
        </small>
        <p
        className="text-xs"
        >
            <span className="font-semibold">About this website:</span> built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
        </p>
    </footer>
  )
}
