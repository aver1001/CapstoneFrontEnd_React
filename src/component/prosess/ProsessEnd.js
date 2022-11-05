import { SmileOutlined } from '@ant-design/icons';
import { Button, Divider, Result } from 'antd';
import { useNavigate } from 'react-router-dom';
function ProsessEnd(){
    let Nav = useNavigate();
    return(
        <div>
            <Result
            style={{
            marginTop:'80px',
            marginBottom:'30px'
            }}
            icon={<SmileOutlined />}
            title="모든 작업이 완료되었습니다!"
            />
            <Divider/>
            <Button 
            onClick={()=>{
            Nav('/Download')
            }}
            type="primary">영상 다운받으러 가기</Button>

        </div>
        
    )
}

export default ProsessEnd