import axios from 'axios';
import {btoa} from 'react-native-quick-base64';

import {baseUrl, url} from '@constants/baseUrl/baseUrl';
import {PASSWORD, USERNAME} from '@constants/userInfo/userInfo';

const user = USERNAME;
const pass = PASSWORD;
const auth = btoa(`${user}:${pass}`);
export const GET = async () => {
  const response = await axios.get(`${baseUrl}${url}/1/10`, {
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  return response.data;
};
