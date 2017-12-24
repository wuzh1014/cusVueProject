/**
 * 配置编译环境和线上环境之间的切换
 *
 * xxxUrl: 域名地址
 * routerMode: 路由模式
 *
 */
let routerMode;

if (process.env.NODE_ENV == 'development') {
  routerMode = 'hash';
}else{
  routerMode = 'hash';
}
export {
	routerMode,
}
