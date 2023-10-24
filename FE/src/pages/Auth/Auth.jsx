import FormLogin from "../../components/FormLogin";
import FormRegister from "../../components/FormRegister";

function Auth({ login, register }) {
  return (
    <>
      {login && <FormLogin></FormLogin>}
      {register && <FormRegister></FormRegister>}
    </>
  );
}

export default Auth;
