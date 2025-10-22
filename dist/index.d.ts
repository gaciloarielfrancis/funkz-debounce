export default function debounce<T extends (...args: any[]) => void>(func: T, delay: number, immediate?: boolean): (...args: Parameters<T>) => void;
