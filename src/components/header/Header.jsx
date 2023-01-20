import React from 'react'
import '../header/header.scss';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div>
         <Link to="/store">
         <div className="empty-div-pc pc" id="storeHeader">
        <h5>
          {" "}
          Our Telegram channel. You can see all orders here.{" "}
          <a target="_blank" href="https://t.me/+YJdPUtUHRNo5NTM6">
            <span className="bor-b"> Telegram {">"}</span>
          </a>{" "}
        </h5>
      </div>
             <div className="header">

                 <div className="container">
                     <h1 className='bigger'>RAZER DEATHADDER V3 PRO</h1>
                     <h2 className='big'>FOR THE PRO</h2>
                     <div className="flexbox">
                         <Link to="/store">
                             <button className="header-btn">Learn More <span className="arrow">{">"}</span></button>
                         </Link>
                         <Link to="/store">
                             <button>Buy <span className="arrow">{">"}</span></button>
                         </Link>
                     </div>
                 </div>
             </div>
         </Link>
        </div>
    )
}

export default Header;