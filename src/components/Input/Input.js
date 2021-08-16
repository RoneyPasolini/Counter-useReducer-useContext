const Input = ({ title, value, onInput, ...props }) => {
  return (
    <input
      {...props}
      value={value} //é o valor que aparece no input da pagina
      onInput={(event) => {
        onInput(event.target.value);
      }}
    />
  );
};

export default Input;
