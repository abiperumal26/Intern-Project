import React from 'react';
import Home from './Components/Home';
import Page2 from './Components/Page2';
import Ongoing from './Components/Ongoing';
import Testimonals from './Components/Testimonals';
import Contact from './Components/Contact';
import Details from './Components/Details';
// import Sample from './Components/Sample';

const App = () => {
    return (
        <div>
            <Home />
            <Page2 />
            <Ongoing />
            <Testimonals />
            <Contact />
            <Details />
            {/* <Sample/> */}
        </div>
    );
}

export default App;
