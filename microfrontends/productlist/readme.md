 create all 3 subfolders 
 npm init -y
 npm install webpack@5.4.0 webpack-cli@4.2.0 webpack-dev-server@3.11.0 faker@5.1.0 html-webpack-plugin@4.5.0
 webpack -> to create one big bundle.js or main.js file
 webpack-dev-server -> to serve that main.js or bundle.js to browser
 html-webpack-plugin -> connect that main.js or generated js files to html document
 didnt work above versions working versions are 
   "dependencies": {
    "faker": "^5.1.0",
    "html-webpack-plugin": "^4.5.2",
    "webpack": "^5.75.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^3.11.3"
  }

 add "scripts": {
   "start" : "webpack serve"
  },
  webpack.config.js
  add devServer{ port: 8081}

 on remote application:
  new ModuleFederationPlugin ( {
            name: "products",
            filename: "remoteEntry.js",
            exposes: {
                './ProductsIndex' :'./src/index'
            }
        }),
 on host 

  new ModuleFederationPlugin( {
            name: "container",
            remotes: {
                products: "products@http://localhost:8081/remoteEntry.js"
            }
        }),
 id of index.html div where we load remote container should be of different name. that is index.html having div id="cart" and remote component also having cart as name is invalid. gives https://github.com/module-federation/module-federation-examples/issues/322 issue.
  shared : {
                faker : {
                    singleton : true
                }
            } // gives warning in container if both version are not compatible
            

