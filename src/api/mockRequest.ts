/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2022-01-02 17:13:05
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-03 01:33:23
 */
import { commonApi } from '@/interface/common'
export const mockRequest = (params: { [key: string]: any }, data: commonApi) => {
  console.log(`params`, params);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 300);
  });
};
