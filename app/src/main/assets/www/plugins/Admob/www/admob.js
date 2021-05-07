cordova.define("Admob.AdMob", function(require, exports, module) {
'use strict';

var cordova$1 = require('cordova');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var constants = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdSizeType = exports.Events = exports.NativeActions = void 0;
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
var NativeActions;
(function (NativeActions) {
    NativeActions["Service"] = "AdMob";
    NativeActions["banner_hide"] = "banner_hide";
    NativeActions["banner_show"] = "banner_show";
    NativeActions["interstitial_is_loaded"] = "interstitial_is_loaded";
    NativeActions["interstitial_load"] = "interstitial_load";
    NativeActions["interstitial_show"] = "interstitial_show";
    NativeActions["ready"] = "ready";
    NativeActions["reward_video_is_ready"] = "reward_video_is_ready";
    NativeActions["reward_video_load"] = "reward_video_load";
    NativeActions["reward_video_show"] = "reward_video_show";
    NativeActions["set_app_muted"] = "set_app_muted";
    NativeActions["set_app_volume"] = "set_app_volume";
})(NativeActions = exports.NativeActions || (exports.NativeActions = {}));
var Events;
(function (Events) {
    Events["banner_click"] = "admob.banner.click";
    Events["banner_close"] = "admob.banner.close";
    Events["banner_exit_app"] = "admob.banner.exit_app";
    Events["banner_impression"] = "admob.banner.impression";
    Events["banner_load"] = "admob.banner.load";
    Events["banner_load_fail"] = "admob.banner.load_fail";
    Events["banner_open"] = "admob.banner.open";
    Events["interstitial_click"] = "admob.interstitial.click";
    Events["interstitial_close"] = "admob.interstitial.close";
    Events["interstitial_exit_app"] = "admob.interstitial.exit_app";
    Events["interstitial_impression"] = "admob.interstitial.impression";
    Events["interstitial_load"] = "admob.interstitial.load";
    Events["interstitial_load_fail"] = "admob.interstitial.load_fail";
    Events["interstitial_open"] = "admob.interstitial.open";
    Events["ready"] = "admob.ready";
    Events["reward_video_click"] = "admob.reward_video.click";
    Events["reward_video_close"] = "admob.reward_video.close";
    Events["reward_video_complete"] = "admob.reward_video.complete";
    Events["reward_video_exit_app"] = "admob.reward_video.exit_app";
    Events["reward_video_impression"] = "admob.reward_video.impression";
    Events["reward_video_load"] = "admob.reward_video.load";
    Events["reward_video_load_fail"] = "admob.reward_video.load_fail";
    Events["reward_video_open"] = "admob.reward_video.open";
    Events["reward_video_reward"] = "admob.reward_video.reward";
    Events["reward_video_start"] = "admob.reward_video.start";
})(Events = exports.Events || (exports.Events = {}));
var AdSizeType;
(function (AdSizeType) {
    AdSizeType[AdSizeType["BANNER"] = 0] = "BANNER";
    AdSizeType[AdSizeType["LARGE_BANNER"] = 1] = "LARGE_BANNER";
    AdSizeType[AdSizeType["MEDIUM_RECTANGLE"] = 2] = "MEDIUM_RECTANGLE";
    AdSizeType[AdSizeType["FULL_BANNER"] = 3] = "FULL_BANNER";
    AdSizeType[AdSizeType["LEADERBOARD"] = 4] = "LEADERBOARD";
    AdSizeType[AdSizeType["SMART_BANNER"] = 5] = "SMART_BANNER";
})(AdSizeType = exports.AdSizeType || (exports.AdSizeType = {}));
});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdSizeType = exports.NativeActions = exports.Events = void 0;

Object.defineProperty(exports, "AdSizeType", { enumerable: true, get: function () { return constants.AdSizeType; } });
var constants_2 = constants;
Object.defineProperty(exports, "Events", { enumerable: true, get: function () { return constants_2.Events; } });
Object.defineProperty(exports, "NativeActions", { enumerable: true, get: function () { return constants_2.NativeActions; } });
});

var MobileAd = /** @class */ (function () {
    function MobileAd(_a) {
        var adUnitId = _a.adUnitId;
        this.adUnitId = adUnitId;
        this._id = 10001 + Object.keys(MobileAd.allAds).length;
        MobileAd.allAds[this.id] = this;
    }
    Object.defineProperty(MobileAd.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    MobileAd.allAds = {};
    return MobileAd;
}());
function execAsync(action, args) {
    return new Promise(function (resolve, reject) {
        cordova$1.exec(resolve, reject, dist.NativeActions.Service, action, args);
    });
}
function fireDocumentEvent(eventName, data) {
    if (data === void 0) { data = null; }
    var event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
}
function waitEvent(successEvent, failEvent) {
    if (failEvent === void 0) { failEvent = ''; }
    return new Promise(function (resolve, reject) {
        document.addEventListener(successEvent, function (event) {
            resolve(event);
        }, false);
        if (failEvent) {
            document.addEventListener(failEvent, function (failedEvent) {
                reject(failedEvent);
            }, false);
        }
    });
}
var AdBase = /** @class */ (function () {
    function AdBase(state) {
        this.state = state;
    }
    Object.defineProperty(AdBase.prototype, "testAdUnitID", {
        get: function () {
            switch (this.state.platform) {
                case "android" /* android */:
                    return this.testIdForAndroid;
                case "ios" /* ios */:
                    return this.testIdForIOS;
                default:
                    return "test" /* dummy */;
            }
        },
        enumerable: false,
        configurable: true
    });
    AdBase.prototype.resolveAdUnitID = function (adUnitID) {
        if (adUnitID === "test" /* dummy */ || this.state.devMode) {
            return this.testAdUnitID;
        }
        if (!adUnitID) {
            throw new Error('adUnitID is missing');
        }
        if (typeof adUnitID === 'string') {
            return adUnitID;
        }
        switch (this.state.platform) {
            case "android" /* android */:
            case "ios" /* ios */:
                return adUnitID[this.state.platform];
            default:
                return "test" /* dummy */;
        }
    };
    return AdBase;
}());

var BannerPosition;
(function (BannerPosition) {
    BannerPosition["top"] = "top";
    BannerPosition["bottom"] = "bottom";
})(BannerPosition || (BannerPosition = {}));
var BannerAd = /** @class */ (function (_super) {
    __extends(BannerAd, _super);
    function BannerAd(_a) {
        var adUnitId = _a.adUnitId;
        return _super.call(this, { adUnitId: adUnitId }) || this;
    }
    BannerAd.prototype.show = function (opts) {
        return execAsync(dist.NativeActions.banner_show, [
            __assign(__assign({ position: BannerPosition.bottom, size: dist.AdSizeType.SMART_BANNER }, opts), { adUnitID: this.adUnitId, id: this.id }),
        ]);
    };
    BannerAd.prototype.hide = function () {
        return execAsync(dist.NativeActions.banner_hide, [{ id: this.id }]);
    };
    return BannerAd;
}(MobileAd));
var Banner = /** @class */ (function (_super) {
    __extends(Banner, _super);
    function Banner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testIdForAndroid = "ca-app-pub-3940256099942544/6300978111" /* banner_android */;
        _this.testIdForIOS = "ca-app-pub-3940256099942544/2934735716" /* banner_ios */;
        return _this;
    }
    Banner.prototype.show = function (opts) {
        var adUnitID = this.resolveAdUnitID(opts.id);
        return execAsync(dist.NativeActions.banner_show, [
            __assign(__assign({ position: 'bottom', size: dist.AdSizeType.SMART_BANNER }, opts), { adUnitID: adUnitID, id: this.state.getAdId(adUnitID) }),
        ]);
    };
    Banner.prototype.hide = function (id) {
        var adUnitID = this.resolveAdUnitID(id);
        return execAsync(dist.NativeActions.banner_hide, [
            { id: this.state.getAdId(adUnitID) },
        ]);
    };
    return Banner;
}(AdBase));

var AD_ID = 2;
var Interstitial = /** @class */ (function (_super) {
    __extends(Interstitial, _super);
    function Interstitial() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testIdForAndroid = "ca-app-pub-3940256099942544/1033173712" /* interstitial_android */;
        _this.testIdForIOS = "ca-app-pub-3940256099942544/4411468910" /* interstitial_ios */;
        return _this;
    }
    Interstitial.prototype.isLoaded = function () {
        return execAsync(dist.NativeActions.interstitial_is_loaded, [{ id: AD_ID }]);
    };
    Interstitial.prototype.load = function (opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, execAsync(dist.NativeActions.interstitial_load, [
                            __assign(__assign({}, opts), { adUnitID: this.resolveAdUnitID(opts.id), id: AD_ID }),
                        ])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, waitEvent(dist.Events.interstitial_load, dist.Events.interstitial_load_fail)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Interstitial.prototype.show = function () {
        return execAsync(dist.NativeActions.interstitial_show, [{ id: AD_ID }]);
    };
    return Interstitial;
}(AdBase));

var AD_ID$1 = 3;
var RewardVideo = /** @class */ (function (_super) {
    __extends(RewardVideo, _super);
    function RewardVideo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.testIdForAndroid = "ca-app-pub-3940256099942544/5224354917" /* reward_video_android */;
        _this.testIdForIOS = "ca-app-pub-3940256099942544/1712485313" /* reward_video_ios */;
        return _this;
    }
    RewardVideo.prototype.isReady = function () {
        return execAsync(dist.NativeActions.reward_video_is_ready, [{ id: AD_ID$1 }]);
    };
    RewardVideo.prototype.load = function (opts) {
        if (opts === void 0) { opts = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var adUnitID;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        adUnitID = this.resolveAdUnitID(opts.id);
                        return [4 /*yield*/, execAsync(dist.NativeActions.reward_video_load, [
                                __assign(__assign({}, opts), { adUnitID: adUnitID, id: AD_ID$1 }),
                            ])];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, waitEvent(dist.Events.reward_video_load, dist.Events.reward_video_load_fail)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RewardVideo.prototype.show = function () {
        return execAsync(dist.NativeActions.reward_video_show, [{ id: AD_ID$1 }]);
    };
    return RewardVideo;
}(AdBase));

var AdMobState = /** @class */ (function () {
    function AdMobState() {
        this.devMode = false;
        this.nextId = 100;
        this.adUnits = {};
        this.platform = typeof cordova !== 'undefined' ? cordova.platformId : '';
    }
    AdMobState.prototype.getAdId = function (adUnitId) {
        if (this.adUnits[adUnitId]) {
            return this.adUnits[adUnitId];
        }
        this.adUnits[adUnitId] = this.nextId;
        this.nextId += 1;
        return this.adUnits[adUnitId];
    };
    return AdMobState;
}());

var AdMob = /** @class */ (function () {
    function AdMob() {
        var _this = this;
        var state = new AdMobState();
        this.state = state;
        this.banner = new Banner(state);
        this.interstitial = new Interstitial(state);
        this.rewardVideo = new RewardVideo(state);
        document.addEventListener('deviceready', function () {
            _this.ready();
        }, false);
    }
    Object.defineProperty(AdMob.prototype, "BannerAd", {
        get: function () {
            return BannerAd;
        },
        enumerable: false,
        configurable: true
    });
    AdMob.prototype.setAppMuted = function (value) {
        return execAsync(dist.NativeActions.set_app_muted, [value]);
    };
    AdMob.prototype.setAppVolume = function (value) {
        return execAsync(dist.NativeActions.set_app_volume, [value]);
    };
    AdMob.prototype.setDevMode = function (value) {
        this.state.devMode = value;
    };
    AdMob.prototype.ready = function () {
        var _this = this;
        cordova$1.exec(function (event) {
            _this.state.applicationId = event.data.applicationId;
            fireDocumentEvent(event.type, event.data);
        }, function (err) {
            alert(err);
        }, dist.NativeActions.Service, dist.NativeActions.ready);
    };
    return AdMob;
}());
var admob = new AdMob();

module.exports = admob;

});
