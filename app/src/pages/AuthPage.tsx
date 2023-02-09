import {FC} from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginForm from '../components/LoginForm'

const AuthPage: FC = () => {
  return (
    <>
        <Header title="Delivery club" logoUrl='https://zenpromokod.ru/wp-content/uploads/2022/12/promokod_delivery_club.webp'></Header>
          <LoginForm/>
        <Footer></Footer>
    </>
  );
}

export default AuthPage;