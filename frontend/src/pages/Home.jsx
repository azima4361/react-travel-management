import React from 'react';
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import Subtitle from '../shared/Subtitle';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../Services/ServiceList';
import FeaturedTourList from '../components/FeaturedTours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="World Icon" />
                </div>
                <h1>
                  Traveling opens the door to creating{" "}
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                  Molestiae tempora dignissimos, animi praesentium molestias
                  perferendis porro expedita delectus. Soluta natus porro.
                </p>
              </div>
            </Col>

            <Col lg='2'> 
            <div className="hero_img-box"> <img src={heroImg} alt="" />
                 </div> 
                 </Col> 
                 <Col lg='2'> 
                 <div className="hero_img-box mt-4"> 
                    <video src={heroVideo} alt="" controls />
                     </div> 
                     </Col> 
                     <Col lg='2'> 
                     <div className="hero_img-box mt-5"> 
                        <img src={heroImg} alt=""  /> 
                        </div>
                         </Col>
                         <SearchBar/>
          </Row>
        </Container>
      </section>

      <section>
         <Container>
             <Row>
                 <Col lg="3">
                  <h5 className="services_subtitle">What we serve</h5> <h2 className="services _title">We offer our best services</h2> </Col>
                  <ServiceList/>
                   </Row>
                   </Container>
                    </section>


         {/* featured tour section */}
                    <section> 
                      <Container> 
                        <Row> 
                            <Col lg="12" className="mb-5"> 
                              <Subtitle subtitle={"Explore"} />
                                <h2 className="featured_tour-title">Our featured tours</h2> 
                            </Col>
                                <FeaturedTourList/> 
                        </Row> 
                      </Container>
                    </section>

          {/* experienced section */}
          <section>
             <Container> 
              <Row> 
                <Col lg="6"> 
                   <div className="experience_content"> 
                      <Subtitle subtitle={"Experience"} /> 
                      
                      <h2> With our all experience <br /> we will serve you </h2>

                       <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br /> Quas aliquam, hic tempora inventore suscipit unde. </p> 
                       
                       </div> 

                      <div className="counter_wrapper d-flex  align-items-center gap-5">
                         <div className="counter_box"> 
                             <span>12k+</span> 
                             <h6>Successful Trip</h6>
                          </div> 
                          
                          <div className="counter_box"> 
                            <span>2k+</span> 
                            <h6>Regular Clients </h6> 
                          </div>
                          <div className="counter_box"> 
                            <span>15</span> 
                            <h6>Years Experience</h6> 
                          </div> 
                          
                      </div>
                </Col> 
                 <Col lg="6">
                    <div className='experience_img'>
                       <img src={experienceImg} alt="" />
                    </div>
                 </Col>
              </Row> 
            </Container>
           </section>


           {/* Gallery Section */}
           <section>
             <Container>
                <Row>
                  <Col lg='12'>
                    <Subtitle subtitle = { 'Gallery'} />
                    <h2 className="gallery_title">Visit our customers tour Gallery</h2>
                 </Col>
                 <Col lg='12'>
                  <MasonryImagesGallery/>
                 </Col>
               </Row>
             </Container>
           </section>


           {/* Testimonial Section */}
           <section>
            <Container>
               <Row>
                 <Col lg='12'>
                    <Subtitle subtitle = { 'Fans Love'}/>
                    <h2 className="testimonial_title">What our fans say about us</h2>
                 </Col>
                 <Col lg='12'>
                  <Testimonials />
                 </Col>
               </Row>
           </Container>
          </section>


          {/* Newsletter Section */}
          <Newsletter/>
    </>
  );
};

export default Home;
