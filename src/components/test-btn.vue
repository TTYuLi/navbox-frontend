<template>
  <div>
    <a-card class="white-bg" style="display: inline-block;margin: 30px; width: 500px">

      <a-button type="primary">默认</a-button>  
      <a-divider type="vertical" />

       <a-button type="wb"> <a-icon type="left" /> 白底</a-button>
       <a-divider type="vertical" />

      <a-button type="bb">蓝底</a-button>
      <a-divider type="vertical" />

      <a-button type="line" size="small">手动录入订单</a-button>
      <a-divider type="vertical" />
    </a-card>
    <a-card class="gb" style="display: inline-block;margin: 30px; width: 500px">
      <a-button-group>
        <a-button type="primary">L</a-button>
        <a-button>M</a-button>
        <a-button>M</a-button>
        <a-button>R</a-button>
      </a-button-group>
    </a-card>
    <a-card class="white-bg-title" style="display: inline-block;margin: 30px; width: 500px" title="Card Title">
      <a href="#" slot="extra">more</a>
      <P>123</P>
      <P>123</P>
      <P>123</P>
    </a-card>
    <a-card class="simple-gb" style="display: inline-block;margin: 30px; width: 500px" >
      <P>123</P>
      <P>123</P>
      <P>123</P>
    </a-card>
    <a-button type="bb" @click="showModal">show modal</a-button>
    <a-modal
      v-model="visible"
      title="Title"
      onOk="handleOk">
      <template slot="footer">
        <a-button key="back" @click="handleCancel" type="wb">取消</a-button>
        <a-button key="submit" type="bb" :loading="loading" @click="handleOk">
          确定
        </a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      visible: false,
    }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.loading = true;
      setTimeout(() => {
        this.visible = false;
        this.loading = false;
      }, 3000);
    },
    handleCancel(e) {
      this.visible = false;
    },
  }
}
</script>

<style>

</style>

