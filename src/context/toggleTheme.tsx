import React, { createContext } from "react";
import { DefaultTheme } from "styled-components";

import usePersistedState from "../hooks/usePersistentState";
import modern from "../styles/themes/modern";
import classic from "../styles/themes/classic";
import { KEY_LOCAL_STORAGE_THEME } from "../constants/localStorage";
import { MODERN } from "../constants/theme";
import { CLASSIC } from '../constants/theme'

interface ThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>(
    KEY_LOCAL_STORAGE_THEME,
    classic
  );

  function toggleTheme() {
    setTheme(theme.title === MODERN ? classic : modern);
  }

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
