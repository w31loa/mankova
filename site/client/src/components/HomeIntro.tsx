import React from 'react'
import { Link } from 'react-router-dom'

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
                    <Link to={'/calculator'}>
                    Расчитать цену доставки
                    </Link>
                </div>
                <div className="line right"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeIntro