import './App.css'
import styled, {css} from "styled-components";
import {myTheme} from "./styles/Theme.styled.tsx";

function App() {
  return (
    <Box>
      <Card>
        <Image src='./src/assets/img/desert.png' alt={'desert'}/>
          <Wrapper direction={'column'}>
              <H2>Headline</H2>
              <Text>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</Text>
              <Wrapper direction={'row'} gap={'12px'} padding={'0'}>
                  <StyledBtn>See more</StyledBtn>
                  <StyledBtn btnType = 'outlined'>Save</StyledBtn>
              </Wrapper>
          </Wrapper>
      </Card>
    </Box>
  )
}

export default App

const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #e3dede;
`

const Card = styled.div`
    width: 300px;
    height: 350px;
    border-radius: 15px;
    background-color: #FFF;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.10);
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    padding: 10px;
`
const Image = styled.img `
    border-radius: 10px;
    transition-duration: .2s;
    
    &:hover {
        transform: scale(1.005);
    }
`
type WrapperProps = {
    direction: 'column' | 'row',
    gap?: string,
    padding?: string,
}

const Wrapper = styled.div<WrapperProps>`
    padding-inline: ${props => props.padding || '10px'};
    display: flex;
    flex-direction: ${props => props.direction};
    gap: ${props => props.gap || '20px' };
`

const H2 = styled.h2`
    font-size: 16px;
    font-weight: 700;
`

const Text = styled.p`
    color: #ABB3BA;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    align-self: center;
`
type StyledBtnProps = {
    btnType?: string,
}

const StyledBtn = styled.a<StyledBtnProps>`
    width: 86px;
    height: 30px;
    border-radius: 5px;
    font-size: 10px;
    color: #FFF;
    font-weight: 700;
    background-color: ${myTheme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
    border: 2px solid ${myTheme.colors.primary};
    
    &:hover {
        background-color: transparent;
        color: ${myTheme.colors.primary};
    }
    
    ${props => props.btnType === 'outlined' && css`
        background-color: transparent;
        color: ${myTheme.colors.primary};

        &:hover {
            background-color: ${myTheme.colors.primary};
            border: none;
            color: #FFF;
        }
    `}
`
