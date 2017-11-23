import axios from 'axios'
import '../config/http'
import {
  iclienturl, ifeng3gurl, commenturl, getUpItemUrl, getMidItemUrl, getBottomItemUrl
} from '../config/env'

export const doDataPost = (dataUrl, data) => axios.post(process.env.HTTP_PREFIX + dataUrl, data)

//export const getnews = (id,page,gv) => axios.post(iclienturl+'ClientNews', {id:id,page:page,gv:gv})
//新闻
export const getnews = (id,page,gv) => axios.post(iclienturl+'ClientNews?id='+id+'&page='+page+'&gv='+gv)
//轮播图
export const getcarousel = (url) => axios.get(ifeng3gurl+url)
// 热评
export const hotcomment = (page,url) => axios.get(commenturl+'/get?job=1&orderby=uptimes&order=DESC&p='+page+'&docurl='+url)
//新闻文章&&专题
export const getarticle = (url) => axios.post(iclienturl+url)
//首页新闻视频
export const videoitem = (guid) => axios.post(iclienturl+'api_phoenixtv_details?guid='+guid)
// 最新评论
export const newcomment = (page,url) => axios.post(commenturl+ '/get?job=1&order=DESC&orderBy=create_time&p='+page+'&docurl='+url)
