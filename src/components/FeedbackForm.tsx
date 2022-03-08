import TextInput from "./TextInput";
import TextAreaInput from "./TextAreaInput";
import { useState } from "react";
import Button from "./Button";
import CSS from "csstype";

const rootStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
};

interface IProps {
  style?: CSS.Properties;
  onSubmit: Function;
}

interface IState {
  review: {
    name: string;
    email: string;
    rating: string;
    feedback?: string;
  };
}

const FeedbackForm: React.FC<IProps> = ({ style, onSubmit, ...restProps }) => {
  const [formValues, setFormValues] = useState<IState["review"]>({
    name: "",
    email: "",
    rating: "",
    feedback: "",
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const onSuccess = () => setLoading(false);

  const onFail = (errorMessage: string) => setErrorMessage(errorMessage);

  const handleSubmit = () => {
    setLoading(true);
    onSubmit(formValues, onSuccess, onFail);
    console.log(formValues);
  };

  return (
    <div style={{ ...rootStyle, ...style }} {...restProps}>
      <TextInput
        label="name"
        placeholder="john smith"
        style={{ marginBottom: "8px" }}
        disabled={loading}
        onChangeValue={(newValue: string) =>
          setFormValues((currentValues) => ({
            ...currentValues,
            name: newValue,
          }))
        }
      />
      <TextInput
        label="email"
        placeholder="jsmith@gmail.com"
        style={{ marginBottom: "8px" }}
        disabled={loading}
        onChangeValue={(newValue: string) =>
          setFormValues((currentValues) => ({
            ...currentValues,
            email: newValue,
          }))
        }
      />
      <TextInput
        label="rating"
        placeholder="5"
        style={{ marginBottom: "8px" }}
        disabled={loading}
        onChangeValue={(newValue: string) =>
          setFormValues((currentValues) => ({
            ...currentValues,
            rating: newValue,
          }))
        }
      />
      <TextAreaInput
        label="feedback"
        placeholder="the doughnuts were on point"
        style={{ marginBottom: "8px" }}
        disabled={loading}
        onChangeValue={(newValue: string) =>
          setFormValues((currentValues) => ({
            ...currentValues,
            feedback: newValue,
          }))
        }
      />
      <Button text="submit" disabled={loading} onClick={handleSubmit} />
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default FeedbackForm;
