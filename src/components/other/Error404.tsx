import {FunctionComponent} from "react";
import {ErrorContainer, ErrorImg, ErrorText} from "../../style/elements/other/error";
import astronaut from "../../images/astronaut.png"
import {useEffect, useState} from "react";
import {useHistory} from "react-router";
import {IFPropsError404} from "../../types/types";

export const Error404: FunctionComponent<IFPropsError404> = ({redirectPath}): JSX.Element => {

    const [redirectTime, setRedirectTime] = useState(10)

    const history = useHistory()
    useEffect(() => {

        // do a countdown
        const countdown = setInterval(() => {
            setRedirectTime(prev => prev - 1)
        }, 1000)

        // redirect after 5s
        setTimeout(() => {
            clearInterval(countdown)
            history.push(redirectPath)
        }, 10000)
    }, [])

    return <ErrorContainer>

        <ErrorImg src={astronaut} alt="astronaut" />
        <ErrorText>
            <h1>Error 404.</h1>
            <strong>You will be redirected after {redirectTime}s.</strong>
            <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons"
                                  title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/"
                                                                            title="Flaticon">www.flaticon.com</a></div>
        </ErrorText>

    </ErrorContainer>
}