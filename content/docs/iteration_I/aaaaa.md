---
title: "功能测试用例集"
---

# 功能测试用例集

## 用例1：商品信息管理

### 表1-1 测试用例套件对商品信息管理的覆盖情况

| 编号                                       | 套件1 | 套件2 | 套件3 |
| ------------------------------------------ | ----- | ----- | ----- |
| CommodityManagement.Input.keyboard         | TUS1  | TUS2  |       |
| CommodityManagement.Input.Invalid          | TUS1  | TUS2  |       |
| CommodityManagement.Runtime.Cancel.Confirm | TUS1  |       |       |
| CommodityManagement.Runtime.Cancel.Cancel  | TUS1  |       |       |
| CommodityManagement.Submit.Valid           | TUS1  | TUS2  |       |
| CommodityManagement.Submit.Invalid         | TUS1  |       |       |
| CommodityManagement.Add.FirstAdd           | TUS1  |       |       |
| CommodityManagement.Add.Conflict           | TUS1  |       |       |
| CommodityManagement.Add.Cancel             | TUS1  |       |       |
| CommodityManagement.Add.Number             | TUS1  |       |       |
| CommodityManagement.Add.InitInventory      | TUS1  |       |       |
| CommodityManagement.Add.Duplicate          | TUS1  |       |       |
| CommodityManagement.Add.Submit             | TUS1  |       |       |
| CommodityManagement.Add.End                | TUS1  |       |       |
| CommodityManagement.Delete.Judge           |       |       | TUS3  |
| CommodityManagement.Delete.Invalid         |       |       | TUS3  |
| CommodityManagement.Delete.Cancel          | TUS1  |       |       |
| CommodityManagement.Delete.Confirm         | TUS1  |       |       |
| CommodityManagement.Delete.End             | TUS1  |       | TUS3  |
| CommodityManagement.Modify.Cancel          | TUS1  |       |       |
| CommodityManagement.Modify.Duplicate       | TUS1  |       |       |
| CommodityManagement.Modify.Submit          | TUS1  |       |       |
| CommodityManagement.Modify.End             | TUS1  |       |       |
| CommodityManagement.Find.Filter            |       | TUS2  |       |


### 表1-2-1 测试用例TUS1
---
- **ID**
    - TUS1-1
- **输入**
    - 是否第一次添加
        - 是
    - 添加对象
        - 商品
- **预期输出**
    - 无输出，系统只允许添加商品分类


---

- **ID**
    - TUS1-2
- **输入**
    - 是否第一次添加
        - 否
    - 是否存在商品与商品分类的冲突
    - 添加对象
        - 商品
    - 初始化库存数量
        - 10
    - 是否中途退出并确认
    - 是否有非法输入
        - 否
    - 是否有重名
        - 否
- **预期输出**
    - 用户成功提交，系统更新商品信息并显示更新后的商品信息，其中商品库存数量为10

---
- **ID**
    - TUS1-3
- **输入**
    - 是否第一次添加
    - 添加对象
    - 是否存在商品与商品分类的冲突
    - 初始化库存数量
    - 是否中途退出并确认
        - 取消退出
    - 是否有非法输入
        - 是
    - 是否有重名
        - 是
- **预期输出**
    - 系统提示“是否放弃本次操作”用户取消放弃操作，系统留在编辑界面，用户有非法输入，系统在输入框旁边给出提示后用户修改并提交，检查出重名，系统返回“存在重名”后返回编辑界面，用户修改后再次提交，提交成功，系统更新商品信息并显示更新后的商品信息

---
- **ID**
    - TUS1-4
- **输入**
    - 是否第一次添加 
    - 添加对象
    - 是否存在商品与商品分类的冲突
    - 初始化库存数量
    - 是否中途退出并确认
        - 确认退出
    - 是否有非法输入
    - 是否有重名
- **预期输出**
    - 系统提示“是否放弃本次操作”，用户选择确认退出，系统退出当前界面


---
- **ID**
    - TUS1-5
- **输入**
    - 是否第一次添加
        - 是 
    - 添加对象
        - 商品分类
    - 是否存在商品与商品分类的冲突
    - 初始化库存数量
    - 是否中途退出并确认
    - 是否有非法输入
        - 否  
    - 是否有重名
        - 否
- **预期输出**
    - 用户提交成功，系统更新商品信息并显示更新后的商品信息，商品分类编号为1
---

### 表1-2-2 测试用例TUS2
---
- **ID**
    - TUS2-1
- **输入**
    - 是否有非法输入
        - 否
    - 是否存在该商品信息
        - 是
- **预期输出**
    - 系统返回符合条件的商品信息
---
- **ID**
    - TUS2-2
- **输入**
    - 是否有非法输入
        - 否
    - 是否存在该商品信息
        - 否
- **预期输出**
    - 系统返回空的商品信息
---

### 表1-2-3 测试用例TUS3
---
- **ID**
    - TUS3-1
- **输入**
    - 是否可删除
        - 是
    - 是否确认删除
        - 是
- **预期输出**
    - 系统返回提示“是否确认删除，一旦删除不可更改并且删除该对象子目录下的所有信息”，用户确认后系统删除商品信息，返回提示“操作成功”
---
- **ID**
    - TUS3-2
- **输入**
    - 是否可删除
        - 否
    - 是否确认删除
- **预期输出**
    - 系统返回提示“当前对象不可删除”


## 用例2：商品信息管理

### 表2-1 测试用例套件对商品信息管理的覆盖情况
| 编号                          | 套件1 | 套件2 |
| ----------------------------- | ----- | ----- |
| StorageBrowse.Time.Chooseable | TUS1  |       |
| StorageBrowse.Time.Check      | TUS1  |       |
| StorageBrowse.Submit.Valid    | TUS1  |       |
| StorageBrowse.Submit.Invalid  | TUS1  |       |
| StorageBrowse.Cancel.Confirm  |       | TUS2  |
| StorageBrowse.Cancel.Cancel   |       | TUS2  |

### 表2-2-1 测试用例TUS1
---
- **ID**
    - TUS1-1
- **输入**
    - 起始时间
        - 2017/09/30 13：00
    - 结束时间
        - 2017/09/30 12：00
    - 用户第一次提交前是否修改
        - 否
- **预期输出**
    - 系统在选择框旁边提示“时间非法”，用户提交，提交失败，系统返回“存在非法输入”，用户修改至合法时间后提交，提交成功，系统返回库存信息
---

### 表2-2-2 测试用例TUS2
---
- **ID**
    - TUS2-1
- **输入**
    - 是否中途退出并确认
        - 确认退出
- **预期输出**
    - 系统返回提示“是否放弃本次操作”，用户确认放弃，系统退出界面
---

---
- **ID**
    - TUS2-2
- **输入**
    - 是否中途退出并确认
        - 取消退出
- **预期输出**
    - 系统返回提示“是否放弃本次操作”，用户取消退出，系统留在当前页面
---

## 用例3：库存盘点

### 表3-1 测试用例套件对商品信息管理的覆盖情况

| 编号                       | 套件1 | 套件2 | 套件3 |
| -------------------------- | ----- | ----- | ----- |
| StorageCheck.Sort.Priority | TUS1  |       |       |
| StorageCheck.Excel.Export  |       |       | TUS3  |
| StorageCheck.Find.Filter   |       | TUS2  |       |
| StorageCheck.Find.Null     |       | TUS2  |       |

### 表3-2-1 测试用例TUS1
---
- **ID**
    - TUS1-1
- **输入**
    - 筛选条件
        - 首先根据字段A字段B排序，然后取消按照字段A排序
- **预期输出**
    - 系统根据字段A排序后再根据字段B排序，取消按字段A排序后系统只按字段B排序
---

### 表3-2-2 测试用例TUS2
---
- **ID**
    - TUS2-1
- **输入**
    - 查找方式
        - 通过编号查找商品
    - 是否存在该商品
        - 是
- **预期输出**
    - 系统返回商品信息
---

- **ID**
  - TUS2-2
- **输入**
    - 查找方式
        - 点击分类查找
    - 是否存在该商品
        - 是
- **预期输出**
    - 系统返回商品信息

- **ID**
  - TUS2-2
- **输入**
    - 查找方式
        - 通过名称查找
    - 是否存在该商品
        - 否
- **预期输出**
    - 系统返回提示“该商品不存在”
---

### 表3-2-2 测试用例TUS2
- **ID**
    - TUS3-1
- **输入**
    - 是否导出成Excel
        - 是
- **预期输出**
    - 系统将库存快照导出成Excel文件
---

## 用例4：库存管理报单
与用例7实现类似，参见用例7

## 用例5：查看报警单
与用例21类似没有相关功能需求，因此不实现测试套件

# 功能测试用例集

## 用例6：客户管理

### 表6-1 测试用例套件对客户管理的覆盖情况

| 编号                              | 套件1 | 套件2 |
| --------------------------------- | ----- | ----- |
| ClientManagement.Search.ShowList  | TUS1  | TUS2  |
| ClientManagement.Search.KeyWord   | TUS1  | TUS2  |
| ClientManagement.Search.ShowClient| TUS1  | TUS2  |
| ClientManagement.Search.Null      | TUS1  |       |
| ClientManagement.Add.Valid        | TUS1  | TUS2  |
| ClientManagement.Add.Invalid      |       | TUS2  |
| ClientManagement.Add.Save         | TUS1  | TUS2  |
| ClientManagement.Add.Cancel       |       | TUS2  |
| ClientManagement.Edit.Valid       | TUS1  |       |
| ClientManagement.Edit.Invalid     | TUS1  |       |
| ClientManagement.Edit.Save        | TUS1  | TUS2  |
| ClientManagement.Edit.Cancel      |       | TUS2  |
| ClientManagement.Save             | TUS1  | TUS2  |
| ClientManagement.Save.Check       | TUS1  | TUS2  |
| ClientManagement.Save.Valid       | TUS1  |       |
| ClientManagement.Save.Invalid     |       | TUS2  |
| ClientManagement.Close.Back       | TUS1  |       |
| ClientManagement.Close.Back.Cancel| TUS1  |       |

### 表6-2-1 测试用例TUS1
---
- **ID**
    - TUS1-1
- **输入**
    - 功能选择
        - 查询客户
    - 搜索关键字
        - 存在的用户编号
    - 新增的客户信息
        - 无
    - 修改的客户信息
        - 无
    - 确认新增
        - 无
    - 确认修改
        - 无
    - 确认退出
        - 否
- **预期输出**
    - 系统显示对应的客户信息，保留在客户管理界面


---

- **ID**
    - TUS1-2
- **输入**
    - 功能选择
        - 查询客户
    - 搜索关键字
        - 不存在的用户编号
    - 新增的客户信息
        - 无
    - 修改的客户信息
        - 无
    - 确认新增
        - 无
    - 确认修改
        - 无
    - 确认退出
        - 否
- **预期输出**
    - 返回空的客户列表

---
- **ID**
    - TUS1-3
- **输入**
    - 功能选择
        - 新增客户
    - 搜索关键字
        - 无
    - 新增的客户信息
        - 新的客户信息
    - 修改的客户信息
        - 无
    - 确认新增
        - 是
    - 确认修改
        - 无
    - 确认退出
        - 是
- **预期输出**
    - 系统提示保存新增客户信息成功，并返回上级界面

---
- **ID**
    - TUS1-4
- **输入**
    - 功能选择
        - 修改客户信息
    - 搜索关键字
        - 无
    - 新增的客户信息
        - 无
    - 修改的客户信息
        - 新的客户信息
    - 确认新增
        - 无
    - 确认修改
        - 是
    - 确认退出
        - 否
- **预期输出**
    - 系统提示保存修改的客户信息成功，保留在客户管理界面


---
- **ID**
    - TUS1-5
- **输入**
    - 功能选择
        - 修改客户信息
    - 搜索关键字
        - 无
    - 新增的客户信息
        - 无
    - 修改的客户信息
        - 新的客户信息（其中客户姓名为#unknow）
    - 确认新增
        - 无
    - 确认修改
        - 无
    - 确认退出
        - 否
- **预期输出**
    - 系统提示非法输入并返回编辑界面


---
### 表6-2-2 测试用例TUS2

---
- **ID**
    - TUS2-1
- **输入**
    - 功能选择
        - 查询客户
    - 搜索关键字
        - 存在的用户编号
    - 新增的客户信息
        - 无
    - 修改的客户信息
        - 无
    - 确认新增
        - 无
    - 确认修改
        - 无
    - 确认退出
        - 是
- **预期输出**
    - 系统显示对应的客户信息，并返回上级界面


---

- **ID**
    - TUS2-2
- **输入**
    - 功能选择
        - 新增客户
    - 搜索关键字
        - 无
    - 新增的客户信息
        - 新的客户信息（其中客户姓名为#unknow）
    - 修改的客户信息
        - 无
    - 确认新增
        - 无
    - 确认修改
        - 无
    - 确认退出
        - 是
- **预期输出**
    - 系统提示无此客户，并返回上级界面

---
- **ID**
    - TUS2-3
- **输入**
    - 功能选择
        - 新增客户
    - 搜索关键字
        - 无
    - 新增的客户信息
        - 新的客户信息
    - 修改的客户信息
        - 无
    - 确认新增
        - 否
    - 确认修改
        - 无
    - 确认退出
        - 是
- **预期输出**
    - 系统提示已取消新增，并返回上级界面

---
- **ID**
    - TUS2-4
- **输入**
    - 功能选择
        - 新增客户
    - 搜索关键字
        - 无
    - 新增的客户信息
        - 新的客户信息（其中客户姓名与原有的重复）
    - 修改的客户信息
        - 无
    - 确认新增
        - 是
    - 确认修改
        - 无
    - 确认退出
        - 否
- **预期输出**
    - 系统提示已存在的客户，保留在客户管理界面


---
- **ID**
    - TUS2-5
- **输入**
    - 功能选择
        - 修改客户信息
    - 搜索关键字
        - 无
    - 新增的客户信息
        - 无
    - 修改的客户信息
        - 新的客户信息
    - 确认新增
        - 无
    - 确认修改
        - 否
    - 确认退出
        - 否
- **预期输出**
    - 系统提示已取消修改，保留在客户管理界面


---
## 用例7：制定进货单

### 表7-1 测试用例套件对制定进货单的覆盖情况

| 编号                              | 套件1 | 套件2 |
| --------------------------------- | ----- | ----- |
| Import.Initiate                   | TUS1  | TUS2  |
| Import.Initiate.new               | TUS1  | TUS2  |
| Import.Initiate.Draft             | TUS1  |       |
| Import.Initiate.Draft.new         | TUS1  |       |
| Import.Save                       | TUS1  | TUS2  |
| Import.Save.Check                 | TUS1  | TUS2  |
| Import.Save.Invalid               |       | TUS2  |
| Import.Save.Confirm               | TUS1  | TUS2  |
| Import.Save.Cancel                | TUS1  |       |
| Import.Submit                     | TUS1  | TUS2  |
| Import.Submit.Check               | TUS1  |       |
| Import.Submit.Complete            | TUS1  | TUS2  |
| Import.Submit.Incomplete          |       | TUS2  |
| Import.Submit.Invalid             |       | TUS2  |
| Import.Submit.Cancel              | TUS1  |       |
| Import.Close.Tip                  | TUS1  | TUS2  |
| Import.Close.Back.Save            | TUS1  | TUS2  |
| Import.Close.Back.NotSave         |       | TUS2  |
| Import.Close.Back.Cancel          | TUS1  |       |

### 表7-2-1 测试用例TUS1
---
- **ID**
    - TUS1-1
- **输入**
    - 草稿状态
        - 无
    - 是否新建进货单
        - 是
    - 输入进货单信息
        - 正常
    - 确认保存进货单
        - 是
    - 确认提交进货单
        - 是
    - 确认退出
        - 是
    - 退出时是否保存
        - 是
- **预期输出**
    - 系统提示提交成功并在保存后返回上级界面


---

- **ID**
    - TUS1-2
- **输入**
    - 草稿状态
        - 是
    - 是否新建进货单
        - 否
    - 输入进货单信息
        - 正常
    - 确认保存进货单
        - 否
    - 确认提交进货单
        - 无
    - 确认退出
        - 否
    - 退出时是否保存
        - 无
- **预期输出**
    - 系统显示进货单草稿，提示取消保存，最后留在制定进货单界面

---
- **ID**
    - TUS1-3
- **输入**
    - 草稿状态
        - 是
    - 是否新建进货单
        - 是
    - 输入进货单信息
        - 正常
    - 确认保存进货单
        - 是
    - 确认提交进货单
        - 否
    - 确认退出
        - 否
    - 退出时是否保存
        - 无
- **预期输出**
    - 系统删除草稿进货单，提示保存成功，提示取消提交，最后留在制定进货单界面


---
### 表7-2-2 测试用例TUS2

---
- **ID**
    - TUS2-1
- **输入**
    - 草稿状态
        - 无
    - 是否新建进货单
        - 是
    - 输入进货单信息
        - 数量为-10
    - 确认保存进货单
        - 是
    - 确认提交进货单
        - 是
    - 确认退出
        - 是
    - 退出时是否保存
        - 否
- **预期输出**
    - 系统返回非法输入后返回编辑界面，不保存返回上级界面


---

- **ID**
    - TUS2-2
- **输入**
    - 草稿状态
        - 无
    - 是否新建进货单
        - 是
    - 输入进货单信息
        - 某一商品数量未填写
    - 确认保存进货单
        - 是
    - 确认提交进货单
        - 是
    - 确认退出
        - 否
    - 退出时是否保存
        - 无
- **预期输出**
    - 系统提示保存成功，提示未完成进货单无法提交，最后留在制定进货单界面

---
- **ID**
    - TUS2-3
- **输入**
    - 草稿状态
        - 是
    - 是否新建进货单
        - 否
    - 输入进货单信息
        - 一商品单价为-2元
    - 确认保存进货单
        - 是
    - 确认提交进货单
        - 否
    - 确认退出
        - 否
    - 退出时是否保存
        - 无
- **预期输出**
    - 系统显示原进货单草稿，返回非法输入返回编辑界面

## 用例8：销售单
与用例7实现类似，参见用例7

## 用例9：进货退货单
与用例7实现类似，参见用例7

## 用例10：销售退货单
与用例7实现类似，参见用例7

---
## 用例11：付款单

### 表11-1 测试用例套件对付款单的覆盖情况

| 编号                              | 套件1 | 套件2 |
| --------------------------------- | ----- | ----- |
| Payment.Client.List               | TUS1  | TUS2  |
| Payment.Client.Selected           | TUS1  | TUS2  |
| Payment.TransferList              | TUS1  | TUS2  |
| Payment.Sum                       | TUS1  | TUS2  |
| Payment.Sum.Null                  | TUS1  | TUS2  |
| Payment.Number                    | TUS1  | TUS2  |
| Payment.Submission.Allowed        |       | TUS2  |
| Payment.Submission.NotAllowed     | TUS1  | TUS2  |
| Payment.Submission.NotAllowed.Sum | TUS1  |       |
| Payment.End                       |       | TUS2  |
| Payment.End.Save                  | TUS1  | TUS2  |
| Payment.End.NotSave               | TUS1  | TUS2  |


### 表11-2-1 测试用例TU1
---
- **ID**
    - TUS1-1
- **输入**
    - 填写情况
        - 客戶未选
    - 转账总额
        - 为0
    - 退出编辑
        - 不保存
- **预期输出**
    - 系统不做任何处理，退出界面


---

- **ID**
    - TUS1-2
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 为0
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统提示转账金额为0，不予提交，指引用户继续编辑

---
- **ID**
    - TUS1-3
- **输入**
    - 填写情况
        - 转账金额未填
    - 转账总额
        - 为0
    - 退出编辑
        - 保存
- **预期输出**
    - 系统保存草稿并提示用户成功，退出界面

---
- **ID**
    - TUS1-4
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 1000
    - 退出编辑
        - 不保存
- **预期输出**
    - 系统不做任何处理，退出界面


---

### 表11-2-2 测试用例TU2

- **ID**
    - TUS2-1
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 1000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统向总经理提交转账金额为1000元的付款单等待审核，并退出界面

---
- **ID**
    - TUS2-2
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 2000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统向总经理提交转账金额为2000元的付款单等待审核，并退出界面

---
- **ID**
    - TUS2-3
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 10000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统向总经理提交转账金额为10000元的付款单等待审核


---
- **ID**
    - TUS2-4
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 超过银行账户余额
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统提示余额不足，不予提交，指引用户继续编辑


---

## 用例1：收款单

### 表12-1 测试用例套件对付款单的覆盖情况

| 编号                             | 套件1 | 套件2 |
| -------------------------------- | ----- | ----- |
| Collection.Client.List           | TUS1  | TUS2  |
| Collection.Client.Selected       | TUS1  | TUS2  |
| Collection.TransferList.Account  | TUS1  | TUS2  |
| Collection.TransferList.Remark   | TUS1  | TUS2  |
| Collection.Sum                   | TUS1  | TUS2  |
| Collection.Sum.Null              | TUS1  | TUS2  |
| Collection.Number                | TUS1  | TUS2  |
| Collection.Submission.Allowed    |       | TUS2  |
| Collection.Submission.NotAllowed | TUS1  |       |
| Collection.End                   |       | TUS2  |
| Collection.End.Save              | TUS1  | TUS2  |
| Collection.End.NotSave           | TUS1  | TUS2  |


### 表12-2-1 测试用例TU1
---
- **ID**
    - TUS1-1
- **输入**
    - 填写情况
        - 客戶未选
    - 转账总额
        - 为0
    - 退出编辑
        - 不保存
- **预期输出**
    - 系统不做任何处理，退出界面


---

- **ID**
    - TUS1-2
- **输入**
    - 填写情况
        - 转账金额未填
    - 转账总额
        - 为0
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统提示转账金额为0，不予提交，指引用户继续编辑

---
- **ID**
    - TUS1-3
- **输入**
    - 填写情况
        - 未填写完
    - 转账总额
        - 为0
    - 退出编辑
        - 保存
- **预期输出**
    - 系统保存草稿并提示用户成功，退出界面

---
- **ID**
    - TUS1-4
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 1000
    - 退出编辑
        - 不保存
- **预期输出**
    - 系统不做任何处理，退出界面


---

### 表12-2-2 测试用例TU2

- **ID**
    - TUS2-1
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 1000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统向总经理提交转账金额为1000元的收款单等待审核，并退出界面



---
- **ID**
    - TUS2-2
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 2000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统向总经理提交转账金额为2000元的收款单等待审核，并退出界面

---
- **ID**
    - TUS2-3
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 10000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统向总经理提交转账金额为10000元的收款单等待审核


---
- **ID**
    - TUS2-4
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 1000000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统向总经理提交转账金额为1000000元的收款单等待审核


---


## 用例13：银行账户管理

### 表13-1 测试用例套件对付款单的覆盖情况

| 编号                                      | 套件1 | 套件2 |
| ----------------------------------------- | ----- | ----- |
| AccountManagement.Visit.Valid             | TUS1  | TUS2  |
| AccountManagement.Visit.Valid.AccountList | TUS1  | TUS2  |
| AccountManagement.Visit.Invalid           | TUS1  |       |
| AccountManagement.Create.Start            | TUS1  |       |
| AccountManagement.Create.Valid            | TUS1  |       |
| AccountManagement.Create.Invalid.Exist    | TUS1  |       |
| AccountManagement.Create.Invalid.Format   | TUS1  |       |
| AccountManagement.Search.Start            |       | TUS2  |
| AccountManagement.Search.AccountList      |       | TUS2  |
| AccountManagement.Search.Invalid          | TUS1  |       |
| AccountManagement.Update.Start            |       | TUS2  |
| AccountManagement.Update.Valid            |       | TUS2  |
| AccountManagement.Update.Invalid.Exist    |       | TUS2  |
| AccountManagement.Update.Invalid.Format   |       | TUS2  |


### 表13-2-1 测试用例TU1
---
- **ID**
    - TUS1-1
- **输入**
    - 操作员身份
        - 非最高权限
    - 增加账户
    - 查看账户
    - 修改账户
- **预期输出**
    - 系统禁止操作员访问银行账户管理界面


---

- **ID**
    - TUS1-2
- **输入**
    - 操作员身份
        - 最高权限
    - 增加账户
        - 输入银行账户格式不合法
    - 查看账户
    - 修改账户
- **预期输出**
    - 系统禁止操作员提交并提示银行账户格式不合法


---
- **ID**
    - TUS1-3
- **输入**
    - 操作员身份
        - 最高权限
    - 增加账户
        - 输入银行账户已存在
    - 查看账户
    - 修改账户
- **预期输出**
    - 系统禁止操作员提交并提示银行账户已存在


---
- **ID**
    - TUS1-4
- **输入**
    - 操作员身份
        - 最高权限
    - 增加账户
        - 输入银行账户合法
    - 查看账户
    - 修改账户
- **预期输出**
    - 系统创建新的银行账户并显示创建成功


---
- **ID**
    - TUS1-5
- **输入**
    - 操作员身份
        - 最高权限
    - 增加账户
    - 查看账户
        - 输入的银行账户并不存在
    - 修改账户
- **预期输出**
    - 系统提示未找到此银行账户并提醒用户再次输入


---

### 表13-2-2 测试用例TU2

- **ID**
    - TUS2-1
- **输入**
    - 操作员身份
        - 最高权限
    - 增加账户
    - 查看账户
        - 输入的银行账户存在
    - 修改账户
- **预期输出**
    - 系统显示符合条件的银行账户列表


---
- **ID**
    - TUS2-2
- **输入**
    - 操作员身份
        - 最高权限
    - 增加账户
    - 查看账户
    - 修改账户
        - 输入的银行账户格式不合法
- **预期输出**
    - 系统提示修改的银行账户格式不合法并指引用户继续编辑


---
- **ID**
    - TUS2-3
- **输入**
    - 操作员身份
    - 增加账户
    - 查看账户
    - 修改账户
        - 输入的银行账户已经存在
- **预期输出**
    - 系统提示修改的新的银行账户已经存在并指引用户继续编辑


---
- **ID**
    - TUS2-4
- **输入**
    - 操作员身份
    - 增加账户
    - 查看账户
    - 修改账户
        - 输入的银行账户合法
- **预期输出**
    - 系统修改银行账户名并显示修改成功


---

## 用例14：制定现金费用单

### 表14-1 测试用例套件对现金费用单的覆盖情况

| 编号                           | 套件1 | 套件2 |
| ------------------------------ | ----- | ----- |
| Cash.Account                   | TUS1  | TUS2  |
| Cash.Account.Selected          | TUS1  | TUS2  |
| Cash.List.Start                | TUS1  | TUS2  |
| Cash.List.Money.valid          | TUS1  | TUS2  |
| Cash.List.Money.Invalid        | TUS1  | TUS2  |
| Cash.TransferList.Remark       | TUS1  | TUS2  |
| Cash.Sum                       | TUS1  | TUS2  |
| Cash.Sum.Null                  | TUS1  | TUS2  |
| Cash.Number                    | TUS1  | TUS2  |
| Cash.Submission.Allowed        |       | TUS2  |
| Cash.Submission.NotAllowed     | TUS1  | TUS2  |
| Cash.Submission.NotAllowed.Sum | TUS1  |       |
| Cash.End                       |       | TUS2  |
| Cash.End.Save                  | TUS1  | TUS2  |
| Cash.End.NotSave               | TUS1  | TUS2  |



### 表14-2-1 测试用例TU1
---
- **ID**
    - TUS1-1
- **输入**
    - 填写情况
        - 银行账户未选
    - 总额
        - 为0
    - 退出编辑
        - 不保存
- **预期输出**
    - 系统不做任何处理，退出界面


---

- **ID**
    - TUS1-2
- **输入**
    - 填写情况
        - 金额未填
    - 总额
        - 为0
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统提示金额为0，不予提交，指引用户继续编辑

---
- **ID**
    - TUS1-3
- **输入**
    - 填写情况
        - 未填写完
    - 总额
        - 为0
    - 退出编辑
        - 保存
- **预期输出**
    - 系统保存草稿并提示用户成功，退出界面

---
- **ID**
    - TUS1-4
- **输入**
    - 填写情况
        - 填写完
    - 总额
        - 1000
    - 退出编辑
        - 不保存
- **预期输出**
    - 系统不做任何处理，退出界面

---

### 表14-2-2 测试用例TU2

- **ID**
    - TUS2-1
- **输入**
    - 填写情况
        - 填写完
    - 总额
        - 1000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统更新账户余额（减少1000）并显示提交成功

---
- **ID**
    - TUS2-2
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 2000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统更新账户余额（减少2000）并显示提交成功

---
- **ID**
    - TUS2-3
- **输入**
    - 填写情况
        - 填写完
    - 转账总额
        - 10000
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统更新账户余额（减少10000）并显示提交成功


---
- **ID**
    - TUS2-4
- **输入**
    - 填写情况
        - 填写完
    - 总额
        - 超过银行账户余额
    - 退出编辑
        - 不退出
- **预期输出**
    - 系统提示余额不足，不予提交，指引用户继续编辑


---
## 用例15:查看经营历程表

### 表15-1 测试用例套件对需求的覆盖情况


|编号|套件1|套件2|套件3|套件4|
|:---|:---:|:---:|:---:|:---:|---|
BrowseOperationRecord.Browse|||√
BrowseOperationRecord.Browse.Filter|||√|
BrowseOperationRecord.Browse.Export||||√|
BrowseOperationRecord.Redo|√
BrowseOperationRecord.Redo.Invalid|√
BrowseOperationRecord.Redo.Valid|√
BrowseOperationRecord.Redo&Duplicate||√
BrowseOperationRecord.Redo&Duplicate.Invalid|√
BrowseOperationRecord.Redo&Duplicate.Valid||√
BrowseOperationRecord.Redo&Duplicate.Valid.Commit||√
BrowseOperationRecord.Redo&Duplicate.Valid.Return||√


### 表15-2-1 测试用例TUS1
---
- **ID**
  - TUS 1-1
- 输入
  - 用户身份
    - 财务人员
  - 操作请求
    - 红冲
- 预期输出
  - 系统自动将用户所选单据数量取反后入库，并提示用户“操作成功”

---
  - TUS 1-2
- 输入
  - 用户身份
    - 总经理
  - 操作请求
    - 红冲（或 红冲并复制）
- 预期输出
  - 系统不进行红冲，并提示“权限不足”
  
  

---
### 表15-2-2 测试用例TUS2
---

- **ID**
  - TUS 2-1
- 输入
  - 用户身份
    - 财务人员
  - 操作请求
    - 红冲并复制
  - 后续操作
    - 编辑并提交单据
- 预期输出
  - 系统自动将用户所选单据数量取反后入库，并返回用户一张与原单据相同的单据，其中数量为可编辑状态，用户提交后系统将此单据入库并提示“红冲成功”

  
---

- **ID**
  - TUS 2-2
- 输入
  - 用户身份
    - 财务人员
  - 操作请求
    - 红冲并复制
  - 后续操作
    - 放弃编辑
- 预期输出
  - 系统自动将用户所选单据数量取反后入库，并返回用户一张与原单据相同的单据，其中数量为可编辑状态，用户放弃编辑后系统撤销红冲


---
### 表15-2-3 测试用例TUS3
---
- **ID**
  - TUS 3-1
- 输入
  - 操作请求
    - 筛选经营状况表信息
- 预期输出
  - 系统返回满足筛选条件的条目
  

---
### 表15-2-4 测试用例TUS4
---
- **ID**
  - TUS 4-1 
- 输入
  - 操作请求
    - 导出excel表格
- 预期输出
  - 系统导出excel表格并提示“导出成功”
  

---

  
## 用例16:查看经营状况表
### 表16-1 测试用例套件对需求的覆盖情况
|编号|套件1|套件2|
|:---|:---:|:---:|
BrowseOperationCondition.Browse|√||
BrowseOperationCondition.Browse.Filter|√|
BrowseOperationCondition.Browse.Export||√|

### 表16-2-1 测试用例TUS1
---
- **ID**
  - TUS 1-1
- 输入
  - 操作请求
    - 筛选经营状况表信息
- 预期输出
  - 系统返回满足筛选条件的条目
  

---
### 表16-2-2 测试用例TUS2
---
- **ID**
  - TUS 2-1 
- 输入
  - 操作请求
    - 导出excel表格
- 预期输出
  - 系统导出excel表格并提示“导出成功”
  

---

## 用例17:查看销售明细表
### 表17-1 测试用例套件对需求的覆盖情况
|编号|套件1|套件2|
|:---|:---:|:---:|
BrowseSaleDetail.Browse|√||
BrowseSaleDetail.Browse.Filter|√|
BrowseSaleDetail.Browse.Export||√|

### 表17-2-1 测试用例TUS1
---
- **ID**
  - TUS 1-1
- 输入
  - 操作请求
    - 筛选销售明细表信息
- 预期输出
  - 系统返回满足筛选条件的条目
  

---
### 表17-2-2 测试用例TUS2
---
- **ID**
  - TUS 2-1 
- 输入
  - 操作请求
    - 导出excel表格
- 预期输出
  - 系统导出excel表格并提示“导出成功”
  

---



## 用例18:期初建账
### 表18-1 测试用例套件对需求的覆盖情况
|编号|套件1|套件2|套件3|套件4|
|:---|:---:|:---:|:---:|:---:|
AccountInitialization.Create.Success|√
AccountInitialization.Create.Fail|√
AccountInitialization.Browse||√
AccountInitialization.Browse.Invalid|||√
AccountInitialization.Browse.Select||√
AccountInitialization.Browse.Commodity||√
AccountInitialization.Browse.Client||√
AccountInitialization.Browse.BankAccount||√
AccountInitialization.Sort||√
AccountInitialization.Sort.Commodity||√
AccountInitialization.Sort.Client||√
AccountInitialization.Sort.BankAccount||√
AccountInitialization.Return||||√
### 表18-2-1 测试用例TUS1
---
- **ID**
  - TUS 1-1
- 输入
  - 用户权限
    - 最高权限
  - 操作请求
    - 期初建账
- 预期输出
  - 系统保存当前商品信息，客户信息，银行账户信息并提示“操作成功”


---
- **ID**
  - TUS 1-2
- 输入
  - 用户权限
    - 非最高权限
  - 操作请求
    - 期初建账
- 预期输出
  - 系统不进行期初建账，并提示“权限不足”
  

---  
### 表18-2-2 测试用例TUS2
---
- **ID**
  - TUS2-1 
- 输入
  - 用户权限
    - 最高权限
  - 查看内容
    - 商品信息
  - 选择排序条件
    - 排序条件A（因排序条件过多，不再一一列举，条件可以是：商品名，商品编号，添加日期，库存量，进价，售价）
- 预期输出
  - 系统返回按A排序的商品信息
  

---
- **ID**
  - TUS2-2
- 输入
  - 用户权限
    - 最高权限
  - 查看内容
    - 客户信息
  - 选择排序条件
    - 排序条件A（因排序条件过多，不再一一列举，条件可以是：名称，编号，添加日期，应付，应收，VIP等级）
- 预期输出
  - 系统返回按A排序的客户信息


---
- **ID**
  - TUS2-3
- 输入
  - 用户权限
    - 最高权限
  - 查看内容
    - 银行账户信息
  - 排序条件
    - 排序条件A（可以是名称或余额）
- 预期输出
  - 系统返回按A排序的银行账户信息
  

  
---
### 表18-2-3 测试用例TUS3
---
- **ID**
  - TUS3-1
- 输入
  - 用户权限
    - 非最高权限
  - 选择操作
    - 查看已有账目
- 预期输出
  - 系统提示“无权限”


---
### 表18-2-4 测试用例TUS4
---
- **ID**
  - TUS4-1
- 输入
  - 选择操作
    - 返回
- 预期输出
  - 系统返回上一界面


---

## 用例19:审批单据
### 表19-1 测试用例套件对需求的覆盖情况
|编号|套件1|套件2|
|:---|:---:|:---:|
JudgeReceipt.Browse|√
JudgeReceipt.Select|√
JudgeReceipt.Judge|√
JudgeReceipt.Judge.Valid|√
JudgeReceipt.Judge.Invalid|√
JudgeReceipt.Modify||√
JudgeReceipt.Modify.Draft||√
JudgeReceipt.Modify.Submit.Valid||√
JudgeReceipt.Modify.Invalid||√
JudgeReceipt.Modify.Return||√
JudgeReceipt.Modify.Return.Force||√
JudgeReceipt.Modify.Return.Save||√

### 表19-2-1 测试用例TUS1
---
- **ID**
  - TUS 1-1
- 输入
  - 选择单据数量
    - 1
  - 所选单据状态
    - 全部为“提交”
  - 行为
    - 通过
- 预期输出
  - 系统返回“已通过”，并改变此单据状态为”通过“
  

  
---
- **ID**
  - TUS 1-2
- 输入
  - 选择单据数量
    - 5
  - 所选单据状态
    - 全部为“提交”
  - 行为
    - 通过
- 预期输出
  - 系统返回“已通过”，并改变所有单据状态为”通过“
  
  

---
- **ID**
  - TUS 1-3
- 输入
  - 选择单据数量
    - 1
  - 所选单据状态
    - 非提交
  - 行为
    - 通过
- 预期输出
  - 系统返回“失败，此单据不处于提交状态！“
  
  


---
- **ID**
  - TUS 1-4
- 输入
  - 选择单据数量
    - 4
  - 所选单据状态
    - 至少有一张单据为非提交状态
  - 行为
    - 通过
- 预期输出
  - 系统返回“失败，有单据不处于提交状态！“
  

---
- **ID**
  - TUS 1-5
- 输入
  - 选择单据数量
    - 1
  - 所选单据状态
    - 全部为“提交”
  - 行为
    - 不通过
- 预期输出
  - 系统返回“已不通过”，并改变此单据状态为”不通过“
  

  
---
- **ID**
  - TUS 1-6
- 输入
  - 选择单据数量
    - 5
  - 所选单据状态
    - 全部为“提交”
  - 行为
    - 不通过
- 预期输出
  - 系统返回“已不通过”，并改变所有单据状态为”不通过“
  
  

---
- **ID**
  - TUS 1-7
- 输入
  - 选择单据数量
    - 1
  - 所选单据状态
    - 非提交
  - 行为
    - 不通过
- 预期输出
  - 系统返回“失败，此单据不处于提交状态！“
  
  


---
- **ID**
  - TUS 1-8
- 输入
  - 选择单据数量
    - 4
  - 所选单据状态
    - 至少有一张单据为非提交状态
  - 行为
    - 不通过
- 预期输出
  - 系统返回“失败，有单据不处于提交状态！“
  

---
### 表19-2-2 测试用例TUS2
---
- **ID**
  - TUS 2-1
- 输入
  - 操作
    - 修改单据
  - 输入内容是否有非法内容（参见对应用例）
    - 否
  - 用户退出前是否保存更改
    - 否
  - 用户是否提交修改
    - 否
- 预期输出
  - 系统放弃所有更改并返回上一界面
  

---
- **ID**
  - TUS 2-2
- 输入
  - 操作
    - 修改单据
  - 输入内容是否有非法内容（参见对应用例）
    - 是
  - 用户退出前是否保存更改
    - 否
  - 用户是否提交修改
    - 否
- 预期输出
  - 系统放弃所有更改并返回上一界面
  

---
- **ID**
  - TUS 2-3
- 输入
  - 操作
    - 修改单据
  - 输入内容是否有非法内容（参见单据用例）
    - 是
  - 用户退出前是否保存更改
    - 是
  - 用户是否提交修改
    - 否
- 预期输出
  - 系统在输入非法的字段处提示对应的错误（参见单据用例），并要求用户继续更改
  
  

---
- **ID**
  - TUS 2-4
- 输入
  - 操作
    - 修改单据
  - 输入内容是否有非法内容（参见对应用例）
    - 否
  - 用户退出前是否保存更改
    - 是
  - 用户是否提交修改 
    - 否
- 预期输出
  - 系统保存更改并返回上一界面，不改变单据状态
  
  

---
- **ID**
  - TUS 2-5
- 输入
  - 操作
    - 修改单据
  - 输入内容是否有非法内容（参见对应用例）
    - 否
  - 用户退出前是否保存更改
    - 否
  - 用户是否提交修改
    - 是
- 预期输出
  - 系统提交修改，记录单据首次提交内容和修改时间，并将单据状态改为“已通过审批”，返回提示“操作成功”
  

---
- **ID**
  - TUS 2-6
- 输入
  - 操作
    - 修改单据
  - 输入内容是否有非法内容（参见对应用例）
    - 是
  - 用户退出前是否保存更改
    - 否
  - 用户是否提交修改
    - 是
- 预期输出
  - 系统在输入非法的字段处提示对应的错误（参见单据用例），并要求用户继续更改
  
  

---

## 用例20:制定销售策略
### 表20-1 测试用例套件对需求的覆盖情况
|编号|套件1|套件2|
|:---|:---:|:---:|
Promotion.Create.New|√
Promotion.Create.Draft|√
Promotion.Draft.New|√
Promotion.Save|√
Promotion.Submit.Valid||√
Promotion.Submit.Invalid||√
Promotion.Return.Tips||√
Promotion.Return.Save||√
Promotion.Return.Cancel||√

### 表20-2-1 测试用例TUS1
---
- **ID**
  - TUS1-1
- 输入
  - 用户行为
    - 新建一个优惠
  - 系统中是否有草稿
    - 是
  - 是否采用草稿
    - 是
- 预期输出
  - 系统返回上一次保存的草稿供用户编辑



---
- **ID**
  - TUS1-2
- 输入
  - 用户行为
    - 新建一个优惠
  - 系统中是否有草稿
    - 否
  - 是否采用草稿
    - 否
- 预期输出
  - 系统返回全新的优惠单供用户填写
  

  
---
- **ID**
  - TUS1-3
- 输入
  - 用户行为
    - 新建一个优惠
  - 系统中是否有草稿
    - 是
  - 是否采用草稿
    - 否
- 预期输出
  - 系统删除草稿并返回全新的优惠单供用户填写


---
### 表20-2-2 测试用例TUS2
---
- **ID**
  - TUS2-1
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 否
  - 用户退出前是否有未保存内容
    - 否
  - 用户是否选择保存
    - 否
  - 用户是否提交
    - 否
- 预期输出
  - 系统返回上一界面
  
  

---
- **ID**
  - TUS2-2
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 是
  - 用户退出前是否有未保存内容
    - 否
  - 用户是否选择保存
    - 否
  - 用户是否提交
    - 否
- 预期输出
  - 系统返回上一界面


---
- **ID**
  - TUS2-3
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 否
  - 用户退出前是否有未保存内容
    - 是
  - 用户是否选择保存
    - 是
  - 用户是否提交
    - 否
- 预期输出
  - 系统保存用户最新更改内容并返回上一界面



---
- **ID**
  - TUS2-4
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 否
  - 用户退出前是否有未保存内容
    - 是
  - 用户是否选择保存
    - 否
  - 用户是否提交
    - 否
- 预期输出
  - 系统放弃更改内容并返回上一界面
  
  

---
- **ID**
  - TUS2-5
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 是
  - 用户退出前是否有未保存内容
    - 是
  - 用户是否选择保存
    - 是
  - 用户是否提交
    - 否
- 预期输出
  - 系统在输入错误的字段后提示“输入有误”，并要求用户返回更改
  
  

---
- **ID**
  - TUS2-6
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 是
  - 用户退出前是否有未保存内容
    - 是
  - 用户是否选择保存
    - 否
  - 用户是否提交
    - 否
- 预期输出
  - 系统放弃更改内容并返回上一界面
  
  

---
- **ID**
  - TUS2-7
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 是
  - 用户退出前是否有未保存内容
    - 是
  - 用户是否选择保存
    - 否
  - 用户是否提交
    - 是
- 预期输出
  - 系统在输入错误的字段后提示“输入有误”，并要求用户返回更改
  
  

---
- **ID**
  - TUS2-8
- 输入
  - 用户是否存在非法输入（包括开始日期早于当前日期或持续时间小于等于0）
    - 否
  - 用户退出前是否有未保存内容
    - 是
  - 用户是否选择保存
    - 否
  - 用户是否提交
    - 是
- 预期输出
  - 系统生效相关优惠，并提示“操作成功”
  

---
  