(function ($) {
    $.fn.toggleButton = function (options) {
        var o = this;
        var settings = $.extend({}, $.fn.toggleButton.defaults, options);
        cbx = o.find('input:checkbox');
        cbx.css('display', 'none');
        lbl = o.find('label');
        lbl.addClass(settings.btn_css);
        var i = $('<i/>');
        i.addClass('glyphicon glyphicon-unchecked');
        i.attr('style', 'margin-right:5px;');
        i.prependTo(lbl);

        cbx.change(function () {
            var c = $(this);
            if (c.is(":checked")) {
                c.next('label').addClass('active');
                c.next('label').find('i').attr('class', 'glyphicon glyphicon-check');
            } else {
                c.next('label').removeClass('active');
                c.next('label').find('i').attr('class', 'glyphicon glyphicon-unchecked');
            }
        });
        if (cbx.prop("disabled")) {
            lbl.attr("disabled", true);
        }
        cbx.trigger('change');
    }

    /* defaults */
    $.fn.toggleButton.defaults = {
        btn_css: 'btn btn-default'
    };
} (jQuery));
