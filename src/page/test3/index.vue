<template>
    <div class="aside">
        <el-aside>
            <SideMenu  :itemList="items"></SideMenu>
        </el-aside>
        <el-main class="main">
            <router-view></router-view>
        </el-main>
    </div>
</template>

<script>
import SideMenu from '@/components/sidemenu/SideMenu';
export default {
    components: {
        SideMenu
    },
    data() {
        return {
            items: [
                {
                    path: 'test3-1',
                    title: '二级菜单3-1'
                },
                {
                    path: 'test3-2',
                    title: '二级菜单3-2',
                    nextItems: [
                        {
                            index: 'test3-2-1',
                            title: '三级菜单3-2-1'
                        },
                        {
                            index: 'test3-2-2',
                            title: '三级菜单3-2-2'
                        },
                        {
                            index: 'test3-2-3',
                            title: '三级菜单3-2-3'
                        }
                    ]
                }
            ]
        }
    },
    methods:{
    }
};
</script>
<style lang="less" scoped>
.aside {
    width: 100%;
    height: 100%;
    .main {
        width: 100%;
        height: 100%;
    }
}
</style>
