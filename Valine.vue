<template>
  <div class="my-comment">
    <h3 class="my-comment-header">评论区</h3>
    <div class="vcomments" :id="uuid"></div>
  </div>
</template>

<script>
import uuid from "uuid";
export default {
  name: "Valine",
  data() {
    return {
      uuid: "id" + uuid(),
      Valine:null
    };
  },
  watch: {
    $route: {
      handler() {
        this.init();
      },
      deep:true
    }
  },
  created() {
    this.uuid = "id" + uuid();
  },
  mounted() {
    import('valine')
    .then(pkg => {
      this.Valine = pkg.default
      setTimeout(() => {
      this.init();
    }, 500);
    })
    
  },
  methods: {
    init() {
      new this.Valine({
        el: "#" + this.uuid,
        // other config
        placeholder: "來都來了不踩一下嗎？",
        notify: true, // 邮件提醒!!!
        // verify: true, // 验证码
        appId: "biy9BdGhrJvaGPLeJxKxtTKp-gzGzoHsz", // your appId
        appKey: "SxgLYQuY2khBvNSicesIXSd0", // your appKey
        // visitor: true,
        avatar: "retro",
        meta: ["nick", "mail"],
        recordIP: true,
        pageSize: 20,
        path:this.$route.path,
        ...COMMENT_OPTIONS
      });
    }
  }
};
</script>

<style lang="stylus">
.my-comment {
  padding: 20px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 20px, rgba(0, 0, 0, 0.05) 0px 0px 20px;
  background: rgba(83, 86, 87, 0.09);
  .my-comment-header {
    margin: 0;
    padding-left: 10px;
    color: #b0b6b4ab;
  }
  #veditor {
    background: rgba(237, 234, 234, 0.08);
    color: #bbbebe;
  }
  .v .vwrap {
    border: none !important;
  }
  .v .vbtn {
    border: 2px solid #ddd;
    padding: 0.4em 1.5em;
  }
  .vcard {
    padding-right: 10px;
  }
  .v .vlist .vcard .vhead .vsys {
    padding: 0em 0.5em;
    background: #ededed14;
  }
  .v .vwrap .vcontrol {
    padding-top: 0;
  }
  .v * {
    line-height: 1.5;
  }
  .v a.at {
    color: #1abc9c;
  }
  .v .vlist .vcard .vimg {
    border: none;
  }
  .v .vlist .vcard .vquote {
    border: none;
  }
  .v .vlist .vcard .vcontent.expand:before {
    background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 4%, 0.9));
  }
  .v .vlist .vcard .vcontent.expand:after {
    background: hsla(0, 0%, 4%, 0.9);
    color: #bebebe;
  }
  .v * {
    color: #999;
  }
}
.light {
  .my-comment {
    background: #ffffff78;
    .v .vlist .vcard .vcontent.expand:before {
      background: linear-gradient(180deg, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.9));
    }
    .v .vlist .vcard .vcontent.expand:after {
      background: hsla(0, 0%, 100%, 0.9);
      color: #828586;
    }
    #veditor {
      background: #edeaead9;
      color: #fff;
    }
    .my-comment-header {
      color: #333;
    }
  }
}
</style>