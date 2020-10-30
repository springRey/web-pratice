/**
 * 格式化时间
 * {{value | formatTime 'yyyy-MM-dd'}}
 */
export const setFormatTime = (value, type) => {
  //   if (!value) value = Number(Date.now());
  const time = new Date(parseInt(value * 1000, 10));
  let formatTime = type || "yyyy-MM-dd";
  const date = {
    // "Y+": time.getFullYear(),
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds(),
    'q+': Math.floor((time.getMonth() + 3) / 3),
    'S+': time.getMilliseconds()
  };
  if (/(y+)/i.test(formatTime)) {
    formatTime = formatTime.replace(
      RegExp.$1,
      `${time.getFullYear()}`.substr(4 - RegExp.$1.length)
    );
  }
  Object.keys(date).forEach(k => {
    if (new RegExp(`(${k})`).test(formatTime)) {
      formatTime = formatTime.replace(
        RegExp.$1,
        RegExp.$1.length === 1
          ? date[k]
          : `00${date[k]}`.substr(`${date[k]}`.length)
      );
    }
  });
  return formatTime;
};

/* 倒计时
    time 10位时间戳
    return [天天，时时，分分，秒秒] 字符串数组
*/
export const setCountdown = remainTime => {
  let day = Math.floor(remainTime / (60 * 60 * 24));
  let hour = Math.floor((remainTime % (60 * 60 * 24)) / (60 * 60));
  let minute = Math.floor((remainTime % (60 * 60)) / 60);
  let second = Math.floor(remainTime % 60);
  day = `${day}天`; // 1~9补0
  hour = `${hour < 10 ? '0' : ''}${hour}时`; // 1~9补0
  minute = `${minute < 10 ? '0' : ''}${minute}分`; // 1~9补0
  second = `${second < 10 ? '0' : ''}${second}秒`; // 1~9补0
  return `${day}:${hour}:${minute}:${second}`;
};
