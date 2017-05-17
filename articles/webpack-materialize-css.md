### the method of importing materialize-css in webpack2

Firstly I want to say is that materialize-css is based on **jquery^2**, not **jquery^3**.So, if you want to properly load materialize-css, remember use **jquery^2**. I suggest that you can use
`materialize-css/node_modules/jquery/dist/jquery.js`.

ok. Now, let's start it.

### Step1. Install materialize-css.

`yarn add --dev materialize-css`

or you can also use npm(I will use yarn instead of npm in the following tutorial).

`npm i -D materialize-css`

### Step2. Use style of materialize-css.

Install the loaders.

`yarn add --dev style-loader css-loader sass-loader file-loader url-loader`

Configure these loaders in you webpack.config.js.

``` javascript
module: {
    rules: [{
        test: /\.(sass|scss)$/,
        use: [
            "style-loader", {
                loader: "css-loader",
                options: {
                    modules: false,
                    url: true
                }
            },
            "sass-loader?sourceMap"
        ]
    }, {
        test: /\.(gif|jpg|png|woff|woff2|svg|eot|ttf)\??.*$/,
        use: [{
            loader: "url-loader",
            options: {
                limit: 50000,
                name: "[path][name].[ext]"
            }
        }]
    }]
}
```

Import scss of materialize-css.

`import 'materialize-css/sass/materialize.scss'`

### Step3. Make jquery^2 globally.

install expose-loader.

`yarn add --dev expose-loader`

Configure `expose-loader` in your webpack.config.js.

``` javascript
module: {
    rules: [{
        // test: require.resolve('jquery_v2'),
        test: path.resolve(__dirname, 'node_modules/materialize-css/node_modules/jquery/dist/jquery.js'),
        use: [{
            loader: 'expose-loader',
            options: '$'
        }, {
            loader: 'expose-loader',
            options: 'jQuery'
        }]
    }]
}
```

Step4. Finally, import javascript of materialize-css.

`import 'materialize-css'`

Then you can use the materialize-css where you want.
