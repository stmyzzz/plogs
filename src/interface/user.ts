/*
 * @Description:
 * @version:
 * @Author: dlyan.ding
 * @Date: 2021-11-16 17:19:18
 * @LastEditors: dlyan.ding
 * @LastEditTime: 2021-11-24 14:44:40
 */

import Mock from "mockjs";
export interface UserProps {
  isLogin: boolean;
  name?: string;
  avatarUrl?: string;
}
export interface ColumProps {
  id: number;
  title: string;
  avatar: string;
  desc: string;
}
export interface plogContentProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createAt?: string;
  createAuthor: string;
  artId: number;
}
const homeCommonendCard = Mock.mock({
  "data|8": [
    {
      "id|+1": 1,
      title: "@ctitle",
      desc: "@cparagraph",
      avatar:
        "https://pic4.zhimg.com/v2-798eec71376070846e6a13646c779b76_is.jpg",
    },
  ],
});
export const homeCommonendCardList: ColumProps[] = homeCommonendCard.data;

export const plogContent = Mock.mock({
  "data|15": [
    {
      "id|+1": 1,
      title: "@ctitle",
      content: "@cparagraph",
      image:
        "https://pic4.zhimg.com/v2-798eec71376070846e6a13646c779b76_is.jpg",
      createAt: "@datetime",
      createAuthor: "@cname",
      "artId|+1": [1, 2, 3],
    },
  ],
});

export const plogContentList: plogContentProps[] = plogContent.data;
