import React from 'react'

const NewsItem = (props)=> {
  
    let {title,description,imageUrl,newsUrl,aurthor,publishDate,source,mode} = props;
    return (
      <>
      <span className="badge rounded-end-pill text-bg-danger my-1">{source}</span>
      <div className={`card text-${mode ==='light'?'light':'dark'} bg-${mode ==='light'?'dark':'light'}`} style={{width: "20rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className={`text-${mode ==='light'?'light':'dark'}`}>by {aurthor} on {new Date(publishDate).toGMTString()}</small></p>
          <div className='text-center'>
          <a href={newsUrl} target='_blank' rel='noreferrer' className={`btn btn-sm btn-${mode ==='light'?'warning':'dark'}`}>Read More</a>
          </div>
        </div>
      </div>
      </>
    )
}
export default NewsItem;