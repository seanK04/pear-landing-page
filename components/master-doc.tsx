import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const MasterDocComponent: React.FC = () => {
  return (
    <section
      className="to-white bg-gradient-to-b from-gray-50 px-4 py-12 pt-20"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row">
          {/* Left column */}
          <div className="lg:w-1/2 lg:pr-8">
            {/*Main */}
            <h2 className="mb-4 text-3xl font-bold">Main</h2>
            <div className="mb-8 text-black">
              <p>
                Landing page:{" "}
                <a
                  href="https://trypear.ai"
                  className="font-bold text-primary-700"
                >
                  https://trypear.ai
                </a>
              </p>
              <p>
                Join the{" "}
                <a
                  href="https://forms.gle/X7Fq481eWfQbjtH8A"
                  className="font-bold text-primary-700"
                >
                  waitlist
                </a>
              </p>
              <p>
                PearAI long term and short term goals:{" "}
                <a
                  href="https://docs.google.com/document/d/18y986NDlfb03Sd-54KO0NLE9rgyijww83JnXe7odk8o/edit#heading=h.ytfua3mpgn64"
                  className="font-bold text-primary-700"
                >
                  pear.ai short and long term plan
                </a>
              </p>
            </div>

            {/*Pear AI Content*/}
            <h2 className="mb-4 text-3xl font-bold">PearAI Content</h2>
            <div className="mb-8 text-black">
              <p>
                <a
                  href="https://www.youtube.com/@PansDay"
                  className="font-bold text-primary-700"
                >
                  Pan’s Day
                </a>{" "}
                (startup vlogs previous episodes)
              </p>
              <p>
                <a
                  href="https://www.youtube.com/nang88"
                  className="font-bold text-primary-700"
                >
                  Nang’s channel
                </a>{" "}
                (new video every month)
              </p>
              <p>
                <a
                  href="https://www.instagram.com/panangbros"
                  className="font-bold text-primary-700"
                >
                  PanangBros Startup Instagram Page
                </a>
              </p>
              <p>
                <a
                  href="https://www.youtube.com/@FryingPan"
                  className="font-bold text-primary-700"
                >
                  Pan’s main channel
                </a>{" "}
                (new startup vlogs will be posted here from now on)
              </p>
              &nbsp;
              <p>
                PearAI town hall meeting/stream schedule (notification in{" "}
                <a
                  href="https://discord.com/invite/7QMraJUsQt"
                  className="font-bold text-primary-700"
                >
                  Discord
                </a>
                )
              </p>
              <ul className="mb-8 list-inside list-disc pl-1 text-secondary-400">
                <li>
                  <a
                    href="https://twitch.tv/not_nang"
                    className="font-bold text-primary-700"
                  >
                    twitch.tv/not_nang
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitch.tv/fryingpan"
                    className="font-bold text-primary-700"
                  >
                    twitch.tv/fryingpan
                  </a>
                </li>
              </ul>
            </div>
            {/*Master Doc Button */}
            <div className="mt-6 w-full px-3 text-center lg:ml-10 lg:px-0 lg:text-left">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-32 w-3/4 bg-primary-700 text-xl text-white-main hover:bg-primary-800 hover:shadow-sm"
              >
                <Link
                  href="https://docs.google.com/document/d/14jusGNbGRPT8X6GgEDbP1iab5q4X7_y-eFXK7Ky57IQ/edit"
                  target="_blank"
                >
                  PearAI MASTER DOC
                </Link>
              </Button>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:w-1/2">
            <h2 className="mb-4 text-3xl font-bold">PearAI Code and Docs</h2>
            <div className="mb-8 text-black">
              <p>
                START HERE:{" "}
                <a
                  href="https://docs.google.com/presentation/u/0/d/1zR9-7DTlb2PcsnapryZw8jHSkLTs9JxeXth4nyeemAQ/edit"
                  className="font-bold text-primary-700"
                >
                  pear.ai contributing 101
                </a>
              </p>
              <p>
                ALL DOCUMENTS HERE:{" "}
                <a
                  href="https://drive.google.com/drive/folders/1k-v8uYLfhikwz87M762BTJHCsDGfrvU0"
                  className="font-bold text-primary-700"
                >
                  Pear AI Public
                </a>
              </p>
              <p>
                CURRENT SPRINT (TOP PRIORITY):{" "}
                <a
                  href="https://github.com/orgs/trypear/projects/1"
                  className="font-bold text-primary-700"
                >
                  https://github.com/orgs/trypear/projects/1
                </a>
              </p>
              &nbsp;
              <p>
                <a
                  href="https://github.com/trypear/pearai-app/blob/main/CONTRIBUTING.md"
                  className="font-bold text-primary-700"
                >
                  Contributing Guide{" "}
                </a>
                +
                <a
                  href="https://docs.google.com/document/d/1u_b6tN7rCCOBBSISaI_KMX7K2-vzJqgQIiJgMltegso/edit#heading=h.ns98wd85nc2o"
                  className="font-bold text-primary-700"
                >
                  {" "}
                  How are we going to work together (Squads)?
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/orgs/trypear/projects"
                  className="font-bold text-primary-700"
                >
                  Quest Boards
                </a>{" "}
                (to get context on what’s currently being worked on)
              </p>
              <p>
                <a
                  href="https://github.com/trypear/pearai-app/wiki/Open-Source-Roles"
                  className="font-bold text-primary-700"
                >
                  Explanation of Contributor Roles
                </a>
              </p>
              <p>
                <a
                  href="https://forms.gle/HZkzUJ3SDmRiqeiS9"
                  className="font-bold text-primary-700"
                >
                  Moderator Application
                </a>
              </p>
            </div>
            <h2 className="mb-4 text-3xl font-bold">Github Repositories</h2>
            <div className="mb-8 text-black">
              <p>
                <a
                  href="https://github.com/trypear/pearai-app"
                  className="font-bold text-primary-700"
                >
                  PearAI App Github Repository
                </a>{" "}
                (PLEASE STAR ⭐):
              </p>
              <p>
                This is the main app for PearAI and contains the code for both
                the VSCode fork and AI chat extension (the submodule
                repository).
              </p>
              <p>
                <a
                  href="https://github.com/trypear/pearai-submodule"
                  className="font-bold text-primary-700"
                >
                  PearAI Submodule Repository
                </a>{" "}
                (PLEASE STAR ⭐):
              </p>
              <p>
                The logic for all the AI related features including the chat. It
                is a submodule of the outer pearai-app repo because it is a fork
                of another open source repository.
              </p>
              <p>
                <a
                  href="https://github.com/trypear/pearai-landing-page"
                  className="font-bold text-primary-700"
                >
                  PearAI Landing Page Repository
                </a>
                :
              </p>
              <p>
                This website which informs users about PearAI and its features.
                It includes the frontend implementation and user interface
                components.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MasterDocComponent;
