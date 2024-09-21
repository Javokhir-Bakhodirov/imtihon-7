import { useSignInMutation } from "../../../redux/api/authApi";
import { Button, Form, Input, Typography, notification } from "antd";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const { Title, Text } = Typography;
import { signIn } from "../../../redux/slices/authSlice";

const SignIn = () => {
    const dispatch = useDispatch();
    const [signInRequest, { data, isSuccess }] = useSignInMutation();

    const onFinish = values => {
        signInRequest(values);
    };
    useEffect(() => {
        if (isSuccess) {
            dispatch(signIn({ token: data.token }));
            notification.success({
                message: "Successfully signed in! Go ahead 😊",
            });
        }
    }, [isSuccess]);

    const onFinishFailed = errorInfo => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className=" min-h-screen flex items-center justify-center">
            <Form
                className="p-6 sm:p-8 md:p-10 lg:p-12 bg-white shadow-lg rounded-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                name="basic"
                layout="vertical"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off">
                <Title
                    level={2}
                    className="text-center text-zinc-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                    <Link className="" to="/">
                        Sign In
                    </Link>
                </Title>

                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Please input your Email!",
                        },
                    ]}>
                    <Input className="border-zinc-700" />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Please input your password!",
                        },
                    ]}>
                    <Input.Password className="border-zinc-700" />
                </Form.Item>

                <Form.Item>
                    <Button
                        className="w-full bg-[#6064FF] text-white hover:bg-zinc-600"
                        type="primary"
                        htmlType="submit">
                        Sign In
                    </Button>
                </Form.Item>

                <Text className="text-center text-zinc-700">
                    Don't have an account?{" "}
                    <Link to="/auth/login" className="text-blue-500">
                        Log in
                    </Link>
                </Text>
            </Form>
        </div>
    );
};

export default SignIn;
