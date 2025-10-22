# funkz-debounce
A lightweight and strongly typed **debounce** utility written in **TypeScript**.  
It helps control how often a function is executed by delaying its execution until a specified amount of time has passed since the last call.

---

## Installation

```bash
npm i funkz-debounce
```

---

## Usage

```ts
import debounce from "funkz-debounce";

function handleInput(value: string) {
  console.log("Search:", value);
}

// Create a debounced version of the function
const debouncedSearch = debounce(handleInput, 500);

// Call multiple times, but it only triggers once after 500ms
debouncedSearch("apple");
debouncedSearch("banana");
debouncedSearch("orange");
```
---

## Function Signature

```ts
debounce<T extends (...args: any[]) => void>(
    func: T,
    delay: number,
    immediate: boolean = false
): (...args: Parameters<T>) => void;
```

### Parameters:
- **func** : The function to debounce.
- **delay** : The time (in milliseconds) to wait before executing.
- **immediate** : If **true**, run the function immediately on the first call, then ignore subsequent calls until the delay passes.

### Example with Immediate Execution

```ts
const logClick = debounce(() => console.log("Clicked!"), 300, true);

document.addEventListener("click", logClick);
```
In this case, the function executes immediately on the first click, then ignores any other clicks for the next 300ms.

### License
MIT © 2025 Ariel Francis Fernando Gacilo