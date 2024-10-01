
import { useState } from 'react';
import AOS from "aos"
import './App.css';
import Contect from './Contect';
import Protal from './Protal';
import Nav from './Nav';
import Take from './Take';
import Banner from './Banner';
import { useEffect } from 'react';
import Category from './Category';
import Test from './Test';
import Home from './Home';
import Footer1 from './Footer1';
import Burgger from './Burgger';
import Cake from './Cake';
import Ticto from './Tic-to';
import Game from './Game';



function App() {

 const [order,setorder]=useState(false)

// const popup=(>{
//   setorder(!popup)
// }
// useEffect(() => {
//   AOS.init({
//     offest:100,
//     duration:800,
//     easing:"ease-in-sine",
//     delay:100
//   })

//    AOS.refresh()
  
// }, [])
//iMX-nmDEs1sjLAzNAfLN_AD
  return (


<div className='root'>
<h1>TIC TAC TOE GAME::</h1>
<Game/>


    </div>
  );
}

export default App;