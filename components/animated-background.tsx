"use client"

import type React from "react"

interface AnimatedBackgroundProps {
  color?: string
  speed?: number
  opacity?: number
}

export const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
  color = "#06b6d4",
  speed = 0.8,
  opacity = 0.4,
}) => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: `radial-gradient(circle at 20% 50%, ${color}${Math.round(opacity * 255)
            .toString(16)
            .padStart(2, "0")} 0%, transparent 50%), 
                      radial-gradient(circle at 80% 20%, ${color}${Math.round(opacity * 255)
                        .toString(16)
                        .padStart(2, "0")} 0%, transparent 50%), 
                      radial-gradient(circle at 40% 80%, ${color}${Math.round(opacity * 255)
                        .toString(16)
                        .padStart(2, "0")} 0%, transparent 50%)`,
          animationDuration: `${4 / speed}s`,
        }}
      />
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          background: `radial-gradient(circle at 60% 30%, ${color}${Math.round(opacity * 128)
            .toString(16)
            .padStart(2, "0")} 0%, transparent 60%), 
                      radial-gradient(circle at 30% 70%, ${color}${Math.round(opacity * 128)
                        .toString(16)
                        .padStart(2, "0")} 0%, transparent 60%)`,
          animationDuration: `${6 / speed}s`,
          animationDelay: "1s",
        }}
      />
    </div>
  )
}

export default AnimatedBackground
