import Cookies from 'js-cookie';

function getTheme() : String {
  var theme : String;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = "dark"
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme = "light"
  } else {
      theme = "dark"
  }
  var themeany : any = Cookies.get('theme')
  if (themeany !== undefined){
    theme = themeany
  }
  return theme;
}

export default getTheme;
