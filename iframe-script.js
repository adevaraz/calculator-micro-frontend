window.addEventListener('DOMContentLoaded', function(e) {
    var iframes = document.querySelectorAll("iframe")
    for(var i = 0; i < iframes.length; i++) {
        iframe[i].onload = function() {
            console.log(i)
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
        }
    }
} );