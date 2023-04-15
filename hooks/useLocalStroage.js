import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      try {
        setValue(JSON.parse(storedValue));
      } catch (err) {
        console.log(err, ': ERRORs');
      }
    }
  }, [key]);

  useEffect(() => {
    if (value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  const removeValue = () => {
    localStorage.removeItem(key);
    setValue(null);
  };

  return { value, setValue, removeValue };
};

export default useLocalStorage;
