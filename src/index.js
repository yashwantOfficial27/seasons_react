import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

export default class App extends React.Component{
    state = { lat : null, errorMessage : '' };

    componentDidMount = () =>{
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat : position.coords.latitude}),
            (err) => this.setState({errorMessage : err.message})
        )
    }
   
    render(){
        if( this.state.lat && !this.state.errorMessage){
            return(
                <div><SeasonDisplay lat = {this.state.lat} /></div>
            )
        }
        else if( !this.state.lat && this.state.errorMessage){
            return(
                <div>Error : {this.state.errorMessage}</div>
            )
        }
        return (
            <div><Spinner message = "Please accept the Location request"/></div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));

