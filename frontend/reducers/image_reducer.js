// Key holder

let nullState = "AIzaSyDrjh-m2T9TiRjQBW1KeA6fXcx6hoIxxy4";

const ImageReducer = (oldState = nullState, action) => {
  Object.freeze(oldState);

  switch(action.type) {

    default:
      return oldState;
  }

  return oldState
};

export default ImageReducer;
