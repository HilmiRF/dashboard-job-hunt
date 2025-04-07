import { Button } from "@/components/ui/button";
import React, { FC, ReactNode } from "react";

interface SidebarComponentProps {
  children: ReactNode;
  className: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const SidebarComponent: FC<SidebarComponentProps> = ({
  children,
  className,
  onClick,
}) => {
  return (
    <>
      <Button variant="ghost" onClick={onClick} className={className}>
        {children}
      </Button>
    </>
  );
};

export default SidebarComponent;
