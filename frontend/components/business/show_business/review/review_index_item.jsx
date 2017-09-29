import React from 'react';
import Ratings from '../../../rating/ratings';
import { Redirect } from 'react-router';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.review;
  }

  render() {
    const review = this.props.review;
    const randNum = Math.ceil(Math.random()*10);
    const button = (<button onClick={() => this.props.deleteReview(review.id)}>DELETE</button>);
    return(
      <li className="review-index-item">
         <div className="avatar">
           <img className="profile-img"
                src={`http://lorempixel.com/400/400/abstract/${randNum}`}
                alt="profile pic"/>
           <h1>{review.author.username ? review.author.username : ""}</h1>
         </div>
         <div className="ratings-body">
           <div>
             <Ratings ratings={review.ratings ? review.ratings : 5} />
             { this.props.currentUser.id === review.author.id ? button : "" }
           </div>
           <p>{review.body}</p>
         </div>
       </li>
    );
  }
}



// const ReviewIndexItem = (props) => {
//   let review;
//   let deleteBtn = "";
//   let currentUser = { id: -1};
//   if(props.review) {
//     review = props.review;
//     currentUser = props.currentUser;
//     if(currentUser !== null && review.author.id === currentUser.id) {
//       deleteBtn = (<button onClick={() => props.deleteReview(review.id)}>DELETE</button>);
//     }
//     else {
//       deleteBtn = "";
//     }
//   }
//
//   const randNum = Math.ceil(Math.random()*10);
//   return (
//     <li className="review-index-item">
//       <h1>{review.author.id}</h1>
//       <div className="avatar">
//         <img className="profile-img"
//              src={`http://lorempixel.com/400/400/abstract/${randNum}`}
//              alt="profile pic"/>
//         <h1>{review.author.username ? review.author.username : ""}</h1>
//       </div>
//       <div className="ratings-body">
//         <div>
//           <Ratings ratings={review.ratings ? review.ratings : 5} />
//           {deleteBtn}
//         </div>
//         <p>{review.body}</p>
//       </div>
//     </li>
//   );
// };




export default ReviewIndexItem;
