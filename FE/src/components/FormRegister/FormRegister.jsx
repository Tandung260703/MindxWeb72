import { Link } from "react-router-dom";
import FormInput from "../FormInput";

function FormRegister() {
  const handleLogin = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    console.log({ username, password });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('/img')]">
      <div className="w-[500px] p-3 rounded-lg ">
        <div className="text-center mb-4">
          <h1 className="text-center text-2xl font-bold">D Store</h1>
          <span className="text-center">
            Cửa hàng bán đồ công nghệ uy tín nhất <strong>Việt Nam</strong>
          </span>
        </div>
        <form onSubmit={handleLogin}>
          <FormInput className="mb-2" label="Tên đăng nhập"></FormInput>
          <FormInput type="password" label="Mật khẩu"></FormInput>
          <FormInput type="password" label="Mật khẩu xác nhận"></FormInput>
          <span className="block mt-2">
            Bạn đã có tài khoản ?{" "}
            <Link to="/login" className="text-blue-500">
              Đăng nhập ngay
            </Link>
          </span>
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-lg text-white mt-2"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormRegister;
