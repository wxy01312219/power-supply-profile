import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err);
};

export default new VueRouter({
    routes: [
        {
            path: '/', // 程序启动默认路由
            component: () => import('@/components/common/Whole.vue'),
            meta: { title: '整体页面布局' },
            redirect: '/order', // 重定向到首页
            children: [
                {
                    path: '/Home',
                    component: () => import('@/page/Home.vue'),
                    meta: { title: '首页' }
                },
                // 订单分析
                {
                    path: '/order',
                    component: () => import('@/page/order/index.vue'),
                    meta: { title: '订单分析' },
                    redirect: '/order/charge-details', // 该配置是若点击选择一级菜单时，默认选中并跳转到该一级菜单下的第一个二级菜单
                    children: [
                        {
                            path: 'charge-details',
                            component: () => import('@/page/order/order-report/charge-details.vue'),
                            meta: { title: '充电成功记录明细' }
                        },
                        {
                            path: 'charging-information',
                            component: () => import('@/page/order/order-report/charging-information.vue'),
                            meta: { title: '充电记录尖峰平谷信息' }
                        },
                        {
                            path: 'charging-vehicle',
                            component: () => import('@/page/order/order-report/charging-vehicle.vue'),
                            meta: { title: '车辆充电尖峰平谷信息' }
                        }
                    ]
                },
                // 电站分析
                {
                    path: '/power',
                    component: () => import('@/page/power-station/index'),
                    meta: { title: '电站分析' },
                    redirect: '/power/power-platform', // 该配置是若点击选择父目录时，默认选中该父目录下的子路径页面
                    children: [
                        // 电站监控
                        {
                            path: 'power-platform',
                            component: () => import('@/page/power-station/power-station-analysis/power-platform.vue'),
                            meta: { title: '监控平台' }
                        },
                        {
                            path: 'power-monitoring',
                            component: () => import('@/page/power-station/power-station-analysis/power-monitoring.vue'),
                            meta: { title: '电站实时监控' }
                        },
                        {
                            path: 'power-situation',
                            component: () => import('@/page/power-station/power-station-analysis/power-situation.vue'),
                            meta: { title: '电站情况一览' }
                        },
                        // 电站分析
                        {
                            path: 'power-historical-data',
                            component: () => import('@/page/power-station/power-station-monitoring/power-historical-data.vue'),
                            meta: { title: '电站历史数据' }
                        },
                        {
                            path: 'power-data-analysis',
                            component: () => import('@/page/power-station/power-station-monitoring/power-data-analysis.vue'),
                            meta: { title: '电站数据分析' }
                        }
                    ]
                },
                // 结算分析
                {
                    path: '/settlement',
                    component: () => import('@/page/settlement-analysis/index.vue'),
                    meta: {
                        title: '结算分析'
                    },
                    redirect: '/settlement/settlement-detail',
                    children: [
                        {
                            path: 'settlement-detail',
                            component: () => import('../page/settlement-analysis/settlement-report/settlement-detail.vue'),
                            meta: {
                                title: '大客户报表'
                            }
                        }
                    ]
                },
                {
                    path: '/i18n', // 国际化组件
                    component: () => import('@/components/common/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    path: '/permission', // 权限页面
                    component: () => import('@/page/Permission.vue'),
                    meta: {
                        title: '权限测试',
                        permission: true
                    }
                },
                {
                    path: '/404',
                    component: () => import('@/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import('@/page/403.vue'),
                    meta: { title: '403' }
                }
            ]
        },
        {
            path: '/Login', // 登录页面
            component: () => import('@/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
