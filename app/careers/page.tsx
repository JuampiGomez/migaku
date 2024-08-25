import Image from "next/image";

const page = () => {
  return (
    <main className="relative">
      <h1 className="text-center px-6 font-extrabold py-6 md:pb-12 text-5xl md:text-8xl ">
        Careers
      </h1>

      <article className="px-6 flex flex-col gap-12 max-w-[800px] mx-auto relative z-10">
        <section className="flex flex-col  gap-5 relative">
          <h2 className="text-2xl font-extrabold md:text-4xl ">
            What is Migaku?
          </h2>
          <p className=" font-semibold md:text-lg">
            The next generation language learning platform.
          </p>
          <p className=" font-medium md:text-lg">
            Migaku is an innovative language learning startup. We’re creating a
            platform that lets you learn languages by watching and reading
            content on Netflix, YouTube, and other sites, using our browser
            extension and mobile app.
          </p>

          <Image
            src={"UFO.svg"}
            width={154}
            height={128}
            className="absolute  -left-60  -top-36"
            alt=""
          />
        </section>

        <section className="flex flex-col  gap-5 relative">
          <h2 className="text-2xl font-extrabold md:text-4xl ">
            Our core values
          </h2>
          <p className=" font-semibold md:text-lg">
            We are a startup through and through. We are focused on shipping
            products and features to users fast, and we strategically accumulate
            technical debt if it means faster growth. Only after reaching
            Product Market Fit will we seek to optimize and completely fail
            proof our codebase. Moving fast should be a startup’s primary focus.
            We are looking to work together with developers who understand these
            points and that there are different development approaches that are
            appropriate at different stages of a company’s life.
          </p>

          <Image
            src={"/starYellow.svg"}
            className="absolute top-0  -left-40"
            width={120}
            height={120}
            alt=""
          />
        </section>
        <section className="flex flex-col  gap-5">
          <h3 className="text-xl font-extrabold md:text-2xl ">Policies</h3>
          <p className=" font-semibold md:text-lg">
            Remote Work - Can work from home from anywhere in the world
            (although we prefer European and East Asian time zones)
          </p>
        </section>

        <section className="flex flex-col  gap-5">
          <h3 className="text-xl font-extrabold md:text-2xl ">Holidays</h3>
          <p className=" font-semibold md:text-lg">
            36 days flexible vacation/sick days per year. Work hard and play
            hard.
          </p>
        </section>
        <section className="flex flex-col  gap-5">
          <h3 className="text-xl font-extrabold md:text-2xl ">Working Hours</h3>
          <p className=" font-semibold md:text-lg">
            No set working hours, just make yourself available for necessary
            meetings with other team members. A minimum commitment of 40 hours
            per week
          </p>
        </section>
        <section className="flex flex-col  gap-5">
          <h3 className="text-xl font-extrabold md:text-2xl ">
            Relocation support
          </h3>
          <p className=" font-semibold md:text-lg">
            Japan visa sponsorship available to the right candidate after we’ve
            worked together for an agreed upon duration
          </p>
        </section>

        <section className="flex flex-col  gap-5 relative">
          <h2 className="text-2xl font-extrabold md:text-4xl ">
            Interested in joining our team?
          </h2>
          <p className=" font-semibold md:text-lg">
            Send your application to{" "}
            <a
              href="mailto:careers-website@migaku.com"
              target="_blank"
              rel="noopener"
              className=" underline underline-offset-2"
            >
              careers-website@migaku.com
            </a>
          </p>
          <ul className=" font-medium md:text-lg list-disc grid gap-1">
            <h4>Your application should include:</h4>
            <li className="ml-10">
              The position you are applying for or how you think you can help
              our team
            </li>
            <li className="ml-10">Your CV</li>
            <li className="ml-10">Links to some of your previous work</li>
            <li className="ml-10">
              A word about why you&apos;re looking for a new job and have chosen
              to apply to Migaku{" "}
            </li>
            <li className="ml-10">Your desied salary</li>
          </ul>

          <Image
            src={"/starYellow.svg"}
            className="absolute top-0 -right-24  rotate-90"
            width={100}
            height={100}
            alt=""
          />
        </section>
      </article>
      <Image
        src={"careersGradient.svg"}
        width={600}
        height={300}
        className="top-36 sm:-top-32 w-full  absolute opacity-50 dark:opacity-20  select-none no-drag"
        alt=""
      />
    </main>
  );
};

export default page;
