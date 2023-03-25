import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const FPItems = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover; 
`;
const PropertyName = styled.span`
    font-weight: bold;
`;
const CityName = styled.span`
    font-weight: 300;
    color: darkgrey;
    font-size: 14px;
`;
const Price = styled.span`
    font-weight: 500;
    color: darkgrey;
    font-size: 14px;
`;
const Value = styled.span`
    color: black;
    font-weight: bold;
    font-size: 15px;
    margin-left: 3px;
`
const Rating = styled.div``;
const Button = styled.button`
    background-color: #003580;
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
`;
const Reviews = styled.span`
    font-size: 14px;
`;

const FeaturedProperties = () => {
  return (
    <Container>
      <FPItems>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1"></Image>
        <PropertyName>Aparthotel Stare Misato</PropertyName>
        <CityName>Madrid</CityName>
        <Price>Starting from <Value> $300</Value></Price>
        <Rating>
          <Button>8.9</Button>
          <Reviews>Excellent</Reviews>
        </Rating>
      </FPItems>
      <FPItems>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square600/421853145.webp?k=140bfc6c54ee753d4a748ee7b5a86c00c988e6fc9bb340c87172ead66a3ea9d5&o=&s=1"></Image>
        <PropertyName>Parague, Czech Republic</PropertyName>
        <CityName>Parague</CityName>
        <Price>Starting from <Value>$400</Value></Price>
        <Rating>
          <Button>8.9</Button>
          <Reviews>Excellent</Reviews>
        </Rating>
      </FPItems>

      <FPItems>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=75ffc5f9eb3f3cc394b901714c1544757b05849dbbdf30e4fc8c6df53931c131&o=&s=1"></Image>
        <PropertyName>Aparthotel Stare Misato</PropertyName>
        <CityName>Madrid</CityName>
        <Price>Starting from <Value>$420</Value></Price>
        <Rating>
          <Button>8.9</Button>
          <Reviews>Excellent</Reviews>
        </Rating>
      </FPItems>

      <FPItems>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1"></Image>
        <PropertyName>Aparthotel Stare Misato</PropertyName>
        <CityName>Madrid</CityName>
        <Price>Starting from <Value>$350</Value></Price>
        <Rating>
          <Button>8.9</Button>
          <Reviews>Excellent</Reviews>
        </Rating>
      </FPItems>
    </Container>
  );
};

export default FeaturedProperties;
