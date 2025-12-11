// components/AdvancedGridLines.jsx
import React from "react";

export default function AdvancedGridLines({
  vertical = 20,
  horizontal = 12,
}) {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Fade mask for edges */}
        <linearGradient id="fadeMaskV" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="20%" stopOpacity="1" />
          <stop offset="80%" stopOpacity="1" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>

        <linearGradient id="fadeMaskH" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopOpacity="0" />
          <stop offset="15%" stopOpacity="1" />
          <stop offset="85%" stopOpacity="1" />
          <stop offset="100%" stopOpacity="0" />
        </linearGradient>

        {/* Very thin, grey lines (Bloomberg style) */}
        <style>
          {`
            .vline, .hline {
              stroke: rgba(0,0,0,0.12);
              shape-rendering: crispEdges;
            }
          `}
        </style>
      </defs>

      {/* Vertical gridlines */}
      {[...Array(vertical)].map((_, i) => {
        const x = (i / (vertical - 1)) * 100;
        return (
          <line
            key={`v-${i}`}
            x1={`${x}%`}
            y1="0%"
            x2={`${x}%`}
            y2="100%"
            className="vline"
            strokeWidth="1"
            mask="url(#fadeMaskH)"
          />
        );
      })}

      {/* Horizontal gridlines */}
      {[...Array(horizontal)].map((_, i) => {
        const y = (i / (horizontal - 1)) * 100;
        return (
          <line
            key={`h-${i}`}
            x1="0%"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            className="hline"
            strokeWidth="1"
            mask="url(#fadeMaskV)"
          />
        );
      })}
    </svg>
  );
}
