import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

const url = 'https://edwardtanguay.vercel.app/share/techItems.json';

function App() {
  const [skillItems, setSkillItems] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(url);
      const _skillItems = response.data;
      setSkillItems([..._skillItems]);
    })();
  });

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Audio Sample</h2>
        <p><a href="media/spanish.mp3">play audio</a></p>
        <h2>Skills to Learn</h2>
        {skillItems.map(skillItem => {
          return (
            <>
              <div key={skillItem.id}>
                <div class="title">{skillItem.title}</div>
                <div className="description">
                  {skillItem.genericTermIdCode}
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default App
