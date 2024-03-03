"use client";
import {EDUCATION, EMAIL, LANGUAGES, SKILLS} from '@/constants'
import Link from 'next/link'
import {Wrapper} from "@/components/Wrapper.ts";
import FadeInAnimation from "@/animations/FadeInAnimation";
import {motion} from "framer-motion";
import ZoomIntroAnimation from "@/animations/ZoomIntroAnimation";

const Home = () => (
    <main>
        <Hero/>
        <AboutMe/>
        <Education/>
        <Skills/>
        <Languages/>
        <ContactMe/>
    </main>
)
export default Home

const Hero = () => (
    <ZoomIntroAnimation>
        <div className="min-h-screen flex items-center justify-center px-8">
            <div className="max-w-[75rem] lg:px-8 mx-auto">
                <div className="sm:flex sm:items-center md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4">
                                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                                    Hi 👋, I'm Silvan
                                </h2>
                                <p className="text-gray-500">
                                    I am a designer, an artist and student living in Switzerland.
                                    This is my personal portfolio where I showcase my art !
                                </p>
                            </div>

                            <div className="flex justify-start pb-10">
                                <Link href="/work" style={{marginRight: '16px'}}>
                                    <button type="button"
                                            className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        My works
                                    </button>
                                </Link>

                                <Link href={`mailto:${EMAIL}`}>
                                    <button type="button"
                                            className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                        Contact me
                                    </button>
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img className="rounded-2xl max-h-[35rem]" src="/home/Silvan_Burger.jpeg"
                             alt="Silvan at HollyCow"/>
                    </div>
                </div>
            </div>
        </div>
    </ZoomIntroAnimation>
)

const AboutMe = () => (
    <Wrapper>
        <FadeInAnimation>
            <h1 className="font-semibold text-2xl">
                About Me
            </h1>
        </FadeInAnimation>
        <FadeInAnimation>
            <p className="mt-2 text-lg text-gray-400 py-2">
                I am a passionate artist that has grew up here in Switzerland. I speak fluently
                Swiss-German, English and French !!!
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Diam donec adipiscing tristique risus nec feugiat in
                fermentum posuere. Euismod elementum nisi quis eleifend. Lectus arcu bibendum at varius.
                Gravida quis blandit turpis cursus in. Pretium quam vulputate dignissim suspendisse in est
                ante in. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Cras semper auctor
                neque vitae tempus. Vulputate dignissim suspendisse in est ante in nibh mauris cursus. Nisi
                scelerisque eu ultrices vitae auctor eu. Pretium viverra suspendisse potenti nullam ac
                tortor vitae purus. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Nulla
                aliquet enim tortor at.
            </p>
        </FadeInAnimation>
    </Wrapper>
)

const Education = () => (
    <Wrapper>
        <FadeInAnimation>
            <h1 className="font-semibold text-2xl py-4">
                Education
            </h1>
        </FadeInAnimation>

        <div className="flex flex-row">
            <div className="min-w-[3rem] md:hidden"/>
            <div className="flex-grow">
                <FadeInAnimation>
                    {EDUCATION.map((elt) =>
                        <div className="py-2" key={elt.title}>
                            <div className="md:hidden">
                                <h1 className="font-medium text-xl py-2">
                                    {elt.title}
                                </h1>
                                <h1 className="font-medium text-xl">
                                    {elt.date_start} - {elt.date_end}
                                </h1>
                            </div>
                            <div className="flex justify-between">
                                <h1 className="font-medium text-xl hidden md:block">
                                    {elt.title}
                                </h1>
                                <h1 className="font-medium text-xl hidden md:block">
                                    {elt.date_start} - {elt.date_end}
                                </h1>
                            </div>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                {elt.description}
                            </p>
                        </div>
                    )}
                </FadeInAnimation>

            </div>
        </div>
    </Wrapper>
)

const Skills = () => (
    <Wrapper>
        <div>
            <FadeInAnimation>
                <h1 className="font-semibold text-2xl">
                    Skills
                </h1>
            </FadeInAnimation>
            <div className="flex flex-row">
                <div className="min-w-[3rem] md:hidden"/>
                <div className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <FadeInAnimation>
                            {SKILLS.map((elt) =>
                                <p className="mt-2 text-lg text-gray-400 py-2" key={elt.title}>
                                    • {elt.title}
                                </p>
                            )}
                        </FadeInAnimation>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
)

const Languages = () => (
    <Wrapper>
        <div>
            <FadeInAnimation>
                <h1 className="font-semibold text-2xl">
                    Languages
                </h1>
            </FadeInAnimation>
            <div className="flex flex-row">
                <div className="min-w-[3rem] md:hidden"/>
                <div className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <FadeInAnimation>
                            {LANGUAGES.map((elt) =>
                                <p className="mt-2 text-lg text-gray-400 py-2" key={elt.title}>
                                    • {elt.title} ({elt.level})
                                </p>
                            )}
                        </FadeInAnimation>
                    </div>
                </div>
            </div>
        </div>
    </Wrapper>
)

const ContactMe = () => (
    <Wrapper>
        <div>
            <FadeInAnimation>
                <h1 className="font-semibold text-2xl">
                    About Me
                </h1>
            </FadeInAnimation>
            <FadeInAnimation>
                <p className="mt-2 text-lg text-gray-400 py-2">
                    <Link href={`mailto:${EMAIL}`}>
                        <button type="button"
                                className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Contact me
                        </button>
                    </Link>
                </p>
            </FadeInAnimation>
        </div>
    </Wrapper>
)