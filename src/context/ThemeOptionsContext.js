import {useState, useEffect, createContext} from 'react';

export const ThemeOptionContext = createContext();

export const ThemeOptionProvider = (props) => {
    const [themeOptions, setThemeOptions] = useState('');
    
    

    useEffect(  () => {
        fetch('http://projects.shahadatshuvo.com/softbox/wp-json/wp/v2/theme-options')
        .then(response => response.json())
        .then(data =>  setThemeOptions(data) )  
    },[]);

    

    return (
        <ThemeOptionContext.Provider value={themeOptions}>
            {props.children}
        </ThemeOptionContext.Provider>
    );
}