import { Avatar,Card,message } from 'antd';
import { PhoneOutlined, MailOutlined, GithubOutlined } from '@ant-design/icons';
const { Meta } = Card;
function DeveloperInfo(){
    return(
        <div>
            <Card
            hoverable
    style={{
      textAlign:'left',
      marginRight:'5px',
      height:'150px'
    }}

    actions={[
      <GithubOutlined
      onClick={()=>{
        window.open('https://github.com/aver1001')
      }} key="setting" />,
      <PhoneOutlined
      onClick={()=>{
        navigator.clipboard.writeText('01038367917')
        message.success('전화번호를 복사했습니다.')
      }}
      key="edit" />,
      <MailOutlined
      onClick={()=>{
        navigator.clipboard.writeText('aver100196@gmail.com')
        message.success('이메일을 복사했습니다.')
      }} key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="박승수"
      description="안녕하세요"
    />
  </Card>

        </div>

    )
}

export default DeveloperInfo