import {FC} from 'react'
import GetCards from '../components/GetCards';
import Header from '../components/Header';
import Footer from '../components/Footer';


const AuthPage: FC = () => {
  return (
    <>
    <Header title="Delivery club" logoUrl='https://zenpromokod.ru/wp-content/uploads/2022/12/promokod_delivery_club.webp'></Header>
        <GetCards></GetCards>
    <Footer></Footer>
    </>
  );
}

export default AuthPage;