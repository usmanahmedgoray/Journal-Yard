import React,{useEffect,useState} from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News =(props)=>  {
  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(false);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
  // Make a constructor function for create the state in react project Component
  
  const capitalize=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  const updateNews = async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/${props.NewsType}?country=${props.countryContent}&category=${props.category}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}`;
    setloading({loading : true});
    // this.props.setProgress(30);
    let data = await fetch(url);
    props.setProgress(45);
    let parseData = await data.json();
    props.setProgress(70);
    setarticle(parseData.articles);
    setloading(false);
    settotalResults(parseData.totalResults)
    props.setProgress(100);
  }
  useEffect(() => {
    document.title = `${capitalize(props.category)} - The Annals`;
    updateNews(); 
    // eslint-disable-next-line
    
}, [])


// Asynchronous function for fetch the data from news Api and set setState by using this attribute

  

  
  // Function for default Image if there is no image in the News Api Array Object Json file!!!
  const defaultImage = ()=>{
    let url = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png";
    return url;
  }
  const fetchMoreData = async()=>{
    setpage(page+1);
    let url = `https://newsapi.org/v2/${props.NewsType}?country=${props.countryContent}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setarticle(article.concat(parseData.articles));

    settotalResults(parseData.totalResults);
  }
  
    
    return (
        <>
              <div className="container mt-5 " style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <h2 className={`container text-center bg-danger text-light p-2 my-5 rounded-pill`} style = {{width : "85vw"}}>Top {capitalize(props.category)} Headlines </h2>
              {loading && <Loading/>}
              <InfiniteScroll
                  dataLength={article.length}
                  next={fetchMoreData}
                  hasMore={article.length !== totalResults}
                  loader={article.length !== totalResults?<Loading/>:false}
                  >
              <div className="container ">
                <div className="row my-4" >
                {article.map((e,idx)=>{
                  return <div className="col my-3" key={idx}>
                  <NewsItem title = {`${e.title?e.title.slice(0,45):""} ..`} description ={`${e.description?e.description.slice(0,76):""}...`} imageUrl = {e.urlToImage?e.urlToImage:defaultImage()} newsUrl ={e.url} aurthor = {!e.author?"Unknown":e.author} publishDate = {e.publishedAt} source = {e.source.name} mode = {props.mode} />
                </div>
                })
              } 
                </div>
              </div>
              </InfiniteScroll>
              </div>
        </>
    )
}
News.defaultProps={
  country : "us",
  pageSize : 10,
  category : "general"
}
News.propTypes = {
  country : PropTypes.string,
  pageSize : PropTypes.number,
  category : PropTypes.string
}
export default News;