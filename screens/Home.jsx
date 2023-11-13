import React from "react";
import Layout from "../components/Layout";
import { Text } from "react-native";
import styled from "styled-components/native";
import { CountUp } from "use-count-up";
import { StatusBar } from "expo-status-bar";

const Home = () => {
  const date = new Date();
  const lastDate = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const totalSeconds = 24 * 60 * 60 * lastDate;
  const currentSeconds = date.getDate() * 24 * 60 * 60 + date.getHours() * 60 * 60 + date.getMinutes() * 60 + date.getSeconds();
  // console.log(date.getHours(), date.getMinutes(), date.getSeconds());
  console.log(currentSeconds);
  console.log(totalSeconds);
  const salary = 3000000;
  const salaryPerSeconds = salary / totalSeconds;
  const startSalary = salaryPerSeconds * currentSeconds;

  // const [currentSalary]

  return (
    <Layout>
      {/* <CountText>
        <CountUp isCounting formatter={(number) => new Intl.NumberFormat("ko-KR").format(number.toFixed(0))} start={startSalary} end={salary} duration={totalSeconds} />
      </CountText> */}
      <StatusBar style="light" />
    </Layout>
  );
};

const CountText = styled.Text`
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  margin-left: auto;
`;

export default Home;
