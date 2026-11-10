import { useId, useState } from 'react';
import styles from './AskForm.module.scss';

const AskForm = ({ onAsk, id, className = '' }) => {
    const [question, setQuestion] = useState('');
    const generatedId = useId();
    const inputId = id ?? generatedId;

    const handleSubmit = (e) => {
        e.preventDefault();
        const trimmed = question.trim();
        if (!trimmed) return;
        onAsk?.(trimmed);
    };

    return (
        <form className={`${styles.form} ${className}`} onSubmit={handleSubmit} role="search">
            <label htmlFor={inputId} className="visually-hidden">
                Your question
            </label>
            <input
                id={inputId}
                className={styles.input}
                type="text"
                name="question"
                autoComplete="off"
                placeholder="Your Question Goes Here"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
            />
            <button type="submit" className={styles.submit}>
                Ask
            </button>
        </form>
    );
};

export default AskForm;
