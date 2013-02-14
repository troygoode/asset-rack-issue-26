Repro example for [issue #26](https://github.com/techpines/asset-rack/issues/26) of asset-rack. This is a problem that only occurs with [mounting sub-apps](http://vimeo.com/56166857).

Clone, run "npm install", run "npm start", then open localhost:3000. You'll see that when you
click through to the example page the CSS doesn't load. The tag will be
generating a URL like:

http://localhost:3000/css/app-a8c4e5f26745712564df2a8a9f6e1bf5.css

This won't work, but this will:

http://localhost:3000/example/css/app-a8c4e5f26745712564df2a8a9f6e1bf5.css

Unfortunately changing the call to `assets#tag` from
`assets.tag('/css/app.css')` to `assets.tag('/example/css/app.css')`
causes asset-rack to break.
