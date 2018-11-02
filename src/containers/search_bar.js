import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component
{
  constructor(props)
  {
    super(props);
    this.state={ term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value});
  }

  onFormSubmit(event)
  {
    event.preventDefault();
  //  debugger;
  console.log('onformsubmit', this.state.term);
    this.props.fetchWeather(this.state.term);
    this.setState({term:''});
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
        className="form-control"
        placeholder="Get a forcast for your 5 favorite cities"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-second">Submit</button>
        </span>
      </form>
    );
  }
}


const mapDispatchToProps = dispatch => bindActionCreators(
  { fetchWeather },
  dispatch
);

/*
const  function mapDispatchToProps(dispatch){
  retun bindActionCreators( { fetchWeather }, dispatch);
}
*/
export default connect(null, mapDispatchToProps)(SearchBar);
