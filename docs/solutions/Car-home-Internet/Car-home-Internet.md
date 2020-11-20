---
title: 车家互联
---

介绍

![合作介绍][introduce]

::: tip
合作方在开始工作前，需登陆智家开放平台（海极网：www.haigeek.com）进行注册企业帐号，并完成合作方应用创建并开通下面介绍的服务；
若有疑问，可在线提交工单咨询或联系合作对接商务进行沟通；
:::


## AUI对接
平台提供SDK及API2种对接方式，支持设备控制、场景控制能力外，支持标准的语音对话技能，如天气查询、音乐播放等；

``` java
生产地址：http://ai.haier.net:11000/ai-open-cloud
生产测试地址：http://ai.haier.net:11000/ai-open-cloud-test
开发者环境地址：http://kaifazhe.ai.uhomelive.com
```

#### nlp交互
::: tip
支持设备控制、场景控制等NLP功能；
其中from字段需要线下沟通获取；吉利为 geely
:::

##### 1、接口定义
> **接入地 址：**  `http://域名/ai-open-cloud/cloud/nlpControl/{from}`

 **HTTP Method：** POST  
from=geely  吉利  

**输入参数**  
| 类型         | 参数名         | 位置  | 必填|说明|
| ------------- |:-------------:|:-----:|:-------------:|:-------------:|
|String	|query|	Body|	必填	|输入语料|
|String	|deviceId	|Body|	否	|多台相同设备需填写，其他语料不需要| 
|String	|realQuery|Body|	否	|原始语料| 

``` java
Header：
systemId:SV-XXXX-0000
appVersion:2016060401
```

**输出参数**  

|   类型      |     参数名      | 位置  |必填 |说明|
| ------------- |:----------:|:-----:|:--------:|:---------:|
| String |  retCode  |   Body  |  必填  | 响应代码 |
|String|	retInfo|	Body|	必填	|响应说明|


##### 2、请求样例  
**用户请求**
``` java
clientId:356877020056553-08002700DC94
sequenceId:08002700DC94-15110519074300001
accessToken:TGT1OY0RUUAH5D242SB68E9WX0W930
sign:bd4495183b97e8133aeab2f1916fed41
timestamp:1446639090139
language:zh-cn
timezone:8
POST
结构体参数
{
 "query": "请帮我打开空调"
}
```
**请求应答**

```java
{
 "retCode": "00000",
 "retInfo": "操作成功" }或{
 "retCode": "00000",
 "retInfo": "已经帮您打开空调"
}
```
##### 3、错误码  

|   retCode     |    retInfo     | 备注 |
| ------------- |:----------:|:-----:|
|111111| 内部错误||
|I00001-00001| 传入参数错误或缺失||
|I00004-00000 |设备未授权 |平台没有接入该设备，不能进行命令控制|
|I00004-00001 |系统暂时无法执行您的指令，请稍后再试|开关机互斥，或设备不在线|
|I00004-00002 |您的设备没有这种功能，请换一种说法试试|输入了错误的动作指令导致，设备命令没有找到|
|I00004-00003 |系统暂时无法执行您的指令，请稍后再试动|作命令的参数不正确|
|I00004-00004 |要操作的设备还未被绑定绑定设备||
|I00004-00007| 系统暂时无法为您执行指令，请稍后再试||
|I00004-00008 |系统暂时无法获取您绑定的设备|设备未绑定成功信息，请稍后再试|
|I00004-00009 |系统暂时无法连接到您的设备，请检查设备是否正常|网络异常|
|I00004-00010|您的设备不在线，请检查设备是否正常联网||
|I00004-00011|系统中暂时没有您的设备，请先绑定设备|未绑定设备|
|I00004-00012|在您指定的位置没有设备，请换一种说法试试|设备未指定位置|
|I00004-00013|系统暂时无法连接到您的设备，请检查设备是否正常|网络异常|
|I00009-00001 |解析文本超长 |开放平台解析文本超长|
|A00001-21051 |验证失败 |SystemId 验证失败|
|B00002-21005| appVersion 长度不能超过 32位，请重新登录|appVersion 长度不能超过 32 位|
|B00002-21006 |appVersion 为 空，请求参数有误，请重新登录|appVersion 为空，请求参数有误|
|B00002-21010 |SequenceId 为 空，请求参数有误，请重新登录 |SequenceId 为空，请求参数有误|
|B00002-21011 |SequenceId 长度 需 要 6-32 位，请重新登录|SequenceId 长度需要 6-32 位|
|B00002-21024 |请求中accessToken 为 空||
|B00007-21018 Token| 不存在，未通过 token 验证||
|B00007-21019 Token| 已过期，未通过 token 验证||


#### 获取用户语音可控设备列表
> **接入地 址：**  `http://域名/ai-open-cloud/cloud/getUserDeviceListControl/{from}`

 **HTTP Method：** Get
from=geely  吉利  

**输入参数**  
无

``` java
Header：
systemId:SV-XXXX-0000
appVersion:2016060401
```

**输出参数**  

|   类型      |     参数名      | 位置  |必填 |说明|
| ------------- |:----------:|:-----:|:--------:|:---------:|
| String |  retCode  |   Body  |  必填  | 响应代码 |
|String|	retInfo|	Body|	必填	|响应说明|
|String|	devices|	device[]|	必填	|设备列表|

##### 2、请求样例  
**用户请求**
``` java
Header：
systemId:SV-XXXX-0000
appVersion:2016060401
clientId:356877020056553-08002700DC94
sequenceId:08002700DC94-15110519074300001
accessToken:TGT1OY0RUUAH5D242SB68E9WX0W930
sign:bd4495183b97e8133aeab2f1916fed41
timestamp:1446639090139
language:zh-cn
timezone:8
POST
```
**请求应答**

```java
{
 "retCode": "00000",
 "retInfo": "成功!",
 " devices": [
 {
 "deviceId": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
 "deviceName": "卧室空调",
 "deviceType": " AirConditioner",
 "room": "卧室",
 "online": false,
 "icon":"图标 url"
 }
 ] }
```


## GUI对接

### 家庭查询

::: tip
智家业务是基于家庭开展的相关业务交互，基于物理家庭空间、家庭成员、家庭设备、家庭场景等构建的交互，开展设备/场景相关智家业务资源获取前，需了解智家家庭信息，及基于家开展平台合作对接；
:::
家庭介绍信息可参见：https://haier-iot.github.io/doc/#/zh-cn/FamilyManage/Introduce
#### 家庭列表查询
家庭成员查询加入的家庭列表信息；

接口使用文档详见：https://haier-iot.github.io/doc/#/zh-cn/FamilyManage/FamilyManage?id=家庭成员查询加入的家庭信息列表


### 设备控制
::: tip
设备控制基于海尔标准模型进行控制，目前支持冰、空、热等品类模板，及部分小品类的型号模板方式进行控制； 
设备profile定义文件，联系对接商务获取；
:::
#### 家庭设备列表查询

>查询用户家庭下所有设备清单，清单范围内，可通过是否可控属性，识别当前用户可控的设备范围；

接口使用文档详见：  
https://haier-iot.github.io/doc/#/zh-cn/FamilyManage/FamilyDeviceManage??id=家庭成员查询我的所有家庭设备

#### 设备控制
>单属性控：控制设备的某一个功能； 组命令控：同时控制一组功能；

接口使用文档详见：  
https://haier-iot.github.io/doc/#/zh-cn/DevicesManage/real-time?id=用户写属性-异步接口-标准模型-单命令写操作）  
https://haier-iot.github.io/doc/#/zh-cn/DevicesManage/real-time?id=用户设备操作-异步接口-（标准模型-组命令操作）

#### 设备状态查询
>通过API可查询设备的数字设备数据；通过数据可供页面呈现使用；  

接口使用文档详见：  
https://haier-iot.github.io/doc/#/zh-cn/DevicesManage/dataquery?id=设备影子查询  

### 场景控制

#### 家庭场景查询
>可查询特定家庭下的场景清单；
接口使用文档详见：
https://haier-iot.github.io/doc/#/zh-cn/IFTTTManage/IFTTT?id=查询家庭下场景列表

#### 手动场景控制
>手动类场景可CP使用用户token进行控制；
接口使用文档详见：
https://haier-iot.github.io/doc/#/zh-cn/IFTTTManage/IFTTT?id=手动执行用户场景

[introduce]:/solutions/_media/car-home-internet.png
