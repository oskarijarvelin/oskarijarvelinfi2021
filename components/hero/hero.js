import Link from 'next/link'
import styles from './Hero.module.scss'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

export default function Hero({title, parent = false, breadcrumbs = true}) {
    return (
        <Container>
            <Row>
                <Col>
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
                </Col>
            </Row>
        </Container>
        )
}