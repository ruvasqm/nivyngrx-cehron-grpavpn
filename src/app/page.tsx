import Image from "next/image";
import Integrations from "./integration";
import Link from "next/link";
import FeatureCard from "./featureCard";
import Features from "./features";
import Ctas from "./ctaImg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <section id="hero" className="flex flex-col items-center gap-16 lg:pt-8 lg:pb-24 w-full">
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
      </section >
      <section id="integrations" className="flex flex-col items-center py-16 lg:pb-24 gap-12 lg:gap-24 w-full">
        <div className="flex flex-col px-4 lg:px-8 gap-8">
          <FeatureCard pillText="Integrations" title="Get more value from your tools" description="Connect your tools, connect your teams. With over 100 apps already available in our directory, your team’s favourite tools are just a click away." />
          <Integrations />
        </div>
      </section>
      <section id="cta" className="flex flex-col items-center py-16 lg:pb-24 gap-12 lg:gap-24 w-full">
        <div className="flex flex-col md:flex-row items-center rounded-3xl bg-brand-section w-full justify-between">
          <div className="flex flex-col items-start  p-16 gap-8 lg:gap-12 ">
            <div className="flex flex-col gap-5 lg:gap-5">
              <h2 className="text-3xl lg:text-4xl font-semibold text-tertiary-brand">
                Give us a shot
              </h2>
              <p className="text-center text-tertiary-brand font-normal lg:text-xl">
                Join over 4,000 startups already growing with Untitled.
              </p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <Link href="/resources" className="text-secondary-fg border-secondary-border px-4 py-2.5 gap-1.5 rounded-lg border font-semibold text-base hover:text-primary-fg hover:bg-primary-bg bg-secondary-bg">
                Learn more
              </Link>
              <Link href="/pricing" className="text-primary-fg bg-primary-bg px-4 py-2.5 gap-1.5 rounded-lg border border-primary-bg font-semibold text-base hover:text-primary-bg hover:bg-primary-fg">
                Get started
              </Link>
            </div>
          </div>
          <Image className="rounded-r-3xl" src="/cta.png" width={480} height={400} alt="hero" />
        </div>
      </section>
      <section id="features" className="flex flex-col items-center py-16 lg:pb-24 gap-12 lg:gap-24 w-full">
        <div className="flex flex-col items-center gap-8 lg:gap-16">
          <FeatureCard pillText="Features" title="Cutting-edge features for advanced analytics" description="Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups." />
        </div>
        <Features />
      </section>
      <section id="cta2" className="flex flex-col items-center py-16 lg:pb-24 gap-12 lg:gap-24 w-full">
        <div className="flex flex-col md:flex-row items-center rounded-3xl w-full lg:py-8 py-16 gap-16">
          <div className="flex flex-col items-start gap-8 lg:gap-12">
            <div className="flex flex-col items-start gap-5 lg:gap-6">
              <h2 className="text-5xl text-primary font-semibold">No long-term contracts</h2>
              <p className="text-xl text-tertiary font-normal">Start your 30-day free trial today.</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-5">
              <Link className="text-secondary-fg border-secondary-border px-4 py-2.5 gap-1.5 rounded-lg border font-semibold text-base hover:text-primary-fg hover:bg-primary-bg bg-secondary-bg" href="/resources">Learn more</Link>
              <Link className="text-primary-fg bg-primary-bg px-4 py-2.5 gap-1.5 rounded-lg border border-primary-bg font-semibold text-base hover:text-primary-bg hover:bg-primary-fg" href="/pricing">Get started</Link>
            </div>
          </div>
          <Ctas />
        </div>
      </section>
      <section id="faq" className="flex flex-col items-center py-16 lg:pb-24 gap-12 lg:gap-24 w-full">
      <FeatureCard title="Frequently asked questions" description="Everything you need to know about the product and billing." />
        </section>
    </main >
  );
}
