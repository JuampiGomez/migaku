import { Metadata } from "next";
import LoginSingUpPage from "@/components/Login&SingUp/LoginSingUpPage";

export const metadata: Metadata = {
  title: "Sing Up - Migaku",
};

const page = () => {
  return (
    <main className="">
      <LoginSingUpPage
        title="Join us!"
        paragraph="Create your Migaku account and start your 10-day free trial."
        formTitle="Sign up"
        buttonText="CREATE ACCOUNT"
        formTexts={["Already have an account?"]}
        formSpans={["Log in"]}
      />
    </main>
  );
};

export default page;
