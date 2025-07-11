import { useState, useEffect } from 'react';

type TimerState = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    status: 'before' | 'during' | 'after';
};

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState<TimerState>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        status: 'before'
    });

    useEffect(() => {
        // Get UTC date given central time date
        const createMarketDate = (year: number, month: number, day: number, hours: number, minutes: number): Date => {
            const centralDate = new Date(new Intl.DateTimeFormat('en-US', {
                timeZone: 'America/Chicago',
                year:'numeric', month:'2-digit', day:'2-digit',
                hour:'2-digit', minute:'2-digit', second:'2-digit',
                hour12: false
              }).format(new Date(year, month - 1, day, hours, minutes)));
            
            return new Date(centralDate.toLocaleString('en-US', { timeZone: 'UTC' }));
        };

        const marketStartUtc = createMarketDate(2025, 8, 1, 15, 0); // August 1, 2025 3:00 PM CDT
        const marketEndUtc = createMarketDate(2025, 9, 26, 19, 0); // September 26, 2025 7:00 PM CDT
        
        const updateTimer = () => {
            const now = new Date(); // Current time in user's local timezone
            const nowUTC = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' })); // Convert to UTC
            
            let targetDate: Date;
            let status: 'before' | 'during' | 'after';
            
            if (nowUTC < marketStartUtc) {
                // Before market starts
                targetDate = marketStartUtc;
                status = 'before';
            } else if (nowUTC < marketEndUtc) {
                // During market season
                targetDate = marketEndUtc;
                status = 'during';
            } else {
                // After market ends
                setTimeLeft({
                    days: 0,
                    hours: 0,
                    minutes: 0,
                    seconds: 0,
                    status: 'after'
                });
                return;
            }

            const difference = targetDate.getTime() - nowUTC.getTime();
            const days = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
            const hours = Math.max(0, Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            const minutes = Math.max(0, Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
            const seconds = Math.max(0, Math.floor((difference % (1000 * 60)) / 1000));

            setTimeLeft({
                days,
                hours,
                minutes,
                seconds,
                status
            });
        };

        // Update immediately
        updateTimer();

        // Then update every second
        const timer = setInterval(updateTimer, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(timer);
    }, []);

    if (timeLeft.status === 'after') {
        return (
            <div className="mt-6 bg-green-700 bg-opacity-80 text-white px-4 py-2 rounded-lg">
                <p className="text-xl font-semibold">Market Season Has Ended</p>
                <p className="text-sm">Thank you for a great season!</p>
            </div>
        );
    }

    if (timeLeft.status === 'during' && timeLeft.days === 0 && timeLeft.hours < 10) {
        return (
            <div className="mt-6 bg-green-600 bg-opacity-80 text-white px-4 py-2 rounded-lg">
                <p className="text-xl font-semibold">Market Closes Soon!</p>
                <p className="text-sm">Last chance to visit us today</p>
            </div>
        );
    }

    return (
        <div className="mt-6 bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2 text-white">
                {timeLeft.status === 'before' ? 'Market Starts In:' : 'Market Ends In:'}
            </h3>
            <div className="flex justify-center space-x-2 sm:space-x-4">
                <TimeUnit value={timeLeft.days} label="Days" />
                <TimeUnit value={timeLeft.hours} label="Hours" />
                <TimeUnit value={timeLeft.minutes} label="Minutes" />
                {timeLeft.status === 'before' && <TimeUnit value={timeLeft.seconds} label="Seconds" />}
            </div>
            {timeLeft.status === 'during' && (
                <p className="text-white text-sm mt-2">
                    Every Friday until September 26th
                </p>
            )}
        </div>
    );
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
        <div className="w-12 sm:w-16 h-16 sm:h-20 flex items-center justify-center bg-green-700 bg-opacity-80 text-white text-xl sm:text-2xl font-bold rounded-lg">
            {value.toString().padStart(2, '0')}
        </div>
        <span className="text-sm sm:text-base text-white mt-1">{label}</span>
    </div>
);

export default CountdownTimer;
