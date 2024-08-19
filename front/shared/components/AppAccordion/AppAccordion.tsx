import React, { useState, useId, PropsWithChildren, useRef, useEffect } from "react";
import { clsx } from "clsx";

type CommonProps = {
  title: string;
  className?: string;
  titleUppercase?: boolean;
  anchor: string;
};

type ControlledProps = {
  uncontrolled?: false;
  open: boolean;
  setOpen: (value: boolean) => void;
} & CommonProps;

type UncontrolledProps = {
  uncontrolled: true;
  defaultOpen?: boolean;
} & CommonProps;

type Props = PropsWithChildren<ControlledProps | UncontrolledProps>;

export const AppAccordion: React.FC<Props> = ({
  title,
  anchor,
  titleUppercase = false,
  className = "",
  children,
  ...props
}) => {
  const controlId = useId();

  const [localOpen, setLocalOpen] = useState(props.uncontrolled ? props.defaultOpen : false);

  const [height, setHeight] = useState<number>();

  const open = props.uncontrolled ? localOpen : props.open;

  const setOpen = props.uncontrolled ? setLocalOpen : props.setOpen;

  const elementRef = useRef<HTMLDivElement>(null);

  const panelStyle = { ...(Boolean(open) && { maxHeight: height ?? 5000 }) };

  useEffect(() => {
    const defaultMinHeight = 250;

    setHeight(
      Math.max(
        elementRef.current?.getBoundingClientRect().height ?? 0,
        elementRef.current?.scrollHeight ?? 0
      ) + defaultMinHeight
    );
  }, [elementRef]);

  return (
    <div className={clsx("bordered-card bg-white", className)} id={anchor}>
      <button
        className='flex justify-between items-center w-full text-start gap-4 p-4 md:p-8'
        aria-expanded={open}
        {...(open ? { "aria-controls": controlId } : {})}
        onClick={() => setOpen(!open)}
      >
        <span
          className={clsx(
            "font-sans-inter text-black text-lg whitespace-break-spaces",
            {
              uppercase: titleUppercase
            }
          )}
        >
          {title}
        </span>
        <span
          className={clsx(
            "w-[24px] h-[12px] shrink-0 bg-dropdown-arrow bg-no-repeat bg-center transition-transform",
            {
              "rotate-180": open
            }
          )}
          aria-hidden='true'
        />
      </button>

      <div
        className='overflow-hidden transition-[max-height] duration-1000 max-h-0'
        style={panelStyle}
        id={controlId}
      >
        <div className='p-4 pt-6 md:p-8 md:pt-2' ref={elementRef}>
          {children}
        </div>
      </div>
    </div>
  );
};
