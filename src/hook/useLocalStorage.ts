import { IFilm } from "../types";
export const useLocalStorage = (item: string) => {
  const localStorageData = JSON.parse(localStorage.getItem(item)) || [];
  const handleUpdateLocalStorage = <T extends Array<IFilm>>(updateData: T) => {
    localStorage.removeItem(item);
    localStorage.setItem(item, JSON.stringify(updateData));
  };

  return [localStorageData, handleUpdateLocalStorage];
};
