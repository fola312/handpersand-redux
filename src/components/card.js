import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import image2 from "../images/lego.png"

const CardExample = () => {
    return (
        <MDBCol style={{ maxWidth: "22rem", maxHeight: "22rem"  }}>
            <MDBCard>
            <MDBCardImage className="img-fluid" src={image2} alt=""  waves />
                <MDBCardBody>
                    <MDBCardTitle>Space Party</MDBCardTitle>
                    <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                    <MDBBtn href="#">Order2</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
        
    )
}

export default CardExample;
