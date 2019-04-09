export const selectSpeakersForEvents =  ( store ) => {
    return store.speakersEvent;
};

export const selectSpeakerForEventById = ( store ) => {
    return Object.values(store.speakersEvent);
};
