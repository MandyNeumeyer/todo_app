import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IconContext } from "react-icons";
import styles from './Nav.module.css'


const Navbar = ({ handleClick }) => {
    return (
        <div className={styles.nav}>
            <div>
                <IconContext.Provider value={{ color: '#c3e632' }}>
                    <div className={styles.logo}>D<span><IoCheckmarkDoneSharp /> </span>NE</div>
                </IconContext.Provider>
            </div>
            <div className={styles.navr}>
                <div className={styles.theme_options}>
                    <div className={styles.theme_green} onClick={() => handleClick('theme_green')}></div>
                    <div className={styles.theme_blue} onClick={() => handleClick('theme_blue')}></div>
                    <div className={styles.theme_purple} onClick={() => handleClick('theme_purple')}></div>
                    <div className={styles.theme_orange} onClick={() => handleClick('theme_orange')}></div>
                    <div className={styles.theme_pink} onClick={() => handleClick('theme_pink')}></div>
                </div>
            </div>
        </div>
    )




}

export default Navbar