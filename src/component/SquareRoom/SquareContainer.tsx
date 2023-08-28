import React from 'react';

interface Props {
	children: React.ReactNode;
}

const SquareContainer: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-80 h-80 flex justify-center items-center">{children}</div>
	);
};

export default SquareContainer;