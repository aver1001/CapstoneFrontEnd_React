import { Divider, Progress } from 'antd';
import { CloudSyncOutlined} from '@ant-design/icons';


function Detecting(){
    return(
      <div>
        <Progress
        style={{
            marginTop:'50px',
            marginBottom:'50px',
            height:'150px',
            marginTop:'100px'
        }}
      type="circle"
      strokeColor={{
        '0%': '#108ee9',
        '100%': '#87d068',
      }}
      percent={66}
      
    />
    <Divider/>
    <div
    style={{
      fontSize:'20px'
    }}>
      {/* <CloudSyncOutlined /> */}

      작업을 진행중입니다<p>잠시만 기다려주세요</p> 

    </div>
    
    
      </div>

        

    )
}

export default Detecting