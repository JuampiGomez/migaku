import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Migaku",
};

const page = () => {
  return (
    <main>
      <h1 className="text-center font-extrabold text-5xl my-10">Blog</h1>
    </main>
  );
};

export default page;
