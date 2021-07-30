
import { Fragment, useEffect, useState } from "react";
import Link from 'next/link'

const NavMenu = () => {

    const [navItems, setNavItems] = useState('');
    useEffect( () => {
        fetch('http://projects.shahadatshuvo.com/softbox/wp-json/menus/v1/menus/main-menu')
        .then(response => response.json())
        .then(data => setNavItems(data.items));
    },[])

    return (
        <Fragment>
            <ul className="mainmenu-items">
                {navItems && navItems.map( (item) => {
                    return(
                        <li key={Math.random()}>
                            {item.child_items && item.post_title}
                            {item.child_items ?
                            <Fragment>
                                <div className="dropdown-angle-down">
                                    <i className="fas fa-angle-down"></i>
                                </div>
                                <ul>
                                    {item.child_items.map( ( firstChild ) =>{
                                        return(
                                            <li key={Math.random()}>
                                                {firstChild.child_items && firstChild.post_title}
                                                {firstChild.child_items ?
                                                <Fragment>
                                                    <div className="dropdown-angle-right">
                                                        <i className="fas fa-angle-right"></i>
                                                    </div>
                                                    <ul>
                                                        {firstChild.child_items.map( ( secondChild ) =>{
                                                            return(
                                                                <li key={Math.random()}>
                                                                    <Link href={secondChild.url}>
                                                                        <a >{secondChild.post_title}</a>
                                                                    </Link>
                                                                </li>
                                                            
                                                            )
                                                        } )}
                                                    </ul> 
                                                </Fragment>:
                                                <Link href={firstChild.url}>
                                                    <a >{firstChild.post_title}</a>
                                                </Link>
                                            }
                                            </li>
                                            
                                        )
                                    } )}
                                </ul> 
                            </Fragment>:
                            <Link href={item.url}>
                                <a >{item.post_title}</a>
                            </Link>
                            }
                        </li>
                    )
                } )}
            </ul>
        </Fragment>
    );
};

export default NavMenu;