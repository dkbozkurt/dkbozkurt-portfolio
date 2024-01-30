import React from 'react'
type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({
children }: SectionHeadingProps) {
  return (
    <h2 
    className = "mt-10 mb-8 text-3xl font-medium text-center capitalize sm:mt-0">
        {children}
    </h2>
  )
}
