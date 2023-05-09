import Input from "./Input";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
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
      <div>
        <Input
          title="Password"
          type={showPassword ? "text" : "password"}
          // type="password"
          value={password}
          placeholder="C4o3t2i1nenTal"
          setState={setPassword}
        />
        <FontAwesomeIcon
          icon="eye"
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
        <Input
          title="Confirm your Password"
          type={showConfirmPassword ? "text" : "password"}
          // type="password"
          value={confirmPassword}
          placeholder="C4o3t2i1nenTal"
          setState={setConfirmPassword}
        />
        <FontAwesomeIcon
          icon="eye"
          onClick={() => {
            setShowConfirmPassword(!showConfirmPassword);
          }}
        />
      </div>
      <button className="register-button" type="submit">
        Register
      </button>
    </form>
  );
};

export default Form;
