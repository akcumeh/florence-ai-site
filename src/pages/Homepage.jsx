import FAQLink from '../components/FAQLink';
import TextField from '../components/TextField';
import Bots from '../components/Bots';

const Homepage = () => {
    return (
        <div className="flex flex-col items-center gap-1 mt-1 px-2 min-h-screen font-yellix bg-floWhite text-floBlack w-full">
            <FAQLink />

            <h1 className="text-xl font-yellix-semi2 mt-6">Welcome to Florence<span className="text-floBlue">*</span> AI</h1>
            <h2 className="text-md md:text-[30px] lg:text-xl text-floAsh font-yellix-semi2">Your intelligent academic companion</h2>

            <div className='w-[90%] py-3'>
                <TextField
                    width={'xlrg'} />
            </div>

            <Bots />
        </div>
    );
};

export default Homepage;