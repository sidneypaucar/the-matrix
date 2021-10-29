import axios from "axios";
import Header from "./components/Header";
import BlueFeed from "./components/BlueFeed";
import RedFeed from "./components/RedFeed";
import Form from "./components/Form";
import ReactPlayer from "react-player";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import './App.css';

const API_URL = 'https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy';

function App() {
  const [userComments, setUserComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  const [toggleShow, setToggleShow] = useState(true);

  const showText = () => {
    setToggleShow(!toggleShow);
  }

  useEffect(() => {
    const getUserComments = async () => {
      const resp = await axios.get(API_URL);
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
          <Menu />
          <Link to="/bluefeed" onClick={showText}><button className="Blue-Btn"></button></Link>
          <Link to="/redfeed" onClick={showText}><button className="Red-Btn"></button></Link>
        </nav>
        : null}

      <Route path="/bluefeed">
        <div>
          <ReactPlayer className="video"
            url="https://www.youtube.com/watch?v=9ix7TUGVYIo"
          />
          <h1 className="Matrix-Header">WELCOME BACK INTO THE MATRIX</h1>
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
