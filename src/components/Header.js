import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
function Header() {
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
                <Link className="header__link" to="/login">
                    <div className="header__option">
                        <span className='header__optionLineOne'>Hello Poojan</span>
                        <span className='header__optionLineTwo'>Sign In</span>
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
                        <span className='header__optionLineTwo header__basketCount'>0</span>
                    </div>
                </Link>
            </div>
            {/* 3 links on the right */}
            {/* baskit icon with number */}
        </nav>
    )
}

export default Header
