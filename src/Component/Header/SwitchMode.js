import {RiMoonFill} from 'react-icons/ri'
import {BsFillSunFill} from 'react-icons/bs'
import styles from './SwitchStyle.module.scss'
import {useRef, useState, useContext, useEffect} from 'react'
import {ThemeContext} from '../ThemeContext/themeContext'


function SwitchMode() {
    const iconRef = useRef()
    const circleRef = useRef()
    const toggleRef = useRef()
    const [change, setChange] = useState(true)

    const theme = useContext(ThemeContext)

    useEffect(() => {
        if(change) {
            iconRef.current.style.transform = 'translateX(0)';
            circleRef.current.style.transform = 'translateX(0)';
            toggleRef.current.style.backgroundColor = 'var(--ToggleColor)';
            circleRef.current.style.background = '#fff';
        }
        else {
            iconRef.current.style.transform = 'translateX(28px)';
            circleRef.current.style.transform = 'translateX(-28px)';
            toggleRef.current.style.backgroundColor = '#fff';
            circleRef.current.style.background = 'black';
        }
    }, [change])

    const handleToggle = () => {
        setChange(!change)
        theme.changeTheme()
    }
    return (
        <div className={styles.Toggle} onClick={handleToggle} ref={toggleRef}>
            <div className={styles.Icon} ref={iconRef}>
                {
                    change ? <RiMoonFill /> : <BsFillSunFill />
                }
            </div>
            <div className={styles.Circle} ref={circleRef}></div>
        </div>
    )
}

export default SwitchMode