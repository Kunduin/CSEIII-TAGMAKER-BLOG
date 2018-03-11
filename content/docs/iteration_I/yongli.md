---
title: "库存管理系统"
---

# 库存管理系统

### V2.0.0 最终版

#### 南京大学16级软件学院软工二第二组

**用例列表**

---
**目录**
- [库存管理系统](#%E5%BA%93%E5%AD%98%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F)
    - [一、 更新历史](#%E4%B8%80%E3%80%81-%E6%9B%B4%E6%96%B0%E5%8E%86%E5%8F%B2)
    - [二、引言](#%E4%BA%8C%E3%80%81%E5%BC%95%E8%A8%80)
        - [1.1 目的](#11-%E7%9B%AE%E7%9A%84)
        - [1.2 阅读说明](#12-%E9%98%85%E8%AF%BB%E8%AF%B4%E6%98%8E)
        - [1.3 参考文献](#13-%E5%8F%82%E8%80%83%E6%96%87%E7%8C%AE)
    - [三、用例列表](#%E4%B8%89%E3%80%81%E7%94%A8%E4%BE%8B%E5%88%97%E8%A1%A8)
    - [四、用例图](#%E5%9B%9B%E3%80%81%E7%94%A8%E4%BE%8B%E5%9B%BE)
    - [五、详细用例描述](#%E4%BA%94%E3%80%81%E8%AF%A6%E7%BB%86%E7%94%A8%E4%BE%8B%E6%8F%8F%E8%BF%B0)
        - [用例1：商品信息管理](#%E7%94%A8%E4%BE%8B1%EF%BC%9A%E5%95%86%E5%93%81%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86)
        - [用例2：库存查看](#%E7%94%A8%E4%BE%8B2%EF%BC%9A%E5%BA%93%E5%AD%98%E6%9F%A5%E7%9C%8B)
        - [用例3：库存盘点](#%E7%94%A8%E4%BE%8B3%EF%BC%9A%E5%BA%93%E5%AD%98%E7%9B%98%E7%82%B9)
        - [用例4：库存管理报单](#%E7%94%A8%E4%BE%8B4%EF%BC%9A%E5%BA%93%E5%AD%98%E7%AE%A1%E7%90%86%E6%8A%A5%E5%8D%95)
        - [用例5：库存报警单](#%E7%94%A8%E4%BE%8B5%EF%BC%9A%E5%BA%93%E5%AD%98%E6%8A%A5%E8%AD%A6%E5%8D%95)
        - [用例6：客户管理](#%E7%94%A8%E4%BE%8B6%EF%BC%9A%E5%AE%A2%E6%88%B7%E7%AE%A1%E7%90%86)
        - [用例7：制定进货单](#%E7%94%A8%E4%BE%8B7%EF%BC%9A%E5%88%B6%E5%AE%9A%E8%BF%9B%E8%B4%A7%E5%8D%95)
        - [用例8：制定销售单](#%E7%94%A8%E4%BE%8B8%EF%BC%9A%E5%88%B6%E5%AE%9A%E9%94%80%E5%94%AE%E5%8D%95)
        - [用例9：制定进货退货单](#%E7%94%A8%E4%BE%8B9%EF%BC%9A%E5%88%B6%E5%AE%9A%E8%BF%9B%E8%B4%A7%E9%80%80%E8%B4%A7%E5%8D%95)
        - [用例10：制定销售退货单](#%E7%94%A8%E4%BE%8B10%EF%BC%9A%E5%88%B6%E5%AE%9A%E9%94%80%E5%94%AE%E9%80%80%E8%B4%A7%E5%8D%95)
        - [用例11：制定付款单](#%E7%94%A8%E4%BE%8B11%EF%BC%9A%E5%88%B6%E5%AE%9A%E4%BB%98%E6%AC%BE%E5%8D%95)
        - [用例12：制定收款单](#%E7%94%A8%E4%BE%8B12%EF%BC%9A%E5%88%B6%E5%AE%9A%E6%94%B6%E6%AC%BE%E5%8D%95)
        - [用例13：银行账户管理](#%E7%94%A8%E4%BE%8B13%EF%BC%9A%E9%93%B6%E8%A1%8C%E8%B4%A6%E6%88%B7%E7%AE%A1%E7%90%86)
        - [用例14：制定现金费用单](#%E7%94%A8%E4%BE%8B14%EF%BC%9A%E5%88%B6%E5%AE%9A%E7%8E%B0%E9%87%91%E8%B4%B9%E7%94%A8%E5%8D%95)
        - [用例15：查看经营历程表](#%E7%94%A8%E4%BE%8B15%EF%BC%9A%E6%9F%A5%E7%9C%8B%E7%BB%8F%E8%90%A5%E5%8E%86%E7%A8%8B%E8%A1%A8)
        - [用例16：查看经营状况表](#%E7%94%A8%E4%BE%8B16%EF%BC%9A%E6%9F%A5%E7%9C%8B%E7%BB%8F%E8%90%A5%E7%8A%B6%E5%86%B5%E8%A1%A8)
        - [用例17：查看销售明细表](#%E7%94%A8%E4%BE%8B17%EF%BC%9A%E6%9F%A5%E7%9C%8B%E9%94%80%E5%94%AE%E6%98%8E%E7%BB%86%E8%A1%A8)
        - [用例18：期初建账](#%E7%94%A8%E4%BE%8B18%EF%BC%9A%E6%9C%9F%E5%88%9D%E5%BB%BA%E8%B4%A6)
        - [用例19：审批单据](#%E7%94%A8%E4%BE%8B19%EF%BC%9A%E5%AE%A1%E6%89%B9%E5%8D%95%E6%8D%AE)
        - [用例20：制定销售策略](#%E7%94%A8%E4%BE%8B20%EF%BC%9A%E5%88%B6%E5%AE%9A%E9%94%80%E5%94%AE%E7%AD%96%E7%95%A5)

## 一、 更新历史

<table>
   <tr>
      <td>更新日期</td>
      <td>更新内容</td>
   </tr>
   <tr>
      <td>17/09/17</td>
      <td>创建用例列表</td>
   </tr>
   <tr>
      <td>17/09/20</td>
      <td>完成详细用例描述，优化用例列表
      </td>
   </tr>
   <tr>
      <td>17/09/23</td>
      <td>优化详细用例描述，扩充用例个数至22个
   </tr>
    <tr>
      <td>17/09/24</td>
      <td>修正了几个用例描述
   </tr>
    <tr>
      <td>17/10/12</td>
      <td>修改了非法输入的表述
   </tr>
    <tr>
      <td>17/11/14</td>
      <td>调整了单据的正常流程与扩展流程
   </tr>
    <tr>
      <td>18/01/12</td>
      <td>整合了最终版
   </tr>
</table>

## 二、引言
### 1.1 目的
本文档描述了库存管理系统的用户需求
### 1.2 阅读说明
用例描述的模板参考《软件开发的技术基础卷二》
### 1.3 参考文献
UML2.0 语法，IEEE标准
## 三、用例列表

<table>
   <tr>
      <td>参与者</td>
      <td>用例</td>
   </tr>
   <tr>
      <td>库存管理人员</td>
      <td>1.商品信息管理<br/>2.库存查看<br/>3.库存盘点<br/>4.库存管理报单<br/>5.库存报警单</td>
   </tr>
   <tr>
      <td>进货销售人员</td>
      <td>
      6.客户管理<br/>
      7.制定进货单<br/>
      8.制定销售单<br/>
      9.制定进货退货单<br/>
      10.制定销售退货单<br/>
      </td>
   </tr>
   <tr>
      <td>财务人员</td>
      <td>
      11.制定付款单<br/>
      12.制定收款单<br/>
      13.银行账户管理<br/>
      14.制定现金费用单<br/>
      15.查看经营历程表<br/>
      16.查看经营状况表<br/>
      17.查看销售明细表<br/>
      18.期初建账</td>
   </tr>
   <tr>
      <td>总经理</td>
      <td>
      15.查看经营历程表<br/>
      16.查看经营状况表<br/>
      17.查看销售明细表<br/>
      19.审批单据<br/>
      20.制定销售策略</td>
   </tr>
   </tr>
    <td>其余</td>
    <td>
    21.消息查看<br/>
    22.用户管理<br/>
   </tr>
</table>

## 四、用例图
## 五、详细用例描述
- **ID**
    - 1
- **名称**
    - 商品信息管理
- **创建者**
    - 温曜铭
- **修改者**
    - 温曜铭
- **创建日期**
    - 17/09/09
- **修改日期**
    - 17/11/03
- **参与者**
    - 库存管理人员，目的是完善商品相关信息，管理商品分类与具体商品
- **触发条件**
    - 无
- **前置条件**
    - 仓库管理人员身份被识别并授权
- **后置条件**
    - 更新商品信息
- **优先级**
    - 高
- **正常流程**
    - 1.0 增加对象
        - 1.用户进入待添加对象的目录选择添加商品或添加商品分类的操作
        - 2.系统返回信息填写表格
            - a)需要填写的商品分类信息：
                - 名称（必选）
            - b)需要填写的商品信息：
                - 警戒值（默认值为10）
                - 名称（必填）
                - 型号（必填）
                - 初始库存数量（选填，缺省为0）
                - 进价（必填，默认为50）
                - 零售价（必填，默认为100）
        - 3.用户输入商品分类或商品的相关信息后选择提交选项
        - 4.系统增加商品分类或商品信息并显示更新信息
    - 1.1 删除对象
        - 1.用户选中要删除的对象选择删除（当对象刚创建出来创建信息有误并且没有与别的模块产生交互的情况下可以被删除，交互包括与单据产生关联，商品分类中已添加了第一个对象，一旦产生了交互，例如在销售单上出现则不允许删除。）
        - 2.系统返回“是否确认删除，一旦删除不可更改”
        - 3.用户确认删除
        - 4.系统更新信息并显示更新后信息
    - 1.2 修改对象
        - 1.用户选中要修改的对象后选择修改
        - 2.系统返回编辑表格，其中可修改的字段为商品分类的名称，商品的名称、型号、进价、零售价、警戒值
        - 3.用户进行编辑后选择提交选项
        - 4.系统更新信息并显示更新信息
    - 1.3 查看商品分类
        - 1.用户选中商品分类选择查看
        - 2.系统返回该分类的所有子项目
    - 1.4 查看商品
        - 1.用户选中商品选择查看
        - 2.系统返回商品的名称、编号、型号、库存数量、进价、零售价、警戒值、最近进价、最近零售价
        - 3.用户选择返回上一级界面
        - 4.系统返回上一级界面
    - 1.5 关键字查询
        - 1.用户通过编号、名称、型号查询商品
        - 2.系统返回商品的名称、编号、型号、库存数量、进价、零售价、警戒值、最近进价、最近零售价
        - 3.用户选择返回上一级界面
        - 4.系统返回上一级界面


- **扩展流程**
    - 1.0.1a 第一次添加
        - 1.用户第一次选择添加操作
        - 2.系统只允许添加商品分类
    - 1.0.1b 已有商品
        - 1.在该目录中已经有商品的情况下用户选择添加操作
        - 2.系统只允许用户添加新的商品
    - 1.0.1c 已有商品分类
        - 1.在该目录中已经有商品分类的情况下用户选择添加操作
        - 2.系统只允许用户添加新的商品分类
    - 3a 信息不完整
        - 1.必选或必填项目信息缺失时用户选择提交
        - 2.系统返回“请填写完整信息”后返回编辑界面
    - 4a 非法输入提示
        - 1.管理人员输入非法数据并提交：
            - 整数部分超过8位
            - 小数部分超过2位
            - 负数
            - 除小数点以外的其它非数字字符
        - 2.系统返回“非法输入”并返回编辑界面
    - 4b 重名
        - 1.用户选择提交
        - 2.检测出重名，系统返回“名称重复”并返回编辑界面（商品名称与型号都相同则视为重名）
    - 1.1.1a 不可删除
        - 1.用户选择对已标记但不可删除的对象进行删除
        - 2.系统返回“该对象不可删除”
 
- **特殊需求**
    - 无


- **ID**
    - 2
- **名称**
    - 库存查看
- **创建者**
    - 温曜铭
- **修改者**
    - 温曜铭
- **创建日期**
    - 17/09/09
- **修改日期**
    - 17/11/01
- **参与者**
    - 库存管理人员，查看一段时间内的库存数量与财务的变化
- **触发条件**
    - 无
- **前置条件**
    - 仓库管理人员身份被识别并授权
- **后置条件**
    - 无
- **优先级**
    - 中
- **正常流程**
    - 1.用户选择查看库存功能
    - 2.系统返回表格，包括起始时间和结束时间
    - 3.用户设定要查看的时间段（用户可以选择的时间段由系统提供一个可选择的范围而不是任意时间，该系统建立的最初时间点作为时间的下限，时间上限为操作的当天日期的最后一个整数小时）后选择提交
    - 4.系统返回该时间段内出/入库数量、进/出货销售金额与库存数量的合计
    - 5.用户选择返回上一级界面
    - 6.系统返回上一级界面

- **扩展流程**
    - 3a 时间设定错误
        - 1.用户选择结束时间早于开始时间
        - 2.系统提示“结束时间早于开始时间”
- **特殊需求**
    - 无

- **ID**
    - 3
- **名称**
    - 库存盘点
- **创建者**
    - 温曜铭
- **修改者**
    - 温曜铭
- **创建日期**
    - 17/09/09
- **修改日期**
    - 17/11/01
- **参与者**
    - 仓库管理人员，目的是盘点库存，方便管理人员了解信息以便采取一些后续的措施对库存进行调整
- **触发条件**
    - 无
- **前置条件**
    - 仓库管理人员身份被识别并授权
- **后置条件**
    - 无
- **优先级**
    - 中
- **正常流程**
    - 1.0 浏览全部信息
        - 1.用户选择浏览全部信息
        - 2.系统获取当前操作时间并返回当天的各种商品的名称、型号、库存数量、进货均价、销售均价、出厂日期（默认按名称排序）
        - 3.用户可以选择按照下列字段排序：
            - a)名称
            - b)库存数量
            - c)销售均价
            - d)进货均价
            - e)出厂日期
        - 4.系统返回排序后数据
        - 5.用户选择返回上一级界面
        - 6.系统返回上一级界面
    - 1.1 关键字查找
        - 1.用户通过编号、名称、型号查找或按分类查找的方式进行查询某商品的库存快照
        - 2.系统返回该商品的库存快照
        - 3.用户选择返回上一级界面
        - 4.系统返回上一级界面
    - 1.2 导出excel
        - 1.用户选择“将库存快照导出到Excel”
        - 2.系统返回Excel表格
- **扩展流程**
    无

- **特殊需求**
    - 无

- **ID**
    - 4
- **名称**
    - 库存管理报单
- **创建者**
    - 吴新宇
- **修改者**
    - 温曜铭
- **创建日期**
    - 17/09/10
- **修改日期**
    - 17/11/03
- **参与者**
    - 库存管理人员创建各种表单交付审核
- **触发条件**
    - 无
- **前置条件**
    - 库存管理人员身份被识别并授权
- **后置条件**
    - 无
- **优先级**
    - 中
- **正常流程**
    - 1.库存管理人员选择所要创建的表单类型
        - 表单类型包括：
            - a) 库存赠送单
            - b) 库存报损单
            - c) 库存报溢单
    - 2.系统返回表单框架，显示可填写部分
        - 可填部分：
            - a)商品(必选)
            - b)商品数量(必填)
            - c)赠送对象(必选，从已有用户中选择，仅限库存赠送单包含此字段)
    - 3.0 提交单据
        - 1.用户填写单据并选择提交
        - 2.更新系统并展示单据，系统交付审核，审核通过后系统更改库存信息
    - 3.1 保存单据
        - 1.用户填写单据并选择保存
        - 2.系统保存单据为草稿
    
- **扩展流程**
    - 1.0a
        - 1.用户新建单据时选择打开草稿
        - 2.系统打开之前用户保存的草稿单据
    - 3a 非法输入提示
        - 1.管理人员输入非法数据并提交：
            - 整数部分超过8位
            - 小数部分超过2位
            - 负数
            - 除小数点以外的其它非数字字符
        - 2.系统返回“非法输入”并返回编辑界面
    - 3c 中途退出
        - 1.用户选择提交选项之前退出系统     
        - 2.系统返回“保存/不保存/取消”
        - 3.1 保存
            - 1.用户选择保存
            - 2.系统保存草稿并返回上一级界面
        - 3.2 不保存
            - 1.用户选择不保存
            - 2.系统不作任何修改并返回上一级界面
        - 3.3 取消
            - 1.用户选择取消
            - 2.系统不退出并返回编辑界面
    - 3d 信息不完整
        - 1.必选或必填项目信息缺失时用户选择提交
        - 2.系统不允许提交
- **特殊需求**
    - 无

- **ID**
    - 5
- **名称**
    - 库存报警单
- **创建者**
    - 吴新宇
- **修改者**
    - 温曜铭
- **创建日期**
    - 17/09/10
- **修改日期**
    - 17/11/01
- **参与者**
    - 库存管理人员收到某商品低于警戒线的提示，防止库存不够的情况
- **触发条件**
    - 无
- **前置条件**
    - 库存管理人员身份被识别并授权，某商品警戒数量已经设置
- **后置条件**
    - 无
- **优先级**
    - 高
- **正常流程**
    - 1.用户设置警戒值阈值
    - 2.系统更新警戒值
    - 3.销售／进货退货／报损／赠送单据通过审批后某种商品的库存数量低于警戒数量
    - 4.系统向库存管理人员发送消息，消息内容为一个表格，包括低于警报值的商品表单和每件商品缺损的数额和该商品现在的库存数量
- **扩展流程**
    - 参见用例21消息查看
- **特殊需求**
    - 消息阅读只需一步。

---

- **ID**
    - 6
- **名称**
    - 客户管理
- **创建者**
    - 徐一舟
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 进货销售人员，目的是为了管理客户
- **触发条件**
    - 无
- **前置条件**
    - 销售人员被识别并授权
- **后置条件**
    - 更新客户信息
- **优先级**
    - 高
- **正常流程**
    - 1.0 进货销售人员选择增加功能
        - 1.销售人员输入要增加的客户信息（包括分类，级别，姓名，电话，地址，邮编，电子邮箱，默认业务员，应付额度）并选择提交
        - 2.系统更新信息并显示更新后的信息
    - 1.1 进货销售人员选择查询功能
        - 1.销售进货人员输入客户编号、姓名进行模糊查找
        - 2.系统显示客户信息，包括：
            - 编号
            - 分类（进货商、销售商）
            - 级别（五级，一级普通用户，五级VIP客户）
            - 姓名
            - 电话
            - 地址
            - 邮编
            - 电子邮箱
            - 应付额度
            - 应收
            - 应付
            - 默认业务员
    - 1.2 进货销售人员选择修改功能
        - 1.进货销售人员选择要修改的信息
        - 2.系统返回修改表格，其中可修改的信息包括分类，级别，姓名，电话，地址，邮编，电子邮箱，默认业务员，应付额度
        - 3.进货销售人员输入修改内容并选择提交
        - 4.系统更新信息并显示更新后的信息
    - 1.3 进货销售人员选择删除功能
        - 1.进货销售人员选中要删除的对象执行删除
        - 2.系统返回“是否确认删除”
        - 3.进货销售人员选择确认删除选项
        - 4.系统更新信息并显示更新后的信息

- **扩展流程**
    - 1.0.1/1.2.3a 系统检查输入
        - 1.进货销售人员输入非法数据，包括：
            - 电话中包含非数字
            - 应付额度中包含非数字
            - 邮编中包含非数字
            - 数字的整数部分超过8位
            - 数字的小数部分超过2位
            - 数字为负数
        - 2.系统提示“非法输入”返回编辑界面
    - 1.2.3b 客户与数据库中已有客户的姓名和电话重复
        - 1.用户提交后检测出重名
        - 2.系统返回“存在重名”并返回编辑界面
    - 1.2.2a 修改应付额度时检查用户权限，仅最高权限可修改
        - 1.用户非最高权限修改应付额度
        - 2.系统提示无权限修改该信息
    - 1.3a 不可删除
        - 1.进货销售人员选择删除不可删除的客户
        - 2.系统返回“不可删除”
- **特殊需求**
    - 无

---

- **ID**
    - 7
- **名称**
    - 制定进货单
- **创建者**
    - 徐一舟
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 进货销售人员，目的是为了反应进货情况
- **触发条件**
    - 发生了进货行为
- **前置条件**
    - 进货销售人员被识别和授权
- **后置条件**
    - 系统保存进货单并将其设置为已提交状态
- **优先级**
    - 高
- **正常流程** 
    - 1.进货销售人员选择填写进货单
    - 2.系统显示单据模板，包括：
        - 单据编号（JHD-yyyyMMdd-xxxxx）
        - 供应商（从客户列表选择，仅显示进货商）
        - 仓库（手动输入）
        - 操作员（当前登录用户，不可修改）
        - 入库商品列表，包括：
            - 商品编号（选择商品后自动显示）
            - 名称（从商品选择界面进行选择）
            - 型号（选择商品后自动显示）
            - 数量（手动输入）
            - 单价（默认为商品信息中的进价）
            - 金额（自动计算）
            - 备注（手动输入）
        - 备注（手动输入）
        - 总额合计（自动计算）
    - 3.进货销售人员输入单据的各项可修改内容并选择确认提交选项
    - 4.系统保存单据并将单据设置为待审核状态，显示更新后的单据并返回上级界面。单据通过审批后，更改库存数据和客户的应收应付数据

- **扩展流程**
    - 1a 用户选择填写进货单草稿
        - 1.系统内有进货单草稿，系统返回进货单草稿
        - 2.系统内无进货单草稿，系统返回新建单据模板
    - 3a 系统检测输入
        - 1.进货销售人员输入非法数据并提交：
            - 整数部分超过8位
            - 小数部分超过2位
            - 负数
            - 除小数点以外的其它非数字字符
        - 2.系统提示“非法输入”返回编辑界面
    - 3b 保存草稿
        - 1.用户选择保存草稿
        - 2.系统将单据保存为草稿，显示更新后信息并返回上一级界面
    - 3.2a 进货销售人员未保存便选择退出
        - 1.系统提示是否保存当前单据及是否确认退出
        - 2.1 保存
            - 2.1.1 用户选择保存并退出
            - 2.1.2 系统保存当前单据草稿并返回上级界面
        - 2.2 不保存
            - 2.2.1 用户选择不保存并退出
            - 2.2.2 系统不保存当前单据并返回上级界面
        - 2.3 取消
            - 2.3.1 用户选择取消退出
            - 2.3.2 系统返回编辑界面

- **特殊需求**
    - 无

---

- **ID**
    - 8
- **名称**
    - 制定销售单
- **创建者**
    - 徐一舟
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 进货销售人员，目的是为了反应销售情况
- **触发条件**
    - 发生了销售行为
- **前置条件**
    - 进货销售人员被识别和授权
- **后置条件**
    - 系统保存销售单并将其设置为已提交状态
- **优先级**
    - 高
- **正常流程**
    - 1 进货销售人员选择填写销售单
    - 2 系统显示单据模板，包括：
        - 单据编号（XSD-yyyyMMdd-xxxxx）
        - 客户（从客户列表选择，仅显示销售商）
        - 业务员(初始为默认业务员)
        - 操作员（当前登录用户，不可修改）
        - 仓库（手动输入）
        - 出货商品清单，包括：
            - 编号（选择商品后自动显示）
            - 名称（从商品选择界面选择）
            - 型号（选择商品后自动显示）
            - 数量（手工输入）
            - 单价（默认为商品信息里的销售价，可修改）
            - 金额（自动生成）
            - 商品备注（手动填写）
        - 折让前总额（自动计算）
        - 折让（自动计算）
        - 使用代金券金额（手动填写）
        - 折让后总额（自动计算）
        - 备注（手动填写）
    - 3.进货销售人员输入单据的各项可修改内容并选择确认提交选项
    - 4.系统保存单据并将单据设置为待审核状态，显示更新后的单据并返回上级界面。单据通过审批后，更改库存数据和客户的应收应付数据

- **扩展流程**
    - 1a 用户选择填写销售单草稿
        - 1.系统内有销售单草稿，系统返回销售单草稿
        - 2.系统内无销售单草稿，系统返回新建单据模板
    - 3a 系统检测输入
        - 1.进货销售人员输入非法数据并提交：
            - 整数部分超过8位
            - 小数部分超过2位
            - 负数
            - 除小数点以外的其它非数字字符
        - 2.系统提示“非法输入”返回编辑界面
    - 3b 保存草稿
        - 1.用户选择保存草稿
        - 2.系统将单据保存为草稿，显示更新后信息并返回上一级界面
    - 3.2a 进货销售人员未保存便选择退出
        - 1.系统提示是否保存当前单据及是否确认退出
        - 2.1 保存
            - 2.1.1 用户选择保存并退出
            - 2.1.2 系统保存当前单据草稿并返回上级界面
        - 2.2 不保存
            - 2.2.1 用户选择不保存并退出
            - 2.2.2 系统不保存当前单据并返回上级界面
        - 2.3 取消
            - 2.3.1 用户选择取消退出
            - 2.3.2 系统返回编辑界面

- **特殊需求**
    - 无

---

- **ID**
    - 9
- **名称**
    - 制定进货退货单
- **创建者**
    - 徐一舟
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 进货销售人员，目的是为了反应进货退货情况
- **触发条件**
    - 发生了进货退货行为
- **前置条件**
    - 进货销售人员被识别和授权
- **后置条件**
    - 系统保存进货退货单并将其设置为已提交状态
- **优先级**
    - 高
- **正常流程**
    - 1 进货销售人员选择填写进货单
    - 2 系统显示单据模板，包括：
        - 单据编号（JHTHD-yyyyMMdd-xxxxx）
        - 供应商（从客户列表选择，仅显示进货商）
        - 仓库（手动输入）
        - 操作员（当前登录用户，不可修改）
        - 入库商品列表，包括：
            - 商品编号（选择商品后自动显示）
            - 名称（从商品选择界面进行选择）
            - 型号（选择商品后自动显示）
            - 数量（手动输入，不可超过原进货单）
            - 单价（默认为商品信息中的进价）
            - 金额（自动计算）
            - 备注（手动输入）
        - 备注（手动输入）
        - 总额合计（自动计算）
    - 3.进货销售人员输入单据的各项可修改内容并选择确认提交选项
    - 4.系统保存单据并将单据设置为待审核状态，显示更新后的单据并返回上级界面。单据通过审批后，更改库存数据和客户的应收应付数据


- **扩展流程**
    - 1a 用户选择填写进货退货单草稿
        - 1.系统内有进货退货单草稿，系统返回进货退货单草稿
        - 2.系统内无进货退货单草稿，系统返回新建单据模板
    - 3a 系统检测输入
        - 1.进货销售人员输入非法数据并提交：
            - 整数部分超过8位
            - 小数部分超过2位
            - 负数
            - 除小数点以外的其它非数字字符
        - 2.系统提示“非法输入”返回编辑界面
    - 3b 保存草稿
        - 1.用户选择保存草稿
        - 2.系统将单据保存为草稿，显示更新后信息并返回上一级界面
    - 3.2a 进货销售人员未保存便选择退出
        - 1.系统提示是否保存当前单据及是否确认退出
        - 2.1 保存
            - 2.1.1 用户选择保存并退出
            - 2.1.2 系统保存当前单据草稿并返回上级界面
        - 2.2 不保存
            - 2.2.1 用户选择不保存并退出
            - 2.2.2 系统不保存当前单据并返回上级界面
        - 2.3 取消
            - 2.3.1 用户选择取消退出
            - 2.3.2 系统返回编辑界面

- **特殊需求**
    - 无

---
- **ID**
    - 10
- **名称**
    - 制定销售退货单
- **创建者**
    - 徐一舟
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/10/18
- **参与者**
    - 进货销售人员，目的是为了反应销售退货情况
- **触发条件**
    - 发生了销售退货行为
- **前置条件**
    - 进货销售人员被识别和授权
- **后置条件**
    - 系统保存销售退货单并将其设置为已提交状态
- **优先级**
    - 高
- **正常流程**
    - 1 进货销售人员选择填写销售退货单
    - 2 系统显示单据模板，包括：
        - 单据编号（XSTHD-yyyyMMdd-xxxxx）
        - 客户（从客户列表选择，仅显示销售商）
        - 业务员(初始为默认业务员)
        - 操作员（当前登录用户，不可修改）
        - 仓库（手动输入）
        - 出货商品清单，包括：
            - 编号（选择商品后自动显示）
            - 名称（从商品选择界面选择）
            - 型号（选择商品后自动显示）
            - 数量（手工输入,不可超过原销售单）
            - 单价（默认为商品信息里的销售价，可修改）
            - 金额（自动生成）
            - 商品备注（手动输入）
        - 总额（自动计算）   
        - 备注（手动输入）
    - 3.进货销售人员输入单据的各项可修改内容并选择确认提交选项
    - 4.系统保存单据并将单据设置为待审核状态，显示更新后的单据并返回上级界面。单据通过审批后，更改库存数据和客户的应收应付数据

- **扩展流程**
    - 1a 用户选择填写销售退货单草稿
        - 1.系统内有销售退货单草稿，系统返回销售退货单草稿
        - 2.系统内无销售退货单草稿，系统返回新建单据模板
    - 3/3.1a 系统检测输入
        - 1.进货销售人员输入非法数据并提交：
            - 整数部分超过8位
            - 小数部分超过2位
            - 负数
            - 除小数点以外的其它非数字字符
        - 2.系统提示“非法输入”返回编辑界面
    - 3.2a 进货销售人员未保存便选择退出
        - 1.系统提示是否保存当前单据及是否确认退出
        - 2.1 保存
            - 2.1.1 用户选择保存并退出
            - 2.1.2 系统保存当前单据草稿并返回上级界面
        - 2.2 不保存
            - 2.2.1 用户选择不保存并退出
            - 2.2.2 系统不保存当前单据并返回上级界面
        - 2.3 取消
            - 2.3.1 用户选择取消退出
            - 2.3.2 系统返回编辑界面

- **特殊需求**
    - 无

---
### 用例11:制定付款单

- **ID**
    - 11
- **名称**
    - 制定付款单
- **创建者**
    - 徐一舟
- **修改者**
    - 吴新宇
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 财务人员，目的是制定并提交一份付款单据进而完成一次付款任务
- **触发条件**
    - 财务人员需要发起付款
- **前置条件**
    - 财务人员被识别和授权
- **后置条件**
    - 系统保存并提交一份付款单等待总经理审核
- **优先级**
    - 高
- **正常流程**
    - 1.0 新建付款单
        - 1.用户选择新建付款单
        - 2.系统显示单据模板，包含以下信息：
            - 1.单据编号（系统自动生成，格式为FKD-yyyyMMdd-xxxxx）
            - 2.客户（必选；从客户列表选择，同时包含供应商和销售商）
            - 3.操作员（当前登录用户，不可修改）
            - 4.转账列表，默认只有一个条目，包括：
                - 1.银行账户（必选；从已有账户中选择）
                - 2.转账金额（必填，与银行账户一一对应）
                - 3.备注（选填）
            - 5.总额汇总（系统自动计算转账金额之和）
    - 2.0 保存单据
        - 1.用户输入一定单据内容并选择保存
        - 2.系统保存单据为草稿并反馈保存成功，返回上一界面
    - 2.1 提交单据
        - 1.用户完成所有单据输入并选择提交
        - 2.系统系统反馈提交成功，并返回上一界面
- **扩展流程**
    - 1.0a
        - 1.用户新建单据时选择打开草稿
        - 2.系统打开之前用户保存的草稿单据
    - 2.0/2.1
        - 1a.非法输入提示
            - 1.用户输入非法数据并提交：
                - 整数部分超过8位
                - 小数部分超过2位
                - 负数
                - 除小数点以外的其它非数字字符
            - 2.系统返回“非法输入”并返回编辑界面
        - 1b.用户不保存就退出
            - 1.系统弹出提示“保存/不保存/取消”
            - 2.1 保存
                - 1.用户选择保存
                - 2.系统保存并返回上一级界面
            - 2.2 退出
                - 1.用户选择
                - 2.系统不保存并返回上一级界面
            - 2.3 取消
                - 1.用户选择取消
                - 2.系统不退出并返回编辑界面
    - 2.1
        - 1d.信息不完整
            - 1.用户填写信息不完整时选择提交
            - 2.系统不允许提交
- **特殊需求**
    - 无

---

### 用例12:制定收款单

- **ID**
    - 12
- **名称**
    - 制定收款单
- **创建者**
    - 徐一舟
- **修改者**
    - 吴新宇
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 财务人员，目的是制定并提交一份收款单据进而完成一次收款任务
- **触发条件**
    - 财务人员发起收款
- **前置条件**
    - 财务人员被识别和授权
- **后置条件**
    - 系统保存并提交一份收款单等待总经理审核
- **优先级**
    - 高
- **正常流程**
    - 1.0 新建收款单
        - 1.用户选择新建收款单
        - 2.系统显示单据模板，包含以下信息：
            - 1.单据编号（系统自动生成，格式为SKD-yyyyMMdd-xxxxx）
            - 2.客户（必选；从客户列表选择，同时包含供应商和销售商）
            - 3.操作员（当前登录用户，不可修改）
            - 4.转账列表，默认只有一个条目，包括：
                - 1.银行账户（必选；从已有账户中选择）
                - 2.转账金额（必填，与银行账户一一对应）
                - 3.备注（选填）
            - 5.总额汇总（系统自动计算转账金额之和）
    - 2.0 保存单据
        - 1.用户输入一定单据内容并选择保存
        - 2.系统保存单据为草稿并反馈保存成功，返回上一界面
    - 2.1 提交单据
        - 1.用户完成所有单据输入并选择提交
        - 2.系统系统反馈提交成功，并返回上一界面
- **扩展流程**
    - 1.0a
        - 1.用户新建单据时选择打开草稿
        - 2.系统打开之前用户保存的草稿单据
    - 2.0/2.1
        - 1a.非法输入提示
            - 1.用户输入非法数据并提交：
                - 整数部分超过8位
                - 小数部分超过2位
                - 负数
                - 除小数点以外的其它非数字字符
            - 2.系统返回“非法输入”并返回编辑界面
        - 1b.中途退出
            - 1.系统弹出提示“保存/不保存/取消”
            - 2.1 保存
                - 1.用户选择保存
                - 2.系统保存并返回上一级界面
            - 2.2 退出
                - 1.用户选择
                - 2.系统不保存并返回上一级界面
            - 2.3 取消
                - 1.用户选择取消
                - 2.系统不退出并返回编辑界面
    - 2.1
        - 1d.信息不完整
            - 1.用户填写信息不完整时选择提交
            - 2.系统不允许提交
- **特殊需求**
    - 无

---

### 用例13:银行账户管理

- **ID**
    - 13
- **名称**
    - 银行账户管理
- **创建者**
    - 徐一舟
- **修改者**
    - 吴新宇
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 最高权限财务人员，目的是对银行账户进行增删改查的管理
- **触发条件**
    - 无
- **前置条件**
    - 最高权限财务人员被识别和授权
- **后置条件**
    - 系统保存修改后的账户条目与信息
- **优先级**
    - 高
- **正常流程**
    - 1.用户进入银行账户管理界面
    - 2.系统显示银行账户列表
    - 3.0 增加账户
        - 1.用户选择新增一个账户
        - 2.系统返回新账户的可填信息，包括：
            - 1.新增账户的账户名
            - 2.新增账户的余额
        - 3.用户填写完毕并选择提交选项
        - 4.系统保存新增账户并显示更新后的信息
    - 3.1 查询账户
        - 1.用户在搜索框中输入关键字并选择查找
        - 2.系统返回满足关键字的模糊搜索结果列表
    - 3.2 修改账户
        - 1.用户在选择一个账户并选择修改选项
        - 2.系统返回旧帐户可修改的信息，包括：
            - 1.旧帐户的帐户名
        - 3.用户填写完毕选择提交选项
        - 4.系统保存修改后的账户并显示更新后的信息
- **扩展流程**
    - 3.0
        - 3a.重名
            - 1.用户所填的新增账户的账户名已经存在
            - 2.系统返回“该账户名已经存在”并返回编辑界面
        - 1a.非法输入：
            - 1.用户输入非法数据并提交：
                - 整数部分超过8位
                - 小数部分超过2位
                - 负数
                - 除小数点以外的其它非数字字符
            - 2.系统返回“非法输入”并返回编辑界面
        
- **特殊需求**
    - 无


---

### 用例14:制定现金费用单

- **ID**
    - 14
- **名称**
    - 制定现金费用单
- **创建者**
    - 徐一舟
- **修改者**
    - 吴新宇
- **创建日期**
    - 17/09/13
- **修改日期**
    - 17/11/04
- **参与者**
    - 财务人员，目的是制定并提交一份现金费用单据进而完成一次现金管理任务
- **触发条件**
    - 无
- **前置条件**
    - 财务人员被识别和授权
- **后置条件**
    - 系统保存并提交一份现金费用单等待总经理审核
- **优先级**
    - 中
- **正常流程**
    - 1.0 新建现金费用单
        - 1.用户选择新建现金费用单
        - 2.系统显示单据模板，包含以下信息：
            - 1.单据编号（系统自动生成，格式为XJFYD-yyyyMMdd-xxxxx）
            - 2.银行账户（必选；从银行账户列表选择，银行账户列表只显示银行账户名）
            - 3.操作员（当前登录用户，不可修改）
            - 4.条目清单，默认只有一个条目，包括：
                - 1.条目名（必填）
                - 2.金额（必填，与银行账户一一对应）
                - 3.备注（选填）
            - 5.总额汇总（系统自动计算转账金额之和）
    - 2.0 保存单据
        - 1.用户输入一定单据内容并选择保存
        - 2.系统保存单据为草稿并反馈保存成功，返回上一界面
    - 2.1 提交单据
        - 1.用户完成所有单据输入并选择提交
        - 2.系统系统反馈提交成功，并返回上一界面
- **扩展流程**
    - 1.0a
        - 1.用户新建单据时选择打开草稿
        - 2.系统打开之前用户保存的草稿单据
    - 2.0/2.1
        - 1a.非法输入提示
            - 1.用户输入非法数据并提交：
                - 整数部分超过8位
                - 小数部分超过2位
                - 负数
                - 除小数点以外的其它非数字字符
            - 2.系统返回“非法输入”并返回编辑界面
        - 1b.中途退出
            - 1.系统弹出提示“保存/不保存/取消”
            - 2.1 保存
                - 1.用户选择保存
                - 2.系统保存并返回上一级界面
            - 2.2 退出
                - 1.用户选择
                - 2.系统不保存并返回上一级界面
            - 2.3 取消
                - 1.用户选择取消
                - 2.系统不退出并返回编辑界面
    - 2.1
        - 1d.信息不完整
            - 1.用户填写信息不完整时选择提交
            - 2.系统不允许提交
- **特殊需求**
    - 无

---
- **ID**
    - 15
- **名称**
    - 查看经营历程表
- **创建者**
    - 吴新宇
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/09
- **修改日期**
    - 17/10/15
- **参与者**
    - 财务人员：核对具体经营历程，使用红冲功能使系统数据与现实一致
    - 总经理：了解公司经营状况
- **触发条件**
    - 无
- **前置条件**
    - 用户以财务人员或总经理的身份登录
- **后置条件**
    - 无
- **优先级**
    - 高
- **正常流程**
    - 1.0查看经营历程表
        - 1.用户选择“查看经营历程表”
        - 2.系统展示筛选条件，包括：
            - 时间区间（在日历中选择）
            - 单据类型（在销售类、进货类、财务类、库存类这四个选项中选择）
        - 3.用户填写完筛选条件后选择“提交”
        - 4.系统返回符合筛选条件的已通过审批的经营历程类单据，经营历程类单据包括：
            - 销售单
            - 销售退货单
            - 进货单
            - 进货退货单
            - 付款单
            - 收款单
            - 现金费用单
            - 报溢单
            - 报损单
            - 赠送单
        - 5.用户选择某一个单据查看此单据的详细信息，单据的详细字段参见用例4，7～14，除此之外，还包括单据的最后修改时间、审批通过时间、修改人员、审批人员
        - 6.1用户使用红冲功能
            - 1.用户选择对当前正在查看的单据进行红冲操作
            - 2.系统将当前单据复制一份，并将商品数量取反（对于现金费用单、收款单、付款单，将金额取反），然后将把这条新生成的单据加入到经营历程表中
        - 6.2用户使用红冲并复制功能
            - 1.用户选择对当前正在查看的单据进行红冲并复制操作
            - 2.系统将当前单据复制一份，并将商品数量字段设置为可编辑状态（对于现金费用单、收款单、付款单，将金额设置为可编辑状态）
            - 3.用户填入数字后选择提交此单据
            - 4.系统将用户编辑过的单据加入到经营历程表中
        - 重复5～6，直到完成对经营历程表的查阅
    - 1.1导出经营历程表
        - 1.用户选择“导出经营历程表”
        - 2.系统展示筛选条件，包括：
            - 时间区间（在日历中选择）
            - 单据类型（在销售类、进货类、财务类、库存类这四个选项中选择）
        - 3.用户填写完筛选条件后选择“导出经营历程表”
        - 4.系统将符合筛选条件的已通过审批的经营历程类单据导出为excel表
- **扩展流程**
    - 1.0.3.b/1.1.3.b
        - 1.用户填写的筛选条件中有空字段
        - 1.系统不允许提交，返回“请选择筛选条件”；
- **特殊需求**
    - 无


---

- **ID**
    - 16
- **名称**
    - 查看经营状况表
- **创建者**
    - 吴新宇
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/10
- **修改日期**
    - 17/10/15
- **参与者**
    - 财务人员、总经理：了解公司一段时间内的收支情况和利润
- **触发条件**
    - 无
- **前置条件**
    - 以财务人员或总经理身份登入系统
- **后置条件**
    - 无
- **优先级**
    - 中
- **正常流程**
    - 1.0用户查看经营状况表
        - 1.用户选择查看经营状况表
        - 2.系统返回时间选择界面，包括：
        - 开始时间（在日历中选择）
        - 结束时间（在日历中选择）
    - 3.用户选择时间段后选择“提交”
    - 4.系统返回明细(包括销售收入、商品收入、总收入、销售支出、商品支出、总支出、总利润)
    - 1.1用户导出报表
        - 1.用户选择导出经营状况表
        - 2.系统返回时间选择界面，包括：
            - 开始时间（在日历中选择）
            - 结束时间（在日历中选择）
        - 3.用户选择时间段后选择“导出经营状况表”
        - 4.系统将此时间段内的经营状况单据（参见1.0.4）导出为excel表
- **扩展流程**
    -  1.0.3.a／1.1.3.a 非法时间
        - 1.用户选择的开始时间晚于结束时间
        - 2.系统返回“时间区间不正确”并停留在时间选择界面要求用户继续更改
- **特殊需求**
    - 无

---


- **ID**
    - 17
- **名称**
    - 查看销售明细表
- **创建者**
    - 吴新宇
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/10
- **修改日期**
    - 17/11/25
- **参与者**
    - 财务人员、总经理：了解公司一段时间内的销售详情
- **触发条件**
    - 无
- **前置条件**
    - 以财务人员或总经理身份登入系统
- **后置条件**
    - 无
- **优先级**
    - 中
- **正常流程**
    - 1.0用户查看销售明细表
        - 1.用户选择查看销售明细表
        - 2.系统返回筛选条件选择界面，包括：
            - 开始时间（在日历中选择）
            - 结束时间（在日历中选择）
            - 商品名（在商品列表中选择）
            - 客户（在客户列表中选择）
            - 业务员（在销售人员中选择）
            - 仓库
        - 3.用户选择时间段后选择“提交”
        - 4.系统返回符合要求的单据列表，包括信息
            - 时间
            - 商品名
            - 型号
            - 数量
            - 单价
            - 总额
    - 1.1用户导出报表
        - 1.用户选择导出经营状况表
        - 2.系统返回筛选条件选择界面，包括：
            - 开始时间（在日历中选择）
            - 结束时间（在日历中选择）
            - 商品名（在商品列表中选择）
            - 客户（在客户列表中选择）
            - 业务员（在销售人员中选择）
            - 仓库
        - 3.用户选择筛选条件后选择“导出销售明细表”
        - 4.系统将此时间段内的销售出货类单据导出为excel表
- **扩展流程**
    -  1.0.3.a／1.1.3.a用户选择的开始时间晚于结束时间
        - 1.系统提示“时间区间不正确”并停留在时间选择界面要求用户继续更改
- **特殊需求**
    - 无

---
- **ID**
    - 18
- **名称**
    - 期初建账
- **创建者**
    - 徐翔哲
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/12
- **修改日期**
    - 17/10/25
- **参与者**
    - 财务人员：管理公司账目，统计财年状况
- **触发条件**
    - 无
- **前置条件**
    - 以财务人员身份登入系统
- **后置条件**
    - 系统产生一套新账，并将旧账保存起来
- **优先级**
    - 中
- **正常流程**
    - 1.0期初建账
        - 1.财务人员选择期初建账
        - 2.系统将现有的：
            - 商品信息 
            - 客户信息 
            - 银行账户信息
            三个表格复制一份，然后计算每一商品在过去一年的平均进价/售价，并以此填入期初信息，然后清空每一商品的“最近售价/进价”字段，完成后给出提示
    - 1.1查看期初信息
        - 1.用户选择“查看期初信息”
        - 2.系统返回已经建立的账目列表
        - 3.用户选择某一账目
        - 4.系统返回对应的期初信息的三个分类（商品、客户、银行账户）
        - 5.1 查看商品信息
            - 1.用户选择查看商品信息
            - 2.系统返回商品信息，包括：
                - 编号
                - 商品分类
                - 某一商品的名称
                - 类别
                - 型号
                - 上年平均进价／售价
        - 5.2 查看客户信息
            - 1.用户选择查看客户信息
            - 2.系统返回客户信息，包括：
                - 编号
                - 客户分类
                - 客户名称
                - 联系方式
                - 级别
                - 地址
                - 邮编
                - 电子邮箱
                - 应付额度
                - （遗留的）应付应收
        - 5.3 查看银行账户信息
            - 1.用户选择查看银行账户信息
            - 2.系统返回银行账户信息，包括
                - 名称
                - 余额
- **扩展流程**
    - 无
- **特殊需求**
    - 无

---

- **ID**
    - 19
- **名称**
    - 审批单据
- **创建者**
    - 徐翔哲
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/12
- **修改日期**
    - 17/10/25
- **参与者**
    - 总经理：控制公司发展运行
- **触发条件**
    - 无
- **前置条件**
    - 以总经理身份登入系统
- **后置条件**
    - 系统改变单据状态
- **优先级**
    - 中
- **正常流程**
    - 1.0审批1个单据
        - 1.总经理选择“审批单据”
        - 2.系统返回提交状态单据列表，表中包括单据内容概要和单据类型，默认按提交日期排序
        - 3.用户点击某一单据
        - 4.系统返回单据具体内容
        - 5.1 通过
            - 1.用户选择通过单据
            - 2.单据生效，改变为已审批通过状态，系统更新信息并显示更新后的信息
        - 5.2 不通过
            - 1.用户选择不通过单据
            - 2.单据状态改变为已审批不通过状态，系统更新信息并显示更新后的信息
        - 5.3 修改单据内容
            - 1.用户修改单据内容后选择提交
            - 2.单据状态改变为已审批通过状态，记录最后修改时间，提交时初始内容，系统更新信息并显示更新后的信息
    - 1.1 批量审批单据
          - 1.总经理选择某单据
          - 2.系统将单据标为选中状态
          - 重复1～2 直到选择所有需要审批的单据
          - 3.1 通过单据
              - 1.用户选择通过单据
              - 2.所有已选择单据生效，改变为已审批通过状态，系统更新信息并显示更新后的信息
          - 3.2 不通过单据
              - 1.用户选择不通过单据
              - 2.所有已选择单据状态改变为已审批不通过状态，系统更新信息并显示更新后的信息
- **扩展流程**
    - 1.0.5.3.1.a 非法输入
        - 1.用户修改的单据内容有非法输入并选择提交（参见单据相关用例）
        - 2.系统提示“输入错误”并返回编辑界面
    - 1.0.5.1.1.a／1.0.5.3.2.a/1.1.3.1.1.a 
        - 1.用户通过一张单据，审批单据时库存数量／银行账户余额／用户应付额度不足
        - 2.系统不改变单据，并提示“此单据未达到审批条件” 并交由用户继续处理
- **特殊需求**
    - 无

---

- **ID**
    - 20
- **名称**
    - 制定销售策略
- **创建者**
    - 徐翔哲
- **修改者**
    - 徐一舟
- **创建日期**
    - 17/09/12
- **修改日期**
    - 17/10/25
- **参与者**
    - 总经理：促进商品销售
- **触发条件**
    - 无
- **前置条件**
    - 以总经理身份登入系统
- **后置条件**
    - 系统保存新的销售策略
- **优先级**
    - 中
- **正常流程**
    - 1.0 针对不同级别用户的促销策略
        - 1.用户选择新建针对不同级别用户的促销策略
        - 2.系统返回表格，包括：
            - 优惠级别（在用户级别中选择）
            - 优惠策略（包括赠品，价格折让，代金券）
            - 开始时间（在日历中选择）
            - 结束时间（在日历中选择）
        - 3.用户填写并提交表格
        - 4.系统生效促销策略
    - 1.1 组合商品降价
        - 1.用户选择新建组合商品降价
        - 2.系统返回表格，包括：
            - 组合商品列表
            - 降价金额
            - 开始时间（在日历中选择）
            - 结束时间（在日历中选择）
        - 3.用户填写并提交表格
        - 4.系统生效促销策略
    - 1.2 针对总价的优惠
        - 1.用户选择新增针对总价的优惠
        - 2.系统返回表格，包括：
            - 触发总价
            - 代金券金额（选填）
            - 赠品列表（选填）
            - 开始时间（在日历中选择）
            - 结束时间（在日历中选择）
        - 3.用户填写并提交表格
        - 4.系统生效促销策略
- **扩展流程**
    - 1.0.3.a/1.1.3.a/1.2.3.a 
        - 1.用户填写的开始时间早于当前时间或生效时间为负或其他非法输入（参见相关用例）
        - 2.系统提示“非法输入”并返回编辑界面
    - 1.0.3.b/1.1.3.b/1.2.3.b 中途退出
        - 1.用户在提交前选择退出
        - 2.系统提示用户是否确认退出
        - 3.1 确认
            - 1.用户选择“是”
            - 2.系统返回上级界面
        - 3.2 取消
            - 1.用户选择“否”
            - 2.系统停留在编辑界面

---
### 用例21:消息查看

- **ID**
    - 21
- **名称**
    - 消息查看
- **创建者**
    - 吴新宇
- **修改者**
    - 吴新宇
- **创建日期**
    - 17/10/15
- **修改日期**
    - 17/10/15
- **参与者**
    - 库存管理人员、进货销售人员、财务人员、总经理，目的是为了查看各种单据评审结果，代办事项和库存报警单
- **触发条件**
    - 无
- **前置条件**
    - 库存管理人员、进货销售人员、财务人员、总经理被识别和授权
- **后置条件**
    - 无
- **优先级**
    - 中
- **正常流程**
    - 1.用户选择消息查看选项
    - 2.系统显示只有该用户可见的消息列表
    - 3.0 查看报警类消息
        - 1.用户选择一条报警类消息，包括库存报警单
        - 2.系统返回报警单详细信息，并将消息标为已读
        - 3.用户选择返回列表选项
        - 4.系统返回消息列表
    - 3.2 查看成功类消息
        - 1.用户选择一条成功类消息，包括审批通过的单据
        - 2.系统返回审批通过单据的详细信息，并将消息标为已读
        - 3.用户选择返回列表选项
        - 4.系统返回消息列表
    - 3.4 全部已读
        - 1.用户选择全部标为已读选项
        - 2.系统将全部消息标为已读
    - 循环第3步直到用户退出界面
- **扩展流程**
    - 无
- **特殊需求**
    - 无

### 用例22：用户管理
- **ID**
    - 22
- **名称**
    - 管理员管理账号
- **创建者**
    - 温曜铭
- **修改者**
    - 温曜铭
- **创建日期**
    - 17/10/16
- **修改日期**
    - 17/11/01
- **参与者**
    - 管理员对各类账号的账号、密码、权限进行管理
- **触发条件**
    - 人员变动
- **前置条件**
    - 管理员身份被识别
- **后置条件**
    - 系统更新用户、权限
- **优先级**
    - 高
- **正常流程**
    - 1.0 创建账号
        - 1.管理员选择创建账号选项
        - 2.系统返回信息填写表格
            - a)需要填写的信息：
                - 账号名(必填)
                - 账号登录ID(必填)
                - 账号密码(必填)
                - 账号类型(必选，包括库存管理人员，进货销售人员，财务人员，总经理)
                - 账号权限(必选，包括普通权限，最高权限)
        - 3.管理员填写信息后选择提交选项
        - 4.系统增加账号并更新系统，显示更新后信息并返回上一级界面
    - 1.1 修改账号
        - 1.管理员选中要修改的账户后选择修改
        - 2.系统返回编辑表格，其中可修改的字段为用户名字、密码、账号类型、账号权限
        - 3.用户进行编辑后选择提交选项
        - 4.系统更新账号信息，显示更新后信息并返回上一级界面
    - 1.2 查看账号
        - 1.管理员选择查看账号
        - 2.系统返回账号列表，包括账号的名称、类型、权限(默认按照类型排序)
        - 3.用户选择返回上一级界面
        - 4.系统返回上一级界面
    - 1.3 关键字查找账号
        - 1.用户通过账号名、账号类型、账号权限查询账号
        - 2.系统返回该账号的名称、类型、权限
        - 3.用户选择返回上一级界面
        - 4.系统返回上一级界面
- **扩展流程**
    - 1.0/1.1
    - 3a 非法输入提示
        - 1.用户输入非法数据并提交：
            - 账号ID不是数字
            - 账号名超过8位
            - 密码超过10位
        - 2.系统提示“非法输入”返回编辑界面
    - 3b 重名
        - 1.若提交后检测出账号名重复，系统返回“账号名重复”并返回编辑界面
        - 2.用户进行修改并重新提交
    - 3c 信息不完整
        - 1.必选或必填项目信息缺失时用户选择提交
        - 2.系统不允许提交

- **特殊需求**
    - 无