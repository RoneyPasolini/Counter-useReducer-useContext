import Input from "../Input/Input";

const InputDiv = ({ title, value, onInput, ...props }) => {
  return (
    <div>
      <div>{title}</div>
      <Input {...props} value={value} onInput={onInput} />
    </div>
  );
};

export default InputDiv;
