const moment = require('moment');

export const selectEventDay =  ( store ) => {
    return store.dayForEvent;
};

export const selectEventDayFormatted = ( store ) => {

    if(!selectEventDay(store)) {
        const ua = moment(new Date()).locale('uk_UA');
        return {
            dayOfWeek: (ua.format('dd')).toUpperCase(),
            dayAndMonth: ua.format('LL').split(' ', 2).join(' '),
        }}

    const ua = moment(selectEventDay(store)).locale('uk_UA');
    return {
        dayOfWeek: (ua.format('dd')).toUpperCase(),
        dayAndMonth: ua.format('LL').split(' ', 2).join(' '),
    }
};


