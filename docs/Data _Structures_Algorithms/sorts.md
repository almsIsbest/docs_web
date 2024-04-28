
### 排序算法
#### 排序的分类
分两类：内部排序、外部排序
* 内部排序：

指将需要处理的所有数据，都加载到**内存**里进行排序
* 外部排序：
  数据量过大，无法全部加载到内存中，需要借助**外部存储器**进行排序。

#### 常见的排序分类
* 内部排序
    * 插入排序
        * 直接插入排序
        * 希尔排序
    * 选择排序
        * 简单选择排序
        * 堆排序
    * 交换排序
        * 冒泡排序
        * 快速排序

    * 归并排序
    * 基数排序
* 外部排序

### 冒泡算法
#### 基本介绍

冒泡排序（Bubble Sorting）的基本思想：通过对待排序序列 从前向后（从下标较小的元素开始），依次比较相邻元素的值，若发现逆序则交换，使值较大的元素逐渐从前移向后部，就像水底下的旗袍一样逐渐向上冒。优化点：因为排序过程中，个元素不断接近自己的位置，如果一趟比较下来没有进行过交换，就说明序列有序，因此要在排序过程中设置一个标志判断元素是否进行过交换。从而减少不必要的比较。（该优化点可以在完成基本的冒泡排序之后再做）
```java
public static void bubbleSort(int[] arr) {  int len = arr.length;  boolean isSwap = false;  for(int i = 0; i < len - 1 ;i ++){      isSwap = false; // 优化，如果没有交换，说明已经有序，直接退出      
for(int j = 0 ; j < len - 1 -i ; j++){            if(arr[j] > arr[j+1]){                swap(arr , j , j+1);                isSwap = true;            }      }      if(!isSwap){          break;      }  }}
public  static  void swap(int[] arr , int i , int j){    int tmp = arr[i];    arr[i] = arr[j];    arr[j] = tmp;}


```

### 选择排序
#### 基本思想

选择排序（select sorting）也是一种简单的排序方法。
基本思想为：
第一次从 arr[0]~arr[n-1] 中选取最小值，与 arr[0] 交换
第二次从 arr[1]~arr[n-1] 中选取最小值，与 arr[1] 交换
第 i 次从 arr[i-1]~arr[n-1] 中选取最小值，与 arr[i-1] 交换依次类图，总共通过 n - 1 次，得到一个按排序码从小到大排列的有序序列
```java
public static void selectSort(int[] arr){    int len =arr.length;    for(int i = 0 ; i < len - 1 ; i++){        int minIndex = i ;        for(int j = i+1 ; j < len ; j++){            if(arr[j] < arr[minIndex]){                minIndex = j;            }        }        swap(arr , i , minIndex);    }}

```
### 插入排序

插入排序（Insertion Sorting）的基本思想是：
把 n 个待排序的元素 看成 为一个 有序表 和 无序表开始时，有序表中只包含一个元素，无序表中包含有 n - 1 个 元素排序过程中每次 从无序表中取出第一个元素，把它的排序码 依次与有序表元素的排序码进行比较，将它插入到有序表中的适当位置，使之成为新的有序表。
```java
public static void insertionSort(int[] arr){     int len = arr.length;     for(int i = 1 ; i < len  ; i ++){         for(int j = 0 ; j <= i ; j++){             if(arr[j] > arr[i]){                swap(arr,i , j);                break;             }         }     }}


```
### 希尔排序
#### 基本思想
希尔排序是优化的插入排序

### 快速排序
快速排序是冒泡排序的改进

### 归并排序

归并排序（merge sort）是利用 归并 的思想实现的排序方法，该算法采用经典的 分治（divide-and-conquer）策略 ：
分（divide）：将问题分成一些小的问题，然后递归求解
治（conquer）：将分的阶段得到的各答案「修补」在一起


### 基数排序

**正常基数排序**对**负数**不会进行排序，但可以找出最下负数并每个数减去最小负数，使得所排序列都为正最后在还原回去加上那个最小值


### 堆排序

优先队列和堆存入的结构相似

对常见应用

### 外部排序
