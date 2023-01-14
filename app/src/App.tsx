import React, {useEffect, useContext, useState} from 'react';
import Header from './components/Header'
import {IUser} from './models/IUser'
import LoginForm from './components/LoginForm'
import {Context} from './index'
import {observer} from 'mobx-react-lite'
import { Form, Input, Button, Spin } from 'antd';
import UserService from './service/UserService';

function App() {

  const {store} = useContext(Context)
  const [users, setUsers] = useState<IUser[]>([])

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  async function getUsers(){
    try{
      const response = await UserService.fetchUsers()
      setUsers(response.data)
    }
    catch(e) {
      console.log(e)
    }
  }

  if (store.isLoading) {
    return <Spin tip="Loading"/>
  }

  if (!store.isAuth) {
    return (
      <>
      <LoginForm/>
      <Button type="primary" htmlType="submit" onClick={() => getUsers()}>
          Get Users
      </Button>
      </>
    )
  }
 
  return (
    <div className="App">
  
    <div>
      <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
      <h1>{store.user.isActivated ? `Акаунт подтверждён` : 'Подтвердите аккаунт'}</h1>
      <Button type="primary" htmlType="submit" onClick={() => store.logout()}>
          Logout
      </Button>
      <Button type="primary" htmlType="submit" onClick={() => getUsers()}>
          Get Users
      </Button>
      {users.map(
        user => <div key={user.id}>{user.email}</div>
      )}
    </div>
    </div>
  );
}

export default observer(App);
