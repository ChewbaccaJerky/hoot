import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = { find: "tacos", near: "Oakland CA" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let searchParams = `${this.state.find} ${this.state.near}`;
    this.props.searchAndFetchBusinesses(searchParams);
    searchParams = searchParams.split(' ').join('+');
    this.props.history.push(`search/${searchParams}`);
  }

  render() {
    let searchParams = `${this.state.find} ${this.state.near}`;
    searchParams = searchParams.split(' ').join('+');
    return(
      <form onSubmit={ this.handleSubmit } className="searchbar">
        <label className="find"> Find:
          <input type="text"
                 placeholder="tacos, japanese, coffee"
                 onChange={this.update("find")} />
        </label>

        <label className="near"> Near:
          <input type="text"
                 placeholder="Oakland, CA"
                 onChange={this.update("near")} />
        </label>

        <input className="btn" type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
