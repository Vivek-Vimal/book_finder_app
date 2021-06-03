import React,{useState, useEffect} from 'react'
import FadeLoader from 'react-spinners/FadeLoader'
import video from './video/video.mp4'

const Home = () => {
  const [book, setBook] = useState("");
  const [click, setClick] = useState("");   //  console.log(click)
  const [display, setDisplay] = useState([]);

  const [spinner, setSpinner] = useState(null);

  useEffect( ()=>{
    const ApiCall = async ()=>{
      if(book === ""){
      }else{
      setSpinner(true)  
      const Api = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${click}+search`)
      const UseApi = await Api.json();
      setDisplay(UseApi.items); // console.log(display) 
      setSpinner(false)
      }
    }
    ApiCall();
  },[click])

    return (
        <section>
          <div>
           <video autoPlay loop muted className={click === ""?"v":"x"}>
            <source src={video} type="video/mp4"/>
          </video>
          </div>
          <section className="search_content">
          <header className="head"><div className="flex"><p className="ui">Durbin Technology</p><p className="pi">Welcomes You</p></div></header>  
          <div className="main">
            <h2 className="title">Search Your Book Here</h2>
              <div className="search_sec">
                <input type="search" className="search" placeholder="Book Name" onChange={ (e)=> setBook(e.target.value)}></input>
                <button type="submit" className="btn" onClick={()=> {setClick(book)} }>Search</button>
            </div>
          </div>
          </section>
          <div className="sx">
            <div className="spin">{spinner ? <FadeLoader color="deepskyblue" height="32" margin="10"/> : spinner }</div>
          </div>
          <section className="display">
            {display.map( e => (
              <div className="box">
                <div className="box_content">
                <div className="left">
               <img src={e.volumeInfo.imageLinks.thumbnail} alt="image" className="img"/>
                </div>
                <div className="right">
               <h5 className="author">By: {e.volumeInfo.authors}</h5>
               <div className="date">Year: {e.volumeInfo.publishedDate}</div>
               <a href={e.volumeInfo.canonicalVolumeLink} target="blank"><button type="button" className="button">More Info</button></a>
               </div>
             </div>  
             <h3 className="book_title">{e.volumeInfo.title}</h3>
            </div>
            ))}
          </section>
        </section>
    )
}

export default Home
