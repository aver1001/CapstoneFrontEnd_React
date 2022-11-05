import { Button, Form, Input, Card, message } from 'antd';
import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup(){

    let Nav = useNavigate();

    
    const onFinish = (values) => {
        if (values.password === values.passwordCheck){
            // 장고로 데이터 넘겨줘야함
            axios.post('http://localhost:8000/api/signup/',{
              "username":values.username,
              "password":values.password,
              "email":values.email,
          }).then((e)=>{
              message.success('회원가입에 성공했습니다!')
              Nav('/Login')
            }).catch((e)=>{
              message.warning('아이디가 중복됩니다')
            })
        }else{
            message.warning('비밀번호가 일치하지 않습니다')
        }
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    
      return (
        <div className="site-card-border-less-wrapper"
        style={{
            backgroundColor:'#e5e5e5',
            backgroundSize:'cover',
            height:'87vh'
            
        }}>
        <Card
          title="SignUp"
          
          bordered={true}
          style={{
            width: 500,
            margin: 'auto',
            marginTop:64,
            top:'20%',
          }}
        >
            <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="ID"
            name="username"
            rules={[
              {
                required: true,
                message: '아이디를 입력해주세요',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: '이메일을 입력해주세요',
              },
            ]}
          >
            <Input />
          </Form.Item>
          
    
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: '비밀번호를 입력해주세요',
              },
            ]}
          >
            <Input.Password/>
          </Form.Item>

          <Form.Item
            label="Password Check"
            name="passwordCheck"
            rules={[
              {
                required: true,
                message: '비밀번호를 다시한번 입력해주세요',
              },
            ]}
          >
            <Input.Password/>
          </Form.Item>
     
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit" >
              Submit
            </Button>
            
          </Form.Item>
          

        </Form>

        </Card>
      </div>
        
      );
}

export default Signup