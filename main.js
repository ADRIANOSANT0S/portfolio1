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

    // Auto-scroll every 5 seconds
    setInterval(scrollItems, 10000);
});


// const form = document.getElementById('form-contact');
// console.log(form);

// function validateName (fullName) {
//     const lengthName =  fullName.split(' ');
//     return lengthName.length >= 2;
// }

// form.addEventListener('submit', function(e) {
//     let validateForm = false
//     e.preventDefault();

//     const name = document.getElementById('full-name');
//     const messageSuccess = `Obrigado por entrar em contato ${name.value.split(' ')[0]}, em breve retornaremo o contato`

//     validateForm = validateName(name.value)
//     if (validateForm) {
//         console.log(messageSuccess)
//     } else {
//         alert('name is validate')
//     }
// })