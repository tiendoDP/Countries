import { useContext, useEffect, useRef, useState } from "react"
import {AiOutlineDown} from "react-icons/ai"
import styled from "styled-components"
import {ThemeContext} from "../../ThemeContext/themeContext"
import Options from "./Options"
import { useParams } from "react-router-dom"

function Filter() {
    const theme = useContext(ThemeContext)
    const refSelectItem = useRef()
    const [isShowOptions, setIsShowOptions] = useState(false)
    const {regionName} = useParams()
    const [valueOption, setValueOption] = useState("All")

    useEffect(() => {
        if(regionName === undefined) setValueOption('All')
        else setValueOption(regionName)
        
    }, [regionName])

    const handleOption = (e) => {
        if(refSelectItem.current) {
            setIsShowOptions(refSelectItem.current.contains(e.target))
        }
    }
    useEffect(() => {
        if(isShowOptions) {
            document.addEventListener('click', handleOption)
            return () => {
                document.removeEventListener('click', handleOption)
            }
        }
    },[isShowOptions])
    

    return (
        <FilterPane>
            <h3>Filter by regions</h3>
            <SelectPane >
                <SelecItemPane 
                    className={theme.toggle}
                    ref = {refSelectItem}
                    onClick={handleOption}
                > 
                    <span>{valueOption}</span>
                    <AiOutlineDown />
                </SelecItemPane>
                <Options isShowOptions={isShowOptions} />
            </SelectPane>
        </FilterPane>
    )
}

export default Filter

const FilterPane = styled.div`
    max-width: 160px;
    width: 100%;
    margin-top: 20px;

    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--TextShadow);
    }
`

const SelectPane = styled.div`
    width: 100%;
    margin-top: 8px;
    position: relative;
`

const SelecItemPane = styled.div`
    padding: 0 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 34px;
    border-radius: 4px;
    user-select: none;
    box-shadow: var(--BoxShadow);

    span {
        font-size: 18px;
        font-weight: bold;
    }
`


