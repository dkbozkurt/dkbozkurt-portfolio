"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { certificatesData } from "@/lib/data";
import Certificate from "./certificate";
import { useSectionInView } from '@/lib/hooks';

export default function Certificates() {
    const {ref} = useSectionInView("Certificates",0.5);

  return (
    <section
    ref ={ref}
    className="scroll-mt-28 mb-28"
    id="certificates">
        <SectionHeading>
            Certificates
        </SectionHeading>
        <div>
            {
                certificatesData.map((certificate, index) => (
                    <React.Fragment key={index}>
                        <Certificate {...certificate} />
                    </React.Fragment>
                ))
            }
        </div>
    </section>
  )
}

