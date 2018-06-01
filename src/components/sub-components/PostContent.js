//@flow
import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';
import { withNavigation } from 'react-navigation';

type Props = {
  photo: string,
  description: string,
  navigation: Object
};
class PostContent extends Component<Props> {
  _renderViewMore(onPress) {
    return (
      <Text
        onPress={() => {
          this.props.navigation.navigate('Detail');
        }}
        style={{ color: '#80daff' }}
      >
        បន្តអាន
      </Text>
    );
  }
  _renderViewLess(onPress) {
    return (
      <Text onPress={onPress} style={{ color: '#80daff' }}>
        លាក់ខ្លះ
      </Text>
    );
  }

  render() {
    const { photo, description } = this.props;
    const { width } = Dimensions.get('window');
    return (
      <View>
        <View style={{ marginHorizontal: 10 }}>
          <ViewMoreText
            numberOfLines={4}
            renderViewMore={this._renderViewMore.bind(this)}
            renderViewLess={this._renderViewLess.bind(this)}
          >
            <Text>{description}</Text>
          </ViewMoreText>
        </View>
        <View style={{ marginTop: 5 }}>
          <Image
            style={{
              flex: 1,
              height: width * 3 / 5,
              width: width,
              marginBottom: 10
            }}
            source={{ uri: photo }}
            resizeMode={'cover'}
          />
        </View>
      </View>
    );
  }
}

export default withNavigation(PostContent);
