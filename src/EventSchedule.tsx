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

          </EtChildThree>

          <EtChildFour>

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
`

const EContainer = styled.div`

  width: 1170px;
  height: 1018px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const EheadOne = styled.div`

  width: 1170px;
  height: 186px;
  display: flex;
  flex-direction: column;
  gap: 60px;
`

const EheadTwo = styled.div`

  width: 1170px;
  height: 792px;
  border: 1px solid #E0E0E0;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
`

const Tdays = styled.div`

  width: 1170px;
  height: 82px;
  display: flex;
  flex-direction: row;
  gap: 30px;
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
`

const EtChildTwo = styled.div`

  width: 1170px;
  height: 56px;
  display: flex;
  flex-direction: row;
  padding: 0px 40px;
  gap: 30px;
`

const EtChildThree = styled.div`
  
  width: 1170px;
  height: 232px;
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-inline: 1px solid #E0E0E0;
`

const EtChildFour = styled.div`
  width: 1170px;
  height: 144px;
  padding: 0px 40px;
  display: flex;
  flex-direction: row;
  align-items: center;

`

const TitleChildOne = styled.h1`

  width: 230px;
  height: 38px;
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  color: #222222;
  text-align: start;
`

const TitleChildTwo = styled(TitleChildOne)`

  width: 370px;
  height: 38px;
`

const TitleChildThree = styled(TitleChildOne)`

  width: 270px;
  height: 38px;
`

const Time = styled.div`

  width: 230px;
  height: 24px;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`

const Desc = styled.div`

  width: 370px;
  height: 48px;
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`

const Profile = styled.div`

  width: 270px;
  height: 56px;
  display: flex;
  flex-direction: row;
  gap: 10px;
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
  font-family: 'Raleway';
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
`

const PfParagraph = styled.div`

  width: 204px;
  height: 24px;
  font-family: 'Raleway';
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #222222;
  opacity: 0.5;
`

const Prev = styled.div`

width: 100px;
height: 24px;
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;
margin-top: 16px;
`

const PrevPlay = styled.div`
  
  width: 24px;
  height: 24px;
  background: url('/img/PlayBlack.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`