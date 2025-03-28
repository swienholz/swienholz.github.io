$(document).ready(function() {
    $('.sensor-type').click(function() {
        $('.sensor-type, .sensor-item').removeClass('highlight-type highlight-sensor');
        $(this).addClass('highlight-type');
        $(this).find('.sensor-item').addClass('highlight-type');
    });
    
    $('.sensor-item').click(function(event) {
        event.stopPropagation();
        $('.sensor-type, .sensor-item').removeClass('highlight-type highlight-sensor');
        $(this).addClass('highlight-sensor');
        $('#sensor-info').text('Details about sensor ' + $(this).data('id'));
    });
});