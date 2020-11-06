import React from "react"

interface IThemedButton {
  children?: React.ReactNode;
  customClasses?: String[];
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
  type: "button" | "submit" | undefined;
  disabled?: boolean;
}

const ThemedButton: React.FC<IThemedButton> = ({
  children,
  customClasses,
  onClick,
  type,
  disabled,
}) => {
  let classes = "themedButton ";
  if (customClasses) {
    classes += customClasses?.map((customClass) => customClass + " ");
  }
  return (
    <button
      className={classes}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ThemedButton;
