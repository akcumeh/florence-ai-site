import MaskIcon from '../MaskIcon/MaskIcon';
import styles from './Button.module.scss';

const isExternal = (href) => /^https?:\/\//.test(href);

const brandClass = {
    whatsapp: styles.brandWhatsapp,
    telegram: styles.brandTelegram,
};

const Button = ({ variant = 'solid', brand, icon, href, className = '', children, ...rest }) => {
    const classes = [
        styles.button,
        styles[variant],
        brand && styles.brand,
        brand && brandClass[brand],
        icon && styles.withIcon,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const content = (
        <>
            {icon && <MaskIcon src={icon} className={styles.icon} />}
            <span className={styles.label}>{children}</span>
        </>
    );

    if (href !== undefined) {
        const external = href && isExternal(href);
        return (
            <a
                className={classes}
                href={href || undefined}
                aria-disabled={href ? undefined : 'true'}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...rest}
            >
                {content}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...rest}>
            {content}
        </button>
    );
};

export default Button;
