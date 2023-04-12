import styled from "styled-components"
import CountryCard from "./CountryCard"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import ScrollBar from "react-perfect-scrollbar"
import {getCountries, getCountriesByRegion, getCountriesByName} from "../../Store/Actions/countriesAction"
import Loading from "../../Loading"

function Countries() {
    const dispatch = useDispatch()
    const countries = useSelector(state => state.CountriesReducer.countries)
    const para = useParams()
    const loading = useSelector(state => state.CountriesReducer.loading)
    useEffect(() => {
        if(para.regionName) dispatch(getCountriesByRegion(para.regionName))
        else if(para.countryName) dispatch(getCountriesByName(para.countryName))
        else dispatch(getCountries())
    }, [dispatch, para.regionName, para.countryName])
    return (
        <>
            {
                loading ? (<Loading />) : (
                    <ScrollBar style={{maxHeight: '70vh', overflow: 'hidden'}}>
                        <CountriesCss>
                            {
                                countries.map((country, index) => {
                                    return <CountryCard country={country} key= {index}/>
                                })
                            }
                        </CountriesCss>
                    </ScrollBar>
                )
            }
        </>
    )
}

export default Countries

const CountriesCss = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    padding: 4px 1px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }
    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
    }
    @media screen and (max-width: 680px) {
        grid-template-columns: repeat(1, 1fr);
    }
`
