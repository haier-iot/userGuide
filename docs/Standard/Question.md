
!> **更新时间**：{docsify-updated} 


**1. 用户登录后控制设备报“Token不是由此应用创建，未通过token验证”**

?> 答：app用户登录时header头中的client_id的传值，需在登录后调用平台服务时的header头中的client_id的传值保持一致性，平台服务会检查用户登录授权的accessToken与client_id请求客户端ID的一致性。


**2. 登录时提示密码错误，重置密码后输入新密码依然提示密码错误**

?> 答：生产环境账号登录，提示密码错误后，不要重复尝试超过5次，输错密码5次后账号被锁定，锁定时间1小时，期间不能登录，app端报错账号密码错误。


**3. 用户设备绑定时报“G20910”**

?> 答：G20910表示非安全设备校验失败，解决方法：非安全设备绑定：
	1、设备必须在线<br/>
	2、设备上报版本信息时间不大于20分钟，即小于等于20分钟。<br/>
	3、针对app调用UWS服务接口进行绑定时可增加重试机制增加绑定成功率。


**4. 用户设备绑定时报“G20904”**

?> 答：G20904表示已超过绑定数量，解决方法：一个用户只能最多绑定300个设备，超过300个不允许绑定

**5. 用户设备绑定时报“G20908”**

?> 答：G20908表示设备已过安全期，解决方法：重新配网进行绑定操作。


**6. 应用服务调用设备管理服务企业版（udse）时报404错误**

?> 答：404（未找到）请求失败，请求所希望得到的资源未被在服务器上发现。解决方法：首先对照接口文档，检查请求参数、方法等是否正确；其次确定对要控制的设备是否获取授权，应用服务器的IP是否添加到IOT平台白名单。


**7. 账号被锁定，请稍后重试**

?> 答：当密码输错超过5次时，账号会自动被锁定，1小时后自动解锁，锁定期间不能再登录、使用忘记密码功能

**8. 设备断电重连或配置重连到平台，通过平台接口查到的设备上下线有延迟，不同步？**

?> 答：平台网关有3分钟的时延判断，3分钟检测不到设备上报的心跳、状态等消息才判定为离线


**9. 平台对于设备MAC地址区分大小写吗？**

?> 答：平台对设备MAC是区分大小写的，若平台存储MAC地址为大写，而使用小写字母MAC地址调用平台相关服务会出错。

**10. 绑定设备的时候设备加密数据（data）指的是什么？**

?> 答：此参数为设备连接云平台，平台颁发给设备的安全key信息，可通过UDSK中getDeviceBindInfo接口获得key值。


**11. 标准模型与非标准模型如何区分？**

?> 答：标准模型设备是指通过海极网创建的硬件设备，在线生成的设备功能协议文档，设备TYPEID一般以2开头。<br/>
非标准模型设备主要是在海极网之前通过线下人工编写方式生成的设备功能协议文档，通常叫6位码设备，设备TYPEID一般以1或0开头。


**12. token不存在问题排查**

?> 答：a) 环境问题，请检测app使用的网络情况，如APP登录访问到了开发者环境，但请求其他接口时网络切换到生产环境，出现此问题。<br/>
b) token自然失效，token有效期是25天。<br/>
c) 可能调用了退出用户接口，退出接口会删除token。

**13. 调用平台的uds，ufm，udse，ums，等uws服务相关接口报签名错误**

?> 答：a)平台uws服务的签名算法为sign  = sha256（url+ body+appId+appKey+timestamp），待签名字符串中的body必须过滤空格，回车字符。待签名字符串中appkey使用对应环境的值，开发appkey 在联调，开发者环境中使用，生产使用生产appkey。待签名字符串中timestamp，最好是当前时间戳。url为接口地址，端口号之后的部分，不包括get方法的参数。<br/>
b) 签名错误还有一个原因，新申请的appId可能因为没有同步到各个环境造成appkey等信息缺失，可反馈平台由技术人员解决。

**14. 第三方账号登录失败**

?> 答：a) 如果调用集团用户中心的服务，联系集团用户中心解决。<br/>
b) 如果是云对云对接，入口为云平台，由云平台用户系统负责。如登录失败，需先分析是否为这个返回提示，如
{"retCode":"22108","retInfo":"登陆失败[{\"ret\":-23,\"msg\":\"token is invalid\"}]","userId":null}
retInfo为第三方平台验证接口返回的提示，以此可判断错误的原因




[^-^]:常用图片注释