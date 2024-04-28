## java 基础

### 深入理解Java基本数据类型


#### 数据类型分类
* * *
java 中的数据类型有两类：

* 值类型（又叫内置数据类型，基本数据类型）
* 引用类型（除值类型之外，都是引用类型，包括String、数组）
##### 值类型
java语言提供了8中基本类型，大致分为4类

| 基本数据类型 |分类  |比特数  | 默认值   | 取值范围            |说明  |
| --- | --- | --- |-------|-----------------| --- |
| boolean |布尔型  |8位  | false | \{false ,true\} |  |
|char  |字符型  |16位  |'\u0000'  | [0, $2^{16} - 1$]  | 存储 Unicode 码，用单引号赋值 |
| byte | 整数型 |8位  |0  |[-$2^7$, $2^7 - 1$]  |  |
| short | 整数型 |16位  |0  |[-$2^{15}$ ,$2^{15}-1$ ]  |  |
|int  |整数型  | 32位 | 0| [-$2^{31}$, $2^{31} - 1$]|  |  |
| long |整数型  | 64位 |0L |[-$2^{63}$, $2^{63} - 1$]  |赋值时一般在数字后加上 l 或 L  |
| float |浮点型  |32位  |+0.0f  |[$2^{-149}$, $2^{128} - 1$]  |赋值时必须在数字后加上 f 或 F  |
| double |浮点型  |  64 位 | +0.0D |[$2^{-1074}$, $2^{1024} - 1$]  | 赋值时一般在数字后加 d 或 D |

##### 值类型和引用类型的区别
* 从概念方面来说
    * 基本类型：变量名指向具体的数值
    * 引用类型：变量名只想村数据对象的内存地址
* 从内存方面来说
    * 基本类型：变量在声明之后，java就会立刻分配内存空间。
    * 引用类型：类似通过（c指针）指向对象实体。
* 从实用方面来说
    * 基本类型：使用时需要赋具体的值。
    * 引用类型：可以赋值null
#### 数据转换
  ***
Java 中，数据类型转换有两种方式：
* 自动转换
* 强制转换

##### 自动转换

一般请款下，定义了某个数据类型的变量，就不能随意转换。但是Java允许用户对基本类型做有限度的类型转换。如果符合以下条件，则Java将会自动做类型转换：
* 由小数据转换为大数据
  显而易见的时，“小”数据类型的数值表示范围小于“大”数据类型的数值范围，即精度小于“大”数据类型。反之从小转大就不会存在精度丢失。
* 转换前后的数据类型要兼容
  由于boolean类型只能存放true活false，这与整数或字符时不兼容的，因此不可以做类型转换。
* 整型类型和浮点型进行计算后，结果ihui'zhuan'w浮点类型。
##### 强制转换
在不符合自动转换条件时或者根据用户的需要，可以对数据类型做强制的转换。

#### 装箱和拆箱
***
##### 包装类、装箱、拆箱
```java
Byte <-> byte
Short <-> short
Integer <-> int
Long <-> long
Float <-> float
Double <-> double
Character <-> char
Boolean <-> boolean
```
引入包装类的目的就是：提供一种机制，是的基本数据类型可以与引用类型互相转换。

基本数据类型与包装类的转换被称为装箱和拆箱。
* 装箱（boxing）是将值类型转换为引用类型。例如：int 转 Integer装箱过程是通过调用包装类的 valueOf 方法实现的。
* 拆箱（unboxing）是将引用类型转换为值类型。例如：Integer 转 int拆箱过程是通过调用包装类的 xxxValue 方法实现的。（xxx 代表对应的基本数据类型）。
#### 判等问题
java 中，通常是同equals或==进行判等操作。
* 对基本类型，比如int、long进行的判等，只能是==，比较值
* 对引用类型，比如Integer、Long和String进行判等，需要使用equals进行内容判等。
##### hashcode 和 equals要配对实现
``` java

按照改进后的 equals 方法，这 2 个对象可以认为是同一个，Set 中已经存在了 p1 就应该包含 p2，
但结果却是 false。出现这个 Bug 的原因是，散列表需要使用 hashCode 来定位元素放到哪个桶。
如果自定义对象没有实现自定义的 hashCode 方法，就会使用 Object 超类的默认实现，
得到的两个 hashCode 是不同的，导致无法满足需求。要自定义 hashCode，我们可以直接使用 Objects.hash 方法来实现。

```

#### 数值计算
***
##### 浮点数计算问题
计算机是把数值保存在了变量中，不同类型的数值变量能保存的数值范围不同，当数值超过类型能表达的数值上限则会发出溢出问题。
```java
System.out.println(0.1 + 0.2); // 0.30000000000000004
System.out.println(1.0 - 0.8); // 0.19999999999999996
System.out.println(4.015 * 100); // 401.49999999999994
System.out.println(123.3 / 100); // 1.2329999999999999
double amount1 = 2.15;
double amount2 = 1.10;
System.out.println(amount1 - amount2); // 1.0499999999999998

```
上面的几个示例，输出结果和我们预期的很不一样。为什么会是这样呢？
出现这个问题的主要原因是，计算机是以二进制存储数值，浮点数也不例外。Java 采用了 IEEE 754 标准实现浮点数的表达和运算，你可以通过这里查看数值转化为二进制的结果。
> 还得研究一下浮点数

* [ ] 还得重点看一下 浮点数！

**浮点数无法精确表达和运算的场景，一定要使用BigDecimal类型。**


**如果我们希望只比较 BigDecimal 的 value，可以使用 compareTo 方法。**

##### 数值溢出
数值计算还有一个要小心的点是溢出，不管是 int 还是 long，所有的基本数值类型都有超出表达范围的可能性。

```java

long l = Long.MAX_VALUE;System.out.println(l + 1); // -9223372036854775808 
System.out.println(l + 1 == Long.MIN_VALUE); // true
```

**显然这是发生了溢出，而且是默默的溢出，并没有任何异常。这类问题非常容易被忽略，改进方式有下面 2 种**

方法一是，考虑使用 Math 类的 addExact、subtractExact 等 xxExact 方法进行数值运算，这些方法可以在数值溢出时主动抛出异常。


方法二是，使用大数类 BigInteger。BigDecimal 是处理浮点数的专家，而 BigInteger 则是对大数进行科学计算的专家。

#### 参考资料
* [《Java 编程思想（Thinking in java）》](https://book.douban.com/subject/2130190/)
* [《Java核心技术 卷I基础知识》](https://book.douban.com/subject/26880667/)
* [《Java 业务开发常见错误 100 例》](https://time.geekbang.org/column/intro/100047701)
* [Java 基本数据类型和引用类型](https://juejin.im/post/59cd71835188255d3448faf6)
* [深入剖析 Java 中的装箱和拆箱](https://www.cnblogs.com/dolphin0520/p/3780005.html)
### Java 面向对象
#### this和super关键字
this的使用方式
* 调用当前类的方法：
* this（）可以调用当前类的构造方法
* this可以作为参数在方法中传递
* this 可以作为参数在构造方法中传递
* this 可以作为方法的返回值，放回当前类的对象。
> 在继承类的时候 this作为参数传入方法时是指代的是初始化的对象

super 关键字的用法主要有三种：
* 指向父类对象
* 调用父类的方法
* super（）可以调用父类的构造方法

**代码初始化顺序**
1.父类静态变量
2.父类静态代码块
3.子类静态变量
4.子类静态代码块
5.父类非静态变量
6.父类非静态代码块
7.父类构造函数
8.子类非静态变量
9.子类非静态代码块
10.子类构造函数


#### 内部类
> 为什么需要内部类？主要原因有三点。
* 内部类可以访问该类定义所在的作用域中的数据，包括私有的数据
* 内部类可以对同一个包中的其他类隐藏起来。
* 当想要定义一个回调函数且不想编写大量代码时，使用匿名（anonymous）内部类比较便捷。
*

##### 匿名内部类
匿名内部类是唯一一种没有构造方法得类。匿名内部类的命名名字取得是外部类然后$1 数字1代表的是在这个外部类第几个初始化的匿名内部类。


#### lambda 表达式
是一种函数试编程。
> lambda表达式形式是
（...参数) ->以及一个表达式，如果一个表达式无法完成计算就放在{}里。

还能使用方法的引用：
* Object:: instaceMethod
* Class::staticMethod
* Class::instaceMethod

函数式编程核心是对方法体的补充
例如：
```java

x-> system.out.println(x) 等价于
system.out::print（）

```


#### final 关键字
##### final数据
1.编译器常量，它永远不会改变。
2.在运行期初始化的一个值，先被初始化一个final变量指向空方向，一旦呗初始化后就不能改变句柄指向。
>成员属性定义为final必须被构造器初始化时要初始化。方法中的参数自变量是在每次调用方法时给与参数值指向就行。

##### final方法
1.为了上溯，不想让继承的类对此方法进行改变。

##### final类
1.不想被继承。


### 深入理解Java 方法
##### todo
### 深入理解 Java 数组
##### todo
### 深入理解 Java 枚举
基本定义枚举类型的方式
```java
public enum Size
{
SMALLfS"), MEDIUMC'M"), LARGEfL"), EXTRA_LARGE("XL");
private String abbreviation;
private Size(String abbreviation) { this,abbreviation = abbreviation; }
public String getAbbreviation() { return abbreviation; }
}

```
### Java 控制语句
##### todo
### 深入理解 Java 异常
##### 处理错误
1.出现错误后，希望返回到一种安全状态，并能够让用户执行一些其他的命令；
2.允许用户保存所有操作的结果，并以妥善的方式终止程序。
>那类问题需要关注

1.用户输入错误

2.设备错误

3.物理限制

4.代码错误

如果某个方法不能够采用正常的途径完成它的任务，就可以通过另外一个路径退出方法。在这种情况下，方法并不返回任何值，而是抛出（throw）一个封装了错误信息的对象。需要注意的是这个方法会立马退出，带着错误信息。调用此方法的方法体也会带着异常处理器（exception handler ）
##### 异常分类
异常对象都是派生于Throwable类。
###### error 和 exception
error和exception 都是Throwable的子类
常见的error是：
* AssertionError -断言错误
* VirtualMachineError - 虚拟机错误
* UnsupportedClassVersionError - java类版本错误
* StackOverflowError - 栈溢出错误
* OutOfMemoryError - 内存溢出
  常见的Exception是：
* ClassNotFoundException- 应用程序试图加载类，找不到相应的类，抛出该异常。
* CloneNotSupportedException - 当调用Object类中的clone方法克隆对象，但该对象的无法实现Cloneable接口时，抛出该异常
* IllegalAccessException - 拒绝访问一个类的时候，抛出该异常。
* InstantiationException - 当试图使用Class类中的newInstance 方法一个类的实例，而指定类对象因为是一个接口或是抽象类而无法实例化时，抛出该异常。
* InterruptedException - 一个线程被另一个线程中断，抛出该异常。
*  NoSuchFieldException - 请求的变量不存在
* NoSuchMethodException - 请求的方法不存在
###### 自定义异常类
自定义异常类，只需要继承Exception 和 RuntimeException
###### 异常和线程
如果java程序只有一个线程，那么没有被任何代码处理的异常会导致程序终止。如果java程序是多线程的，那么没有被任何代码处理的异常仅仅会导致异常所在的线程结束。
### 深入理解 Java 泛型
##### todo
### 深入理解 Java 反射和动态代理
##### todo
### 深入理解 Java 注解Java
##### todo
### 常用工具类
##### todo
### 深入理解 Java String 类型
##### todo