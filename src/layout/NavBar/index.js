import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import {
    githubImg,
    linkedinImg
} from "../../images"

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/"> Kelvin Chen </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '300px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">About Me</Nav.Link>
                        
                        <NavDropdown title="My Projects" id="basic-nav-dropdown">
                            <NavDropdown.Item href="MangaMangaApp">
                                {/* <img src={githubImg} height="40px" alt="img"/> */}
                                MangaManga App</NavDropdown.Item>
                            <NavDropdown.Item href="NotClassFinder">
                                !ClassFinder</NavDropdown.Item>
                            <NavDropdown.Item href="OnlineBookStore">
                                Online Book Store</NavDropdown.Item>
                            <NavDropdown.Item href="HauntingOfWilsonGame">
                                The Haunting Of Wilson Game</NavDropdown.Item>
                            <NavDropdown.Item href="UshMicroshellProject">
                                Ush Microshell Project</NavDropdown.Item>
                            <NavDropdown.Item href="DeadwoodGame">
                                Deadwood Game</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="ms-auto">
                        <a href="https://linkedin.com/in/kelvin-chen-253658195" target="_blank">
                            <img class="logo" src={linkedinImg} height="40px" alt="img"/></a>
                        <a href="https://github.com/Kelvin-Chen5" target="_blank">
                            <img class="logo" src={githubImg} height="40px" alt="img"/></a>
                    </Nav>
                    {/* <Button className="d-flex" variant="outline-light" onClick={logout}>Log Out</Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;