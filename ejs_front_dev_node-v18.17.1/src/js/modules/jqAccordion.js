export function jqAccordion() {

    jQuery(function () {
        $('.ac_panel .ac_heading').on('click', function () {
            $(this).next('.ac_content').slideToggle();
            $(this).toggleClass('is-active');
        });
    });

}
