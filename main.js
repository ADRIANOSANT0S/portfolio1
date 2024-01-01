 // Slide  tecnologia 
$(document).ready(function(){
    let container = $('.logo-techs');
    let totalWidth = 0;
    
    // Calculate the total width of all items
    container.children().each(function() {
        totalWidth += $(this).outerWidth(true);
    });

    // Clone the items to ensure continuous scrolling
    container.append(container.html());
    function scrollItems() {
        container.animate({marginLeft: '-=' + totalWidth}, 10000, 'linear', function() {
            // Reset the margin when all items are scrolled
            container.css('margin-left', 0);
        });
    }

    scrollItems();

    // Auto-scroll every 10 seconds
    setInterval(scrollItems, 10000);

    // Sidebar Menu

    $('.sidebar-btn').click(function() {
        $('nav').toggleClass('active')
        $('.sidebar-btn').toggleClass('toggle')
    })

    $('.menu li').click(() => {
        $('nav').removeClass('active')
        $('.sidebar-btn').removeClass('toggle')
    })
});