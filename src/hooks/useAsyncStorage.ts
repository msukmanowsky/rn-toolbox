import { useState, useEffect } from "react";
import { AsyncStorage } from "react-native";


export default function useAsyncStorage(key: string, initialValue: string) {
  const [storedValue, setStoredValue] = useState(initialValue);
  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(value => {
        if (value === null) return initialValue;
        return JSON.parse(value);
      })
      .then(setStoredValue);
  }, [key]);

  const setValue = (value: (arg0: string) => string | string) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    AsyncStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}