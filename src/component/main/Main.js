import { Carousel,Col, Row } from 'antd';
import Comments from './Comments';
import Detail from './Detail';
import CommentsList from './CommentsList';
import DeveloperInfo from '../developer/DeveloperInfo';
import Mainmain from './ Mainmain';

function Main(){

    return(
        <div
        className='MainWarp'
        style={{
            height:'110vh',
            margin:'auto',
            marginTop:'64px',
            maxWidth:'1200px',
            
        }}>
            <div
            style={{
                height:'400px',
                backgroundColor:'#64A0FF',
                marginBottom:'10px'
            }}>
                <Mainmain></Mainmain>
            </div>
            
            <Row>
                <Col span={8}>
                <DeveloperInfo/>
                <DeveloperInfo/>
                    <h1
                    onClick={()=>{window.open('https://aver1001.github.io')}}
                    style={{
                        textAlign:'center',
                        backgroundColor:'#64A0FF',
                        marginRight:'5px',
                        marginTop:'10px',
                        height:'105px'
                    }}
                    >자세한 프로젝트 <p>설명 보러가기</p></h1>
                </Col>
                <Col span={16}><Detail/></Col>
            </Row>
            <Row>
                <Col span={8}>
                    <Comments/>
                </Col>
                <Col span={16}>
                    <CommentsList/>
                </Col>
            </Row>
            


            
        </div>
    )
}

export default Main