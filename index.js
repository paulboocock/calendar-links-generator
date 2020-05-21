const calendar = require('calendar-link');
const { writeFileSync } = require('fs');

// Set event as an object
const event = require('./config.json');

// Then fetch and print the Google Calendar Link
console.log('Google Calendar: ' + calendar.google(event)); 
console.log();

// Fix Outlook Timestamps and print
const outlook = calendar.outlook(event);
console.log('Outlook: ' + outlook.replace(/(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})/g, '$1-$2-$3T$4:$5:$6')); 

// Then fetch ICS and write to file
writeFileSync(event.title.replace(/\s+/g, '') + '.ics', decodeURIComponent(calendar.ics(event).split(',')[1]))
