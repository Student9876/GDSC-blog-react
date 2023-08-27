import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Blog(props) {

    return <>
        <div className="blogDiv shakethis">
            <Container>
                <Row>
                    <Col md={6} lg={4}>
                        <img src={props.img_src} alt='blank_profile' />
                    </Col>
                    <Col md={6} lg={8}>
                        <h1>{props.title}</h1>
                        <p>{props.content}</p>
                        <span><strong>{props.username}</strong></span>
                    </Col>

                </Row>
            </Container>



            
            {/* {setWidth(window.innerWidth)}
            {(width > 950)? <>
                <table>
                    <tr>
                        <td><img src={props.img_src} alt='blank_profile' /></td>
                        <td>
                            <h1>{props.title}</h1>
                            <p>{props.content}</p>
                            <span><strong>{props.username}</strong></span>
                        </td>
                    </tr>
                </table>
            </> :
                <table>
                    <tr>
                        <td><img src={props.img_src} alt='blank_profile' /></td>
                    </tr>
                    <tr>
                        <td>
                            <h1>{props.title}</h1>
                            <p>{props.content}</p>
                            <span><strong>{props.username}</strong></span>
                        </td>
                    </tr>
                </table>}*/}
        </div> 
        <br />
    </>
}

export default Blog;