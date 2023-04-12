import styled from "styled-components"
import SwitchMode from "./SwitchMode"
import { useContext } from "react"
import { Link } from "react-router-dom"
import {ThemeContext} from "../ThemeContext/themeContext"

function Header() {
    const theme = useContext(ThemeContext)
    return (
        <HeaderPane className={theme.toggle}>
            <Link to={'/'}>
            <span>Where in the world?</span>
            </Link>
            <SwitchMode />
        </HeaderPane>
    )
}

export default Header

const HeaderPane = styled.div`
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    box-shadow: var(--BoxShadow);
    z-index: 100;

    span {
        font-size: 24px;
        font-weight: bold;
        text-shadow: var(--TextShadow);
    }
`