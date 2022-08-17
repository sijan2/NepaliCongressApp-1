import React, {FC} from 'react';
import globalStore from '@redux/store/globalStore';
import AuthProvider from '@components/ContextStore/AuthContext/AuthContext';
import EntryNavigator from '@navigation/EntryNavigator';
import SaveProvider from '@components/ContextStore/SavedProvider/SavedProvider';
import {Provider} from 'react-redux';

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
      <Provider store={globalStore}>
        <SaveProvider>
          <EntryNavigator />
        </SaveProvider>
      </Provider>
    </AuthProvider>
  );
};

export default Entry;
