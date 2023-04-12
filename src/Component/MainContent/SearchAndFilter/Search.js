import { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
function Search() {
    const [valueInput, setValueInput] = useState("")
    const navigate = useNavigate()
    const handleOnkeyDownInput = (e) => {
        if(e.keyCode === 13) {
            valueInput !== "" ? navigate(`/search/${valueInput}`) : navigate(`/`)
        }
    }
    return (
        <SearchPane>
            <h3>Search Country</h3>
            <SearchElement>
                <input 
                    type="text" 
                    placeholder="Input the end Enter to Search" 
                    onChange={(e) => setValueInput(e.target.value)}
                    value={valueInput}
                    onKeyDown={handleOnkeyDownInput}
                />
                <Link to={valueInput !== '' ? `/search/${valueInput}` : `/`} style={{with: '40px', height: '100%', color: '#000'}}>
                    <IconSearchPane>
                        <BiSearch className='Icon' />    
                    </IconSearchPane>
                </Link>
            </SearchElement>
        </SearchPane>
    )
}

export default Search

const SearchPane = styled.div`
    max-width: 320px;
    width: 100%;
    margin-top: 20px;

    h3 {
        font-size: 18px;
        font-weight: 600;
        text-shadow: var(--TextShadow);
    }

`

const SearchElement = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    width: 100%;
    height: 34px;
    box-shadow: var(--BoxShadow);
    border-radius: 4px;
    overflow: hidden;

    input {
        padding: 6px;
        border: none;
        outline: none;
        width: 100%;
        height: 100%;
    }

    .Icon {
        text-align: center;
        background-color: #aaa;
        height: 100%;
        width: 100%;
        padding: 5px;
        opacity: 0.7;
        transition: opacity 0.3s ease;

        &:hover {
            opacity: 1;
            cursor: pointer;
        }
    }

`

const IconSearchPane = styled.div`
    width: 40px;
    height: 100%;
`
