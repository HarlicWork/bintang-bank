import { StyleProp } from 'react-native';

import FastImage, { FastImageProps, ImageStyle } from 'react-native-fast-image';

/* eslint-disable-next-line */
export interface ImageProps {
  customStyles?: StyleProp<ImageStyle>;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'center';
  source: FastImageProps['source'];
}

export function Image({
  customStyles,
  resizeMode = 'contain',
  source,
}: ImageProps) {
  return (
    <FastImage style={customStyles} resizeMode={resizeMode} source={source} />
  );
}

export default Image;
