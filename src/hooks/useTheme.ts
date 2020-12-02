import { useContext } from 'react';
import { ThemeContext } from "../context/toggleTheme";

const useTheme = () => {

    let {theme} = useContext(ThemeContext);
    return theme;
}

export default useTheme;