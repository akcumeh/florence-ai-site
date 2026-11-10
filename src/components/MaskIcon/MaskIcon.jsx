import styles from './MaskIcon.module.scss';

const MaskIcon = ({ src, width, height, label, className = '', style }) => (
    <span
        className={`${styles.icon} ${className}`}
        style={{ ...style, '--icon': `url("${src}")`, width, height }}
        {...(label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': 'true' })}
    />
);

export default MaskIcon;
