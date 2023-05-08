const Input = ({ type, value, placeholder, setState, title }) => {
  return (
    <>
      <p>{title}</p>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => {
          setState(event.target.value);
        }}
      />
    </>
  );
};

export default Input;
