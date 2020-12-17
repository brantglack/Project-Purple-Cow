import React from 'react';
import ReactDOM from 'react-dom'; 
import "./assets/style.scss";
import Hit from './components/hitButton'

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
        <h1>Stand Up and Be Counted</h1>
        <div>
          Have your voice heard about making education available for all.
        </div>
        <Hit></Hit>
        </div>
      </div>
    )
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('root'));