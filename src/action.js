export const increment = session => ({
    type: "INCREMENT",
    payload: session
});

export const decrement = session => ({
    type: "DECREMENT",
    payload: session
});

export const currentActiveSession = session => ({
    type: "SESSION",
    payload: session
});
