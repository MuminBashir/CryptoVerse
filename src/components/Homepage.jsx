import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { CryptoCurrencies, News } from "./";

import { useGetCryptosQuery } from "../services/cryptoapi";

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading...";

  return (
    <>
      <Title level={2} className="Heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={5} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(5)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(5)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market Cap" value={millify(5)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h Volume" value={millify(5)} />
        </Col>
      </Row>
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <CryptoCurrencies simplified={true} />
      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News
        </Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      <News simplified={true} />
    </>
  );
};

export default Homepage;
