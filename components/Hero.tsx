import siteMetadata from "@/data/siteMetadata";
import Link from "./Link";
import PageTitle from "./PageTitle";

export default function Hero() {
  return (
    <div className="w-full h-screen pb-16 flex flex-col justify-around">
      <h1 className="my-28 sm:my-10 text-center select-none py-14 text-7xl sm:text-9xl leading-none tracking-tightest font-extrabold">
        <span
          data-content="Blog."
          className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-1"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-1-start to-gradient-1-end animate-gradient-foreground-1">
            Blog.
          </span>
        </span>
        <span
          data-content="Showcase."
          className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-2"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-2-start to-gradient-2-end animate-gradient-foreground-2">
            Showcase.
          </span>
        </span>
        <span
          data-content="Portfolio."
          className="relative block before:content-[attr(data-content)] dark:before:content-[attr(data-content)] before:w-full before:block before:absolute before:top-0 before:bottom-0 before:left-0 before:px-2 before:text-center before:text-black dark:before:text-white before:animate-gradient-background-3"
        >
          <span className="px-2 text-transparent bg-clip-text bg-gradient-to-br from-gradient-3-start to-gradient-3-end animate-gradient-foreground-3">
            Portfolio.
          </span>
        </span>
      </h1>
      <div className="space-y-2 md:space-y-5">
        <PageTitle>
          Xin chào! My name is Thắng{" "}
          <span role="img" aria-label="waving hand">
            👋
          </span>
        </PageTitle>
        <p className="text-lg leading-7 prose text-gray-500 max-w-none dark:text-gray-400">
          I'm a software engineer located in HCMC, Vietnam{" "}
          <span role="img" aria-label="waving hand">
            🇻🇳
          </span>
          .{" "}
          <Link
            href={`mailto:${siteMetadata.email}`}
            className="font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Email to ${siteMetadata.email}`}
          >
            Get in touch &rarr;
          </Link>
        </p>
      </div>
    </div>
  );
}
