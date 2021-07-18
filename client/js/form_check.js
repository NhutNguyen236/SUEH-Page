//============= This js file is to verify register form ===================//

// Function for creating error message
// Input: content - content of message
// Output: error message
function create_error(content){
    new jBox('Notice', {
        animation: 'flip',
        theme: 'TooltipDark',
        color: 'red',
        content: content,
        audio: '../assets/insight',
        volume: 80,
        delayOnHover: true,
        showCountdown: true,
        animation: {
            open: 'tada',
            close: 'zoomIn'
        },
        position: {
            x: 'left',
            y: 'top'
        },
    });
}

// Tooltip for each input
// Tooltip for fullname
new jBox('Mouse', {
    attach: '#fullname',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: 'Hãy nhập đầy đủ họ tên nhé và nhớ là đừng sử dụng nickname hay các kí tự đặc biệt khác'
});

// Tooltip for gender
new jBox('Mouse', {
    attach: '#gender',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: '😉 Hãy chọn giới tính của bạn nhé',
});

// Tooltip for college
new jBox('Mouse', {
    attach: '#college',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: '😉 Hãy nhập tên trường của bạn vào đây nhé',
});

// Tooltip for major
new jBox('Mouse', {
    attach: '#major',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: '😉 Hãy nói cho chúng mình biết bạn đang theo học ngành nào',
});

// Tooltip for year
new jBox('Mouse', {
    attach: '#year',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: '😉 Hãy chọn năm bạn đang theo học tại trường của bạn nhé',
});

// Tooltip for phone
new jBox('Mouse', {
    attach: '#phone',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: '😉 Hãy để lại 1 số điện thoại mà bạn hay sử dụng nhất để chúng mình tiện liên lạc với bạn khi cần nhé',
});

// Tooltip for email
new jBox('Mouse', {
    attach: '#email',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: '😉 Hãy để lại địa chỉ email của bạn nhé, chúng mình sẽ email khi không liên lạc với bạn qua điện thoại được'
});

// Tooltip for message 
new jBox('Mouse', {
    attach: '#message',
    position: {
      x: 'right',
      y: 'bottom'
    },
    content: `<p>😉 Hãy nói cho chúng mình biết về ước nguyện của bạn khi tham gia nhé, <br> điều này sẽ giúp chúng mình hiểu thêm về bạn đó'</p>`
});

// Validate form
jQuery('#register-button').on('click', function(event) {
    event.preventDefault()
    // Get all value 
    var fullname = $('#fullname').val()
    var college = $('#college').val()
    var major = $('#major').val()
    var phone = $('#phone').val()
    var email = $('#email').val()
    var message = $('#message').val()

    // Validate fullname
    if(fullname.length <= 0 || fullname == null){
        create_error(`<p>⚠️ Vui lòng nhập đầy đủ <span style="color: yellow;"><strong>HỌ TÊN</strong></span></p>`)
        $('#fullname').focus()
    }

    // Validate college
    else if(college.length <= 0 || college == null){
        create_error(`<p>⚠️ Vui lòng nhập thông tin <span style="color: yellow;"><strong>TRƯỜNG</strong></span></p>`)
        $('#college').focus()
    }
    
    // Validate major
    else if(major.length <= 0 || major == null){
        create_error(`<p>⚠️ Vui lòng nhập thông tin <span style="color: yellow;"><strong>NGÀNH HỌC</strong></span></p>`)
        $('#major').focus()
    }
    
    // Validate phone number
    else if(phone.length <= 0 || phone == null){
        create_error(`<p>⚠️ Vui lòng nhập <span style="color: yellow;"><strong>SỐ ĐIỆN THOẠI</strong></span></p>`)
        $('#phone').focus()
    }
    else if(!phone.match(/^\d{10}$/)){
        create_error(`<p>⚠️ Vui lòng nhập <span style="color: yellow;"><strong>SỐ ĐIỆN THOẠI HỢP LỆ</strong></span></p>`)
        $('#phone').focus()
    }

    // Validate email
    else if(email.length <= 0 || email == null){
        create_error(`<p>⚠️ Vui lòng nhập <span style="color: yellow;"><strong>EMAIL</strong></span></p>`)
        $('#email').focus()
    }
    else if(!email.match(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)){
        create_error(`<p>⚠️ Vui lòng nhập <span style="color: yellow;"><strong>EMAIL HỢP LỆ</strong></span></p>`)
        $('#email').focus()
    }

    // Validate message
    else if(message.length <= 0 || message == null){
        create_error(`<p>⚠️ Vui lòng nhập <span style="color: yellow;"><strong>LỜI NHẮN</strong></span></p>`)
        $('#message').focus()
    }
    

});

