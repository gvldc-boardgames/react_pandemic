import React from 'react';
import Setup from './pages/Setup';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const App = () => {
  // todo add paging logic
  return (
    <div>
      <Setup />
      {/*<ReactCSSTransitionGroup
        component="div"
        transitionName="fade"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        {React.cloneElement(props.children, {
          key: props.location.pathname
        })}
      </ReactCSSTransitionGroup>*/}
    </div>
  );
};

export default App;