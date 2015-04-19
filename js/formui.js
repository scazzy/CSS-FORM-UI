(function () {
    var $b = $b || $('body'),
        $dropdowns = $('.formui-dropdown');

    // Dropdown

    $dropdowns.find('.text').html($dropdowns.find('select').val());
    $b.on('change', '.formui-dropdown select', function () {
        var $select = $(this);
        $select.siblings('.text').html($(this).val());
    });

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