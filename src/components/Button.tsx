import { FC, MouseEventHandler, useState } from "react";
import CSS from "csstype";

const rootStyle: CSS.Properties = {
  //remove default style
  background: "none",
  color: "inherit",
  border: "none",
  padding: "0",
  font: "inherit",
  outline: "inherit",
  height: "24px",

  backgroundColor: "#a0ffa0",
  borderRadius: "8px",
  textAlign: "center",
  cursor: "pointer",
};

const textStyle: CSS.Properties = {
  fontFamily: "arial",
  lineHeight: "24px",
  userSelect: "none",
};

const mouseUpShadowStyle: CSS.Properties = {
  boxShadow: "1px 1px 3px #c0c0c0",
};
const mouseDownShadowStyle: CSS.Properties = {
  boxShadow: "inset 1px 1px 3px #c0c0c0",
};

interface IProps {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: FC<IProps> = ({ text, onClick, ...restProps }) => {
  const [mouseDown, setMouseDown] = useState(false);

  return (
    <button
      style={{
        ...rootStyle,
        ...mouseUpShadowStyle,
        ...(mouseDown && mouseDownShadowStyle),
      }}
      onClick={onClick}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
      onMouseOut={() => setMouseDown(false)}
      {...restProps}
    >
      <span style={textStyle}>{text}</span>
    </button>
  );
};

export default Button;
