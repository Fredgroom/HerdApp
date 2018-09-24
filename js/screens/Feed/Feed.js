import React from 'react';
import { View, Button, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { fonts } from '../../config/styles';

const Feed = ({ navigation }) => {
  return (
    <View>
      <View>
        <Button
          onPress={() => navigation.navigate('Promo')}
          title="link to Promo Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Event')}
          title="link to Event Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('AllEvents')}
          title="link to AllEvents Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('AllPromos')}
          title="link to AllPromos Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('AllVenues')}
          title="link to AllVenues Page"
        />
      </View>
      <View>
        <Button
          onPress={() => navigation.navigate('Venue')}
          title="link to Venue Page"
        />
      </View>

      <View>
        <Text>Sample text:</Text>
      </View>
      <View>
        <Text>No style applied</Text>
      </View>
      <View>
        <Text style={{ fontFamily: fonts.thin }}>Montserrat Thin</Text>
      </View>
      <View>
        <Text style={{ fontFamily: fonts.extraLight }}>
          Montserrat ExtraLight
        </Text>
      </View>
      <View>
        <Text style={{ fontFamily: fonts.light }}>Montserrat Light</Text>
      </View>
      <View>
        <Text style={{ fontFamily: fonts.regular }}>Montserrat Regular</Text>
      </View>
      <View>
        <Text style={{ fontFamily: fonts.semiBold }}>Montserrat SemiBold</Text>
      </View>
      <View>
        <Text style={{ fontFamily: fonts.bold }}>Montserrat Bold</Text>
      </View>
    </View>
  );
};

export default withNavigation(Feed);
