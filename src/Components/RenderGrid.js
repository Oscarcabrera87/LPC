import React from "react";
import { Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardText } from "reactstrap"

// function RenderCard ({card}) {
//         return (
//         <Card style={{width: '18rem'}} key={card.id}>
//                 <Card.Img variant="top" src='/img/test_img.jpg' />
//                 <Card.Body>
//                     <Card.Title>
//                         <h3>{card.title}</h3>
//                     </Card.Title>
//                 </Card.Body>
//         </Card>
//         )
//     }
const RenderGrid = (card) => {
  console.log(card);

  // const grid = results.map((card) => {
  //     return (
  //         <div className="col-12 col-md-5 m-1" key={card.id}>
  //             <RenderCard card={card}/>
  //         </div>
  //     )
  // })
  // console.log(RenderCard)
  // console.log(grid)
  return (
      <Card className="col-12 col-md-4" key={card.id}>
        <CardImg variant="top" src="/img/test_img.jpg" />
        <CardBody className="bg-primary">
          <CardTitle>
            <h3>{card.title}</h3>
          </CardTitle>
          <CardText>
              {card.about}
          </CardText>
        </CardBody>
      </Card>
  );
};

export default RenderGrid;
