import { format } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import SearchPage from "../components/SearchPage";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`
const Search = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`
const SearchTitle = styled.h1`
  font-size: 20px;
  color: #555;
`
const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
`
const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`
const Input = styled.input`
  height: 20px;
  padding: 5px;
  border: none;
  outline: none;
`
const InputDates = styled.div`
  height: 20px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`
const SearchOption = styled.div`
  padding: 10px;
`
const SearchOptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1px;
  color: #555;
  font-size: 12px;
  margin-top: 15px;
`
const OptionText = styled.span`
  font-size: 13px;
`
const OptionInput = styled.input`
  width: 50px;
  height: 12px;
  padding: 5px;
  border: none;
  outline: none;
`
const Button = styled.button`
  padding: 10px;
  border: none;
  background-color: #0071c2;
  color: white;
  width: 100%;
  font-weight: 500;
  cursor: pointer;
`
const SearchResult = styled.div`
  flex: 3;
`

const List = () => {

  const location = useLocation()
  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [openDate, setOpenDate] = useState(false)
  const [options, setOptions] = useState(location.state.options)

  return (
    <>
      <Navbar />
      <Header type="list" />
      <Container>
        <Wrapper>
          <Search>
            <SearchTitle>Search</SearchTitle>
            <SearchItem>
              <Label>Destination</Label>
              <Input type="text" placeholder="destination"></Input>
            </SearchItem>
            <SearchItem>
              <Label>Check-in Date</Label>
              <InputDates onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</InputDates>
              {openDate && (
                <DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()} ranges={date}/>
              )}
            </SearchItem>
            
            <Label>Options</Label>
            <SearchOption>
            <SearchOptionItem>
              <OptionText>Min Price <small>(per night)</small></OptionText>
              <OptionInput type="number"></OptionInput>
            </SearchOptionItem>

            <SearchOptionItem>
              <OptionText>Max Price <small>(per night)</small></OptionText>
              <OptionInput type="number"></OptionInput>
            </SearchOptionItem>

            <SearchOptionItem>
              <OptionText>Adult</OptionText>
              <OptionInput type="number" placeholder={options.adult} min={1}></OptionInput>
            </SearchOptionItem>

            <SearchOptionItem>
              <OptionText>Children</OptionText>
              <OptionInput type="number" placeholder={options.children} min={0}></OptionInput>
            </SearchOptionItem>

            <SearchOptionItem>
              <OptionText>Room</OptionText>
              <OptionInput type="number" placeholder={options.room} min={1}></OptionInput>
            </SearchOptionItem>

            </SearchOption>
            <Button>Search</Button>

          </Search>
          <SearchResult>
            <SearchPage/>
          </SearchResult>
        </Wrapper>
      </Container>
    </>
  );
};

export default List;
