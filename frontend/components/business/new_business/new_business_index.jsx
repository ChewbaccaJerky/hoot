import React from 'react';
import NewBusinessItem from './new_business_item';

class NewBusinessIndex extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  componentDidMount() {
    this.props.fetchBusinesses();
  }

  render() {
    let content = this.props.new_businesses.map((biz) => (
      <NewBusinessItem key={biz.place_id} biz={biz} />
    ));

    console.log(content);
    return (
      <div className="new-business-container">
        { content }
      </div>
    );
  }
}

export default NewBusinessIndex;
