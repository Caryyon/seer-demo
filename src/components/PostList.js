import React from "react";
import { useSelector } from "react-redux";
import { Card as BlueCard } from "@blueprintjs/core";
import styled from "styled-components";

const StonkList = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
// consume a blueprint component
// add custom styles
const Card = styled(BlueCard)`
  width: 33vw;
  min-width: 200px;
`;

export const PostsList = () => {
  const posts = useSelector((state: object): string => {
    return state.wallstreetbets;
  });
  const renderedPosts = posts.map((post, i) => (
    <Card key={i} interactive>
      <h3>Ticker: {post.ticker}</h3>
      <h5>comments: {post.no_of_comments}</h5>
    </Card>
  ));

  return <StonkList>{renderedPosts}</StonkList>;
};
