import Head from 'next/head'
import { ThemeOptionProvider } from '../context/ThemeOptionsContext';
const Layout = (props) => {


    return (
        <ThemeOptionProvider>
            <Head>
                <title>{props.pageTitle}</title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Roboto:ital,wght@0,400;0,500;0,700;0,900;1,400&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
                <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
            </Head>

            
            <div className="softbox-wrapper">
                {props.children}
            </div>
        </ThemeOptionProvider>
    );
};

export default Layout;