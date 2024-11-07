import clsx from "clsx";

type Props = {
  title: string;
  className?: string;
  onButtonClick?: ()=> void;
};

export const Button: React.FC<Props> = ( {title, className="", onButtonClick })=> {
    return (
        <button onClick={onButtonClick} aria-label="Узнать подробнее" className={clsx("bg-[#d1baba] h-[35px] rounded-2 w-[100px] text-primary md:w-[200px] md:text-[22px]", className)} >
            {title}
        </button>
    )
};

