import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card as BlueCard } from "@blueprintjs/core";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import { getPosts } from "../redux/reducers/wallstreetbets";

const GrowingNumbers = styled(animated.div)`
  font-size: 18px;
`;

function Number(props) {
  const { number } = useSpring({
    reset: false,
    from: { number: 0 },
    number: props.amount || 1,
    delay: 200,
    config: config.molasses,
  });

  return (
    <GrowingNumbers>
      {number.to((n) => n.toFixed(props.fixed || 0))}
    </GrowingNumbers>
  );
}
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

export function PostsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts({ url: "/apps/reddit" }));
  }, [dispatch]);
  const posts = useSelector((state: object): string => {
    return state.wallstreetbets;
  });
  const renderedPosts = posts.map((post, i) => (
    <Card key={i} interactive>
      <h3>Ticker: {post.ticker}</h3>
      <h5>
        comments: <Number amount={post.no_of_comments} />
      </h5>
    </Card>
  ));

  return <StonkList>{renderedPosts}</StonkList>;
}
