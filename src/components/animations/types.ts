import React, { type ElementType, type RefObject } from "react";

export interface AnimatedTextProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  useScrollTrigger?: boolean;
  scrollTriggerOpt?: {
    trigger: RefObject<HTMLElement>;
  };
  as?: ElementType;
}
