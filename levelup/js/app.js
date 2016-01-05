// =============================================================================

    // APP JS
    // Property of Norex
    // Authored by Josh Beveridge and Justin Bellefontaine

// =============================================================================
(function($) {

    $(document).ready(function() {

        // URL Detection =======================================================
        function hashURL() {

            if(window.location.hash.split('#')[1] == null) {
                return false;
            }
            else {

                var hash = window.location.hash.split('#')[1];
                var designer = "designer-post";
                var gamer = "gamer-post";

                if(hash.indexOf(designer) == 0) {

                    // Loader
                    $('.loader').addClass('design');

                    // Panes
                    $('.pane.white').addClass('active');
                    $('.pane.black').addClass('inactive');

                    // Hero Section
                    $('.hero-section.design').addClass('active');
                    $('.hero-section.gaming').addClass('inactive');

                    // Icon Wrapper
                    $('.icon-wrapper').addClass('design');

                    // Desktop Navigation
                    $('.desktop-navigation').addClass('active').addClass('design').addClass('article');

                    // Article
                    $('.article-section').addClass('active').addClass('design');
                    $('.return-to-list').addClass('designer');

                    var ajaxurl = site.ajax_url;
                    var postName = hash.substr(14);

                    // Return Post Contents
                    $.post(
                        ajaxurl,
                        {
                            'action' : 'load_page_data',
                            'post_name' : postName
                        },
                        function(response){

                            $('.article-section').find('.article').append("<h1 class='post-title'>"+response.post_title+'</h1>');
                            $('.article-section').find('.article').append("<span class='post-date'>Published on "+response.post_date+'</span>');
                            $('.article-section').find('.article').append("<a href='https://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension' class='post-length'>"+response.post_length+' minute read</a>');
                            $('.article-section').find('.article').append(response.post_content);

                            // Social Links
                            $('#twitterLink').attr('href', "https://twitter.com/intent/tweet?text="+response.post_title_encoded+"&amp;via=joshdrink&amp;url="+response.post_link+"").attr('data-counturl', ""+response.post_link+"");
                            $('#linkedinLink').attr('href', "https://www.linkedin.com/shareArticle?mini=true&title="+response.post_title_encoded+"&url="+response.post_link+"");
                            $('#facebookLink').attr('href', "http://www.facebook.com/sharer.php?u="+response.post_link+"");

                        },
                        "json"
                    );

                }
                if(hash.indexOf(gamer) == 0) {

                    // Loader
                    $('.loader').addClass('gaming');

                    // Panes
                    $('.pane.white').addClass('inactive');
                    $('.pane.black').addClass('active');

                    // Hero Section
                    $('.hero-section.design').addClass('inactive');
                    $('.hero-section.gaming').addClass('active');

                    // Icon Wrapper
                    $('.icon-wrapper').addClass('gaming');

                    // Desktop Navigation
                    $('.desktop-navigation').addClass('active').addClass('gaming').addClass('article');

                    // Article
                    $('.article-section').addClass('active').addClass('gaming');
                    $('.post-sharing').addClass('gaming');
                    $('.return-to-list').addClass('gamer');

                    var ajaxurl = site.ajax_url;
                    var postName = hash.substr(11);

                    // Return Post Contents
                    $.post(
                        ajaxurl,
                        {
                            'action' : 'load_page_data',
                            'post_name' : postName
                        },
                        function(response){

                            $('.article-section').find('.article').append("<h1 class='post-title'>"+response.post_title+'</h1>');
                            $('.article-section').find('.article').append("<span class='post-date'>Published on "+response.post_date+'</span>');
                            $('.article-section').find('.article').append("<a href='https://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension' class='post-length'>"+response.post_length+' minute read</a>');
                            $('.article-section').find('.article').append(response.post_content);

                            // Social Links
                            $('#twitterLink').attr('href', "https://twitter.com/intent/tweet?text="+response.post_title_encoded+"&amp;via=joshdrink&amp;url="+response.post_link+"").attr('data-counturl', ""+response.post_link+"");
                            $('#linkedinLink').attr('href', "https://www.linkedin.com/shareArticle?mini=true&amp;title="+response.post_title_encoded+"&amp;url="+response.post_link+"");
                            $('#facebookLink').attr('href', "http://www.facebook.com/sharer.php?u="+response.post_link+"");

                        },
                        "json"
                    );

                }
                else {
                    return false;
                }

            }

        }

        hashURL();

        // Internal Link Handler ===============================================
        // $('a').on('click', function(e){
        //
        //     e.preventDefault();
        //
        //     var linkIntent = $(this).attr('href');
        //     var mySite = "joshbeveridge.com";
        //
        //     if(mySite.indexOf(linkIntent) >= 0) {
        //         console.log('HEY!');
        //     }
        //     else {
        //         $(this).unbind('click');
        //     }
        //
        // });

        // AJAX Loader
        $(document).ajaxStart(function () {
            $('.loader').addClass('active');;
        });
        $(document).ajaxStop(function () {
            $('.loader').removeClass('active');
        });

        // User Agent Data Attributes ==========================================
        var ua = navigator.userAgent;
        ua = ua.toString();
        $('body').attr('id', ua);

        // Disabled Button Clicks ==============================================
        $('.disabled').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

        // Section Handlers ====================================================
        $('.hero-section button').on('click',function(e){
            if($(this).parent().hasClass('design')) {

                // Loader
                $('.loader').addClass('design');

                // Panes
                $('.pane.white').addClass('active');
                $('.pane.black').addClass('inactive');

                // Hero Section
                $('.hero-section.design').addClass('active');
                $('.hero-section.gaming').addClass('inactive');

                // Icon Wrapper
                $('.icon-wrapper').addClass('design');

                // Desktop Navigation
                $('.desktop-navigation').addClass('active').addClass('design');

                // Listing
                $('.listing-section.design').addClass('active');

            }
            if($(this).parent().hasClass('gaming')) {

                // Loader
                $('.loader').addClass('gaming');

                // Panes
                $('.pane.black').addClass('active');
                $('.pane.white').addClass('inactive');

                // Hero Section
                $('.hero-section.design').addClass('inactive');
                $('.hero-section.gaming').addClass('active');

                // Icon Wrapper
                $('.icon-wrapper').addClass('gaming');

                // Desktop Navigation
                $('.desktop-navigation').addClass('active').addClass('gaming');

                // Listing
                $('.listing-section.gaming').addClass('active');

            }
            e.preventDefault();
        });

        $('.return-home').on('click',function(e){

            window.location.hash = "";

            // Loader
            $('.loader').removeClass('design').removeClass('gaming');

            // Panes
            $('.pane.white').removeClass('active').removeClass('inactive');
            $('.pane.black').removeClass('active').removeClass('inactive');

            // Hero Section
            $('.hero-section.design').removeClass('active').removeClass('inactive');
            $('.hero-section.gaming').removeClass('active').removeClass('inactive');

            // Icon Wrapper
            $('.icon-wrapper').removeClass('design').removeClass('gaming');

            // Desktop Navigation
            $('.desktop-navigation').removeClass('active').removeClass('design').removeClass('gaming').removeClass('article');

            // Listing
            $('.listing-section.design').removeClass('active').removeClass('return');
            $('.listing-section.gaming').removeClass('active').removeClass('return');

            // Article
            $('.article-section').removeClass('active').removeClass('design').removeClass('gaming');
            $('.post-sharing').removeClass('design').removeClass('gaming');

            $('.return-to-list').removeClass('designer').removeClass('gamer');

            e.preventDefault();
        });

        // List Filters ========================================================
        $('#designFilter').keyup(function(e) {

            var input = this.value.toLowerCase()

            $('.listing-section.design .article-list dd h3').each(function () {
                var text  = $(this).text().toLowerCase();

                if(text.indexOf(input) >= 0) {
                    $(this).parents('.article-list dd').hide();
                    $(this).parents('dd').show();
                }
                else {
                    $(this).parents('.article-list dd').hide();
                }

            });

            e.preventDefault();

        });

        $('#gamingFilter').keyup(function(e) {

            var input = this.value.toLowerCase()

            $('.listing-section.gaming .article-list dd h3').each(function () {
                var text  = $(this).text().toLowerCase();

                if(text.indexOf(input) >= 0) {
                    $(this).parents('.article-list dd').hide();
                    $(this).parents('dd').show();
                }
                else {
                    $(this).parents('.article-list dd').hide();
                }

            });

            e.preventDefault();

        });

        // Designer AJAX Post Handler ==========================================
        $('.get-post.designer').on('click',function(e){

            e.preventDefault();

            // Layout Handlers

                // Listing
                $('.listing-section.design').removeClass('active').removeClass('return');

                // Desktop Navigation
                $('.desktop-navigation').addClass('article');

                // Article
                $('.article-section').addClass('active').addClass('design');
                $('.article-section .article').empty();
                $('.return-to-list').addClass('designer');

            var post_id = $(this).attr('data-postid');
            var ajaxurl = site.ajax_url;

            // Return Post Contents
            $.post(
                ajaxurl,
                {
                    'action' : 'load_post_data',
                    'post_id' : post_id
                },
                function(response){

                    window.location.hash = ("designer-post-" + response.post_slug);

                    $('.article-section').find('.article').append("<h1 class='post-title'>"+response.post_title+'</h1>');
                    $('.article-section').find('.article').append("<span class='post-date'>Published on "+response.post_date+'</span>');
                    $('.article-section').find('.article').append("<a href='https://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension' class='post-length'>"+response.post_length+' minute read</a>');
                    $('.article-section').find('.article').append(response.post_content);

                    // Social Links
                    $('#twitterLink').attr('href', "https://twitter.com/intent/tweet?text="+response.post_title_encoded+"&amp;via=joshdrink&amp;url="+response.post_link+"").attr('data-counturl', ""+response.post_link+"");
                    $('#linkedinLink').attr('href', "https://www.linkedin.com/shareArticle?mini=true&title="+response.post_title_encoded+"&url="+response.post_link+"");
                    $('#facebookLink').attr('href', "http://www.facebook.com/sharer.php?u="+response.post_link+"");

                },
                "json"
            );

        });

        // Designer Return to List Handler =====================================
        $('.article-section .content-wrapper .wrapper').on('click', '.return-to-list.designer',function(e){

            window.location.hash = "";

            // Listing
            $('.listing-section.design').addClass('return');

            // Article
            $('.article-section').removeClass('active').removeClass('design');

            $('.return-to-list').removeClass('designer');

            e.preventDefault();

        });

        // Desktop Designer Return to List Handler =============================
        $('.desktop-navigation .navigation-wrapper').on('click', '.return-to-list.designer',function(e){

            window.location.hash = "";

            // Listing
            $('.listing-section.design').addClass('return');

            // Desktop Navigation
            $('.desktop-navigation').removeClass('article');

            // Article
            $('.article-section').removeClass('active').removeClass('design');

            $('.return-to-list').removeClass('designer');

            e.preventDefault();

        });

        // Gamer AJAX Post Handler ==========================================
        $('.get-post.gamer').on('click',function(e){

            e.preventDefault();

            // Layout Handlers

                // Listing
                $('.listing-section.gaming').removeClass('active').removeClass('return');

                // Desktop Navigation
                $('.desktop-navigation').addClass('article');

                // Article
                $('.article-section').addClass('active').addClass('gaming');
                $('.post-sharing').addClass('gaming');
                $('.article-section .article').empty();
                $('.return-to-list').addClass('gamer');

            var post_id = $(this).attr('data-postid');
            var ajaxurl = site.ajax_url;

            // Return Post Contents
            $.post(
                ajaxurl,
                {
                    'action' : 'load_post_data',
                    'post_id' : post_id
                },
                function(response){

                    window.location.hash = ("gamer-post-" + response.post_slug);

                    $('.article-section').find('.article').append("<h1 class='post-title'>"+response.post_title+'</h1>');
                    $('.article-section').find('.article').append("<span class='post-date'>Published on "+response.post_date+'</span>');
                    $('.article-section').find('.article').append("<a href='https://en.wikipedia.org/wiki/Words_per_minute#Reading_and_comprehension' class='post-length'>"+response.post_length+' minute read</a>');
                    $('.article-section').find('.article').append(response.post_content);

                    // Social Links
                    $('#twitterLink').attr('href', "https://twitter.com/intent/tweet?text="+response.post_title_encoded+"&amp;via=joshdrink&amp;url="+response.post_link+"").attr('data-counturl', ""+response.post_link+"");
                    $('#linkedinLink').attr('href', "https://www.linkedin.com/shareArticle?mini=true&title="+response.post_title_encoded+"&url="+response.post_link+"");
                    $('#facebookLink').attr('href', "http://www.facebook.com/sharer.php?u="+response.post_link+"");

                },
                "json"
            );

        });

        // Gamer Return to List Handler =====================================
        $('.article-section .content-wrapper .wrapper').on('click', '.return-to-list.gamer',function(e){

            window.location.hash = "";

            // Listing
            $('.listing-section.gaming').addClass('return');

            // Article
            $('.article-section').removeClass('active').removeClass('gaming');
            $('.post-sharing').removeClass('gaming');

            $('.return-to-list').removeClass('gamer');

            e.preventDefault();

        });

        // Desktop Gamer Return to List Handler ================================
        $('.desktop-navigation .navigation-wrapper').on('click', '.return-to-list.gamer',function(e){

            window.location.hash = "";

            // Listing
            $('.listing-section.gaming').addClass('return');

            // Desktop Navigation
            $('.desktop-navigation').removeClass('article');

            // Article
            $('.article-section').removeClass('active').removeClass('gaming');
            $('.post-sharing').removeClass('gaming');

            $('.return-to-list').removeClass('gamer');

            e.preventDefault();

        });

    });

})(jQuery);
