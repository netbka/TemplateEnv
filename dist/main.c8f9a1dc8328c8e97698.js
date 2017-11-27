webpackJsonp([0],[,,function(e,r,t){"use strict";t(3);var n=t(4),o=function(e){return e&&e.__esModule?e:{default:e}}(n),i=(0,o.default)(105e3).format("$0,0.00");console.log("pay  "+i+" dollars")},function(e,r){},function(e,r,t){var n,o;/*! @preserve
 * numeral.js
 * version : 2.0.6
 * author : Adam Draper
 * license : MIT
 * http://adamwdraper.github.com/Numeral-js/
 */
!function(i,a){n=a,void 0!==(o="function"==typeof n?n.call(r,t,r,e):n)&&(e.exports=o)}(0,function(){function e(e,r){this._input=e,this._value=r}var r,t,n={},o={},i={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},a={currentLocale:i.currentLocale,zeroFormat:i.zeroFormat,nullFormat:i.nullFormat,defaultFormat:i.defaultFormat,scalePercentBy100:i.scalePercentBy100};return r=function(o){var i,l,u,s;if(r.isNumeral(o))i=o.value();else if(0===o||void 0===o)i=0;else if(null===o||t.isNaN(o))i=null;else if("string"==typeof o)if(a.zeroFormat&&o===a.zeroFormat)i=0;else if(a.nullFormat&&o===a.nullFormat||!o.replace(/[^0-9]+/g,"").length)i=null;else{for(l in n)if((s="function"==typeof n[l].regexps.unformat?n[l].regexps.unformat():n[l].regexps.unformat)&&o.match(s)){u=n[l].unformat;break}u=u||r._.stringToNumber,i=u(o)}else i=Number(o)||null;return new e(o,i)},r.version="2.0.6",r.isNumeral=function(r){return r instanceof e},r._=t={numberToFormat:function(e,t,n){var i,a,l,u,s,c,f,m=o[r.options.currentLocale],h=!1,d=!1,b=0,p="",g="",v=!1;if(e=e||0,a=Math.abs(e),r._.includes(t,"(")?(h=!0,t=t.replace(/[\(|\)]/g,"")):(r._.includes(t,"+")||r._.includes(t,"-"))&&(s=r._.includes(t,"+")?t.indexOf("+"):e<0?t.indexOf("-"):-1,t=t.replace(/[\+|\-]/g,"")),r._.includes(t,"a")&&(i=t.match(/a(k|m|b|t)?/),i=!!i&&i[1],r._.includes(t," a")&&(p=" "),t=t.replace(new RegExp(p+"a[kmbt]?"),""),a>=1e12&&!i||"t"===i?(p+=m.abbreviations.trillion,e/=1e12):a<1e12&&a>=1e9&&!i||"b"===i?(p+=m.abbreviations.billion,e/=1e9):a<1e9&&a>=1e6&&!i||"m"===i?(p+=m.abbreviations.million,e/=1e6):(a<1e6&&a>=1e3&&!i||"k"===i)&&(p+=m.abbreviations.thousand,e/=1e3)),r._.includes(t,"[.]")&&(d=!0,t=t.replace("[.]",".")),l=e.toString().split(".")[0],u=t.split(".")[1],c=t.indexOf(","),b=(t.split(".")[0].split(",")[0].match(/0/g)||[]).length,u?(r._.includes(u,"[")?(u=u.replace("]",""),u=u.split("["),g=r._.toFixed(e,u[0].length+u[1].length,n,u[1].length)):g=r._.toFixed(e,u.length,n),l=g.split(".")[0],g=r._.includes(g,".")?m.delimiters.decimal+g.split(".")[1]:"",d&&0===Number(g.slice(1))&&(g="")):l=r._.toFixed(e,0,n),p&&!i&&Number(l)>=1e3&&p!==m.abbreviations.trillion)switch(l=String(Number(l)/1e3),p){case m.abbreviations.thousand:p=m.abbreviations.million;break;case m.abbreviations.million:p=m.abbreviations.billion;break;case m.abbreviations.billion:p=m.abbreviations.trillion}if(r._.includes(l,"-")&&(l=l.slice(1),v=!0),l.length<b)for(var _=b-l.length;_>0;_--)l="0"+l;return c>-1&&(l=l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===t.indexOf(".")&&(l=""),f=l+g+(p||""),h?f=(h&&v?"(":"")+f+(h&&v?")":""):s>=0?f=0===s?(v?"-":"+")+f:f+(v?"-":"+"):v&&(f="-"+f),f},stringToNumber:function(e){var r,t,n,i=o[a.currentLocale],l=e,u={thousand:3,million:6,billion:9,trillion:12};if(a.zeroFormat&&e===a.zeroFormat)t=0;else if(a.nullFormat&&e===a.nullFormat||!e.replace(/[^0-9]+/g,"").length)t=null;else{t=1,"."!==i.delimiters.decimal&&(e=e.replace(/\./g,"").replace(i.delimiters.decimal,"."));for(r in u)if(n=new RegExp("[^a-zA-Z]"+i.abbreviations[r]+"(?:\\)|(\\"+i.currency.symbol+")?(?:\\))?)?$"),l.match(n)){t*=Math.pow(10,u[r]);break}t*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),t*=Number(e)}return t},isNaN:function(e){return"number"==typeof e&&isNaN(e)},includes:function(e,r){return-1!==e.indexOf(r)},insert:function(e,r,t){return e.slice(0,t)+r+e.slice(t)},reduce:function(e,r){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");var t,n=Object(e),o=n.length>>>0,i=0;if(3===arguments.length)t=arguments[2];else{for(;i<o&&!(i in n);)i++;if(i>=o)throw new TypeError("Reduce of empty array with no initial value");t=n[i++]}for(;i<o;i++)i in n&&(t=r(t,n[i],i,n));return t},multiplier:function(e){var r=e.toString().split(".");return r.length<2?1:Math.pow(10,r[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce(function(e,r){var n=t.multiplier(r);return e>n?e:n},1)},toFixed:function(e,r,t,n){var o,i,a,l,u=e.toString().split("."),s=r-(n||0);return o=2===u.length?Math.min(Math.max(u[1].length,s),r):s,a=Math.pow(10,o),l=(t(e+"e+"+o)/a).toFixed(o),n>r-o&&(i=new RegExp("\\.?0{1,"+(n-(r-o))+"}$"),l=l.replace(i,"")),l}},r.options=a,r.formats=n,r.locales=o,r.locale=function(e){return e&&(a.currentLocale=e.toLowerCase()),a.currentLocale},r.localeData=function(e){if(!e)return o[a.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},r.reset=function(){for(var e in i)a[e]=i[e]},r.zeroFormat=function(e){a.zeroFormat="string"==typeof e?e:null},r.nullFormat=function(e){a.nullFormat="string"==typeof e?e:null},r.defaultFormat=function(e){a.defaultFormat="string"==typeof e?e:"0.0"},r.register=function(e,r,t){if(r=r.toLowerCase(),this[e+"s"][r])throw new TypeError(r+" "+e+" already registered.");return this[e+"s"][r]=t,t},r.validate=function(e,t){var n,o,i,a,l,u,s,c;if("string"!=typeof e&&(e+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",e)),e=e.trim(),e.match(/^\d+$/))return!0;if(""===e)return!1;try{s=r.localeData(t)}catch(e){s=r.localeData(r.locale())}return i=s.currency.symbol,l=s.abbreviations,n=s.delimiters.decimal,o="."===s.delimiters.thousands?"\\.":s.delimiters.thousands,(null===(c=e.match(/^[^\d]+/))||(e=e.substr(1),c[0]===i))&&((null===(c=e.match(/[^\d]+$/))||(e=e.slice(0,-1),c[0]===l.thousand||c[0]===l.million||c[0]===l.billion||c[0]===l.trillion))&&(u=new RegExp(o+"{2}"),!e.match(/[^\d.,]/g)&&(a=e.split(n),!(a.length>2)&&(a.length<2?!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u):1===a[0].length?!!a[0].match(/^\d+$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/):!!a[0].match(/^\d+.*\d$/)&&!a[0].match(u)&&!!a[1].match(/^\d+$/)))))},r.fn=e.prototype={clone:function(){return r(this)},format:function(e,t){var o,i,l,u=this._value,s=e||a.defaultFormat;if(t=t||Math.round,0===u&&null!==a.zeroFormat)i=a.zeroFormat;else if(null===u&&null!==a.nullFormat)i=a.nullFormat;else{for(o in n)if(s.match(n[o].regexps.format)){l=n[o].format;break}l=l||r._.numberToFormat,i=l(u,s,t)}return i},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){function r(e,r,t,o){return e+Math.round(n*r)}var n=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([this._value,e],r,0)/n,this},subtract:function(e){function r(e,r,t,o){return e-Math.round(n*r)}var n=t.correctionFactor.call(null,this._value,e);return this._value=t.reduce([e],r,Math.round(this._value*n))/n,this},multiply:function(e){function r(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)*Math.round(r*i)/Math.round(i*i)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,o){var i=t.correctionFactor(e,r);return Math.round(e*i)/Math.round(r*i)}return this._value=t.reduce([this._value,e],r),this},difference:function(e){return Math.abs(r(this._value).subtract(e).value())}},r.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var r=e%10;return 1==~~(e%100/10)?"th":1===r?"st":2===r?"nd":3===r?"rd":"th"},currency:{symbol:"$"}}),function(){r.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(e,t,n){var o,i=r._.includes(t," BPS")?" ":"";return e*=1e4,t=t.replace(/\s?BPS/,""),o=r._.numberToFormat(e,t,n),r._.includes(o,")")?(o=o.split(""),o.splice(-1,0,i+"BPS"),o=o.join("")):o=o+i+"BPS",o},unformat:function(e){return+(1e-4*r._.stringToNumber(e)).toFixed(15)}})}(),function(){var e={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},t={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=e.suffixes.concat(t.suffixes.filter(function(r){return e.suffixes.indexOf(r)<0})),o=n.join("|");o="("+o.replace("B","B(?!PS)")+")",r.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(o)},format:function(n,o,i){var a,l,u,s=r._.includes(o,"ib")?t:e,c=r._.includes(o," b")||r._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),a=0;a<=s.suffixes.length;a++)if(l=Math.pow(s.base,a),u=Math.pow(s.base,a+1),null===n||0===n||n>=l&&n<u){c+=s.suffixes[a],l>0&&(n/=l);break}return r._.numberToFormat(n,o,i)+c},unformat:function(n){var o,i,a=r._.stringToNumber(n);if(a){for(o=e.suffixes.length-1;o>=0;o--){if(r._.includes(n,e.suffixes[o])){i=Math.pow(e.base,o);break}if(r._.includes(n,t.suffixes[o])){i=Math.pow(t.base,o);break}}a*=i||1}return a}})}(),function(){r.register("format","currency",{regexps:{format:/(\$)/},format:function(e,t,n){var o,i,a=r.locales[r.options.currentLocale],l={before:t.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:t.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(t=t.replace(/\s?\$\s?/,""),o=r._.numberToFormat(e,t,n),e>=0?(l.before=l.before.replace(/[\-\(]/,""),l.after=l.after.replace(/[\-\)]/,"")):e<0&&!r._.includes(l.before,"-")&&!r._.includes(l.before,"(")&&(l.before="-"+l.before),i=0;i<l.before.length;i++)switch(l.before[i]){case"$":o=r._.insert(o,a.currency.symbol,i);break;case" ":o=r._.insert(o," ",i+a.currency.symbol.length-1)}for(i=l.after.length-1;i>=0;i--)switch(l.after[i]){case"$":o=i===l.after.length-1?o+a.currency.symbol:r._.insert(o,a.currency.symbol,-(l.after.length-(1+i)));break;case" ":o=i===l.after.length-1?o+" ":r._.insert(o," ",-(l.after.length-(1+i)+a.currency.symbol.length-1))}return o}})}(),function(){r.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(e,t,n){var o="number"!=typeof e||r._.isNaN(e)?"0e+0":e.toExponential(),i=o.split("e");return t=t.replace(/e[\+|\-]{1}0/,""),r._.numberToFormat(Number(i[0]),t,n)+"e"+i[1]},unformat:function(e){function t(e,t,n,o){var i=r._.correctionFactor(e,t);return e*i*(t*i)/(i*i)}var n=r._.includes(e,"e+")?e.split("e+"):e.split("e-"),o=Number(n[0]),i=Number(n[1]);return i=r._.includes(e,"e-")?i*=-1:i,r._.reduce([o,Math.pow(10,i)],t,1)}})}(),function(){r.register("format","ordinal",{regexps:{format:/(o)/},format:function(e,t,n){var o=r.locales[r.options.currentLocale],i=r._.includes(t," o")?" ":"";return t=t.replace(/\s?o/,""),i+=o.ordinal(e),r._.numberToFormat(e,t,n)+i}})}(),function(){r.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(e,t,n){var o,i=r._.includes(t," %")?" ":"";return r.options.scalePercentBy100&&(e*=100),t=t.replace(/\s?\%/,""),o=r._.numberToFormat(e,t,n),r._.includes(o,")")?(o=o.split(""),o.splice(-1,0,i+"%"),o=o.join("")):o=o+i+"%",o},unformat:function(e){var t=r._.stringToNumber(e);return r.options.scalePercentBy100?.01*t:t}})}(),function(){r.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,r,t){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),i=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)},unformat:function(e){var r=e.split(":"),t=0;return 3===r.length?(t+=60*Number(r[0])*60,t+=60*Number(r[1]),t+=Number(r[2])):2===r.length&&(t+=60*Number(r[0]),t+=Number(r[1])),Number(t)}})}(),r})}],[2]);