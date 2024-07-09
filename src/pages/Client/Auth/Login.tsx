import React, { useState } from "react";
import { Modal, Form } from "antd";
// import Logo from '@/assets/images/';

const LoginForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        onClick={showModal}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Open Modal
      </button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        className="modal-responsive"
      >
        <Form className="flex flex-col mt-5 space-y-5 p-4 md:p-6 lg:p-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-3">
            <div className="bg-[#B7201B] w-[80px] h-[80px] md:w-[100px] md:h-[100px] lg:w-[120px] lg:h-[120px]">
              {/* <img src={Logo} alt="" className="font-bold" /> */}
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
                alert("haha");
              }}
              className="text-[16px] md:text-[18px] lg:text-[20px] font-bold"
            >
              Register now
            </button>
          </div>
          <div className="flex flex-col justify-start space-y-1">
            <p className="text-[grey] text-[14px] md:text-[16px] lg:text-[18px]">
              Username/Email
            </p>
            <input
              type="text"
              placeholder="Username/Email"
              className="border-2 w-full h-[30px] md:h-[35px] lg:h-[40px] rounded-[5px]"
            />
          </div>
          <div className="flex flex-col justify-start space-y-1">
            <p className="text-[grey] text-[14px] md:text-[16px] lg:text-[18px]">
              Password
            </p>
            <input
              type="password"
              placeholder="Password"
              className="border-2 w-full h-[30px] md:h-[35px] lg:h-[40px] rounded-[5px]"
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-1">
              <input type="checkbox" />
              <p className="text-[14px] md:text-[16px] lg:text-[18px]">
                Save login
              </p>
            </div>
            <button className="text-[#B7201B] font-bold text-[14px] md:text-[16px] lg:text-[18px]">
              Forgot password?
            </button>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#B7201B] w-full md:w-[350px] lg:w-[450px] px-3 py-2 rounded-[10px] text-white font-bold text-[14px] md:text-[16px] lg:text-[18px]">
              LOG IN
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default LoginForm;
