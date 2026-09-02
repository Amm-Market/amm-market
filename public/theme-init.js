(function () {
  try {
    var key = "avana-theme"
    var stored = localStorage.getItem(key)
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    var isDark = stored === "dark" || (stored !== "light" && prefersDark)
    var root = document.documentElement
    root.classList.toggle("dark", isDark)
    root.style.colorScheme = isDark ? "dark" : "light"
  } catch {}
})()
