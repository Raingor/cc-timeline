/**
 * 纪念日时间轴 - JavaScript
 * 记录用户和女朋友的点点滴滴
 */

// ============================================
// 时间轴数据 - 在此编辑你的纪念日内容
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
        content: '清明假期，我们一起去了顺德。吃了念念不忘的排骨饭，逛了金榜街，尝了双皮奶等甜品。那晚，我悄悄记住了——她喜欢双皮奶这件事 🍮',
        images: ['images/4_4_1.webp', 'images/4_4_2.webp', 'images/4_4_3.webp', 'images/4_4_4.webp'],
        special: false
    },
    {
        id: 7,
        date: '2026年4月4日',
        title: '心有所属',
        content: '在商场里，我注意到她盯着旋转木马的木制工艺品，眼神里透着喜欢。那一刻我也看进去了，心里默默想着——以后一定要送给她 🎠',
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
        content: '一直逛到下午四点，我们来到了潭州98时光街——一个有年代感的巷子街。这才是这次来顺德的真正目的，我们本是奔着一群哆啦A梦而来的。走了一圈没找到，问了本地阿姨，又凭着CC的感觉走进更深的巷子——终于找到了！ 🎈',
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
        content: '后来我们去了兴中广场的摩天轮，坐了一圈，欣赏着夜景。那一刻，我们迎来了第一次合照，定格了这个夜晚的浪漫 🎡',
        images: ['images/4_25_ferris_1.webp', 'images/4_25_ferris_2.webp', 'images/4_25_ferris_3.webp', 'images/4_25_ferris_4.webp'],
        special: false
    },
    {
        id: 18,
        date: '2026年4月26日',
        title: '第一次接她下班',
        content: '这天，我去接CC下班，晚上一起去了樱花里吃Party泰。第一次接她下班，心里有种说不出的甜蜜感～ 🌸',
        images: ['images/4_26_thai_1.webp', 'images/4_26_thai_2.webp', 'images/4_26_thai_3.webp'],
        special: false
    },
    {
        id: 19,
        date: '2026年4月26日',
        title: '甜到心里的糖水',
        content: '后来坐着CC的摩托车去吃了糖水。糖水很甜，但和你在一起的时候，每一刻都是幸福和甜甜的～ 🍡',
        images: ['images/4_26_sweet_1.webp'],
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
        content: '马不停蹄，我们又走了小红书推荐的Citywalk路线——学宫、文化馆、学院街，一路走下去。可惜最后的图书馆没开门，但一点也不影响两个人一起的心情～ 🏛️',
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
        content: '回到小榄后，我们找了一家安安静静的小店，点了特调和气泡水，享受属于两个人的慢时光～ 门口还蹲着一只超可爱的小狗，CC忍不住一直逗它，少女心爆棚！🐶💕',
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
        content: '那天早上，带着CC去喝早茶。本以为是两个人的悠闲时光，却在茶楼里偶遇了我老爸——CC就这样在毫无准备的情况下见了我的家长。而故事还没有完：送CC回中山的路上，她说想让我陪她和妈妈喝个下午茶。去了之后，她妈妈热情地留我吃便饭，谁知这一吃，就把她家里人、常听她提起的亲戚都见了个遍。幸运的是，没有语言障碍，氛围轻松愉快，有说有笑。就这样，在毫无准备的情况下，我们俩同一天完成了——我见了她的家人，她也见了我的家长。命运这个编剧，真的很懂浪漫 💕',
        images: ['images/5_10_1.webp', 'images/5_10_2.webp', 'images/5_10_3.webp'],
        special: false
    },
    {
        id: 36,
        date: '2026年5月10日',
        title: '她的儿时乐园',
        content: '便饭后，我们逛了她儿时的公园。陪她一起玩了旋转木马、铁轨车、旋转飞机……看着她像孩子一样笑得那么开心，那么快乐，我的心也被填得满满的。能参与她的童年记忆，能陪她重温这些简单的幸福——这一刻，我真切地感受到：爱她，就是希望她永远这样快乐 🎠🎢',
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
        content: '今天再次陪CC去看心理医生。康复需要时间，但我一定会陪着她，Forever！💪\n\n看完后我们在中山石岐随便乱逛，发现还不如回小榄来得休闲。于是定位了一家咖啡店，一去到才发现——竟然是个花鸟市场！专门卖宠物、卖鸟、卖鱼的那种地方，连CC这个本地人都不知道。穿过一个个玻璃鱼缸，恍惚间像走进了一座水族馆，五彩斑斓的鱼儿游来游去，蛮开心的 🐠\n\n那天虽然炎热，但我们还是紧紧牵着手。在石岐，我们还买了CC最爱的自嘲熊手办和抱枕，买了两个盲盒手办。回到小榄的时候完全忘记拆了，直到吃晚饭才想起来。赶紧拆开一看——两个竟然是一模一样的款式！我们明明是错开来抽的，这样都能抽到一样的，真的太有默契了。于是，一人一个，刚刚好～ 🧸\n\n**小插曲**：吃完饭还是忘了扫停车码，CC怒亏20元停车费！我们会铭记忘记扫商家停车码这件事的，下次一定记得！💸',
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
    }
];

// ============================================
// DOM 元素
// ============================================
const timelineContainer = document.getElementById('timeline');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxClose = document.getElementById('lightbox-close');

// ============================================
// 渲染时间轴
// ============================================
function renderTimeline() {
    if (timelineData.length === 0) {
        timelineContainer.innerHTML = `
            <div class="timeline-empty">
                <div class="timeline-empty-icon">🎀</div>
                <p class="timeline-empty-text">时间轴内容为空</p>
                <p class="timeline-empty-text">请在 js/main.js 的 timelineData 中添加内容</p>
            </div>
        `;
        return;
    }

    timelineContainer.innerHTML = timelineData.map((item, index) => `
        <div class="timeline-item ${item.special ? 'special' : ''}" data-index="${index}">
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
                                    onclick="openLightbox('${img}')"
                                >
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `).join('');

    initScrollAnimation();
    initLazyLoad();
}

// ============================================
// 滚动动画
// ============================================
function initScrollAnimation() {
    const items = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    items.forEach((item) => observer.observe(item));
}

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
            rootMargin: '100px 0px',
            threshold: 0.01
        }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));
}

// ============================================
// 灯箱功能
// ============================================
function openLightbox(src) {
    if (!src) return;
    lightboxImg.src = src;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
    document.body.style.overflow = '';
}

// 事件监听
lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// ESC 键关闭灯箱
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
});

// ============================================
// 天数计算
// ============================================
function updateDaysCounter() {
    const meetDate = new Date('2026-03-24');  // 相遇日期
    const loveDate = new Date('2026-04-11');   // 在一起日期
    const today = new Date();

    const meetDays = Math.floor((today - meetDate) / (1000 * 60 * 60 * 24)) + 1;
    const loveDays = Math.floor((today - loveDate) / (1000 * 60 * 60 * 24)) + 1;

    const counter = document.getElementById('days-counter');
    if (counter) {
        counter.innerHTML = `相遇 <strong>${meetDays}</strong> 天 · 在一起 <strong>${loveDays}</strong> 天 💕`;
    }
}

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    updateDaysCounter();
    renderTimeline();
});
