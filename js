document.addEventListener("DOMContentLoaded", (function() {
    window.$ = document.querySelector.bind(document),
    window.$$ = document.querySelectorAll.bind(document),
    window.toFileName = function(e) {
        return e.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, "_")
    }
    ;
    const e = document.body
      , t = e.id
      , o = document.querySelector("header")
      , n = document.getElementById("copyright");
    function r() {
        const t = o.offsetHeight + 2 * parseFloat(getComputedStyle(o).paddingBottom);
        e.style.setProperty("--headerHeight", `${t}px`)
    }
    n && (n.textContent = (new Date).getFullYear()),
    $("header") && (r(),
    window.addEventListener("resize", r),
    function() {
        const e = document.querySelector("nav .toggle")
          , t = document.querySelector("nav .menu");
        e && t && e.addEventListener("click", (function() {
            t.classList.toggle("showMenu"),
            e.classList.toggle("showIcon")
        }
        ))
    }());
    const d = {
        default: "#9580ff",
        garage: "#80ffff",
        design: "#80ffff",
        profiles: "#ff8080",
        error404: "#ff8080",
        acknowledge: "#8aff80"
    };
    d.hasOwnProperty(t) ? e.style.setProperty("--currentColor", d[t]) : e.style.setProperty("--currentColor", d.default)
}
));
