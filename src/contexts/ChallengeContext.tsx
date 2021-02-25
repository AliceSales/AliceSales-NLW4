import { createContext, ReactNode, useEffect, useState } from 'react';
import challenges from '../../challenges.json'

interface Challenge {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeContextData{
    startNewChallenges: () => void;
    level: number;
    currentExperience: number;
    challengeCompleted: number;
    levelUp: () => void;
    activeChallenge: Challenge;
    resetChallenge: () => void;
    experienceToNextLevel: number;
    completedChallenges: () => void;
}

interface ChallengeProviderProps {
    children:ReactNode;
}

export const ChallengesContext = createContext({} as ChallengeContextData);

export function ChallengeProvider({ children } : ChallengeProviderProps){
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrenteExperience] = useState (0);
    const [challengeCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge]  = useState(null);

    const experienceToNextLevel = Math.pow(( level + 1 * 4),2);

    useEffect( ()=>{
        Notification.requestPermission();
    }, [])

    function levelUp() {
        setLevel(level + 1);
    }

    function startNewChallenges(){
        const randomChallengesIndex = Math.floor(Math.random() * challenges.length);
        const challenge = challenges[randomChallengesIndex];

        setActiveChallenge(challenge)

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted'){
            new Notification('Novo desafio! '),{
                body: `Valendo ${challenge.amount}xp!`
            }
        }
    }
    
    function resetChallenge() {
        setActiveChallenge(null);
    }

    function completedChallenges() {
        if (!activeChallenge) {
            return;
        }

        const { amount } = activeChallenge;
        
        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience = finalExperience + experienceToNextLevel;
            levelUp();
        }

        setCurrenteExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengeCompleted + 1);
    }

    return(
    <ChallengesContext.Provider value={{ 
     startNewChallenges,
     level,
     currentExperience,
     challengeCompleted,
     levelUp,
     activeChallenge,
     resetChallenge,
     experienceToNextLevel,
     completedChallenges,
     }}>

    </ChallengesContext.Provider>
    );
}