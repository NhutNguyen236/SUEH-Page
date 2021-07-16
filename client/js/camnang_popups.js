// Modal popup for 6 nguyên tắc văn hóa
$(function () {
    $(document).on("click", "#six-rules", function(){
        openSixRules();
    })
  
});

$(function () {
    $(document).on("click", "#seven-rules", function(){
        openSevenRules();
    })
});

var inceptionLevel = 1;
var offsetLevel = 0;

function openSixRules() {
    new jBox('Modal', {
        width: 800,
        addClass: 'inception-modal',
        overlayClass: 'inception-overlay',
        zIndex: 'auto',
        draggable: 'title',
        closeOnClick: false,
        closeButton: 'title',
        title: '<h3><strong>Nội dung 6 nguyên tắc văn hóa</strong></h3>',
        offset: {
        x: offsetLevel * 15,
        y: offsetLevel * 15
        },
        content: (
        '<p>Để gắn kết toàn bộ các nhân sự trong tổ chức, SUEH đã xây dựng và phát triển cẩm nang hoạt động SUEH có sự tham khảo từ văn hóa Vinamilk, nêu ra 6 nguyên tắc bắt buộc tổ chức phải đi theo</p>' +
        `
        <ul style="clear:left;">
            <li><strong>Trách nhiệm</strong>: Khi được giao nhiệm vụ phải hoàn thành một cách đầy đủ, đúng hạn, và phải chịu trách nhiệm về những việc mình làm</li>
            <li><strong>Hướng kết quả</strong>: Đó là đích đến để bắt đầu thực hiện mọi hành động</li>
            <li><strong>Sáng tạo và chủ động</strong>: Đề cao cái mới, tìm kiếm nhiều giải pháp.</li>
            <li><strong>Hợp tác</strong>: Chắc chắn sẽ đạt được kết quả tốt khi sử dụng nhiều hơn một bộ não</li>
            <li><strong>Chính trực</strong>: Trung thực, thật thà</li>
            <li><strong>Xuất sắc</strong>: Có kỹ năng tốt, và luôn cải thiện năng lực</li>
        </ul>
        ` 
        +
        '<p><button class="inception-modal-button btn btn-primary" data-inception-tooltip="Nhấn để xen 7 hành vi lãnh đạo">Xem 7 hành vi lãnh đạo</button></p>'
        ),
        
        onCreated: function () {
        // Add tooltip
        this.tooltip = new jBox('Tooltip', {
            theme: 'TooltipBorder',
            attach: '[data-inception-tooltip]',
            getContent: 'data-inception-tooltip',
            zIndex: 'auto',
            delayOpen: 600
        });

        // Add button event
        this.content.find('.inception-modal-button').on('click', function () {
            openSevenRules();
        });
        },
        // Remove modal from DOM when it's closed
        onCloseComplete: function () {
        this.destroy();
        this.tooltip && this.tooltip.destroy();
        }
    }).open();
}

function openSevenRules() {
    new jBox('Modal', {
        width: 800,
        addClass: 'inception-modal',
        overlayClass: 'inception-overlay',
        zIndex: 'auto',
        draggable: 'title',
        closeOnClick: true,
        closeButton: 'title',
        title: '<h3><strong>Nội dung 7 hành vi lãnh đạo</strong></h3>',
        offset: {
        x: offsetLevel * 15,
        y: offsetLevel * 15
        },
        content: (
        '<p>Để tổ chức phát triển mạnh mẽ và có chỗ đứng, tất cả ban lãnh đạo và thành viên tổ chức đều nắm vững 4 hành vi lãnh đạo như sau:</p>' +
        `
        <ul>
            <li>Cấp lãnh đạo cần quan tâm, động viên thành viên, quan sát năng lực và có kế hoạch đào tạo cho toàn bộ thành viên</li>
            <li>Tạo điều kiện môi trường làm việc tốt và kết nối tất cả thành viên lại với nhau.</li>
            <li>Cần biết đưa ra các ý tưởng, kích thích sức sáng tạo của thành viên</li>
            <li>Là người cầm lái, là huynh trưởng nhưng cũng là người phục vụ.</li>
        </ul>
        <p>Tuy nhiên, ai cũng có thể biểu lộ khả năng lãnh đạo, chính vì thế</p>
        <ul>
            <li>Mọi người cần có thái độ của nhà lãnh đạo-bất kể vai trò của mình là gì</li>
            <li>Cần nhận lãnh trách nhiệm về mình để đạt kết quả cao nhất</li>
            <li>Làm việc cần có kế hoạch, báo cáo</li>
            <li>Mọi người cần tích cực và khơi nguồn cảm hứng</li>
            <li>Cần biết nỗ lực hơn một chút nữa khi làm việc, xem sự thay đổi là cơ hội khiến sự việc tốt đẹp hơn</li>
        </ul>
        ` 
        +
        '<p><button class="inception-modal-button btn btn-primary" data-inception-tooltip="Nhấn để xem 6 nguyên tắc văn hóa">Xem 6 nguyên tắc văn hóa</button></p>'
        ),
        
        onCreated: function () {
        // Add tooltip
        this.tooltip = new jBox('Tooltip', {
            theme: 'TooltipBorder',
            attach: '[data-inception-tooltip]',
            getContent: 'data-inception-tooltip',
            zIndex: 'auto',
            delayOpen: 600
        });

        // Add button event
        this.content.find('.inception-modal-button').on('click', function () {
            openSixRules();
        });
        },
        // Remove modal from DOM when it's closed
        onCloseComplete: function () {
        this.destroy();
        this.tooltip && this.tooltip.destroy();
        }
    }).open();
} 