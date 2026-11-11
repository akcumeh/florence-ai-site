import { ASK_INPUT_ID } from '../content/links';

export function focusAskInput() {
    const input = document.getElementById(ASK_INPUT_ID);
    if (!input) return;
    input.scrollIntoView?.({ block: 'center' });
    input.focus({ preventScroll: true });
}
