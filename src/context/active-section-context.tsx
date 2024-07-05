"use client"
import React, { createContext, useContext, useState } from 'react'
import { links } from '../../lib/data'


type SectionNames = typeof links[number]['name'];
type ActiveSectionContext = {
  activeSection: SectionNames;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNames>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;

};

export const ActiveSectionContext = createContext<ActiveSectionContext | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const [activeSection, setActiveSection] = useState<SectionNames>('Home')
  const [timeOfLastClick, setTimeOfLastClick] = useState(0)  

  return (
  <ActiveSectionContext.Provider
  value={{
    activeSection,
    setActiveSection,
    timeOfLastClick,
    setTimeOfLastClick
  }}
  >{children} 
  </ActiveSectionContext.Provider>) 
}

export const useActiveSection = () => {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error('useActiveSection must be used within an ActiveSectionContextProvider');
  }
  return context;
}