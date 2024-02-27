import { Divider } from '@/components/Divider'
import Image from 'next/image'
import Link from 'next/link'
import GalleryElement from '@/components/GalleryElement';
import { GALLERY_ELEMENTS } from '@/constants';

export default function Work() {
	return (
		<>
			<Heading/>
			<Divider/>
			<Gallery/>
		</>
	)
}
//https://flowbite.com/docs/components/gallery/

const Heading = () => (
	<>
		{/* Title */}
		<div className="container relative mx-auto pt-16 pb-8">
			<div className="items-center flex flex-wrap">
				<div className="w-full lg:w-1/2 px-4 ml-auto mr-auto text-center">
					<div>
						{/*<h1 className="font-md text-2xl text-gray-700 py-4">*/}
						{/*	Events*/}
						{/*</h1>*/}
						<h1 className="font-semibold text-4xl">
							My work
						</h1>
						<p className="mt-4 text-lg text-gray-400 py-4">
							Underneath, you can find some of my creations :)
						</p>
					</div>
				</div>
			</div>
		</div>
	</>
)

const Gallery = () => (
	<>
		<div className="container mx-auto pt-16 pb-8 px-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
				{
					GALLERY_ELEMENTS.map((item, index) => <GalleryElement props={item} key={index} />)
				}
			</div>
		</div>
	</>
)