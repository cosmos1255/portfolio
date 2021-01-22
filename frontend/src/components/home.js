import React, {Component} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import testimg from './images/test-img.png'
import Nav from 'react-bootstrap/Nav'
import './home.css'

class Home extends Component {

    render() {
        return (

            <div>
                <header>
                    <div className="header">
                        <h1>David Eyrich</h1>
                    </div>
                </header>
                <body>
                    <div>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Col sm={4}>
                                    <p class='img-title'>Project 1</p>
                                    <a href="/project-dir/project-1"><Image src={testimg} fluid/></a>
                                    <br/>
                                    <br/>
                                    <p class='img-desc'>
                                        This is the first project in this section. This section will be a collection
                                        of projects that I have worked on in my career.
                                    </p>
                                </Col>
                                <Col sm={4}>
                                    <p class='img-title'>Project 2</p>
                                    <a href="/project-dir/project-2"><Image src={testimg} fluid /></a>
                                    <br/>
                                    <br/>
                                    <p class='img-desc'>
                                        This is the second project in this section. This section will be a collection
                                        of projects that I have worked on in my career.
                                    </p>
                                </Col>
                                <Col sm={4}>
                                    <p class='img-title'>Project 3</p>
                                    <Image src={testimg} fluid />
                                    <br/>
                                    <br/>
                                    <p class='img-desc'>
                                        This is the third project in this section. This section will be a collection
                                        of projects that I have worked on in my career.
                                    </p>
                                </Col>
                            </Row>
                            <Nav.Link href="/projects"><p class="link-text">View all {'>'}</p></Nav.Link>
                        </Container>
                    </div>
                </body>
            </div>
        )
    }

}

export default Home