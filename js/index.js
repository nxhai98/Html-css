var textareas = document.getElementsByTagName('post-img');

for (i = 0; i < textareas.length; i++) {
    // you can omit the 'if' if you want to style the parent node regardless of its
    // element type
    if (textareas[i].parentNode.tagName.toString().toLowerCase() == 'div') {
        textareas[i].onfocus = function() {
            this.parentNode.style.borderStyle = 'solid';
        }
        textareas[i].onblur = function() {
            this.parentNode.style.borderStyle = 'dashed';
        }
    }
}