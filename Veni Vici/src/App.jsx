import React, { useState } from 'react';


const API_KEY = 'live_qnLNvnoCRPpu05b66eXqYGpJ2vBnc1fxXJhIGATZKLoIOuoTy4O7GdPVKpLB2cwR';
const API_URL = 'https://api.thecatapi.com/v1/images/search';

function App() {
  const [catData, setCatData] = useState(null);
  const [banList, setBanList] = useState([]);


  const fetchCat = async () => {
    let fetchedCat = null;
    for (let i = 0; i < 10; i++) {
      const response = await fetch(API_URL, {
        headers: {
          'x-api-key': API_KEY
        }
      });
      const data = await response.json();
      if (data.length > 0 && data[0].breeds && data[0].breeds.length > 0) {
        const cat = data[0];
        const breed = cat.breeds[0].name;
        if (!banList.includes(breed)) {
          fetchedCat = cat;
          break;
        }
      }
    }
    if (fetchedCat) {
      setCatData(fetchedCat);
    } else {
      alert('All cats are banned!');
    }
  };


  const handleBreedClick = () => {
    if (catData && catData.breeds && catData.breeds.length > 0) {
      const breed = catData.breeds[0].name;
      if (!banList.includes(breed)) {
        setBanList([...banList, breed]);
      }
    }
  };

  const handleBanClick = (breed) => {
    setBanList(banList.filter(item => item !== breed));
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Cat Discovery</h1>
      <button onClick={fetchCat}>Discover Cat</button>
    
      {catData && catData.breeds && catData.breeds.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <img 
            src={catData.url} 
            alt="Cat" 
            style={{ maxWidth: '400px', height: 'auto' }} 
          />
          <div>
            <p>
              <p>Breed: </p>
              <p 
                onClick={handleBreedClick} 
                style={{ cursor: 'pointer', color: 'yellow' }}
              >
                {catData.breeds[0].name}
              </p>
            </p>
            <p>
              Temperament: 
              {catData.breeds[0].temperament}
            </p>
            <p>
              Origin: 
              {catData.breeds[0].origin}
            </p>
          </div>
        </div>
      )}

      {/* Display the ban list */}
      {banList.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2>Ban List (Click to Remove)</h2>
          <ul>
            {banList.map((breed, index) => (
              <li 
                key={index} 
                onClick={() => handleBanClick(breed)} 
                style={{ cursor: 'pointer', color: 'red' }}
              >
                {breed}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
