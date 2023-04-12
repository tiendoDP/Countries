import { useContext } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import MainContent from "./Component/MainContent";
import { ThemeContext } from "./Component/ThemeContext/themeContext";
import CountryDetail from "./Component/MainContent/CountryDetail";
import Footer from "./Component/Footer";



function App() {
    const themeContext = useContext(ThemeContext)
    return (
        <AppContainer className={themeContext.toggle}>
            <Router style={{}}>
                <Header />
                <ContentContainer>
                    <Routes>
                        <Route exact path='/Countries' element={<MainContent />} />
                        <Route path="/regions/:regionName" element={<MainContent />} />
                        <Route path="/country/:countryName" element={<CountryDetail />} />
                        <Route path="/search/:countryName" element={<MainContent />} />
                    </Routes>
                </ContentContainer>
            </Router>
            <Footer />
        </AppContainer>
    )}

export default App;

const AppContainer = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`

const ContentContainer = styled.div`
    max-width: 1280px;
    height: 100%;
    margin: 0 auto;
    display: block;
`
