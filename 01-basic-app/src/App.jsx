import './App.css'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from './components/Card'

function App() {
  
// Here Navbar Card and Footer are components and title and body in Card component are props.
  return (
    <>
     <Navbar/>
     <div className="cards">
     <Card title="Card 1" body="This is the body of card 1"/>
      <Card title="Card 2" body="This is the body of card 2"/>
      <Card title="Card 3" body="This is the body of card 3"/>
      </div>
     <Footer/>
    </>
  )
}

export default App
