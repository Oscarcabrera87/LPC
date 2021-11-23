import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card, 
  CardImg, 
  CardBody, 
  CardTitle, 
  CardText} from "reactstrap"

const RenderGrid = ({results}) => {
  const cardArray = results.map(card => (
    <Card className="col-12 col-sm-5 p-sm-1 col-lg-3 p-md-2 m-1" key={card.id}>
      <CardImg variant="top" src="/img/test_img.jpg" />
      <CardBody>
          <CardTitle>
              <h3>{`Title:
              ${card.title}`}</h3>
          </CardTitle>
          <CardText>
              {`Summary:
              ${card.about}`}
          </CardText>
      </CardBody>
    </Card>
  ))
  console.log("In RenderGrid passing cardarray")
  console.log(cardArray)

  
  return (
    <div className="container">
      <div className="row justify-content-center">
        {cardArray}
      </div>
    </div>
  )
}

export default RenderGrid;
