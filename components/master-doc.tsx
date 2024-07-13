import React from "react";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

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
                    <div className="lg:w-1/2 lg:pr-8 lg:pt-4">
                        <h2 className="mb-4 text-3xl font-bold">Main</h2>
                        <ul className="mb-8 list-inside list-disc text-secondary-400">
                            <li>Landing page: <a href="https://trypear.ai">https://trypear.ai</a></li>
                            <li>Join the waitlist</li>
                            <li>
                                PearAI long term and short term goals:
                                <a href="pear.ai short and long term plan">pear.ai short and long term plan</a>
                            </li>
                        </ul>

                        <h2 className="mb-4 text-3xl font-bold">PearAI Content</h2>
                        <ul className="mb-8 list-inside list-disc text-secondary-400">
                            <li>Pan’s Day (startup vlogs previous episodes)</li>
                            <li>Nang’s channel (new video every month)</li>
                            <li>PanangBros Startup Instagram Page</li>
                            <li>Pan’s main channel (new startup vlogs will be posted here from now on)</li>
                            <li>PearAI town hall meeting/stream schedule (notification in Discord)</li>
                            <li><a href="https://twitch.tv/not_nang">twitch.tv/not_nang</a></li>
                            <li><a href="https://twitch.tv/fryingpan">twitch.tv/fryingpan</a></li>
                        </ul>
                    </div>

                    {/* Right column */}
                    <div className="lg:w-1/2">
                        <h2 className="mb-4 text-3xl font-bold">PearAI Code and Docs</h2>
                        <ul className="mb-8 list-inside list-disc text-secondary-400">
                            <li>START HERE: <a href="pear.ai contributing 101">pear.ai contributing 101</a></li>
                            <li><a href="https://discord.com/invite/pearai">Join the PearAI Discord!</a></li>
                            <li>ALL DOCUMENTS HERE: <a href="Pear AI Public">Pear AI Public</a></li>
                            <li>CURRENT SPRINT (TOP PRIORITY): <a href="https://github.com/orgs/trypear/projects/1">https://github.com/orgs/trypear/projects/1</a></li>
                            <li>Contributing Guide + How are we going to work together (Squads)?</li>
                            <li>Quest Boards (these sprint boards are a great way to get context on what’s currently being worked on.)</li>
                            <li>Explanation of contributor roles</li>
                            <li>Moderator Application</li>
                        </ul>

                        <h2 className="mb-4 text-3xl font-bold">Github Repositories</h2>
                        <ul className="mb-8 list-inside list-disc text-secondary-400">
                            <li>PearAI App Github Repository (PLEASE STAR ⭐):
                                <p>This is the main app for PearAI and contains the code for both the VSCode fork and AI chat extension (the submodule repository). Directly clone this repository to make all changes.</p>
                            </li>
                            <li>PearAI Submodule Repository (PLEASE STAR ⭐):
                                <p>The logic for all the AI related features including the chat. It is a submodule of the outer pearai-app repo because it is a fork of another open source repository (Continue).</p>
                            </li>
                            <li>PearAI Landing Page Repository</li>
                            <li><a href="https://www.linkedin.com/company/pearai">PearAI LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MasterDocComponent;
