import {FunctionComponent} from "react";
import {ErrorContainer, ErrorImg, ErrorText} from "../../style/elements/other/error";
import astronaut from "../../images/astronaut_404.svg"
import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {IFPropsError404} from "../../types/types";
import { Link } from "react-router-dom";

/**
 * Component which is responsible for 404 error handling and redirecting the user to a specific page after 10s
 * @param redirectPath - the address where you want to redirect user
 */
export const Error404: FunctionComponent<IFPropsError404> = ({redirectPath}): JSX.Element => {

    // references
    const history = useHistory();

    // state used for countdown
    const [redirectTime, setRedirectTime] = useState<number>(10);

    useEffect(() => {
        // do a countdown
        const interval = setInterval(() => {
            setRedirectTime(prev => prev - 1);
        }, 1000);

        // redirect after 10s
        const timeout = setTimeout(() => {
            clearInterval(interval);
            history.push(redirectPath);
        }, 10000);

        return () => {
           clearTimeout(timeout);
           clearInterval(interval);
            console.log('Unmounted')
        }
    }, []);

    return <ErrorContainer>
        {/* astronaut graphic */}
        <ErrorImg src={astronaut} alt="astronaut"/>

        {/* notification */}
        <ErrorText>
            <h1>Error 404</h1>
            <strong>You will be redirected after {redirectTime}s.</strong>
            {/* link to home page */}
            <div><Link to='/'>Back to home page</Link></div>
        </ErrorText>
    </ErrorContainer>
}