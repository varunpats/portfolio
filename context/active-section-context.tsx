"use client"

import type { SectionName } from "@/lib/types";
import { useState, createContext, useContext } from "react";

type ActiveSectionProps = {
    children: React.ReactNode
}

type ActiveSectionContextType = {
    activeSection: SectionName;
    setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
    timeOfLastClick: number;
    setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
}

export const SectionContext = createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContext({ children }: ActiveSectionProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home');
    const [timeOfLastClick, setTimeOfLastClick] = useState(0);

    return (
        <SectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>
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