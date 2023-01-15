import React, {useEffect, useContext, useState} from 'react';
import {IUser} from './models/IUser'
import LoginForm from './components/LoginForm'
import Card from './components/Card'
import {Context} from './index'
import {observer} from 'mobx-react-lite'
import { Button, Spin } from 'antd';
import UserService from './service/UserService';
import Store from './store/store';
import GetUsers from './components/GetUsers';

function App() {

  const {store} = useContext(Context)

  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])


  if (store.isLoading) {
    return <Spin tip="Loading"/>
  }

  if (!store.isAuth) {
    return (
      <>
      <LoginForm/>
      </>
    )
  }

  // if (!store.user.isActivated) {
  //   return <h1>Активируйте аккаунт через электронную почту</h1>
  // }
 
  return (
    <div className="App">
  
    <div>
      {/* <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : 'АВТОРИЗУЙТЕСЬ'}</h1>
      <h1>{store.user.isActivated ? `Акаунт подтверждён` : 'Подтвердите аккаунт'}</h1> */}
      <Button type="primary" htmlType="submit" onClick={() => store.logout()}>
          Logout
      </Button>
      <Card title='asdas' content="asdasdasd"></Card>
      {/* <GetUsers></GetUsers> */}
    </div>
    </div>
  );
}

export default observer(App);
