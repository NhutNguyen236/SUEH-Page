    //============= This js file is to verify register form ===================//
var colors = ['red', 'green', 'blue', 'yellow'];
var index = 0;

var getColor = function () {
    if (index >= colors.length) {
      index = 0;
    }
    return colors[index++];
};

jQuery('#register-button').on('click', function(event) {
    event.preventDefault()
    
    new jBox('Notice', {
        animation: 'flip',
        theme: 'NoticeFancy',
        color: 'red',
        content: 'Oooopsie... M chưa nhập tên kìa dawg',
        audio: '../assets/insight',
        volume: 80,
        delayOnHover: true,
        showCountdown: true
    });
});