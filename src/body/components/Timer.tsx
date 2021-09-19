import React, { useEffect, useState } from 'react';
import './Timer.css';

export type TimerProps = {
    targetDate: Date
};

type TimeFormat = {
    days: string,
    hours :string,
    minutes: string,
    seconds: string
};

const calculateTimeLeft = (targetDate: Date): TimeFormat => {
    const difference = +targetDate - +new Date();
    let timeLeft = {days: "00", hours: "00", minutes: "00", seconds: "00"};
    if (difference > 0) {
        const timeLeftNum = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60))%24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        };
        timeLeft = {
            days: timeLeftNum.days<10? "0"+timeLeftNum.days: ""+timeLeftNum.days,
            hours: timeLeftNum.hours<10? "0"+timeLeftNum.hours: ""+timeLeftNum.hours,
            minutes: timeLeftNum.minutes<10? "0"+timeLeftNum.minutes: ""+timeLeftNum.minutes,
            seconds: timeLeftNum.seconds<10? "0"+timeLeftNum.seconds: ""+timeLeftNum.seconds,
        };
    }
    return timeLeft;
};

export default function Timer({targetDate}: TimerProps) {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));
    useEffect(() => {
        const timeOut = setTimeout(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);
        return () => {
            clearTimeout(timeOut);
        };
    }, [targetDate, timeLeft]);
    
    return <h1 className="Timer">{`${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`}</h1>
}
