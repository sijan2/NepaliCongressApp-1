import React, {FC} from 'react';

import AuthProvider from '@components/ContextStore/AuthContext/AuthContext';
import EntryNavigator from '@navigation/EntryNavigator';
import SaveProvider from '@components/ContextStore/SavedProvider/SavedProvider';

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
      <SaveProvider>
        <EntryNavigator />
      </SaveProvider>
    </AuthProvider>
  );
};

export default Entry;
