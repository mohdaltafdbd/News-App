import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';


const App = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios
      .get("https://newsapi.org/v2/everything?q=apple&from=2022-10-29&to=2022-10-29&sortBy=popularity&apiKey=d79846f2dd6f42869281f72a23370827")
      .then((response) => setMyData(response.data.articles));
  }, []
  );
  return (
    <>
      <div className='container'>
        <h1 className="text-center .bg-secondary pr-5 mb-5">Dainik Jagran</h1>
        <div className='grid'>
          {myData.slice(0, 50).map((value) => {
            const { title, description, urlToImage } = value;
            return (
              <div className="card">
                <img src={urlToImage} className="card-img-top" alt='top'></img>
                <h2>{title.slice(0, 20)}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default App;
