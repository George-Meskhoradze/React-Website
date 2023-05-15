import styled from "styled-components"

const Footer = () => {
  return (
    <Fcontainer>

      <FirstCont>


        <FooStart>

          <TitleBox>

            <Title>
              Contact us
            </Title>

            <Desc>
              Have an inquiry? We’ll be happy to assist you
            </Desc>

          </TitleBox>

          <Contacts>

            <Num>
              <Img src="/img/Phone.png" alt="#" />
              <Number>+92 333 6527366</Number>
            </Num>

            <Mail>
              <Img src="/img/Map.png" alt="#" />
              <Email>abuzer@greelogix.com</Email>
            </Mail>

            <Location>
              <Img src="/img/Email.png" alt="#"/>
              <Loca>Plot 252, Block L Phase 2 Johar Town, Lahore, PK</Loca>
            </Location>

          </Contacts>

        </FooStart>

        <FooEnd>

          <SecBox>

            <Name>
            Fill in your details
            </Name>

            <SendField>

              <TextField>

                <LittleTitle>Name</LittleTitle>

                <LittleDescription>Jhon Doe</LittleDescription>

              </TextField>

              <TextField>

              <LittleTitle>Email</LittleTitle>

              <LittleDescription>johndoe2347@mail.com</LittleDescription>

              </TextField>

              <DescField>

              <LittleTitle>Message</LittleTitle>

              <LittleDescription>
              Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate 
              vitae, fringilla id magna. Vestibulum ornare eget urna nec pulvinar.
              Praesent porttitor convallis blandit. Fusce vel egestas dolor.
              Donec eu augue enim. Donec rutrum non lacus ac rhoncus. Morbi quis luctus leo, nec cursus ex |
              </LittleDescription>

              </DescField>

            </SendField>

          </SecBox>

          <Button>
            <ButtonText>Submit</ButtonText>
          </Button>

        </FooEnd>

      </FirstCont>

      <SecCont> 

        <Botcont>


          <HeadOne>

            <Logo src="/img/logo.png" alt="#" />

            <Nav>

              <Li>
              HOME
              </Li>

              <Li>
              COMPANY
              </Li>

              <Li>
              BLOG
              </Li>

              <Li>
              CONTACT US
              </Li>

              <Li>
              SITEMAP
              </Li>

            </Nav>

          </HeadOne>

          <HeadTwo>
              
            <Icons>

              <Icon src="/img/Facebook.png" alt="#" />
              <Icon src="/img/Twitter.png" alt="#" />
              <Icon src="/img/Linkedin.png" alt="#" />
              <Icon src="/img/Instagram.png" alt="#" />

            </Icons>

            <Fab>
            © musik.com, 2021 
            </Fab>
            
          </HeadTwo>

        </Botcont>

      </SecCont>

    </Fcontainer>
  )
}

export default Footer

const Fcontainer = styled.div`

  width: 100%;
  height: 842;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;

  @media (max-width:1420px) {
    height: 1620px;
    margin-top: 80px;
  }

  @media (max-width:860px) {
    height: 1265px;
  }
`

const FirstCont = styled.div`

  width: 100%;
  height: 662px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width:1420px) {
    flex-direction: column;
    height: 1344px;
  }

  @media (max-width:860px) {
    height: 975px;
  }
`

const FooStart = styled.div`
  
  height: 662px;
  width: 845px;
  background: #381DDB;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 80px;

  @media (max-width:1420px) {
    width: 100%;
  }

  @media (max-width:860px) {
    height: 420px;
    gap: 30px;
  }
`

const TitleBox = styled.div`

  width: 585px;
  height: 90px;
  display: flex;
  flex-direction: column;
  margin: 120px 0px 0px 80px;
  gap: 8px;

  @media (max-width:860px) {
    width: 300px;
    height: 130px;
    margin: 40px 0px 0px 30px;
    gap: 25px;
  }
`

const Title = styled.div`

  width: 585px;
  height: 44px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #FFFFFF;

  @media (max-width:860px) {
    width: 300px;
    font-size: 26px;
  }
`

const Desc = styled.div`
  
  width: 585px;
  height: 38px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  opacity: 0.7;

  @media (max-width:860px) {
    width: 300px;
    font-size: 18px;
  }
`

const Contacts = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 440px;
  height: 152px;
  margin: 80px 0px 0px 80px;

  @media (max-width:860px) {
    width: 300px;
    margin: 20px 0px 0px 30px;
  }
`

const Num = styled.div`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const Img = styled.img`

  width: 24px;
  height: 24px;
`

const Mail = styled(Num)`
  
`

const Location = styled(Num)`
  
`

const Number = styled.h1`
  
  width: 136px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #FFFFFF;

  @media (max-width:860px) {
    font-size: 12px;
  }
`

const Email = styled(Number)`

  width: 194px;
  height: 20px;

  @media (max-width:860px) {
    font-size: 12px;
  }
`

const Loca = styled(Number)`
  
  width: 408px;
  height: 20px;

  @media (max-width:860px) {
    width: 280px;
    font-size: 10px;
  }
`

const FooEnd = styled.div`
  
  width: 100%;
  height: 662px;
  background: #faf9f9;

  @media (max-width:860px) {
    height: 555px;
  }
`


const SecBox = styled.div`

  width: 570px;
  height: 456px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 103px 0px 0px 130px;
  gap: 40px;

  @media (max-width:860px) {
    width: 300px;
    margin: 30px 0px 0px 30px;
    gap: 20px;
  }
`

const Name = styled.h1`

  width: 570px;
  height: 38px;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;
  display: flex;
  align-items: center;
  color: #222222;

  @media (max-width:860px) {
    width: 280px;
    font-size: 16px;
  }
`

const SendField = styled.div`

  width: 570px;
  height: 282px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;

  @media (max-width:860px) {
    width: 300px;
    height: 300px;
    gap: 20px;
  }
`

const TextField = styled(SendField)`
  
  width: 570px;
  height: 50px;

  @media (max-width:860px) {
    width: 300px;
    height: 70px;
  }
`
const DescField = styled(SendField)`

  width: 570px;
  height: 122px;

  @media (max-width:860px) {
    width: 300px;
    height: 150px;
  }
`

const LittleTitle = styled.h1`
  
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  color: #222222;
  opacity: 0.7;

  @media (max-width:860px) {
    width: 250px;
    font-size: 8px;
  }
`

const LittleDescription = styled.h1`

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;

  @media (max-width:860px) {
    width: 250px;
    font-size: 10px;
  }
`

const ButtonText = styled.h1`
  
  width: 61px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #FFFFFF;

  @media (max-width:860px) {
    font-size: 14px;
  }
`

const Button = styled.div`

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 570px;
  height: 56px;
  background: #381DDB;
  border-radius: 8px;
  margin-left: 130px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {

    background: #224bff;
  }

  @media (max-width:860px) {
    width: 220px;
    height: 45px;
    margin-left: 30px;
  }
`

const SecCont = styled.div`

  width: 100%;
  height: 180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #222222;
  
  @media (max-width:1420px) {
    flex-direction: column;
    height: 290px;
  }

`

const Botcont = styled.div`
  
  width: 1172px;
  height: 110px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media (max-width:1420px) {
    flex-direction: column;
    height: 220px;
    align-items: center;
  }

  @media (max-width:860px) {
    width: 100%;
    padding-left: 30px;
    align-items: flex-start;
  }
`

const HeadOne = styled.div`
  
  width: 50%;
  height: 110px;
  display: flex;
  flex-direction: column;
  gap: 55px;

  @media (max-width:860px) {
    width: 30%;
    height: 90px;
    gap: 30px;
  }
`

const HeadTwo = styled.div`

  width: 50%;
  height: 110px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 126px;

  @media (max-width:1420px) {
    justify-content: flex-start;
  }

  @media (max-width:860px) {
    width: 20%;
    height: 90px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`

const Logo = styled.img`

  width: 125px;
  height: 30px;

  @media (max-width:1420px) {
    width: 80px;
    height: 20px;
  }
`

const Nav = styled.div`

  width: 444px;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media (max-width:1420px) {
    width: 300px;
    height: 20px;
    gap: 10px;
  }
`

const Li = styled.h1`

  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  text-transform: uppercase;
  color: #FFFFFF;

  @media (max-width:1420px) {
    font-size: 8px;
  }
`

const Icons = styled.div`

  width: 210px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;

  @media (max-width:860px) {
    width: 130px;
    gap: 15px;
  }
`

const Fab = styled.h1`

  display: flex;
  align-items: center;
  width: 115px;
  height: 18px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: #FFFFFF;
  opacity: 0.3;

  @media (max-width:1420px) {
    font-size: 10px;
  }
`

const Icon = styled.img`

  width: 30px;
  height: 30px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }

  @media (max-width:860px) {
    width: 20px;
    height: 20px;
  }
`