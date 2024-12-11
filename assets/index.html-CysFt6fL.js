import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as l}from"./app-DJ5Cs3Tx.js";const n="/leaning_book/assets/mysqlLock-CqrSHxQT.png",t={};function h(p,i){return l(),e("div",null,i[0]||(i[0]=[a('<figure><img src="'+n+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_1-全局锁" tabindex="-1"><a class="header-anchor" href="#_1-全局锁"><span>1. 全局锁</span></a></h2><p>要使用全局锁，则要执行这条命令：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">flush tables </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">with</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> lock</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行后，整个数据库就处于只读状态了，这时其他线程执行以下操作，都会被阻塞：</p><ul><li>对数据的增删改操作，比如 insert、delete、update等语句；</li><li>对表结构的更改操作，比如 alter table、drop table 等语句。</li></ul><p>如果要释放全局锁，则要执行这条命令：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tables</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>当然，当会话断开了，全局锁会被自动释放。</p><p><strong>全局锁应用场景</strong>：全局锁主要应用于做<strong>全库逻辑备份</strong>，这样在备份数据库期间，不会因为数据或表结构的更新，而出现备份文件的数据与预期的不一样。</p><p><strong>加全局锁带来的缺点</strong>：加上全局锁，意味着整个数据库都是只读状态。</p><h2 id="_2-表级锁" tabindex="-1"><a class="header-anchor" href="#_2-表级锁"><span>2. 表级锁</span></a></h2><h3 id="_2-1-表锁" tabindex="-1"><a class="header-anchor" href="#_2-1-表锁"><span>2.1 表锁</span></a></h3><p>如果我们想对学生表（t_student）加表锁，可以使用下面的命令：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">//表级别的共享锁，也就是读锁；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lock tables t_student </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">read</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">//表级别的独占锁，也就是写锁；</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">lock tables t_stuent write;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果本线程对学生表加了「共享表锁」，那么本线程接下来如果要对学生表执行写操作的语句，是会被阻塞的，当然其他线程对学生表进行写操作时也会被阻塞，直到锁被释放。</p><p>要释放表锁，可以使用下面这条命令，会释放当前会话的所有表锁：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">unlock</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> tables</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_2-2-元数据锁" tabindex="-1"><a class="header-anchor" href="#_2-2-元数据锁"><span>2.2 元数据锁</span></a></h3><p>元数据锁（MDL）。</p><p>我们不需要显示的使用 MDL，因为当我们对数据库表进行操作时，会自动给这个表加上 MDL：</p><ul><li><p>对一张表进行 CRUD 操作时，加的是 MDL 读锁；</p></li><li><p>对一张表做结构变更操作的时候，加的是 MDL 写锁；</p></li></ul><p>MDL 是为了保证当用户对表执行 CRUD 操作时，防止其他线程对这个表结构做了变更。</p><p>当有线程在执行 select 语句（ 加 MDL 读锁）的期间，如果有其他线程要更改该表的结构（ 申请 MDL 写锁），那么将会被阻塞，直到执行完 select 语句（ 释放 MDL 读锁）。</p><p>反之，当有线程对表结构进行变更（ 加 MDL 写锁）的期间，如果有其他线程执行了 CRUD 操作（ 申请 MDL 读锁），那么就会被阻塞，直到表结构变更完成（ 释放 MDL 写锁）。</p><p><strong>MDL 不需要显示调用，那它是在什么时候释放的?</strong></p><p>MDL 是在事务提交后才会释放，这意味着事务执行期间，MDL 是一直持有的。</p><h3 id="_2-3-意向锁" tabindex="-1"><a class="header-anchor" href="#_2-3-意向锁"><span>2.3 意向锁</span></a></h3><blockquote><p>意向锁的目的是为了快速判断表里是否有记录被加锁。</p><p>表锁和行锁是满足读读共享、读写互斥、写写互斥的。</p></blockquote><ul><li>在使用 InnoDB 引擎的表里对某些记录加上「共享锁」之前，需要先在表级别加上一个「意向共享锁」；</li><li>在使用 InnoDB 引擎的表里对某些纪录加上「独占锁」之前，需要先在表级别加上一个「意向独占锁」；</li></ul><p>也就是，当执行插入、更新、删除操作，需要先对表加上「意向独占锁」，然后对该记录加独占锁。</p><p>而普通的 select 是不会加行级锁的，普通的 select 语句是利用 MVCC 实现一致性读，是无锁的。</p><p>不过，select 也是可以对记录加共享锁和独占锁的，具体方式如下：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">//先在表上加上意向共享锁，然后对读取的记录加共享锁</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ... lock </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> share mode;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">//先表上加上意向独占锁，然后对读取的记录加独占锁</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ... </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>意向共享锁和意向独占锁是表级锁，不会和行级的共享锁和独占锁发生冲突，而且意向锁之间也不会发生冲突，只会和共享表锁（lock tables … read）和独占表锁（lock tables … write）发生冲突。</strong></p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果没有「意向锁」，那么加「独占表锁」时，就需要遍历表里所有记录，查看是否有记录存在独占锁，这样效率会很慢。</p><p>那么有了「意向锁」，由于在对记录加独占锁前，先会加上表级别的意向独占锁，那么在加「独占表锁」时，直接查该表是否有意向独占锁，如果有就意味着表里已经有记录被加了独占锁，这样就不用去遍历表里的记录。</p></div><h3 id="_2-4-auto-inc-锁" tabindex="-1"><a class="header-anchor" href="#_2-4-auto-inc-锁"><span>2.4 AUTO-INC 锁</span></a></h3><p>表里的主键通常都会设置成自增的，这是通过对主键字段声明 AUTO_INCREMENT 属性实现的。</p><p>之后可以在插入数据时，可以不指定主键的值，数据库会自动给主键赋值递增的值，这主要是通过 AUTO-INC 锁实现的。</p><p>AUTO-INC 锁是特殊的表锁机制，锁不是再一个事务提交后才释放，而是再执行完插入语句后就会立即释放。</p><p>在插入数据时，会加一个表级别的 AUTO-INC 锁，然后为被 AUTO_INCREMENT 修饰的字段赋值递增的值，等插入语句执行完成后，才会把 AUTO-INC 锁释放掉。</p><p>那么，一个事务在持有 AUTO-INC 锁的过程中，其他事务的如果要向该表插入语句都会被阻塞，从而保证插入数据时，被 AUTO_INCREMENT 修饰的字段的值是连续递增的。</p><p>但是， AUTO-INC 锁再对大量数据进行插入的时候，会影响插入性能，因为另一个事务中的插入会被阻塞。</p><p>因此， 在 MySQL 5.1.22 版本开始，InnoDB 存储引擎提供了一种<code>轻量级的锁</code>来实现自增。</p><p>一样也是在插入数据的时候，会为被 AUTO_INCREMENT 修饰的字段加上轻量级锁，然后给该字段赋值一个自增的值，就把这个轻量级锁释放了，而不需要等待整个插入语句执行完后才释放锁。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>InnoDB 存储引擎提供了个 innodb_autoinc_lock_mode 的系统变量，是用来控制选择用 AUTO-INC 锁，还是轻量级的锁。</p><p>当 innodb_autoinc_lock_mode = 0，就采用 AUTO-INC 锁，语句执行结束后才释放锁；<br> 当 innodb_autoinc_lock_mode = 2，就采用轻量级锁，申请自增主键后就释放锁，并不需要等语句执行后才释放。<br> 当 innodb_autoinc_lock_mode = 1：普通 insert 语句，自增锁在申请之后就马上释放；类似 insert … select 这样的批量插入数据的语句，自增锁还是要等语句结束后才被释放；</p></div><h2 id="_3-行级锁" tabindex="-1"><a class="header-anchor" href="#_3-行级锁"><span>3. 行级锁</span></a></h2><p>InnoDB 引擎是支持行级锁的，而 MyISAM 引擎并不支持行级锁。</p><p>前面也提到，普通的 select 语句是不会对记录加锁的，因为它属于快照读。如果要在查询时对记录加行锁，可以使用下面这两个方式，这种查询会加锁的语句称为<strong>锁定读。</strong></p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">//对读取的记录加共享锁</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ... lock </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> share mode;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">//对读取的记录加独占锁</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> ... </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面这两条语句必须在一个事务中，<strong>因为当事务提交了，锁就会被释放</strong>，所以在使用这两条语句的时候，要加上 begin、start transaction 或者 set autocommit = 0。</p><p>共享锁（S锁）满足读读共享，读写互斥。独占锁（X锁）满足写写互斥、读写互斥。</p><p>行级锁的类型主要有三类：</p><ul><li>Record Lock，记录锁，也就是仅仅把一条记录锁上；</li><li>Gap Lock，间隙锁，锁定一个范围，但是不包含记录本身；</li><li>Next-Key Lock：Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。</li></ul><h3 id="_3-1-record-lock" tabindex="-1"><a class="header-anchor" href="#_3-1-record-lock"><span>3.1 Record Lock</span></a></h3><p>Record Lock 称为记录锁，锁住的是一条记录。而且记录锁是有 S 锁和 X 锁之分的：</p><p>当一个事务对一条记录加了 S 型记录锁后，其他事务也可以继续对该记录加 S 型记录锁（S 型与 S 锁兼容），但是不可以对该记录加 X 型记录锁（S 型与 X 锁不兼容）;<br> 当一个事务对一条记录加了 X 型记录锁后，其他事务既不可以对该记录加 S 型记录锁（S 型与 X 锁不兼容），也不可以对该记录加 X 型记录锁（X 型与 X 锁不兼容）。<br> 当一个事务执行了下面这条语句：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">mysql </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> begin</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">mysql </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> t_test </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> id </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> for</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> update</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>就是对 t_test 表中主键 id 为 1 的这条记录加上 X 型的记录锁，这样其他事务就无法对这条记录进行修改和查询了就堵塞住了。</p><p>当事务执行 commit 后，事务过程中生成的锁都会被释放。</p><h3 id="_3-2-gap-lock" tabindex="-1"><a class="header-anchor" href="#_3-2-gap-lock"><span>3.2 Gap Lock</span></a></h3><p>Gap Lock 称为间隙锁，只存在于可重复读隔离级别，目的是为了解决可重复读隔离级别下幻读的现象。</p><p>假设，表中有一个范围 id 为（3，5）间隙锁，那么其他事务就无法插入 id = 4 这条记录了，这样就有效的防止幻读现象的发生。</p><p>间隙锁虽然存在 X 型间隙锁和 S 型间隙锁，但是并没有什么区别，<strong>间隙锁之间是兼容的，即两个事务可以同时持有包含共同间隙范围的间隙锁，并不存在互斥关系，因为间隙锁的目的是防止插入幻影记录而提出的。</strong></p><h3 id="_3-3-next-key-lock" tabindex="-1"><a class="header-anchor" href="#_3-3-next-key-lock"><span>3.3 Next-Key Lock</span></a></h3><p>Next-Key Lock 称为临键锁，是 Record Lock + Gap Lock 的组合，锁定一个范围，并且锁定记录本身。</p><p>假设，表中有一个范围 id 为（3，5] 的 next-key lock，那么其他事务即不能插入 id = 4 记录，也不能修改 id = 5 这条记录。</p><p>所以，next-key lock 即能保护该记录，又能阻止其他事务将新纪录插入到被保护记录前面的间隙中。</p><p>next-key lock 是包含间隙锁+记录锁的，如果一个事务获取了 X 型的 next-key lock，那么另外一个事务在获取相同范围的 X 型的 next-key lock 时，是会被阻塞的。</p><p>比如，一个事务持有了范围为 (1, 10] 的 X 型的 next-key lock，那么另外一个事务在获取相同范围的 X 型的 next-key lock 时，就会被阻塞。</p>`,70)]))}const r=s(t,[["render",h],["__file","index.html.vue"]]),c=JSON.parse('{"path":"/databases/mysqllock/","title":"Mysql有哪些锁？","lang":"zh-CN","frontmatter":{"title":"Mysql有哪些锁？","author":"RJMeteor","createTime":"2024/11/08 04:41:42","permalink":"/databases/mysqllock/"},"headers":[{"level":2,"title":"1. 全局锁","slug":"_1-全局锁","link":"#_1-全局锁","children":[]},{"level":2,"title":"2. 表级锁","slug":"_2-表级锁","link":"#_2-表级锁","children":[{"level":3,"title":"2.1 表锁","slug":"_2-1-表锁","link":"#_2-1-表锁","children":[]},{"level":3,"title":"2.2 元数据锁","slug":"_2-2-元数据锁","link":"#_2-2-元数据锁","children":[]},{"level":3,"title":"2.3 意向锁","slug":"_2-3-意向锁","link":"#_2-3-意向锁","children":[]},{"level":3,"title":"2.4 AUTO-INC 锁","slug":"_2-4-auto-inc-锁","link":"#_2-4-auto-inc-锁","children":[]}]},{"level":2,"title":"3. 行级锁","slug":"_3-行级锁","link":"#_3-行级锁","children":[{"level":3,"title":"3.1 Record Lock","slug":"_3-1-record-lock","link":"#_3-1-record-lock","children":[]},{"level":3,"title":"3.2 Gap Lock","slug":"_3-2-gap-lock","link":"#_3-2-gap-lock","children":[]},{"level":3,"title":"3.3 Next-Key Lock","slug":"_3-3-next-key-lock","link":"#_3-3-next-key-lock","children":[]}]}],"git":{"createdTime":1733849015000,"updatedTime":1733849015000,"contributors":[{"name":"RJMeteor","email":"3029364473@qq.com","commits":1}]},"readingTime":{"minutes":8.72,"words":2616},"filePathRelative":"pages/databases/MySQL/Mysql有哪些锁？.md","localizedDate":"2024年12月10日","excerpt":"<figure><figcaption></figcaption></figure>\\n<h2>1. 全局锁</h2>\\n<p>要使用全局锁，则要执行这条命令：</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">flush tables </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">with</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\"> read</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> lock</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{r as comp,c as data};
