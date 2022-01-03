/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2022-01-02 21:34:46
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2022-01-02 21:38:44
 */
export interface commonApi {
  ret: number,
  data: { [key: string]: any }[],
  msg?: string
}