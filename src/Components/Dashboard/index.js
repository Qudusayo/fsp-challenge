import React from 'react'

import { useUser } from "reactfire" 

import styles from './style.module.scss'

function Index(props) {
    const user = useUser();
    return (
        <div className={styles.dashboard}>
            <h4>Welcome Back {user ? user.displayName : null }!</h4>
        </div>
    )
}

export default Index

