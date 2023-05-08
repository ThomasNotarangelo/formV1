import Input from "./Input";

const Form = ({
  name,
  email,
  password,
  confirmPassword,
  setName,
  setEmail,
  setPassword,
  setConfirmPassword,
  setStep,
}) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (confirmPassword === password) {
          setStep(2);
        } else {
          alert("Vos mots de passes ne sont pas identiques");
        }
      }}
    >
      <h1>Create Account</h1>
      <Input
        title="Name"
        type="text"
        value={name}
        placeholder="John Wick"
        setState={setName}
      />
      <Input
        title="Email"
        type="email"
        value={email}
        placeholder="johnwick@lereacteur.io"
        setState={setEmail}
      />
      <Input
        title="Password"
        type="password"
        value={password}
        placeholder="C4o3t2i1nenTal"
        setState={setPassword}
      />
      <Input
        title="Confirm your Password"
        type="password"
        value={confirmPassword}
        placeholder="C4o3t2i1nenTal"
        setState={setConfirmPassword}
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Form;
