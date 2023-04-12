import { useNavigate } from "react-router-dom"
import styled from "styled-components"


function OptionsItem ({region}) {
    const navigate = useNavigate()

    const handleItemOption = () => {
        if(region.value === "All") navigate('/')
        else navigate(`/regions/${region.value}`)
    }

    return (
        <OptionItem
            onClick={handleItemOption}
        >
            <region.icon />
            <span>{region.value}</span>
        </OptionItem>
    )
}

export default OptionsItem

const OptionItem = styled.li`
    display: flex;
    align-items: center;
    padding: 4px 8px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
        font-weight: bold;
        background-color: var(--OptionItemBackground);
        border-radius: 4px;
    }

    span {
        margin-left: 4px;
    }
`