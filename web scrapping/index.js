const requset=require('request-promise')
const cheerio = require("cheerio")
const fs = require("fs")
const json2cvs=require("json2csv").Parser

const movies=[
    "https://m.imdb.com/title/tt2560140/",
    "https://m.imdb.com/title/tt0877057/?ref_=m_tt_sims_tt",
    "https://m.imdb.com/title/tt3398540/?ref_=m_nm_knf_act_i4"
]
;


( async()=>{
    let imdbData=[]
    // const response=await requset({
    //     uri:movie,
    //     headers:{
    //         accept: "application/json, text/plain",
    //         "accept-encoding": "gzi p, deflate, br",
    //         "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,bn;q=0.7"
    //     }, 
    //     gzip:true,
    // });
    // let $ =cheerio.load(response)
    // let title=$('div[class="media-body"] > h1').text().trim()
    // let rating=$('div[class="inline-block text-center"] > span').text().trim()
    // let description=$('div[class="media-body relative"] > p').text().trim()

    // imdbData.push({
    //     title,
    //     rating,
    //     description
    // });

    for (let movie of movies){
        const response=await requset({
        uri:movie,
        headers:{
            accept: "application/json, text/plain",
            "accept-encoding": "gzi p, deflate, br",
            "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,bn;q=0.7"
        }, 
        gzip:true,
    });
    let $ =cheerio.load(response)
    let title=$('div[class="media-body"] > h1').text().trim()
    let rating=$('div[class="inline-block text-center"] > span').text().trim()
    let description=$('div[class="media-body relative"] > p').text().trim()

    imdbData.push({
        title,
        rating,
        description
    });

    };

    const j2c=new json2cvs()
    const csv= j2c.parse(imdbData)

    fs.writeFileSync("./imdb.csv",csv,"utf-8");
}


)();