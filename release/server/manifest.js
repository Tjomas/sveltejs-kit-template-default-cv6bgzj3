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
		client: {start:"_app/immutable/entry/start.BNAEmea0.js",app:"_app/immutable/entry/app.BI6w4bEA.js",imports:["_app/immutable/entry/start.BNAEmea0.js","_app/immutable/chunks/C1xOxF1s.js","_app/immutable/chunks/D4NEBRRi.js","_app/immutable/chunks/jOsgb0Vj.js","_app/immutable/chunks/DOqJYhPf.js","_app/immutable/entry/app.BI6w4bEA.js","_app/immutable/chunks/D4NEBRRi.js","_app/immutable/chunks/DjPvxcP0.js","_app/immutable/chunks/DdIQyh8y.js","_app/immutable/chunks/DOqJYhPf.js","_app/immutable/chunks/BisWe1ES.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./chunks/0-DBejowPY.js')),
			__memo(() => import('./chunks/1-BsOAu4cG.js'))
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
