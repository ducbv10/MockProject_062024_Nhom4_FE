import { UserLogin } from "@/types/User";
import request from "@/utils/request";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const logo = './src/assets/logo.png';
  const navigate = useNavigate();

  const onFinish = async (values: UserLogin[]) => {
    try {
      await request({
        method: 'post',
        serverType: 'node',
        data: values,
        apiEndpoint: 'v1/user/login',
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Form className="flex flex-col mt-10 space-y-5 p-4 md:p-6 lg:p-8 shadow-md rounded-md bg-gray-50"
        onFinish={onFinish}
      >
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3">
          <div className="bg-[#B7201B] w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px] flex justify-center items-center">
            <img src={logo} alt="Logo" className="w-5/6" />
          </div>
          <div className="text-center">
            <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[#B7201B]">
              Auction
            </p>
            <p className="font-bold text-[18px] md:text-[20px] lg:text-[24px] text-[#B7201B]">
              BIDMASTER
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-2">
          <p className="text-[16px] md:text-[18px] lg:text-[20px]">
            Do not have an account?
          </p>
          <button
            onClick={() => {
              navigate('/signup');
            }}
            className="text-[16px] md:text-[18px] lg:text-[20px] font-bold"
          >
            Register now
          </button>
        </div>
        <Form.Item
        name='email'
        label='Email'>
          <div className="flex flex-col justify-center space-y-1">
            <Input placeholder="Email" />
          </div>
        </Form.Item>
        <Form.Item
          name='password'
          label='Password'>
        <div className="flex flex-col justify-center space-y-1">
            <Input placeholder="Password" />
        </div>
        </Form.Item>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-1">
            <input type="checkbox" name="saveLogin" />
            <label htmlFor="saveLogin" className="text-[14px] md:text-[16px] lg:text-[18px]">
              Save login
            </label>
          </div>
          <button className="text-[#B7201B] font-bold text-[14px] md:text-[16px] lg:text-[18px]">
            Forgot password?
          </button>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#B7201B] w-full md:w-[350px] lg:w-[450px] px-3 py-2 rounded-[10px] text-white font-bold text-[14px] md:text-[16px] lg:text-[18px]"
          type="submit">
            LOG IN
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
