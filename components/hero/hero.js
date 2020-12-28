import Link from 'next/link'
import Image from 'next/image'
import styles from './Hero.module.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function Hero({children, title, parent = false, breadcrumbs = true}) {
    return (
        <Container>
            <Row className="gx-5">
                <Col md={10} lg={7}>
                    {breadcrumbs &&
                    <Nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li class="breadcrumb-item"><Link href="/"><a>Etusivu</a></Link></li>
                            {parent &&
                            <li class="breadcrumb-item active">{parent}</li>
                            }
                            <li class="breadcrumb-item"></li>
                        </ol>
                    </Nav>
                    }

                    <h1>{title}</h1>

                    {children}
                </Col>

                <Col lg={5}>
                    <div className="bg-light mt-5 mt-lg-0 shadow d-flex">
                        <Image src="/ulkopotretit-4203.jpg" height={4016} width={6016} />
                    </div>
                </Col>
            </Row>
        </Container>
        )
}