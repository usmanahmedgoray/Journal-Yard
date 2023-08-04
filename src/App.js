import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

const App =(props)=> {
  // Create Dark and Light Theme Mode

  const [theme, settheme] = useState('dark');
  const [loadingProgress, setLoadingProgress] = useState(0)

  const toggleMode = () =>{
    if(theme ==="dark"){
      document.body.style.backgroundColor = "#1a1a1a";
      settheme('light');
    }
    else{
      document.body.style.backgroundColor = "white";
      settheme('dark')
    }
  }
  // Create a variable to change the prop information
  const variable = {
    country : "us",
    pageSize : 12,
    NewsType : "top-headlines",
    apiKey : "a645b9b1ed114fc1bde6e9118bd34756",
    // a9bf92819ff74862b09104f21119a497
    // a645b9b1ed114fc1bde6e9118bd34756
    category : "general"
  }

  // Create a arrow function for set the progress loading bar

  // const setProgress = (progress)=>{
  //   setLoadingProgress(progress);
  // }

    return (
      <>
      <BrowserRouter>
          <Navbar toggleMode = {toggleMode}/>
        <LoadingBar
          height={3}
          color={theme ==='light'? 'red':'black'}
          progress={loadingProgress}
        />
        <Routes>
            <Route exact path = "/" element = {<News setProgress = {setLoadingProgress} key="general" pageSize={variable.pageSize} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "general" mode = {theme}/>}/>
            <Route exact path='/business' element = {<News setProgress = {setLoadingProgress} key="business" pageSize={variable.pageSize} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "business" mode = {theme}/>}/>
            <Route exact path='entertainment' element = {<News setProgress = {setLoadingProgress} key="entertainment" pageSize={12} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "entertainment" mode = {theme}/>}/>
            <Route exact path='general' element = {<News setProgress = {setLoadingProgress} key="general" pageSize={variable.pageSize} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "general" mode = {theme}/>}/>
            <Route exact path='health' element = {<News setProgress = {setLoadingProgress} key="health" pageSize={variable.pageSize} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "health" mode = {theme}/>}/>
            <Route exact path='science' element = {<News setProgress = {setLoadingProgress} key="science" pageSize={variable.pageSize} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "science" mode = {theme}/>}/>
            <Route exact path='sports' element = {<News setProgress = {setLoadingProgress} key="sports" pageSize={variable.pageSize} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "sports" mode = {theme}/>}/>
            <Route exact path='technology' element = {<News setProgress = {setLoadingProgress} key="technology" pageSize={variable.pageSize} NewsType = {variable.NewsType} countryContent = {variable.country} apiKey = {variable.apiKey} category = "technology" mode = {theme}/>}/>
            
        </Routes>
      </BrowserRouter>
      </>
    )
  }

export default App;

