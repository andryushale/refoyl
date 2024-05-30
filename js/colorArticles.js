$(document).ready(function(){
    let i = 0;
    const colorsArrayA = ['#523B3B', '#FEDFD3', '#FEDFD3', '#523B3B']; //mainTone, lightTone, textTone, darkTextTone;
    const colorsArrayB = ['#3B4052', '#F7F9FF', '#FEDFD3', '#3B4052'];
    const colorsArrayC = ['#DFB626', '#FFFEF7', '#523B3B', '#523B3B'];

    $('#body_container article').each(function(){
        let thisColors = [];

        if (i%3 == 0)
        {
            thisColors = colorsArrayA;
        }
        else if (i%3 == 1)
        {
            thisColors = colorsArrayB;
        }
        else if (i%3 == 2)
        {
            thisColors = colorsArrayC;
        }

        $(this).css('background-color', thisColors[1]);
        $(this).find('.resource').find('h4, h3, p').css('color', thisColors[3]);
        $(this).find('.img-stack').css('background-color', thisColors[0]);
        $(this).find('.img-stack').css('border-color', thisColors[0]);
        $(this).find('.heading').css(
            {
                'background-color': thisColors[0],
                'color': thisColors[2]
            }
        );

        // if mobile
        console.log(screen.width);
        if (screen.width < 800 && !$(this).hasClass('textlist'))
            {
                $(this).find('.resource').css('border-color', thisColors[0]);
            }
        i++;
    });
});