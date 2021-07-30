import Link from "next/link";
import { useContext } from "react";
import { ThemeOptionContext } from "../../context/ThemeOptionsContext";
import NavMenu from "./NavMenu"

const Header = () => {
    const themeOptions = useContext(ThemeOptionContext)
    const logo = themeOptions?.header?.logo
    const socialNetworks = themeOptions?.header?.socialNetworks
    const topInfos = themeOptions?.header?.topInfos
    const headerButton = themeOptions?.header?.headerButton
    
    return (
        <div className="softbox-header">
            <div className="softbox-header-top">
                <div className="header-info">
                    {
                        topInfos && topInfos.map( ( info, index ) => {
                            return(
                                <p key={index}>
                                    <i className={info.topInfoIcon}></i>
                                    <strong>{info.topInfoLabel}</strong>
                                    <span>{info.topInfoText}</span>
                                </p>
                            )
                        } )
                    }
                </div>
                <div className="header-social-networks">
                {
                    socialNetworks && socialNetworks.map( ( item, index ) => {
                    return(
                            <Link key={index} href={item.snUrl}>
                                <a><i className={item.snIcon}></i></a>
                            </Link>
                        )
                    } ) 
                }
                </div>
            </div>
            <div className="softbox-header-bottom">
                <div className="logo">
                    {
                        logo && 
                        <Link href="/">
                            <a>
                                <img src={logo} alt="Logo" />
                            </a>
                        </Link>
                    }
                </div>
                <div className="mainmenu">
                    <NavMenu/>
                </div>
                {
                    headerButton &&
                        <div className="header-button">
                            <Link href={headerButton.headerButtonUrl}>
                                <a className="boxed-round-btn">{headerButton.headerbuttonlabel}</a>
                            </Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;