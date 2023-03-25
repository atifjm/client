import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    font-size: 12px;
   `
const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
`
const Lists = styled.div``
const List = styled.ul`
    list-style: none;
    padding: 0px;
`
const ListItem = styled.li`
    margin-bottom: 10px;
    color: #003580;
    cursor: pointer;
`
const FooterText = styled.h3``


const Footer = () => {
  return (
    <Container>
        <Wrapper>
            <Lists>
                <List>
                    <ListItem>Countries</ListItem>
                    <ListItem>Regions</ListItem>
                    <ListItem>Cities</ListItem>
                    <ListItem>Districts</ListItem>
                    <ListItem>Airports</ListItem>
                    <ListItem>Hotels</ListItem>
                </List>
            </Lists>
            <Lists>
                <List>
                    <ListItem>Homes</ListItem>
                    <ListItem>Apartments</ListItem>
                    <ListItem>Resorts</ListItem>
                    <ListItem>Villas</ListItem>
                    <ListItem>Hostels</ListItem>
                    <ListItem>Guest Houses</ListItem>
                </List>
            </Lists>
            <Lists>
                <List>
                    <ListItem>All Destinations</ListItem>
                    <ListItem>All Flight Destinations</ListItem>
                    <ListItem>Discover</ListItem>
                    <ListItem>Reviews</ListItem>
                    <ListItem>Travel Communities</ListItem>
                    <ListItem>Seasonal & Holiday Deals</ListItem>
                    <ListItem>Traveller Review Awards</ListItem>
                </List>
            </Lists>
            <Lists>
                <List>
                    <ListItem>Car Hire</ListItem>
                    <ListItem>Flight Finder</ListItem>
                    <ListItem>Restaurant Reservations</ListItem>
                    <ListItem>For Travel Agents</ListItem>
                </List>
            </Lists>
            <Lists>
                <List>
                    <ListItem>About Booking.com</ListItem>
                    <ListItem>Customer Service help</ListItem>
                    <ListItem>Partner help</ListItem>
                    <ListItem>Careers</ListItem>
                    <ListItem>Sustainability</ListItem>
                    <ListItem>Press Center</ListItem>
                    <ListItem>Safety Resource Center</ListItem>
                    <ListItem>Invester Relations</ListItem>
                    <ListItem>Terms & Conditions</ListItem>
                    <ListItem>How we work</ListItem>
                    <ListItem>MSA Statement</ListItem>
                    <ListItem>Corporate Contact</ListItem>
                </List>
            </Lists>
        </Wrapper>
        
    </Container>
  )
}

export default Footer
