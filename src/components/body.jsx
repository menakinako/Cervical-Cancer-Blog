import React from 'react'
import Left from './leftside'
import Right from './rightside'
import styles from './body.module.css';

function Body(){
    return(
        <div className={styles.body}>
            <div className={styles.left}>
               <Left />
            </div>
            <div className={styles.right}>
                <Right />
            </div>
        </div>
    )
}
 
export default Body