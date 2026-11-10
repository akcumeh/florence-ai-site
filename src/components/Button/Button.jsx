import styles from './Button.module.scss';

const isExternal = (href) => /^https?:\/\//.test(href);

const Button = ({ variant = 'solid', href, className = '', children, ...rest }) => {
    const classes = `${styles.button} ${styles[variant]} ${className}`.trim();

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
                {children}
            </a>
        );
    }

    return (
        <button type="button" className={classes} {...rest}>
            {children}
        </button>
    );
};

export default Button;
