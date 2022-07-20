import React, {FC} from 'react';

import AuthProvider from '@components/AuthContext/AuthContext';
import EntryNavigator from '@navigation/EntryNavigator';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Entry
 **/

/**
 * The Entry function is a React functional component that returns a component that is wrapped in an
 * AuthProvider component
 * @returns The EntryNavigator is being returned.
 */
const Entry: FC<IProps> = () => {
  return (
    <AuthProvider>
      <EntryNavigator />
    </AuthProvider>
  );
};

export default Entry;
