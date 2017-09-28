import React from 'react';
import NewBusinessItem from './new_business_item.jsx';
import Spinner from '../../spinner/spinner';

class NewBusinessIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    let content = this.props.new_businesses.map((biz) => (
      <NewBusinessItem key={biz.place_id} biz={biz} image_key={this.props.image_key}/>
    ));

    return (
      <div className="new-business-container">
        <h1> Hot Businesses </h1>
        <div className="new-businesses">
          { content }
        </div>
      </div>
    );
  }
}

export default NewBusinessIndex;
