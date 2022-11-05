import axios from "axios"
import { useEffect, useState } from "react"

function Test2(){
    let [videoList,setVideoList] = useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/video/')
        .then((request)=>{
            setVideoList(request.data)
            console.log(request.data)
        })
        .catch(()=>{
            console.log('실패')
        }  )
    },[])
    
    return(
        <div
        style={{
            marginTop:'64px',
            alignContent:'center',
        }}>
            {videoList.map((e)=>{
                console.log(e)
                return(
                    <div>
                        <video
                        controls
                        style={{
                            width:'400px'
                        }}
                        src={e.path}>
                        </video>
                        
                    </div>
                    
                )
            })}

            <button
            onClick={()=>{
                axios.delete('http://localhost:8000/api/video/',{ data: { id: 3 } })
                .then(()=>{
                    console.log('S')
                }).catch(()=>{
                    console.log('F')
                })
            }}>삭제

            </button>
        </div>


    )
}

export default Test2