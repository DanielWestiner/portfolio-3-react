import React from 'react';
import '../../styles/Contact.css'

export default function Contact() {
  return (
    <>
      <div className=' contact-page container-fluid'>
        <div className='contact-right row'>
          <section className="mb-4">
            <h2 className=" font-weight-bold text-center my-4">Get in Contact!</h2>
            <div className="row">
              <div className="col-md-9">
                <form id="contact-form" name="contact-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input type="text" id="name" name="name" className="form-control" />
                        <label htmlFor="name" className="">Your name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="md-form mb-0">
                        <input type="text" id="email" name="email" className="form-control" />
                        <label htmlFor="email" className="">Your email</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form mb-0">
                        <input type="text" id="subject" name="subject" className="form-control" />
                        <label htmlFor="subject" className="">Subject</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="md-form">
                        <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                        <label htmlFor="message">Your message</label>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="text-center text-md-left">
                  <a className="btn btn-primary" href='https://www.gmail.com'>Send</a>
                </div>
                <div className="status"></div>
              </div>
              <div className="col-md-3 text-center">
                <ul className="list-unstyled mb-0">
                  <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Philadelphia, PA 19125</p>
                  </li>

                  <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>(484) 832-4374</p>
                  </li>

                  <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <p>daniel.westiner@gmail.com</p>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className='contact-left row'>
          <div className='contact-bg'></div>
        </div>
      </div>
    </>
  );
}
