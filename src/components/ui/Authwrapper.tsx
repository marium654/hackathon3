"use client"

import { AuthModal } from "./Authmodel"
import type React from "react"

export function AuthWrapper({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <AuthModal />
        </>
    )
}