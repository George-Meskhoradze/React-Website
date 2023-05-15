import styled from "styled-components"
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
;

const Slider = () => {
  return (
    <SLcontainer>
      <Title>Testimoniols</Title>

      <ProfSlider>

        <SwiperStyled
        spaceBetween={0}
        slidesPerView={1}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        pagination
        >

            <SwiperSlideStyled>
              <Profile>

                <DescContainer>

                  <Description>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                  </Description>

                  <Person>
                    <ProfPic src="/img/testimoniolprofile.png" alt="#" />

                    <Name>
                      Johhny Doe
                    </Name>

                    <ProfDesc>
                      ipsum.com
                    </ProfDesc>
                  </Person>

                </DescContainer>

              </Profile>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <Profile>
                
                <DescContainer>

                  <Description>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                  </Description>

                  <Person>
                    <ProfPic src="/img/prof2.png" alt="#" />

                    <Name>
                      May Alison
                    </Name>

                    <ProfDesc>
                      ipsum.com
                    </ProfDesc>
                  </Person>

                </DescContainer>

              </Profile>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <Profile>
                
                <DescContainer>

                  <Description>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                  </Description>

                  <Person>
                    <ProfPic src="/img/profile.jpg" alt="#" />

                    <Name>
                      Johhny Doe
                    </Name>

                    <ProfDesc>
                      ipsum.com
                    </ProfDesc>
                  </Person>

                </DescContainer>

              </Profile>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <Profile>
                
                <DescContainer>

                  <Description>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                  </Description>

                  <Person>
                    <ProfPic src="/img/robot.png" alt="#" />

                    <Name>
                      Kale
                    </Name>

                    <ProfDesc>
                      ipsum.com
                    </ProfDesc>
                  </Person>

                </DescContainer>

              </Profile>
            </SwiperSlideStyled>

            <SwiperSlideStyled>
              <Profile>
                
                <DescContainer>

                  <Description>
                    Lorem Ipsum is simply dummy text of the printing
                    and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s,
                    when an unknown printer took a galley of type and 
                    scrambled it to make a type specimen book.
                  </Description>

                  <Person>
                    <ProfPic src="/img/grl.png" alt="#" />

                    <Name>
                      Natalia
                    </Name>

                    <ProfDesc>
                      ipsum.com
                    </ProfDesc>
                  </Person>

                </DescContainer>

              </Profile>
            </SwiperSlideStyled>

        </SwiperStyled>
      </ProfSlider>
    </SLcontainer>
  )
}

export default Slider


const SwiperStyled = styled(Swiper)`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`

const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const SLcontainer = styled.div`

  width: 100%;
  height: 520px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 240px;
  gap: 61px;

  @media (max-width:510px) {
    gap: 30px;
    margin-top: 70px;
  }
`

const Title = styled.h1`

  width: 225px;
  height: 44px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  text-align: center;
  color: #222222;
`

const ProfSlider = styled.div`

  width: 100%;
  height: 389px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow: hidden; 
  gap: 30px;
`

const Profile = styled.div`
  
  width: 770px;
  height: 379px;
  display: flex;
  flex-direction: column;
  position: relative;

  @media (max-width:880px) {
    width: 450px;
  }

  @media (max-width:510px) {
    width: 350px;
  }
`

const DescContainer = styled.div`

  width: 770px;
  height: 232px;
  background: #f8f8f8;
  padding: 20px 30px 80px 30px;

  @media (max-width:880px) {
    width: 450px;
  }

  @media (max-width:510px) {
    width: 350px;
    height: 170px;
  }
`

const Description = styled.div`
  width: 650px;
  height: 72px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  text-align: center;
  color: #222222;
  opacity: 0.7;

  @media (max-width:880px) {
    width: 390px;
    height: 120px;
    font-size: 12px;
    line-height: 24px;
  }

  @media (max-width:510px) {
    width: 300px;
    height: 120px;
    font-size: 8px;
    line-height: 18px;
  }
`

const Person = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 140px;
  height: 197px;
  position: absolute;
  top: 182px;
  left: 321.5px;

  @media (max-width:880px) {
    left: 150px;
    gap: 16px;
  }

  @media (max-width:510px) {
    top:120px;
    left: 105px;
    gap: 6px;
  }
`

const ProfPic = styled.img`

  width: 120px;
  height: 120px;
  border-radius: 50%;

  @media (max-width:880px) {
    width: 90px;
    height: 90px;
  }

  @media (max-width:510px) {
    width: 60px;
    height: 60px;
  }
`

const Name = styled.h1`

  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 20px;
  line-height: 28px;
  text-align: center;
  color: #222222;

  @media (max-width:880px) {
    font-size: 18px;
  }

  @media (max-width:510px) {
    font-size: 14px;
  }
`

const ProfDesc = styled.h1`

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #381DDB;

  @media (max-width:510px) {
    font-size: 12px;
  }
`