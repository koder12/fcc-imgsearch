var request = require('request');

exports.search = function (q, p, callback) {
    var options = {
        url: 'https://api.imgur.com/3/gallery/search/' + p + '?q=' + q,
        headers: {Authorization: 'Client-ID 7e988ce6dc7fe6e'},
        json: true
    };

    function getImgLinks(err, response, body) {
        if (!err && response.statusCode == 200) {
            body = body.data.filter(function (image) {
                if (!image.is_album) {
                    return image;
                }
            }).map(function (image) {
                return {
                    url: image.link,
                    snippet: image.title,
                    context: 'https://imgur.com/' + image.id
                };
            });
            callback(body);
        }

        else {
            callback(body);
        }
    }
    request(options, getImgLinks);
};