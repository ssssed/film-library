import { IFilm } from "../types";

export const useSessionStorage = (key: string) => {
  const sessionStorageData = JSON.parse(sessionStorage.getItem(key));

  const handleUpdateSessionStorage = (data: IFilm) => {
    sessionStorage.removeItem(key);
    sessionStorage.setItem(key, JSON.stringify(data));
  };

  return [sessionStorageData, handleUpdateSessionStorage];
};
