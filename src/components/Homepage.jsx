import FAQLink from './FAQLink';
import TextField from './TextField';
import Bots from './Bots';

const Homepage = () => {
    // const onAsk = (e, currentPage) => {
    //     e.preventDefault();

    //     if (e.target.type === "submit") {
    //         currentPage = "conversation";
    //     };

    //     return currentPage;
    // };

    return (
        <div className="flex flex-col items-center gap-1 mt-1 h-screen font-yellix bg-floWhite text-floBlack w-full">
            <FAQLink />

            <h1 className="text-lg md:text-xl font-yellix-semi2 mt-6">Welcome to Florence<span className="text-floBlue">*</span> AI</h1>
            <h2 className="text-md md:text-xl text-floAsh font-yellix-semi2">Your intelligent academic companion</h2>

            <form action="submit" className='w-xlrg flex flex-col space-2 items-center py-3'>
                <TextField />
            </form>

            <Bots />
            
        </div>
    );
};

export default Homepage;