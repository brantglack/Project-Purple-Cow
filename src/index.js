import React from 'react';
import ReactDOM from 'react-dom'; 
import axios from 'axios';

import "./assets/style.scss";
import Hit from './components/hitButton'
import Details from './components/details'
import TwoColumn from './components/twoColumn'

const namespace = 'namespace';
const key = '1ccb732e-b55a-4404-ad3f-0f99c02fe44e';

class MyComponent extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
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
        <main>
          <h1>Stand Up and Be Counted</h1>
          <div className="stand--message">
            Have your voice heard about making education available for all.
          </div>
          
          {this.state.count != 0 && 
            <div className="stand--count">
              You've join the <strong>{this.state.count}</strong> who have been counted.
            </div>
          }

          <Hit text="Be counted" counted={this.count.bind(this)}></Hit>
          <Details heading="Lorem ipsum dolor" text="Fusce consequat egestas elit quis vehicula. Phasellus a magna enim. Nullam auctor nibh at scelerisque interdum. Maecenas et venenatis erat. Mauris posuere mollis mi, vel tincidunt purus. Nunc blandit velit vitae fringilla pulvinar. Curabitur lobortis tempor quam at imperdiet."></Details>
          <TwoColumn img='/images/photo-1532541094034-b353b63dcf7d.jpeg' alt="Stand tall and be heard" body="Quisque cursus rhoncus felis eu imperdiet. Vestibulum pretium, lorem eu molestie vestibulum, tellus augue fermentum magna, ut semper quam urna a diam. Aenean mattis, orci a vulputate lobortis, elit nunc luctus lectus, eget ultrices elit elit sed leo. Proin pellentesque tortor at justo dapibus consectetur. Etiam sit amet massa vitae turpis dignissim consequat. Fusce consequat egestas elit quis vehicula. Phasellus a magna enim. Nullam auctor nibh at scelerisque interdum. Fusce consequat egestas elit quis vehicula. Phasellus a magna enim. Nullam auctor nibh at scelerisque interdum. "></TwoColumn>
          <Details text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consequat egestas elit quis vehicula. Phasellus a magna enim. Nullam auctor nibh at scelerisque interdum. Maecenas et venenatis erat. Mauris posuere mollis mi, vel tincidunt purus. Nunc blandit velit vitae fringilla pulvinar. Curabitur lobortis tempor quam at imperdiet."></Details>

        </main>
      </>
    )
  }
}
 
ReactDOM.render(<MyComponent />, document.getElementById('root'));