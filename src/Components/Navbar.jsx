import '../Styles/Navbar.css'
import {BrowserRouter} from 'react-router-dom';
import logo from '../YoutubeLogo.jpg'
import menu from '../Menu.png'
import { HiMiniMicrophone } from "react-icons/hi2";
import { IoPersonOutline } from "react-icons/io5";


function Navbar() {
    return (
        <nav className="navigation">
            <button className='button'>
                <BrowserRouter to="/menu">
                    <img className='menu'
                    src={menu}
                    alt="Menu"
                />
                </BrowserRouter>
            </button>

        <button className='button'>
            <BrowserRouter to="/">
                <img className='logo'
                 src={logo}
                 alt="Youtube"
             />
            </BrowserRouter>
        </button>

        <input 
            className='search'
            type="text" 
            placeholder="Search" 
            onChange={(e)=> console.log(e.target.value)}>
        </input>
        
        <button className='button-mic'>
            <BrowserRouter to="/">
                <HiMiniMicrophone />
            </BrowserRouter>
        </button>
        <button className='button-medium blue'> <IoPersonOutline />Sign in</button>

      </nav>
      )
  }

export default Navbar