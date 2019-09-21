// @ts-ignore
import React from "react";
// @ts-ignore
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle
// @ts-ignore
} from "reactstrap";

export default function ListDetails({ match, data }) {
  return (
    <Container className="mt-3">
      <Link to="/" className="fa fa-arrow-left text-black">
        {" "}
        BACK
      </Link>
      <Row>
        <Col sm="12">
          <h1 className="h1-responsive">CARD DETAILS {match.params.userId}</h1>
        </Col>
        {data
          .slice(0, 8)
          .filter(m => m.id == match.params.userId)
          .map((item, key) => (
            <Card className="mycard" key={key}>
              <CardImg
                top
                className="img-card"
                witdh="100%"
                src={item.thumbnailUrl}
                alt=""
              />
              <CardBody>
                <CardTitle className="font-weight-bold text-center">
                  {item.title}
                </CardTitle>
              </CardBody>
            </Card>
          ))}
      </Row>
    </Container>
  );
}
