import {FC, useState, useEffect} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import GetCardsContent from '../components/GetCardsContent';
import SideMenu from '../components/SideMenu';
import {CardContentResponse} from '../models/response/CardContentResponse';
import CardService from '../service/CardService';
import {AllCategory} from '../models/response/AllCategory'
import Basket from '../components/Basket';


const CardPage: FC = () => {
  const [card_content, setCardContent]  = useState<CardContentResponse[]>([])
  let [visible_card_content, setVisibleCardContent] = useState<CardContentResponse[]>([])
  const [categoryes, setCategories] = useState<AllCategory[]>([])
  const [card_basket, setCardBasket] = useState<CardContentResponse[]>([])
  const [cards_count, setCardsCount] = useState<number>(1)
  const count = {cards_basket: cards_count}

  async function getCategories(){
    const response = await CardService.fetchAllCategories()
    setCategories(response.data)
  }

  function selectCategories(event: React.MouseEvent<HTMLButtonElement>){
    setVisibleCardContent(card_content.filter(content =>content.category === event.currentTarget.innerText))
  }

    useEffect(() => {
        setCardContent(JSON.parse(localStorage.getItem('cardContent') || ''))
        setVisibleCardContent(JSON.parse(localStorage.getItem('cardContent') || ''))
        getCategories();;
    }, []);

  function addBasket(e: any) {
    const a = visible_card_content.filter(content =>content.title === e.target.innerText)
   
   
    const compare = (a: CardContentResponse, b: CardContentResponse) =>
      a.card_content_id === b.card_content_id &&
      a.card_id === b.card_id &&
      a.title === b.title &&
      a.card_content === b.card_content &&
      a.price === b.price &&
      a.category === b.category;
    const exists = card_basket.some(elementItem =>
      a.findIndex(arrayItem => compare(elementItem, arrayItem)) !== -1
    );

    if (exists) {
      card_basket.filter(content =>content.title === e.target.innerText).map(card => card.count+= 1)
    }
    else {
      card_basket.map(card => card.count = 1) 
      setCardBasket([...card_basket, ...a])  
    }
    
    
    // if (){
    //   console.log('asdasdasdasd')
    // }
    
     
  }

  return (
    <>
        <Header title="Delivery club" logoUrl='https://zenpromokod.ru/wp-content/uploads/2022/12/promokod_delivery_club.webp'></Header>
        <div style = {{display: 'flex', flexDirection: 'row'}}>
          <SideMenu categoryes={categoryes} onClickHeandler={selectCategories}></SideMenu>
          <GetCardsContent cardContent={visible_card_content} onClick={addBasket}></GetCardsContent>
          <Basket cardContent={card_basket}></Basket>
        </div>
        <Footer></Footer>
    </>
  );
}

export default CardPage;

