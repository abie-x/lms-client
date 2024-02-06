import axios from "axios";
import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL} from '../constants/userConstants'

//logic to login the userinfo to redux
export const login = (phoneNumber, password) => async (dispatch) => {
    try {
        console.log("iam handling login requests")
      dispatch({
        type: USER_LOGIN_REQUEST,
      })
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
  
      const { data } = await axios.post(
        'https://lobster-app-yjjm5.ondigitalocean.app/api/teachers/login',
        { phoneNumber, password },
        config
      )

      console.log(data)
  
      dispatch({
        type: USER_LOGIN_SUCCESS,
        payload: data,
      })
  
      localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        console.log('iam printing the error,', error)
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          'Invalid credentials'
      })
    }
  }