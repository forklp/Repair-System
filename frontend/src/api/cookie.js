const getCookie = function getCookie(cookieName) {
  const query = `${cookieName}=`;
  const cookies = document.cookie.split(';');
  cookies.forEach((cookie) => {
    if (cookie.indexOf(query) === 0) {
      return cookie.substring(query.length, cookie.length);
    }
    return null;
  });
};

export default {
  getCookie,
};
