import React from 'react'
import './ResultPage.css'

const ResultPage =(props)=>{
    return(
        <div className="ResultPage">
            {/* <h1>{props.value}</h1> */}
            <h3>{props.title}</h3>
            <p ><a href={props.pageLink} target="_blank" rel="noopener noreferrer" >{props.snippet}</a></p>
        </div>
    )

}

export default ResultPage;