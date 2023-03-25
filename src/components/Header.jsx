import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useNavigate } from "react-router-dom";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import { format } from "date-fns";

const Head = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;
const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 20px;
`;
const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const IconText = styled.div``;

const HeaderTitle = styled.h1``;
const HeaderDesc = styled.p`
  margin: 20px 0px;
`;
const Button = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;
const HeaderSearchItem = styled.div`
  color: grey;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 2;
`;
const HeaderSearchText = styled.span`
  color: grey;
  cursor: pointer;
  font-size: 15px;
`;
const DateRangeContainer = styled.div`
  position: absolute;
  top: 50px;
`;
const Input = styled.input`
  border: none;
  outline: none;
`;
const Options = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  color: grey;
  border-radius: 5px;
  box-shadow: 0px 0px 10px -5px;
`;
const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const OptionCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;
const OptionText = styled.span``;
const CounterButton = styled.button`
  width: 20px;
  height: 20px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;
`;
const CounterNumber = styled.span``;

const navLinkStyles = ({ isActive }) => {
  return {
    border: isActive ? "1px solid white" : "none",
    padding: isActive ? "10px" : "0px",
    borderRadius: isActive ? "20px" : "0px",
    color: isActive ? "white" : "white",
    textDecoration: isActive ? "none" : "none",
  };
};

const Header = ({type}) => {

  const [destination, setDestination] = useState("");
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 1,
    room: 1,
  });
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const navigate = useNavigate()

  const handleCounter = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/hotels", { state: {destination, date, options }});
  };

  return (
    <Head>
      <Container>
        <HeaderList>
          <NavLink style={navLinkStyles}>
            <HeaderListItem>
              <FontAwesomeIcon icon={faBed} />
              <IconText>Stays</IconText>
            </HeaderListItem>
          </NavLink>

          <HeaderListItem>
            <FontAwesomeIcon icon={faPlane} />
            <IconText>Flights</IconText>
          </HeaderListItem>

          <HeaderListItem>
            <FontAwesomeIcon icon={faCar} />
            <IconText>Car Rental</IconText>
          </HeaderListItem>

          <HeaderListItem>
            <FontAwesomeIcon icon={faBed} />
            <IconText>Attractions</IconText>
          </HeaderListItem>

          <HeaderListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <IconText>Airport Taxi</IconText>
          </HeaderListItem>
        </HeaderList>
        { type !== "list" && 
          <>
            <HeaderTitle>A life time of discounts? It's Genius. </HeaderTitle>
            <HeaderDesc>
              Get rewarded to your travels - unlock instant savings of 10% or
              more with a free booking.com account
            </HeaderDesc>
            <Button>Sign In / Register </Button>

            <HeaderSearch>
              <HeaderSearchItem>
                <FontAwesomeIcon icon={faBed} />
                <Input type="text" placeholder="Where are you going" onChange={e=>setDestination(e.target.value)} />
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon icon={faCalendarDays} />
                <HeaderSearchText
                  onClick={() => setOpenDate(!openDate)}
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</HeaderSearchText>
                <DateRangeContainer>
                  {openDate && (
                    <DateRange
                      editableDateInputs={true}
                      onChange={(item) => setDate([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={date}
                      minDate={new Date()}
                    />
                  )}
                </DateRangeContainer>
              </HeaderSearchItem>
              <HeaderSearchItem>
                <FontAwesomeIcon icon={faPerson} />
                <HeaderSearchText
                  onClick={() => setOpenOptions(!openOptions)}
                >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</HeaderSearchText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <OptionText>Adult</OptionText>
                      <OptionCounter>
                        <CounterButton
                          disabled={options.adult <= 1}
                          onClick={() => handleCounter("adult", "d")}
                        >
                          -
                        </CounterButton>
                        <CounterNumber>{options.adult}</CounterNumber>
                        <CounterButton
                          onClick={() => handleCounter("adult", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Children</OptionText>
                      <OptionCounter>
                        <CounterButton
                          disabled={options.children <= 0}
                          onClick={() => handleCounter("children", "d")}
                        >
                          -
                        </CounterButton>
                        <CounterNumber>{options.children}</CounterNumber>
                        <CounterButton
                          onClick={() => handleCounter("children", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionCounter>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Room</OptionText>
                      <OptionCounter>
                        <CounterButton
                          disabled={options.room <= 1}
                          onClick={() => handleCounter("room", "d")}
                        >
                          -
                        </CounterButton>
                        <CounterNumber>{options.room}</CounterNumber>
                        <CounterButton
                          onClick={() => handleCounter("room", "i")}
                        >
                          +
                        </CounterButton>
                      </OptionCounter>
                    </OptionItem>
                  </Options>
                )}
              </HeaderSearchItem>
              <HeaderSearchItem>
                <Button onClick = {handleSearch}>Search</Button>
              </HeaderSearchItem>
            </HeaderSearch>
          </>
        }
        
      </Container>
    </Head>
  );
};

export default Header;
