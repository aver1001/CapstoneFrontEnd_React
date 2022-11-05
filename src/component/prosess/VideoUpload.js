import { CloudUploadOutlined,FileAddTwoTone } from '@ant-design/icons';
import { Button, Divider, message } from 'antd';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Upload (){
    const imageInput = useRef();
    let [fileList,setFileList] = useState([])
    let [isDragOver,setIsDragOver] = useState(false)
    let [isLoading,setIsLoading] = useState(false)
    const {jwtToken} = useSelector(state => state.jwtToken);

    


    const onCickImageUpload = () => {
        imageInput.current.click();
      };
    const onRemove = (name) =>{
        setFileList([...(fileList.filter(file => file.name !== name))])
        console.log(fileList)
    }

    const dragFileUpload = (data) => {
        let temp = []
        let isVideo = true
        Object.values(data).map((e)=>{
            if (['py'].includes(e.name.split('.').at(-1))){
                temp.push(e)
                
            }else{
                console.log(e)
                isVideo = false
            }

            if (isVideo == false){
                message.error('동영상만 업로드 가능합니다.')
            }

        })
        setFileList(temp)
        
    };
    const serverFileUpload = () =>{
        if (fileList.length === 0){
            message.error('선택된 파일이 없습니다.')
        }else{
            setIsLoading(true)
            
            fileList.map((e)=>{
                console.log(e)
                let formData = new FormData()
                formData.append("user_video",e)
            axios({
                baseURL:'http://localhost:8000',
                url:'api/video/',
                method:'POST',
                data:formData,
                headers: {
                    Authorization : `Bearer ${jwtToken}`,
                    'Content-Type' : 'multipart/form-data',
                }}).then(()=>{
                    message.success('파일을 서버에 업로드 했습니다')})
                .catch(()=>{message.error('업로드를 실패하였습니다')})
        })}
        setIsLoading(false)
        
    }
    

    return(
        <div>
            <div 
                bordered={true}
                style={{
                    textAlign:'center',
                    margin:'auto'}}>

                <input type='file' multiple ref={imageInput}
                onChange={(e)=>{

                    dragFileUpload(e.target.files)
                    // if(!e.target.files){
                    //     return;
                    // }
                    // setFileList(Object.values(e.target.files))
                    // let formData = new FormData()
                    // formData.append("user_video",e.target.files[0])
                    // axios({
                    //     baseURL:'http://localhost:8000',
                    //     url:'api/video/',
                    //     method:'POST',
                    //     data:formData,
                    //     headers: {
                    //         Authorization: `Bearer ${jwtToken}`,
                    //         'Content-Type' : 'multipart/form-data',
                    //     }
                    // })
                    // .then((e)=>{
                    //     message.success('파일을 서버에 업로드 했습니다')
                    // })
                    // .catch((e)=>{
                    //     console.log(e)
                    // })
                }}
                style={{
                    display:'none'
                }}>
                </input>

               
                <h2
                className={isDragOver?'dropFileUpload over':'dropFileUpload'}
                onClick={onCickImageUpload}
                onDragOver={(e)=>{
                    e.preventDefault();
                    setIsDragOver(true)
                }}
                onDrop={(e)=>{
                    e.preventDefault();
                    dragFileUpload(e.dataTransfer.files)
                    setIsDragOver(false)
                }}
                onDragEnter={(e)=>{
                    e.preventDefault();
                    setIsDragOver(true)
                }}
                onDragLeave={(e)=>{
                    e.preventDefault();
                    setIsDragOver(false)
                }}>
                    <p style={{fontSize:'80px',marginTop:'20px'}}><FileAddTwoTone /></p>
                    <p style={{marginTop:'-70px'}}>영상을 업로드 해주세요</p>
                    <p
                    style={{fontSize:'15px',fontWeight:'400',marginTop:'-10px',color:'gary'}}>드롭다운, 클릭을 지원합니다</p>
                </h2>

                <Divider/>
                <div
                style={{
                }}>
                    {
                    fileList.map((e,key)=>{
                        return(
                            <div>
                                {e.name} <span> <Button
                                danger
                                style={{
                                    marginLeft:'auto'
                                }}
                                onClick={()=>{
                                    onRemove(e.name)
                                }
                                }>A</Button>  </span>
                                <hr></hr>
                            </div>
                        )
                    })
                }

                <Button
                type="primary"
                size='large'
                loading={isLoading}
                onClick={serverFileUpload}>
                    <CloudUploadOutlined />전송하기
                </Button>
                </div>
            </div>
        </div>


    )
}
export default Upload