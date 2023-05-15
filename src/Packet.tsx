import styled from 'styled-components'

const Packet = () => {
  return (
    <Pcontainer>
      <Title>Choose a Tier that’s right for you</Title>

      <Bcontainer>
        {Data.map(item =>(
          <Box>

            <PacketName

              style={item.title === 'Standard' 
              ? 
              { color: '#381DDB' }
              : 
              item.title === 'Premium' 
              ? { color: '#FC5252' } 
              : { color: 'black' }}>
              {item.title}

            </PacketName>

            <Price

              style={item.title === 'Standard' 
              ? 
              { color: '#381DDB' }
              : 
              item.title === 'Premium' 
              ? { color: '#FC5252' } 
              : { color: 'black' }}>
              {item.price}

            </Price>

            <DescOne>{item.description}</DescOne>

            <DescSec>{item.descriptionsecond}</DescSec>

            <DescThird>{item.descriptionthird}</DescThird>

            <Button>
              <ButtonText>Get Tickets</ButtonText>
            </Button>
          </Box>
        ))}
      </Bcontainer>
    </Pcontainer>
  )
}

export default Packet

interface boxtype {
  title: string;
  price: string;
  description: string;
  descriptionsecond: string;
  descriptionthird: string;
  color?: string;
}

const Data: boxtype[] = [
  {
    title: "Basic",
    price: "$100",
    description: "1 Seat Available",
    descriptionsecond: "Accsess To Wifi Router",
    descriptionthird: "Free Food & Coffee",
  },

  {
    title: "Standard",
    price: "$150",
    description: "1 Seat Available",
    descriptionsecond: "Accsess To Wifi Router",
    descriptionthird: "Free Food & Coffee",
    color: '#381DDB'
  },

  {
    title: "Premium",
    price: "$200",
    description: "2 Seat Available",
    descriptionsecond: "Accsess To Wifi Router",
    descriptionthird: "Free Food & Coffee",
    color: '#FC5252'
  },
]


const Pcontainer = styled.div`

  width: 100%;
  height: 508px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 375px;
  gap: 60px;
  margin-top: 240px;

  @media (max-width:1250px) {
    height: 1300px;
    padding: 0;
  }

  @media (max-width:800px) {
    margin-top: 100px;
  }
`

const Title = styled.h1`

  width: 581px;
  height: 44px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  display: flex;
  align-items: center;
  text-align: center;
  color: #222222;

  @media (max-width:800px) {
    width: 300px;
    font-size: 22px;
  }
`

const Bcontainer = styled.div`

  width: 1170px;
  height: 404px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media (max-width:1250px) {
    height: 1300px;
    flex-direction: column;
  }
`

const Box = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 370px;
  height: 404px;
  background: #FFFFFF;
  box-shadow: 0px 20px 100px rgba(34, 34, 34, 0.15);
  border-radius: 20px;
  border-top: 5px solid black;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-15px)
  }

  @media (max-width:800px) {
    width: 300px;
    height: 330px;
  }
`

const PacketName = styled.h1`

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: #222222;
  margin-top: 29px;

  @media (max-width:800px) {
    font-size: 18px;
    margin-top: 20px;
  }
`

const Price = styled.h1`

  width: 143px;
  height: 73px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  text-align: center;
  text-transform: capitalize;
  color: #222222;
  margin-top: 15px;

  @media (max-width:800px) {
    font-size: 40px;
    margin-top: 5px;
  }
`

const DescOne = styled.h1`

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #222222;
  margin-top: 30px;

  @media (max-width:800px) {
    font-size: 12px;
    margin-top: 15px;
  }
`

const DescSec = styled.h1`

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #222222;
  opacity: 0.5;
  margin-top: 15px;

  @media (max-width:800px) {
    font-size: 12px;
    margin-top: 15px;
  }
`

const DescThird = styled.h1`

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #222222;
  opacity: 0.5;
  margin-top: 15px;

  @media (max-width:800px) {
    font-size: 12px;
    margin-top: 15px;
  }
`

const ButtonText = styled.h1`

  width: 94px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #381DDB;
  text-align: center;

  @media (max-width:800px) {
    width: 82px;
    font-size: 14px;
  }
`

const Button = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 162px;
  height: 56px;
  border: 2px solid #381DDB;
  border-radius: 5px;
  margin-top: 30px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #381DDB;

    ${ButtonText} {
      color: #FFFFFF;
    }
  }

  @media (max-width:800px) {
    width: 140px;
    height: 40px;
    margin-top: 15px;
  }
`