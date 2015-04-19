(function () {
    var $b = $b || $('body'),
        $dropdowns = $('.formui-dropdown');

    // Radio
    $b.on('change', '.formui-radio input[type="radio"]', function () {
        var $radio = $(this);
        $radio.parent('.option').addClass('checked').siblings('.option').removeClass('checked');
    });

    // Checkbox
    $b.on('change', '.formui-checkbox input[type="checkbox"]', function () {
        var $radio = $(this);
        $radio.parent('.option').toggleClass('checked');
    });

})();