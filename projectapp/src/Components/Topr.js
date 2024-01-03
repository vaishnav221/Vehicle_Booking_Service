import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import icon from './icon.jpg';
// import profile from './profile1.png';
//import { useNavigate } from 'react-router-dom';
const Topr=()=>
{
    //const navigate= useNavigate();
    return(
        <div className='navbar'>

            {/* <img src={icon} alt="" className='logo'/> */}
            <h2 className='H'>ROTORS </h2> <h2 className='K'>&</h2><h2 className='L'> WHEELS</h2>

            <ul>
            <Link to ='/Login'><li>Login</li></Link>
            <Link to ='/SignUp'><li>SignUp</li></Link>
            </ul>

            <div className='search-box'>
                <input type="text" placeholder='Search'/><FontAwesomeIcon icon={faSearch} className='co'/>
            </div>
            <br></br>
            {/* <a href='/Login' ><img src={profile} alt="" className='profileIcon'/></a> */}

        </div>
    )
}
export default Topr;