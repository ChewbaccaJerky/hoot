// Key holder

let nullState = "AIzaSyAwBuCeQEcarQNOUY8c9qztNejHl17RmM0";

const ImageReducer = (oldState = nullState, action) => {
  Object.freeze(oldState);

  switch(action.type) {

    default:
      return oldState;
  }

  return oldState
};

export default ImageReducer;
