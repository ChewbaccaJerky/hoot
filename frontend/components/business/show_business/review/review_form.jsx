import React from 'react';

class ReviewForm extends React.Component {
  constructor(props){
    super(props)
    this.state = { ratings: null, body: ""}
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let place_id = this.props.match.params.biz_id;
    this.props.createBusinessReview(place_id, {review: this.state});
    location.reload();
  }

  render() {
    // console.log(this.props);
    return(
      <form className="review-form" onSubmit={this.handleSubmit}>
          <h1>Create A Review</h1>

          <div className="radio-btn-container">
            1<input type="radio" onChange={this.update('ratings')} name="ratings" value="1" />
            2<input type="radio" onChange={this.update('ratings')} name="ratings" value="2" />
            3<input type="radio" onChange={this.update('ratings')} name="ratings" value="3" />
            4<input type="radio" onChange={this.update('ratings')} name="ratings" value="4" />
            5<input type="radio" onChange={this.update('ratings')} name="ratings" value="5" />
            <label>    Select a rating.</label>
          </div>
        <textarea
          type="text"
          onChange={this.update("body")}
          placeholder="Let us know what you thought...."/>

        <input type="submit" value="Post Review" />
      </form>
    );
  }
}

export default ReviewForm;
