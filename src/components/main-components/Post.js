//@flow
import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import { PostProfile } from '../sub-components/PostProfile';
import PostContent from '../sub-components/PostContent';
import { PostActions } from '../sub-components/PostActions';

type Props = {
  content: Object
};
const Post = (props: Props) => {
  const { username, datetime, likes, liked, comments } = props.content;
  return (
    <View style={styles.postContainer}>
      <PostProfile username={username} datetime={datetime} />
      <PostContent content={props.content} />
      <PostActions liked={liked} likes={likes} comments={comments} />
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#ffffff',
    marginBottom: 4,
    width: width
  }
});

export { Post };
