/* ====================================
   Onload functions
   ==================================== */
function randomImg() {
    var store = $("img[src*='unsplash']");
    for (i = 0; i < store.length; i++) {
        var imgsrc = $(store[i]).attr('src');
        $(store[i]).attr("src", imgsrc + i)
    }
}
$(function() {
    $('.story__thumb img[src$=".gif"]').parents('.story').addClass('story--gif');
    $('#sponsorlist img').hover(function() {
        var src = $(this).attr('src');
        $(this).attr('src', $(this).attr('rel'));
        $(this).attr('rel', src);
    }, function() {
        var src = $(this).attr('src');
        $(this).attr('src', $(this).attr('rel'));
        $(this).attr('rel', src);
    });
    // DO NOT run this function in live site;
    randomImg();
});