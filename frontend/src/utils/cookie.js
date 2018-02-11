/**
 * 查询 cookie
 * @param {string} cookieName 名称
 * @returns {string} cookie值
 */
const getCookie = function getCookie(cookieName) {
  const reg = new RegExp(`(?:(?:^|.*;) *${cookieName} *= *([^;]*).*$)|^.*$`);
  return document.cookie.replace(reg, '$1');
};

/**
 * 设置 cookie
 * @param {string} cookieName cookie 名
 * @param {string} value cookie 值
 */
const setCookie = function setCookie(cookieName, value) {
  document.cookie = `${cookieName}=${value}`;
};

export default {
  getCookie,
  setCookie,
};
