'use strict';

var onRun = function(context) {
    
    var value = context.clickedRowValue();
    if (value == null) {
        context.alert('Error', 'Data is null');
        return;
    }

    if (!value.match(/^\d{10}$/)) {
        context.alert('Error', 'Data type is incorrect format');
        return;
    }

    var a = new Date(value * 1000);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();

    var time = month + ' ' + date + ', ' + year + ' ' + hour + ':' + min + ':' + sec;

    SystemService.notify('Date', time);

    SystemService.insertToClipboard(time);

    context.update();
};

global.onRun = onRun;