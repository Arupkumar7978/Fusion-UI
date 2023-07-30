import React from "react";
import "./Typography.css";

interface TypographyProps {
  variant?: "display" | "body" | "heading" | "link";
  size?: "extraSmall" | "small" | "medium" | "large" | "extraLarge";
  childreen: React.ReactNode;
  mandatory?: boolean;
  disabled?: boolean;
}

const Typography = ({
  variant = "body",
  size = "medium",
  childreen,
  mandatory = false,
  disabled = false,
  ...props
}: TypographyProps) => {
  return (
    <span
      className={[
        "typography",
        `typography--${variant}`,
        `typography--${size}`,
      ].join(" ")}
      {...props}
    >
      {childreen}
      {mandatory && <span className="typography--mandatory">*</span>}
    </span>
  );
};

export default Typography;
