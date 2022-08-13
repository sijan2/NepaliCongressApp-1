import React, {FC} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator/StackNavigator';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @EntryNavigator
 **/

/**
 * It returns a NavigationContainer component that wraps a StackNavigator component
 * @returns A function component that returns a NavigationContainer with a StackNavigator
 */
const EntryNavigator: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default EntryNavigator;
