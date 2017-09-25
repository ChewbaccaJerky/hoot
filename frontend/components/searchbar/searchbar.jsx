import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { find: "", near: "Oakland, CA" };
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

    return (
      <Redirect to={`/businesses/${searchParams}`} />
    );
  }

  render() {
    console.log(this.props);
    return(
      <form onSubmit={this.handleSubmit }>
        <label> Find
          <input type="text"
                 placeholder="tacos, japanese, coffee"
                 onChange={this.update("find")} />
        </label>

        <label> Near
          <input type="text"
                 placeholder="Oakland, CA"
                 onChange={this.update("near")} />
        </label>

        <button type="submit"></button>
      </form>
    );
  }
}

export default SearchBar;
