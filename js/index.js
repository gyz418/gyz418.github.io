;(function () {
  if (window.location.href.indexOf('festival') === -1) return
  let monthArr = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
  let dayArr = ['初', '十', '廿']
  let monthDayArr = []
  const numberToString = (number) => {
    if (number.match(/\D/) || number.length >= 14) return;
    let zhArray = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']; // 数字对应中文
    let baseArray = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万']; //进位填充字符，第一位是 个位，可省略
    let string = String(number).split('').reverse().map((item, index) => { // 把数字切割成数组并倒序排列，然后进行遍历转成中文
      // 如果当前位为0，直接输出数字， 否则输出 数字 + 进位填充字符
      item = Number(item) == 0 ? zhArray[Number(item)] : zhArray[Number(item)] + baseArray[index];
      return item;
    }).reverse().join(''); // 倒叙回来数组，拼接成字符串
    string = string.replace(/^一十/, '十');  // 如果以 一十 开头，可省略一
    // string = string.replace(/零+/, '零');  // 如果有多位相邻的零，只写一个即可
    string = string.replace(/零+/, '');  // 如果有多位相邻的零，只写一个即可
    return string;
  }
  const getChineseDate = (time) => {
    let date = time ? new Date(time) : new Date();
    let dateString = date.toLocaleString('zh-CN-u-ca-chinese');
    dateString = dateString.replace(/(\d+)\s*?年/, (x, y) => {
      let result = '';
      result = "甲乙丙丁戊己庚辛壬癸".charAt((y - 4) % 10); // 天干
      result += "子丑寅卯辰巳午未申酉戌亥".charAt((y - 4) % 12); // 地支
      return result;
    });
    dateString = dateString.split(' ')[0]; // 取年月日
    let g = dateString.substr(0, 2) + '年';
    let m = dateString.substring(2, dateString.match('月').index) + '月';
    let d = dateString.match(/\d+/)[0];
    d = d < 11 ? '初' + numberToString(d) : numberToString(d);
    let animals = ["猴", "鸡", "狗", "猪", "鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊"];
    let index = date.toLocaleString('zh-CN-u-ca-chinese').substr(0, 4) % 12;
    let a = animals[index];
    return {
      g, // 干支
      m, // 月
      d, // 日
      a  // 生肖
    };
  }
  const formatDayObj = () => {
    let obj = new Date()
    let arr = ['', '一', '二', '三', '四', '五', '六', '日']
    return {
      y: obj.getFullYear(),
      m: obj.getMonth() + 1,
      d: obj.getDate(),
      w: '星期' + arr[obj.getDay()],
    }
  }

  // 自己维护一个数组
  function getMonthDayArr() {
    let mes = document.querySelectorAll('h2')
    mes.forEach((val, key) => {
      let id = val.getAttribute('id')
      let str = id.split('月')
      let m = str[0]
      m = monthArr.indexOf(m)
      let strArr = str[1].split('')
      let d = dayArr.indexOf(strArr[0]) * 10 + monthArr.indexOf(strArr[1])
      let num = m * 100 + d
      console.log(id, m, d, num);
      monthDayArr.push({
        // key: key,
        val: id,
        num: num
      })
    })
    console.log('arr', monthDayArr);
  }

  function getChineseDateToNum(str) {
    // str = '2022-9-28'
    let date = str ? new Date(str) : new Date()
    let sonDate = date.toLocaleString('zh-CN-u-ca-chinese')
    sonDate = sonDate.split(' ')[0]
    let month = sonDate.replace(/\d/g, '')
    month = month.substring(1, month.length - 1)
    let monthNum = monthArr.indexOf(month)
    let day = sonDate.split('月')[1]
    console.log(sonDate, month, typeof monthNum, typeof day);
    let res = monthNum * 100 + parseInt(day)
    console.log(monthNum);
    return res
  }

  function getNextDayMes(currentNum) {
    let obj = {}
    for (let i = 0; i < monthDayArr.length; i++) {
      let leftNum = monthDayArr[i].num - currentNum
      if (leftNum >= 0) {
        obj = monthDayArr[i]
        obj.leftNum = leftNum
        break
      }
    }
    return obj
  }
  function showTodayMes(){
    let festival = document.getElementById('festival')
    let now = document.createElement('h1')
    let obj = getChineseDate()
    let obj2 = formatDayObj()
    let res = obj2.y + '年' + obj2.m + '月' + obj2.d + '日 ' + obj2.w + ' 农历' + obj.m + obj.d
    now.style.fontSize = '24px'
    now.innerHTML = res
    festival.parentNode.insertBefore(now, festival)
    festival.style.display = 'none'
  }
  function showTipMes(){
    let currentNum = getChineseDateToNum()
    console.log('当前值', currentNum);
    let mesObj = getNextDayMes(currentNum)
    console.log(mesObj);

    let tip = document.getElementById('tip')
    tip.style.display = 'none'
    if (!mesObj.val) return
    tip.style.display = 'block'
    tip.style.color = '#f00'
    let tipMes = mesObj.leftNum === 0 ? '今天是： ' : '下个节日： '
    let tipMes2 = mesObj.leftNum > 0 ? '，预计还有' + mesObj.leftNum + "天" : ''
    tip.innerHTML = tipMes + mesObj.val + tipMes2
  }

  window.onload = function () {
    getMonthDayArr()  // 维护一个数组
    showTodayMes()   // 显示当天信息
    showTipMes()   // 显示提示信息
  }
})();
