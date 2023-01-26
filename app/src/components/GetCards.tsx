import React, {useEffect, useContext, useState} from 'react';
import {CardResponse} from '../models/response/CardResponse';
import Card from './Card'
import ListItem from './ListItem';
import AppHeader from './Header'
import CardService from '../service/CardService';
import {Button, Row, Col, Carousel} from 'antd'

const GetCards: React.FC = () => {
    const [cards, setCards] = useState<CardResponse[]>([])
    const [click, setClick] = useState<boolean>(false)

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

    async function getCard(id: number) {
        try{
            const response = await CardService.fetchCardContent(id)
            setClick(true)
            console.log(click)
        }
        catch(e){
            console.log(e)
        }
    }

    if (click) {
        return(
            <>
                <div>asdasdasdas</div>
            </>
        )
    }
    return(
        <div style={{ margin: "150px", marginLeft: '200px', display: 'flex' }}>      
                <Row gutter={[8, 8]} style={{ margin: "-30px -30px", padding: "30px" }}>
                    {cards.map((card, index) => (
                        <Col span={8} key={index}>
                            <Card title={card.title} content={card.content} key={card.id} onClick={() => getCard(card.id)}></Card>
                        </Col>
                    ))}
                </Row>
        </div>
    )

}

export default GetCards;