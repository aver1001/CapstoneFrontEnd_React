import { Input,Form, Button, message} from "antd"
import axios from "axios";

function Comments(){

    const onFinish = (values) => {
        axios.post('http://localhost:8000/api/comment/',{
            'content':values.content,
            'name':values.name
        }).then((e)=>{
            message.success('방명록을 등록했습니다.')
        }).catch((e)=>{
            message.warning('등록이 실패했습니다.')
        })
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
   return(
       <div
       style={{
           marginTop:'-5px',
           marginRight:'5px'
       }}>
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
        label="성함"
        name="name"
        rules={[
          {
            required: true,
            message: '성함을 적어주세요 :)',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="한줄 인삿말"
        name="content"
        rules={[
          {
            required: true,
            message: '인삿말을 적어주세요 :)',
          },
        ]}
      >
        <Input />
      </Form.Item>


      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
           
       </div>

   )

}

export default Comments