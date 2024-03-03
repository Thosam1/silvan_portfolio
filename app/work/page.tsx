import {Divider} from '@/components/Divider'
import Image from 'next/image'
import GalleryElement from '@/components/GalleryElement';
import {FULL_NAME, GALLERY_ELEMENTS} from '@/constants';
import {Wrapper} from "@/components/Wrapper.ts";
import FadeInAnimation from "@/animations/FadeInAnimation";

// SEO
import {NextSeo} from "next-seo";

const url = process.env.WEBSITE_URL + "/work";
const title = "Work - " + FULL_NAME;
const description = "Here I showcase my work !";

// overriding SEO
const SEO = {
    title,
    description,
    canonical: url,

    openGraph: {
        title,
        description,
        url,
    },
};

export default function Work() {
    return (
        <>
            <NextSeo {...SEO} />
            <Heading/>
            <Divider/>
            <Gallery/>
        </>
    )
}
//https://flowbite.com/docs/components/gallery/

const Heading = () => (
    <Wrapper>
        <div className="text-center">
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
    </Wrapper>
)

const Gallery = () => (
    <>
        <div className="container mx-auto pt-16 pb-8 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-2">
                {
                    GALLERY_ELEMENTS.map((item, index) =>
                        <FadeInAnimation key={index}>
                            <GalleryElement props={item}/>
                        </FadeInAnimation>
                    )
                }
            </div>
        </div>
    </>
)