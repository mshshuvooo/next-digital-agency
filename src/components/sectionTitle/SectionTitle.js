import React from 'react';

const SectionTitle = (props) => {
    const {subSecTitle, secTitle, secTitleDesc} = props;
    return (
        <div className="section-title-wrap">
            <div className="section-title">
                {subSecTitle && <h4>{subSecTitle}</h4>}
                {secTitle &&  <h1>{secTitle}</h1>}
                {secTitleDesc && <p>{secTitleDesc}</p>}
            </div>
        </div>
    );
};

export default SectionTitle;