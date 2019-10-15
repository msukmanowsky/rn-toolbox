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
export default function useAsyncStorage<T>(key: string, initialState: (() => T | T)): [T, (arg: () => T | T) => void];
//# sourceMappingURL=useAsyncStorage.d.ts.map