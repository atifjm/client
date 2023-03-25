import styled from 'styled-components';

const Nav = styled.div`
    height: 50px;
    background-color: #003580;
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Logo = styled.h3`
    font-weight: 400;
`
const Navitems = styled.div``
const Button = styled.button`
    margin-left: 20px;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    color: #003580;
`


const Navbar = () => {
  return (
    <Nav>
        <Container>
            <Logo>Booking.com</Logo>
            <Navitems>
                <Button>Register</Button>
                <Button>Login</Button>
            </Navitems>
        </Container>
    </Nav>
  )
}

export default Navbar
