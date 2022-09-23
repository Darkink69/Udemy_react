import {Container, Row, Card, Carousel, Button, Modal } from 'react-bootstrap'
import React, { useState } from 'react';

const BootstrapTest = ({data}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container>
            <Row>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623-990x494.jpeg" />
                    <Card.Body>
                        <Card.Title>Карточка</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="success">Нажми</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623-990x494.jpeg" />
                    <Card.Body>
                        <Card.Title>Карточка еще</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="warning">Нажми</Button>
                    </Card.Body>
                </Card>
            </Row>

                <br />
            <Row>
                <Carousel slide={false}>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://thedispatch.blob.core.windows.net/thedispatchimages/2022/04/1913623-990x494.jpeg"
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://www.nps.gov/common/uploads/grid_builder/nature/crop16_9/BD26B3DB-A82F-DBDC-FAA219595F06A454.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src="https://d19h8kn98xvxar.cloudfront.net/images/_hero/connectwithnature.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
                </Row>
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Launch demo modal
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>Модальное окошечко</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>А вот первый из списка: {data[0].name}</Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                </>
        </Container>
    )
}

export default BootstrapTest;