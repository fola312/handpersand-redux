import React from "react";
import { MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const FeaturesPage = () => {
    return (
        <MDBContainer tag="section"  className="text-center my-5">
            <h2 className="h1-responsive font-weight-bold my-5">
                Why we're so good.
            </h2>
            <p className="lead grey-text w-responsive mx-auto mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam.
            </p>
            <MDBRow>
                <MDBCol md="4">
                    <MDBIcon icon="hat-wizard" size="3x" className="red-text" />
                    <h5 className="font-weight-bold my-4">Create.</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum coor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon icon="book" size="3x" className="cyan-text" />
                    <h5 className="font-weight-bold my-4">Customize.</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
                <MDBCol md="4">
                    <MDBIcon far icon="comments" size="3x" className="orange-text" />
                    <h5 className="font-weight-bold my-4">Contact.</h5>
                    <p className="grey-text mb-md-0 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Reprehenderit maiores aperiam minima assumenda deleniti hic.
                    </p>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default FeaturesPage;
