import styled from "styled-components"
import {FaGlobeAfrica, FaGlobeAmericas, FaGlobeAsia, FaGlobeEurope } from "react-icons/fa"
import {GiWorld, GiEarthAsiaOceania} from "react-icons/gi"
import OptionsItem from "./OptionsItem"
import { useEffect, useRef } from "react"
import { useContext} from "react"
import { ThemeContext } from "../../ThemeContext/themeContext"

function Options({isShowOptions, valueLoca}) {
    const regions = [
        {
            icon: GiWorld,
            value: 'All'
        },
        {
            icon: FaGlobeAfrica,
            value: 'Africa'
        },
        {
            icon: FaGlobeAmericas,
            value: 'Americas'
        },
        {
            icon: FaGlobeAsia,
            value: 'Asia'
        },
        {
            icon: FaGlobeEurope,
            value: 'Europe'
        },
        {
            icon: GiEarthAsiaOceania,
            value: 'Oceania'
        }
    ]
    const refOptionsItem = useRef(null)
    const theme = useContext(ThemeContext)

    useEffect(() => {
        const ShowOptions = () => {
            if(isShowOptions) {
                refOptionsItem.current.style.maxHeight = `${refOptionsItem.current.scrollHeight}px`
                refOptionsItem.current.style.transform = 'scaleY(1)'
            }
            else {
                refOptionsItem.current.style.maxHeight = '0'
                refOptionsItem.current.style.transform = 'scaleY(0)'
            }
        }
        ShowOptions()
        document.addEventListener('resize', ShowOptions)
        return () => document.removeEventListener('resize', ShowOptions)
    }, [isShowOptions])

    return (
        <OptionPane className={theme.toggle} ref={refOptionsItem}>
            {
                regions.map(region => 
                    <OptionsItem 
                        region = {region}
                        key = {region.value}                      
                    />)
            }
        </OptionPane>
    )
}

export default Options

const OptionPane = styled.ul`
    width: 100%;
    margin-top: 2px;
    border-radius: 4px;
    position: absolute;
    overflow: hidden;
    z-index: 10;
`

