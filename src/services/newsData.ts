import {btoa} from 'react-native-quick-base64';

import {baseUrl} from '@constants/baseUrl/baseUrl';
import {PASSWORD, USERNAME} from '@constants/userInfo/userInfo';

export const GET = async (url: any) => {
  const user = USERNAME;
  const pass = PASSWORD;
  // base-64 encryption
  const auth = btoa(`${user}:${pass}`);
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      headers: {
        Authorization: `Basic ${auth}`,
      },
    });
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.error(error);
  }
};
