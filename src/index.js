import React from 'react';
import ReactDOM from 'react-dom'; 
import axios from 'axios';

import "./assets/style.scss";
import Hit from './components/hitButton'
const namespace = 'namespace';
const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

class MyComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  componentDidMount(){
    this.count()
  }

  count(){
    axios.get(`https://api.countapi.xyz/hit/${namespace}/${key}`).then( result => {
      var {value }= result.data
      if(value){
        this.setState({...this.state, count: value})
      }
    })
  }

  render() {
    return (
      <>
        <header>
          Project Purple Cow
        </header>
        <div>
          <h1>Stand Up and Be Counted</h1>
          <div>
            Have your voice heard about making education available for all.
          </div>
          <div>
            Join the {this.state.count} who have been counted.
          </div>
          <Hit counted={this.count.bind(this)}></Hit>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat egestas elit quis vehicula. Phasellus a magna enim. Nullam auctor nibh at scelerisque interdum. Maecenas et venenatis erat. Mauris posuere mollis mi, vel tincidunt purus. Nunc blandit velit vitae fringilla pulvinar. Curabitur lobortis tempor quam at imperdiet.
          </div>
        </div>
      </>
    )
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('root'));