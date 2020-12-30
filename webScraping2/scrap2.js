const request=require('request')
const cheerio=require('cheerio')
const fs=require('fs')
const csv = require('csv-parser');




var path='CourseList.csv';


var count=0;

fs.createReadStream(path)
  .pipe(csv())
  .on('data', (row) => {
    count=count+1;
    // console.log(count)
  });



if(fs.existsSync(path) != true) {
    var writeStream=fs.createWriteStream(path)
    writeStream.write(`Id,Title_Of_The_Course\ n`)
}

// var writeStream=fs.createWriteStream(path)


request('https://www.coursera.org/search?query=python&index=prod_all_products_term_optimization',
(error,response,html)=> {
    // console.log(response.statusCode)
    if(!error && response.statusCode == 200){
        // console.log(response.statusCode)
        // console.log(count)
        // count++;
        const $=cheerio.load(html);

        // console.log($('h2[class="color-primary-text card-title headline-1-text"]'));

    

 

        $('h2[class="color-primary-text card-title headline-1-text"]').each((i,elemnt) => {
            const item=$(elemnt).text()
            // fs.writeFileSync(path,'hello\n',function(err){
            //     console.log('saved')
            // } )
            
            
            fs.appendFile('./CourseList.csv',`${count},${item}\n`,'utf-8',(error)=>{
                // console.log(error)
            })
            count++
            // console.log(`${i},${item}\n`);

            // writeStream.write(`${i},${item}\n`)
        });

        console.log('Scrapping Done')

      


    }
});