"use client"

import React, { useState } from "react"
import { cn } from "@/lib/utils"

interface SimpleSheetProps {
  children: React.ReactNode
}

interface SimpleSheetTriggerProps {
  asChild?: boolean
  children: React.ReactNode
}

interface SimpleSheetContentProps {
  side?: "left" | "right"
  className?: string
  children: React.ReactNode
}

const SimpleSheetContext = React.createContext<{
  open: boolean
  setOpen: (open: boolean) => void
}>({
  open: false,
  setOpen: () => {},
})

export function SimpleSheet({ children }: SimpleSheetProps) {
  const [open, setOpen] = useState(false)

  return <SimpleSheetContext.Provider value={{ open, setOpen }}>{children}</SimpleSheetContext.Provider>
}

export function SimpleSheetTrigger({ asChild, children }: SimpleSheetTriggerProps) {
  const { setOpen } = React.useContext(SimpleSheetContext)

  const handleClick = () => setOpen(true)

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
    })
  }

  return <button onClick={handleClick}>{children}</button>
}

export function SimpleSheetContent({ side = "right", className, children }: SimpleSheetContentProps) {
  const { open, setOpen } = React.useContext(SimpleSheetContext)

  if (!open) return null

  const sideClasses = {
    left: "left-0",
    right: "right-0",
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/50" onClick={() => setOpen(false)} />

      {/* Sheet */}
      <div
        className={cn(
          "fixed top-0 z-50 h-full bg-background shadow-lg transition-transform",
          sideClasses[side],
          className,
        )}
      >
        {children}
      </div>
    </>
  )
}
