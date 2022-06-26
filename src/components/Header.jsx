import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <nav className="bg-blue-400 flex flex-row h-20  items-center justify-between p-5 " >
            <div >
                <h1> 
                    <Link to={'/'} className="text-white text-4xl">
                        Agenda Telefonica
                    </Link> 
                </h1>
            </div>

            <Link to={"/contacto/nuevo"}
                className=" bg-blue-800 text-white w-30 p-2 rounded-2xl"
            >Agregar Contacto &#43;</Link>
        </nav>
     );
}
 
export default Header;
