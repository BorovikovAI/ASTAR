    ///The control panel.

var Panel = {
    init: function() {
        var $algo = $('#algorithm_panel');

        $('.panel').draggable();
        $('.accordion').accordion({
            collapsible: false,
        });
        $('.option_label').click(function() {
            $(this).prev().click();
        });
        $('#hide_instructions').click(function() {
            $('#instructions_panel').slideUp();
        });
        $('#play_panel').css({
            top: $algo.offset().top + $algo.outerHeight() + 20
        });
        $('#button2').attr('disabled', 'disabled');
    },
    
    getFinder: function() {
        var finder, biDirectional;
        
        biDirectional = typeof $('#breadthfirst_section ' + '.bi-directional:checked').val() !== 'undefined';
            if (biDirectional) {
                finder = new PF.BiBreadthFirstFinder({});
            } else {
                finder = new PF.BreadthFirstFinder({});
            }

        return finder;
    }
};
