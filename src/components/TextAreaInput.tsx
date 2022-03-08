import { FC } from "react";
import CSS from "csstype";

const rootStyle: CSS.Properties = {
  border: "none",
  display: "flex",
  flexDirection: "column",
};

const labelStyle: CSS.Properties = {
  marginLeft: "8px",
  fontFamily: "arial",
  lineHeight: "16px",
  marginBottom: "2px",
};
const inputStyle: CSS.Properties = {
  border: "1px solid #A6A6A6",
  borderRadius: "8px",
  padding: "8px",
  resize: "none",
};

interface IProps {
  disabled?: boolean;
  label?: string;
  onChangeValue: Function;
  style?: CSS.Properties;
  placeholder?: string;
}

const TextInput: FC<IProps> = ({
  onChangeValue,
  style,
  label,
  disabled,
  ...restProps
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    onChangeValue(event.target.value);

  return (
    <div style={rootStyle} {...restProps}>
      <span style={labelStyle}>{label}</span>
      <textarea
        disabled={disabled}
        rows={5}
        onChange={handleChange}
        style={{ ...inputStyle, ...style }}
        {...restProps}
      />
    </div>
  );
};

export default TextInput;
