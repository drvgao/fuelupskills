import React from "react";
import VideoReact from "./assets/sample/VideoReact";
import ReactYouTube from "./assets/sample/ReactYouTube";
import { Container } from "react-bootstrap";

const ForKidsPage = () => {
    return (
        <div>
            {/* <VideoReact /> */}
            <Container>
                <br />
                <h2>Sample Video</h2>
                <ReactYouTube />
            </Container>
        </div>
    )
}

export default ForKidsPage;