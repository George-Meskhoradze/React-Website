import styled from "styled-components"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import 'swiper/swiper-bundle.css';

SwiperCore.use([Autoplay]);

const SliderSecond = () => {
  return (
    <Clcontainer>
      <Insta />
      <Title>See our Best Shots</Title>

      <Slider
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination

        breakpoints={{
          1470: {
            slidesPerView: 4,
            spaceBetween: 50
          },

          1155: {
            slidesPerView: 3,
            spaceBetween: 40
          },

          785: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }}
      >
        <SwiperSlideStyled>
        
          <TechnoBox>

            <Img src="/img/tecno1.png" alt="#" />

            <Desc>

              <Reacts>

                <HeartCont>
                  <Heart src="/img/Heart.png" alt="#" />
                  <Nums>420</Nums>
                </HeartCont>

                <ChatCont>
                  <Chat src="/img/Chat.png" />
                  <Nums>160</Nums>
                </ChatCont>

              </Reacts>

              <Comment>
              Lorem Ipsum Amet
              </Comment>

              <Hashtags>
              #music #concert #conference #london #event #artist #dj #soundtrack #dance
              </Hashtags>

            </Desc>
          </TechnoBox>

        </SwiperSlideStyled>

        <SwiperSlideStyled>
        
        <TechnoBox>

          <Img src="/img/tecno2.png" alt="#" />

          <Desc>

            <Reacts>

              <HeartCont>
                <Heart src="/img/Heart.png" alt="#" />
                <Nums>420</Nums>
              </HeartCont>

              <ChatCont>
                <Chat src="/img/Chat.png" />
                <Nums>160</Nums>
              </ChatCont>

            </Reacts>

            <Comment>
            Lorem Ipsum Amet
            </Comment>

            <Hashtags>
            #music #concert #conference #london #event #artist #dj #soundtrack #dance
            </Hashtags>

          </Desc>
        </TechnoBox>

        </SwiperSlideStyled>

        <SwiperSlideStyled>
          
          <TechnoBox>

            <Img src="/img/tecno3.png" alt="#" />

            <Desc>

              <Reacts>

                <HeartCont>
                  <Heart src="/img/Heart.png" alt="#" />
                  <Nums>420</Nums>
                </HeartCont>

                <ChatCont>
                  <Chat src="/img/Chat.png" />
                  <Nums>160</Nums>
                </ChatCont>

              </Reacts>

              <Comment>
              Lorem Ipsum Amet
              </Comment>

              <Hashtags>
              #music #concert #conference #london #event #artist #dj #soundtrack #dance
              </Hashtags>

            </Desc>
          </TechnoBox>

        </SwiperSlideStyled>

        <SwiperSlideStyled>
          
          <TechnoBox>

            <Img src="/img/tecno4.png" alt="#" />

            <Desc>

              <Reacts>

                <HeartCont>
                  <Heart src="/img/Heart.png" alt="#" />
                  <Nums>420</Nums>
                </HeartCont>

                <ChatCont>
                  <Chat src="/img/Chat.png" />
                  <Nums>160</Nums>
                </ChatCont>

              </Reacts>

              <Comment>
              Lorem Ipsum Amet
              </Comment>

              <Hashtags>
              #music #concert #conference #london #event #artist #dj #soundtrack #dance
              </Hashtags>

            </Desc>
          </TechnoBox>

        </SwiperSlideStyled>

        <SwiperSlideStyled>
          
          <TechnoBox>

            <Img src="/img/tecno5.png" alt="#" />

            <Desc>

              <Reacts>

                <HeartCont>
                  <Heart src="/img/Heart.png" alt="#" />
                  <Nums>420</Nums>
                </HeartCont>

                <ChatCont>
                  <Chat src="/img/Chat.png" />
                  <Nums>160</Nums>
                </ChatCont>

              </Reacts>

              <Comment>
              Lorem Ipsum Amet
              </Comment>

              <Hashtags>
              #music #concert #conference #london #event #artist #dj #soundtrack #dance
              </Hashtags>

            </Desc>
          </TechnoBox>

        </SwiperSlideStyled>

        <SwiperSlideStyled>
          
          <TechnoBox>

            <Img src="/img/tecno6.png" alt="#" />

            <Desc>

              <Reacts>

                <HeartCont>
                  <Heart src="/img/Heart.png" alt="#" />
                  <Nums>420</Nums>
                </HeartCont>

                <ChatCont>
                  <Chat src="/img/Chat.png" />
                  <Nums>160</Nums>
                </ChatCont>

              </Reacts>

              <Comment>
              Lorem Ipsum Amet
              </Comment>

              <Hashtags>
              #music #concert #conference #london #event #artist #dj #soundtrack #dance
              </Hashtags>

            </Desc>
          </TechnoBox>

        </SwiperSlideStyled>

      </Slider>
    </Clcontainer>
  )
}

export default SliderSecond

const Clcontainer = styled.div`

  width: 100%;
  height: 770px;
  padding: 160px 0px 0px 0px;
  margin-top: 240px;
  background: linear-gradient(180deg, rgba(252, 82, 82, 0.05) 0%, rgba(252, 82, 82, 0) 100%);
  position: relative;

  @media (max-width:1096px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }
`

const Insta = styled.div`

  position: absolute;
  width: 431px;
  height: 431px;
  left: 498px;
  top: 0px;
  background: url("/img/insta.png");

  @media (max-width:1096px) {
    width: 231px;
    height: 231px;
    background-size: cover;
    position: absolute;
    top: 50px;
    left: auto;
  }
`

const Title = styled.h1`

  width: 440px;
  height: 48px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  color: #222222;
  text-align: center;
  margin-left: 375px;

  @media (max-width:1096px) {
    margin: 0;
  }

  @media (max-width:380px) {
    font-size: 32px;
  }
`

const Slider = styled(Swiper)`
  
  width: 100%;
  height: 506px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 60px;

  @media (max-width:380px) {
    margin-top: 30px;
  }
`

const SwiperSlideStyled = styled(SwiperSlide)`
  width: 370px;
  display: flex;
  justify-content: center;
`

const TechnoBox = styled.div`

  width: 370px;
  height: 506px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width:500px) {

    width: 320px;
    height: 456px;
    gap: 20px;
  }
`

const Img = styled.img`

  width: 370px;
  height: 370px;

  @media (max-width:500px) {

    width: 320px;
    height: 320px;
  }
`

const Desc = styled.div`

  width: 370px;
  height: 112px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media (max-width:500px) {

    width: 320px;
  }
`

const Reacts = styled.div`

  width: 160px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 40px;
`

const HeartCont = styled(Reacts)`

  width: 59px;
  height: 24px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const ChatCont = styled(Reacts)`

  width: 61px;
  height: 24px;
  display: flex;
  flex-direction: row;
  gap: 8px;
`

const Heart = styled.img`

  width: 24px;
  height: 24px;
`

const Chat = styled.img`

  width:24px;
  height: 24px;
`

const Nums = styled.h1`

  width: 27px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #222222;
`

const Comment = styled.h1`

  width: 370px;
  height: 24px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`

const Hashtags = styled(Comment)`

  opacity: 0.5;
`
