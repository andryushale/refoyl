$(document).ready(function(){
    if (screen.width > 800)
        {

            $('.resource').each(function(){
                this.addEventListener("mouseover", ( event ) => {
                    var compColor = $(this).closest('article').css('background-color'),
                        setColor = '';
        
                    if (compColor == 'rgb(247, 249, 255)') //blue
                        {
                            setColor = 'rgb(59, 64, 82)';
                        }
                    else if (compColor == 'rgb(254, 223, 211)') //red
                        {
                            setColor = 'rgb(82, 59, 59)';
                        }
                    else if (compColor == 'rgb(255, 254, 247)') //yellow
                        {
                            setColor = 'rgb(223, 182, 38)';
                        }
        
                        $(this).css('border-color', setColor);
                        $(this).css('color', setColor);
                        $(this).find('a').css('color', setColor);
                        $(this).find('a').css('text-decoration', 'underline');
                        $(this).find('svg').css('stroke', setColor);
                 });
                 this.addEventListener("mouseout", ( event ) => {
                    $(this).css('border-color', 'transparent');
                    $(this).css('color', '#000');
                    $(this).find('a').css('color', '#000');
                    $(this).find('a').css('text-decoration', 'none');
                    $(this).find('svg').css('stroke', '#000');
                 });
            });
        }
});