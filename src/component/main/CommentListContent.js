import { Card } from 'antd';
import { useState } from 'react';

const gridStyle = {
    width: '25%',
    textAlign: 'center',
  };

function CommentListContent(props){
    let [isOver,setIsOver] = useState(false);

    return(
        <Card.Grid 
        onMouseOver={()=>{
            setIsOver(true)
        }}
        onMouseLeave={()=>{
            setIsOver(false)
        }}
        style={gridStyle}>{isOver === true ?props.info.content:props.info.name}</Card.Grid>
    )
}

export default CommentListContent