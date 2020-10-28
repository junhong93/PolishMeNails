import React, { useState } from 'react';
import './Frontpage.scss';



function Frontpage() {
        let frontpageArr= [
            <img src="/images/NAIL.jpg" alt="nail" />,
            <img src="/images/Nail22.jpg" alt="nail22" />
        ];
        const [x, setX] = useState(0);
        const goLeft = () => {
            x === 0 ? setX(-100 * (frontpageArr.length -1)) : setX (x + 100);
            setX (x + 100);
        };
        const goRight = () => {
            x === 100 * (frontpageArr.length - 1) ? setX(0) : setX (x - 100);
        };
    return (
        <div className='fronPage-container'>
            {frontpageArr.map((item, index) => {
                    return(
                        <div key={index} className='slide' style={{transform: `translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button className="goLeft" onClick={goLeft}>
              <i class="fas fa-arrow-left"></i>
            </button>
            <button className="goRight" onClick={goRight}>
             <i class="fas fa-arrow-right"></i>
            </button>
        </div>
    )
}

export default Frontpage
