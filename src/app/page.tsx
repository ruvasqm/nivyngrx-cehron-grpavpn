import Image from "next/image";
import Integrations from "./integration";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section className="flex flex-col items-center gap-16 lg:pt-8 lg:pb-24 w-full">
        <div className="flex flex-col items-center w-full gap-8 ">
          <div className="flex flex-col items-center gap-10 lg:gap-8 lg:rounded-3xl pt-16 lg:pt-24 pb-24 lg:pb-48 lg:px-28 xl:px-56 bg-brand-section w-full">
            <div className="flex flex-col items-center gap-4 lg:gap-6 w-fit p-4">
              <h1 className="text-4xl lg:text-7xl font-semibold text-center text-primary-fg ">
                Grow your users.<br />
                Smarter.
              </h1>
              <p className="text-center text-tertiary-brand font-normal text-lg lg:text-xl">
                Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
              </p>
            </div>
            <form className="flex flex-col lg:flex-row gap-4">
              <div className="flex flex-col gap-1.5">
                <div className="flex flex-row rounded-lg py-3 px-3.5 gap-2 h-fit bg-primary-fg">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-primary-fg placeholder:text-placeholder text-base text-tertiary-fg font-normal "
                  />
                  <div className="flex items-center relative group">
                    <Image className="hover:text-red" src="/help.svg" width={16} height={16} alt="help" />
                    <span
                      className="absolute hidden group-hover:flex -top-2 -right-3 translate-x-full w-48 px-2 py-1 bg-green-500 rounded-lg text-center text-purple-950 text-sm before:content-[''] before:absolute before:top-1/2  before:right-[100%] before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-green-500 font-black">
                      You&lsquo;re getting hacked &#128520;
                    </span>
                  </div>
                </div>
                <p className="text-tertiary-brand font-normal text-sm">
                  We care about your data in our privacy policy.
                </p>
              </div>
              <button className="bg-primary-bg border border-primary-bg text-white px-5 py-3 rounded-lg font-semibold h-fit">
                Get started
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center py-16 lg:pb-24 gap-12 lg:gap-24 w-full">
        <div className="flex flex-col px-4 lg:px-8 gap-8">
          <div className="flex flex-col gap-8 lg:px-56">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl lg:text-4xl font-semibold text-center text-primary">
                  Get more value from your tools
                </h2>
              </div>
              <p className="text-center text-tertiary font-normal text-lg">
                Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away.
              </p>
            </div>
          </div>
            <Integrations />
        </div>
      </section>
    </main >
  );
}
