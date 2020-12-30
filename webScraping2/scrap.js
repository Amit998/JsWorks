const request=require('request')
const cheerio=require('cheerio')
const axios=require('axios')



request('https://www.coursera.org/search?query=javascript',
(error,response,html)=>{
    // console.log(response.status)
    if(!error && response.statusCode == 200){
        // console.log(response.statusCode)
        const $=cheerio.load(html);

        // let mainList=$('.ais-InfiniteHits-item')

        const mainList=$('h2[class="color-primary-text card-title headline-1-text"]').html();

        // const output=mainList.find('h2').text()

 

        $('h2[class="color-primary-text card-title headline-1-text"]').each((i,elemnt) => {
            const item=$(elemnt).text()
            console.log(item)
        });

        // $('li[class="ais-InfiniteHits-item"]').each((i,element)=>{
        //     const item=$(element).text();
        //     // console.log(item)
        // })

    //     console.log($);
        // console.log(mainList.text());

        // const heading=$('li[class="ais-InfiniteHits-item"]')
        // console.log(heading)

        

//         // const output=heading.find('h2.headline-1-text').text();

//         // const output=heading
//         // .children('h1')
//         // .next()
//         // .text()

//         // console.log(output)
//         // console.log(output)
//         // const output=siteHeading.find('.udlite-focus-visible-target udlite-heading-md course-card--course-title--2f7tE')

//         // console.log(heading);

//         // $('.ais-InfiniteHits-item').each((i,el)=>{
//         //     console.log('hello')
//             // const item= $(el).text();
//             // console.log(i);
//         // });



    }
});