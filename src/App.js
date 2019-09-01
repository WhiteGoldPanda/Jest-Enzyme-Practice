import React,  { Component }from 'react';
import Header from './component/header/index';

import './app.scss';
import Headline from './component/headline';

const tempArr = [{
  fName: 'BOB',
  lName: 'BOBBY',
  email: 'BOBBY@YAHOO.COM',
  age:  22,
  onlineStatus: true
}]
class App extends Component {
render() {
  return (
    <div className="App">
     <Header/>
     <section className='main'>
       <Headline header="Posts" desc="Click the button to render posts" tempArr={tempArr}/>

     </section>
    </div>
  );
}
}

export default App;
