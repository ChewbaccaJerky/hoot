import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { ratings: 0, body: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit() {
    let place_id = this.props.match.params.biz_id;
    this.props.createBusinessReview(place_id, {review: this.state});
  }

  render() {
    console.log(this.props);
    return(
      <form className="review-form" onSubmit={this.handleSubmit}>
        Rating:
          1<input type="radio" onChange={this.update('ratings')} name="ratings" value="1" />
          2<input type="radio" onChange={this.update('ratings')} name="ratings" value="2" />
          3<input type="radio" onChange={this.update('ratings')} name="ratings" value="3" />
          4<input type="radio" onChange={this.update('ratings')} name="ratings" value="4" />
          5<input type="radio" onChange={this.update('ratings')} name="ratings" value="5" />

        <textarea
          type="text"
          onChange={this.update("body")} />

        <input type="submit" value="Post Review" />
      </form>
    );
  }
}

export default ReviewForm;
