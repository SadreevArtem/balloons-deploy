import React, { useState, ReactNode } from "react";
import { clsx } from "clsx";
import { AppAccordion } from "../AppAccordion/AppAccordion";

type Props<T extends { id?: number; name?: string }> = {
  items: T[];
  accordionContentSlot: (item: T) => ReactNode;
  titleUppercase?: boolean;
  className?: string;
  isFirstOpen?: boolean;
  uncontrolled?: boolean;
};

export const AppAccordionGroup = <T extends { id?: number; name?: string; anchor: string; }>({
  items,
  accordionContentSlot,
  titleUppercase = false,
  className = "",
  isFirstOpen = true,
  uncontrolled = false
}: Props<T>) => {
  const [activeItemId, setActiveItemId] = useState<number | null | undefined>(
    isFirstOpen ? items[0]?.id ?? null : null
  );

  return (
    <div className={clsx("space-y-6", className)}>
      {items.map((item) => (
        <AppAccordion
          key={item.id}
          open={activeItemId === item.id}
          setOpen={() => setActiveItemId(activeItemId === item.id ? null : item.id)}
          title={item.name ?? ""}
          anchor={item.anchor||""}
          titleUppercase={titleUppercase}
          uncontrolled={uncontrolled}
        >
          {accordionContentSlot(item)}
        </AppAccordion>
      ))}
    </div>
  );
};
