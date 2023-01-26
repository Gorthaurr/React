import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const FooterComponent: React.FC = () => {
    return (
        <Footer style={{
            position: 'absolute',
            bottom: 0,
            width: '100%',
            textAlign: 'center'
        }}>
            Ant Design ©2018 Created by Ant UED
        </Footer>
    );
};

export default FooterComponent;
