import React from 'react';
import CountUp from 'react-countup';

const Achievements = (props) => {
    const achievementLists = props.achievement.achievementLists;
    console.log(achievementLists);
    return (
        <div className="achievement-items">
            <CountUp start={0} end={120} />

            {achievementLists && achievementLists?.map( (item) => {
                return(
                    <div key={Math.random()} className="single-achievement-item">
                        <div className="achievement-item-inner">
                            <i className={item.achievementIcon}></i>
                            <h3><CountUp end={item.achievementNumber} />{item.achievementNumberExtra && <span>{item.achievementNumberExtra}</span>}</h3>
                            <h4>{item.achievementTitle}</h4>
                        </div>
                    </div>
                )
            } )}
        </div>
    );
};

export default Achievements;