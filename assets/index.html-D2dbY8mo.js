import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,a,o}from"./app-CI1YPOuY.js";const p={};function d(i,e){return o(),l("div",null,e[0]||(e[0]=[a('<h2 id="_1-zookeeper的集群机制" tabindex="-1"><a class="header-anchor" href="#_1-zookeeper的集群机制"><span>1. Zookeeper的集群机制</span></a></h2><p>Zookeeper 是为其他分布式程序提供服务的，所以本身自己不能随便就挂了，所以Zookeeper自身的集群机制就很重要。</p><p>Zookeeper的集群机制采用的是半数存活机制，也就是整个集群节点中有半数以上的节点存活，那么整个集群环境可用。</p><p>也就是说们的集群节点最好是奇数个节点。</p><h2 id="_2-zookeeper集群节点的角色" tabindex="-1"><a class="header-anchor" href="#_2-zookeeper集群节点的角色"><span>2. Zookeeper集群节点的角色</span></a></h2><h3 id="_2-1-leader" tabindex="-1"><a class="header-anchor" href="#_2-1-leader"><span>2.1 <strong>Leader</strong></span></a></h3><p>Leader服务器是Z o o k e e p e r ZookeeperZookeeper集群工作的核心，其主要工作如下</p><p>事务请求的唯一调度和处理者，保证集群事务处理的顺序性。<br> 集群内部各服务器的调度者。</p><h3 id="_2-2-follower" tabindex="-1"><a class="header-anchor" href="#_2-2-follower"><span>2.2 <strong>Follower</strong></span></a></h3><p>Follower是Zookeeper集群的跟随者，其主要工作如下</p><ul><li>处理客户端非事务性请求（读取数据），转发事务请求给Leader服务器。</li><li>参与事务请求Proposal(提议) 的投票。</li><li>参与Leader选举投票。</li></ul><h3 id="_2-3-observer" tabindex="-1"><a class="header-anchor" href="#_2-3-observer"><span>2.3 <strong>Observer</strong></span></a></h3><p>Observer充当观察者角色，观察Z o o k e e p e r ZookeeperZookeeper集群的最新状态变化并将这些状态同步过来，其对于非事务请求可以进行独立处理，对于事务请求，则会转发给Leader服务器进行处理。</p><p>Observer不会参与任何形式的投票，包括事务请求Proposal的投票和Leader选举投票。</p><p>Observer不属于法定人数，既不参与选举也不响应提议，也不参与写操作的“过半成功”策略。</p><p>不需要将事务持久化到磁盘，一旦被重启，需要从Leader重新同步整个命名空间。</p><h2 id="_3-zookeeper集群中server工作状态" tabindex="-1"><a class="header-anchor" href="#_3-zookeeper集群中server工作状态"><span>3. Zookeeper集群中Server工作状态</span></a></h2><table><thead><tr><th>状态</th><th>说明</th></tr></thead><tbody><tr><td>LOOKING</td><td>寻找 Leader 状态，当服务器处于该状态时，<br>它会认为当前集群中没有 Leader ，因此需要进入Leader 选举状态</td></tr><tr><td>FOLLOWING</td><td>跟随者状态，表明当前服务器角色是 Follower</td></tr><tr><td>LEADING</td><td>领导者状态，表明当前服务器角色是 Leader</td></tr><tr><td>OBSERVING</td><td>观察者状态，表明当前服务器角色是 Observe</td></tr></tbody></table><h2 id="_4-集群中个服务器之间通信" tabindex="-1"><a class="header-anchor" href="#_4-集群中个服务器之间通信"><span>4. 集群中个服务器之间通信</span></a></h2><p>Leader 服务器会和每一个<code>Follower/Observer</code> 服务器都建立 TCP 连接，同时为每个Follower/Observer 都创建一个叫做 <code>LearnerHandler </code>的实体。</p><ul><li><strong>LearnerHandler</strong>：主要负责 Leader 和Follower/Observer 之间的网络通讯，包括数据同步，请求转发和 Proposal(提议) 的投票等。</li><li><strong>Leader</strong>：服务器保存了所有 Follower/Observer 的 LearnerHandler 。</li></ul><h2 id="_5-写操作流程" tabindex="-1"><a class="header-anchor" href="#_5-写操作流程"><span>5. 写操作流程</span></a></h2><ul><li>Client 想向ZooKeeper 的 Server1 上写数据，必须先发送一个写的请求。</li><li>如果Server1不是Leader，那么Server1 会把接收到的请求进一步转发给 Leader。</li><li>这个Leader 会将写请求广播给各个Server，各个Server写成功后就会通知 Leader。</li><li>当 Leader 收到半数以上的 Server 数据写成功了，那么就说明数据写成功了。</li><li>随后，Leader 会告诉Server1数据写成功了。</li><li>Server1会反馈通知 Client 数据写成功了，整个流程结束。</li></ul><h2 id="_6-zookeeper的选举机制" tabindex="-1"><a class="header-anchor" href="#_6-zookeeper的选举机制"><span>6. Zookeeper的选举机制</span></a></h2><h3 id="_6-1-为什么要进行leader选举" tabindex="-1"><a class="header-anchor" href="#_6-1-为什么要进行leader选举"><span>6.1 为什么要进行Leader选举？</span></a></h3><p>Leader 主要作用是保证分布式数据一致性，即每个节点的存储的数据同步。</p><p>遇到以下两种情况需要进行Leader选举：</p><ul><li>服务器初始化启动。</li><li>服务器运行期间无法和Leader保持连接，Leader节点崩溃，逻辑时钟崩溃。</li></ul><h3 id="_6-2-服务器初始化时leader选举" tabindex="-1"><a class="header-anchor" href="#_6-2-服务器初始化时leader选举"><span>6.2 服务器初始化时Leader选举</span></a></h3><p>Zookeeper 由于其自身的性质，一般建议选取奇数个节点进行搭建分布式服务器集群。</p><p>以3个节点组成的服务器集群为例，说明服务器初始化时的选举过程。</p><p>启动第一台安装Zookeeper的节点时，无法单独进行选举，启动第二台时，两节点之间进行通信，开始选举Leader。</p><ol><li><p>每个Server投出一票。 他们两都选自己为Leader，投票的内容为（SID，ZXID）。</p><p>SID即Server的id，安装Zookeeper时配置文件中所配置的myid。</p><p>ZXID，事务id， 为节点的更新程度，ZXID越大，代表Server对Znode的操作越新。</p><p>由于服务器初始化， 每个Sever上的Znode为0，所以Server1投的票为（1,0），Server2为（2,0）。</p><p>两Server将各自投票发给集群中其他机器。</p></li><li><p>每个Server接收来自其他Server的投票。</p><p>集群中的每个Server先判断投票有效性，</p><p>如检查是不是本轮的投票，是不是来Looking状态的服务器投的票。</p></li><li><p>对投票结果进行处理。先了解下处理规则</p><ul><li><p>首先对比ZXID。ZXID大的服务器优先作为Leader</p></li><li><p>若ZXID相同，比如初始化的时候，每个Server的ZXID都为0，就会比较myid，myid 大的选出来做Leader。</p></li></ul><p>对于Server而言，他接受到的投票为（2,0），因为自身的票为（1,0），所以此时它会选举Server2为Leader，将自己的更新为（2,0）。</p><p>而Server2收到的投票为Server1的（1,0）由于比他自己小，Server2的投票不变。</p><p>Server1和Server2再次将票投出，投出的票都为（2,0）。</p></li><li><p>统计投票。</p><p>每次投票之后，服务器都会统计投票信息，如果判定某个Server有过半的票数投它，那么该Server将会作为Leader。</p><p>对于Server1和Server2而言,统计出已经有两台机器接收了（2,0）的投票信息，此时认为选出了Leader。</p></li><li><p>改变服务器状态。</p><p>当确定了Leader之后，每个Server更新自己的状态，Leader 将状态更新为Leading，Follower 将状态更新为Following。</p></li></ol><h3 id="_6-3-服务器运行期间的leader选举" tabindex="-1"><a class="header-anchor" href="#_6-3-服务器运行期间的leader选举"><span>6.3 服务器运行期间的Leader选举</span></a></h3><p>Zookeeper 运行期间，如果有新的Server加入，或者非Leader的Server宕机，那么Leader将会同步数据到新Server或者寻找其他备用Server替代宕机的Server。</p><p>若Leader宕机，此时集群暂停对外服务，开始在内部选举新的Leader。</p><p>假设当前集群中有Server1、Server2、Server3三台服务器，Server2为当前集群的Leader，由于意外情况，Server2宕机了，便开始进入选举状态。</p><p>过程如下：</p><ul><li><p>变更状态。其他的非Observer服务器将自己的状态改变为Looking，开始进入Leader选举。</p></li><li><p>每个Server发出一个投票（myid，ZXID），由于此集群已经运行过，所以每个Server上的ZXID可能不同。</p></li><li><p>假设Server1的ZXID为145，Server3的为122。</p></li><li><p>第一轮投票中，Server1和Server3都投自己，票分别为 ( 1，145 )、( 3，122 )，将自己的票发送给集群中所有机器。</p></li><li><p>每个Server接收接收来自其他Server的投票，接下来的步骤与初始化时相同。</p></li></ul><h2 id="_7-zab-协议" tabindex="-1"><a class="header-anchor" href="#_7-zab-协议"><span>7. ZAB 协议</span></a></h2><p>依赖 ZAB 协议来实现分布式数据一致性。ZAB分为2部分，消息广播和崩溃恢复。</p><ul><li>消息广播</li></ul><p>单一的主进程 Leader 来接收和处理客户端所有事务请求，并采用 ZAB 协 议的原子广播协议，将事务请求以 Proposal 提议广播到所有 Follower 节点，当集群中有过半的Follower 服务器进行正确的 ACK 反馈，那么Leader就会再次向所有的 Follower 服务器发送commit 消息，将此次提案进行提交。</p><ul><li>崩溃恢复</li></ul><p>在正常情况消息下广播能运行良好，但是一旦 Leader 服务器出现崩溃，或者由于网络原理导致 Leader 服务器失去了与过半 Follower 的通信，那么就会进入崩溃恢复模式，需要选举出一个新的 Leader 服务器。在这个过程中可能会出现两种数据不一致性的隐患，需要 ZAB 协议的特性进行避免。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>Leader 服务器将消息 commit 发出后，立即崩溃</p><p>Leader 服务器刚提出 proposal 后，立即崩溃 ZAB 协议的恢复模式使用了以下策略：</p><p>选举 zxid 最大的节点作为新的 leader</p><p>新 leader 将事务日志中尚未提交的消息进行处理</p></div>',46)]))}const s=r(p,[["render",d],["__file","index.html.vue"]]),h=JSON.parse('{"path":"/bigdata/zookeepercs/","title":"Zookeeper集群","lang":"zh-CN","frontmatter":{"title":"Zookeeper集群","author":"RJMeteor","createTime":"2024/11/08 04:41:42","permalink":"/bigdata/zookeepercs/"},"headers":[{"level":2,"title":"1. Zookeeper的集群机制","slug":"_1-zookeeper的集群机制","link":"#_1-zookeeper的集群机制","children":[]},{"level":2,"title":"2. Zookeeper集群节点的角色","slug":"_2-zookeeper集群节点的角色","link":"#_2-zookeeper集群节点的角色","children":[{"level":3,"title":"2.1 Leader","slug":"_2-1-leader","link":"#_2-1-leader","children":[]},{"level":3,"title":"2.2 Follower","slug":"_2-2-follower","link":"#_2-2-follower","children":[]},{"level":3,"title":"2.3 Observer","slug":"_2-3-observer","link":"#_2-3-observer","children":[]}]},{"level":2,"title":"3. Zookeeper集群中Server工作状态","slug":"_3-zookeeper集群中server工作状态","link":"#_3-zookeeper集群中server工作状态","children":[]},{"level":2,"title":"4. 集群中个服务器之间通信","slug":"_4-集群中个服务器之间通信","link":"#_4-集群中个服务器之间通信","children":[]},{"level":2,"title":"5. 写操作流程","slug":"_5-写操作流程","link":"#_5-写操作流程","children":[]},{"level":2,"title":"6. Zookeeper的选举机制","slug":"_6-zookeeper的选举机制","link":"#_6-zookeeper的选举机制","children":[{"level":3,"title":"6.1 为什么要进行Leader选举？","slug":"_6-1-为什么要进行leader选举","link":"#_6-1-为什么要进行leader选举","children":[]},{"level":3,"title":"6.2 服务器初始化时Leader选举","slug":"_6-2-服务器初始化时leader选举","link":"#_6-2-服务器初始化时leader选举","children":[]},{"level":3,"title":"6.3 服务器运行期间的Leader选举","slug":"_6-3-服务器运行期间的leader选举","link":"#_6-3-服务器运行期间的leader选举","children":[]}]},{"level":2,"title":"7. ZAB 协议","slug":"_7-zab-协议","link":"#_7-zab-协议","children":[]}],"git":{"createdTime":1734527070000,"updatedTime":1734527070000,"contributors":[{"name":"RJMeteor","email":"3029364473@qq.com","commits":1}]},"readingTime":{"minutes":6.72,"words":2017},"filePathRelative":"pages/bigdata/Zookeeper/Zookeeper集群.md","localizedDate":"2024年12月18日","excerpt":"<h2>1. Zookeeper的集群机制</h2>\\n<p>Zookeeper 是为其他分布式程序提供服务的，所以本身自己不能随便就挂了，所以Zookeeper自身的集群机制就很重要。</p>\\n<p>Zookeeper的集群机制采用的是半数存活机制，也就是整个集群节点中有半数以上的节点存活，那么整个集群环境可用。</p>\\n<p>也就是说们的集群节点最好是奇数个节点。</p>\\n<h2>2. Zookeeper集群节点的角色</h2>\\n<h3>2.1 <strong>Leader</strong></h3>\\n<p>Leader服务器是Z o o k e e p e r ZookeeperZookeeper集群工作的核心，其主要工作如下</p>"}');export{s as comp,h as data};