import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MailList from "../components/MailList";
import Navbar from "../components/Navbar";

const Container = styled.div``;
const HotelContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;
const ButtonTitle = styled.button`
  position: absolute;
  top: 10px;
  right: 0px;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
const Title = styled.h2`
  font-size: 24px;
`;
const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Address = styled.span``;
const HotelDistance = styled.div`
  color: #0071c2;
  font-weight: 500;
`;
const HotelPrice = styled.div`
  color: #008009;
  font-weight: 500;
`;
const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const HotelImageWrapper = styled.div`
  width: 33%;
`;
const Image = styled.img`
  width: 100%;
  height: 98%;
  object-fit: cover;
`;
const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
const DetailText = styled.div`
  flex: 2.8;
`;
const DetailPrice = styled.div`
  flex: 1;
  padding: 20px;
  gap: 20px;
  background-color: #ebf3ff;
  display: flex;
  flex-direction: column;
`;
const HotelTitle = styled.h2``;
const HotelDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;
const HotelPriceTitle = styled.h2`
  font-size: 20px;
  color: #555;
`;
const HotelPriceDetail = styled.span`
  font-size: 14px;
`;
const Price = styled.h3`
  font-weight: 300;
`;
const Button = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;

const Hotel = () => {
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309512415.jpg?k=5b5da586e3fcc59c270d795537ebd1e4c56738cce7ef2dabcdb6facf4e34ac7c&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309512426.jpg?k=417c10dea1139b014c95a783c5bf209af62be50e0209e14b3c677da586f6cdc8&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309512438.jpg?k=e2d6488fde0ebacf8336b3e1994e8947f7f016cd922edb823fa917275668ad08&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309512381.jpg?k=53c15e230b75516f29e37f107b028ba42caa825b0cc83074868cda557bc56ffe&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309512398.jpg?k=4a5442ff52bb521f142d7432e3d26758d69fadf6d0298e2926e585217624ef99&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/309512409.jpg?k=3972b0378a850aedd47ff8ef3be6451bc0f165beaa4b4cbe576d27fa37e46f79&o=&hp=1",
    },
  ];

  return (
    <Container>
      <Navbar />
      <Header type="list" />
      <HotelContainer>
        <Wrapper>
          <ButtonTitle>Reserve or Book Now</ButtonTitle>
          <Title>Grand Hotel</Title>
          <HotelAddress>
            <FontAwesomeIcon icon={faLocationDot} />
            <Address>125 Mall Road Lahore</Address>
          </HotelAddress>
          <HotelDistance>Excellent location - 500m from center</HotelDistance>
          <HotelPrice>
            Book a stay over $150 at this property and get a free airport taxi
          </HotelPrice>

          <HotelImages>
            {photos.map((photo) => (
              <HotelImageWrapper>
                <Image src={photo.src}></Image>
              </HotelImageWrapper>
            ))}
          </HotelImages>
          <HotelDetails>
            <DetailText>
              <HotelTitle>Stay in the heart of Lahore</HotelTitle>
              <HotelDesc>
                Located in Lahore, within 37 km of Wagah Border and 1.1 km of
                Emporium Mall, Shelton Hotel Lahore provides accommodation with
                a restaurant and as well as free private parking for guests who
                drive. This 3-star hotel offers room service and a 24-hour front
                desk. The hotel features family rooms.
              </HotelDesc>
            </DetailText>

            <DetailPrice>
              <HotelPriceTitle>Perfect for a 3 night stay!</HotelPriceTitle>
              <HotelPriceDetail>
                Located in the heart of Lahore, this property has an excellent
                location score of 9.8!
              </HotelPriceDetail>
              <Price>
                <b> $945 </b> (9 nights)
              </Price>
              <Button>Reserve or Book Now</Button>
            </DetailPrice>
          </HotelDetails>
        </Wrapper>
      </HotelContainer>
      <MailList />
    </Container>
  );
};

export default Hotel;
