// *colorpicker*/
$('#picker-color').colpick({
  layout:'hex',
  submit:1,
  color:'#f6f6f6',
  onSubmit:function(hsb,hex,rgb,el) {
    $(el).colpickHide();
  },
 onChange:function(hsb,hex,rgb,el,bySetColor) {
   $("#output2").css("color",'#'+hex);

    $(el).css('border-right-color','#'+hex);
    if(!bySetColor) $(el).val('#' +hex);
  }
}).keyup(function(){
  $(this).colpickSetColor(this.value);
});

/*翻訳*/
// WORK IN PROGRESS BELOW

$('document').ready(function () {


        // RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function () {

        // Change font family and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#544F4B',
                'font-family': 'Roboto',
                                'width':'70%'
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');

                // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');

        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '10px');

        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '70%');
        $("iframe").contents().find('td').css('width', '70%');

        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
        }, function () {
            $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');



        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '100%',
            'width': '70%',
            'top': '0px'
        });
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '70%'
        });
    });
});

/*font variable*/
$(function() {
    $(document).on('input', '#name', function(e) {
        $('#output1').text($('#name').val());
    });
});
$("#setFontSize").on("input",function () {
          $('#output1').css("font-size", $(this).val() + "px");
  });
$("#setFontWeight").on("input",function () {
          $('#output1').css("font-weight", $(this).val() + "");
  });

$("#setLetterSpacing").on("input",function () {
          $('#output1').css("letter-spacing", $(this).val() + "px");
  });

$(function() {
    $(document).on('input', '#name', function(e) {
        $('#output2').text($('#name').val());
    });
});
$("#setFontSize").on("input",function () {
          $('#output2').css("font-size", $(this).val() + "px");
  });
$("#setFontWeight").on("input",function () {
          $('#output2').css("font-weight", $(this).val() + "");
  });

$("#setLetterSpacing").on("input",function () {
          $('#output2').css("letter-spacing", $(this).val() + "px");
  });
