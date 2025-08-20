import { useTheme } from '../contexts/ThemeContext';

const ProductHuntWidget = () => {
    const { isDark } = useTheme();

    return (
        <div className="flex justify-center my-4">
            <a 
                href="https://producthunt.com/products/florence-ai?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-florence&#0045;ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`inline-block rounded-lg p-2 border transition-all duration-200 hover:scale-105 ${
                    isDark 
                        ? 'bg-floBlack border-floAsh' 
                        : 'bg-floWhite border-floBlue'
                }`}
            >
                <img 
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1005300&theme=dark&t=1755461552188" 
                    alt="Florence AI - The AI assignment tool for STEM student | Product Hunt" 
                    style={{ width: '250px', height: '54px' }} 
                    width="250" 
                    height="54" 
                />
            </a>
        </div>
    );
};

export default ProductHuntWidget;