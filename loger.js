export default function logger(reducer) {
  return (prevState, action, args) => {
    console.group(action)
    console.log('Prev State :' , prevState)
    console.log('Action Agr' , args)
    const nextState = reducer(prevState, action, args);
    console.log('Next Sate :',nextState)
    
    console.groupEnd();
    return nextState;
  };
}
