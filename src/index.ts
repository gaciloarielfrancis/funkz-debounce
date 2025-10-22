export default function debounce<T extends (...args: any[]) => void> (
    func: T,
    delay: number,
    immediate: boolean = false
    ): (...args: Parameters<T>) => void {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        const callNow = immediate && !timeoutId;

        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!immediate) func(...args);
        }, delay);

        if (callNow) func(...args);
    };
}