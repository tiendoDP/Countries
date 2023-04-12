import { useContext } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { ThemeContext } from "../../ThemeContext/themeContext"


function CountryCard({country}) {
    const theme = useContext(ThemeContext)
    
    return (
        <Link to={`/country/${country.name}`} style={{ textDecoration: 'none' }} >
        <CountryCardCss className={theme.toggle}>
            <div className="flag">
                <img src={country.flag} alt="" />
            </div>
            <CountryInfo className="infor">
                <h3>{country.name}</h3>
                <div>Population: 
                    <span>{country.population}</span>
                </div>
                <div>Region: 
                    <span>{country.region}</span>
                </div>
                <div>Capital: 
                    <span>{country.capital}</span>
                </div>
            </CountryInfo>
        </CountryCardCss>
        </Link>
    )
}

export default CountryCard

const CountryCardCss = styled.div`
    max-width: 400px;
    width: 100%;
    filter: brightness(1);
    overflow: hidden;
    border-radius: 4px;
    margin-bottom: 12px;
    user-select: none;

    &:hover {
        filter: brightness(0.8);
    }

    &:hover img{
        transform: scale(1.1);
    }

    &:hover .infor {
        background-color: rgb(0,0,0,0.2);
    }

    .flag {
        width: 100%;
        height: 160px;
        display: block;
        overflow: hidden;
        box-shadow: 0 4px 12px rgb(0,0,0,0.2);
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: all 0.2s linear;
        }
    }
`

const CountryInfo = styled.div`
    padding: 10px 16px;
    
    h3 {
        margin: 16px 0;
        font-size: 20px;
        font-weight: bold;
        height: 50px;
    }
    div {
        display: block;
        font-size: 16px;
        font-weight: 700;
        margin: 4px 0;
        span {
            font-weight: 400;
            margin-left: 4px;
        }
    }
`