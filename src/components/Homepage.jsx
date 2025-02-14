import TextField from './TextField';
import Bots from './Bots';

const Homepage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen font-yellix bg-floWhite text-floBlack">
            <h1 className="font-2xl mt-smol my-1">Welcome to Florence<span className="text-floBlue">*</span> AI</h1>
            <h2 className="font-xl my-1">Your intelligent academic companion</h2>

            <form action="submit" className='w-xlrg my-2 flex flex-col items-center'>
                <div className='b-[2px] border-floAsh border-solid rounded-lg flex items-center justify-between w-xlrg h-[1/12]'>
                    <button type='' className='bg-floWhite w-3 h-3 p-2 gap-2'>
                        <img src="../assets/images/icons/plus.png" alt="add" />
                    </button>
                    <TextField />
                    <button type="submit" className='bg-floWhite w-5 h-5'>
                        <img src="../assets/images/icons/ai_icon.png" alt="AI" className='w-[100%] h-auto p-0' />
                    </button>
                </div>
            </form>

            <Bots />
            
        </div>
    );
};

export default Homepage;