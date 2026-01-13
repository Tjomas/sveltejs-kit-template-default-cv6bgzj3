const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DqXNGvf6.js",app:"_app/immutable/entry/app.ClJGKQYl.js",imports:["_app/immutable/entry/start.DqXNGvf6.js","_app/immutable/chunks/V13J9iEf.js","_app/immutable/chunks/D4NEBRRi.js","_app/immutable/chunks/BaJiszkz.js","_app/immutable/chunks/DOqJYhPf.js","_app/immutable/entry/app.ClJGKQYl.js","_app/immutable/chunks/D4NEBRRi.js","_app/immutable/chunks/DjPvxcP0.js","_app/immutable/chunks/DdIQyh8y.js","_app/immutable/chunks/DOqJYhPf.js","_app/immutable/chunks/BisWe1ES.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-Dy25SicO.js')),
			__memo(() => import('./chunks/1-ny_JBVFj.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/about"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
