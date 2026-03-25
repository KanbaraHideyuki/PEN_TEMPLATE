export function tabletViewport() {

    document.addEventListener('DOMContentLoaded', function() {
        var ua = navigator.userAgent;
        var viewport = document.querySelector("meta[name=viewport]");
        if ((ua.indexOf('iPhone') > -1) || ua.indexOf('iPod') > -1 || (ua.indexOf('Android') > -1 && ua.indexOf('Mobile') > -1)) {
            viewport.setAttribute("content", "width=device-width,initial-scale=1");
        } else {
            viewport.setAttribute("content", "width=1084");
        }
    });
}
