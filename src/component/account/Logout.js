import { message } from 'antd';
import { useEffect } from "react";
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage"
import { deleteJWT } from '../../store';

function LogOut(){
    let [jwtToken,setJwtToken] = useLocalStorage('jwtToken',"");
    let Nav = useNavigate();
    let Dispatch = useDispatch()
    

    useEffect(()=>{
        setJwtToken('')
        Dispatch(deleteJWT())
        Nav('/main')
        message.success('로그아웃을 했습니다.')
        
    },[])
    

    return(
        <div>

        </div>

    )
}

export default LogOut