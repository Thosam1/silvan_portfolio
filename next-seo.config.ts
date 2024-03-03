/* will be rendered on every page, except when we override it */

const title = "Silvan Schürmann"
const description = "A personal website to showcase my work"
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title,
    description,
    canonical: process.env.WEBSITE_URL,
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: process.env.WEBSITE_URL,
        site_name: 'Silvan Schürmann',
        title,
        description,
        images: [
            {
                url: process.env.WEBSITE_URL + '/public/website_thumbnail.jpg',
                alt: title
            }
        ]
    },
    twitter: {
        // handle: '@handle',
        // site: '@',
        cardType: 'summary_large_image', // summary_large_image
    },
};
