import { EMAIL } from '@/constants'
import Link from 'next/link'

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
	<div className="min-h-screen flex items-center justify-center px-6">
		{/* Event */}
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
							<Link href="/" style={{ marginRight: '16px' }}>
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
					<img className="rounded-2xl max-h-[35rem]" src="/home/Silvan_Burger.jpeg" alt="Silvan at HollyCow"/>
				</div>
			</div>
		</div>
	</div>
)

const AboutMe = () => (

	<div className="container mx-auto pt-16 pb-8 px-6">
		<div className="items-center flex flex-wrap">
			<div className="w-full lg:w-2/3 px-4 ml-auto mr-auto text-left">
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

)

const Education = () => (
	<div className="container mx-auto pt-16 pb-8 px-6">
		<div className="items-center flex flex-wrap">
			<div className="w-full lg:w-2/3 px-4 ml-auto mr-auto text-left">
				<h1 className="font-semibold text-2xl py-4">
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
)

const Skills = () => (
	<div className="container mx-auto pt-16 pb-8 px-6">
		<div className="items-center flex flex-wrap">
			<div className="w-full lg:w-2/3 px-4 ml-auto mr-auto text-left">
				<div>

					<h1 className="font-semibold text-2xl">
						Skills
					</h1>

					<div className="grid grid-cols-2">
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
)

const Languages = () => (
	<div className="container mx-auto pt-16 pb-8">
		<div className="items-center flex flex-wrap">
			<div className="w-full lg:w-2/3 px-4 ml-auto mr-auto text-left">
				<div>

					<h1 className="font-semibold text-2xl">
						Languages
					</h1>

					<div className="grid grid-cols-2">
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
)

const ContactMe = () => (
	<div className="container mx-auto pt-16 pb-8 px-6">
		<div className="items-center flex flex-wrap">
			<div className="w-full lg:w-2/3 px-4 ml-auto mr-auto text-left">
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
)