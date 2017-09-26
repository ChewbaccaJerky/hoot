import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { find: "Restaurants", near: "San Francisco CA", redirect_to: false };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  componentWillReceiveProps() {
    this.setState({redirect_to: false});
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchParams = `${this.state.find} ${this.state.near}`;
    this.props.searchAndFetchBusinesses(searchParams);
    searchParams = searchParams.split(' ').join('+');

    this.setState({redirect_to: true});
  }

  render() {
    let searchParams = `${this.state.find} ${this.state.near}`;
    searchParams = searchParams.split(' ').join('+');
    console.log(this.state.redirect_to);

    if(this.state.redirect_to) {
      return (<Redirect to='/search'/>);
    }

    return(
      <form onSubmit={ this.handleSubmit } className="searchbar">
        <label className="find"> Find:
          <input type="text"
                 placeholder="burgers, Japanese, Lounges"
                 onChange={this.update("find")} />
        </label>

        <label className="near"> Near:
          <input type="text"
                 placeholder="San Francisco, CA"
                 onChange={this.update("near")} />
        </label>

        <input className="btn" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
