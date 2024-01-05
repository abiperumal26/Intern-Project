// App.js
import React from 'react';
// import Navbar from './Navbar';
import Home from './Home';
import Page2 from './Page2';
import Ongoing from './Ongoing';
import Testimonals from './Testimonals';

const App = () => {
    return (
        <div>
            {/* <Navbar /> */}
            <Home />
            <Page2 />
            <Ongoing />
            <Testimonals />
        </div>
    );
}

export default App;
