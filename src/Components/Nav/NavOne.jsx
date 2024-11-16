import React from 'react'
import { FaUserPlus } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUsersSlash } from "react-icons/fa";
import { RiMessage3Fill } from "react-icons/ri";
import { IoLogOut } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaUserCheck } from "react-icons/fa";
import './NavOne.css';

function NavOne() {

    //Navigation
    const navigate = useNavigate();

    //Redux
    const user = useSelector((state) => state.userInfo.value);

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    }


    return (
        <>
            <nav className='NavOne'>

                <div className="btns">
                    <button>
                        <FaUserCheck />
                    </button>

                    <button>
                        <FaUserPlus />
                    </button>

                    <button>
                        <BsFillPeopleFill />
                    </button>


                    <button>
                        <div className="main">
                            <img src={user?.photoURL} alt="" />
                        </div>
                    </button>

                    <button>
                        <FaUsersSlash />
                    </button>

                    <button>
                        <RiMessage3Fill />
                    </button>

                    <button onClick={handleLogout}>
                        <IoLogOut />
                    </button>
                </div>

            </nav>
        </>
    )
}

export default NavOne
