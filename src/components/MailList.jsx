import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    gap: 20px;
`
const Wrapper = styled.div`
    width: 100%;
    background-color: #003580;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 50px;
`
const Title = styled.h2``
const Desc = styled.span``
const InputContainer = styled.div``
const Input = styled.input`
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    outline: none;
    margin-right: 10px;
    border-radius: 5px;
`
const Button = styled.button`
    height: 50px;
    color: white;
    background-color: #0071c2;
    border: none;
    font-weight: 500;
    padding: 10px; 
    cursor: pointer;
    border-radius: 5px;
`

const MailList = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Save time, save money</Title>
            <Desc>Sign up and we'll send you newsletter</Desc>
            <InputContainer>
                <Input type="text" placeholder="Enter Your Email"></Input>
                <Button>Subscribe</Button>
            </InputContainer>
        </Wrapper>

    </Container>
  )
}

export default MailList
