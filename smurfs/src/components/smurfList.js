import React from "react";
import { connect } from 'react-redux';
import { getSmurf } from '../actions';

class SmurfList extends React.Component {

  componentDidMount () {
    console.log("CDM props: ", this.props);
    this.props.getSmurf();
  }

render() {
  console.log('render props: ', this.props);
  return (
    <div>
    <h2>Smurf List</h2>
    {this.props.smurfArray.map(smurf => (
     <div key={smurf.id}>
     <div>
       <div>
         <h3>Name: {smurf.name}</h3>
         <p>Age: {smurf.age}</p>
         <p>Height: {smurf.height}</p>
       </div>
     </div>
   </div>
    ))}
    </div>
  )
}

}

const mapStateToProps = (state) => {
  console.log('SmurfList state; ', state);
  return {
    smurfArray: state
  }
}

const mapDispatchToProps = { getSmurf };

export default connect(mapStateToProps, mapDispatchToProps)(SmurfList);