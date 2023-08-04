import React from 'react' 
import RhombusLoader from "./Material/RhombusLoader.gif"

const Loading =()=> {
    return (
      <div className="container text-center my-5">
        <img src={RhombusLoader} alt="Loader" />
      </div>
    )
}

export default Loading;