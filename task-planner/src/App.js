import './App.css';

import Card from './components/card/Card'
import Navigator from './components/navigator/Navigator'

// data de prueba para testear componentes, se deben paginar cada 12 (1, 2, 3, 4, 6, 12)
const data = [
  {title: 'titulo 1', content: 'contenido'},
  {title: 'titulo 1', content: 'contenido'},
  {title: 'titulo 1', content: 'contenido'},
  {title: 'titulo 1', content: 'contenido'},
  {title: 'titulo 1', content: 'contenido'},
  {title: 'titulo 1', content: 'contenido'},
  {title: 'titulo 1', content: 'contenido'},
]
function App() {
  return (
    <div className="app">
      <Navigator/>
      <div className="cards">
        {data.map((card, index)=>
          <Card key={index} title={card.title} content={card.content}/>
        )}
      </div>
    </div>
  );
}

export default App;
