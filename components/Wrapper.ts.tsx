import React, { ReactNode } from 'react';

export const Wrapper = ({ children }: { children: ReactNode }) => {
	return (
		<div className="min-h-screen flex items-center justify-center">
			<div className="max-w-[75rem] py-10 px-10 lg:px-8 lg:py-8 mx-auto">
				{children}
			</div>
		</div>
	);
};
