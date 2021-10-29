import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import NotFoundImage from "../assets/images/system/404.svg";
import {Routes} from "../common/Routes";
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";

export default () => {
    return (
        <main>
          <section className="vh-100 d-flex align-items-center justify-content-center">
            <Container>
              <Row>
                <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
                  <div>
                    <Card.Link as={Link} to={Routes.Home.path}>
                      <Image src={NotFoundImage} className="img-fluid w-75" />
                    </Card.Link>
                    <h1 className="text-primary mt-5">
                        Không tìm thấy trang
                      {/*Page not <span className="fw-bolder">found</span>*/}
                    </h1>
                    <p className="lead my-4">
                        Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không.
                    </p>
                    <Button as={Link} variant="primary" className="animate-hover" to={Routes.Home.path}>
                      <FontAwesomeIcon icon={faChevronLeft} className="animate-left-3 mr-2" />
                      Quay về trang chủ
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
    );
};
