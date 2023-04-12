import { useContext, useEffect, useState } from "react"
import styles from "./countryDetailStyle.module.scss"
import axios from "axios"
import clsx from "clsx"
import { Link } from "react-router-dom"
import ScrollBar from "react-perfect-scrollbar"
import { ThemeContext } from "../../ThemeContext/themeContext"
import { useSelector } from "react-redux"

const getCountryNameByCode = async(code) => {
    const result = await axios.get(`https://restcountries.com/v2/alpha?codes=${code}`)
    return result.data
}

function CountryInfor() {
    const theme = useContext(ThemeContext)
    const countryDetail = useSelector(state => state.CountriesReducer.country)

    const [countriesBorder, setCountriesBorder] = useState([])

    useEffect(() => {
        if(countryDetail && countryDetail.borders) {
            getCountryNameByCode(countryDetail.borders)  
                .then(res => {
                        const countryName = res.map(country => country.name)
                        setCountriesBorder(countryName)
                })
                .catch(error => console.log(error))
        }
    },[countryDetail])
    

    return (
        <ScrollBar style={{maxHeight: '70vh', overflow: 'hidden'}}>
        <div className={styles.countryInfor}>
            {
                countryDetail &&
                <>
                    <h3 className={styles.countryName}>{countryDetail.name}</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.countryInfor__title}>Native Name</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{countryDetail.nativeName}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Official</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{countryDetail.altSpellings[2]}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Population</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{new Intl.NumberFormat().format(countryDetail.population)}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Region</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{countryDetail.region}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Sub Region</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{countryDetail.subregion}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Capital</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{countryDetail.capital}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Top level domain</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{countryDetail.topLevelDomain[0]}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Currencies</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{`${countryDetail.currencies[0].code} - ${countryDetail.currencies[0].name}`}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Language</td>
                                <td>:</td>
                                <td className={styles.countryInfor__value}>{countryDetail.languages[0].name}</td>
                            </tr>
                            <tr>
                                <td className={styles.countryInfor__title}>Border Countries</td>
                                <td>:</td>
                                <td className={styles.borderList}>
                                    {
                                        countriesBorder.length > 0 && countriesBorder.map((value, index) => 
                                            (
                                                <Link to={`/country/${value}`} style={{textDecoration: "none"}} key={index}>
                                                    <div className={clsx(theme.toggle, styles.borderItem)} >{value}</div>
                                                </Link>
                                            )
                                        )
                                    }
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            }
        </div>
        </ScrollBar>
    )
}

export default CountryInfor