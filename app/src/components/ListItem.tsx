import React from 'react';
import { List, Avatar } from 'antd';


interface ItemProps {
    name: string;
    imageUrl: string;
}

const ListItem: React.FC<ItemProps> = ({name, imageUrl}) => {
    return (
      <div className="flex">
        <Avatar src={imageUrl} className="w-10 h-10 mr-4" />
        <List.Item>
            <List.Item.Meta
              title={name}
            />
        </List.Item>
      </div>
    );
};

export default ListItem;