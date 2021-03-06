import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = (props) => {
   return (
      
      <div className="row">
         <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish[0]} />
         </div>
         <div className="col-12 col-md-5 m-1">
            <RenderComments comments={props.dish[0].comments}/>
         </div>
      </div>
      
   );
}

function RenderDish({dish}) {
   
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

function RenderComments({comments}) {
   if(comments != null) {
      return(
         <Card>
            <h4>Comments</h4>
            {comments.map(cmt => (
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


export default DishDetail;