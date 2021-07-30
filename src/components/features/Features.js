import React from 'react';

const Features = (props) => {
    
    const {featuresImages, featuresItems} = props.features;
    console.log(props.features);
    return (
        <div className="features-area">
            <div className="feature-image">
                <img src={featuresImages} alt="Feature" />
            </div>
            <div className="feature-items">
                {featuresItems && featuresItems.map( (item) => {
                    return(
                        <div key={Math.random()} className="single-feature-item">
                            <div className="feture-icon">
                                <img src={item.featureIcon} alt="Feature Icon" />
                            </div>
                            <div className="feature-text">
                                <h3>{item.featureTitle}</h3>
                                <p>{item.featureText}</p>
                            </div>
                        </div>
                    )
                } )}
            </div>
        </div>
    );
};

export default Features;