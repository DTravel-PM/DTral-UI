import { Button, Row, Card, Container, Col } from "react-bootstrap";
import { OnlyHeaderLayout } from "../layout";
import { Header } from "../components/common";
import Image from "next/image";
import styles from "../styles/Profile.module.css";
import { Sidebar } from "../components/Sidebar";
import { CardPost } from "../components/CardPost";
import { Hashtag } from "../components/Hashtag";

const Profile = () => {
  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.fb_profile_block}>
              <div className={styles.fb_profile_block_thumb}></div>
              <div className={styles.profile_img}>
                <a href="#">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt=""
                    title=""
                  />
                </a>
              </div>
              <div className={styles.profile_name}>
                <h2>Markins Smithertain</h2>
              </div>
              <div className={styles.fb_profile_block_menu}>
                <div className={styles.block_menu}>
                  <ul>
                    <li>
                      <a href="#">Timeline</a>
                    </li>
                    <li>
                      <a href="#">about</a>
                    </li>
                    <li>
                      <a href="#">Friends</a>
                    </li>
                    <li>
                      <a href="#">Photos</a>
                    </li>
                    <li>
                      <a href="#">More...</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col md={3}>
            <Sidebar />
          </Col>
          <Col md={6}>
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
            <CardPost />
          </Col>
          <Col md={3}>
            <Hashtag />
          </Col>
        </Row>
      </Container>
    </OnlyHeaderLayout>
  );
};

export default Profile;
