import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './TabNavigator';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryNavigator
 **/

const EntryNavigator: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default EntryNavigator;
