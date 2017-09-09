jQuery(document).ready(function($) {


    /*======= Skillset *=======*/
    
    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
    
    /* Bootstrap Tooltip for Skillset */
    $('.level-label').tooltip();
    
    
    /* jQuery RSS - https://github.com/sdepold/jquery-rss */
    
    $("#rss-feeds").rss(
    
        //Change this to your own rss feeds
        "http://feeds.feedburner.com/TechCrunch/startups",
        
        {
        // how many entries do you want?
        // default: 4
        // valid values: any integer
        limit: 3,
        
        // the effect, which is used to let the entries appear
        // default: 'show'
        // valid values: 'show', 'slide', 'slideFast', 'slideSynced', 'slideFastSynced'
        effect: 'slideFastSynced',
        
        // outer template for the html transformation
        // default: "<ul>{entries}</ul>"
        // valid values: any string
        layoutTemplate: "<div class='item'>{entries}</div>",
        
        // inner template for each entry
        // default: '<li><a href="{url}">[{author}@{date}] {title}</a><br/>{shortBodyPlain}</li>'
        // valid values: any string
        entryTemplate: '<h3 class="title"><a href="{url}" target="_blank">{title}</a></h3><div><p>{shortBodyPlain}</p><a class="more-link" href="{url}" target="_blank"><i class="fa fa-external-link"></i>Read more</a></div>'
        
        }
    );
    
    /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
    GitHubCalendar("#github-graph", "ryanpadilha");
    
    
    /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
    GitHubActivity.feed({ username: "ryanpadilha", selector: "#ghfeed" });

    // Contact form
    var form = $('#main-contact-form');
    form.submit(function(event){
        event.preventDefault(); // prevent default submit behaviour
        var form_status = $('<div class="form_status"></div>');

        var name = $("input#name-contact").val();
        var phone = $("input#phone-contact").val();
        var email = $("input#email-contact").val();
        // var subject = $("input#subject").val();
        var message = $("textarea#message-contact").val();
        var newsletter = $("input#newsletter-contact").val();

        $.ajax({
            url: "sendemail.php",
            type: "POST",
            data: {
                name : name,
                phone : phone,
                email : email,
                // subject : subject,
                message : message,
                newsletter : newsletter
            },

            cache: false,
            beforeSend: function(){
                form.prepend( form_status.html('<p><i class="fa fa-spinner fa-spin"></i> Enviando Email...</p>').fadeIn() );
            }
        }).done(function(data){
            form_status.html('<p class="text-success">Obrigado por entrar em contato.<br>Assim que possível entrarei em contato com você.</p>').delay(3000).fadeOut();
        });
    });

    // newsletter form
    var form_newsletter = $('#main-newsletter-form');
    form_newsletter.submit(function(event){
        event.preventDefault(); // prevent default submit behaviour
        var form_status = $('<div class="form_status"></div>');

        var email = $("input#email-newsletter").val();
        
        $.ajax({
            url: "sendnewsletter.php",
            type: "POST",
            data: {
                email : email
            },

            cache: false,
            beforeSend: function(){
                form_newsletter.prepend( form_status.html('<div class="alert alert-clear" role="alert"><i class="fa fa-spinner fa-spin"></i> Enviando Email...</div>').fadeIn() );
            }
        }).done(function(data){
            form_status.html('<div class="alert alert-success alert-success-rw" role="alert"><b>Obrigado por inscrever-se no newsletter.</b></div>').delay(3000).fadeOut();
        });
    });

});