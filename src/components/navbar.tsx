import Image from 'next/image';
import logo from "./assets/lifepulse.svg"
import Login from './login-btn'


export const Navbar=()=>{return(
    <div className="flex justify-between p-6">
        <div className="flex">
        <Image src={logo} width={28} height={28} alt="logo"/>
        LifePulse 
        </div>
        <div className="flex justify-between space-x-4">
            <ul className="flex space-x-4">
            <li>Home</li>
            <li>About</li>
            <li>Connect with Us</li>
            <ul><Login/></ul>
            </ul>
            </div>
    </div>
)}