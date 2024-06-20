import Image from "next/image";
import Integrations from "./integration";
import Link from "next/link";
import FeatureCard from "./featureCard";
import Features from "./features";
import Ctas from "./ctaImg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section
        id="hero"
        className="flex w-full flex-col items-center gap-16 lg:pb-24 lg:pt-8"
      >
        <div className="flex w-full flex-col items-center gap-8">
          <div className="flex w-full flex-col items-center gap-10 bg-brand-section pb-24 pt-16 lg:gap-8 lg:rounded-3xl lg:px-28 lg:pb-48 lg:pt-24 xl:px-56">
            <div className="flex w-fit flex-col items-center gap-4 p-4 lg:gap-6">
              <h1 className="text-center text-4xl font-semibold text-primary-fg lg:text-7xl">
                Grow your users.
                <br />
                Smarter.
              </h1>
              <p className="text-center text-lg font-normal text-tertiary-brand lg:text-xl">
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
              </p>
            </div>
            <form className="flex flex-col gap-4 lg:flex-row">
              <div className="flex flex-col gap-1.5">
                <div className="flex h-fit flex-row gap-2 rounded-lg bg-primary-fg px-3.5 py-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-primary-fg text-base font-normal text-tertiary-fg placeholder:text-placeholder"
                  />
                  <div className="group relative flex items-center">
                    <Image
                      className="hover:text-red"
                      src="/help.svg"
                      width={16}
                      height={16}
                      alt="help"
                    />
                    <span className="absolute -right-3 -top-2 hidden w-48 translate-x-full rounded-lg bg-green-500 px-2 py-1 text-center text-sm font-black text-purple-950 before:absolute before:right-[100%] before:top-1/2 before:-translate-y-1/2 before:border-8 before:border-y-transparent before:border-l-transparent before:border-r-green-500 before:content-[''] group-hover:flex">
                      You&lsquo;re getting hacked &#128520;
                    </span>
                  </div>
                </div>
                <p className="text-sm font-normal text-tertiary-brand">
                  We care about your data in our privacy policy.
                </p>
              </div>
              <button className="h-fit rounded-lg border border-primary-bg bg-primary-bg px-5 py-3 font-semibold text-white">
                Get started
              </button>
            </form>
          </div>
        </div>
      </section>
      <section
        id="integrations"
        className="flex w-full flex-col items-center gap-12 py-16 lg:gap-24 lg:pb-24"
      >
        <div className="flex flex-col gap-8 px-4 lg:px-8">
          <FeatureCard
            pillText="Integrations"
            title="Get more value from your tools"
            description="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away."
          />
          <Integrations />
        </div>
      </section>
      <section
        id="cta"
        className="flex w-full flex-col items-center gap-12 py-16 lg:gap-24 lg:pb-24"
      >
        <div className="flex w-full flex-col items-center justify-between rounded-3xl bg-brand-section md:flex-row">
          <div className="flex flex-col items-start gap-8 p-16 lg:gap-12">
            <div className="flex flex-col gap-5 lg:gap-5">
              <h2 className="text-3xl font-semibold text-tertiary-brand lg:text-4xl">
                Give us a shot
              </h2>
              <p className="text-center font-normal text-tertiary-brand lg:text-xl">
                Join over 4,000 startups already growing with Untitled.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row">
              <Link
                href="/resources"
                className="border-secondary-border gap-1.5 rounded-lg border bg-secondary-bg px-4 py-2.5 text-base font-semibold text-secondary-fg hover:bg-primary-bg hover:text-primary-fg"
              >
                Learn more
              </Link>
              <Link
                href="/pricing"
                className="gap-1.5 rounded-lg border border-primary-bg bg-primary-bg px-4 py-2.5 text-base font-semibold text-primary-fg hover:bg-primary-fg hover:text-primary-bg"
              >
                Get started
              </Link>
            </div>
          </div>
          <Image
            className="rounded-r-3xl"
            src="/cta.png"
            width={480}
            height={400}
            alt="hero"
          />
        </div>
      </section>
      <section
        id="features"
        className="flex w-full flex-col items-center gap-12 py-16 lg:gap-24 lg:pb-24"
      >
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <FeatureCard
            pillText="Features"
            title="Cutting-edge features for advanced analytics"
            description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups."
          />
        </div>
        <Features />
      </section>
      <section
        id="cta2"
        className="flex w-full flex-col items-center gap-12 py-16 lg:gap-24 lg:pb-24"
      >
        <div className="flex w-full flex-col items-center gap-16 rounded-3xl py-16 md:flex-row lg:py-8">
          <div className="flex flex-col items-start gap-8 lg:gap-12">
            <div className="flex flex-col items-start gap-5 lg:gap-6">
              <h2 className="text-5xl font-semibold text-primary">
                No long-term contracts
              </h2>
              <p className="text-xl font-normal text-tertiary">
                Start your 30-day free trial today.
              </p>
            </div>
            <div className="flex flex-col gap-5 lg:flex-row">
              <Link
                className="border-secondary-border gap-1.5 rounded-lg border bg-secondary-bg px-4 py-2.5 text-base font-semibold text-secondary-fg hover:bg-primary-bg hover:text-primary-fg"
                href="/resources"
              >
                Learn more
              </Link>
              <Link
                className="gap-1.5 rounded-lg border border-primary-bg bg-primary-bg px-4 py-2.5 text-base font-semibold text-primary-fg hover:bg-primary-fg hover:text-primary-bg"
                href="/pricing"
              >
                Get started
              </Link>
            </div>
          </div>
          <Ctas />
        </div>
      </section>
      <section
        id="faq"
        className="flex w-full flex-col items-center gap-12 py-16 lg:gap-24 lg:pb-24"
      >
        <FeatureCard
          title="Frequently asked questions"
          description="Everything you need to know about the product and billing."
        />
      </section>
    </main>
  );
}
