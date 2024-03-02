"use client"

import { links } from "@/lib/data";
import { useState, createContext, useContext } from "react";

type SectionName = typeof links[number]["name"];

type ActiveSectionProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
}

export const SectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContext({ children }: ActiveSectionProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionContext.Provider>
    )
}

export function useActiveSection() {
    const context = useContext(SectionContext);

    if (context === null) {
        throw new Error(
            "useActiveSection must be used within Provider."
        )
    }

    return context;
}