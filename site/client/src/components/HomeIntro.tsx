import React from 'react'

const HomeIntro = () => {
  return (
    <div className="intro-wrapper" id="intro">
        <div className="intro">
            <p className="intro-title text-white">Быстро, удобно, надёжно!</p>
            <div className="animated-arrow">
                <div className="arrow-container">
                    <div className="arrow"></div>
                </div>
                <div className="line-container">
                <div className="line left"></div>
                <div className="text">
                    <a href="#calc">
                    Расчитать цену доставки
                    </a>
                </div>
                <div className="line right"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeIntro