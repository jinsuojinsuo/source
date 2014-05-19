//日期控件调用
var initDatepicker = function() {
    $.datepicker.regional['zh-CN'] = {
        closeText: '关闭',
        prevText: '&#x3c;上月',
        nextText: '下月&#x3e;',
        currentText: '今天',
        monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
        dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
        weekHeader: '周',
        dateFormat: 'yy-mm-dd',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: true,
        yearSuffix: '年'
    };
    $.datepicker.setDefaults($.datepicker.regional['zh-CN']);
    $('input.date').datepicker({
        yearRange: "-20:+0",
        changeYear: true
    });
}
$(document).ready(function() {
    initDatepicker();
	$('#F-time,#M-time').datepicker({
        yearRange: "-20:+0",
        changeYear: true
    });
	var dates = $("#hotel-check-in, #hotel-check-out").datepicker({
			changeYear: true,
			minDate: new Date(),
			onSelect: function(selectedDate, inst) {
				var option = this.id == "hotel-check-in" ? "minDate": "maxDate",
				instance = $(this).data("datepicker"),
				date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
				dates.not(this).datepicker("option", option, date);
				if (this.id == "hotel-check-in") {
					var obj_to = new Date(parseInt(inst.selectedYear), parseInt(inst.selectedMonth), parseInt(inst.selectedDay) + 1);
					$("#hotel-check-out").datepicker('setDate', obj_to);
				}
			}
		});
		$("#hotel-check-in").datepicker('setDate', '+2d');
		$("#hotel-check-out").datepicker('setDate', '+4d');
		var dates = $("#soFa-check-in, #soFa-check-out").datepicker({
			changeYear: true,
			minDate: new Date(),
			onSelect: function(selectedDate, inst) {
				var option = this.id == "soFa-check-in" ? "minDate": "maxDate",
				instance = $(this).data("datepicker"),
				date = $.datepicker.parseDate(instance.settings.dateFormat || $.datepicker._defaults.dateFormat, selectedDate, instance.settings);
				dates.not(this).datepicker("option", option, date);
				if (this.id == "soFa-check-in") {
					var obj_to = new Date(parseInt(inst.selectedYear), parseInt(inst.selectedMonth), parseInt(inst.selectedDay) + 1);
					$("#soFa-check-out").datepicker('setDate', obj_to);
				}
			}
		});
		$("#soFa-check-in").datepicker('setDate', '+2d');
		$("#soFa-check-out").datepicker('setDate', '+4d');
	
});

       