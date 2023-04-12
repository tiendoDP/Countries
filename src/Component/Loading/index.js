import styled from "styled-components"
import "./Loading.css"
function Loading() {
    return (
        <LoadingPane>
            <div className="loader">
                <div className="circle" />
                <div className="circle" />
                <div className="circle" />
                <div className="shadow" />
                <div className="shadow" />
                <div className="shadow" />
            </div>
        </LoadingPane>
    )
}

export default Loading

const LoadingPane = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: 300px;
    height: 300px;
`