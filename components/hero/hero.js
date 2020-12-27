import Link from 'next/link'
import styles from './Hero.module.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function Hero({children, title, parent = false, breadcrumbs = true}) {
    return (
        <Container>
            <Row>
                <Col md={9} lg={7}>
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
            </Row>
        </Container>
        )
}