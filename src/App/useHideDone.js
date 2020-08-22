import { useLocalStorageState } from "./useLocalStorageState";

export const useHideDone = () => {
  const [hideDone, setHideDone] = useLocalStorageState("hideDone", false);
  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  return [hideDone, toggleHideDone]
};