import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const DishDetail = (props) => {
   if(props.dish != null) {
      return (
      
         <div className="row">
            <div className="row">
               <Breadcrumb>
                  <BreadcrumbItem><Link to="/menu">Menu</Link> </BreadcrumbItem>
                  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
               </Breadcrumb>
               <div className="col-12">
                  <h3> {props.dish.name} </h3>
                  <hr/>
               </div>
            </div>
            <div className="col-12 col-md-5 m-1">
               <RenderDish dish={props.dish} />
               <RenderComments dish={props.comments}/>
            </div>
         </div>
         
      );
   } else {
      return (
         <div></div>
      );
   }
   
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