import { Divider,Steps } from 'antd';
import {
    CloudSyncOutlined,
  } from '@ant-design/icons';
const { Step } = Steps;


function Progress(props){
        return(
            <div>
        
                <Steps progressDot current={props.state}>
                    <Step title="영상 업로드" description="영상을 업로드 해주세요" />
                    <Step title="검출 진행중" description="잠시만 기다려주세요 :D" />
                    <Step title="완료" description="진행이 완료되었습니다" />
                </Steps>
        
                <Divider />
            </div>
            )

    
    
    
}
export default Progress