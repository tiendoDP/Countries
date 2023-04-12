import SearchAndFilter from "./SearchAndFilter"
import Countries from "./Countries";



function MainContent() {
    return (
        <div style={{height: 'max-content'}}>
            <SearchAndFilter />
            <Countries />
        </div>
    )
}

export default MainContent;