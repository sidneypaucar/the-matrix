import axios from "axios";

import Header from "./components/Header";

import BlueFeed from "./components/BlueFeed";

import RedFeed from "./components/RedFeed";

import Form from "./components/Form";

import ReactPlayer from "react-player";

import { useEffect, useState } from "react";

import './App.css';

import { Route, Link } from "react-router-dom";
import Footer from "./components/Footer";


const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy';

function App() {
  const [userComments, setUserComments] = useState([]);
  
  const [toggleFetch, setToggleFetch] = useState(true);

  const [toggleShow, setToggleShow] = useState(true);
  const showText = () => {
    setToggleShow(!toggleShow);
  }


  useEffect(() => {
    console.log('Getting User Comments');

    const getUserComments = async () => {
      const resp = await axios.get(API_URL);
      console.log(resp.data);
      setUserComments(resp.data.records);
    }

    getUserComments();
  }, [toggleFetch]);



  return (
    <div>
      <Route path="/">
        <Header showText={showText} />
      </Route>
      
      {toggleShow ?
        <nav>
          <h3>This is your last chance. <br/>After this there is no turning back. <br/>You take the blue pill, the story ends;<br/> you wake up in your bed and <br/>believe whatever you want to believe.</h3>
          <h1> Which Will You Decide? </h1>
          <Link to="/bluefeed" onClick={showText}><button className="Blue-Btn">Blue Pill</button></Link>
          <Link to="/redfeed" onClick={showText}><button className="Red-Btn">Red Pill</button></Link>
        </nav>
        : null}

      <Route path="/bluefeed">
        <div>
          <ReactPlayer className="video"
            url="https://www.youtube.com/watch?v=9ix7TUGVYIo"
          />
          <Form
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
          
        </div>

        {userComments.map((userComment) => (
          <BlueFeed
            key={userComment.id}
            postData={userComment}
            toggleFetch={toggleFetch}
            setToggleFetch={setToggleFetch}
          />
        ))}
      </Route>

      <Route path="/redfeed">
        <div>
          <ReactPlayer className="video"
            url="https://www.youtube.com/watch?v=Sdkwu2FvFfI"
          />
        </div>
        <RedFeed />
      </Route>

      <section className="Footer" id="Footer-ID" ><Footer /></section>
    </div>
  )
}

export default App;
