import { useEffect } from "react"
import Down from "./Down"
import DownNone from "./DownNone"
import { Card } from "antd"
function DownLoadMain(){
    let detectList = []
    //let detectList = [{'carNumber':12,'violation':'정지선위반','imgUrl':'https://search.pstatic.net/common/?src=http%3A%2F%2Fimage.nmv.naver.net%2Fblog_2020_12_29_2855%2F134cb4a5-4999-11eb-850b-a0369ff95ec0_01.jpg&type=a340'}]
    useEffect(()=>{
        //axois로 완로된 데이터 받아오기
        //detectList = []
    },[])

    return(
        <div
        className="MainWarp">
            <div className="site-card-border-less-wrapper"
            style={{
                height:'86.4vh',
            }}>
                <Card
                title="Download"
                bordered={true}
                style={{
                    textAlign:'center',
                    margin:'auto',
                    height:790,
                    minWidth:500,
                    maxWidth:1200
                }}>
                    {   
                    detectList.length === 0?
                    <DownNone/>:
                    detectList.map((e)=>{
                        return(
                            <Down info={e}/>
                        )
                    })
                }
                </Card>
                


                </div>

        </div>

        


    )
}

export default DownLoadMain