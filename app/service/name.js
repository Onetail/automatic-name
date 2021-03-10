const {
  GenderEnum,
  UsernameLanguageEnum,
  UsernameTagTypeEnum,
  UsernameRandomTagDefaultLength,
} = require('../enum/name');
const uuid = require('uuid');

class NameService {
  constructor() {
    this.firstname = null;
    this.lastname = null;
    this.gender = null;
    this.tag = '#';
    this.tagNumber = null;
    this.spacing = ' ';

    this.taiwan = {
      firstname: [
        '趙',
        '錢',
        '孫',
        '李',
        '周',
        '吳',
        '鄭',
        '王',
        '馮',
        '陳',
        '楮',
        '衛',
        '蔣',
        '沈',
        '韓',
        '楊',
        '朱',
        '秦',
        '尤',
        '許',
        '何',
        '呂',
        '施',
        '張',
        '孔',
        '曹',
        '嚴',
        '華',
        '金',
        '魏',
        '陶',
        '姜',
        '戚',
        '謝',
        '鄒',
        '喻',
        '柏',
        '水',
        '竇',
        '章',
        '雲',
        '蘇',
        '潘',
        '葛',
        '奚',
        '範',
        '彭',
        '郎',
        '魯',
        '韋',
        '昌',
        '馬',
        '苗',
        '鳳',
        '花',
        '方',
        '俞',
        '任',
        '袁',
        '柳',
        '酆',
        '鮑',
        '史',
        '唐',
        '費',
        '廉',
        '岑',
        '薛',
        '雷',
        '賀',
        '倪',
        '湯',
        '滕',
        '殷',
        '羅',
        '畢',
        '郝',
        '鄔',
        '安',
        '常',
        '樂',
        '於',
        '時',
        '傅',
        '皮',
        '卞',
        '齊',
        '康',
        '伍',
        '余',
        '元',
        '卜',
        '顧',
        '孟',
        '平',
        '黃',
        '和',
        '穆',
        '蕭',
        '尹',
        '姚',
        '邵',
        '湛',
        '汪',
        '祁',
        '毛',
        '禹',
        '狄',
        '米',
        '貝',
        '明',
        '臧',
        '計',
        '伏',
        '成',
        '戴',
        '談',
        '宋',
        '茅',
        '龐',
        '熊',
        '紀',
        '舒',
        '屈',
        '項',
        '祝',
        '董',
        '梁',
        '杜',
        '阮',
        '藍',
        '閩',
        '席',
        '季',
        '麻',
        '強',
        '賈',
        '路',
        '婁',
        '危',
        '江',
        '童',
        '顏',
        '郭',
        '梅',
        '盛',
        '林',
        '刁',
        '鍾',
        '徐',
        '丘',
        '駱',
        '高',
        '夏',
        '蔡',
        '田',
        '樊',
        '胡',
        '淩',
        '霍',
        '虞',
        '萬',
        '支',
        '柯',
        '昝',
        '管',
        '盧',
        '莫',
        '經',
        '房',
        '裘',
        '繆',
        '幹',
        '解',
        '應',
        '宗',
        '丁',
        '宣',
        '賁',
        '鄧',
        '郁',
        '單',
        '杭',
        '洪',
        '包',
        '諸',
        '左',
        '石',
        '崔',
        '吉',
        '鈕',
        '龔',
        '程',
        '嵇',
        '邢',
        '滑',
        '裴',
        '陸',
        '榮',
        '翁',
        '荀',
        '羊',
        '於',
        '惠',
        '甄',
        '麹',
        '家',
        '封',
        '芮',
        '羿',
        '儲',
        '靳',
        '汲',
        '邴',
        '糜',
        '松',
        '井',
        '段',
        '富',
        '巫',
        '烏',
        '焦',
        '巴',
        '弓',
        '牧',
        '隗',
        '山',
        '谷',
        '車',
        '侯',
        '宓',
        '蓬',
        '全',
        '郗',
        '班',
        '仰',
        '秋',
        '仲',
        '伊',
        '宮',
        '寧',
        '仇',
        '欒',
        '暴',
        '甘',
        '斜',
        '厲',
        '戎',
        '祖',
        '武',
        '符',
        '劉',
        '景',
        '詹',
        '束',
        '龍',
        '葉',
        '幸',
        '司',
        '韶',
        '郜',
        '黎',
        '薊',
        '薄',
        '印',
        '宿',
        '白',
        '懷',
        '蒲',
        '邰',
        '從',
        '鄂',
        '索',
        '鹹',
        '籍',
        '賴',
        '卓',
        '藺',
        '屠',
        '蒙',
        '池',
        '喬',
        '陰',
        '郁',
        '胥',
        '能',
        '蒼',
        '雙',
        '聞',
        '莘',
        '黨',
        '翟',
        '譚',
        '貢',
        '勞',
        '逄',
        '姬',
        '申',
        '扶',
        '堵',
        '冉',
        '宰',
        '酈',
        '雍',
        '郤',
        '璩',
        '桑',
        '桂',
        '濮',
        '牛',
        '壽',
        '通',
        '邊',
        '扈',
        '燕',
        '冀',
        '郟',
        '浦',
        '尚',
        '農',
        '溫',
        '別',
        '莊',
        '晏',
        '柴',
        '瞿',
        '閻',
        '充',
        '慕',
        '連',
        '茹',
        '習',
        '宦',
        '艾',
        '魚',
        '容',
        '向',
        '古',
        '易',
        '慎',
        '戈',
        '廖',
        '庾',
        '終',
        '暨',
        '居',
        '衡',
        '步',
        '都',
        '耿',
        '滿',
        '弘',
        '匡',
        '國',
        '文',
        '寇',
        '廣',
        '祿',
        '闕',
        '東',
        '歐',
        '殳',
        '沃',
        '利',
        '蔚',
        '越',
        '夔',
        '隆',
        '師',
        '鞏',
        '厙',
        '聶',
        '晁',
        '勾',
        '敖',
        '融',
        '冷',
        '訾',
        '辛',
        '闞',
        '那',
        '簡',
        '饒',
        '空',
        '曾',
        '毋',
        '沙',
        '乜',
        '養',
        '鞠',
        '須',
        '豐',
        '巢',
        '關',
        '蒯',
        '相',
        '查',
        '後',
        '荊',
        '紅',
        '遊',
        '竺',
        '權',
        '逑',
        '蓋',
        '益',
        '桓',
        '公',
        '萬俟',
        '司馬',
        '上官',
        '歐陽',
        '夏侯',
        '諸葛',
        '聞人',
        '東方',
        '赫連',
        '皇甫',
        '尉遲',
        '公羊',
        '澹台',
        '公冶',
        '宗政',
        '濮陽',
        '淳於',
        '單於',
        '太叔',
        '申屠',
        '公孫',
        '仲孫',
        '軒轅',
        '令狐',
        '鍾離',
        '宇文',
        '長孫',
        '慕容',
        '鮮於',
        '閭丘',
        '司徒',
        '司空',
        '丌官',
        '司寇',
        '仉',
        '督',
        '子車',
        '顓孫',
        '端木',
        '巫馬',
        '公西',
        '漆雕',
        '樂正',
        '壤駟',
        '公良',
        '拓拔',
        '夾谷',
        '宰父',
        '谷梁',
        '晉',
        '楚',
        '閻',
        '法',
        '汝',
        '鄢',
        '塗',
        '欽',
        '段幹',
        '百里',
        '東郭',
        '南門',
        '呼延',
        '歸',
        '海',
        '羊舌',
        '微生',
        '岳',
        '帥',
        '緱',
        '亢',
        '況',
        '後',
        '有',
        '琴',
        '梁丘',
        '左丘',
        '東門',
        '西門',
        '商',
        '牟',
        '佘',
        '佴',
        '伯',
        '賞',
        '南宮',
        '墨',
        '哈',
        '譙',
        '笪',
        '年',
        '愛',
        '陽',
        '佟',
        '第五',
        '言',
        '福',
      ],
      lastname: {
        male: [
          '苑博',
          '傑邦',
          '文材',
          '文淵',
          '文達',
          '明軒',
          '彬華',
          '瀚福',
          '厲軒',
          '傑裕',
          '俊勝',
          '睿軒',
          '遠旭',
          '寒煙',
          '傑毅',
          '鴻燦',
          '遠鴻',
          '文興',
          '志國',
          '鼎遙',
          '鏡宇',
          '鴻承',
          '俊偉',
          '鼎翎',
          '修永',
          '世圖',
          '俊新',
          '冠宇',
          '寒雲',
          '瀚君',
          '弘瑋',
          '韻傑',
          '傑雄',
          '文霖',
          '俊帆',
          '昌凱',
          '德春',
          '傑書',
          '昌翔',
          '德元',
          '樂奇',
          '旭翰',
          '君乾',
          '任平',
          '澤信',
          '聖國',
          '弘耀',
          '博遠',
          '月陽',
          '泰玄',
          '倫博',
          '龍德',
          '鼎佑',
          '哲瀚',
          '弘振',
          '昌雲',
          '新遠',
          '貴依',
          '俊顏',
          '文來',
          '瑋軒',
          '鼎鴻',
          '秋風',
          '榮銀',
          '志輝',
          '博倫',
          '榮春',
          '睿博',
          '世康',
          '瀚景',
          '智濤',
          '晉運',
          '傑翔',
          '晉剛',
          '明新',
          '展瀚',
          '傑依',
          '昌毅',
          '風濤',
          '寒承',
          '聖帆',
          '明志',
          '旭冠',
          '瑋博',
          '宇燦',
          '雨瑞',
          '清泉',
          '月星',
          '志歐',
          '德寶',
          '文韻',
          '文祖',
          '文春',
          '韻宇',
          '光耀',
          '弘靖',
          '君翔',
          '棋博',
          '弘浩',
          '宇馳',
          '文馳',
          '彬逸',
          '瀚舟',
          '新傑',
          '哲南',
          '志邦',
          '澤君',
          '文辰',
          '瑋暢',
          '彬城',
          '濤勝',
          '晉永',
          '濤羽',
          '鼎宇',
          '棋翰',
          '貴博',
          '樺楠',
          '志偉',
          '弘邦',
          '明瑞',
          '柯勤',
          '青松',
          '德軒',
          '翰辰',
          '遠喬',
          '鴻祥',
          '翰顏',
          '杉暉',
          '金福',
          '遠瑾',
          '博塵',
          '晉岳',
          '德石',
          '海杉',
          '鼎承',
          '明健',
          '瀚誠',
          '浩新',
          '彬琪',
          '城德',
          '鼎智',
          '聖天',
          '晉枝',
          '德君',
          '曲漾',
          '翰逸',
          '若菲',
          '博泰',
          '秀永',
          '宇瀚',
          '君裕',
          '仁順',
          '鼎風',
          '辰逸',
          '傑奧',
          '百川',
          '瀚德',
          '浩誠',
          '傑宏',
          '昌奇',
          '豐瞻',
          '博仁',
          '文皓',
          '俊龍',
          '彬銳',
          '暢瑞',
          '昌賢',
          '雪松',
        ],
        female: [
          '玉燕',
          '春柏',
          '楠素',
          '君壁',
          '睿嬌',
          '甜英',
          '向卉',
          '麗梅',
          '芙香',
          '雲昕',
          '馥煙',
          '娜盈',
          '娜漫',
          '凝雁',
          '紫槐',
          '雪婭',
          '冰蘭',
          '幻蓮',
          '雪柳',
          '冰旋',
          '甜熙',
          '沛珊',
          '語雅',
          '芳虹',
          '若雪',
          '雨珍',
          '春竹',
          '妙香',
          '花萍',
          '惜茵',
          '沐娟',
          '月爽',
          '瑜柔',
          '紅芍',
          '秋柔',
          '紫嗚',
          '嬌語',
          '雅瑾',
          '妙筠',
          '琪涵',
          '秋荷',
          '茹婕',
          '冰婉',
          '雨雙',
          '雨雪',
          '映倚',
          '翠竹',
          '珍美',
          '怡鈺',
          '馨梨',
          '婭楠',
          '曉巧',
          '雪芳',
          '韻雪',
          '以菱',
          '靜影',
          '依雲',
          '淩瑤',
          '巧春',
          '安荷',
          '佳紅',
          '雁卉',
          '菲霞',
          '莉夢',
          '夢芹',
          '月虹',
          '以萱',
          '紅芳',
          '水雲',
          '幻絲',
          '語鳳',
          '香怡',
          '婷莉',
          '依柏',
          '潤慧',
          '雪曦',
          '璇盈',
          '平綠',
          '樂丹',
          '紫真',
          '念薇',
          '春兒',
          '谷波',
          '菡穎',
          '秋春',
          '蕾碧',
          '珊琴',
          '翠柳',
          '芹香',
          '雲燕',
          '紫超',
          '艷姍',
          '瑜昕',
          '念芹',
          '靜琪',
          '柔雅',
          '宛凝',
          '沛菡',
          '醉蝶',
          '語嫣',
          '幻紫',
          '萱雅',
          '綺彤',
          '香菱',
          '若蕾',
          '曉玫',
          '馨蕊',
          '水瑤',
          '珊縵',
          '芳菲',
          '海桃',
          '雅兒',
          '蕾雅',
          '碧彤',
          '黛亦',
          '蝶葵',
          '淑穎',
          '尋春',
          '梅雪',
          '如春',
          '紫怡',
          '妍芳',
          '靜璇',
          '昕怡',
          '醉珊',
          '紫芳',
          '雨嘉',
          '曉青',
          '艷蓉',
          '采菡',
          '清雲',
          '婕蓮',
          '冰煙',
          '玫雅',
          '雅彤',
          '茹桃',
          '紫薇',
          '思芳',
          '冰穎',
          '曉亦',
          '含櫻',
          '菲槐',
          '水瑩',
          '水冰',
          '彤旋',
          '月霞',
          '丹華',
          '海亦',
          '晴柔',
          '曦奇',
          '歆翠',
          '曦冰',
          '靈薇',
          '如鳳',
        ],
      },
    };

    this.chinese = {
      firstname: [
        '赵',
        '钱',
        '孙',
        '李',
        '周',
        '吴',
        '郑',
        '王',
        '冯',
        '陈',
        '楮',
        '卫',
        '蒋',
        '沉',
        '韩',
        '杨',
        '朱',
        '秦',
        '尤',
        '许',
        '何',
        '吕',
        '施',
        '张',
        '孔',
        '曹',
        '严',
        '华',
        '金',
        '魏',
        '陶',
        '姜',
        '戚',
        '谢',
        '邹',
        '喻',
        '柏',
        '水',
        '窦',
        '章',
        '云',
        '苏',
        '潘',
        '葛',
        '奚',
        '范',
        '彭',
        '郎',
        '鲁',
        '韦',
        '昌',
        '马',
        '苗',
        '凤',
        '花',
        '方',
        '俞',
        '任',
        '袁',
        '柳',
        '酆',
        '鲍',
        '史',
        '唐',
        '费',
        '廉',
        '岑',
        '薛',
        '雷',
        '贺',
        '倪',
        '汤',
        '滕',
        '殷',
        '罗',
        '毕',
        '郝',
        '邬',
        '安',
        '常',
        '乐',
        '于',
        '时',
        '傅',
        '皮',
        '卞',
        '齐',
        '康',
        '伍',
        '余',
        '元',
        '卜',
        '顾',
        '孟',
        '平',
        '黄',
        '和',
        '穆',
        '萧',
        '尹',
        '姚',
        '邵',
        '湛',
        '汪',
        '祁',
        '毛',
        '禹',
        '狄',
        '米',
        '贝',
        '明',
        '臧',
        '计',
        '伏',
        '成',
        '戴',
        '谈',
        '宋',
        '茅',
        '庞',
        '熊',
        '纪',
        '舒',
        '屈',
        '项',
        '祝',
        '董',
        '梁',
        '杜',
        '阮',
        '蓝',
        '闽',
        '席',
        '季',
        '麻',
        '强',
        '贾',
        '路',
        '娄',
        '危',
        '江',
        '童',
        '颜',
        '郭',
        '梅',
        '盛',
        '林',
        '刁',
        '锺',
        '徐',
        '丘',
        '骆',
        '高',
        '夏',
        '蔡',
        '田',
        '樊',
        '胡',
        '凌',
        '霍',
        '虞',
        '万',
        '支',
        '柯',
        '昝',
        '管',
        '卢',
        '莫',
        '经',
        '房',
        '裘',
        '缪',
        '干',
        '解',
        '应',
        '宗',
        '丁',
        '宣',
        '贲',
        '邓',
        '郁',
        '单',
        '杭',
        '洪',
        '包',
        '诸',
        '左',
        '石',
        '崔',
        '吉',
        '钮',
        '龚',
        '程',
        '嵇',
        '邢',
        '滑',
        '裴',
        '陆',
        '荣',
        '翁',
        '荀',
        '羊',
        '于',
        '惠',
        '甄',
        '麹',
        '家',
        '封',
        '芮',
        '羿',
        '储',
        '靳',
        '汲',
        '邴',
        '糜',
        '松',
        '井',
        '段',
        '富',
        '巫',
        '乌',
        '焦',
        '巴',
        '弓',
        '牧',
        '隗',
        '山',
        '谷',
        '车',
        '侯',
        '宓',
        '蓬',
        '全',
        '郗',
        '班',
        '仰',
        '秋',
        '仲',
        '伊',
        '宫',
        '宁',
        '仇',
        '栾',
        '暴',
        '甘',
        '斜',
        '厉',
        '戎',
        '祖',
        '武',
        '符',
        '刘',
        '景',
        '詹',
        '束',
        '龙',
        '叶',
        '幸',
        '司',
        '韶',
        '郜',
        '黎',
        '蓟',
        '薄',
        '印',
        '宿',
        '白',
        '怀',
        '蒲',
        '邰',
        '从',
        '鄂',
        '索',
        '咸',
        '籍',
        '赖',
        '卓',
        '蔺',
        '屠',
        '蒙',
        '池',
        '乔',
        '阴',
        '郁',
        '胥',
        '能',
        '苍',
        '双',
        '闻',
        '莘',
        '党',
        '翟',
        '谭',
        '贡',
        '劳',
        '逄',
        '姬',
        '申',
        '扶',
        '堵',
        '冉',
        '宰',
        '郦',
        '雍',
        '郤',
        '璩',
        '桑',
        '桂',
        '濮',
        '牛',
        '寿',
        '通',
        '边',
        '扈',
        '燕',
        '冀',
        '郏',
        '浦',
        '尚',
        '农',
        '温',
        '别',
        '庄',
        '晏',
        '柴',
        '瞿',
        '阎',
        '充',
        '慕',
        '连',
        '茹',
        '习',
        '宦',
        '艾',
        '鱼',
        '容',
        '向',
        '古',
        '易',
        '慎',
        '戈',
        '廖',
        '庾',
        '终',
        '暨',
        '居',
        '衡',
        '步',
        '都',
        '耿',
        '满',
        '弘',
        '匡',
        '国',
        '文',
        '寇',
        '广',
        '禄',
        '阙',
        '东',
        '欧',
        '殳',
        '沃',
        '利',
        '蔚',
        '越',
        '夔',
        '隆',
        '师',
        '巩',
        '厍',
        '聂',
        '晁',
        '勾',
        '敖',
        '融',
        '冷',
        '訾',
        '辛',
        '阚',
        '那',
        '简',
        '饶',
        '空',
        '曾',
        '毋',
        '沙',
        '乜',
        '养',
        '鞠',
        '须',
        '丰',
        '巢',
        '关',
        '蒯',
        '相',
        '查',
        '后',
        '荆',
        '红',
        '游',
        '竺',
        '权',
        '逑',
        '盖',
        '益',
        '桓',
        '公',
        '万俟',
        '司马',
        '上官',
        '欧阳',
        '夏侯',
        '诸葛',
        '闻人',
        '东方',
        '赫连',
        '皇甫',
        '尉迟',
        '公羊',
        '澹台',
        '公冶',
        '宗政',
        '濮阳',
        '淳于',
        '单于',
        '太叔',
        '申屠',
        '公孙',
        '仲孙',
        '轩辕',
        '令狐',
        '锺离',
        '宇文',
        '长孙',
        '慕容',
        '鲜于',
        '闾丘',
        '司徒',
        '司空',
        '丌官',
        '司寇',
        '仉',
        '督',
        '子车',
        '颛孙',
        '端木',
        '巫马',
        '公西',
        '漆凋',
        '乐正',
        '壤驷',
        '公良',
        '拓拔',
        '夹谷',
        '宰父',
        '谷梁',
        '晋',
        '楚',
        '阎',
        '法',
        '汝',
        '鄢',
        '涂',
        '钦',
        '段干',
        '百里',
        '东郭',
        '南门',
        '呼延',
        '归',
        '海',
        '羊舌',
        '微生',
        '岳',
        '帅',
        '缑',
        '亢',
        '况',
        '后',
        '有',
        '琴',
        '梁丘',
        '左丘',
        '东门',
        '西门',
        '商',
        '牟',
        '佘',
        '佴',
        '伯',
        '赏',
        '南宫',
        '墨',
        '哈',
        '谯',
        '笪',
        '年',
        '爱',
        '阳',
        '佟',
        '第五',
        '言',
        '福',
      ],
      lastname: {
        male: [
          '苑博',
          '杰邦',
          '文材',
          '文渊',
          '文达',
          '明轩',
          '彬华',
          '瀚福',
          '厉轩',
          '杰裕',
          '俊胜',
          '睿轩',
          '远旭',
          '寒烟',
          '杰毅',
          '鸿灿',
          '远鸿',
          '文兴',
          '志国',
          '鼎遥',
          '镜宇',
          '鸿承',
          '俊伟',
          '鼎翎',
          '修永',
          '世图',
          '俊新',
          '冠宇',
          '寒云',
          '瀚君',
          '弘玮',
          '韵杰',
          '杰雄',
          '文霖',
          '俊帆',
          '昌凯',
          '德春',
          '杰书',
          '昌翔',
          '德元',
          '乐奇',
          '旭翰',
          '君乾',
          '任平',
          '泽信',
          '圣国',
          '弘耀',
          '博远',
          '月阳',
          '泰玄',
          '伦博',
          '龙德',
          '鼎佑',
          '哲瀚',
          '弘振',
          '昌云',
          '新远',
          '贵依',
          '俊颜',
          '文来',
          '玮轩',
          '鼎鸿',
          '秋风',
          '荣银',
          '志辉',
          '博伦',
          '荣春',
          '睿博',
          '世康',
          '瀚景',
          '智涛',
          '晋运',
          '杰翔',
          '晋刚',
          '明新',
          '展瀚',
          '杰依',
          '昌毅',
          '风涛',
          '寒承',
          '圣帆',
          '明志',
          '旭冠',
          '玮博',
          '宇灿',
          '雨瑞',
          '清泉',
          '月星',
          '志欧',
          '德宝',
          '文韵',
          '文祖',
          '文春',
          '韵宇',
          '光耀',
          '弘靖',
          '君翔',
          '棋博',
          '弘浩',
          '宇驰',
          '文驰',
          '彬逸',
          '瀚舟',
          '新杰',
          '哲南',
          '志邦',
          '泽君',
          '文辰',
          '玮畅',
          '彬城',
          '涛胜',
          '晋永',
          '涛羽',
          '鼎宇',
          '棋翰',
          '贵博',
          '桦楠',
          '志伟',
          '弘邦',
          '明瑞',
          '柯勤',
          '青松',
          '德轩',
          '翰辰',
          '远乔',
          '鸿祥',
          '翰颜',
          '杉晖',
          '金福',
          '远瑾',
          '博尘',
          '晋岳',
          '德石',
          '海杉',
          '鼎承',
          '明健',
          '瀚诚',
          '浩新',
          '彬琪',
          '城德',
          '鼎智',
          '圣天',
          '晋枝',
          '德君',
          '曲漾',
          '翰逸',
          '若菲',
          '博泰',
          '秀永',
          '宇瀚',
          '君裕',
          '仁顺',
          '鼎风',
          '辰逸',
          '杰奥',
          '百川',
          '瀚德',
          '浩诚',
          '杰宏',
          '昌奇',
          '丰瞻',
          '博仁',
          '文皓',
          '俊龙',
          '彬锐',
          '畅瑞',
          '昌贤',
          '雪松',
        ],
        female: [
          '玉燕',
          '春柏',
          '楠素',
          '君壁',
          '睿娇',
          '甜英',
          '向卉',
          '丽梅',
          '芙香',
          '云昕',
          '馥烟',
          '娜盈',
          '娜漫',
          '凝雁',
          '紫槐',
          '雪娅',
          '冰兰',
          '幻莲',
          '雪柳',
          '冰旋',
          '甜熙',
          '沛珊',
          '语雅',
          '芳虹',
          '若雪',
          '雨珍',
          '春竹',
          '妙香',
          '花萍',
          '惜茵',
          '沐娟',
          '月爽',
          '瑜柔',
          '红芍',
          '秋柔',
          '紫呜',
          '娇语',
          '雅瑾',
          '妙筠',
          '琪涵',
          '秋荷',
          '茹婕',
          '冰婉',
          '雨双',
          '雨雪',
          '映倚',
          '翠竹',
          '珍美',
          '怡钰',
          '馨梨',
          '娅楠',
          '晓巧',
          '雪芳',
          '韵雪',
          '以菱',
          '静影',
          '依云',
          '凌瑶',
          '巧春',
          '安荷',
          '佳红',
          '雁卉',
          '菲霞',
          '莉梦',
          '梦芹',
          '月虹',
          '以萱',
          '红芳',
          '水云',
          '幻丝',
          '语凤',
          '香怡',
          '婷莉',
          '依柏',
          '润慧',
          '雪曦',
          '璇盈',
          '平绿',
          '乐丹',
          '紫真',
          '念薇',
          '春儿',
          '谷波',
          '菡颖',
          '秋春',
          '蕾碧',
          '珊琴',
          '翠柳',
          '芹香',
          '云燕',
          '紫超',
          '艳姗',
          '瑜昕',
          '念芹',
          '静琪',
          '柔雅',
          '宛凝',
          '沛菡',
          '醉蝶',
          '语嫣',
          '幻紫',
          '萱雅',
          '绮彤',
          '香菱',
          '若蕾',
          '晓玫',
          '馨蕊',
          '水瑶',
          '珊缦',
          '芳菲',
          '海桃',
          '雅儿',
          '蕾雅',
          '碧彤',
          '黛亦',
          '蝶葵',
          '淑颖',
          '寻春',
          '梅雪',
          '如春',
          '紫怡',
          '妍芳',
          '静璇',
          '昕怡',
          '醉珊',
          '紫芳',
          '雨嘉',
          '晓青',
          '艳蓉',
          '采菡',
          '清云',
          '婕莲',
          '冰烟',
          '玫雅',
          '雅彤',
          '茹桃',
          '紫薇',
          '思芳',
          '冰颖',
          '晓亦',
          '含樱',
          '菲槐',
          '水莹',
          '水冰',
          '彤旋',
          '月霞',
          '丹华',
          '海亦',
          '晴柔',
          '曦奇',
          '歆翠',
          '曦冰',
          '灵薇',
          '如凤',
        ],
      },
    };

    this.english = {
      firstname: [
        'Smith',
        'Bailey',
        'Jones',
        'Parker',
        'Taylor',
        'Miller',
        'Williams',
        'Davis',
        'Brown',
        'Murphy',
        'Davies',
        'Price',
        'Evans',
        'Bell',
        'Wilson',
        'Baker',
        'Thomas',
        'Griffiths',
        'Roberts',
        'Kelly',
        'Johnson',
        'Simpson',
        'Lewis',
        'Marshall',
        'Walker',
        'Collins',
        'Robinson',
        'Bennett',
        'Wood',
        'Cox',
        'Thompson',
        'Richardson',
        'White',
        'Fox',
        'Watson',
        'Gray',
        'Jackson',
        'Rose',
        'Wright',
        'Chapman',
        'Green',
        'Hunt',
        'Harris',
        'Robertson',
        'Cooper',
        'Shaw',
        'King',
        'Reynolds',
        'Lee',
        'Lloyd',
        'Martin',
        'Ellis',
        'Clarke',
        'Richards',
        'James',
        'Russell',
        'Morgan',
        'Wilkinson',
        'Hughes',
        'Khan',
        'Edwards',
        'Graham',
        'Hill',
        'Stewart',
        'Moore',
        'Reid',
        'Clark',
        'Murray',
        'Harrison',
        'Powell',
        'Scott',
        'Palmer',
        'Young',
        'Holmes',
        'Morris',
        'Rogers',
        'Hall',
        'Stevens',
        'Ward',
        'Walsh',
        'Turner',
        'Hunter',
        'Carter',
        'Thomson',
        'Phillips',
        'Matthews',
        'Mitchell',
        'Ross',
        'Patel',
        'Owen',
        'Adams',
        'Mason',
        'Campbell',
        'Knight',
        'Anderson',
        'Kennedy',
        'Allen',
        'Butler',
        'Cook',
        'Saunders',
      ],
      lastname: {
        male: [
          'Smith',
          'Johnson',
          'Williams',
          'Jones',
          'Brown',
          'Davis',
          'Miller',
          'Wilson',
          'Moore',
          'Taylor',
          'Anderson',
          'Thomas',
          'Jackson',
          'White',
          'Harris',
          'Martin',
          'Thompson',
          'Garcia',
          'Martinez',
          'Robinson',
          'Clark',
          'Rodriguez',
          'Lewis',
          'Lee',
          'Walker',
          'Hall',
          'Allen',
          'Young',
          'Hernandez',
          'King',
          'Wright',
          'Lopez',
          'Hill',
          'Scott',
          'Green',
          'Adams',
          'Baker',
          'Gonzalez',
          'Nelson',
          'Carter',
          'Mitchell',
          'Perez',
          'Roberts',
          'Turner',
          'Phillips',
          'Campbell',
          'Parker',
          'Evans',
          'Edwards',
          'Collins',
          'Stewart',
          'Sanchez',
          'Morris',
          'Rogers',
          'Reed',
          'Cook',
          'Morgan',
          'Bell',
          'Murphy',
          'Bailey',
          'Rivera',
          'Cooper',
          'Richardson',
          'Cox',
          'Howard',
          'Ward',
          'Torres',
          'Peterson',
          'Gray',
          'Ramirez',
          'James',
          'Watson',
          'Brooks',
          'Kelly',
          'Sanders',
          'Price',
          'Bennett',
          'Wood',
          'Barnes',
          'Ross',
          'Henderson',
          'Coleman',
          'Jenkins',
          'Perry',
          'Powell',
          'Long',
          'Patterson',
          'Hughes',
          'Flores',
          'Washington',
          'Butler',
          'Simmons',
          'Foster',
          'Gonzales',
          'Bryant',
          'Alexander',
          'Russell',
          'Griffin',
          'Diaz',
          'Hayes',
        ],
        female: [
          'Abby',
          'Adley',
          'Amadahy',
          'Amarey',
          'Amity',
          'Amy',
          'Andry',
          'Arely',
          'Ashley',
          'Aubrey',
          'Audrey',
          'Avery',
          'Bailey',
          'Bay',
          'Bellamy',
          'Berkeley',
          'Bethany',
          'Betsy',
          'Betty',
          'Beverly',
          'Bexley',
          'Blakely',
          'Brinkley',
          'Brinley',
          'Brittany',
          'Bunny',
          'Camry',
          'Candy',
          'Carbry',
          'Carly',
          'Cary',
          'Casey',
          'Cassidy',
          'Charity',
          'Charley',
          'Charsley',
          'Chastity',
          'Chauncey',
          'Courtney',
          'Crosby',
          'Daisy',
          'Dalary',
          'Daveney',
          'Delaney',
          'Destiny',
          'Dusty',
          'Elegy',
          'Ellery',
          'Emberly',
          'Embry',
          'Emily',
          'Emmy',
          'Emory',
          'Ensley',
          'Everly',
          'Finley',
          'Gentry',
          'Gilly',
          'Ginny',
          'Glory',
          'Grey',
          'Hadley',
          'Hailey',
          'Haisley',
          'Haley',
          'Harley',
          'Hartley',
          'Hayley',
          'Heavenly',
          'Hedy',
          'Henley',
          'Hilary',
          'Holiday',
          'Holly',
          'Honesty',
          'Honey',
          'Icy',
          'Indy',
          'Ivory',
          'Ivvy',
          'Ivy',
          'Jady',
          'January',
          'Jenny',
          'Jersey',
          'Jetty',
          'Jordy',
          'Journey',
          'Joy',
          'Judy',
          'Kailey',
          'Kassidy',
          'Keeley',
          'Keily',
          'Kelly',
          'Kelsey',
          'Kenley',
          'Kennedy',
          'Kensley',
          'Kerry',
          'Kimberly',
          'Kinley',
          'Kinsley',
          'Knightley',
          'Lacey',
          'Lainey',
          'Landry',
          'Lily',
          'Lindsay',
          'Lindsey',
          'Loxley',
          'Lucy',
          'Macy',
          'Maeby',
          'Mallory',
          'Mandy',
          'Margaery',
          'Marley',
          'Mavy',
          'Mckinley',
          'Melany',
          'Melody',
          'Mercy',
          'Miley',
          'Mindy',
          'Misty',
          'Monday',
          'Nancy',
          'Nataly',
          'Navy',
          'Oakley',
          'Paisley',
          'Pansy',
          'Peggy',
          'Penny',
          'Peony',
          'Perry',
          'Polly',
          'Poppy',
          'Presley',
          'Quinley',
          'Rally',
          'Remy',
          'Ridley',
          'Roxy',
          'Royalty',
          'Rudy',
          'Sally',
          'Sandy',
          'Savvy',
          'Serenity',
          'Shay',
          'Sky',
          'Stacy',
          'Story',
          'Sunday',
          'Sunny',
          'Sydney',
          'Taffy',
          'Tansy',
          'Teddy',
          'Tenley',
          'Terry',
          'Tiffany',
          'Tinley',
          'Tinsley',
          'Toby',
          'Tory',
          'Trinity',
          'Valley',
          'Verity',
          'Waverly',
          'Wednesday',
          'Wellesley',
          'Wendy',
          'Whitley',
          'Whitney',
          'Zoey',
        ],
      },
    };
  }

  async createNewName(...languages) {
    const language = languages.length
      ? languages[Math.floor(Math.random() * languages.length)]
      : Object.values(UsernameLanguageEnum)[Math.floor(Math.random() * Object.values(UsernameLanguageEnum).length)];
    this.firstname = this[language].firstname[Math.floor(Math.random() * this[language].firstname.length)];
    this.gender = Object.values(GenderEnum)[Math.floor(Math.random() * Object.values(GenderEnum).length)];
    this.lastname = this[language].lastname[this.gender][
      Math.floor(Math.random() * this[language].lastname[this.gender].length)
    ];

    return this;
  }

  getSpacing() {
    return this.spacing;
  }

  setSpacing(spacing) {
    this.spacing = spacing;
    return this;
  }

  getUsername() {
    return this.firstname + this.lastname;
  }

  getFullname(spacing) {
    this.spacing = spacing || this.spacing;
    return `${this.firstname}${this.spacing}${this.lastname}`;
  }

  getTag() {
    return this.tag;
  }

  setTag(tag) {
    this.tag = tag;
    return this;
  }

  async getUsernameWithTag(type, ...params) {
    switch (type) {
      case UsernameTagTypeEnum.NUMBER:
        const randomLength = params[0] || UsernameRandomTagDefaultLength;
        this.tagNumber = Math.floor(Math.random() * Math.pow(10, randomLength))
          .toString()
          .padStart(randomLength, 0);
        break;
      case UsernameTagTypeEnum.TIMESTAMP:
        this.tagNumber = Date.now();
        break;
      default:
        this.tagNumber = await uuid[type](...params);
    }
    console.log(this.firstname + this.lastname + this.tag + this.tagNumber);
    return this.firstname + this.lastname + this.tag + this.tagNumber;
  }

  async getFullnameWithTag(type, ...params) {
    switch (type) {
      case UsernameTagTypeEnum.NUMBER:
        const randomLength = params[0] || UsernameRandomTagDefaultLength;
        this.tagNumber = Math.floor(Math.random() * Math.pow(10, randomLength))
          .toString()
          .padStart(randomLength, 0);
        break;
      case UsernameTagTypeEnum.TIMESTAMP:
        this.tagNumber = Date.now();
        break;
      default:
        this.tagNumber = await uuid[type](...params);
    }
    console.log(`${this.firstname}${this.spacing}${this.lastname}${this.spacing}${this.tag}${this.tagNumber}`);
    return `${this.firstname}${this.spacing}${this.lastname}${this.spacing}${this.tag}${this.tagNumber}`;
  }

  async run() {
    await this.createNewName();
    await this.createNewName(UsernameLanguageEnum.ENGLISH);
    await this.createNewName(UsernameLanguageEnum.ENGLISH, UsernameLanguageEnum.TAIWAN);
    const username = await this.getUsername();
    const fullname = await this.getFullname();

    await this.getUsernameWithTag(UsernameTagTypeEnum.NUMBER);
    await this.getUsernameWithTag(UsernameTagTypeEnum.NUMBER, 7);
    await this.getUsernameWithTag(UsernameTagTypeEnum.TIMESTAMP);
    await this.getUsernameWithTag('v1');
    await this.getUsernameWithTag('v3', username + fullname, '1b671a64-40d5-491e-99b0-da01ff1f3341');
    await this.getUsernameWithTag('v4');
    await this.getUsernameWithTag('v5', username + fullname, '1b671a64-40d5-491e-99b0-da01ff1f3341');

    this.setSpacing('_');
    await this.getFullnameWithTag(UsernameTagTypeEnum.NUMBER);
    await this.getFullnameWithTag(UsernameTagTypeEnum.NUMBER, 7);
    await this.getFullnameWithTag(UsernameTagTypeEnum.TIMESTAMP);
    await this.getFullnameWithTag('v1');
    await this.getFullnameWithTag('v3', username + fullname, '1b671a64-40d5-491e-99b0-da01ff1f3341');
    await this.getFullnameWithTag('v4');
    await this.getFullnameWithTag('v5', username + fullname, '1b671a64-40d5-491e-99b0-da01ff1f3341');

    this.setTag('');
    this.getTag();
    await this.getUsernameWithTag(UsernameTagTypeEnum.NUMBER);
    await this.getFullnameWithTag(UsernameTagTypeEnum.NUMBER);
  }
}

module.exports = NameService;
