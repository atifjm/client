import styled from 'styled-components';
import Featured from '../components/Featured';
import FeaturedProperties from '../components/FeaturedProperties';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MailList from '../components/MailList';
import Navbar from '../components/Navbar';
import PropertyList from '../components/PropertyList';

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`
const H2 = styled.h2`
  margin-top: 25px;
  margin-bottom: -20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  return (
    <>
        <Navbar/>
        <Header/>
        <Container>
          <Featured/>
        </Container>
        <H2>Browse property by type</H2>
        <Container>
          <PropertyList/>
        </Container>
        <H2>Homes guest love</H2>
        <Container>
          <FeaturedProperties/>
        </Container>
        <MailList/>
        <Container>
        <Footer/>
        </Container>
      
    </>
  )
}

export default Home
