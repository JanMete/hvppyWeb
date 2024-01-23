import { Dispatch, SetStateAction, createContext } from 'react';

export const setActiveLanguageContext = createContext<
  Dispatch<SetStateAction<string>>
>(() => {});
