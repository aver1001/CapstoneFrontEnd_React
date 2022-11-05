import { Button, Card } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CommentListContent from './CommentListContent';


const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };
  

function CommentsList(){
    let {jwtToken} = useSelector(state => state.jwtToken);
    let [commentList,setCommnetList] = useState([]);
    const headers = {Authorization: `Bearer ${jwtToken}`};
    useEffect(()=>{
        axios.get('http://localhost:8000/api/comment/',{headers})
        .then((e)=>{
            console.log(e)
            setCommnetList(e.data)
        })
        .catch((e)=>{
            console.log(jwtToken)
        })
    },[])
    return(
        <div
        style={{
            marginTop:'-5px',
            marginLeft:'5px'
        }}>
            <Card
        style={{
            textAlign:'center'
        }}
        title="방명록">

        <div>
            
        </div>

        <Card.Grid style={gridStyle}>Content</Card.Grid>
        {
            commentList.map((e)=>{
                return(
                    <CommentListContent info={e}>
                    </CommentListContent>
                )
            })
        }

    </Card>
        <Button
        style={{
            alignContent:'center',
            width:'100%'
        }}>더 불러오기</Button>

        </div>
        


    )
}

export default CommentsList