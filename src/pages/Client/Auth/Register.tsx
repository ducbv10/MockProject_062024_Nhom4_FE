import React, { useState } from "react";
import "./register.css";
import { Button, Col, Form, Input, Row, Select } from "antd";
const { Option } = Select;

// const formItemLayout = {
//   labelCol: {
//     xs: { span: 24 },
//   },
//   wrapperCol: {
//     xs: { span: 24 },
//   },
// };

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
  },
};
const logoRegister = './src/assets/images/logoRegister.png'
const closerIcon = './src/assets/images/closerIcon.png'

function Register() {
  const [form] = Form.useForm();
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false); 
  };
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  return (
    <>
      {isOpen && (
        <div className="flex flex-col items-center ms:w-screen min-h-screen bg-black bg-opacity-90 z-0">
          <div className="w-full max-w-2xl lg:max-w-max md:max-h-max md:mx-4 md:w-full sm:max-h-max sm:mx-4 sm:w-full lg:h-full bod sm:my-1  items-center z-50 bg-white rounded-2xl shadow-sm">
            <div className="px-4 py-2">
              <div className=" h-fit flex flex-row-reverse">
                <button onClick={handleClose}>
                  <img
                    className="w-8 h-8 m-1 hover:cursor-pointer hover:opacity-85 sm:active:opacity-30 "
                    src={closerIcon}
                    alt="close"
                  />
                </button>
              </div>
              <header className="flex flex-col items-center w-full">
                <div className="w-4/12">
                  <img className="w-fit" src={logoRegister} alt="logo" />
                </div>
                <p className="text-center text-xl mt-5 mb-5">
                  Do already have an account?{" "}
                  <a className="font-bold hover:cursor-pointer hover:opacity-50 ">
                    Login now
                  </a>
                </p>
              </header>
              <body className="flex w-full">
                <Form
                  // {...formItemLayout}
                  form={form}
                  name="register"
                  className="lg:justify-center"
                  onFinish={onFinish}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  scrollToFirstError
                >
                  <Row gutter={16}>
                    {/* Email */}
                    <Col span={8}>
                      <Form.Item
                        name="email"
                        label="Username/Email"
                        rules={[
                          {
                            type: "email",
                            message: "The input is not valid E-mail!",
                          },
                          {
                            required: true,
                            message: "Please input your E-mail!",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Username/Email" />
                      </Form.Item>
                    </Col>
                    {/* Firstname */}
                    <Col span={8}>
                      <Form.Item
                        name="firstname"
                        label="Firstname"
                        rules={[
                          {
                            required: true,
                            message: "Please input your firstname!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Firstname" />
                      </Form.Item>
                    </Col>
                    {/* Address */}
                    <Col span={8}>
                      <Form.Item
                        name="address"
                        label="Address"
                        rules={[
                          {
                            required: true,
                            message: "Please input your address!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Address" />
                      </Form.Item>
                    </Col>
                  </Row>

                  {/*row 2*/}
                  <Row gutter={16}>
                    {/* Country  row 2*/}
                    <Col span={8}>
                      <Form.Item
                        name="country"
                        label="Country"
                        rules={[
                          {
                            required: true,
                            message: "Please input your country!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Country" />
                      </Form.Item>
                    </Col>
                    {/* State/Province  row 2*/}
                    <Col span={8}>
                      <Form.Item
                        name="State/Province"
                        label="State/Province"
                        rules={[
                          {
                            required: true,
                            message: "Please input your State/Province!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="State/Province" />
                      </Form.Item>
                    </Col>
                    {/* City row 2*/}
                    <Col span={8}>
                      <Form.Item
                        name="City"
                        label="City"
                        rules={[
                          {
                            required: true,
                            message: "Please input your city!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="City" />
                      </Form.Item>
                    </Col>
                  </Row>

                  {/*  row3 */}
                  <Row gutter={16}>
                    {/* Bank name row3 */}
                    <Col span={8}>
                      <Form.Item
                        name="bankname"
                        label="Bank Name"
                        rules={[
                          {
                            required: true,
                            message: "Please select bankname!",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Select placeholder="select your Bank Name">
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                          <Option value="other">Other</Option>
                        </Select>
                      </Form.Item>
                    </Col>

                    {/* Banknumber row 3*/}
                    <Col span={8}>
                      <Form.Item
                        name="banknumber"
                        label="Bank Number"
                        // tooltip="What do you want others to call you?"
                        rules={[
                          {
                            required: true,
                            message: "Please input your bank number!",
                            whitespace: true,
                          },
                          {
                            type: "number",
                            message: "Please input your bank number by number!",
                            whitespace: true,
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Input placeholder="Bank Number" />
                      </Form.Item>
                    </Col>

                    {/* Bankbranch row 3*/}
                    <Col span={8}>
                      <Form.Item
                        name="bankbranch"
                        label="Bank Branch"
                        rules={[
                          {
                            required: true,
                            message: "Please select bank branch",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                      >
                        <Select placeholder="select your Bank Branch">
                          <Option value="male">Male</Option>
                          <Option value="female">Female</Option>
                          <Option value="other">Other</Option>
                        </Select>
                      </Form.Item>
                    </Col>
                  </Row>

                  {/* Row 4 */}
                  <Row gutter={16}>
                    {/* Password  */}
                    <Col span={12}>
                      <Form.Item
                        name="password"
                        label="Password"
                        rules={[
                          {
                            required: true,
                            message: "Please input your password!",
                          },
                        ]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        hasFeedback
                      >
                        <Input.Password />
                      </Form.Item>
                    </Col>
                    {/* Confirm Password */}
                    <Col span={12}>
                      <Form.Item
                        name="confirm"
                        label="Confirm Password"
                        dependencies={["password"]}
                        labelCol={{ span: 24 }}
                        wrapperCol={{ span: 24 }}
                        hasFeedback
                        rules={[
                          {
                            required: true,
                            message: "Please confirm your password!",
                          },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (
                                !value ||
                                getFieldValue("password") === value
                              ) {
                                return Promise.resolve();
                              }
                              return Promise.reject(
                                new Error(
                                  "The new password that you entered do not match!"
                                )
                              );
                            },
                          }),
                        ]}
                      >
                        <Input.Password />
                      </Form.Item>
                    </Col>
                  </Row>
                  {/* Register */}
                  <Form.Item
                    {...tailFormItemLayout}
                    wrapperCol={{ span: 12, offset: 6 }}
                  >
                    <Button
                      type="primary"
                      htmlType="submit"
                      className="lg:w-full ms:justify-center md:w-full lg:my-4  bg-red-700 hover:bg-red-600/100"
                    >
                      Register
                    </Button>
                  </Form.Item>
                </Form>
              </body>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
