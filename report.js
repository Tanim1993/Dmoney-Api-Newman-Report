const newman = require('newman');


newman.run({

    collection: require('./Dmoney User API Automation.postman_collection.json'), // environment: require('./collection/env.json'),  
    // environment: require('./collection/env.json'),
    //collection: ('.https://api.postman.com/collections/15885270-e25d896c-0361-45a1-8ecd-5b12f3312406?access_key=PMAT-01H6S04AB0F6W8ZSM4JPM9N84C'), 


    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {

            export: './Reports/report.html', // If not specified, the file will be written to `newman/`
        }
    }
}, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
});