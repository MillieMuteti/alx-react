function getFullYear() {
    return new Date().getFullYear();
  }
  
  function getFooterCopy(isIndex) {
    return isIndex ? "Holberton School" : "Holberton School main dashboard";
  }
  
  export { getFullYear, getFooterCopy };
  export function getLatestNotification() {
    return "<strong>Urgent requirement</strong> - complete by EOD";
  }
  