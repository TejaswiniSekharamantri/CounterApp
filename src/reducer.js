const reducer = (state, action) => {
   switch(action.type){
       case 'INCREMENT':
               return {
                  ...state,
                  [action.payload]: state[action.payload] + 1
               };
       case 'DECREMENT':
           return {
               ...state,
               [action.payload]: state[action.payload] - 1
           };
       case 'SESSION':
           return {
               ...state,
               activeSession: action.payload
           };
       default:
           return state;

   }
};

export default reducer;