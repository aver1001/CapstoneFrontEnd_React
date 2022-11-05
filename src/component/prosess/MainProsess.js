import { Card,Button } from 'antd';
import { useEffect, useState } from 'react';
import Upload from './VideoUpload';
import Progress from './Progress';
import Detecting from './Detecting';
import ProsessEnd from './ProsessEnd';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Prosess(){
    let [progress,setProgress] = useState(0);
    const {jwtToken} = useSelector(state => state.jwtToken);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/video/',{headers :{Authorization : `Bearer ${jwtToken}`}})
        .then((e)=>{
            console.log(e)
            if (e.data.length === 0){
                setProgress(0)
            }else{
                setProgress(1)
            }
        }).catch((e)=>{
            console.log(e)
        })   
    },[])

    return(
        <div
        className='MainWarp'
        style={{
            height:'89vh',
        }}>
            <div className="site-card-border-less-wrapper">
                <Card
                title="Progress"
                bordered={true}
                style={{
                    textAlign:'center',
                    margin:'auto',
                    height:790,
                    minWidth:500,
                    maxWidth:1200
                }}
                >
                    <div>
                        <Progress state={progress}>
                        </Progress>
                    </div>

                <div>
                    {
                        progress === 0?
                        <Upload/>
                        : progress === 1?
                        <Detecting></Detecting>:
                        <ProsessEnd></ProsessEnd>



                    }
                    

                </div>
                
                <span onClick={()=>{
                    setProgress(progress -1)
                }}>LEFT</span> 
                <span> {progress}</span>
                <span onClick={()=>{
                    setProgress(progress +1)
                }}>RIGHT</span>
                </Card>
            </div>
        </div>

            

        
    )
}

export default Prosess