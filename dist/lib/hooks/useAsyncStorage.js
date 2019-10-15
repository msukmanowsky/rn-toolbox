import { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";
/**
 * Sync state to AsyncStorage so that it persists when an app is closed. Values
 * must be JSON-serializable.
 *
 * ```typescript
 * const [thing, setThing] = useAsyncStorage(null);
 * ```
 *
 * @param key Key of the item to fetch
 * @param initialState Initial state (if key is not found in AsyncStorage)
 * @returns tuple with `[value, setValue]` (calls to `setValue` will persist to
 *  AsyncStorage)
 */
export default function useAsyncStorage(key, initialState) {
    const [storedValue, setStoredValue] = useState(initialState);
    useEffect(() => {
        AsyncStorage.getItem(key)
            .then(value => {
            if (value === null)
                return initialState;
            return JSON.parse(value);
        })
            .then(setStoredValue);
    }, [key]);
    const setValue = (value) => {
        const valueToStore = value instanceof Function ? value() : value;
        setStoredValue(valueToStore);
        AsyncStorage.setItem(key, JSON.stringify(valueToStore));
    };
    return [storedValue, setValue];
}
