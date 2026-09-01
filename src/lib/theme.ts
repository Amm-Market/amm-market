export const THEME_STORAGE_KEY = "avana-theme"

export const themeInitScript = `(function(){try{var k="${THEME_STORAGE_KEY}";var t=localStorage.getItem(k);var d=window.matchMedia("(prefers-color-scheme: dark)").matches;var r=t==="dark"||(t!=="light"&&d);var c=document.documentElement.classList;if(r)c.add("dark");else c.remove("dark");}catch(e){}})();`
