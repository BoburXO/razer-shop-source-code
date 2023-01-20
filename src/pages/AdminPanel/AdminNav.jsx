import React, { useEffect } from 'react';
import "./AdminNav.scss";
import {Link, useNavigate} from 'react-router-dom';

const AdminNav = () => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!localStorage.getItem("token")) {
        navigate("/");
      }
    }, []);
    return (
        <div className='adminNav'>
            <div className='container'>
                <div className='panel'>
                    <Link to="/adminPrivateRazer">
                        <h3>Devices here</h3>
                    </Link>
                    <Link to='/adminPrivateRazer'>
                        <h3>Users here</h3>
                    </Link>
                    <Link to='/createPostRazerAdmin'>
                        <h3>Create device here</h3>
                    </Link>
                    <a href='#'>
                        <h3 onClick={() => {localStorage.removeItem("token")
            window.location.reload()  
            }
            }>Log Out</h3>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default AdminNav;