import Image from "next/image";

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
          </div>
        </div>
      </section>
    </main>
  );
}
