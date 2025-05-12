// Simple motion library wrapper to conditionally import framer-motion on client
// with fallbacks for server components

"use client"

import React from "react"

let motion = {
  div: React.forwardRef((props: any, ref) => React.createElement("div", { ...props, ref })),
  h1: React.forwardRef((props: any, ref) => React.createElement("h1", { ...props, ref })),
  h2: React.forwardRef((props: any, ref) => React.createElement("h2", { ...props, ref })),
  h3: React.forwardRef((props: any, ref) => React.createElement("h3", { ...props, ref })),
  p: React.forwardRef((props: any, ref) => React.createElement("p", { ...props, ref })),
  span: React.forwardRef((props: any, ref) => React.createElement("span", { ...props, ref })),
  button: React.forwardRef((props: any, ref) => React.createElement("button", { ...props, ref })),
  a: React.forwardRef((props: any, ref) => React.createElement("a", { ...props, ref })),
  ul: React.forwardRef((props: any, ref) => React.createElement("ul", { ...props, ref })),
  li: React.forwardRef((props: any, ref) => React.createElement("li", { ...props, ref })),
  section: React.forwardRef((props: any, ref) => React.createElement("section", { ...props, ref })),
}

// Only import framer-motion on the client
if (typeof window !== "undefined") {
  // Dynamic import to avoid SSR issues
  import("framer-motion").then((mod) => {
    motion = mod.motion
  }).catch((err) => {
    console.error("Failed to load framer-motion", err)
  })
}

export { motion }