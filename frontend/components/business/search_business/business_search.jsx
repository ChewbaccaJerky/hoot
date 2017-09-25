import React from 'react';

class BusinessSearch extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentDidMount(){
    if(this.props.match.params.searchParams) {
      this.props.searchAndFetchBusinesses(this.props.match.params.searchParams)
    }
  }

  render() {

    return(
      <div className="business-search-container">
        <div className="filter-component">Filter</div>

        <div>
          <div className="business-index-container">
            <div className="business-index-item"></div>
          </div>

          <div className="map-container">Map</div>
        </div>
      </div>
    );
  }
}

export default BusinessSearch;
