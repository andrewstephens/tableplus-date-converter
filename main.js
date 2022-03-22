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

    let dateTimeString = new Date(value * 1000).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'utc',
        hour: 'numeric', 
        minute: 'numeric',
        second: 'numeric'
    });

    SystemService.notify('Date', dateTimeString);

    SystemService.insertToClipboard(dateTimeString);

    context.update();
};

global.onRun = onRun;