import {useEffect, useState, useRef} from 'react';
import { Layout, Menu } from 'antd';
import { MenuClickEventHandler } from "rc-menu/lib/interface";
import CardService from '../service/CardService';
import {AllCategory} from '../models/response/AllCategory'

const { Sider } = Layout;

interface Props{
  onClickHeandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
  categoryes: AllCategory[]
}


const SideMenu: React.FC<Props> = ({categoryes, onClickHeandler}) => {
  return (
    <div style={{marginTop: '100px'}}>
    <Sider>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
      > 
        {categoryes.map((cat, index) => (
          <Menu.Item key={index}>
            <span onClick={onClickHeandler}>{cat.category}</span>
          </Menu.Item>
        ))}  
      </Menu>
    </Sider>
    </div>
  );
};

export default SideMenu;