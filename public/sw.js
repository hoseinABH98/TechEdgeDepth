if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,i)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const t={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return t;default:return e(s)}}))).then((e=>{const s=i(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-8778d57b"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/9pjYJvqCjs-RQlXHJQv05/_buildManifest.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/9pjYJvqCjs-RQlXHJQv05/_ssgManifest.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/9c378a48.bca366718f045dbe8189.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/commons.c23c27172c6c35db60be.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/fd73fa5fb9f73f18227a47c23a9002adcbd74f44.27cb1c43149a65498971.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/framework.490e6e89fb7343c23de5.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/main-982b3a68e8996e6daf96.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/pages/%5Bslug%5D-2730030385bf42e985e7.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/pages/_app-2bd84b9323cf3d861f38.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/pages/_error-b478574983f58bb16d50.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/pages/index-aa5d46dbc4b0066efdbe.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/polyfills-a98cee78eb8282e29fb6.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"9pjYJvqCjs-RQlXHJQv05"},{url:"/android-chrome-144x144.png",revision:"bf2e15084b452f2bbfb2902040120661"},{url:"/apple-touch-icon.png",revision:"d64e9f3c81c484beae681b5c897187d7"},{url:"/favicon-16x16.png",revision:"c3bd5ab5806d4c2a189b8a35905c534d"},{url:"/favicon-32x32.png",revision:"0b12124b575c56774ff57d2b02462324"},{url:"/favicon.ico",revision:"388e54506fde7dfec8039b8b89558e8c"},{url:"/favicon.png",revision:"f7baefdb44f71e7fb24f2e69eb020cba"},{url:"/manifest.json",revision:"4cddd3c4151b8678acfbb86561107bbf"},{url:"/mstile-150x150.png",revision:"72b2b2f0fb519a2868bcc916b155ba81"},{url:"/safari-pinned-tab.svg",revision:"8f166df4c92165c46ac0659388553e75"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
