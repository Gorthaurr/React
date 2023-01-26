import React, {useEffect, useContext, useState} from 'react';
import {IUser} from './models/IUser'
import LoginForm from './components/LoginForm'
import Card from './components/Card'
import {Context} from './index'
import {observer} from 'mobx-react-lite'
import { Button, Spin } from 'antd';
import UserService from '../../app/src/service/UserService';
import Store from './store/store';
import GetUsers from './components/GetUsers';
import GetCards from './components/GetCards';
import Header from './components/Header';
import Footer from './components/Footer';

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

  if (store.isClickLogin && !store.isAuth) {
    return (
      <>
      <Header title="Delivery club" logoUrl='https://zenpromokod.ru/wp-content/uploads/2022/12/promokod_delivery_club.webp'></Header>
      <LoginForm/>
      <Footer></Footer>
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
      <Header title="Delivery club" logoUrl='https://zenpromokod.ru/wp-content/uploads/2022/12/promokod_delivery_club.webp'></Header>
      <GetCards></GetCards>
      <Footer></Footer>
      {/* <GetUsers></GetUsers> */}
    </div>
    </div>
  );
}

export default observer(App);
