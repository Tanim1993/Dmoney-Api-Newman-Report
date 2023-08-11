const newman = require('newman');


newman.run({

    collection: require('./Dmoney User API Automation.postman_collection.json'), // environment: require('./collection/env.json'),  
    // environment: require('./collection/env.json'),
    


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