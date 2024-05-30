import allResourcesData from "./all_resources.js";
import { appendToDOM } from "./createResources.js";

$('nav input').on("focus", function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    $('#search_results').css('background-color', '#FEDFD3').slideDown(500);
});

$('nav input').on("focusout", function(){
    if ($(this).val().length == 0)
    {
        $('#search_results').css('background-color', '#52423B').slideUp(500);
        $('#results, #search_query').html('');
    }
});

const data = allResourcesData;
$('nav input').on("input", function(){

    let searchQuery = $(this).val();
    $('#search_query').html(searchQuery);
    $('#results').html('');

    if (searchQuery.length > 2)
    {
        for (let item of data)
        {
            let relevantText = item.titleEn + ' ' + item.titleYi + ' ' +  item.comments;
            if (Object.hasOwn(item, 'author')) relevantText+= ' ' + item.author;
            relevantText+= ' ' + relevantText.toUpperCase() + ' ' + relevantText.toLowerCase();
            
            if (relevantText.indexOf(searchQuery) > -1)
            {
                const parent = $('#results').get(0);
                appendToDOM(item, parent, true);
                highlight(searchQuery);
            }
        }
    }
    else
    {
        $('#results, #search_query').html('');
    }  
});

function highlight(query)
{
    $('#results h4, #results h3, #results .comments').each(function(){
        const body = $(this).html();
        if (body.indexOf('highlight') == -1)
        {
            if (body.indexOf('<a') >= 0)
            {
                if (body.indexOf(highlight) > body.indexOf('<a') && body.indexOf(highlight) < body.indexOf('</a>') )
                {
                    console.log('avoided replacing link');
                }
            }
            else
            {
                $(this).html(body.replace(new RegExp(query, 'gi'), '<span class="highlight">$&</span>'));
            }
        } 
    });
}