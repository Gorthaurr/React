import React, {useEffect, useContext, useState} from 'react';
import Card from './Card'
import {Button, Row, Col, Carousel} from 'antd'
import { CardContentResponse } from '../models/response/CardContentResponse';

interface Props{
    cardContent: CardContentResponse[]
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const GetCardsContent: React.FC<Props> = ({cardContent, onClick}) => {

    return (
        <div style={{ display: 'flex', marginTop: '100px' }}>      
              <Row gutter={[8, 8]}>
                  {cardContent.map((card, index) => (
                      <Col span={8} key={index}>
                          <Card title={card.title} content={card.card_content} price={card.price} id={card.card_content_id} key={card.card_content_id} onClick={onClick}></Card>
                      </Col>
                  ))}
              </Row>
        </div>
    )
}

export default GetCardsContent