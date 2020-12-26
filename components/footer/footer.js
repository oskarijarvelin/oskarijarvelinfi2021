import styles from './Footer.module.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <div className={styles.footer + ` bg-light mt-5`}>
            <Container>
                <Row>
                    <Col>
                        <p className="m-0 py-3 text-center">
                            &copy; 2012 - {new Date().getFullYear()}:{' '}
                            <span className={styles.branding}>Oskari Järvelin</span>.
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}