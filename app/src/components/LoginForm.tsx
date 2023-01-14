import React, {useContext, useState} from 'react';
import { Form, Input, Button } from 'antd';
import {Context} from '../index'
import {observer} from 'mobx-react-lite'

// interface Props {
//   onSubmit: (values: any) => void;
// }

const Login: React.FC = () => {
  const [email, setEmail]  = useState<string>('')
  const [password, setPassword]  = useState<string>('')
  const [form] = Form.useForm();
  const {store} = useContext(Context)


  return (
    <Form form={form}>
      <Form.Item
        name="Email"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input 
          placeholder="Email" 
          onChange={e => setEmail(e.target.value)}
          value={email}
          type = 'text'
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password 
          placeholder="Password" 
          onChange={e => setPassword(e.target.value)}
          value={password}
          type = 'text'
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" onClick={() => store.login(email, password)}>
          Log in
        </Button>
        <Button type="primary" htmlType="submit" onClick={() => store.registration(email, password)}>
          registration
        </Button>
      </Form.Item>
    </Form>
  );
};

export default observer(Login);