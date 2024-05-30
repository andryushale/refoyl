import allResourcesData from "./all_resources.js";
import { appendToDOM } from "./createResources.js";

let i = 0; 

$(document).on("click", ".shterndl", function(){

    const thisIDName = $(this).attr('data-id');
    if ($(this).hasClass('saved')) //if already selected
    {
        $(this).removeClass('saved'); //unselect self
        const parentElementName = $(this).closest('article').attr('id');

        if (parentElementName == 'quick_links') //if you're in quick_links
            {
                $(this).closest('.resource').remove(); //remove self

                i--;
                if (i == 0) //display empty message if empty
                    {
                        $('#quick_links #empty_message').show();
                    }
            }
        else //if you're not in quick_links
        {
            $('#quick_links h4').each(function(){
                if ($(this).text() == thisIDName)
                {  
                    //remove corresponding resource within quicklinks
                    $(this).closest('.resource').remove();

                    i--;
                    if (i == 0) //display empty message if empty
                        {
                            $('#quick_links #empty_message').show();
                        }
                }
            });
        }
        //unselect corresponding star
        $(document).find(`[data-id="${thisIDName}"]`).removeClass('saved');

        //remove favorite data
        // let searchKey = $(this).attr('data-id'),
        //     item = allResourcesData.find(x => x.titleEn === searchKey);
        //     removeFromCookie(item);
    }
    else //if first time selecting
    {
        let searchKey = $(this).attr('data-id'),
            item = allResourcesData.find(x => x.titleEn === searchKey),
            location = document.getElementById('quick_links').querySelector('.resources_container');
    
        if (i == 0)
        {
            $('#quick_links #empty_message').hide();
        }
        appendToDOM(item, location, true);
        // appendToCookie(item);
        i++;

        $(this).toggleClass('saved');
        $('#quick_links, #results').find(`[data-id="${thisIDName}"]`).addClass('saved');
    }
});

// let exportData = [];
// function appendToCookie(x)
// {
//     if (exportData.indexOf(x) == -1)
//         {
//             exportData.push(x);
//         }
// }

// function removeFromCookie(x)
// {
//     for (let item of exportData)
//         {
//             if (item == x) delete exportData[exportData.findIndex(x => x.titleEn === item.titleEn)];
//             console.log(item);
//         }
//         console.log(exportData);
// }