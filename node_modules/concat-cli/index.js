#!/usr/bin/env node
var concat = require('concat'),
    args = process.argv,
    files,
    output,
    dest,
    filesIdx = args.indexOf('-f') > args.indexOf('--files') ? 
               args.indexOf('-f') : args.indexOf('--files'),
    outputIdx = args.indexOf('-o') > args.indexOf('--output') ? 
                args.indexOf('-o') : args.indexOf('--output');
 
filesIdx < 0 && console.log('files parameter missing') && process.exit(1);

outputIdx < 0 ? (outputIdx = args.length) && (dest = 'all.') : dest = args[args.length - 1];

files = args.slice(filesIdx+1, outputIdx);

dest === 'all.' && (dest += files[0].split('.')[1]);
 
concat(files, dest, function (error) {
  if(error) {
   	console.error(error);
   	process.exit(2);
   	return;
  }
  console.log('files concatenated');
  process.exit(0);
});



