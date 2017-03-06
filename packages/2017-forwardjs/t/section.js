import React from "react";
import { Slide, Heading, Text } from "spectacle";
export default class SlideSection extends Slide {
  render() {
    const { title, subtitle } = this.props;
    return (
      <Slide transition={["zoom"]} bgColor="primary">
        <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          {title}
        </Heading>
        <Text margin="10px 0 0" textColor="tertiary" size={1} bold>
          {subtitle}
        </Text>
      </Slide>
    );
  }
}
