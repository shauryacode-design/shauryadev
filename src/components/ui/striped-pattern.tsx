
import React, { useId } from "react";

interface StripedPatternProps
  extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right";
}

export function StripedPattern({
  className,
  width = 14,
  height = 14,
  ...props
}: StripedPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={`striped-pattern ${className ?? ""}`}
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={Number(width)}
          height={Number(height)}
          patternUnits="userSpaceOnUse"
        >
          <line
            x1={Number(width) / 2}
            y1="0"
            x2={Number(width) / 2}
            y2={Number(height)}
            stroke="currentColor"
            strokeWidth="0.08"
          />
        </pattern>
      </defs>

      <rect
        width="100%"
        height="100%"
        fill={`url(#${id})`}
      />
    </svg>
  );
}
