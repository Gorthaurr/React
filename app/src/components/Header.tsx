import React, {useContext, useState} from 'react';
import { Layout, Menu, Button } from 'antd';
import {Context} from '../index'
import { render } from '@testing-library/react';
import LoginForm from './LoginForm';


const { Header } = Layout;

interface Props {
    title: string;
    logoUrl: string;
}

const AppHeader: React.FC<Props> = ({ title, logoUrl }) => {
    const {store} = useContext(Context)

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoUrl} alt="logo" style={{ marginRight: '20px' }} />
            <span style={{ flexGrow: 1, textAlign:'center', fontFamily: 'bold', fontSize: '40px' }}>{title}</span>
            {!store.isClickLogin && !store.isAuth ?  <Button style={{ margin: '0 10px'}} type="primary" htmlType="submit" onClick={() => store.setClickLogin(true)}>
                login
            </Button>: null}
            {store.isAuth ? <Button style={{ margin: '0 10px'}} type="primary" htmlType="submit" onClick={() => store.logout()}>
                Logout
            </Button>: null}
        </Header>
    );
};


export default AppHeader;