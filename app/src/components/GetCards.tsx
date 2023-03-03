import React, {useEffect, useContext, useState} from 'react';
import {CardResponse} from '../models/response/CardResponse';
import Card from './Card'
import {Context} from '../index'
import ListItem from './ListItem';
import AppHeader from './Header'
import CardService from '../service/CardService';
import {Button, Row, Col, Carousel} from 'antd'
import { CardContentResponse } from '../models/response/CardContentResponse';
import {observer} from 'mobx-react-lite'

const GetCards: React.FC = () => {
    const [cards, setCards] = useState<CardResponse[]>([])
    const {store} = useContext(Context)

    async function getCards() {
        try{
            const response = await CardService.fetchCards()
            console.log(response)
            setCards(response.data)
        }
        catch(e)
        {
            console.log(e)
        }
    }
    useEffect(() => {
        getCards();
    }, []);


    return(
        <div style={{ display: 'flex',  marginLeft: '100px',  marginTop: '100px'}}>      
                <Row gutter={[8, 8]}>
                    {cards.map((card, index) => (
                        <Col span={8} key={index}>
                            <Card title={card.title} content={card.content} key={card.id} onClick={() => store.GetCardContent(card.id)}></Card>
                        </Col>
                    ))}
                </Row>
        </div>
    )

}

export default observer(GetCards);