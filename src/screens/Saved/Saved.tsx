/* eslint-disable radix */
import React from 'react';
import {useSaved} from '@components/SavedProvider/SavedProvider';
import SavedNews from '@components/SavedNews/SavedNews';

/**
 * @author Nitesh Raj Khanal
 * @function @SavedScreen
 **/

/**
 * It returns a View component with a Text component inside of it
 * @returns A View component with a Text component nested inside.
 */

const reversedData = (data: any) => {
  return data.sort((a: any, b: any) => {
    const aInt = parseInt(a.time);
    const bInt = parseInt(b.time);
    if (aInt < bInt) {
      return 1;
    }
    if (aInt === bInt) {
      return 0;
    }
    if (aInt > bInt) {
      return -1;
    }
  });
};

const SavedScreen = () => {
  const {saved} = useSaved();
  const reversedNews = reversedData(saved);
  return <SavedNews data={reversedNews} />;
};

export default SavedScreen;
