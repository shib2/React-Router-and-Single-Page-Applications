import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';







	 function RenderDish(dish){
      if(dish != null)
         return(
            <Card>
               <CardImg top src = {dish.image} alt = {dish.name} />
               <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
               </CardBody>
            </Card>
            );
      else
         return(<div></div>);

    }


   function RenderComments(comments){
    	
    		const comment = comments.map(comment =>
    					
    						<li key = {comment.id}>
    						 <p>{comment.comment}</p>
    						 <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
    						</li>		
    				);

    		return(
    			<div>
    				<h4> Comments </h4>			
    				<ul className = "list-unstyled"> {comment} </ul>
    			</div>);
    }


 const  DishDetail = (props) => {



    	if(props.selectedDish){
    	return(
    	

    	<div className='container'>
    		<div className="row">
                  <div  className="col-12 col-sm-12 col-md-5 m-1">
                    {RenderDish(props.selectedDish)}
                  </div>
                  <div  className="col-12 col-sm-12 col-md-5 m-1">
                   {RenderComments(props.selectedDish.comments)}
                  </div>

            </div>
		</div>

    	);
    	}
	else
		return(<div></div>);


    

}

export default DishDetail;