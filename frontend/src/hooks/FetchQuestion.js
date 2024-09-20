import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

/** redux actions */
import * as Action from '../redux/question_reducer'
import { getServerData } from "../helper/helper.jsx";

/** fetch question hook to fetch api data and set value to store */
export const useFetchQuestion = () => {
    const dispatch = useDispatch();
    const [getData, setGetData] = useState({ isLoading : false, apiData : [], serverError: null});

    useEffect(() => {
        setGetData(prev => ({...prev, isLoading : true}));

        /** async function fetch backend data */
        (async () => {
            try {
                const serverHostname = import.meta.env.VITE_SERVER_HOSTNAME;
                console.log(serverHostname)
                let [{ questions, answers}] = await getServerData(`${serverHostname}/api/questions`, (data) => data)
                console.log({ questions, answers})
                const randNumb = Math.floor(Math.random() * 6);

                questions = questions[randNumb]
                answers = answers[randNumb]
                console.log(questions)
                console.log(answers)

                if(questions.length > 0){
                    setGetData(prev => ({...prev, isLoading : false}));
                    setGetData(prev => ({...prev, apiData : {questions}}));

                    /** dispatch an action */
                    dispatch(Action.startExamAction({question: questions, answers}))

                } else{
                    throw new Error("No Question Avalibale");
                }
            } catch (error) {
                setGetData(prev => ({...prev, isLoading : false}));
                setGetData(prev => ({...prev, serverError : error}));
            }
        })();
    }, [dispatch]);

    return [getData, setGetData];
}


/** MoveAction Dispatch function */
export const MoveNextQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.moveNextAction()); /** increase trace by 1 */
    } catch (error) {
        console.log(error)
    }
}

/** PrevAction Dispatch function */
export const MovePrevQuestion = () => async (dispatch) => {
    try {
        dispatch(Action.movePrevAction()); /** decrease trace by 1 */
    } catch (error) {
        console.log(error)
    }
}