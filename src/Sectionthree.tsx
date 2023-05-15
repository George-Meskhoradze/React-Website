import styled from "styled-components"

const Sectionthree = () => {
  return (
    <StContainer>
      <Text>
        <Title>Singers</Title>
        <Desc>
        Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
        Vivamus a elit sodales, tincidunt nunc non, maximus lacus.
        Fusce a augue sed dolor auctor iaculis vitae id mauris.
        Integer ut lectus non neque suscipit luctus. Mauris et 
        erat id ipsum condimentum cursus. Sed tempus enim non 
        massa mattis iaculis. In quis massa risus
        </Desc>

        <Tbutton>View All Singers</Tbutton>
      </Text>
      <Images>
        <ImgOne />
        <ImgTwo />
        <ImgThree/>
        <ImgFour />
      </Images>
    </StContainer>
  )
}

export default Sectionthree


const StContainer = styled.div`

  width: 100%;
  height: 712px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin-top: 240px;

  @media (max-width:1270px) {

    flex-direction: column;
    height: 1150px;
    margin-top: 80px;
    gap: 40;
  }
`

const Text = styled.div`

  width: 470px;
  height: 360px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width:730px) {

    width: 300px;
    align-items: center;
  } 
`

const Title = styled.div`

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  color: #222222;

  @media (max-width:730px) {

    width: 300px;
    text-align: center;
  } 
`

const Desc = styled.div`

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  opacity: 0.7;
  margin-top: 30px;

  @media (max-width:730px) {

    width: 300px;
    text-align: center;
    font-size: 13px;
    margin-top: 20px;
  } 
`
const Tbutton = styled.div`

  width: 240px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #381DDB;
  box-shadow: 0px 10px 30px rgba(56, 29, 219, 0.2);
  border-radius: 8px;
  margin-top: 80px;

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    background: #260eae;
  }

  @media (max-width:730px) {

    width: 180px;
    height: 40px;
    font-size: 14px;
    margin-top: 40px;
  } 
`

const Images = styled.div`

  width: 670px;
  height: 712px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  

  @media (max-width:730px) {

    width: 350px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  } 
`

const ImgOne = styled.div`
  
  width: 370px;
  height: 270px;
  background: url(/img/Img.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-top: 51px;

  @media (max-width:730px) {

    width: 250px;
    height: 270px;
    border-radius: 10px;
    margin-top: 0;
  } 
`

const ImgTwo = styled.div`
  
  width: 270px;
  height: 300px;
  background: url(/img/Img-2.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: 30px;

  @media (max-width:730px) {

    width: 250px;
    height: 270px;
    border-radius: 10px;
    margin-left: 0;
  } 
`

const ImgThree = styled.div`
  
  width: 270px;
  height: 300px;
  background: url(/img/Img-3.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 24px;

  @media (max-width:730px) {

  width: 250px;
  height: 270px;
  border-radius: 10px;
  margin-left: 0;
  } 
`

const ImgFour = styled.div`
  
  width: 370px;
  height: 270px;
  background: url(/img/Img-1.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-left: -70px;

  @media (max-width: 1270px) {
    margin-top: 0px;
  }

  @media (max-width:730px) {

  width: 250px;
  height: 270px;
  border-radius: 10px;
  margin-left: 0;
  } 
`
