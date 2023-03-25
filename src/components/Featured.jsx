import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
const FeaturedItems = styled.div`
    position: relative;
    color: white;
    border-radius: 10px;
    overflow: hidden;
    height: 300px;
`
const FeaturedImage = styled.img`
    width: 100%;
    object-fit: cover;
`
const FeaturedTitles = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
`
const CityName = styled.h1`
    font-weight: 300;
`

const Featured = () => {
  return (
    <Container>
        <FeaturedItems>
            <FeaturedImage src="https://cf.bstatic.com/xdata/images/city/600x600/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o="/>
            <FeaturedTitles>
                <CityName>Karachi</CityName>
            </FeaturedTitles>
        </FeaturedItems>

        <FeaturedItems>
            <FeaturedImage src="https://cf.bstatic.com/xdata/images/city/600x600/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o="/>
            <FeaturedTitles>
                <CityName>Makkah</CityName>
            </FeaturedTitles>
        </FeaturedItems>

        <FeaturedItems>
            <FeaturedImage src="https://cf.bstatic.com/xdata/images/city/600x600/619932.jpg?k=81c20cf1191a1d05472b45413bed3cee67dc92b8c1387c60a960beb5629f109d&o="/>
            <FeaturedTitles>
                <CityName>Dubai</CityName>
            </FeaturedTitles>
        </FeaturedItems>
    </Container>
  )
}

export default Featured
