
import styled, { createGlobalStyle } from 'styled-components';


interface menu {
  number: number;
  name: string;
}

const ulData: menu[] = [
  {
    number: 1,
    name: "HOME"
  },
  {
    number: 2,
    name: "SPEAKERS"
  },
  {
    number: 3,
    name: "SCHEDULE"
  },
  {
    number: 4,
    name: "CONTACT US"
  }
]

function App() {


  return (
    <>
      <GlobalStyles/>

      <Bg>
        <Header>
          <Logo />
          <Ul>        
            {ulData.map(item => (
            <Li key={item.number} >
              {item.name}
            </Li>
            ))}

            <LiBtn>
              GET TICKETS
            </LiBtn>

          </Ul>

        </Header>

        <HeroContainer>

          <Htitle>The Best experience of <span>music</span> in 2021</Htitle>

          <Ptext>
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit.
            Suspendisse vitae ligula placerat,
            eleifend ex non, vehicula libero.
            Suspendisse eget tellus lectus.
          </Ptext>
          <Bcontainer>
            <Rbtn>Get Started</Rbtn>
            <Pbutton>
              <Play />
              <Wvideo>
                watch video
              </Wvideo>
            </Pbutton>
          </Bcontainer>
        </HeroContainer>


        <Time>
          <Day>22D</Day>
          <Hour>13H</Hour>
          <Minute>46M</Minute>
          <Sec>18S</Sec>
        </Time>
      </Bg>

       
    </>
  )
}

export default App;

const Bg = styled.div`

  width: 100%;
  height: 964px;
  background: url('/img/bg.png'); 
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`


const Header = styled.div`

  width: 100%;
  height: 120px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 371px;
  background: transparent;
  position: relative;
  z-index: 1;
`
const Logo = styled.div`

  width: 125px;
  height: 30px;
  background: url('/img/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`

const Ul = styled.ul`

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
`

const Li = styled.li`

  list-style: none;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: 'Montserrat';
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;

  &:hover {
    color: #650094;
  }
`


const LiBtn = styled.li`

  width: 175px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  margin-left: 10px;
  background: white;
  text-decoration: none;
  font-size: 14px;
  font-family: 'Montserrat';
  line-height: 20px;
  font-weight: 700;
  color: #381DDB;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #650094;
    color: white;
  }
`

const HeroContainer = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 40px;
  margin-top: 100px;
  width: 970px;
  height: 388px;
`

const Htitle = styled.div`

  width: 970px;
  height: 176px;
  font-family: Montserrat;
  font-size: 72px;
  font-weight: 700;
  line-height: 88px;
  color: white;
  text-align: center;
  text-transform: capitalize;

  & span {
    color: #FFA3A3;
  }
`

const Ptext = styled.div`

  width: 970px;
  height: 76px;
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: #FFFFFF;
`

const Bcontainer = styled.div`

  width: 418px;
  height: 56px;
  display: flex;
  flex-direction: row;
  gap: 40px;
`

const Rbtn = styled.div`
  
  width: 164px;
  height: 56px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 12px;
  background: #FC5252;
  border-radius: 8px;

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #ce3030;
  }
`


const Pbutton = styled.div`
  
  width: 214px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
`

const Play = styled.div`
  
  width: 46.6px;
  height: 46.6px;
  background: url(/img/Play.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const Wvideo = styled.div`
  
  width: 138px;
  height: 28px;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
`

const Time = styled.div`

  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 122px;
`

const Day = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;
`

const Hour = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;
`

const Minute = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;
`

const Sec = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;
`






const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Londrina+Outline&display=swap');

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    /* min-width: 320px;
    min-height: 100vh; */
    width: 100%;
    height: 100%;
    overflow-x: clip;
  }
  `
