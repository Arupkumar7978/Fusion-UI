import React, { useState } from "react";
import "./textField.css";

interface TextFieldProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: "outlined" | "filled" | "standard";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const TextField: React.FC<TextFieldProps> = ({
  variant = "outlined",
  size = "medium",
  backgroundColor,
  label,
  ...props
}: TextFieldProps) => {
  const [hasContent, setHasContent] = useState(false);

  const handleFocus = () => {
    setHasContent(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    if (!event.target.value) {
      setHasContent(false);
    }
  };
  return (
    <div className="fusion">
      <input
        type="text"
        id="outlined"
        className={[
          "fusion-input",
          `fusion-input--${size}`,
          `fusion-input--${variant}`,
        ].join(" ")}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <label
        htmlFor="outlined"
        className={
          variant === "standard"
            ? `fusion-label-standred--${size}`
            : [`fusion-label ${hasContent ? "has-content" : ""}`].join("")
        }
      >
        {label}
      </label>
    </div>
  );
};
