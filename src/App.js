import React from 'react';
// import Navbar from './Navbar';
import Home from './Home';
import Page2 from './Page2';
import Ongoing from './Ongoing';
import Testimonals from './Testimonals';
import Contact from './Contact';
import Details from './Details';

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Home />
            <Page2 />
            <Ongoing />
            <Testimonals />
            <Contact/>
            <Details/>
        </div>
    );
}

export default App;
