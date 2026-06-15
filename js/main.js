/**
 * 🚪 任意门 · 纪念日时间轴
 * 哆啦A梦主题 · 交互增强
 */

// ============================================
// 时间轴数据
// ============================================
const timelineData = [
    {
        id: 1,
        date: '2026年3月24日',
        title: '相遇',
        content: '那个三月，二狗App的随机匹配让我们相遇。她带着好奇而来，我抱着忐忑再试。谁也没想到，两个平行世界就这样悄然交汇，命运的齿轮悄然转动... 🌸',
        images: [],
        special: false
    },
    {
        id: 2,
        date: '2026年3月28日',
        title: '第一次聊天',
        content: '"粤ba"的赛事，让广州队不敌中山队，却也给了我一个完美的借口——问CC中山有什么好吃的。她耐心地推荐，而我，借着这份闲聊，踏上了开往中山的列车。她下午还要给学生上课，我便先到了，尝了亚金金，喝了下午茶，心中默默期待着与她的第一次见面 ☕',
        images: ['images/3_28_1.webp', 'images/3_28_2.webp'],
        special: false
    },
    {
        id: 3,
        date: '2026年3月28日',
        title: '第一次见面',
        content: '傍晚时分，终于见到了她。一起吃了念念不忘的乳鸽，在孙文西步行街慢慢走着，聊不完的话。那一刻才发现，这个女孩，和我如此同频 💫',
        images: [],
        special: false
    },
    {
        id: 4,
        date: '2026年3月28日',
        title: '夜风中的畅聊',
        content: '我们在一家特调店里坐下来，聊着彼此的故事。夜晚的微风轻轻吹过，她安静地倾听，我也愿意分享。那一刻，无比放松与自由——终于有人愿意倾听我的故事，也有人愿意和我一起分享快乐 🍃',
        images: ['images/3_28_special.webp'],
        special: false
    },
    {
        id: 5,
        date: '2026年3月28日',
        title: '宵夜时光',
        content: '临别前，去了大墩荣记吃宵夜。其实已经很饱了，但那晚的美食与欢声笑语，让一切都刚刚好。这家店，真的很好吃～ 🍜',
        images: ['images/3_28_snack.webp'],
        special: false
    },
    {
        id: 6,
        date: '2026年4月4日',
        title: '顺德寻味',
        content: '清明假期，我们一起去了顺德。吃了念念不忘的排骨饭，逛了金榜街，尝了双皮奶等甜品。那晚，我悄悄记住了——她喜欢双皮奶这件事 ',
        images: ['images/4_4_1.webp', 'images/4_4_2.webp', 'images/4_4_3.webp', 'images/4_4_4.webp'],
        special: false
    },
    {
        id: 7,
        date: '2026年4月4日',
        title: '心有所属',
        content: '在商场里，我注意到她盯着旋转木马的木制工艺品，眼神里透着喜欢。那一刻我也看进去了，心里默默想着——以后一定要送给她 ',
        images: [],
        special: false
    },
    {
        id: 8,
        date: '2026年4月',
        title: '惬意时光',
        content: '虽然这两次见面都很短暂，但每分每秒都很开心。那种惬意的感觉，平日聊天也能感受到——我们，真的很聊得来 🌿',
        images: [],
        special: false
    },
    {
        id: 9,
        date: '2026年4月11日',
        title: '表白',
        content: '表白前，我就为她准备了一份礼物——沙漏。因为她说她经常发呆，看着沙漏流沙发呆的样子一定很美，我想帮她留住那些美好的发呆时光。早上约她喝早茶，心情紧张得不行。逛到宁徽园时，一直在找时机，终于鼓起勇气表白，表明了心意。这一天，我们确认了关系，正式成为男女朋友 ❤️',
        images: ['images/4_11_confession.webp'],
        special: true
    },
    {
        id: 10,
        date: '2026年4月18日',
        title: '花世界里的约会',
        content: '第一次以情侣身份出行！我们去了顺德的陈村花卉世界，看到了各种各样的兰花，大大小小的话和盆栽。空气好清新，好安静，好舒服，充满氧气的一天 🌿',
        images: ['images/4_18_1.webp', 'images/4_18_2.webp', 'images/4_18_3.webp'],
        special: false
    },
    {
        id: 11,
        date: '2026年4月18日',
        title: '时光街的哆啦A梦',
        content: '一直逛到下午四点，我们来到了潭州98时光街——一个有年代感的巷子街。这才是这次来顺德的真正目的，我们本是奔着一群哆啦A梦而来的。走了一圈没找到，问了本地阿姨，又凭着CC的感觉走进更深的巷子——终于找到了！ ',
        images: ['images/4_18_dora_1.webp', 'images/4_18_dora_2.webp', 'images/4_18_dora_3.webp', 'images/4_18_dora_4.webp'],
        special: false
    },
    {
        id: 12,
        date: '2026年4月18日',
        title: '黄姨甜品店',
        content: '时光街很小，看完就去了下一站——顺德的黄姨甜品店。点了双皮奶、炖蛋、凉拌鱼皮，味道都很不错，就是偏甜了点。或许是恋爱的味道吧，显得更甜了～ 🍮',
        images: ['images/4_18_sweet_1.webp', 'images/4_18_sweet_2.webp', 'images/4_18_sweet_3.webp'],
        special: false
    },
    {
        id: 13,
        date: '2026年4月18日',
        title: '旋转木马的约定',
        content: '还记得在商场里，CC盯着旋转木马木制工艺品喜欢的样子吗？那天晚上我们来到了顺德的万象汇。运气超好，一进停车场没多久就等到了车位，没绕太久。目标只有一个——把那个旋转木马带回家给她 🎠',
        images: [],
        special: false
    },
    {
        id: 14,
        date: '2026年4月18日',
        title: '一起看球赛',
        content: '顺利买下旋转木马后，CC问附近有没有MINISO，我想着大商场应该有吧。逛着逛着买了点东西，等阿嬷手作茶的时候，我顺手打开了粤BA直播——刚好是中山队对佛山队！CC是中山人，我们一起紧张地看完了整场，比分咬得很紧，最后中山队赢了，我们一起欢呼 🏀',
        images: ['images/4_18_ruin_1.webp', 'images/4_18_ruin_2.webp'],
        special: false
    },
    {
        id: 15,
        date: '2026年4月19日',
        title: '悄悄准备的惊喜',
        content: '第二天周日，我突然想起CC为什么会问MINISO——她喜欢自嘲熊，上次还给我转发过广州北京路门店的自嘲熊活动。想着周边只有那家有，我立马出发去排队。随机抽了两个盲盒，等着下周和她一起拆，分享盲盒的快乐 🎁',
        images: ['images/4_19_miniso_1.webp', 'images/4_19_miniso_2.webp', 'images/4_19_miniso_3.webp', 'images/4_19_miniso_4.webp'],
        special: false
    },
    {
        id: 16,
        date: '2026年4月25日',
        title: '情侣约会日常',
        content: '一周后，我们又约会啦！这次以情侣身份重回大墩荣记，点了她最爱的豆苗，还有盐焗虾和啫生肠，依然好吃。吃完错过了店家的送车服务，我们就牵手慢慢走回去。后来去看比赛，站在孙文西步行街的大屏幕前看了20分钟，中场休息时人群散去，我们幸运地坐到了位置——中山队又赢了，看得真激动！ 🏀',
        images: [],
        special: false
    },
    {
        id: 17,
        date: '2026年4月25日',
        title: '第一次合照',
        content: '后来我们去了兴中广场的摩天轮，坐了一圈，欣赏着夜景。那一刻，我们迎来了第一次合照，定格了这个夜晚的浪漫 ',
        images: ['images/4_25_ferris_1.webp', 'images/4_25_ferris_2.webp', 'images/4_25_ferris_3.webp', 'images/4_25_ferris_4.webp'],
        special: false
    },
    {
        id: 18,
        date: '2026年4月26日',
        title: '第一次接她下班',
        content: '这天，我去接CC下班，晚上一起去了樱花里吃Party泰。第一次接她下班，心里有种说不出的甜蜜感～ ',
        images: ['images/4_26_thai_1.webp', 'images/4_26_thai_2.webp', 'images/4_26_thai_3.webp'],
        special: false
    },
    {
        id: 19,
        date: '2026年4月26日',
        title: '甜到心里的糖水',
        content: '后来坐着CC的摩托车去吃了糖水。糖水很甜，但和你在一起的时候，每一刻都是幸福和甜甜的～ 🍡',
        images: ['images/4_26_sweet_1.webp', 'images/4_26_sweet_2.JPG'],
        special: false
    },
    {
        id: 20,
        date: '2026年4月29日',
        title: '旋转木马完工',
        content: 'CC把旋转木马拼好了！看着她认真拼装的样子，觉得这不仅仅是一个礼物，更是一份心意的呈现。拼好的那一刻，一定很满足吧～ 🎠',
        images: ['images/4_29_carousel.webp'],
        special: false
    },
    {
        id: '20b',
        date: '2026年4月29日',
        title: '致我生命中最美的意外',
        content: '这个四月，是我们故事的序章。从顺德的排骨饭到表白那天的沙漏，从花世界里第一次以情侣身份出行，到时光街终于找到那群哆啦A梦；从她盯着旋转木马的眼神，到你为她准备惊喜的盲盒；从第一次接她下班的小鹿乱撞，到摩天轮上定格的第一张合照……每一天，都像是命运精心编排的剧本。CC，谢谢你出现在我生命里。谢谢你愿意和我一起写下这个故事。我会用余生，去爱你、去守护你、去和你创造更多更多的回忆。此生有你，足矣 💕',
        images: [],
        special: true
    },
    {
        id: 21,
        date: '2026年5月2日',
        title: '江门茶坑寻陈皮',
        content: '我们一起去了江门！第一站是茶坑，造访陈皮之乡，品一品这里独特的陈皮香气。还收到了大 VIC 鸡和手作的千层糕，满载而归～在茶坑吃了陈皮糯米糍、陈皮饼，喝了陈皮水、陈皮红豆糖水，浑身都是陈皮味了 🍊',
        images: ['images/5_2_jm_1.webp', 'images/5_2_jm_2.webp', 'images/5_2_jm_3.webp', 'images/5_2_jm_4.webp', 'images/5_2_jm_5.webp', 'images/5_2_jm_6.webp', 'images/5_2_jm_7.webp'],
        special: false
    },
    {
        id: 22,
        date: '2026年5月2日',
        title: '梁启超故居',
        content: '我们还一起参观了梁启超故居，了解了那段精彩的历史，还在里面学习了陈皮的文化与知识。一天下来收获满满，真的是学东西的一天～ 📜🍊',
        images: ['images/5_2_liang_1.webp', 'images/5_2_liang_2.webp', 'images/5_2_liang_3.webp', 'images/5_2_liang_4.webp'],
        special: false
    },
    {
        id: 23,
        date: '2026年5月2日',
        title: '学宫文化街Citywalk',
        content: '马不停蹄，我们又走了小红书推荐的Citywalk路线——学宫、文化馆、学院街，一路走下去。可惜最后的图书馆没开门，但一点也不影响两个人一起的心情～ ️',
        images: ['images/5_2_xuegong_1.webp', 'images/5_2_xuegong_2.webp', 'images/5_2_xuegong_3.webp', 'images/5_2_xuegong_4.webp', 'images/5_2_xuegong_5.webp'],
        special: false
    },
    {
        id: 24,
        date: '2026年5月2日',
        title: '街角的牛杂小铺',
        content: 'Citywalk途中经过一家超级小的牛杂店，门面不起眼，却挤满了本地人。端上来一碗热腾腾的牛杂，那个浓郁的汤底和软糯的口感，真的绝了！这种藏在巷子里的小店，才是城市的味道呀～ 🍲',
        images: ['images/5_2_beef_1.webp', 'images/5_2_beef_2.webp', 'images/5_2_beef_3.webp'],
        special: false
    },
    {
        id: 25,
        date: '2026年5月2日',
        title: '德记猪腰汤 & 粤BA之夜',
        content: '晚上我们转场德记猪腰汤，一口下去鲜甜滋补！然后去看粤BA比赛，为中山队加油呐喊～ 两个人看得热血沸腾，吃得肚子滚圆，完美的一天！🏀🔥',
        images: [],
        special: false
    },
    {
        id: 26,
        date: '2026年5月2日',
        title: '安静小店的特调时光',
        content: '回到小榄后，我们找了一家安安静静的小店，点了特调和气泡水，享受属于两个人的慢时光～ 门口还蹲着一只超可爱的小狗，CC忍不住一直逗它，少女心爆棚！🐶',
        images: ['images/5_2_dog_1.webp', 'images/5_2_shop_1.webp', 'images/5_2_shop_2.webp', 'images/5_2_shop_3.webp'],
        special: false
    },
    {
        id: 27,
        date: '2026年5月3日',
        title: '陪CC看心理医生',
        content: '今天陪CC去看心理医生，她在努力和过去的焦虑和解。我只想陪在她身边，和她一起慢慢走出来。过去的事就让它过去吧，未来CC是我的，她的每一个世界，我都想参与 💕',
        images: ['images/5_3_1.webp'],
        special: false
    },
    {
        id: 28,
        date: '2026年5月3日',
        title: '拉面里的悄悄话',
        content: '后来CC说想吃拉面，我一开始没想太多。直到刚才翻聊天记录才发现……原来那是我某次随口提的一句。她竟然记在心里，一直等着和我一起来吃。CC，谢谢你把我放在心上，我也是 💕',
        images: ['images/5_3_ramen_1.webp', 'images/5_3_ramen_2.webp', 'images/5_3_ramen_3.webp', 'images/5_3_ramen_4.webp'],
        special: false
    },
    {
        id: 29,
        date: '2026年5月3日',
        title: '回到最初的地方',
        content: '这次换我带CC回到最初的地方——亚金金和55号咖啡店，都是她当初推荐给我的小店。陪她重游故地，一起看我当时喝过的饮品，一起看粤BA中山对广州的回放。虽然早知道结果，依然看得热血沸腾！仿佛回到最初遇见她的时候 💕',
        images: ['images/5_3_55_1.webp', 'images/5_3_55_2.webp', 'images/5_3_55_3.webp', 'images/5_3_55_4.webp', 'images/5_3_55_5.webp', 'images/5_3_55_6.webp'],
        special: false
    },
    {
        id: 30,
        date: '2026年5月3日',
        title: '万象汇新能源车体验',
        content: '雨太大了，本来就在附近的万象汇也只好打车去了～ 到了之后带着CC体验各种新能源车的主驾驶位，让她也过过当司机瘾，笑得合不拢嘴 😄🚗',
        images: [],
        special: false
    },
    {
        id: 31,
        date: '2026年5月3日',
        title: '小伞大情话',
        content: '便利店买的所谓大伞，结果还是小得可怜～ 两个人挤在一把小伞下，紧紧靠在一起走到了假日广场。绕了一圈都不满意，最后进了「慢顿顿」吃了个雪糕，简简单单却甜到心里 🍦💕',
        images: ['images/5_3_mdt_1.webp', 'images/5_3_mdt_2.webp', 'images/5_3_mdt_3.webp', 'images/5_3_mdt_4.webp', 'images/5_3_mdt_5.webp', 'images/5_3_mdt_6.webp'],
        special: false
    },
    {
        id: 32,
        date: '2026年5月3日',
        title: '1.5公里的风雨路',
        content: '雨太大了，我们决定走路去停车场的新都会吃饭。一路上伞真的很小，我故意把伞的位置尽可能靠过去给她，我的右臂全都在淋着雨，只想着不能让她淋到。可是走到银行门口临时避雨时，我才发现她左臂还是有点湿了。等了一小会儿，雨完全没有变小的迹象，我们俩只能继续前行。其实总共就1.5公里路，但因为下大雨，这段路显得好漫长好漫长…… 也正因为有了这段路，让我们聊了更多更多。我想，我能和CC共晴天共风雨，无论晴天霹雳，还是风里雨里，我都会在你身边。最后我们终于走到新都会，吃了饭，一起看完了没看完的比赛，然后一起回中山小榄 💕',
        images: [],
        special: false
    },
    {
        id: 33,
        date: '2026年5月3日',
        title: '车里的悄悄话',
        content: '在她家楼下，我们在车里缠绵了一会儿，真的不舍得分开。忍不住跟她说了好多好多…… 我一定会是她最可靠的人，让她别再急、别再焦虑，什么事都有我在。想要陪伴，一个电话给我，一小时内必到。虽然我在广州、她在中山，但其实并不远，我愿意为她付出一切。她说她好像给不了我什么，我直白告诉她——两个人在一起，不是论公平付出和回报的。互相鼓励、互相扶持，不开心一起扛，开心一起分享。我会一直在她身边，喜欢着她，爱着她，CC！',
        images: [],
        special: false
    },
    {
        id: 34,
        date: '2026年5月9日',
        title: '跨越山海的相见',
        content: 'CC从厦门回来，特意绕道广州，只为见我一面。那一刻，下班的我像是奔赴一场期待已久的约会，心跳漏了半拍。在广州南站的地下停车场，一切都刚刚好——巧到连车位都连在一起，连车牌号都像冥冥中的注定。那一晚，广州的夜色格外温柔，因为有她 🌸',
        images: ['images/5_9_1.webp', 'images/5_9_2.webp', 'images/5_9_3.webp'],
        special: false
    },
    {
        id: 35,
        date: '2026年5月10日',
        title: '命中注定家长会',
        content: '那天早上，带着CC去喝早茶。本以为是两个人的悠闲时光，却在茶楼里偶遇了我老爸——CC就这样在毫无准备的情况下见了我的家长。而故事还没有完：送CC回中山的路上，她说想让我陪她和妈妈喝个下午茶。去了之后，她妈妈热情地留我吃便饭，谁知这一吃，就把她家里人、常听她提起的亲戚都见了个遍。幸运的是，没有语言障碍，氛围轻松愉快，有说有笑。就这样，在毫无准备的情况下，我们俩同一天完成了——我见了她的家人，她也见了我的家长。命运这个编剧，真的很懂浪漫 ',
        images: ['images/5_10_1.webp', 'images/5_10_2.webp', 'images/5_10_3.webp'],
        special: false
    },
    {
        id: 36,
        date: '2026年5月10日',
        title: '她的儿时乐园',
        content: '便饭后，我们逛了她儿时的公园。陪她一起玩了旋转木马、铁轨车、旋转飞机……看着她像孩子一样笑得那么开心，那么快乐，我的心也被填得满满的。能参与她的童年记忆，能陪她重温这些简单的幸福——这一刻，我真切地感受到：爱她，就是希望她永远这样快乐 🎠',
        images: ['images/5_10_4.webp', 'images/5_10_5.webp', 'images/5_10_6.webp'],
        special: false
    },
    {
        id: 39,
        date: '2026年5月16日',
        title: '脆肉的午后',
        content: '中午带着CC去吃脆肉鲩，这是炒的脆肉皖，虽然咸了点，可是也还行噢 ',
        images: ['images/5_19_1.webp'],
        special: false
    },
    {
        id: 40,
        date: '2026年5月16日',
        title: '星巴克的高端人士梦',
        content: '下午她去补习，我去星巴克续命喝了杯星冰乐，想着可以像视频那种做个高端人士，敲着苹果电脑喝着星巴克的样子，然而这才是难受的开始 💻',
        images: ['images/5_19_2.webp'],
        special: false
    },
    {
        id: 41,
        date: '2026年5月16日',
        title: 'kimoji店的小狗丫丫',
        content: '傍晚一起去了有小狗的kimoji店去点了小吃和特调微醺，我们还在店里镜子里一起合照咯～，CC好喜欢这家店的小狗，小狗名字叫丫丫，这场比赛看得激情，有来有回的 🎉',
        images: ['images/5_19_3.webp', 'images/5_19_4.webp', 'images/5_19_5.webp', 'images/5_19_6.webp', 'images/5_19_7.webp', 'images/5_19_8.webp', 'images/5_19_9.webp'],
        special: false
    },
    {
        id: 42,
        date: '2026年5月16日',
        title: '百富路的素菜与水牛奶',
        content: '看完比赛后，我们去了一家百富路的店吃了很好吃的素菜和，百富路的水牛奶，好甜，我以前好像就喝过的感觉 🥛🥬',
        images: ['images/5_19_11.webp', 'images/5_19_12.webp'],
        special: false
    },
    {
        id: 37,
        date: '2026年5月20日',
        title: '致我最重要的你',
        content: '这个五月，命运对我们真的太好太好。\n\n我们一起走过了茶坑的陈皮香，故居的历史光，Citywalk的街角牛杂香，安静小店的慢时光；一起经历了暴雨里1.5公里的相互依偎，经历了没有准备的双方家长见面，经历了儿时乐园里纯粹的快乐。\n\n从脆肉的午后，到星巴克的高端人士梦；从kimoji店里抱着丫丫笑得像个孩子，到百富路那杯甜到心里的好甜的水牛奶——每一刻，都是我想珍藏一辈子的画面。\n\nCC，谢谢你出现在我的生命里。谢谢你愿意让我陪你走过这些平凡又珍贵的每一天。我没有什么宏大的愿望，只想牵着你的手，和你一起制造更多更多的回忆。无论风雨还是晴天，无论顺境还是逆境，我都只想和你在一起。\n\n因为你，就是我的全世界 💕',
        images: ['images/5_19_10.webp', 'images/5_20_1.jpg'],
        special: true
    },
    {
        id: 43,
        date: '2026年5月20日',
        title: '520的惊喜',
        content: '520之前，我们还喊着不过这个节日。其实我已经准备已久了——这个记录着我们点点滴滴的时间轴，是我悄悄为你写下的情书。\n\n早上还聊着520的事情，CC突然陷入了思考。我像AI一样逗她："你既思考，要不要上下文结合噶？" 她认真地说要从语言习惯判断一个人的性格。我顺势接上："请用中文回答我，我提供上下文"——然后，把链接发了过去。\n\n那一刻，她看到了这两个月来我用心记录的每一个瞬间。她说："太用心了吧"、"感动"、"好细致"、"我都好感谢有你的出现❤️❤️"。\n\n虽然短短2个月，却装满了好多好多回忆。她说这是520礼物吗？我说，都算既～\n\n我怕我会忘记细节，所以我会将细节log低。每一个和你在一起的瞬间，都值得被好好珍藏 💕',
        images: ['images/5_20_chat_1.png', 'images/5_20_chat_2.png', 'images/5_20_chat_3.png'],
        special: false
    },
    {
        id: 44,
        date: '2026年5月21日',
        title: '雨夜奔赴',
        content: '临下班的时候，我还在纠结要不要晚上去找她。差不多下班时，听她说可能要加班——机会来了！\n\n下班后立马火急火燎，走路都快了几步，赶紧坐地铁回家。平时回家都要一个多小时，今天硬是在一小时内赶到了家。饭都还没来得及吃，抓起车钥匙就往CC家赶。\n\n开到一半，心里也在打鼓：她可能加班到很晚，也可能提前下班回家了。所以我直接定位到她家。后来，果然如我所料——她提前下班了。\n\n可是外面下着雨，她说和同事打车到了同事家楼下。我直接问她要了定位，一脚油门就赶过去了。\n\n我还是没忍住，想见到她 ',
        images: ['images/5_21_drive.jpeg'],
        special: false
    },
    {
        id: 45,
        date: '2026年5月21日',
        title: 'kimoji店的深夜长谈',
        content: '随后我们又去了kimoji的店里，喝了东西，我也顺便吃了我的面。\n\n吃完后，我们开始聊起了以前。CC也愿意讲述她以前的事情，我很是心疼——这么好的女孩，被辜负了，也让她心理受伤了。\n\n听完后，我更加坚定要和她一起，要和她面对受过的伤，慢慢慢慢地带着她走出来。过去都成过去，我相信未来是属于我们俩的。\n\n所以我会更看重我们的未来，我会和她走过每一段路，无论这条路是好还是坏 💕',
        images: ['images/5_21_drinks.jpeg'],
        special: false
    },
    {
        id: 46,
        date: '2026年5月23日',
        title: '第一次正式家庭聚餐',
        content: '原计划是和CC出去吃点东西、一起看粤BA比赛的。结果CC突然说，她妈妈想叫上我一起，一家人一起吃饭。听到的时候，一时间有点紧张，可是也有点开心。\n\n到了23号那天，因为CC要上课，我就开始联系可以看比赛的酒楼——既要能一起吃饭，又要能一起看粤BA。打了好几通电话，家家都订满了，幸亏最后还是有一家有位置，可以提前订好的。感觉一切都在掌握之中，那个下午我都没有很焦急，比较平静，也会在想一起吃饭的时候聊什么呢。\n\n之前虽然也和她家里人一起吃过饭，但都是和她家里人以及亲戚们一大帮人一起，没有很正式地坐下来聊过。这次她妈妈叫我们一起吃饭，也是想着可以坐下来，好好了解了解我～ 🥢',
        images: ['images/5_23_1.JPG', 'images/5_23_2.JPG', 'images/5_23_3.JPG'],
        special: false
    },
    {
        id: 47,
        date: '2026年5月24日',
        title: '花鸟市场的水族馆奇遇',
        content: '今天再次陪CC去看心理医生。康复需要时间，但我一定会陪着她，Forever！💪\n\n看完后我们在中山石岐随便乱逛，发现还不如回小榄来得休闲。于是定位了一家咖啡店，一去到才发现——竟然是个花鸟市场！专门卖宠物、卖鸟、卖鱼的那种地方，连CC这个本地人都不知道。穿过一个个玻璃鱼缸，恍惚间像走进了一座水族馆，五彩斑斓的鱼儿游来游去，蛮开心的 🐠\n\n那天虽然炎热，但我们还是紧紧牵着手。在石岐，我们还买了CC最爱的自嘲熊手办和抱枕，买了两个盲盒手办。回到小榄的时候完全忘记拆了，直到吃晚饭才想起来。赶紧拆开一看——两个竟然是一模一样的款式！我们明明是错开来抽的，这样都能抽到一样的，真的太有默契了。于是，一人一个，刚刚好～ \n\n**小插曲**：吃完饭还是忘了扫停车码，CC怒亏20元停车费！我们会铭记忘记扫商家停车码这件事的，下次一定记得！💸',
        images: ['images/5_24_1.jpeg', 'images/5_24_2.JPG', 'images/5_24_3.JPG', 'images/5_24_4.JPG', 'images/5_24_5.jpg'],
        special: false
    },
    {
        id: 48,
        date: '2026年5月25日',
        title: '一小时奔赴，只为抱住你',
        content: '晚上CC在做美甲的时候，她老板一个电话打过来，把她训得想哭。我第一时间就想着各种安慰她——但后来我意识到，不应该教她怎么做，站在上帝视角不痛不痒地说大道理，那不是一个女生在低落时候想听到的。\n\n看她好久没回消息，知道她想哭的那一刻，我立马回家，扒了两口面，抓起车钥匙就冲出门。在车流中穿梭，一小时就赶到了中山。顺着她说的「吃了麻辣烫后在旁边做美甲」这条线索，我找到了她。\n\n第一件事，就是搂住她。\n\n回去的路上，带她走了一小段，一起去吃了糖水。吃点甜的，心情会好一些。我想着，实质性的陪伴才是最好的。哪怕相处时间可能也就一两个小时，我都会在她不开心的时候出现在她身边 💕',
        images: [],
        special: false
    },
    {
        id: 49,
        date: '2026年5月30日',
        title: '越南面的幸运号',
        content: 'CC依然要给学生补习，所以中午咱们去吃了个越南面。幸运的是，我们的号是最后一个能拿的号——再有一对情侣到店的时候，店员跟这对情侣说，已经没有位子了。这家店虽然看着很omakase的感觉，可是东西的分量也是很足的 ',
        images: ['images/5_30_1.webp'],
        special: false
    },
    {
        id: 50,
        date: '2026年5月30日',
        title: '小酒馆里的真心话',
        content: '晚上和CC去了小酒馆喝酒。我们没有各自刷手机，而是打开小红书，一起认真了解对方——聊聊彼此的喜好、过往、想法……这种慢慢走近彼此内心的感觉，我们俩都很喜欢 🍸💕',
        images: ['images/5_30_2.webp', 'images/5_30_3.webp', 'images/5_30_4.webp', 'images/5_30_5.webp', 'images/5_30_6.webp', 'images/5_30_7.webp', 'images/5_30_8.webp'],
        special: false
    },
    {
        id: 51,
        date: '2026年5月31日',
        title: '陈皮与见面礼',
        content: '再次去江门新会，心心念念要给CC家里人送见面礼——虽然见面很久了，可这件事一直在我心里惦记着。带上CC一起去江门，买了一斤陈皮，想着陈皮泡茶可以让CC的爸爸咳嗽缓下来。\n\n随后我们又速速脚去了梁启超故居，上一次已经细细逛过了，这次人少了好多好多！再后来一时没想到去哪里，就去启明里附近，走了一圈三十三街。\n\n肚子饿了想找吃的，走了一公里路过去，想着能吃个漂亮饭、有点仪式感。结果上到二楼，店家才说：「不好意思，我们这里有人预定了，没有电话预定的话我们不服务的。」好嚣张！辛苦CC了，又累又饿又渴。\n\n我们一起走回停车场，一边走一边聊，时间才显得过得快——不然真的很难坚持走回去。最后我们毅然决然回到熟悉的小榄，吃了顿火锅。\n\n终于亲手把见面礼送到他们家了。从这开始，我就可以顺理成章上CC家里了 ❤️',
        images: ['custom-images/0531/IMG_1920.jpeg', 'custom-images/0531/IMG_3931.JPG', 'custom-images/0531/IMG_3932.JPG', 'custom-images/0531/IMG_3935.JPG', 'custom-images/0531/IMG_3938.JPG', 'custom-images/0531/IMG_3950.JPG'],
        special: false
    },
    {
        id: 52,
        date: '2026年5月',
        title: '五月——从风雨到家人的路',
        content: '五月，是我们故事里最浓墨重彩的一章。\n\n从江门茶坑的陈皮香开始，我们走过了学宫的青石板路，尝过了深巷里的牛杂香，在暴雨中撑着一把小小的伞走完1.5公里的风雨路。那一天，我告诉自己——无论晴天还是风雨，我都要在她身边。\n\n五月见证了太多"第一次"：第一次陪她看心理医生，知道她在努力和过去和解；第一次接她下班，心里有种说不出的甜蜜；第一次在车里说出心里话——她问我她给不了我什么，我说两个人在一起，从来不是论公平付出和回报的。\n\n五月，命运推着我们走进了彼此的家庭。广州南站停车场那巧到不可思议的车位相连，茶楼里偶遇我老爸的猝不及防，再到被CC妈妈留饭，把亲戚见了个遍——同一天，我们完成了互相见家长这件"大事"。\n\n五月的后半段，是更深的情感连接。520那天，我把偷偷记录了两个月的时间轴发给了她，她说"太用心了吧"、"好细致"、"我都好感谢有你的出现"。雨夜里一小时奔赴只为了在美甲店门口抱住她，听她讲述过去的伤——我更加坚定要陪她走出来。\n\n五月末，我们一起吃了最后一碗幸运的越南面，在小酒馆里打开小红书认真了解彼此的内心，最后带着一斤陈皮亲手送上见面礼——从那天起，我可以名正言顺上CC家里了。\n\n五月，从陈皮香到饭桌香，从两个人的快乐到两个家庭的连结。这些平凡又闪闪发光的每一天，都是我想用余生去珍藏的瞬间。\n\nCC，五月有你，胜过人间无数 💕',
        images: [],
        special: true
    },
    {
        id: 53,
        date: '2026年6月7日',
        title: '宁徽园早茶',
        content: '早上在宁徽园喝早茶，本来这家店人很多，需要排队。结果可能是服务员不清楚流程，我们居然没排队就被带进去了，也算幸运。但这家店的服务真的很让人无语——吃完一笼就有服务员把笼子收走，到最后整个桌子只剩下一笼点心，我们故意不吃完放着，看着好像吃完之后就没有来过的痕迹，桌子上就只剩两个茶杯和一笼点心。催单的时候，服务员竟然说「比较多人都要等的了，催也没用」，让人有点无语。不过这顿早茶，四个点心都还不错，吃完后相视而笑，以后可能还是会再去其他更好喝早茶的地方吧～🍵',
        images: ['images/6_7_tea.webp'],
        special: false
    },
    {
        id: 54,
        date: '2026年6月7日',
        title: '虹吸咖啡的午后',
        content: '下午和CC去了一家她推荐的蛋糕店，然后带着蛋糕去了一家非常化学感的咖啡店——虹吸咖啡。整个店很有实验室的感觉，非常有格调。虽然对咖啡学问，CC能品出不同做法，但我感觉味道差不多，听她描述咖啡就像听她说AI一样，完全听不懂也品不会。不过那家店很宁静宜人，很chill，两个人慢慢享受午后的时光，非常惬意。☕🍰',
        images: ['images/6_7_coffee_1.webp', 'images/6_7_coffee_2.webp', 'images/6_7_coffee_3.webp', 'images/6_7_coffee_4.webp'],
        special: false
    },
    {
        id: 55,
        date: '2026年6月7日',
        title: '带CC爸妈逛石岐',
        content: '傍晚，我陪CC和CC爸妈一起去了石岐。CC爸妈平时很少出门，CC也想带他们出去看看。我们一起去吃了大墩荣记——这家我和CC吃过好几次了，真的很好吃！路上虽然大雨滂沱，但到目的地后雨就停了，也是一种幸运。饭后还一起逛了步行街，CC爸妈感慨步行街变化好大，一路上回忆满满，看着他们开心，我也很开心。🍜🌧️',
        images: [],
        special: false
    },
    {
        id: 56,
        date: '2026年6月7日',
        title: '两个人的散步时光',
        content: '回程后，我和CC又散步聊了一会儿。只属于我们两个人的时光。\n\n"十年后，你希望我怎么评价你？"\n\n对我来说，十年后，我希望她对我的评价依旧是——「十年不变，保持初心，依然可靠，一心守护」。过去不论怎么样，现在最爱你的人，最疼你的人，就只能是我了。无论什么样的未来，我会和她一起去面对，一起去享受。',
        images: [],
        special: false
    },
    {
        id: 57,
        date: '2026年6月7日',
        title: 'CC的手写信',
        content: '准备回广州的时候，CC留了一封信，让我回家再看。带着开心和兴奋，一路顺利开回了广州。洗完澡，在最舒服的环境下，一字一句地看了CC给我写的信。信封是CC手绘的，太用心了——工作的我、接CC的专用车，都是她手工画上去的，蜡笔的痕迹还能摸到，太有感觉了。内容是我们俩一起的回忆，也是她对我的一次评价。我也真的很感谢能遇到CC，让我能再有爱一个人的能力。我会好好爱你，好好疼你。CC把我记到心里，真的比什么都重要。这封信，比高考作文还看得舒服和开心。\n\n行动派来说，说会吻着你、一直陪着你，这不是短暂的行动，而是一直一直的行动。我会好好地爱你，好好爱护你，有什么事都会依旧站在你身边。最吻你的人，best，top，just me！💕',
        images: ['images/6_7_letter_1.webp', 'images/6_7_letter_2.webp'],
        special: false
    },
    {
        id: 58,
        date: '2026年6月13日',
        title: 'CC家的盛宴',
        content: '这一天中午，去了CC家吃午饭。她爸做了花生咸骨粥，还大摆宴席——牛肉炒粉、蒸鱼、菜花、水煮虾，非常丰富！看得出本来是只安排了粥和炒粉的（广东人标配），其他菜是专门为我准备的，所以我尽可能多吃点，确实也好吃 😋',
        images: ['images/6_13_14/IMG_4221.webp', 'images/6_13_14/IMG_4224.webp'],
        special: false
    },
    {
        id: 59,
        date: '2026年6月13日',
        title: '等CC补习的时光',
        content: 'CC下午要去做家教补习，我就在一家小店里坐了下来，变成了一个精致的类CBD男生——拿着苹果笔记本，喝着饮料，安安静静地等着CC补习完。这种等待的感觉，竟然也很幸福 ☕',
        images: [],
        special: false
    },
    {
        id: 60,
        date: '2026年6月13日',
        title: '顺德桑拿鸡',
        content: '晚上，我们直接飞去了顺德，吃了桑拿鸡！这家是上次去陈村时就计划要吃的，终于如愿了。整体看上去都不错，味道也很好，我们还一起看了粤BA的比赛 🍗',
        images: ['images/6_13_14/IMG_4225.webp', 'images/6_13_14/IMG_4227.webp'],
        special: false
    },
    {
        id: 61,
        date: '2026年6月13日',
        title: '9块钱的停车场',
        content: '回到停车场，看到一个类似广州塔的小建筑在停车场里亮着灯，我们乐在其中，拍了照、欣赏了好久。殊不知，后面竟然要为这好看的小建筑付出了9块钱的停车费！可能是因为以前听过同一家公司的停车场，导致本来可以免去一大半停车费，最后还是全款给了9块钱，太心疼了 😂',
        images: ['images/6_13_14/IMG_4229.webp'],
        special: false
    },
    {
        id: 62,
        date: '2026年6月13日',
        title: '得到CC认可的双皮奶',
        content: '之后还去了一家提前 plan 好的甜品店，专门去吃他家的双皮奶。能得到CC认可的双皮奶，可真没有多少家！这家，是其中之一 🍮',
        images: ['images/6_13_14/IMG_4230.webp', 'images/6_13_14/IMG_4231.webp', 'images/6_13_14/IMG_2040.webp', 'images/6_13_14/IMG_2041.webp'],
        special: false
    },
    {
        id: 63,
        date: '2026年6月14日',
        title: '睡到自然醒',
        content: '这一天在酒店睡到了大中午！哆哆整整地磨蹭到11点多才出门。这一天非常 free，本来想着去吃面啡的面的，可是暴雨加上康公屿那边一堆车在窄路上乱停，严重堵死在路上，暗示着我们不要进去。果然，我们慢慢挪出去后，突然就倾盆大雨了——那家面啡室外居多，如果去了肯定很狼狈。最后还是回去附近吃了碗面 🌧️',
        images: [],
        special: false
    },
    {
        id: 64,
        date: '2026年6月14日',
        title: '寻找咖啡色JokeBear & 壹加壹',
        content: '下午想着去找咖啡色的JokeBear，转了一圈还是没找到。然后和CC一起逛了本土特色大型超市《壹加壹》，点着奶茶逛着超市，非常的 chill，也是我们向往的生活 🧸',
        images: [],
        special: false
    },
    {
        id: 65,
        date: '2026年6月14日',
        title: '我们的第一部电影',
        content: '下午4点多和CC一起看了《火遮眼》——一部全程打戏的电影，好爽！全场没有过多独白，拳拳到肉。这是我和CC在一起以来看的第一部电影，在一起这么久了，才终于完成了传统三件套：「逛街、吃饭、看电影」🎬',
        images: [],
        special: false
    },
    {
        id: 66,
        date: '2026年6月14日',
        title: '夜游菊花园',
        content: '晚上回到CC家楼下，我们又去走了一圈菊花园，还看到了丰田卡罗拉车友们在聚集，有点搞笑的场面。回家的路上，感受着夜晚的微风，和CC在一起就是这样，什么都是快乐的 🌙',
        images: [],
        special: false
    },
    {
        id: 67,
        date: '2026年6月14日',
        title: '两个轮的甜蜜',
        content: '回到家楼下，我开着她家的电动车载着CC去买水果。路上的风很舒服——平时我载CC都是四个轮的，这次两个轮的终于也让我载她一回了。和CC在一起，有种不用顾忌任何事的自在，就是一种自由自在、很放松的感觉！🛵',
        images: [],
        special: false
    }
];

// ============================================
// 工具函数
// ============================================

/** 从日期字符串提取月份数字 */
function extractMonth(dateStr) {
    const match = dateStr.match(/(\d+)月/);
    return match ? parseInt(match[1]) : null;
}

/** 将中文日期解析为排序用的 Date 对象 */
function parseDateForSort(dateStr) {
    // 处理 "2026年5月" 这种没有日的
    const matchD = dateStr.match(/(\d+)年(\d+)月(\d+)日/);
    if (matchD) {
        return new Date(parseInt(matchD[1]), parseInt(matchD[2]) - 1, parseInt(matchD[3]));
    }
    const matchM = dateStr.match(/(\d+)年(\d+)月/);
    if (matchM) {
        return new Date(parseInt(matchM[1]), parseInt(matchM[2]) - 1, 1);
    }
    return new Date(0);
}

/** 获取月份对应的 emoji */
function getMonthEmoji(month) {
    const map = { 3: '🌸', 4: '🌿', 5: '☀️', 6: '💕' };
    return map[month] || '📅';
}

/** 获取月份中文名 */
function getMonthName(month) {
    const map = { 3: '三月·初遇', 4: '四月·热恋', 5: '五月·情深', 6: '六月·升温' };
    return map[month] || `${month}月`;
}

// ============================================
// DOM 元素
// ============================================
const timeline = document.getElementById('timeline');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxCounter = document.getElementById('lightbox-counter');
const monthNavBtns = document.querySelectorAll('.month-nav-btn');
const backToTop = document.getElementById('backToTop');

// 灯箱状态
let lightboxState = {
    allImages: [],    // 所有图片路径的扁平数组
    currentIndex: -1,
};

// ============================================
// 渲染时间轴（按月分组）
// ============================================
function renderTimeline() {
    if (timelineData.length === 0) {
        timeline.innerHTML = `
            <div class="timeline-empty">
                <span class="timeline-empty-icon">🔔</span>
                <p class="timeline-empty-text">时间轴还没有内容</p>
                <p class="timeline-empty-text">在 js/main.js 的 timelineData 中添加回忆吧 ✨</p>
            </div>
        `;
        return;
    }

    // 按月份分组（保持原有顺序）
    const groups = {};
    timelineData.forEach(item => {
        const month = extractMonth(item.date);
        if (!groups[month]) groups[month] = [];
        groups[month].push(item);
    });

    // 构建 HTML
    let html = '';
    const sortedMonths = Object.keys(groups)
        .map(Number)
        .sort((a, b) => a - b);

    sortedMonths.forEach((month, groupIdx) => {
        const items = groups[month];
        const emoji = getMonthEmoji(month);
        const name = getMonthName(month);

        // 月份分组标题
        html += `
            <div class="month-group-title" data-month="${month}">
                <span class="month-group-label">
                    <span class="month-emoji">${emoji}</span>
                    ${name}
                </span>
            </div>
        `;

        // 该月的条目
        items.forEach((item, idx) => {
            const globalIndex = timelineData.indexOf(item);
            html += `
                <div class="timeline-item ${item.special ? 'special' : ''}"
                     data-index="${globalIndex}" data-month="${month}">
                    <div class="timeline-dot"></div>
                    <span class="timeline-date">${item.date}</span>
                    <div class="timeline-card">
                        <h3 class="timeline-title">${item.title}</h3>
                        <p class="timeline-text">${item.content}</p>
                        ${item.images.length > 0 ? `
                            <div class="timeline-images">
                                ${item.images.map(img => `
                                    <div class="image-wrapper">
                                        <div class="image-placeholder">
                                            <div class="placeholder-spinner"></div>
                                        </div>
                                        <img
                                            data-src="${img}"
                                            alt="${item.title}"
                                            class="timeline-image lazy"
                                        >
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
            `;
        });
    });

    timeline.innerHTML = html;

    // 收集所有图片用于灯箱导航
    collectAllImages();

    // 绑定图片点击事件
    bindImageClicks();

    // 初始化滚动动画
    initScrollAnimation();

    // 初始化懒加载
    initLazyLoad();
}

// ============================================
// 收集所有图片（用于灯箱导航）
// ============================================
function collectAllImages() {
    const allImages = [];
    timelineData.forEach(item => {
        item.images.forEach(img => {
            allImages.push({ src: img, title: item.title });
        });
    });
    lightboxState.allImages = allImages;
}

// ============================================
// 图片点击 → 灯箱（带前后导航）
// ============================================
function bindImageClicks() {
    document.querySelectorAll('.timeline-image.loaded, .timeline-image:not(.lazy)').forEach(img => {
        img.addEventListener('click', () => {
            const src = img.dataset.src || img.src;
            openLightbox(src);
        });
    });

    // 对懒加载图片，等加载完成后绑定
    const observer = new MutationObserver(() => {
        document.querySelectorAll('.timeline-image.loaded:not([data-click-bound])').forEach(img => {
            img.setAttribute('data-click-bound', 'true');
            img.addEventListener('click', () => {
                const src = img.dataset.src || img.src;
                openLightbox(src);
            });
        });
    });
    observer.observe(timeline, { childList: true, subtree: true });
}

// ============================================
// 灯箱功能（增强：前后导航）
// ============================================
function openLightbox(src) {
    if (!src) return;

    // 找到该图片在 allImages 中的索引
    const idx = lightboxState.allImages.findIndex(img => img.src === src);
    lightboxState.currentIndex = idx;

    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';

    updateLightboxCounter();

    // 预加载前后图片
    preloadAdjacent(idx);
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    lightboxState.currentIndex = -1;
    document.body.style.overflow = '';
}

function navigateLightbox(direction) {
    const total = lightboxState.allImages.length;
    if (total === 0) return;

    let newIndex = lightboxState.currentIndex + direction;
    // 循环
    if (newIndex < 0) newIndex = total - 1;
    if (newIndex >= total) newIndex = 0;

    lightboxState.currentIndex = newIndex;
    const img = lightboxState.allImages[newIndex];
    lightboxImg.src = img.src;
    updateLightboxCounter();
    preloadAdjacent(newIndex);
}

function updateLightboxCounter() {
    const total = lightboxState.allImages.length;
    const current = lightboxState.currentIndex + 1;
    if (total > 0) {
        lightboxCounter.textContent = `${current} / ${total}`;
    } else {
        lightboxCounter.textContent = '';
    }
}

function preloadAdjacent(idx) {
    const total = lightboxState.allImages.length;
    const prevIdx = (idx - 1 + total) % total;
    const nextIdx = (idx + 1) % total;
    const link1 = document.createElement('link');
    link1.rel = 'preload';
    link1.as = 'image';
    link1.href = lightboxState.allImages[prevIdx].src;
    document.head.appendChild(link1);
    const link2 = document.createElement('link');
    link2.rel = 'preload';
    link2.as = 'image';
    link2.href = lightboxState.allImages[nextIdx].src;
    document.head.appendChild(link2);
}

// 灯箱事件
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
});
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

// ============================================
// 月份导航筛选
// ============================================
monthNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 更新按钮状态
        monthNavBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetMonth = btn.dataset.month;

        // 显示/隐藏条目和分组标题
        document.querySelectorAll('.timeline-item').forEach(item => {
            if (targetMonth === 'all') {
                item.classList.remove('filtered-out');
            } else {
                const itemMonth = item.dataset.month;
                if (itemMonth === targetMonth) {
                    item.classList.remove('filtered-out');
                } else {
                    item.classList.add('filtered-out');
                }
            }
        });

        // 分组标题
        document.querySelectorAll('.month-group-title').forEach(title => {
            if (targetMonth === 'all') {
                title.style.display = '';
            } else {
                const titleMonth = title.dataset.month;
                title.style.display = titleMonth === targetMonth ? '' : 'none';
            }
        });
    });
});

// ============================================
// 滚动动画（错开延迟）
// ============================================
function initScrollAnimation() {
    const items = document.querySelectorAll('.timeline-item:not(.filtered-out)');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const item = entry.target;
                    // 错开延迟
                    const siblings = Array.from(item.parentNode.querySelectorAll('.timeline-item:not(.filtered-out)'));
                    const idx = siblings.indexOf(item);
                    const delay = Math.min(idx * 50, 300);
                    setTimeout(() => {
                        item.classList.add('visible');
                    }, delay);
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px'
        }
    );

    items.forEach((item) => observer.observe(item));
}

// ============================================
// 图片懒加载
// ============================================
function initLazyLoad() {
    const lazyImages = document.querySelectorAll('img.lazy');

    const imageObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.dataset.src;
                    const wrapper = img.closest('.image-wrapper');
                    const placeholder = wrapper?.querySelector('.image-placeholder');

                    if (src) {
                        img.src = src;
                        img.onload = () => {
                            img.classList.remove('lazy');
                            img.classList.add('loaded');
                            if (placeholder) {
                                placeholder.classList.add('hidden');
                            }
                            // 绑定点击
                            if (!img.hasAttribute('data-click-bound')) {
                                img.setAttribute('data-click-bound', 'true');
                                img.addEventListener('click', () => openLightbox(src));
                            }
                        };
                        img.onerror = () => {
                            if (placeholder) {
                                placeholder.innerHTML = '<span style="color:#999;font-size:12px;">加载失败</span>';
                            }
                        };
                    }
                    observer.unobserve(img);
                }
            });
        },
        {
            rootMargin: '150px 0px',
            threshold: 0.01
        }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));
}

// ============================================
// 天数计算
// ============================================
function updateDaysCounter() {
    const meetDate = new Date('2026-03-24');
    const loveDate = new Date('2026-04-11');
    const today = new Date();

    const meetDays = Math.floor((today - meetDate) / (1000 * 60 * 60 * 24)) + 1;
    const loveDays = Math.floor((today - loveDate) / (1000 * 60 * 60 * 24)) + 1;

    const counter = document.getElementById('days-counter');
    if (counter) {
        counter.innerHTML = `相遇 <strong>${meetDays}</strong> 天 · 在一起 <strong>${loveDays}</strong> 天 💕`;
    }
}

// ============================================
// 回到顶部按钮
// ============================================
function initBackToTop() {
    const handleScroll = () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// 月份导航滚动阴影效果
// ============================================
function initMonthNavShadow() {
    const monthNav = document.getElementById('monthNav');
    const handleScroll = () => {
        if (window.scrollY > 60) {
            monthNav.classList.add('scrolled');
        } else {
            monthNav.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
}

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateDaysCounter();
    renderTimeline();
    initBackToTop();
    initMonthNavShadow();
});
