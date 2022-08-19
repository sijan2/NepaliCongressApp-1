import React, {FC} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@redux/store/globalStore';
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
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <SaveProvider>
            <EntryNavigator />
          </SaveProvider>
        </PersistGate>
      </Provider>
    </AuthProvider>
  );
};

export default Entry;
