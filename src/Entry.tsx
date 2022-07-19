import AuthProvider from '@components/AuthContext/AuthContext';
import EntryNavigator from '@navigation/EntryNavigator';
import React, {FC} from 'react';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Entry
 **/

const Entry: FC<IProps> = () => {
  return (
    <AuthProvider>
      <EntryNavigator />
    </AuthProvider>
  );
};

export default Entry;
