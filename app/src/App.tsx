import React, {useEffect, useContext, useState} from 'react';
import {Context} from './index'
import {observer} from 'mobx-react-lite'
import {Spin} from 'antd';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/MainPage'
import CardPage from './pages/CardPage';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  const {store} = useContext(Context)
  
  useEffect(() => {
    if (localStorage.getItem('token')) {
      store.checkAuth()
    }
  }, [])

  if (store.isLoading) {
    return <Spin></Spin>
  }
 
  return (
    <BrowserRouter>
      <div className="App">
      <Routes> 
          <Route path='/' element = { <MainPage/> }/>
          <Route path='/auth' element = { <AuthPage/> }/>
          <Route path='/card/:id' element = {<CardPage/>}></Route>
      </Routes>  
      </div>
    </BrowserRouter>
  );
}

export default observer(App);
