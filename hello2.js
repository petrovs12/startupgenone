/**
 * #!/usr/bin/env node
 * Created with JetBrains WebStorm.
 * User: stefan
 * Date: 7/20/13
 * Time: 4:36 PM
 * To change this template use File | Settings | File Templates.
 */
var fs = require(’fs’);
var outfile = "hello.txt";
var out = "Modify this script to write out something different.\n";
fs.writeFileSync(outfile, out);
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);

