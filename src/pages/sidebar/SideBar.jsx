import React from 'react';
import classes from './SideBar.module.css';
import arrow from './arrow.png';

const SideBar = () => {
    return (
        <div className={classes.sideBar}>
            <div className={classes.leftBar}>
                <div className={classes.logo}>LOGO</div>
                <button>Сотрудники</button>
                <button>Занятость</button>
                <button>Вакансии</button>
            </div>



            <div className={classes.topBar}>
                <img src={arrow} alt=''/>
                <button className={classes.status}>Статус</button>
            </div>
        </div>
    );
};

export default SideBar;