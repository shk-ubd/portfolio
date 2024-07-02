import { useActiveSection } from "@/context/active-section-context"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

import {links} from '../lib/data'

type SectionNames = typeof links[number]['name'];

export const useSectionInView = (sectionName: SectionNames, threshold = 0.75) => {
    const { ref, inView } = useInView({
        threshold,
      })
      const { timeOfLastClick, setActiveSection } = useActiveSection()
      
      useEffect(() => {
        if(inView && Date.now() - timeOfLastClick > 1000){
          setActiveSection(sectionName)
        }
      }
      ,[inView, setActiveSection, timeOfLastClick, sectionName])
      return (
        ref
      )
}