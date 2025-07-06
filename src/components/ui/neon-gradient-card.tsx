"use client";

import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import { cn } from "@/lib/utils";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the card
   * */
  as?: ReactElement;
  /**
   * @default ""
   * @type string
   * @description
   * The className of the card
   */
  className?: string;

  /**
   * @default ""
   * @type ReactNode
   * @description
   * The children of the card
   * */
  children?: ReactNode;

  /**
   * @default 5
   * @type number
   * @description
   * The size of the border in pixels
   * */
  borderSize?: number;

  /**
   * @default 20
   * @type number
   * @description
   * The size of the radius in pixels
   * */
  borderRadius?: number;

  /**
   * @default "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }"
   * @type string
   * @description
   * The colors of the neon gradient
   * */
  neonColors?: NeonColorsProps;

  [key: string]: unknown;
}

export const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined
  );

  const updateDimensions = useCallback(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  const debouncedUpdateDimensions = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(updateDimensions, 10);
  }, [updateDimensions]);

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", debouncedUpdateDimensions);

    // Use ResizeObserver to detect content changes
    let resizeObserver: ResizeObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    if (containerRef.current) {
      // ResizeObserver for detecting size changes
      if (typeof ResizeObserver !== "undefined") {
        resizeObserver = new ResizeObserver((entries) => {
          for (const entry of entries) {
            const { width, height } = entry.contentRect;
            setDimensions({ width, height });
          }
        });

        resizeObserver.observe(containerRef.current);
      }

      // MutationObserver for detecting DOM changes that might affect size
      mutationObserver = new MutationObserver(() => {
        // Use requestAnimationFrame to ensure DOM has been updated
        requestAnimationFrame(debouncedUpdateDimensions);
      });

      mutationObserver.observe(containerRef.current, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style"],
      });
    }

    return () => {
      window.removeEventListener("resize", debouncedUpdateDimensions);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      if (mutationObserver) {
        mutationObserver.disconnect();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [updateDimensions, debouncedUpdateDimensions]);

  useEffect(() => {
    if (containerRef.current) {
      const { offsetWidth, offsetHeight } = containerRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--card-width": `${dimensions.width}px`,
          "--card-height": `${dimensions.height}px`,
          "--card-content-radius": `${borderRadius - borderSize}px`,
          "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
          "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
          "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
          "--after-blur": `${dimensions.width / 3}px`,
        } as CSSProperties
      }
      className={cn(
        "relative z-10 size-full rounded-[var(--border-radius)]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative size-full min-h-[inherit] rounded-[var(--card-content-radius)] bg-gray-100 p-6",
          "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
          "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
          "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
          "before:animate-background-position-spin",
          "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
          "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
          "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
          "after:animate-background-position-spin",
          "dark:bg-neutral-900"
        )}
      >
        {children}
      </div>
    </div>
  );
};
