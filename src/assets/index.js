function clearTooltip(e) {
    e.currentTarget.setAttribute("class", "copy");
    e.currentTarget.removeAttribute("data-text");
}

function showTooltip(e) {
    e.setAttribute("class", "copy tooltip");
    e.setAttribute("data-text", "Copied!");
}
var buttons = document.querySelectorAll('.copy');

var clipboard = new ClipboardJS(buttons);
clipboard.on('success', function(e) {
    showTooltip(e.trigger);
});

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseleave", clearTooltip);
    buttons[i].addEventListener("blur", clearTooltip);
}
