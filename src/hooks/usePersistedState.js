import { useState, useEffect } from "react";
export default function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(
    () => JSON.parse(sessionStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
