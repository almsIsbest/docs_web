[TOC]
## 图
### 图的基本概念
![e3cdd1d18f980afceaf3dbbb316b9860.png](en-resource://database/846:1)
![ced8db64f547ba07c0f14bc700087364.png](en-resource://database/848:1)
![1b6c39067ee81135b60b9fb1fc1ea13b.png](en-resource://database/850:1)
![bdc7ead040b74669a99b806fda4f27eb.png](en-resource://database/852:1)
![d1a8dd3fbc1cabdc39ed5a69418b512f.png](en-resource://database/854:1)
![5ed13a1db8b763c56fbd9e978dca56a0.png](en-resource://database/856:1)
![7d001eaedd8de48403f7b110f8d19779.png](en-resource://database/858:1)
![b689ee6e51c8740a38f379f8c456fbab.png](en-resource://database/860:1)
![72b45578fd69ab5b477231e398e4e7d8.png](en-resource://database/862:1)
### 图的存储结构
#### 邻接矩阵表示法
![395ef541a9873eaadd57521a1afdaa55.png](en-resource://database/864:1)
![c1eb0034971d8e0a8388bc9ba8cf65e5.png](en-resource://database/866:1)
#### 邻接表表示法
![6f05698ef982a2c63cbc3c493127cce2.png](en-resource://database/868:1)
![d636da7cb7a03eeda19c2cc2050efaaf.png](en-resource://database/870:1)
![0e61f3dbdca1dc4f67cd0e70a2bc3a52.png](en-resource://database/872:1)

### 图的遍历
>图的遍历分为深度优先遍历和广度优先遍历

#### 深度优先搜索遍历

图的深度优先搜索（Depth First Search），简称 DFS。从初始访问节点出发，初始访问节点可能有多个 邻接节点（直连），深度优先遍历的策略为：
* 首先访问第一个邻接节点
* 然后以这个 被访问的邻接节点作为初始节点
* 然后循环这个操作。

可以这样理解：每次都在访问完 当前节点 后，首先 访问当前节点的第一个邻接节点。可以看到：这样的访问策略是 优先往纵向 挖掘深入，而 不是 对一个节点的所有邻接节点进行 横向访问。那么显然深度优先搜索是一个 递归过程
![5e11008a23bba35ecbf9edf80338828f.png](en-resource://database/878:1)
![3358332998ed837cd701e550382b53a3.png](en-resource://database/880:1)
![36f13cbee2c8008f95d02e2daff8c4de.png](en-resource://database/882:1)
#### 广度优先遍历
![e7b2fc1768a67b5b9af6720306f8c838.png](en-resource://database/884:1)
### 最小生成树
#### 生成树
#### 最小生成树的生成
### 最短路径和拓扑排序
#### 最短路径
#### 拓扑排序
