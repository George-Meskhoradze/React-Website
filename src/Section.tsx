import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react';



const Section = () => {
  return (
        <ChildContainer>
          <Stitle><span>Explore</span> By Category</Stitle>

          <SwiperStyled
            spaceBetween={0}
            slidesPerView={1}

            breakpoints={{
              1450: {
                slidesPerView: 3,
                spaceBetween: 50
              },

              960: {
                slidesPerView: 2,
                spaceBetween: 40
              }
            }}
          >
            
            <SwiperSliderStyled>

                <Box style={{background: '#db851d1d'}} >
                  <Img src='/img/dj.png' alt='#' />
                  <Title>Pop</Title>
                  <Desc>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</Desc>
                </Box>

            </SwiperSliderStyled>

            <SwiperSliderStyled>

                <Box style={{background: '#ff76765e'}} >
                  <Img src='/img/kettle.png' alt='#' />
                  <Title>Folk</Title>
                  <Desc>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</Desc>
                </Box>

            </SwiperSliderStyled>

            <SwiperSliderStyled>

                <Box style={{background: '#2809d7c7'}} >
                  <Img src='/img/Saxophone.png' alt='#' />
                  <Title>Instrumens</Title>
                  <Desc>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</Desc>
                </Box>

            </SwiperSliderStyled>

            <SwiperSliderStyled>

                <Box style={{background: '#c0009645'}} >
                  <Img src='/img/Guitar.png' alt='#' />
                  <Title>Rock</Title>
                  <Desc>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</Desc>
                </Box>

            </SwiperSliderStyled>

            <SwiperSliderStyled>

                <Box style={{background: '#84c4ff34'}} >
                  <Img src='/img/salamuri.png' alt='#' />
                  <Title>Jazz</Title>
                  <Desc>Duis nec sodales nibh. Proin lectus tortor, rutrum vel vulputate vitae</Desc>
                </Box>

            </SwiperSliderStyled>

          </SwiperStyled>

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
  overflow: hidden;
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
  text-align: center;
  color: #222222;

  & span {
    color: #381DDB;
  }

  @media (max-width:620px) {
    font-size: 22px;
  }
`

const SwiperStyled = styled(Swiper)`

  width: 70%;
  height: 380px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width:620px) {
    width: 100%;
  }
`

const SwiperSliderStyled = styled(SwiperSlide)`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  background: #db851d37;

  @media (max-width:620px) {
    width: 300px;
    height: 290;
    padding: 65px 250px 180px 45px;
  }
`

const Img = styled.img`
  width: 40px;
  height: 40px;
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
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 13px;
  line-height: 24px;
  color: #222222;
  opacity: 0.7;
`
