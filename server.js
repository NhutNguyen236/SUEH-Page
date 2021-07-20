//=============== MODULES IMPORT ==================
var express = require('express')
var bodyParser = require('body-parser')
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
var dotenv = require('dotenv')
var path = require('path')
var https = require('https')
var fs = require('fs')
var sslRedirect = require('heroku-ssl-redirect');

//=============== APP CONFIG ======================
var app = express()
app.use(sslRedirect());
app.use(bodyParser.urlencoded({ extended: true }))
dotenv.config({ path: __dirname + '/config/.env' });

//=============== VIEW CONFIG ======================
app.use(express.static(path.resolve(__dirname, './client')));
app.set('view engine','ejs')

//============== MIDDLEWARES CONFIG ================
// Index route
app.get('/', (req, res) => {
    res.redirect('/index')
})

app.get('/index', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})

// Register route
app.get('/register', (req, res) => {
    res.sendFile(__dirname + '/client/contact.html')
})

// Huỳnh Anh mentor page route
app.get('/phan_huynh_anh', (req, res) => {
    // res.sendFile(__dirname + '/client/contact.html')
    res.render('teacher-single', {
        mentor_img: './images/mentor_1.jpg', mentor_name: 'Phan Huỳnh Anh', mentor_position: 'Tiến sĩ - Viện trưởng',
        mentor_desc: `
        <ul>
            <li>Chuyên gia xây dựng nhân sự kế thừa (Mentoring).</li>
            <li>Nghiên cứu, khai thác và phát triển dự án.</li>
            <li>Tư vấn giải pháp và triển khai Marketing Insight cho doanh nghiệp</li>
            <li>Đào tạo, tư vấn và hướng nghiệp cho sinh viên, thanh niên.</li>
            <li>Chuyên gia, giảng viên đào tạo đội nhóm và truyền thông nội bộ</li>
        </ul>
        `,
        mentor_timeline:`
        <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=15F4RHRPBZQila-XmEEHNNZgOVb27rBw-ykzVvtYaC2s&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0' loading="lazy"></iframe>
        `
    })
})

// Thìn Thọ  mentor page route
app.get('/van_thin_tho', (req, res) => {
    // res.sendFile(__dirname + '/client/contact.html')
    res.render('teacher-single', {
        mentor_img: './images/mentor_2.jpg', mentor_name: 'Phan Văn Thìn Thọ', mentor_position: 'Thạc sĩ',
        mentor_desc: `
        <ul>
            <li>Chuyên gia xây dựng nhân sự kế thừa (Mentoring).
            <li>Nghiên cứu, khai thác và phát triển dự án.</li>
            <li>Tư vấn giải pháp và triển khai Marketing Insight cho doanh nghiệp</li>
            <li>Đào tạo, tư vấn và hướng nghiệp cho sinh viên, thanh niên.</li>
            <li>Chuyên gia, giảng viên đào tạo đội nhóm và truyền thông nội bộ</li>
        </ul>
        `
    })
})

// Huỳnh Anh mentor page route
app.get('/nguyen_chi_thanh', (req, res) => {
    // res.sendFile(__dirname + '/client/contact.html')
    res.render('teacher-single', {
        mentor_img: './images/mentor_3.jpg', mentor_name: 'Nguyễn Chí Thành', mentor_position: 'Tiến sĩ',
        mentor_desc: `
        <ul>
            <li>Là người sáng lập ra SMentor đồng thời cũng là một chuyên gia đào tạo và truyền cảm hứng cho các doanh nghiệp tại Việt Nam. Với khát vọng chung tay cùng với Quý thầy cô, Doanh nhân và Đội ngũ chuyên gia nhằm phát hiện, nuôi dưỡng các thế hệ thanh niên sao cho có đủ tài đủ đức phụng sự cho cộng đồng doanh nghiệp, góp phần cho sự phồn vinh của đất nước.</li>
            <li>Nhờ kinh nghiệm gần 20 năm trong nhiều lĩnh vực sản xuất kinh doanh tại các doanh nghiệp lớn nhỏ trong nước và nước ngoài, nhờ sự chỉ bảo của các tiền bối thành đạt cùng với các tổ chức nâng đỡ như Hội Đồng Khởi Nghiệp Quốc Gia (VCCI), Câu Lạc Bộ Sales & Marketing (CSMO), Hiệp Hội Các Nhà Bán Lẻ Việt Nam (AVR), Câu Lạc Bộ Du Lịch Vừa & Nhỏ (VT) đã giúp cho Anh hội đủ các điều kiện thuận lợi trong bước đường thực hiện khát vọng cháy bỏng của mình.</li>
            <li>Bên cạnh đó, Anh còn nhận được sự ủng hộ và quý mến của tập thể Cán bộ CNV của Tập đoàn VNPT trên khắp cả nước đã góp phần rất lớn cho việc triển khai ý chí Smentor trong thời gian tới. Anh quan niệm rằng cuộc sống cần học cách cho đi và cho thật nhiều để có được nhiều “duyên” vốn là thành tố quan trọng trong mọi hoạt động trong đời sống và công việc. Đến với Smentor là đến với môi</li>
        </ul>
        `
    })
})


// app.post('/sendMail', (req, res) => {
//     var messageBody = {
//         subject: req.body.subject,
//         name: req.body.name,
//         email: req.body.email,
//         number: req.body.number,
//         content: req.body.message
//     }

//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL,
//             pass: process.env.EMAIL_PASSWORD
//         }
//     });

//     // Send to client a waiting email
//     transporter.use('compile', hbs({
//         viewEngine: {
//             defaultLayout: false,
//             extName: 'express-handlebars'
//         },
//         viewPath: './'
//     }));

//     // Send placeholding email to client
//     let mailOptionsClient = {
//         from: process.env.EMAIL,
//         to: messageBody.email,
//         subject: '💓 Cảm ơn vì đã giữ liên lạc với chúng tôi 💓',
//         template: 'email',
//         context: {
//             name: messageBody.name
//         } // send extra values to template
//     };

//     transporter.sendMail(mailOptionsClient, (err, data) => {
//         var msg = undefined
//         if (err) {
//             console.log(err)
//             msg = 'We are facing some technical difficulties here, come back later 😥'
//             res.send(msg)
//         }
//         msg = 'OK'
//         res.send(msg)
//     });

//     // Send email to admin side
//     var mailOptions = {
//         from: process.env.EMAIL,
//         to: 'nhutnguyenf330@gmail.com',
//         subject: 'Customer feedback incoming',
//         template: 'email_admin',
//         context: {
//             subject: messageBody.subject,
//             name: messageBody.name,
//             email: messageBody.email,
//             content: messageBody.content,
//             number: messageBody.number
//         } // send extra values to template
//     };
    
//     transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error);
//             var message = 'We are facing some technical difficulties here, come back later 😥'
//             res.send(message)
//         } else {
//             var message = 'OK'
//             res.send(message)
//         }
//     });

// })

// Setup SSL cert
const options = {
    key: fs.readFileSync('./cert/key.pem'),
    cert: fs.readFileSync('./cert/cert.pem')
};

//================= SERVER LISTENER ================

// var server = app.listen(process.env.PORT || 8080, () => {
//     console.log('http://localhost:8080')
// })

const server = https.createServer(options, app) 

server.listen(process.env.PORT || 8080, () => {
    console.log('http://localhost:8080')
})