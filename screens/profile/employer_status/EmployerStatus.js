import React from 'react';
import { StyleSheet,} from 'react-native';
import { View, Text } from '../../../components';

function EmployerStatus({navigation}) {
  return (
    <View style={styles.container}>
      <Text caption accent bold>Employer Status</Text>
    </View>
  );
}

export default EmployerStatus;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
