import clsx from "clsx";
import { ReactNode } from "react";
import { Button } from "../ui/button";

interface AnimatedButtonProps {
  id: string;
  title: string;
  rightIcon?: ReactNode;
  leftIcon?: ReactNode;
  containerClass?: string;
}

const AnimatedButton = ({ id, title, rightIcon, leftIcon, containerClass } : AnimatedButtonProps) => {
  return (
    <Button
      id={id}
      className={clsx(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-lg px-5",
        containerClass
      )}
    >
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </Button>
  );
};

export default AnimatedButton;
