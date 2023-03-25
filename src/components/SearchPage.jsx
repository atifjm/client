import styled from 'styled-components';

const Container = styled.div``
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-radius: 5px;
  gap: 20px;
  margin-bottom: 20px;
  border: 1px solid lightgrey;
`
const Image = styled.img`
  flex: 1;
  width: 200px;
  height: 200px;
  object-fit: cover;
`
const Description = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const Title = styled.h2`
  font-size: 20px;
  color: #0071c2;
`
const Distance = styled.span`
  font-size: 12px;
`
const Taxi = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`
const Subtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`
const Features = styled.span`
  font-size: 12px;
`
const CancelOption = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`
const CancelSubtitle = styled.span`
  font-size: 12px;
  color: #008009;
`
const Details = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const RatingContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Rating = styled.span`
  font-weight: 500;
`
const Number = styled.span`
  background-color: #003580;
  color: white;
  padding: 5px;
  font-weight: bold;
  font-size: 12px;
  border: none;
`
const DetailsText = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const Price = styled.span`
  font-size: 24px;
`
const TaxOption = styled.span`
  font-size: 12px;
  color: gray;
`
const Button = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`

const SearchPage = () => {
  return (
    <Container>
      
      <Wrapper>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square200/309512427.webp?k=946bbc60fc1e53fb0b69083fdde176880083e36e01a22664818c46187c38b7f5&o=&s=1"></Image>
        <Description>
          <Title>Shelton Hotel Lahore</Title>
          <Distance>500m from center</Distance>
          <Taxi>Free Airport Taxi</Taxi>
          <Subtitle>Studio Apartment with Air Conditioning</Subtitle>
          <Features>Entire Studio * 1 bathroom * 1 full bed</Features>
          <CancelOption>Free Cancellation</CancelOption>
          <CancelSubtitle>You can cancel later, so lock in this great price today! </CancelSubtitle>
        </Description>
        <Details>
          <RatingContainer>
            <Rating>Excellent</Rating>
            <Number>8.5</Number>
          </RatingContainer>
          <DetailsText>
            <Price>$120</Price>
            <TaxOption>Includes taxes & fees</TaxOption>
            <Button>Check Availabilty</Button>
          </DetailsText>
        </Details>
        </Wrapper>

        <Wrapper>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square200/309512427.webp?k=946bbc60fc1e53fb0b69083fdde176880083e36e01a22664818c46187c38b7f5&o=&s=1"></Image>
        <Description>
          <Title>Shelton Hotel Lahore</Title>
          <Distance>500m from center</Distance>
          <Taxi>Free Airport Taxi</Taxi>
          <Subtitle>Studio Apartment with Air Conditioning</Subtitle>
          <Features>Entire Studio * 1 bathroom * 1 full bed</Features>
          <CancelOption>Free Cancellation</CancelOption>
          <CancelSubtitle>You can cancel later, so lock in this great price today! </CancelSubtitle>
        </Description>
        <Details>
          <RatingContainer>
            <Rating>Excellent</Rating>
            <Number>8.5</Number>
          </RatingContainer>
          <DetailsText>
            <Price>$120</Price>
            <TaxOption>Includes taxes & fees</TaxOption>
            <Button>Check Availabilty</Button>
          </DetailsText>
        </Details>
        </Wrapper>

        <Wrapper>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square200/309512427.webp?k=946bbc60fc1e53fb0b69083fdde176880083e36e01a22664818c46187c38b7f5&o=&s=1"></Image>
        <Description>
          <Title>Shelton Hotel Lahore</Title>
          <Distance>500m from center</Distance>
          <Taxi>Free Airport Taxi</Taxi>
          <Subtitle>Studio Apartment with Air Conditioning</Subtitle>
          <Features>Entire Studio * 1 bathroom * 1 full bed</Features>
          <CancelOption>Free Cancellation</CancelOption>
          <CancelSubtitle>You can cancel later, so lock in this great price today! </CancelSubtitle>
        </Description>
        <Details>
          <RatingContainer>
            <Rating>Excellent</Rating>
            <Number>8.5</Number>
          </RatingContainer>
          <DetailsText>
            <Price>$120</Price>
            <TaxOption>Includes taxes & fees</TaxOption>
            <Button>Check Availabilty</Button>
          </DetailsText>
        </Details>
        </Wrapper>

        <Wrapper>
        <Image src="https://cf.bstatic.com/xdata/images/hotel/square200/309512427.webp?k=946bbc60fc1e53fb0b69083fdde176880083e36e01a22664818c46187c38b7f5&o=&s=1"></Image>
        <Description>
          <Title>Shelton Hotel Lahore</Title>
          <Distance>500m from center</Distance>
          <Taxi>Free Airport Taxi</Taxi>
          <Subtitle>Studio Apartment with Air Conditioning</Subtitle>
          <Features>Entire Studio * 1 bathroom * 1 full bed</Features>
          <CancelOption>Free Cancellation</CancelOption>
          <CancelSubtitle>You can cancel later, so lock in this great price today! </CancelSubtitle>
        </Description>
        <Details>
          <RatingContainer>
            <Rating>Excellent</Rating>
            <Number>8.5</Number>
          </RatingContainer>
          <DetailsText>
            <Price>$120</Price>
            <TaxOption>Includes taxes & fees</TaxOption>
            <Button>Check Availabilty</Button>
          </DetailsText>
        </Details>
        </Wrapper>




        

    </Container>
    
  )
}

export default SearchPage
