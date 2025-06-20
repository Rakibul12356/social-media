export const getDateDifferenceFromNow = (fromDate) => {
    let difference = new Date().getTime() - new Date(fromDate).getTime();
    difference = difference / 1000; // সেকেন্ডে

    const secondsInMinute = 60;
    const secondsInHour = 3600;
    const secondsInDay = 86400;
    const secondsInMonth = secondsInDay * 30; // ৩০ দিন ধরে মাস
    const secondsInYear = secondsInMonth * 12; // ১২ মাস ধরে বছর

    let message;

    if (difference >= secondsInYear) {
        const years = Math.floor(difference / secondsInYear);
        message = `${years} ${years === 1 ? 'year' : 'years'}`;
    } else if (difference >= secondsInMonth) {
        const months = Math.floor(difference / secondsInMonth);
        message = `${months} ${months === 1 ? 'month' : 'months'}`;
    } else if (difference >= secondsInDay) {
        const days = Math.floor(difference / secondsInDay);
        message = `${days} ${days === 1 ? 'day' : 'days'}`;
    } else if (difference >= secondsInHour) {
        const hours = Math.floor(difference / secondsInHour);
        message = `${hours} ${hours === 1 ? 'hour' : 'hours'}`;
    } else if (difference >= secondsInMinute) {
        const minutes = Math.floor(difference / secondsInMinute);
        message = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`;
    } else {
        const seconds = Math.round(difference);
        message = `${seconds} ${seconds === 1 ? 'second' : 'seconds'}`;
    }

    return message;
};
