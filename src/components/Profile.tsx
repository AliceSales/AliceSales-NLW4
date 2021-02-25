import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengeContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext (ChallengesContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/AliceSales.png" alt="Alice Sales"/>
            <div>
                <strong>Alice Sales</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    {level}
                </p>
            </div>
        </div>
    );
}