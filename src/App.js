import axios from "axios";

import { useEffect, useState } from "react";

function App() {

  useEffect(() => {
    console.log('Getting User Comments');

    const getUserComments = async () => {
      const resp = await axios.get('https://api.airtable.com/v0/app9GMqfkrcNGKaR0/Table%201?api_key=key1NApkdPeWu6bJy');
      console.log(resp);
    }

    getUserComments();
  }, []);

  return (
    <div>

    </div>
  );
}

export default App;
