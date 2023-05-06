import styled from "styled-components"

const SectionTwo = () => {
  return (
    <BScontainer>
      <Stear />
      <Party>
        <Partyback src='/img/partyback.png' alt="#" />
        <Partyfront src='/img/partyfront.png' alt="#"  />
      </Party>
      <Text>
        <Title>About Music</Title>
        <Description>
          Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.
          Vivamus a elit sodales, tincidunt nunc non, maximus lacus.
          Fusce a augue sed dolor auctor iaculis vitae id mauris.
          Integer ut lectus non neque suscipit luctus. Mauris et erat id ipsum condimentum cursus.
          Sed tempus enim non massa mattis iaculis. In quis massa risus
        </Description>
        <Bbutton>Learn More</Bbutton>
      </Text>
    </BScontainer>
  )
}

export default SectionTwo

const BScontainer = styled.div`
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 240px;
  position: relative;
`

const Stear = styled.div`
  width: 181px;
  height: 167px;
  background: url('/img/stears.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  left: 97px;
  bottom: -38px;
`


const Party = styled.div`
  width: 530px;
  height: 550px;
  margin-left: 101px;
  position: relative;
`

const Partyback = styled.img`
  width: 460px;
  height: 480px;
  top: 0%;
  left: 0%;
  position: absolute;
  object-fit: cover;
`

const Partyfront = styled.img`
  width: 460px;
  height: 480px;
  bottom: 0%;
  right: 0%;
  position: absolute;
  object-fit: cover;
`

const Text = styled.div`
  width: 570px;
  height: 336px;
  margin: 107px 0px 0px 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const Title = styled.div`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  color: #222222;
`

const Description = styled.div`
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  opacity: 0.7;
  margin-top: 30px;
`

const Bbutton = styled.div`
  width: 199px;
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
`