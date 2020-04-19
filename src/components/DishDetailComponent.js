import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function convertDate(date){
    var monthNames = [
    "Jan", "Feb", "Mar",
    "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct",
    "Nov", "Dec"
  ];

  var day = date.substring(8,10);
  var monthIndex = parseInt(date.substring(5,7)) - 1;
  var year = date.substring(0,4);

  return monthNames[monthIndex] + ' ' +day + ', ' + year;
    }


class DishDetail extends Component{

	constructor(props){
		super(props);
		this.renderDish = this.renderDish.bind(this);
		this.renderComments = this.renderComments.bind(this);
	}

	 renderDish(dish){
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
	

    renderComments(comments){
    	
    		const comment = comments.map(dish =>
    					
    						<li key = {dish.id}>
    						 {dish.comment}
    						 <br/> 
    						 <br/>
    						 -- {dish.author} , {convertDate(dish.date.substring(0,10))}
    						 <br />
    						 <br />
    						</li>		
    				);

    		return(
    			<div>
    				<h4> Comments </h4>			
    				<ul class = "list-unstyled"> {comment} </ul>
    			</div>);
    }

    render(){
    	if(this.props.selectedDish){
    	return(
    	

    	<div className='container'>
    		<div className="row">
                  <div  className="col-12 col-sm-12 col-md-5 m-1">
                    {this.renderDish(this.props.selectedDish)}
                  </div>
                  <div  className="col-12 col-sm-12 col-md-5 m-1">
                   {this.renderComments(this.props.selectedDish.comments)}
                  </div>

            </div>
		</div>

    	);
    	}
	else
		return(<div></div>);


    }

}

export default DishDetail;