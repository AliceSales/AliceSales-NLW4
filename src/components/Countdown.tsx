import { useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { CountdownContext } from '../contexts/CountdownContext'

export function Countdown() {
    const { minutes,
        seconds,
        hasFinished,
        startCountDown,
        isActive,
        resetCountDown
    } = useContext(CountdownContext)

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('')
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')
    
    return(
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            { hasFinished ? (
                <button disabled 
                className={styles.countDownButton}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    { isActive ? (
                        <button type="button" 
                        className={`${styles.countDownButton} ${styles.countDownButtonActive}`} 
                        onClick={resetCountDown}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button type="button" 
                        className={styles.countDownButton} 
                        onClick={startCountDown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>     
            )}            
        </div>
    );
}