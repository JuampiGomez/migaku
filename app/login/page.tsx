import { Metadata } from "next";
import LoginSingUpPage from "@/components/Login&SingUp/LoginSingUpPage";

export const metadata: Metadata = {
  title: "Log in - Migaku",
};

const page = () => {
  return (
    <main className="">
      <LoginSingUpPage
        title="Log in"
        paragraph="Log in to your Migaku account and keep getting better!"
        formTitle="Log in"
        buttonText="LOG IN"
        formTexts={["Forgot your password?", "Don't have an account?"]}
        formSpans={["Reset it", "Sign up"]}
      />
    </main>
  );
};

export default page;
