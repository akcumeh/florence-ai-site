import { links } from '../../content/links';
import { useTheme } from '../../theme/useTheme';
import styles from './ProductHuntBadge.module.scss';

const badgeSrc = (theme) =>
    `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1005300&theme=${theme}`;

const ProductHuntBadge = ({ className = '' }) => {
    const { theme } = useTheme();

    return (
        <a
            href={links.productHunt}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.badge} ${className}`}
        >
            <img
                src={badgeSrc(theme === 'dark' ? 'dark' : 'light')}
                alt="Florence AI - The AI assignment tool for STEM student | Product Hunt"
                width="250"
                height="54"
                loading="lazy"
            />
        </a>
    );
};

export default ProductHuntBadge;
