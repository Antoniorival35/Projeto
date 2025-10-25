import './App.css'
import FirstComponent from './Componentes/FirstComponent'
import FirstComponent2 from './Componentes/FirstComponent2'
import Events from './Componentes/Events'
import MyComponent from './Componentes/MyComponent'
import TemplateExpression from './Componentes/TemplateExpression'

function App() {

  return (
    <div className='App'>
      {/*Chamando os componentes*/}
      <FirstComponent />
      <FirstComponent2 />
      <MyComponent />
      <Events />
      <TemplateExpression />
    </div>
  )
}

export default App
