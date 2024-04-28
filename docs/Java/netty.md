[TOC]
### Netty 学习之路思维导图
![f2f2a78258f9a3bd73eb5a8c2b3c84c8.png](en-resource://database/1087:1)


### 为什么选择Netty?

#### IO演变
***阻塞式iO(BIO)*** 在面对高性能并发时性能太差。瓶颈是出现在了IO系统调用，在服务端绑定端口号，开始监听端口后，在**系统调用accpet()将被阻塞**，直到一个连接建立。其次，对于**读写**也会进行IO阻塞直到有输入流进来/输出流出去。对于BIO改进可以加入线程进行优化，对于连接来说单线程还是阻塞，但是处理业务IO的操作可以开辟新线程进行处理，一定程度上可以优化这个并发速率，但还存在问题，线程的增加就会额外增加系统开销（使用线程池可以改善但在并发量大时读写操作因是流传输没有缓冲区还是会阻塞线程使的新连接无法分配到线程里进行处理也会堵塞连接）。
![854b38e078af12bef2e433b3b6b0681f.png](en-resource://database/1037:1)


***非阻塞IO(NIO)*** 使用复用IO解决了，单个线程因连接或者单独的读写IO阻塞线程，可以进行一个线程能同时对多个IO操作加一监听来循环找出那个IO上发生了系统调用来做处理。**必须是底层操作系统提供支持**。在读写IO做出的改善是加入了Buffer，比起BIO流似读取循环遍历系统调用逐个字节流读取数据然后在处理，在这个过程中就会导致线程在做无用的io等待，Buffer是先把数据读取到buffer再做处理，这段时间不需要线程在做等待。
![28b1dab0184b128f8abdccb82cbf3ae6.png](en-resource://database/1039:1)
![5b1905133c24873d161daf2894b70357.png](en-resource://database/1041:1)
![2493c5706894bacce834cbee7777f5f6.png](en-resource://database/1043:1)

#### Reactor基于NIO的模型演变

![dea47cbf281d78783cb81f4d09f3de8f.png](en-resource://database/1045:1)
![31afc8fd3e9c06d0a3a2dbb4ceea3e3d.png](en-resource://database/1047:1)
![8faecbce8926d5a32f4623a15c665fb4.png](en-resource://database/1049:1)
![65ee2eab8ee9f7f8a547fa7115d1960a.png](en-resource://database/1051:1)
![0b6b8e94433c91d67f4e47d494c523cc.png](en-resource://database/1053:1)
[上述图片和内容来源](https://alibaba-cloud.medium.com/essential-technologies-for-java-developers-i-o-and-netty-ec765676fd21)

#### 选择Netty的原因
![b699502abf2e54b7009fdb60ac1374ba.png](en-resource://database/1055:1)
![e05e978608155460fa61a775684e2c92.png](en-resource://database/1057:1)
![8b7a01b710462f470a14c7e93e74806e.png](en-resource://database/1059:1)

### netty学习心得
#### netty 核心点
根据java 原生NIO，Netty根据基于NIO实现核心点分为：

1.  channel :通道上的挂钩的pipeline责任链处理IO事件。
2.  多路复用器Selector：使用Reactor模型，实现方式是EventLoop 数组的线程，分成了Reactor模型，服务器最佳方式是使用主从Reactor模型来实现多路复用器。
3.  ByteBuffer: netty ByteBuffer
    抽象出来成ByteBuf（这部分还得了解学习）
#### 源码学习
##### 服务端

1.  服务端创建时序图
    ![dbce44960a420c2452caa23ea2971e73.png](en-resource://database/1069:1)
    步骤一：创建ServerBootStrap 无参构造器，使用的是Builder模式。
    步骤二：设置并绑定Reactor模型。Netty的Reactor线程池是EventLoopGroup,它实际是Eventloop的数组。

##### 客户端
1.服务端创建时序图
![e339f45cc9526cdd5640c4909cbbb852.png](en-resource://database/1071:1)
步骤一：用户线程创建Bootstrap实例，通过API设置创建客户端相关的参数，异步发起客户端连接。
步骤二：创建处理客户端连接、I/O读写的线程组NIoEventLoopGroup.可以通过构造函数指定I/O线程的个数，默认为CPU内核数的2倍。
步骤三：通过Bootstrap的ChannelFactory和用户指定的Channel类型创建用于客户端连接的NioSocketChannel，它的功能类似于JDK NIO类库提供SocketChannel
步骤四：创建默认的Channel Handler Pipeline ，用于调度和执行网络事件。
步骤五：异步发起TCP连接，判断连接是否成功。如果成功，则直接酱NioSocketchannel注册到多路复用器上，监听读操作位，用于数据报读取和消息发送；如果没有立即连接成功，则注册连接监听位到多路复用器，等待连接结果。
步骤六：注册对应的网络监听状态到多路复用器上
步骤七：由多路复用器在I/O线程中轮询各Channel，处理连接结果
步骤八：如果连接成功，设置Future结果，处理连接结果。
步骤九：由ChannelPipeline 调度执行系统和用户定义ChannelHandler，执行业务逻辑。

 
 

