import { useState } from 'react'
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);

  // https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
  // 34BlW9by8E2EexnQEhzhO-oB368G557_lEuekm1v2Rk
  const getImages = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=34BlW9by8E2EexnQEhzhO-oB368G557_lEuekm1v2Rk&query=${value}&orientaion=squarish`)
      .then(res => res.json())
      .then(result =>
        setData(result.results)
        // console.log(result)
      )
      
  }
  return (
    <div className="App">
      <div className="mydiv">
        <span>Serch</span>
        <input style={{ width: "60%" }} type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
        <button onClick={() => getImages()}>Serch</button>
      </div>
      <div className='gallary'>
        {
          data.map((item) => {
            return <img key={item.id} className="items" src={item.urls.regular}></img>
          })
        }
      </div>
    </div>
  );
}

export default App;
