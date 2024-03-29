//Здесь только визуал и состояния переменных, сама логика находится в папке store
import React, {useContext, useState} from 'react';
import { Form, Input, Button } from 'antd';
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import { NavLink, useNavigate } from 'react-router-dom'
// interface Props {
//   onSubmit: (values: any) => void;
// }

const Login: React.FC = () => {
  const [email, setEmail]  = useState<string>('') // строки объявления нужных переменных
  const [password, setPassword]  = useState<string>('')
  const [form] = Form.useForm(); //форма из antd
  const {store} = useContext(Context)//передаём контекст  класса store чтобы использовать его функции
  const navigate = useNavigate()


  async function handleLogin() {
    const response = await store.login(email, password)
    if (response === 200){
      navigate('/')
    }

  }

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
      <Form.Item style={{ display: "flex", justifyContent: "center" }}>
      
        <Button style={{ margin: '0 10px'}} type="primary" htmlType="submit"  onClick={() => {handleLogin()}}>
          Log in
        </Button>
   
        <Button  style={{ margin: '0 10px'}} type="primary" htmlType="submit" onClick={() => store.registration(email, password)}>
          registration
        </Button>
      </Form.Item>
    </Form>
  );
};

export default observer(Login);