import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import Layout from '../components/layout';
import Intro from '../components/mask';
import Carousel from '../components/carousel';
import AboutSection from '../components/aboutSection'
import Card from '../components/card'
import Card2 from '../components/card.1'
import Card3 from '../components/card.2'
import { MDBRow } from 'mdbreact'

class App extends Component {
  render() {
    return (
      <>
        <Layout>
        <Carousel />
        <Intro />
        <main>
          <AboutSection />
          <section id="cardSection">
            <h2 className="h1-responsive text-center font-weight-bold mb-5">
              bestsellers.
            </h2>
            <MDBRow className="m-0" center>
              <Card />
              <Card2 />
              <Card3 />
            </MDBRow>
          </section>
        </main>
        </Layout>
      </>
    );
  }
}

export default App;
