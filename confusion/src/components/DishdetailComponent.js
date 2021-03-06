import { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

   render() {
      return (
         
         <div className="row">
            <div className="col-12 col-md-5 m-1">
               {this.renderDish(this.props.dish[0])}
            </div>
            <div className="col-12 col-md-5 m-1">
               {this.renderComments(this.props.dish[0])}
            </div>
         </div>
         
      );
   }

   renderDish(dish) {
      if(dish != null) {
         return(
            <Card>
               <CardImg width="100%" src={dish.image} alt={dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText> {dish.description} </CardText>
               </CardBody>
            </Card>
         );
      } 
      else {
         return (
           <div></div>
         );
      }
   }

   renderComments(dish) {
      if(dish != null) {
         return(
            <Card>
               <h4>Comments</h4>
               {dish.comments.map(cmt => (
                  <ul key={cmt.id} className="list-unstyled">
                     <li >{cmt.comment}</li>
                     <li >
                        {cmt.author}, 
                        {new Intl.DateTimeFormat('en-US', {
                           year: 'numeric',
                           month: 'short',
                           day: '2-digit'
                        }).format(new Date(cmt.date))}
                     </li>
                  </ul>
               ))}
            </Card>
         );
      } 
      else {
         return (
            <div></div>
         );
      }

   }
}

export default Dishdetail;