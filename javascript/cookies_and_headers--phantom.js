// ######################################################
// This is an example module provided by Wraith.
// Feel free to amend for your own requirements.
// ######################################################
module.exports = function (phantom, ready) {

    phantom.addCookie({
        'name': 'shown_marketing_modal_v1',
        'value': '60',
        'domain': '.lessonplanet.com'
    });

    phantom.open(phantom.url, function () {
        setTimeout(ready, 6000);
    });
}
