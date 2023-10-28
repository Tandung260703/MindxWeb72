import { Link } from "react-router-dom";
import FormInput from "../FormInput";
import { loginUser } from "../../redux/slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FormLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("CURRENT_USER")) {
      navigate("/login");
    } else {
      navigate("/admin");
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const password = e.target[1].value;

    console.log({ username, password });

    loginUser({ username, password }, dispatch, navigate);
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
          <span className="block mt-2">
            Bạn chưa có tài khoản ?{" "}
            <Link to="/register" className="text-blue-500">
              Đăng ký ngay
            </Link>
          </span>
          <button
            type="submit"
            className="bg-blue-500 p-2 rounded-lg text-white mt-2"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
