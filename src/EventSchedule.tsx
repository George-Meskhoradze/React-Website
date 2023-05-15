import styled from "styled-components"

const EventSchedule = () => {
  return (
    <EventBg>
      <EContainer>

        <EheadOne>
          
          <Title>
            Event Schedule
          </Title>

          <Tdays>

            <Days>
              <Dtitle>
                Day 01
              </Dtitle>
              <Dparagraph>
                16 August
              </Dparagraph>
            </Days>

            <Days>
              <Dtitle>
                Day 02
              </Dtitle>
              <Dparagraph>
                17 August
              </Dparagraph>
            </Days>

            <Days>
              <Dtitle>
                Day 03
              </Dtitle>
              <Dparagraph>
                18 August
              </Dparagraph>
            </Days>

          </Tdays>
        </EheadOne> 

        <EheadTwo>

          <EtChildOne>

            <TitleChildOne>
              Time
            </TitleChildOne>

            <TitleChildTwo>
              Content
            </TitleChildTwo>

            <TitleChildThree>
              Speakers
            </TitleChildThree>

          </EtChildOne>

          <EtChildTwo>

            <Time>
            11:00 AM to 12:00 PM
            </Time>

            <Desc>
            Vestibulum vel eros vel metus lacinia feugiat a nec metus. 
            </Desc>

            <Profile>

              <ProfPic />

              <PfParent>

                <PfTitle>
                Yui Ronald
                </PfTitle>

                <PfParagraph>
                Booth: 2F12
                </PfParagraph>

              </PfParent>


            </Profile>

            <Prev>
              Preview

              <PrevPlay />
            </Prev>

          </EtChildTwo>

          <EtChildThree>

            <Stitle>12:00 PM to 03:00 PM</Stitle>

            <Sdesc>
              Duis nec sodales nibh. Proin lectus tortor,
              rutrum vel vulputate vitae, fringilla id magna.
              Vestibulum ornare eget urna nec pulvinar. Praesent 
              porttitor convallis blandit. Fusce vel egestas dolor.
              Donec eu augue enim. Donec rutrum non lacus ac rhoncus. 
              Morbi quis luctus leo, nec cursus ex.
            </Sdesc>

            <ProfContainer>

              <SProfile>
                <SPimg />

                <Pfnames>
                  <NameOne>
                  Bob John
                  </NameOne>

                  <DescOne>
                  Booth: 3G12
                  </DescOne>
                </Pfnames>

              </SProfile>

              <SProfile>
                <SPimgTwo />

                <Pfnames>
                  <NameOne>
                  Yui Ronald
                  </NameOne>

                  <DescOne>
                  Booth: 3G12
                  </DescOne>
                </Pfnames>

              </SProfile>

              <SProfile>
                <SPimgThree />

                <Pfnames>
                  <NameOne>
                  Emma Satoshi
                  </NameOne>

                  <DescOne>
                  Booth: 3G12
                  </DescOne>
                </Pfnames>
              </SProfile>

            </ProfContainer>

            <LiveContainer>

              <Live>
                Live
              </Live>
              <LiveImg src="./img/Vector.png" alt="#" />

            </LiveContainer>

          </EtChildThree>

          <EtChildFour>

            <Stitle>03:00 PM to 04:00 PM</Stitle>

            <Tdesc>
            Vestibulum vel eros vel metus lacinia feugiat a nec metus. 
            </Tdesc>

            <Profcnt>

              <SProfile>
                <SPFONE />

                <Pfnames>
                  <NameOne>
                  Sasha Jackson
                  </NameOne>

                  <DescOne>
                  Booth: 3G12
                  </DescOne>
                </Pfnames>

              </SProfile>

              <SProfile>
                <SPFTWO />

                <Pfnames>
                  <NameOne>
                  Diana Brock
                  </NameOne>

                  <DescOne>
                  Booth: 3G12
                  </DescOne>
                </Pfnames>

              </SProfile>


            </Profcnt>

            <UpcomingContainer>

              <Upcoming>
                Upcoming
              </Upcoming>
              <UpcomingImg src="./img/clock.png" alt="#" />

            </UpcomingContainer>


          </EtChildFour>

        </EheadTwo>

      </EContainer>
    </EventBg>
  )
}

export default EventSchedule


const EventBg = styled.div`

  width: 100%;
  height: 1178px;
  margin-top: 240px;
  background: linear-gradient(180deg, rgba(56, 29, 219, 0.05) 0%, rgba(56, 29, 219, 0) 100%);
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (max-width:1330px) {
    margin-top: 100px;
    height: 2100px;
  }

  @media (max-width:770px) {
    height: 2000px;
  }
`

const EContainer = styled.div`

  width: 1170px;
  height: 1018px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width:1330px) {
    width: 650px;
    height: 2000px;
    gap: 30px;
  }

  @media (max-width:770px) {
    width: 340px;
    height: 1900px;
    gap: 30px;
  }
`

const EheadOne = styled.div`

  width: 1170px;
  height: 186px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  @media (max-width:1330px) {
    width: 650px;
    height: 360px;
    align-items: center;
    gap: 30px;
  }

  @media (max-width:770px) {
    width: 340px;
  }
`

const EheadTwo = styled.div`

  width: 1170px;
  height: 792px;
  border: 1px solid #E0E0E0;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width:1330px) {
    width: 650px;
    height: 1800px;
    gap: 30px;
  }

  @media (max-width:770px) {
    width: 340px;
  }
`

const Title = styled.h1`

  width: 278px;
  height: 44px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 34px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #222222;

  @media (max-width:770px) {
    width: 340px;
    text-align: center;
    font-size: 26px;
  }
`

const Tdays = styled.div`

  width: 1170px;
  height: 82px;
  display: flex;
  flex-direction: row;
  gap: 30px;

  @media (max-width:1330px) {
    width: 650px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width:770px) {
    width: 340px;
    height: 65px;
  }
`


const Dtitle = styled.div`
  width: 100px;
  height: 38px;
  font-family: 'Montserrat';
  font-weight: 800;
  font-size: 24px;
  line-height: 38px;
  color: #222222;
  opacity: 0.5;
  transition: all 0.3s ease-in-out;

  @media (max-width:1330px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width:770px) {
    font-size: 20px;
  }
`

const Dparagraph = styled.div`
  width: 90px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #222222;
  opacity: 0.2;
  transition: all 0.3s ease-in-out;

  @media (max-width:1330px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width:770px) {
    font-size: 14px;
  }
`

const Days = styled.div`

  width: 370px;
  height: 82px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {

    border-bottom:5px solid #381DDB;

    ${Dtitle} {
      color: #381DDB;
      opacity: 1;
    }

    ${Dparagraph} {
      color: #381DDB;
      opacity: 1;
    }
  }

  @media (max-width:1330px) {
    width: 100%;
    text-align: center;

    &:hover {
      background: #e0dbff50;
    }
  }

  @media (max-width:770px) {
    width: 340px;
  }
`

const EtChildOne = styled.div`

  width: 1170px;
  height: 120px;
  background: #efedfc;
  border-radius: 24px 24px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media (max-width:1330px) {
    width: 100%;
    height: 200px;
    gap: 15px;
    flex-direction: column;
  }

  @media (max-width:770px) {
    width: 340px;
    gap: 10px;
    height: 180px;
  }
`

const EtChildTwo = styled.div`

  width: 1170px;
  height: 56px;
  display: flex;
  flex-direction: row;
  padding: 0px 40px;
  gap: 30px;

  @media (max-width:1330px) {
    width: 100%;
    height: 300px;
    padding: 0px 20px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width:770px) {
    width: 340px;
    height: 340px;
    justify-content: center;
    padding: 0px 10px;
  }
`

const EtChildThree = styled.div`
  
  width: 1170px;
  height: 232px;
  padding: 0px 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  border-inline: 1px solid #E0E0E0;
  gap: 30px;

  @media (max-width:1330px) {
    width: 100%;
    height: 600px;
    padding: 0px 20px;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin-top: 10px;
  }

  @media (max-width:770px) {
    width: 340px;
    height: 550px;
    padding: 0px 10px;
  }
`

const EtChildFour = styled.div`
  width: 1170px;
  height: 144px;
  padding: 0px 40px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  gap: 30px;
  align-items: flex-start;

  @media (max-width:1330px) {
    width: 100%;
    height: 350px;
    padding: 0px 20px;
    margin-top: 10px;
    gap: 15px;
    align-items: center;
    flex-direction: column;
  }

  @media (max-width:770px) {
    width: 340px;
    gap: 15px;
    padding: 0px 10px;
  }
`

const TitleChildOne = styled.h1`

  width: 230px;
  height: 38px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #222222;
  text-align: start;

  @media (max-width:1330px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width:770px) {
    width: 340px;
    font-size: 18px;
  }
`

const TitleChildTwo = styled(TitleChildOne)`

  width: 370px;
  height: 38px;

  @media (max-width:1330px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width:770px) {
    width: 340px;
  }
`

const TitleChildThree = styled(TitleChildOne)`

  width: 270px;
  height: 38px;

  @media (max-width:1330px) {
    width: 100%;
    text-align: center;
  }

  @media (max-width:770px) {
    width: 340px;
  }
`

const Time = styled.div`

  width: 230px;
  height: 24px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;

  @media (max-width:1330px) {
    text-align: center;
  }

  @media (max-width:770px) {
    font-size: 14px;
  }
`

const Desc = styled.div`

  width: 370px;
  height: 48px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #222222;

  @media (max-width:1330px) {
    width: 300px;
    font-size: 14px;
    text-align: center;
  }
`

const Profile = styled.div`

  width: 270px;
  height: 56px;
  display: flex;
  flex-direction: row;
  gap: 10px;

  @media (max-width:1330px) {
    width: 300px;
    justify-content: center;
  }
`
const ProfPic = styled.div`

  width: 50px;
  height: 50px;
  background: url('/img/Avatar(1).png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const PfParent = styled.div`

  display: flex;
  flex-direction: column;
`

const PfTitle = styled.div`

  width: 204px;
  height: 24px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #222222;

  @media (max-width:1330px) {
    width: 200px;
    text-align: center;
  }
`

const PfParagraph = styled.div`

  width: 204px;
  height: 24px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  opacity: 0.5;

  @media (max-width:1330px) {
    width: 200px;
    text-align: center;
  }
`

const Prev = styled.div`

  width: 100px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 16px 0px 0px 30px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: right;
  color: #222222;

  @media (max-width:1330px) {
    width: 125px;
    font-size: 14px;
    text-align: center;
  }
`

const PrevPlay = styled.div`
  
  width: 24px;
  height: 24px;
  background: url('/img/PlayBlack.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: all 0.2s ease;


  &:hover {
    transform: scale(1.02);
  }
`





const Stitle = styled.div`

  width: 230px;
  height: 24px;
  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 15.5px;
  line-height: 24px;
  color: #222222;

  @media (max-width:1330px) {
    width: 300px;
    font-size: 14px;
    text-align: center;
  }
`

const Sdesc = styled.div`

  width: 370px;
  height: 168px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 15.5px;
  line-height: 24px;
  color: #222222;

  @media (max-width:1330px) {
    width: 300px;
    font-size: 13px;
    line-height: 20px;
    text-align: center;
  }
`

const ProfContainer = styled.div`

  width: 270px;
  height: 232px;
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width:1330px) {
    gap: 15px;
    align-items: center;
  }
`

const SProfile = styled.div`
  width: 270px;
  height: 56px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`

const SPimg = styled.div`

  width: 56px;
  height: 56px;
  background: url('./img/Pf.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const SPimgTwo = styled(SPimg)`

  background: url('./img/Avatar(1).png');
`

const SPimgThree = styled(SPimg)`

  background: url('./img/pf2.png');
`

const Pfnames = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 204px;
  height: 48px;

  @media (max-width:1330px) {
    width: 180px;
    align-items: center;
  }
`

const NameOne = styled.h1`

  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  color: #222222;

  @media (max-width:1330px) {
    width: 300px;
    text-align: center;
  }
`

const DescOne = styled.h1`

  font-family: 'Montserrat';
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #222222;
  opacity: 0.5;

  @media (max-width:1330px) {
    width: 300px;
    text-align: center;
  }
`

const LiveContainer = styled.div`

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 104px 0px 0px 64px;

  @media (max-width:1330px) {
    justify-content: center;
  }
`

const Live = styled.div`

  width: 66px;
  height: 24px;
  display: flex;
  gap: 8px;
  
  width: 34px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FC5252;
`

const LiveImg = styled.img`

  width: 26px;
  height: 18px;
`

const Tdesc = styled(Sdesc)`

  height:48px;
`

const Profcnt = styled(ProfContainer)`

  height: 144px;
`


const UpcomingContainer = styled.div`

  width: 120px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin: 60px 0px 0px 10px;

  @media (max-width:1330px) {
    justify-content: center;
  }
`

const Upcoming = styled.div`

  width: 88px;
  height: 20px;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #222222;

  @media (max-width:1330px) {
    width: 300px;
    text-align: center;
  }
`

const UpcomingImg = styled.img`

  width: 24px;
  height: 24px;
`

const SPFONE = styled(SPimg)`
  
  background: url('./img/pf3.png');
`

const SPFTWO = styled(SPimg)`
  
  background: url('./img/pf4.png');
`