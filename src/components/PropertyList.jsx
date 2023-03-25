import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;
const PropertyListItem = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  flex: 1;
`;
const ListImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
const ListTitle = styled.div``;
const Name = styled.h5`
    margin-top: 5px;
    margin-left: 1px;
    margin-bottom: 5px;
    font-weight: 700;
`;
const Desc = styled.p`
    color: darkgrey;
    font-size: 14px;
`;
const Title = styled.h2`

`

const PropertyList = () => {
  return (
    <Container>
    
      <PropertyListItem>
        <ListImage src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="></ListImage>
        <ListTitle>
          <Name>Hotels</Name>
          <Desc>523,420 hotels</Desc>
        </ListTitle>
      </PropertyListItem>

      <PropertyListItem>
        <ListImage src="https://r-xx.bstatic.com/xdata/images/xphoto/300x240/119467716.jpeg?k=63b69100225782d08fbd4d0205bf949c0be894ab946a0366edb8ad48e9c0ef46&o="></ListImage>
        <ListTitle>
          <Name>Apartments</Name>
          <Desc>602,540 apartments</Desc>
        </ListTitle>
      </PropertyListItem>

      <PropertyListItem>
        <ListImage src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o="></ListImage>
        <ListTitle>
          <Name>Resorts</Name>
          <Desc>140,500 resorts</Desc>
        </ListTitle>
      </PropertyListItem>

      <PropertyListItem>
        <ListImage src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/100235855.jpeg?k=61ef6692e05b5971e2e8dc75687f844e6d0ad295a9a5ace17f7c713f167e61b5&o="></ListImage>
        <ListTitle>
          <Name>Villas</Name>
          <Desc>215,653 villas</Desc>
        </ListTitle>
      </PropertyListItem>
    </Container>

  );
};

export default PropertyList;
