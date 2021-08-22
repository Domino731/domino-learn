import {useEffect} from 'react';
import {useHistory} from "react-router-dom";
// @ts-ignore
export const RouterScrollToTop = () => {
    const history = useHistory()
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}
