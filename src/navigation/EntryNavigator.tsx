import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryNavigator
 **/

const EntryNavigator: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default EntryNavigator;
