import React, {FC} from 'react';
import Entry from './src/Entry';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @App
 **/

/**
 * `const App: FC<IProps> = () => { return <Entry />; };`
 *
 * The `App` function is a React component that returns the `Entry` component
 */
const App: FC<IProps> = () => {
  return <Entry />;
};

export default App;
