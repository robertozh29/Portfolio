import PropTypes from 'prop-types'
import { useEffect } from 'react'

import styles from './Lightsaber.module.css'
import handle from '../../assets/handle.png'

export default function Lightsaber({ className }){

    useEffect(()=>{
        console.log('Component is mounted')
        window.addEventListener('scroll', scrollIndicator);
    },[]);

    const scrollIndicator = () => {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;       

        var width =  document.documentElement.clientWidth;
        if(width < 800){
            document.getElementById("ligh-container").style.height = 75 - ((scrolled * 75 )/100) + "vh";
        }else{
            document.getElementById("ligh-container").style.height = 70 - ((scrolled * 70 )/100) + "vh";
        }
        
    }

    return(
        <div className={`${styles.lightsaber} ${className}`} id="lightsaber">
            <div className={styles.light_container} id="ligh-container">
                <div className={styles.light} id="light"></div>
            </div>
            <img src={handle} alt="sword handle" />
        </div>
    )
}

Lightsaber.propTypes = {
    className: PropTypes.string
}

