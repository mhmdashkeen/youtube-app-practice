export const dateformat = date => {
    const getTodayDate = new Date();
    const DateStamp = new Date(date);
    const getPreviousDate = new Date(DateStamp.getMonth() + 1 + "/" + DateStamp.getDate()  + "/" + DateStamp.getFullYear())
    const currentDate = new Date(getTodayDate.getMonth() + 1 + "/" + getTodayDate.getDate()  + "/" + getTodayDate.getFullYear());
    // console.log("Cuurre", currentDate, getPreviousDate);
    const diffTime = Math.abs(currentDate - getPreviousDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    // console.log("Diff Days", diffDays);
    if(diffDays === 0){
        const currentTimeHour = getTodayDate.getHours() - DateStamp.getHours();
        const currentTimeMins = getTodayDate.getMinutes() - DateStamp.getMinutes();
        if(currentTimeHour === 0){
            return currentTimeMins === 1 ? currentTimeMins + " min ago" : currentTimeMins + " mins ago";
        }
        return currentTimeHour === 1 ? currentTimeHour + " hour ago" : currentTimeHour + " hours ago";
    }else{
        const week = diffDays / 7;
        const month = diffDays / 30;
        const year = diffDays / 365;
        if(year >= 1){
            return year === 1 ? year + " year ago" : year + " years ago";
        }
        if(month >= 1){
            return month === 1 ? month + " month ago" : month + " months ago";
        }
        if(week >= 1) {
            return week === 1 ? week + " week ago" : week + " weeks ago";
        }
        return diffDays === 1 ? diffDays + " day ago" : diffDays + " days ago";
    }
}

