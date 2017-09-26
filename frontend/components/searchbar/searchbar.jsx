import React from 'react';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { find: "tacos", near: "Oakland CA", redirect_to: false };
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log(props);
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

    this.setState({redirect_to: true});
  }

  render() {
    let searchParams = `${this.state.find} ${this.state.near}`;
    searchParams = searchParams.split(' ').join('+');

    if(this.state.redirect_to) {
      this.setState({redirect_to: false});
      return (<Redirect to='/search' />);
    }
    return(
      <form onSubmit={ this.handleSubmit } className="searchbar">
        <label className="find"> Find:
          <input type="text"
                 placeholder="burgers, pizza, sushi"
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
