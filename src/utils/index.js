import axios from 'axios';
import * as _ from 'lodash';

const BASE_URL = 'https://reading-club-backend.herokuapp.com';

export default class HttpRequest {
  static _getRequestUrl(path) {
    const requestUrl = `${BASE_URL}${path}`;
    return requestUrl;
  }

  /**
   * Post service
   * @param {*} path, like '/book/borrow', start with '/'
   * @param {*} data
   */
  static async postService(path, data = {}) {
    const requestUrl = HttpRequest._getRequestUrl(path);

    try {
      // const ret = await axios.post(requestUrl, JSON.stringify(data));
      const ret = await axios({
        method: 'POST',
        url: requestUrl,
        headers: {
          'Content-Type': 'application/json',
          Accept: '*/*',
        },
        data: JSON.stringify(data || {}),
      });
      console.log('Request result ', ret);
      return ret;
    } catch (error) {
      console.error(`Request error: ${error.message}`);
      return _.get(error, 'response', error);
    }
  }

  /**
   * Get service
   * @param {*} path
   * @param {*} data {a:1,b:2} will be transformed to ?a=1&b=2
   */
  static async getService(path, data = {}) {
    const requestUrl = HttpRequest._getRequestUrl(path);
    try {
      const ret = await axios.get(requestUrl, { params: data });
      return ret;
    } catch (error) {
      console.error(`Request error: ${error.message}`);
      return _.get(error, 'response', error);
    }
  }

  static async generalService(path, method, data = {}) {
    if (!method) {
      throw new Error('Http request method is not valid!');
    }

    const requestUrl = HttpRequest._getRequestUrl(path);

    try {
      const ret = await axios({
        method,
        url: requestUrl,
        headers: {
          'Content-Type': 'application/json',
        },
        params: data,
        data: JSON.stringify(data || {}),
      });

      return ret;
    } catch (error) {
      console.error(`Request error: ${error.message}`);
      return _.get(error, 'response', error);
    }
  }
}
