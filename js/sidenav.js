        (function() {
            
            var bodyEl = $('body'),
                navToggleBtn = bodyEl.find('.nav-toggle-btn');
            
            navToggleBtn.on('click', function(i) {
                bodyEl.toggleClass('active-nav');
                i.preventDefault();
            });
})();