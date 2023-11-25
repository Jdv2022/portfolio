/* 
|   This is for the nav bar colors
*/
$(window).scroll(function(){
    const navTop = $('nav').offset().top
    const hasClass = $('nav').hasClass('nav-design')
    if(navTop === 0){
        $('nav').removeClass('nav-design')
        $('nav').addClass('nav-design-reverse')
        $('.nav-r-text').css('color', 'white')
        $('.smooch-texts').css('color', 'white');
    }
    else if(!hasClass){
        $('nav').addClass('nav-design')
        $('nav').removeClass('nav-design-reverse')
        $('.nav-r-text').css('color', 'black')
        $('.smooch-texts').css('color', 'black');
    }   
});

/* 
|   Ajax                    
*/
const accessToken = 'hardCodedHehe';
if($('html').is(':visible')){
    $.ajax({
        url: 'https://api-visit.jdv2022-projects.tech',
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + accessToken,
                'Content-Type': 'application/json'
            },
            success: function(response) {
                // Handle successful response
                console.log(response);
            },
    })
}
