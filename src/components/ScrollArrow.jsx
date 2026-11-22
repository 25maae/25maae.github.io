import { useLayoutEffect, useRef, useState } from "react";

export default function ScrollArrow() {
  const container = useRef(null);
  const [path, setPath] = useState("");

  useLayoutEffect(() => {
    const element = container.current;
    function measure() {
      const { width, height } = element.getBoundingClientRect();
      setPath(`M ${width} 0 H 8 Q 0 0 0 8 V ${height}`);
    }
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <span className="scroll-cue" aria-hidden="true" ref={container}>
      {path && (
        <svg>
          <path d={path} pathLength="1" strokeDasharray="1 1">
            <animate attributeName="stroke-dashoffset" values="1;0;-1;-1"
              keyTimes="0;0.336842;0.561404;1" dur="4.56s" repeatCount="indefinite" />
          </path>
          <g>
            <animateMotion path={path} rotate="auto" calcMode="linear"
              keyPoints="0;1;1" keyTimes="0;0.336842;1" dur="4.56s" repeatCount="indefinite" />
            <path d="M-6 -6 L0 0 L-6 6">
              <animate attributeName="opacity" values="1;1;0;0" keyTimes="0;0.547368;0.561404;1"
                dur="4.56s" repeatCount="indefinite" />
            </path>
          </g>
        </svg>
      )}
    </span>
  );
}
