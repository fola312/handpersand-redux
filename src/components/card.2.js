import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image2 from "../images/Hand2.jpeg"

const CardExample = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem", maxHeight: "22rem"  }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image2} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Ninja Turtle</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                    <MDBBtn href="#">Order</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        
    )
}

export default CardExample;
