import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import { useSelector } from "react-redux"
import auth from '../firebase';
import { signOut } from 'firebase/auth';
function Header() {
    const basket=useSelector((state)=>state);
    const user=basket.user;
    const login=()=>{
        signOut(auth);
    }
    // console.log(basket);
    return (
        <nav className='header'>
            {/* logo on the left */}
            <Link to="/">
                <img className='header__logo'
                    src="https://th.bing.com/th/id/R.94c4ee6bc360f46bdd0e259536b8b534?rik=5ghG76p6U5WQuw&riu=http%3a%2f%2fwww.etcentric.org%2fwp-content%2fuploads%2f2016%2f07%2fAmazon_Logo_Black_bg.jpg&ehk=Gkb9RUqUngkzRI%2b81XbewXpSB8iV3lW862qGV5X%2b5Z4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1"
                    alt="Amazon Logo" />
            </Link>
            {/* search box */}
            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchSharpIcon className="header__searchIcon" />
            </div>
            <div className="header__nav">
                {/* first link */}
                <Link className="header__link" to={!user&&"/login"}>
                    <div onClick={login} className="header__option">
                        <span className='header__optionLineOne'>Hello {user===null?"user":user.email}</span>
                        <span className='header__optionLineTwo'>{user?"Sign Out":"Sign In"}</span>
                    </div>
                </Link>
                {/* second link */}
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Returns</span>
                        <span className='header__optionLineTwo'>&Orders</span>
                    </div>
                </Link>
                {/* third link */}
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Your</span>
                        <span className='header__optionLineTwo'>Prime</span>
                    </div>
                </Link>
                {/* fourth link */}
                <Link className="header__link" to="/checkout">
                    <div className="header__optionBasket">
                        {/* icon */}
                        <ShoppingBasketRoundedIcon/>
                        {/* number of item in the basket */}
                        <span className='header__optionLineTwo header__basketCount'>{basket.basket.length}</span>
                    </div>
                </Link>
            </div>
            {/* 3 links on the right */}
            {/* baskit icon with number */}
        </nav>
    )
}

export default Header
