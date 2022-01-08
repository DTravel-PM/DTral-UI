import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import { OnlyHeaderLayout } from "../../layout";
import { Header } from "../../components/common";
import styles from "../../styles/Place.module.css";
import { Sidebar } from "../../components/Sidebar";
import { CardPost } from "../../components/CardPost";
import { Hashtag } from "../../components/Hashtag";
import { useQuery } from "react-query";
import { getOneLocation } from "../api/place";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Place: NextPage = () => {
  const dataSidebar = {
    name: "Pao's Sapa Leisure Hotel",
    description:
      "Nestled in a favourable hillside position, overlooking the spectacular view of majestic mountains, moss-green rice terrace plots and the poetic Muong Hoa valley, Pao's Sapa Leisure Hotel is the most luxurious five-star hotel in Sapa town. Owned and operated by CTX Holdings, Pao's Sapa Leisure Hotel offers 223 rooms featuring the cultural identity of Sapa, subtly blended with high-class rooms and impeccable facilities. Possessing charming curves in harmony with its natural surroundings, Pao's Sapa Leisure Hotel is a fabulous destination for a visit that will awaken your senses.",
    followers: 12345,
    following: 65487,
  };
  const router = useRouter();

  const { id } = router.query;

  const { data } = useQuery(["one-location", { id: id }], getOneLocation);
  const [location, setLocation] = useState(data);
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (data) {
      setLocation(data);
    }
  }, [id]);

  const handleChangeFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <OnlyHeaderLayout header={<Header />}>
      <Container>
        <Row>
          <Col md={12}>
            <div className={styles.fb_place_block}>
              <div className={styles.place_img}>
                <a>
                  <img style={{ objectFit: "cover" }} src={data?.thumbnail} />
                </a>

                <div
                  style={{
                    position: "absolute",
                    top: 20,
                    right: 20,
                    cursor: "pointer",
                  }}
                >
                  {favorite ? (
                    <AiFillHeart
                      onClick={handleChangeFavorite}
                      size={40}
                      color="red"
                    />
                  ) : (
                    <AiOutlineHeart
                      onClick={handleChangeFavorite}
                      size={40}
                      color="red"
                    />
                  )}
                </div>
              </div>
              <div className={styles.fb_place_block_menu}>
                <div className={styles.block_menu}>
                  <ul>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Photos</a>
                    </li>
                    <li>
                      <a href="#">Add to Plan</a>
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
            <Sidebar
              name={data?.sitename}
              description={data?.description}
              following={data?.commentcount}
              followers={data?.postcount}
            />
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

export default Place;
