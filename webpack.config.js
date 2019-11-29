const path = require('path');
// Path is a package which is used to convert relative to absolute path

module.exports = {
	entry: {
		app: ["@babel/polyfill","./src/app.js"]
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.bundle.js'
	},
	watch: true,
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	devServer: {
		//publicPath: '/scripts/',
		// Public path is used to specify ki kaha save krna h (in cache) wahi folder me h toh no need and agar folder ke andar scripts folder ke andar h toh fhir publicPAth specify.
		contentBase: path.join(__dirname, 'dist'),
		watchContentBase: true,
		open:true
	}
}


//watcher is enables to automatically bundle on save and dev-server is used to automatically reflect the changes in the webpage but devserver doesnot change in the file it caches the changes to change in the file we need to use watcher.

//To run this thing we need to open 2 commandprompt - npm run build and the other one npm run start

// babelpolyfill is required to support async await which is not upported in normal babel loader (it gives error)