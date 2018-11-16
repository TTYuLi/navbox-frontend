<template>
    <a-layout style="height: 100%">
      <a-layout-sider 
        collapsible
        breakpoint="lg"
        collapsedWidth="48"
        :trigger="null"
        @collapse="onCollapse"
        @breakpoint="onBreakpoint">
        <a-menu 
          theme="dark" 
          :openKeys="openKeys"
          :defaultSelectedKeys="['1']" 
          mode="inline" 
          @openChange="onOpenChange"
          style="margin-top: 16px;">
          <a-sub-menu key="sub1">
            <span slot="title"><span>计费管理</span></span>
            <a-menu-item key="1">
              <i class="iconfont icon-user" style="margin-right: 10px; font-size: 22px;"></i>
              <span class="nav-text">账户管理</span>
            </a-menu-item>
            <a-menu-item key="2">
              <i class="iconfont icon-order1" style="margin-right: 10px; font-size: 22px;"></i>
               <span class="nav-text">订单管理</span>
            </a-menu-item>
            <a-menu-item key="3">
              <i class="iconfont icon-bill1" style="margin-right: 10px; font-size: 22px;"></i>
              <span class="nav-text">账单管理</span>
            </a-menu-item>
            <a-menu-item key="4">
              <i class="iconfont icon-deal1" style="margin-right: 10px; font-size: 22px;"></i>
              <span class="nav-text">交易管理</span>
            </a-menu-item>
            <a-menu-item key="5">
              <i class="iconfont icon-price1" style="margin-right: 10px; font-size: 22px;"></i>
              <span class="nav-text">交易管理</span>
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu  key="sub2" >
            <span slot="title"><span>用户访问管理</span></span>
            <a-menu-item key="6">
              <i class="iconfont icon-price1" style="margin-right: 10px; font-size: 22px;"></i>
              <span class="nav-text">租户管理</span>
            </a-menu-item>
            <a-menu-item key="7">
              <i class="iconfont icon-user1" style="margin-right: 10px; font-size: 22px;"></i>
              <span class="nav-text">用户管理</span>
            </a-menu-item>
            <a-menu-item key="8">
              <i class="iconfont icon-limit" style="margin-right: 10px; font-size: 22px;"></i>
              <span class="nav-text">后台权限管理</span>
            </a-menu-item>
          </a-sub-menu>
           
        </a-menu>
        <div class="buttom">
          {{user}}
          <a-divider type="vertical" />
          <a @click="logout" style="width: 30px; display: inline-block">
            <a-icon type="logout" />
          </a>
        </div>
      </a-layout-sider>
      <a-layout>
        <a-layout-content style="padding: 20px 50px;">
          Content
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>

<script>
export default {
  data() {
    return {
      user: 'admin',
      isCollapsed: false,
      openKeys: ['sub1'],
      rootSubmenuKeys: ['sub1', 'sub2'],
    }
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    onOpenChange (openKeys) {
      const latestOpenKey = openKeys.find(key => this.openKeys.indexOf(key) === -1)
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys
      } else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : []
      }
    },
    logout() {
      this.$router.push('/login');

      console.log('退出登陆');
    }
  }
}
</script>

<style>
  .buttom {
    position: absolute;
    bottom: 0px;
    text-align: center;
    display: block;
    width: 100%;
    margin: 15px 0;
    color: white;
    font-size: 12px;
}
</style>
