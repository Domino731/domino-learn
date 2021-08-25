import {useEffect} from 'react';
import {useHistory} from "react-router-dom";

// function that allows for scrolling to the top of the page
export const RouterScrollToTop = () => {
    const history = useHistory()
    useEffect(() => {
        const unListen = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unListen();
        }
    }, []);

    return null;
}
