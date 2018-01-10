
import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
console.log(process.env.NODE_ENV)

/* layout */
import Layout from '../views/layoutEnt/Layout';

/* error page */
const Err404 = _import('error/404');
const Err401 = _import('error/401');
const Announcement = _import('announcement/announcement')
const Query = _import('announcement/announcement/query')
const Show = _import('announcement/announcement/show')
Vue.use(Router);
/**
  * icon : 菜单图标
  * hidden : true不显示在菜单栏
  * redirect : noredirect 为不重定向
  * noDropdown : true 不显示子菜单
  * meta : { role: ['admin'] }  will control the page role
  **/

    export const constantRouterMap = [
        { path: '/404', component: Err404, hidden: true },  //假地址时重定向
        { path: '/401', component: Err401, hidden: true },  //无权限时重定向

        {
            path: '/',
            //component: Layout,
            redirect: '/announcement/index/query',  //重定向到默认首页
        
            hidden: true,
            
        },
        {
            path: '/announcement',
            //component: Layout,
            redirect: '/announcement/index/query',  //重定向到默认首页
        
            hidden: true,
            
        },
        {
            path: '/announcement',
            component: Layout,
            ///redirect: 'noredirect',
            name: '',
            // icon: 'EXCEL',
            noDropdown: true,
            children: [
                { 
                    path: 'index', component: Announcement, name: '示例表格',children:[
                        {path:'query',component:Query,name:'查询'},
                        {path:'show',component:Show,name:'显示'}
                    ] 
                },
            ]
            //children: [{ path: 'readme', component: Readme, name: '系统说明' }]
        },
        // {
        //     path: '/announcement',
        //     component: Layout,
        //     ///redirect: 'noredirect',
        //     name: '',
        //     // icon: 'EXCEL',
        //     //noDropdown: true,
        //     children: [{ path: 'index', component: Announcement, name: '示例表格' }]
        //     //children: [{ path: 'readme', component: Readme, name: '系统说明' }]
        // }
        //{ path: '*', redirect: '/404', hidden: true }
        
    ]
 const router = new Router({
  mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [
  
];
export default router 