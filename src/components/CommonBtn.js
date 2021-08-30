import React from 'react';
import { Link } from 'react-router-dom';

const CommonBtn = ({title, destination}) => {
    return (
            <Link to={destination} className="md:w-2/12 justify-self-center py-1.5 px-7 border-2 border-purple-700 rounded-md text-xl font-bold text-purple-900 bg-pink-200 hover:bg-purple-700 hover:text-white">{title}
            </Link>
    );
};

export default CommonBtn;