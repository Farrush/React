/*import React from "react"
Sem JSX
const App = () => {

  return React.createElement('a',{
    href:'https://google.com.br'
  },'Clique Aqui')
} 

export default App 
// COM JSX  
const App = () => {
  return(
    <a href='https://google.com.br'>Clique Aqui</a>
  )
}
export default App */
//import { Header } from './components/Header'
//import { Footer } from './components/Footer'
//import { Section } from './components/Section'
const App = () =>{
  const handleButtonClick= () =>{
    alert("Fui clicado!!!")
  }
  return (
    <button onClick={handleButtonClick}>Clique Aqui!</button>
    /*<div>
      <Header title="TI102" subtitle="Não-Formados" />

      <Section />

      <Footer />
    </div>
*/

  )
}

export default App