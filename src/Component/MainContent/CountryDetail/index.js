import { useContext, useEffect } from "react"
import styled from "styled-components"
import CountryInfor from "./CountryInfor"
import { useNavigate, useParams } from "react-router-dom"
import { ThemeContext } from "../../ThemeContext/themeContext"
import { useDispatch, useSelector} from "react-redux"
import { getCountryByName } from "../../Store/Actions/countriesAction"
import Loading from "../../Loading"

function CountryDetail () {
    const theme = useContext(ThemeContext)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const para = useParams()
    const countryDetail = useSelector(state => state.CountriesReducer.country)
    const loading = useSelector(state => state.CountriesReducer.loading)
    
    useEffect(() => {
        dispatch(getCountryByName(para.countryName))
    },[para.countryName, dispatch])

    return (
        <>
            {
                loading ? (<Loading />) : (
                    <Wrapper>
                        <div className={`goback-btn ${theme.toggle}`} onClick={() => {navigate(-1)}}>Go back</div>
                        <CountryContainer>
                        <div className="flagCountry">
                            {countryDetail && (<><img src={countryDetail.flag} alt="" /></>)}
                        </div>
                        <CountryInfor />
                        </CountryContainer> 
                    </Wrapper>
                )
            }
        </>
    )
}

export default CountryDetail

const Wrapper = styled.div`
    padding-top: 20px;
    .goback-btn {
        display: block;
        width: 80px;
        height: 28px;
        line-height: 28px;
        padding: 2px 4px;
        border-radius: 4px;
        text-align: center;
        font-weight: 500;
        filter: brightness(0.9);
        transition: all 0.2s linear;
        &:hover {
            filter: brightness(1);
            font-weight: bold;
            cursor: default;
            user-select: none;
        }
    }
`

const CountryContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    @media screen and (max-width: 800px) {
        flex-direction: column;
        align-items: center;
    }

    .flagCountry {
        max-width: 400px;
        width: 100%;
        height: 100%;
        margin-bottom: 12px;
        box-shadow: var(--BoxShadow);

        img {
            width: 100%;
            height: 100%;
            display: block;
        }
    }
`