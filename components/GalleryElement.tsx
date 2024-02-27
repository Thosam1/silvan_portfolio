import React from 'react';

interface GalleryElementProps {
	props: {
		img_url: string;
		title: string;
	};
}

const GalleryElement: React.FC<GalleryElementProps> = ({ props }) => {

	return (
		<div className="aspect-square overflow-hidden">
			<img
				className="h-full w-full rounded-lg object-cover hover:scale-110 transition duration-500 cursor-pointer"
				src={props.img_url}
				alt="Image"
			/>
		</div>
	);
};

export default GalleryElement;
