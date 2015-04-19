(function () {
    var $b = $('body');

    // Radio
    $b.on('change', '.formui-radio input[type="radio"]', function () {
        var $opt = $(this);
        $opt.parent('.option').addClass('checked').siblings('.option').removeClass('checked');
    });

    // Checkbox
    $b.on('change', '.formui-checkbox input[type="checkbox"]', function () {
        var $opt = $(this);
        $opt.parent('.option').toggleClass('checked');
    });

})();