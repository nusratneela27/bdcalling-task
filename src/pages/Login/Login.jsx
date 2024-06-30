import HeadName from "../../components/Shared/HeadName/HeadName";
import { FcGoogle } from "react-icons/fc";
import { Button, Form, Input } from "antd";

const Login = () => {
  return (
    <div className="bg-slate-100 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-10 shadow-lg text-center space-y-5">
        <HeadName></HeadName>
        <h1 className="text-2xl font-medium">Welcome back</h1>
        <p>
          Glad to see you again <br /> Login to your account below
        </p>
        <div className="flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 rounded-lg cursor-pointer">
          <FcGoogle size={32} />
          <p>Continue with Google</p>
        </div>
        <Form>
          <Form.Item
            layout="Email"
            label="Email"
            name="Email"
            rules={[
              {
                required: true,
              },
            ]}
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            layout="Password"
            label="Password"
            name="Password"
            rules={[
              {
                required: true,
              },
            ]}
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
          >
            <Input placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              block
              htmlType="submit"
              className="bg-gray-900 text-white py-5 shadow-2xl"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p>
          Dont have an account?{" "}
          <span className="font-bold"> Sign up for Free</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
