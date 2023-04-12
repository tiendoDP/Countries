import { useContext } from 'react'
import {RiCopyrightLine} from 'react-icons/ri'
import styled from 'styled-components'
import {ThemeContext} from '../ThemeContext/themeContext'
function Footer() {
    const theme = useContext(ThemeContext)
    return (
        <FooterContainer className={theme.toggle}>
            <CoppyRight>
                <span>Copyright</span>
                <RiCopyrightLine />
                <span>Tien Do</span>
            </CoppyRight>
            <div>nguyenvutiendo369@gmail.com</div>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div`
    width: 100%;
    height: 8vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    padding-bottom: 4px;
`
const CoppyRight = styled.div`
    margin: 8px 0;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;

    span {
        margin: 0 4px;
    }
`

