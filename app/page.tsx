import {EMAIL} from "@/constants"
import Link from "next/link"

const Home = () => (
    <>
        <main className="px-10 py-10 sm:px-10 lg:px-8 lg:py-14 mx-auto">
            <Hero/>
            <AboutMe/>
            <Education/>
            <Skills/>
            <Languages/>
            <ContactMe />
        </main>
    </>
)
export default Home

const Hero = () => (
    <>
        {/* Event */}
        <div className="max-w-[75rem] py-10 lg:px-8 lg:py-14 mx-auto">
            <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">

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

                        <div className="flex justify-start">
                            <Link href="/scrubs_night" style={{marginRight: '16px'}}>
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

                <div>
                    <img className="rounded-2xl" src="/home/Silvan_Burger.jpeg" alt="Silvan at HollyCow"/>
                </div>
            </div>
        </div>
    </>
)

const AboutMe = () => (
    <>
        <div className="container relative mx-auto pt-16 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-left">
                    <div>

                        <h1 className="font-semibold text-2xl">
                            About Me
                        </h1>
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
                    </div>
                </div>

            </div>
        </div>
    </>
)

const Education = () => (
    <>
        <div className="container relative mx-auto pt-16 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-left">
                    <h1 className="font-semibold text-2xl">
                        Education
                    </h1>
                    <div className="py-2">
                        <div className="flex justify-between">
                            <h1 className="font-medium text-xl">
                                Maitres du monde
                            </h1>
                            <h1 className="font-medium text-xl">
                                August 2023 - Now
                            </h1>
                        </div>
                        <p className="mt-2 text-lg text-gray-400 py-2">
                            Going there to get my art degree
                        </p>
                    </div>
                    <div className="py-2">
                        <div className="flex justify-between">
                            <h1 className="font-medium text-xl">
                                École-Nouvelle
                            </h1>
                            <h1 className="font-medium text-xl">
                                August 2023 - Now
                            </h1>
                        </div>
                        <p className="mt-2 text-lg text-gray-400 py-2">
                            Went to school and obtained my IB diploma there.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </>
)

const Skills = () => (
    <>
        <div className="container relative mx-auto pt-16 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-left">
                    <div>

                    <h1 className="font-semibold text-2xl">
                            Skills
                        </h1>

                        <div className="justify-start grid grid-cols-2">
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • 2D art
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • 3D art
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • Portraits
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • Logo design
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • Adobe Photoshop
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • Sketching
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
)

const Languages = () => (
    <>
        <div className="container relative mx-auto pt-16 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-left">
                    <div>

                        <h1 className="font-semibold text-2xl">
                            Languages
                        </h1>

                        <div className="justify-start grid grid-cols-2">
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • French (native)
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • English (fluent)
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • German (fluent)
                            </p>
                            <p className="mt-2 text-lg text-gray-400 py-2">
                                • SwissGerman (native)
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
)

const ContactMe = () => (
    <>
        <div className="container relative mx-auto pt-16 pb-8">
            <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-left">
                    <div>

                        <h1 className="font-semibold text-2xl">
                            About Me
                        </h1>
                        <p className="mt-2 text-lg text-gray-400 py-2">
                            <Link href={`mailto:${EMAIL}`}>
                                <button type="button"
                                        className="py-2 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                    Contact me
                                </button>
                            </Link>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </>
)

const Hero1 = () => (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
         style={{
             minHeight: "75vh"
         }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
             style={{
                 backgroundImage: "url('/home/main.JPG')" // "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')"
             }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
            <div>
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                    <div>
                        <h1 className="text-white font-semibold md:text-5xl text-4xl">
                            Interprofessionnal Workshop Team
                        </h1>
                        <p className="mt-8 text-lg text-gray-300">
                            We are a student association that promotes team work across different medical fields through
                            events and workshops.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <Link href="/events" className="pt-10">
                        <button type="button"
                                className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-500 text-white hover:bg-red-600 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            See Events
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        {/* <div
      className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
      style={{ height: "70px" }}
    >
      <svg
        className="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          className="text-gray-300 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div> */}
    </div>
)

const Services = () => <section className="pb-20 bg-gray-100 -mt-24">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                        <div
                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                            <i className="fas fa-award"></i>
                        </div>
                        <h6 className="text-xl font-semibold">Awarded Agency</h6>
                        <p className="mt-2 mb-4 text-gray-600">
                            Divide details about your product or agency work into parts. A paragraph describing a
                            feature will be enough.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                        <div
                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                            <i className="fas fa-retweet"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                            Free Revisions
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                            Keep you user engaged by providing meaningful information. Remember that by this time, the
                            user is curious.
                        </p>
                    </div>
                </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                    <div className="px-4 py-5 flex-auto">
                        <div
                            className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                            <i className="fas fa-fingerprint"></i>
                        </div>
                        <h6 className="text-xl font-semibold">
                            Verified Company
                        </h6>
                        <p className="mt-2 mb-4 text-gray-600">
                            Write a few lines about each one. A paragraph describing a feature will be enough. Keep you
                            user engaged!
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div
                    className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                    <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                    Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                    Don't let your uses guess by attaching tooltips and popoves
                    to any element. Just make sure you enable them first via
                    JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                    The kit comes with three pre-built pages to help you get
                    started faster. You can change the text and images and
                    you're good to go. Just make sure you enable them first via
                    JavaScript.
                </p>
                <a
                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                    className="font-bold text-gray-800 mt-8"
                >
                    Check Tailwind Starter Kit!
                </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div
                    className="relative flex flex-col min-w-0 break-words  w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                    <img
                        alt="..."
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                        className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                        <svg
                            preserveAspectRatio="none"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 583 95"
                            className="absolute left-0 w-full block"
                            style={{
                                height: "95px",
                                top: "-94px"
                            }}
                        >
                            <polygon
                                points="-30,95 583,95 583,65"
                                className="text-pink-600 fill-current"
                            ></polygon>
                        </svg>
                        <h4 className="text-xl font-bold text-white">
                            Top Notch Services
                        </h4>
                        <p className="text-md font-light mt-2 text-white">
                            The Arctic Ocean freezes every winter and much of the
                            sea-ice then thaws every summer, and that process will
                            continue whatever happens.
                        </p>
                    </blockquote>
                </div>
            </div>

        </div>
    </div>
</section>

const Featured = () => <section className="relative py-20">
    <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{height: "80px"}}
    >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
    </div>

    <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                    alt="..."
                    className="max-w-full rounded-lg shadow-lg"
                    src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                    <div
                        className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                        <i className="fas fa-rocket text-xl"></i>
                    </div>
                    <h3 className="text-3xl font-semibold">
                        A growing company
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-gray-600">
                        The extension comes with three pre-built pages to help you
                        get started faster. You can change the text and images and
                        you're good to go.
                    </p>
                    <ul className="list-none mt-6">
                        <li className="py-2">
                            <div className="flex items-center">
                                <div>
                  <span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fas fa-fingerprint"></i>
                  </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">
                                        Carefully crafted components
                                    </h4>
                                </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center">
                                <div>
                  <span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="fab fa-html5"></i>
                  </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Amazing page examples</h4>
                                </div>
                            </div>
                        </li>
                        <li className="py-2">
                            <div className="flex items-center">
                                <div>
                  <span
                      className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
                    <i className="far fa-paper-plane"></i>
                  </span>
                                </div>
                                <div>
                                    <h4 className="text-gray-600">Dynamic components</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>

const Finisher = () => <section className="pb-20 relative block bg-gray-900">
    <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{height: "80px"}}
    >
        <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
        >
            <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
            ></polygon>
        </svg>
    </div>

    <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
        <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                    Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                    Put the potentially record low maximum sea ice extent tihs year down to low ice.
                    According to the National Oceanic and Atmospheric Administration, Ted, Scambos.
                </p>
            </div>
        </div>
        <div className="flex flex-wrap mt-12 justify-center">
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div
                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                    Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div
                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                    Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
            </div>
            <div className="w-full lg:w-3/12 px-4 text-center">
                <div
                    className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                    <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                    Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                    Some quick example text to build on the card title and make up
                    the bulk of the card's content.
                </p>
            </div>
        </div>
    </div>
</section>

const Contact = () => <section className="relative block py-24 lg:pt-0 bg-gray-900">
    <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-6/12 px-4">
                <div
                    className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                    <div className="flex-auto p-5 lg:p-10">
                        <h4 className="text-2xl font-semibold">
                            Want to work with us?
                        </h4>
                        <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                            Complete this form and we will get back to you in 24 hours.
                        </p>
                        <div className="relative w-full mb-3 mt-8">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="full-name"
                            >
                                Full Name
                            </label>
                            <input
                                type="text"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Full Name"
                                style={{transition: "all .15s ease"}}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Email"
                                style={{transition: "all .15s ease"}}
                            />
                        </div>

                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                htmlFor="message"
                            >
                                Message
                            </label>
                            <textarea
                                rows={4}
                                cols={80}
                                className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                                placeholder="Type a message..."
                            />
                        </div>
                        <div className="text-center mt-6">
                            <button
                                className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                type="button"
                                style={{transition: "all .15s ease"}}
                            >
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
