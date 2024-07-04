import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function TryPear() {
  return (
    <section>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Illustration behind content */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 -ml-20 hidden lg:block"
          aria-hidden="true"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {/* SVG remains the same as in your previous Hero.tsx */}
        </div>

        {/* Content area */}
        <div className="relative pb-2 pt-32 md:pb-4 md:pt-40">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
            <h1 className="mb-4 text-4xl font-semibold dark:text-gray-300" data-aos="fade-up">
              Interested in contributing to PearAI?
            </h1>
            <p
              className="mb-4 text-sm text-secondary-400 dark:text-gray-400 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Pear is built by a large community of developers. If you have
              questions, or would like to discuss, you can join our{" "}
              <Link
                href="https://discord.gg/7QMraJUsQt"
                className="font-medium text-primary-700 dark:text-darkPrimary-500 hover:text-primary-800"
              >
                Discord
              </Link>{" "}
              and talk to us directly! 💬
            </p>
            <p
              className="mb-8 text-sm text-secondary-400 dark:text-gray-400 sm:text-lg"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Help the community out by giving{" "}
              <Link
                href="https://github.com/trypear/pearai-app"
                className="font-medium text-primary-700 dark:text-darkPrimary-500 hover:text-primary-800"
              >
                the repo
              </Link>{" "}
              a star! 🤩
            </p>
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <div data-aos="fade-up" data-aos-delay="400">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="https://docs.google.com/presentation/d/1zR9-7DTlb2PcsnapryZw8jHSkLTs9JxeXth4nyeemAQ/edit?usp=sharing">
                    Contributing 101
                  </Link>
                </Button>
              </div>
              <div data-aos="fade-up" data-aos-delay="400">
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="mt-2 w-full sm:ml-4 sm:mt-0 sm:w-auto"
                >
                  <Link href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit?usp=sharing">
                    PearAI Master Doc
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
