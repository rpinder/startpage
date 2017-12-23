function startTime() {
    var today = new Date();
    document.getElementById('time').innerHTML =
        checkTime(today.getHours()) + " " + checkTime(today.getMinutes());
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function interpretSearch() {
    var search = document.getElementById("js-search-input").value.split(" ");
    var searchTerms = "";

    var keywords = {
        't': 'https://twitter.com/',
       'tw': 'https://twitch.tv/',
        'r': 'https://reddit.com/r/',
        'y': 'https://youtube.com/results?search_query=',
        'a': 'https://www.amazon.co.uk/s/url=search-alias%3Daps&field-keywords='
    };

    searchTerms += keywords[search[0]] == null
        ? "https://google.com/search?q=" + search[0] + search[1]
        : keywords[search[0]] + search[1];
    
    for (var i = 2; i < search.length; i++) {
        searchTerms += "+"+search[i];
    }

    window.location.href = searchTerms;
    return false;
};
