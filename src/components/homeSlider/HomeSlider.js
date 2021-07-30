import Link from "next/link";
import Slider from "react-slick";

const HomeSlider = ({slides}) => {
    
    const SlickNextArrow = ({className, onClick}) => {
        return(
            <div className={className} onClick={onClick}>
                <i className="fas fa-long-arrow-alt-left"></i>
            </div>
        )
    }

    const SlickPrevArrow = ({className, onClick}) => {
        return(
            <div className={className} onClick={onClick}>
                <i className="fas fa-long-arrow-alt-right"></i>
            </div>
        )
    }

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 500,
        nextArrow: <SlickNextArrow/>,
        prevArrow: <SlickPrevArrow/>,
        customPaging: () => (
            <div></div>
        )
            
    };


    return (
        <div className="softbox-slider">
            <Slider {...sliderSettings}>
                {slides && slides?.map( ( slide ) => {
                    return(
                        <div key={Math.random()} className="single-slide-item">
                            <div className={`slide-inner slide${slide.slidePosition}`} style={{backgroundImage: `url(${slide.slideBgImage})`}}>
                                <div className="slide-content">
                                    <h1>{slide.slideTitle}</h1>
                                    <h2>{slide.slideSubTitle}</h2>
                                    <p>{slide.slideTextarea}</p>
                                    <div className="slide-btns">
                                        {slide.slideButtons && slide.slideButtons.map( (button) => {
                                            return(
                                                <Link key={Math.random()} href={button.slideButtonUrl}>
                                                    <a
                                                        style={{
                                                            backgroundColor:`${button.slideButtonBgColor}`,
                                                            color: `${button.slideButtonColor}`
                                                        }}>
                                                        {button.slideButtonLabel}
                                                    </a>
                                                </Link>
                                            )
                                        } )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                } ) }
            </Slider>
        </div>
    );
};

export default HomeSlider;