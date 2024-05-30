import allResourcesData from "./all_resources.js";

export default class Resource
{
    constructor(url, imgUrl, titleEn, titleYi, comments)
    {
        this._url = url;
        this._imgUrl = imgUrl;
        this._titleEn = titleEn;
        this._titleYi = titleYi;
        this._comments = comments;
    }
    generateContent()
    {
        let concatComments = '';
        if (this._comments != 0) concatComments = `, <i>${this._comments}</i>`;

        let textResourceHTML = `<div class="shterndl" data-id="${this._titleEn}" title="Add ${this._titleEn} to your quick links"><svg-star></svg-star></div><div class="item-info"><a href="${this._url}" target="_blank">`;
        let imgResourceHTML = `<div class="img-stack" style="background-image: url('${this._imgUrl}')"><div class="shterndl" data-id="${this._titleEn}" title="Add ${this._titleEn} to your quick links"><svg-star></svg-star></div></div><a href="${this._url}" target="_blank"><div class="item-info">`;

        if (this._titleYi == '')
        {
            textResourceHTML+=`<h3>${this._titleEn}</h3>`;
            imgResourceHTML+=`<h3>${this._titleEn}</h3>`;
        }
        else
        {
            textResourceHTML+=`<h3>${this._titleYi}</h3><h4>${this._titleEn}</h4>`;
            imgResourceHTML+=`<h3>${this._titleYi}</h3><h4>${this._titleEn}</h4>`;
        }

        textResourceHTML+=`</a><p class="comments">${this._author}${concatComments}</p></div>`;
        imgResourceHTML+=`</a><p class="comments">${this._comments}</p></div>`;

        return (this instanceof textResource) ? textResourceHTML : imgResourceHTML;
    }
}

    export class textResource extends Resource
    {
        constructor(url, imgUrl, titleEn, titleYi, comments, author)
        {
            super(url, imgUrl, titleEn, titleYi, comments);
            this._author = author;
        }
    }

export function appendToDOM(elementData, parentElement, convertBoolean)
{
    const location = parentElement;
    const item = elementData;
    let thisElement;

    if (Object.hasOwn(item, 'author'))
    {
        if (convertBoolean)
            {
                item.imgUrl = `img/redt.png`;
                let newSubheading = `<p>${item.author}</p><p>${item.comments}</p>`
                thisElement = new Resource(item.url, item.imgUrl, item.titleEn, item.titleYi, newSubheading);
            }
            else
            {
                thisElement = new textResource(item.url, item.imgUrl, item.titleEn, item.titleYi, item.comments, item.author);
            }
    }
    else
    {
        thisElement = new Resource(item.url, item.imgUrl, item.titleEn, item.titleYi, item.comments);
    }

    const newDiv = document.createElement("div");
    newDiv.classList.add('resource');
    newDiv.innerHTML = thisElement.generateContent();
    location.appendChild(newDiv);
}

const data = allResourcesData;
for (let item of data)
{
    const parent = document.getElementById(item.category).querySelector('.resources_container');
    appendToDOM(item, parent, false);
}