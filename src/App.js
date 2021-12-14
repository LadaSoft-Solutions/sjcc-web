import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
    const sampleProps = "I'm a prop"

    return (
        <Router>
            <div className="app">
                <div className="container">
                    {/* Call the Navbar component */}
                    <Navbar />

                    {/* App Body */}
                    <h1>Hello! I'm the body</h1>
                    {/* End App Body */}

                    {/* Call the Footer component with props */}
                    <Footer sampleProps={sampleProps} byName={"Markii"} />
                </div>
            </div>
        </Router>
    );
}

export default App
