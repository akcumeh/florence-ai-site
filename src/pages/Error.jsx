import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <span className="mt-2">
                Florence<span className="text-floBlue">*</span> AI
            </span>
            <h1 className="text-error font-yellix-extra mt-7">
                404<span className="text-floBlue">*</span>
            </h1>
            <h4 className="text-lg font-yellix-semi2 mt-2">
                Oops! Looks like you&apos;re lost in the digital woods.
            </h4>
            <p className="text-sm font-yellix w-lrg mt-1">
                Let&apos;s navigate you back to familiar ground. Click below to return to the Florence* homepage and get back to learning
            </p>
            <Link to="/" className="no-underline bg-floBlue text-floWhite px-4 py-2 rounded-full mt-4 text-sm font-yellix-semi">
                Go to Homepage
            </Link>
        </div>
    );
};

export default Error;