import { Button, Result, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { CloseCircleOutlined } from '@ant-design/icons';
const { Paragraph, Text } = Typography;

function DownNone(){
    const Nav = useNavigate();
    return(
        <div>
            <Result
            status="warning"
            title="검출된 영상이 없습니다."
            style={{
                backgroundColor:'white'
            }}
        />
        <div className="desc">
      <Paragraph>
        <Text
          strong
          style={{
            fontSize: 16,
          }}
        >
          영상이 존재하지 않는 이유는 크게 두가지가 존재합니다.
        </Text>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined style={{ color:'red'}} /> 영상을 업로드하시지 않으셨나요? <a onClick={()=>{Nav('/prosess')}}> 영상 업로드 하러가기 &gt;</a>
      </Paragraph>
      <Paragraph>
        <CloseCircleOutlined style={{ color:'red'}} /> 영상을 업로드했지만 검출된 영상이 없으신가요? <a onClick={()=>{Nav('/info')}}>도움말 보러가기 &gt;</a>
      </Paragraph>
    </div>

        </div>
        
    )
}
export default DownNone