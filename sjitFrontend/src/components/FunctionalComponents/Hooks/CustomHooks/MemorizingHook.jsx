import { useState, useEffect } from "react";
const useMemorize = (key, value) => {
  var [text, setText] = useState(() => {
    var jsonValue = localStorage.getItem(key);
    if (jsonValue !== null) {
      return JSON.parse(jsonValue);
    }
    return value;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [text, setText];
};
export default useMemorize;
