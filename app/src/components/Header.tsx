import React, {useContext} from 'react';
import { Layout, Button } from 'antd';
import {Context} from '../index'
import {observer} from 'mobx-react-lite'
import { useNavigate } from 'react-router-dom'


const { Header } = Layout;

interface Props {
    title: string;
    logoUrl: string;
}

const AppHeader: React.FC<Props> = ({ title, logoUrl }) => {
    const {store} = useContext(Context)
    const navigate = useNavigate()

    return (
        <Header style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logoUrl} alt="logo" style={{ marginRight: '20px' }} />
            <span style={{ flexGrow: 1, textAlign:'center', fontFamily: 'bold', fontSize: '40px' }}>{title}</span>
            {!store.isAuth  && window.location.href != 'http://localhost:3000/auth' ? <Button style={{ margin: '0 10px'}} type="primary" htmlType="submit" onClick={() => navigate('/auth')} >
                login
            </Button>: null}
            {store.isAuth ? <Button style={{ margin: '0 10px'}} type="primary" htmlType="submit" onClick={() => store.logout()}>
                Logout
            </Button>: null}
        </Header>
    );
};


export default observer(AppHeader);