$(document).ready(function () {
    var quotes = ['A vision', 'An idea', ' A concept', ' An objective', ];

    var $quotes = $(".quotes");
    var quoteIndex = 0;
    
    function showNextQuote() {
        var q = quotes[quoteIndex];
        if (q === undefined) {
           quoteIndex = 0;
           q = quotes[0];
        }

        $quotes.fadeOut(function () {
           $quotes.text(q).fadeIn();
        });
        
        ++quoteIndex;
        setTimeout(showNextQuote, 3000);

    }
    
    showNextQuote();
    
});