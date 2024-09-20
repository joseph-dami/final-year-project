import * as Action from '../redux/result_reducer'
import { postServerData } from '../helper/helper'
import axios from 'axios'

export const PushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
}
export const updateResult = (index) => async (dispatch) => {
    try {
        dispatch(Action.updateResultAction(index));
    } catch (error) {
        console.log(error)
    }
}

/** insert user data */
export const usePublishResult = (resultData) => {
    const { result, username } = resultData;
    (async () => {
        try {
            if(result != [] && !username) throw new Error("Couldn't get Result");
            await postServerData(`${import.meta.env.VITE_SERVER_HOSTNAME}/api/result`, resultData, data => data)
        } catch (error) {
            console.log(error)
        }
    })();
}

export const checkUsernameExists = async (username) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_HOSTNAME}/api/result/check-username`, { username });
      return response.data.exists;
    } catch (error) {
      console.error('Error checking username:', error);
      return false; // Return false or handle error as needed
    }
  };