import FormInput from "../FormInput";

function FormLogin() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[500px]">
        <div className="text-center mb-4">
          <h1 className="text-center text-2xl font-bold">D Store</h1>
          <span className="text-center">
            Cửa hàng bán đồ công nghệ uy tín nhất <strong>Việt Nam</strong>
          </span>
        </div>
        <form>
          <FormInput className="mb-2" label="Tên đăng nhập"></FormInput>
          <FormInput label="Mật khẩu"></FormInput>
          <button className="bg-blue-500 p-2 rounded-lg text-white mt-2">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default FormLogin;
