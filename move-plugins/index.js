/* NOTE: This is a quick dirty fix for a current ReactJS problem that prevents
   the build engine from building any components that reside outside the React
   project root directory (src/).

   TODO: Re-implement the script from scratch using input and output streams

   @Author: Fadi Hanna Al-Kass
*/


var exec = require('child_process').exec

const argv = process.argv.splice(2);

if (argv.length < 2)
{
	console.error('invalid number of parameters');
	process.exit(1);
}
else
{
	const source = argv.splice(0, argv.length - 1);
	const destination = argv[argv.length - 1];
	for (var i = 0; i < source.length; i++)
	{ /* NOTE: We move the directories one at a time in case
	    in case permissions have been manipulated */
		console.log(`${source[i]} => ${destination}`);
		exec(`cp -r ${source[i]} ${destination}`, (err, stdout, stderr) => console.log(stdout))
	}
	process.exit(0)
}
