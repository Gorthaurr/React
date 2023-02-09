import { Table, Input, Button} from 'antd';
import React, { useState } from 'react';
import { CardContentResponse } from '../models/response/CardContentResponse';
import Card from './Card'

interface Props{
    cardContent?: CardContentResponse[]
}

const Basket: React.FC<Props>  = ({cardContent}) => {
  
  return (
    <div 
    style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: '700px',
        width: '400px',
        height: '800px',
        borderRadius: '10px',
        position: 'fixed',
        bottom: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: 'white'
      }}>
      <div style={{width: '400px', height: '50px', display: 'flex', flexDirection: 'row', margin: '30px', justifyContent: 'space-between'}}>
            <span>Корзина</span>
            <span>Очистить</span>
        </div>  
      <div style={{width: '400px', height: '600px', display: 'flex', flexDirection: 'column'}}>
        {cardContent?.map((card) => (   
            <>
            <Card title={card.title} content={card.card_content} price={card.price} key={card.card_content_id}></Card>
            <span  >{card.count}</span>
            </>    
        ))}
      </div>
      <Button type="primary" htmlType="submit">Заказать</Button>
    </div>
  );
};

export default Basket;
