import { createContext } from 'react';

type IsLoadingContextType = {
  isLoading: boolean;
};

export const IsLoadingContext = createContext<IsLoadingContextType>({
  isLoading: false,
});
