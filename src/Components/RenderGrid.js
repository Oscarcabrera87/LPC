import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap"
//import { Link } from "react-router-dom";

const openDetailsModal = () => {
  React.useState(false);
  setOpenModal(true);
};
const RenderGrid = ({ results }) => {
  const cardArray = results.map(card => (
    <Card className="col-12 col-sm-5 p-sm-1 col-lg-3 p-md-2 m-1" key={card.id} openDetailsModal={openDetailsModal}>
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
        <CardText>
          <div>
            <p>{results.title}</p>
            {results.about}
            {openModal && (
              <Modal open={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header closed={openModal}>
                  <Modal.Title>Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <p>{results.extra}</p>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setOpenModal(false)}>Close</Button>
                </Modal.Footer>
              </Modal>
            )}
          </div>
        </CardText>
      </CardBody>
    </Card>
  ))
  // console.log("In RenderGrid passing cardarray")
  console.log(results)


  return (
    <div className="container">
      <div className="row justify-content-center">
        {cardArray}
      </div>
    </div>
  )
}

export default RenderGrid;
