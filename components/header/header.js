import Link from 'next/link'
import Navlink from '../navlink/navlink'
import styles from './Header.module.scss'

import { Linkedin, Github } from 'react-bootstrap-icons';
import { Container, Row, Navbar, Nav, NavDropdown } from 'react-bootstrap'

export default function Header() {
    return (
        <div className="bg-light sticky-top border-bottom">
            <Container className="p-0 px-1 py-lg-2">
                <Navbar expand="lg" className="p-0">

                    <Navbar.Brand className={styles.oskari + ` p-0`}>
                        <Link href="/">
                            <a className="p-2">Oskari Järvelin</a>
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-secondary border-0 rounded-0 p-2" />

                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ml-auto p-5 pt-4 p-lg-0">

                            <Navlink href="/"><Nav.Link href="/" className="fw-bolder px-lg-3">Etusivu</Nav.Link></Navlink>

                            <NavDropdown title="Osaaminen" className="fw-bolder px-lg-2 rounded-1" id="basic-nav-dropdown">
                                <Navlink href="/web-kehitys"><NavDropdown.Item href="/web-kehitys">Web-kehitys</NavDropdown.Item></Navlink>
                                <Navlink href="/valaistus"><NavDropdown.Item href="/valaistus">Valaistus</NavDropdown.Item></Navlink>
                                <Navlink href="/livestriimit"><NavDropdown.Item href="/livestriimit">Livestriimit</NavDropdown.Item></Navlink>
                                <Navlink href="/tapahtumat"><NavDropdown.Item href="/tapahtumat">Tapahtumat</NavDropdown.Item></Navlink>
                            </NavDropdown>

                            <Navlink href="/opiskelu"><Nav.Link href="/opiskelu" className="fw-bolder px-lg-3">Opiskelu</Nav.Link></Navlink>

                            <span className="px-0 px-lg-1"></span>

                            <div className="d-flex justify-content-center pt-5 pt-lg-0">
                                <Nav.Link href="https://www.linkedin.com/in/oskarijarvelin/" target="_blank" rel="nofollow" className="d-flex align-items-center px-3 px-lg-2">
                                    <Linkedin size={20} />
                                </Nav.Link>

                                <Nav.Link href="https://github.com/oskarijarvelin" target="_blank" rel="nofollow" className="d-flex align-items-center px-3 px-lg-2">
                                    <Github size={20} />
                                </Nav.Link>
                            </div>

                        </Nav>
                    </Navbar.Collapse>
                    

                </Navbar>
            </Container>
        </div>
        )
}