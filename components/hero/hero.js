import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function Hero({children, title, parent = false, breadcrumbs = true, image = false, imageWidth = false, imageHeight = false }) {
    return (
        <Container className="py-lg-5">
            <Row className="gx-5">
                <Col md={10} lg={7}>
                    {breadcrumbs &&
                    <Nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/"><a>Etusivu</a></Link></li>
                            {parent &&
                            <li className="breadcrumb-item active">{parent}</li>
                            }
                            <li className="breadcrumb-item"></li>
                        </ol>
                    </Nav>
                    }

                    <h1 className="my-3">{title}</h1>

                    {children}
                </Col>

                {image &&
                    <Col lg={5}>
                        <div className="bg-light mt-5 mt-lg-0 shadow d-flex">
                            <Image src={image} height={imageHeight} width={imageWidth} />
                        </div>
                    </Col>
                }

            </Row>
        </Container>
        )
}