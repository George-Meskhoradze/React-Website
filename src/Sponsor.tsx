import styled from "styled-components"

const Sponsor = () => {
  return (
    <Scontainer>
      <Title>Our Sponsors</Title>

      <Ceos>

        <CeoOne>

          <CeoImgOne src="/img/ceo1.png" alt="#" />
          <CeoImgSec src="/img/ceo2.png" alt="#" />
          <CeoImgThir src="/img/ceo3.png" alt="#" />
          <CeoImgFour src="/img/ceo4.png" alt="#" />

        </CeoOne>

        <CeoTwo>

          <CeoImgFifth src="/img/ceo5.png" alt="#" />
          <CeoImgSix src="/img/ceo6.png" alt="#" />
          <CeoImgSev src="/img/ceo7.png" alt="#" />
          <CeoImgEight src="/img/ceo8.png" alt="#" />
          
        </CeoTwo>

      </Ceos>

      <Button>
        <ButtonText>Become a Sponsor</ButtonText>
      </Button>

    </Scontainer>
  )
}

export default Sponsor


const Scontainer = styled.div`

  width: 100%;
  height: 414px;
  margin-top: 240px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  @media (max-width:1270px) {

    height: 600px;
    margin-top: 80px;
  }

  @media (max-width:520px) {

    height: 870px;
    gap: 30px;
  }
`

const Title = styled.div`

  width: 241px;
  height: 44px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  text-align: center;
  color: #222222;
`

const Ceos = styled.div`

  width: 1170px;
  height: 174px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width:1270px) {

  width: 400px;
  height: 330px;
  gap: 30px;
  }

  @media (max-width:520px) {

  width: 200px;
  height: 625px;
  gap: 20px;
  }
`

const CeoOne = styled.div`

  width: 1070px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 130px;

  @media (max-width:1270px) {

    width: 400px;
    height: 145px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  @media (max-width:520px) {

    width: 170px;
    height: 300px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const CeoTwo = styled.div`

  width: 1070px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 130px;

  @media (max-width:1270px) {

    width: 400px;
    height: 145px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
  }

  @media (max-width:520px) {

    width: 170px;
    height: 300px;
    grid-template-columns: 1fr;
    gap: 20px;
  }
`

const CeoImgOne = styled.img`
  width: 170px;
  height: 56px;
`

const CeoImgSec = styled(CeoImgOne)`
  height: 37px;
`

const CeoImgThir = styled(CeoImgOne)`
  height: 53px;
`

const CeoImgFour = styled(CeoImgOne)`
  height: 49px;
`

const CeoImgFifth = styled(CeoImgOne)`
  height: 58px;
`

const CeoImgSix = styled(CeoImgOne)`
  height: 34px;
`

const CeoImgSev = styled(CeoImgOne)`
  height: 29px;
`

const CeoImgEight = styled(CeoImgOne)`
  height: 23px;
`

const Button = styled.div`

  width: 225px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #381DDB;
  box-shadow: 0px 10px 30px rgba(56, 29, 219, 0.2);
  border-radius: 8px;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.08);
  }

  @media (max-width:1270px) {
    width: 190px;
    height: 50px;
    margin-top: 10px;
  }
`
const ButtonText = styled.div`
  
  width: 157px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`
