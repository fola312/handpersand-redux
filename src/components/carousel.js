import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask } from
    "mdbreact";
import image2 from "../images/carousel2.jpg"
import image3 from "../images/carousel3.jpg"
import image5 from "../images/carousel5.jpg"
import image1 from "../images/Logo.png"

const CarouselPage = () => {
    return (
        <MDBCarousel activeItem={1} length={4} className=" w-100">
            <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                    <MDBView>
                        <img className="d-block w-100" src={image1} alt="First slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                    <MDBView>
                        <img className="d-block w-100" src={image2} alt="Second slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                    <MDBView>
                        <img className="d-block w-100" src={image3} alt="third item" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                    <MDBView>
                        <img className="d-block w-100" src={image5} alt="4th slide" />
                        <MDBMask overlay="black-strong" />
                    </MDBView>
                </MDBCarouselItem>
            </MDBCarouselInner>
        </MDBCarousel>
    );
}

export default CarouselPage;
