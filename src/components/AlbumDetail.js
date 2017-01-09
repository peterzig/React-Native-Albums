import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSelection from './CardSelection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSelection>
        <Text>{props.album.title}</Text>
      </CardSelection>
    </Card>
  );
};

export default AlbumDetail;
