import { Button, Form, Input, Card,message } from 'antd';
import 'antd/dist/antd.css';
import {  useNavigate } from 'react-router-dom';
import axios from 'axios';
import useLocalStorage from '../utils/useLocalStorage';
import { useDispatch } from 'react-redux';
import  {changeJWT } from '../../store'

function Login(){
    let Nav = useNavigate();
    let Dispatch = useDispatch();
    let [jwtToken,setJwtToken] = useLocalStorage('jwtToken',"");


    const onFinish = (values) => {
        axios.post("http://localhost:8000/api/token/",{'username':values.username, 'password':values.password})
        .then((e)=>{
          setJwtToken(e.data['token'])
          Dispatch(changeJWT(e.data['token']))
          message.success('로그인에 성공했습니다')
          Nav('/main')
        }
        ).catch((e)=>{
          message.error('로그인에 실패했습니다')
        })
        
      };
    
      const onFinishFailed = (errorInfo) => {

      };
    
      return (
        <div className="site-card-border-less-wrapper"
        style={{
            backgroundColor:'#e5e5e5',
            height:'87vh'
        }}>
        <Card
          title="LogIn"
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
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
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
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
    
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
            style={{
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <div
            onClick={()=>{
                Nav('/Signup',{replace : true})
            }}
            style={{
                marginTop:'5px',
                color:'#0096FF'
            }}>
                아이디가 없으신가요?
            </div>
          </Form.Item>
        </Form>

        </Card>
      </div>
        
      );
}

export default Login