import { Button, Row, Card, Container, Col, Form } from "react-bootstrap";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import styles from "../styles/EditProfile.module.css";

const Profile = () => {
  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <div className="container">
          <div className="row gutters">
            <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="account-settings">
                    <div className={styles.user_profile}>
                      <div className={styles.user_avatar}>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar7.png"
                          alt="Maxwell Admin"
                        />
                      </div>
                      <h5 className={styles.user_name}>Yuki Hayashi</h5>
                      <h6 className={styles.user_email}>yuki@Maxwell.com</h6>
                    </div>
                    <div className={styles.about}>
                      <h5>About</h5>
                      <p>
                        I'm Yuki. Full Stack Designer I enjoy creating
                        user-centric, delightful and human experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row gutters form">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mb-2 text-primary">Personal Details</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>Full name</Form.Label>
                        <input
                          type="text"
                          className="form-control"
                          id="fullName"
                          placeholder="Enter full name"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>Email</Form.Label>
                        <input
                          type="email"
                          className="form-control"
                          id="eMail"
                          placeholder="Enter email ID"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>Phone</Form.Label>
                        <input
                          type="text"
                          className="form-control"
                          id="phone"
                          placeholder="Enter phone number"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>Website URL</Form.Label>
                        <input
                          type="url"
                          className="form-control"
                          id="website"
                          placeholder="Website url"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <h6 className="mt-3 mb-2 text-primary">Address</h6>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>Street</Form.Label>
                        <input
                          type="name"
                          className="form-control"
                          id="Street"
                          placeholder="Enter Street"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>City</Form.Label>
                        <input
                          type="name"
                          className="form-control"
                          id="ciTy"
                          placeholder="Enter City"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>State</Form.Label>
                        <input
                          type="text"
                          className="form-control"
                          id="sTate"
                          placeholder="Enter State"
                        />
                      </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                      <div className="form-group mb-3">
                        <Form.Label>Zip Code</Form.Label>
                        <input
                          type="text"
                          className="form-control"
                          id="zIp"
                          placeholder="Zip Code"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row gutters">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                      <div className="text-end">
                        <Button variant="secondary">Cancel</Button>{" "}
                        <Button variant="primary">Update</Button>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </OnlyHeaderLayout>
  );
};

export default Profile;
