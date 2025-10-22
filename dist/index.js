export default function debounce(func, delay, immediate = false) {
    let timeoutId = null;
    return (...args) => {
        const callNow = immediate && !timeoutId;
        if (timeoutId)
            clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!immediate)
                func(...args);
        }, delay);
        if (callNow)
            func(...args);
    };
}
