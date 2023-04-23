<template>
  <footer class="app-footer">
      <div class="contact">
          <div class="container">
              <dl>
                   <dt>客户服务</dt>
                   <dd><i class="iconfont icon-kefu"></i> 在线客服</dd>
                   <dd><i class="iconfont icon-question"></i> 问题反馈</dd>
              </dl>
              <dl>
                    <dt>关注我们</dt>
                    <dd><i class="iconfont icon-weixin"></i> 公众号</dd>
                    <dd><i class="iconfont icon-weibo"></i> 微博</dd>
                    </dl>
                    <dl>
                    <dt>下载APP</dt>
                    <dd class="qrcode"><img src="../assets/images/qrcode.jpg" /></dd>
                    <dd class="download">
                        <span>扫描二维码</span>
                        <span>立马下载APP</span>
                        <a href="javascript:;">下载页面</a>
                    </dd>
                </dl>
                <dl>
                    <dt>服务热线</dt>
                    <dd class="hotline">400-0000-000 <small>周一至周日 8:00-18:00</small></dd>
                </dl>
          </div>
      </div>
     <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-footer01"></i>
            <span>价格亲民</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer02"></i>
            <span>物流快捷</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-footer03"></i>
            <span>品质新鲜</span>
          </a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">售后服务</a>
            <a href="javascript:;">配送与验收</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">搜索推荐</a>
            <a href="javascript:;">友情链接</a>
          </p>
          <p>CopyRight © 小兔鲜儿</p>
        </div>
      </div>
    </div>
      
  </footer>
</template>

<script>
export default {
    name:'AppFooter'
}
</script>

<style scoped lang="less">
.app-footer {
    // overflow: hidden;
    background-color: #f5f5f5;
    padding-top: 20px;
    .contact{
        background: #fff;
        .container{
            display:flex;
            padding:60px 0 40px 25px;
            
            dl{
                height:190px;
                border-right:1px solid #f2f2f2;
                padding:0 72px;
                color: #999;
                text-align:center;
                &:first-child{
                    padding-left:0;
                }
                &:last-child{
                    border-right:none;
                    padding-right:0;
                }
                dt{
                    font-size: 18px;
                    line-height:1;
                }
                dd{
                   margin: 36px 12px 0 0;
                   float:left;
                   width:92px;
                   height:92px;
                   border:1px solid #ededed;
                   
                   .iconfont{
                       font-size:42px;
                       display:block;
                       color:#666;
                   }
                   &:hover{
                       .iconfont{
                        color: @xtxColor;
                       }
                   }
                   &:last-child{
                       margin-right:0;
                   }
                }
                .qrcode{
                    width: 92px;
                    height: 92px;
                    padding: 7px;
                    border: 1px solid #ededed;
                }
                .download{
                    border:none;
                    padding-top: 5px;
                    font-size: 14px;
                    // width: auto;
                    // height: auto;
                    span{
                        display:block;
                        text-align: left;
                    }
                    a{
                        border:1px solid #ededed;
                        border-radius:2px;
                        color:#999;
                        display:block;
                        padding:10px;
                        margin-top: 5px;
                        line-height: 1;
                        // background-color: @xtxColor;
                    }
                }
                .hotline{
                    font-size:20px;
                    font-weight: 700;
                    color:#666;
                    border:none;
                    width:auto;
                    height:auto;
                    padding-top:20px;
                    small{
                        display:block;
                        padding-top:5px;
                        font-weight: 400;;
                        font-size:15px;
                        color:#999;
                    }
                }

            }
        }
    }
    .extra{
        background-color: #333;
        .slogan{
            display:flex;
            justify-content: space-around;
            height:178px;
            border-bottom: 1px solid #434343;
            align-items: center;
            a{
              color:#fff;
              height:58px;
              font-size:28px;
              line-height:1;
              i{
                  font-size:50px;
                  vertical-align: middle;       
              }
              span{
                color:#fff;
                margin-left:10px;
              }
            }
            
        }
    }
    .copyright{
        text-align: center;
        height:170px;
        padding-top:40px;
        color:#999;
        font-size:15px;
        p{
            margin-bottom:20px;
        }
        a {
            color: #999;
            display:inline-block;
            // width:100px;
            padding:0 10px;
            line-height:1;
            ~a{
                border-left:1px solid #fff;
            }
        }
        
    }
}
</style>