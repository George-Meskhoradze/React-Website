import styled from 'styled-components'

interface BoxComponents {
  photo: string;
  title: string;
  description: string;
  color: string;
}



const Boxes: BoxComponents[] = [

  {
    photo: '/img/dj.png',
    title: 'Pop',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    color: '#db851d1d'
  },

  {
    photo: '/img/kettle.png',
    title: 'Folk',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    color: '#fc525225'
  },

  {
    photo: '/img/Saxophone.png',
    title: 'Instrumental',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    color: '#2809d7c7'
  },

  {
    photo: '/img/Guitar.png',
    title: 'Rock',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    color: ' #c0009645'
  },

  {
    photo: '/img/salamuri.png',
    title: 'Jazz',
    description: 'Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae',
    color: '#84c4ff34'
  }

]



const Section = () => {
  return (
        <ChildContainer>
          <Stitle><span>Explore</span> By Category</Stitle>
          <Sboxes>
            {Boxes.map(item => (
              <Box style={{backgroundColor: item.color}} >
                <Img src={item.photo} alt='photo' />
                <Title style={item.title === 'Instrumental' ? {color: 'white'} : {}}>{item.title}</Title>
                <Desc style={item.title === 'Instrumental' ? {color: 'white'} : {}}>{item.description}</Desc>
              </Box>
            ))}
          </Sboxes>
        </ChildContainer>
  )
}

export default Section




const ChildContainer = styled.div`
  width: 100%;
  height: 431px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 195px;
  gap: 60px;
`

const Stitle = styled.div`
  width: 470px;
  height: 45px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  color: #222222;

  & span {
    color: #381DDB;
  }
`

const Sboxes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`

const Box = styled.div`
  width: 340px;
  height: 326px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 90px 270px 196px 60px;
  gap: 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: translateY(-20px);
  }
`

const Img = styled.img`
  width: 40px
  height 40px
`

const Title = styled.div`

  width: 51px;
  height: 38px;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;
  color: #222222;
`

const Desc = styled.div`

  width: 190px;
  height: 72px;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  opacity: 0.7;
`
