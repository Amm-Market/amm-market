(function () {
  try {
    var key = "avana-theme"
    var stored = localStorage.getItem(key)
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    var isDark = stored === "dark" || (stored !== "light" && prefersDark)
    var root = document.documentElement.classList
    if (isDark) root.add("dark")
    else root.remove("dark")
  } catch {}
})()
