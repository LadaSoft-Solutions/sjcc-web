import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
// import Footer from './components/Footer/Footer'

// images
import sjccbanner from './img/sjcc.jpg'

function App() {
    const sampleProps = "I'm a prop"

    return (
        <Router>
            <div className="app">
                {/* Call the Navbar component */}
                <Navbar />

                {/* App Body */}
                <section id="app-image">
                    <div className="app-banner"></div>  
                </section>

                {/* End App Body */}

                {/* Call the Footer component with props */}
                {/* <Footer sampleProps={sampleProps} byName={"Markii"} /> */}
            </div>
        </Router>
    );
}

export default App
