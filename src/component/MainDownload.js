import { Pagination } from 'antd';
import { useState } from 'react';
import Down from './download/Down';

function Download(){
    let [isDelete,setIsDelete] = useState(false);
    return(
        <div
        className='MainWarp'
        style={{
            height:'87vh',
            margin:'auto',
            marginTop:'64px',
            maxWidth:'1200px',
        }}>

            <Down/>
            <Pagination 
            style={{
                
                backgroundColor:'white',
                textAlign:'center',
                height:'50px'
            }}
            onChange={(e)=>{
                console.log(e)
                // e <= 로 이동해줘야함
            }
            }
            defaultCurrent={1} total={50} />
            

        </div>
    

        
    )
}

export default Download