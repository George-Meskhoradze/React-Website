import { useState } from 'react';
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
  
  const [active, setActive] = useState(false)

  return (
    <>
      <GlobalStyles/>

      <Bg>
        <Header>
          <Logo />

          <Burger 
          onClick={()=> {
            setActive(!active)
          }}>
            <Stroke />
            <Stroke />
            <Stroke />
          </Burger>

          {active 

          ? 
          
          <El>   

          {ulData.map(item => (
          <Li key={item.number} >
            {item.name}
          </Li>
          ))}

          <LiBtn>
            GET TICKETS
          </LiBtn>

          </El>

          :

          null
          }

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
  cursor: pointer;
`

const Burger = styled.div`

  @media (max-width:1220px) {
  width: 25px;
  height: 18px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  position: relative;
  z-index: 1;
  }

  @media (min-width:1220px) {
    display: none;
  }

  @media (max-width:730px) {
    margin-left: 0px;
  }
`

const Stroke = styled.div`
  width: 25px;
  height: 2px;
  background: #FFFFFF;
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

  @media (max-width:1220px) {
    justify-content: space-around;
  }

  @media (max-width:730px) {
    justify-content: space-evenly;
    height: 80px;
    gap: 150px;
  }

  
  @media (max-width:400px) {
    justify-content: space-evenly;
    height: 80px;
    gap: 100px;
  }
`
const Logo = styled.div`

  width: 125px;
  height: 30px;
  background: url('/img/logo.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  z-index: 1;
  cursor: pointer;
`

const Ul = styled.ul`

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;

  @media (max-width:1220px) {
    display: none;
  }
`

const El = styled.ul`

  display: flex;
  width: 100%;
  background: black;
  height: 600px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 0px 0px 40px 0px;
  gap: 30px;
  position: absolute;
  z-index: 0;
  transition: all 0.3s ease-in-out;

  @media (max-width:400px) {
    height: 750px;
  }
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

  @media (max-width:1220px) {
    width: 130px;
    height: 40px;
    font-size: 12px;
    margin-left: 0px;
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

  @media (max-width:1430px) {
    width: 600px;
    height: 450px;
  }

  @media (max-width:730px) {
    width: 320px;
    height: 300px;
    gap: 10px;
  }
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

  @media (max-width:1430px) {
    width: 600px;
    font-size: 50px;
  }

  @media (max-width:730px) {
    width: 320px;
    font-size: 26px;
    line-height: 40px;
  }
`

const Ptext = styled.div`

  width: 970px;
  height: 76px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
  text-align: center;
  color: #FFFFFF;

  @media (max-width:1430px) {
    width: 600px;
    height: 130px;
    font-size: 18px;
  }

  @media (max-width:730px) {
    width: 320px;
    font-size: 16px;
    line-height: 26px;
  }
`

const Bcontainer = styled.div`

  width: 418px;
  height: 56px;
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width:730px) {
    width: 320px;
    gap: 20px;
  }
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

  @media (max-width:730px) {
    width: 130px;
    height: 35px;
    font-size: 12px;
  }
`


const Pbutton = styled.div`
  
  width: 214px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;

  @media (max-width:730px) {
    width: 160px;
    height: 35px;
    gap: 16px;
  }
`

const Play = styled.div`
  
  width: 46.6px;
  height: 46.6px;
  background: url(/img/Play.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width:730px) {
    width: 30px;
    height: 30px;
  }
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

  @media (max-width:730px) {
    width: 120px;
    height: 22px;
    font-size: 14px;
    line-height: 20px;
  }
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

  @media (max-width:1430px) {
    gap: 40px;
  }

  @media (max-width:1220px) {
    width: 300px;
    gap: 20px;
  }

  @media (max-width:450px) {
    width: 280px;
  }
`

const Day = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;

  @media (max-width:1430px) {
    font-size: 4rem;
  }

  @media (max-width:1220px) {
    -webkit-text-stroke: 2.5px white;
    font-size: 2.5rem;
  }

  @media (max-width:450px) {
    -webkit-text-stroke: 2px white;
    font-size: 2rem;
  }
`

const Hour = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;

  @media (max-width:1430px) {
    font-size: 4rem;
  }

  @media (max-width:1220px) {
    -webkit-text-stroke: 2.5px white;
    font-size: 2.5rem;
  }

  @media (max-width:450px) {
    -webkit-text-stroke: 2px white;
    font-size: 2rem;
  }
`

const Minute = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;

  @media (max-width:1430px) {
    font-size: 4rem;
  }

  @media (max-width:1220px) {
    -webkit-text-stroke: 2.5px white;
    font-size: 2.5rem;
  }

  @media (max-width:450px) {
    -webkit-text-stroke: 2px white;
    font-size: 2rem;
  }
`

const Sec = styled.div`

  width: 210px;
  height: 100px;
  font-size: 6rem;
  font-family: 'Montserrat';
  -webkit-text-stroke: 5px white;
	-webkit-text-fill-color: transparent;
  font-weight: 900;

  @media (max-width:1430px) {
    font-size: 4rem;
  }

  @media (max-width:1220px) {
    -webkit-text-stroke: 2.5px white;
    font-size: 2.5rem;
  }

  @media (max-width:450px) {
    -webkit-text-stroke: 2px white;
    font-size: 2rem;
  }
`






const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
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
    overflow-x: visible;
  }

  body {
    /* min-width: 320px;
    min-height: 100vh; */
    width: 100%;
    height: 100%;
    overflow-x: clip;
  }
  `
