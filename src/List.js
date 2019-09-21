import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle
} from "reactstrap";
import "./list.css";
import { Link } from "react-router-dom";

export default function List(props) {
  return (
    <Container className="mt-3">
      <Row>
        {props.freshdata.slice(0, 8).map((item, key) => (
          <Col sm="3" key={key}>
            <Card className="mycard">
              <CardImg
                top
                className="img-card"
                witdh="100%"
                src={item.thumbnailUrl}
                alt=""
              />
              <CardBody>
                <CardTitle className="font-weight-bold text-center">
                  {item.id}
                </CardTitle>
                <Link to={`/list/${item.id}`} className="btn btn-danger">
                  MORE INFO
                </Link>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
