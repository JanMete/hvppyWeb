import { createContext, Dispatch, SetStateAction } from 'react';
type ActiveLanguageStateContextType = [
  string,
  Dispatch<SetStateAction<string>>
];

export const ActiveLanguageStateContext = createContext<
  ActiveLanguageStateContextType | undefined
>(undefined);
