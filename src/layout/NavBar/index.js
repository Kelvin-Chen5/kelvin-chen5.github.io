import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import styles from "../../index.css"
import KelvinImg from "../../images/Kelvin.jpg"

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img src={KelvinImg} height="40px" alt="img"/> Kelvin Chen </Navbar.Brand>
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
                                <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" height="40px" alt="img"/>
                                MangaManga App</NavDropdown.Item>
                            <NavDropdown.Item href="!ClassFinder">
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
                        {/* id="bootstrap-overrides" className={styles.a} */}
                        <a href="https://github.com/Kelvin-Chen5">
                            <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" height="40px" alt="img"/>
                            &lt;--Github Profile</a>
                        <a href="https://linkedin.com/in/kelvin-chen-253658195">
                            <img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" height="40px" alt="img"/>
                            &lt;--LinkedIn Profile</a>
                    </Nav>
                    {/* <Button className="d-flex" variant="outline-light" onClick={logout}>Log Out</Button> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;