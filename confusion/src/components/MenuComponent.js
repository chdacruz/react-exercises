import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


function RenderMenuItem({ dish, onClick }) { //If the properites receveid are not static or are unclear, this could be changed to an object (such as props)
   return (
      <Card key={dish.id} onClick={() => onClick(dish.id)}>
         <CardImg width="100%" src={dish.image} alt={dish.name} />
         <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
         </CardImgOverlay>
      </Card>
   );
}

const Menu = (props) => { //Function declaration in ES6

   const menu = props.dishes.map((dish) => {
      return (
         <div key={dish.id} className="col-12 col-md-5 m-1">
            <RenderMenuItem dish={dish} onClick={props.onClick}/>
         </div>
      )
   });

   return (
      <div className="container">
         <div className="row">
            {menu}
         </div>
         <div className="row">
         </div>
      </div>
   );
}
      
export default Menu;