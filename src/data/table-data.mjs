import { stat, rm, readFile, appendFile } from 'fs';
import { Buffer } from 'buffer';



appendFile('data.js', 'const DATA = [\n', (err) => {
    if (err) throw err;
    console.log(`created file`);
});

readFile('ALC_TAB.TXT', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    };

    let dataLines = data.split('\n');

    dataLines.forEach((element, index) => {

        dataLines[index] = element.replace('\r', '');
        appendFile('data.js', '"' + dataLines[index] + '",\n', (err) => {
            if (err) throw err;
        })


    });

    appendFile('data.js', ']', (err) => {
        if (err) throw err;
        console.log(`finished updating data file`);
    });

});
