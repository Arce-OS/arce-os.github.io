+++
title = "ArceOS"
+++

<div class='index-container'>
<div id='nav1' class='contnt-block'>

## 组件化 OS 的设计目标
#### 1. 易于定制
  - 适应硬件与应用需求
  - 高安全、高性能、专用化
#### 2. 易于复用
  - Rust crate
  - Rust for Linux
#### 3. 易于开发
  - 层次化组件隐藏底层细节
  - 像开发应用一样开发 OS
</div>
<div id='nav2' class='contnt-block'>

## 组件化 OS 的现有功能

#### 1. 多架构: x86 64/aarch64/riscv64
#### 2. 多种调度算法:  FIFO、Round-robin、CFS
#### 3. VirtlO net/blk/gpu 驱动
#### 4. 基于 smoltcp 的网络栈
#### 5. FAT32 文件系统
#### 6. Rust / C 语言应用程序
</div>
<div id='nav3' class='contnt-block'>

## ArceOS 整体架构
<!-- ![](https://ssl.cdn.maodouketang.com/FmfBCYTt1qnkAC88QTI9nXKdFYAp) -->
<img src='https://ssl.cdn.maodouketang.com/FmfBCYTt1qnkAC88QTI9nXKdFYAp' width="30%"></img>
</div>
<div id='nav4'class='contnt-block'>

## ArceOS 组件设计
  ### crates
  #### 1. 与 OS 的设计无关的公共组件
  - linked list
  - page_table
  - allocator
  - scheduler
  - drivers
  - spinlock
  ### modules
  #### 1. 与 OS 的设计比较耦合的组件
   - axruntime
   - axtask
   - axnet
   - axsync
  #### 2. 对 crates 组件的选取与封装
   - axalloc
   - axdriver
   - axdisplay
</div>
<div id='nav5' class='contnt-block'>

## 组件化 OS 的设计目标
1. 灵活的功能配置
2. 组件间相互调用
3. 应用自定义组件
4. 独立的单元测试
   </div>
<div id='nav6' class='contnt-block'>

## ArceOS 最新进展
1. 在ArceOS上支持了10Gb NIC
2. 在ArceOS上支持了lwip网络协议栈
3. 把tokio移植到rusty-hermit
4. rosrust 可以运行 publisher-node
5. 树莓派运行 ArceOS 问题总结
   </div>
<div id='nav7' class='contnt-block'>

## ArceOS 未来⼯作
#### 正在进行的工作
- 硬件：树莓派 4B
- 调度算法：多核多队列/实时调度
- 内存分配算法：mimalloc/TLSF
- ⽹络栈：lwip
- ⽂件系统：ext2/ext3
- ⽤户库：Rust std 移植
- ⽀持复杂应⽤：Redis
- 异步 I/O

 #### 计划实现的功能
- 硬件：更多 RISC-V/ARM 开发版
- 真实驱动：e1000/ixgbe ⽹卡
- 多种内核形态：宏内核/微内核
- 系统兼容层：兼容 Linux ABI
- ⽀持复杂应⽤：NGINX/tokio
</div>
</div>