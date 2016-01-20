(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("var EventEmitter_ts_1 = __webpack_require__(1);\n/**\n* Represents a timescale\n*/\n/* @Mixin(EventEmitter)*/\nvar TimeScale = (function () {\n    /**\n     * Constructor for the timescale\n     */\n    function TimeScale(element, dimensions) {\n        this._dimensions = { width: 500, height: 500 };\n        this._eventEmitter = new EventEmitter_ts_1.default();\n        this.element = element;\n        this.x = d3.time.scale();\n        this.y = d3.scale.linear();\n        this.buildTimeScale();\n        if (!this.dimensions) {\n            this.resizeElements();\n        }\n        else {\n            this.dimensions = dimensions;\n        }\n    }\n    Object.defineProperty(TimeScale.prototype, \"data\", {\n        /**\n         * Returns the data contained in this timescale\n         */\n        get: function () {\n            return this._data;\n        },\n        /**\n         * Setter for the data\n         */\n        set: function (data) {\n            this._data = data;\n            this.x.domain(d3.extent(data.map(function (d) { return d.date; })));\n            this.y.domain([0, d3.max(data.map(function (d) { return d.value; }))]);\n            this.resizeElements();\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(TimeScale.prototype, \"events\", {\n        /**\n         * Gets an event emitter by which events can be listened to\n         * Note: Would be nice if we could mixin EventEmitter\n         */\n        get: function () {\n            return this._eventEmitter;\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(TimeScale.prototype, \"dimensions\", {\n        /**\n         * Gets the dimensions of this timescale\n         */\n        get: function () {\n            return this._dimensions;\n        },\n        /**\n         * Sets the dimensions of this timescale\n         */\n        set: function (value) {\n            $.extend(this._dimensions, value);\n            this.resizeElements();\n        },\n        enumerable: true,\n        configurable: true\n    });\n    Object.defineProperty(TimeScale.prototype, \"selectedRange\", {\n        /**\n         * Sets the currently selected range of dates\n         */\n        set: function (dates) {\n            if (dates && dates.length) {\n                this.brush.extent(dates);\n                this.brush(d3.select(this.element.find(\".brush\")[0]));\n                // now fire the brushstart, brushmove, and brushend events\n                // remove transition so just d3.select(\".brush\") to just draw\n                this.brush[\"event\"](d3.select(this.element.find(\".brush\")[0]).transition().delay(1000));\n            }\n        },\n        enumerable: true,\n        configurable: true\n    });\n    /**\n     * Builds the initial timescale\n     */\n    TimeScale.prototype.buildTimeScale = function () {\n        var _this = this;\n        this.svg = d3.select(this.element[0]).append(\"svg\");\n        this.clip = this.svg.append(\"defs\").append(\"clipPath\")\n            .attr(\"id\", \"clip\")\n            .append(\"rect\");\n        this.context = this.svg.append(\"g\")\n            .attr(\"class\", \"context\");\n        this.bars = this.context.append(\"g\")\n            .attr(\"class\", \"bars\")\n            .style(\"fill\", \"rgba(0,100,200,.5)\");\n        this.xAxis = this.context.append(\"g\")\n            .attr(\"class\", \"x axis\");\n        var brushed = _.debounce(function () {\n            _this.events.raiseEvent(\"rangeSelected\", _this.brush.empty() ? [] : _this.brush.extent());\n        }, 200);\n        this.brush = d3.svg.brush()\n            .on(\"brush\", brushed);\n    };\n    /**\n     * Resizes all the elements in the graph\n     */\n    TimeScale.prototype.resizeElements = function () {\n        var _this = this;\n        var margin = { top: 0, right: 10, bottom: 20, left: 10 }, width = this._dimensions.width - margin.left - margin.right, height = this._dimensions.height - margin.top - margin.bottom;\n        this.x.range([0, width]);\n        this.y.range([0, height]);\n        if (this.bars && this._data) {\n            var tmp = this.bars\n                .selectAll(\"rect\")\n                .data(this._data);\n            tmp\n                .enter().append(\"rect\");\n            tmp\n                .attr(\"transform\", function (d, i) {\n                var rectHeight = _this.y(d.value);\n                return \"translate(\" + _this.x(d.date) + \",\" + (height - rectHeight) + \")\";\n            })\n                .style({ \"width\": 2 })\n                .style(\"height\", function (d) {\n                return _this.y(d.value);\n            });\n            tmp.exit().remove();\n        }\n        this.svg\n            .attr(\"width\", width + margin.left + margin.right)\n            .attr(\"height\", height + margin.top + margin.bottom);\n        this.clip\n            .attr(\"width\", width)\n            .attr(\"height\", height);\n        this.xAxis\n            .attr(\"transform\", \"translate(0,\" + height + \")\")\n            .call(d3.svg.axis().scale(this.x).orient(\"bottom\"));\n        this.context\n            .attr(\"transform\", \"translate(\" + margin.left + \",\" + margin.top + \")\");\n        this.brush.x(this.x);\n        // Need to recreate the brush element for some reason\n        d3.selectAll(this.element.find(\".x.brush\").toArray()).remove();\n        this.brushEle = this.context.append(\"g\")\n            .attr(\"class\", \"x brush\")\n            .call(this.brush)\n            .selectAll(\"rect\")\n            .attr(\"height\", height + 7)\n            .attr(\"y\", -6);\n        this.brushGrip = d3.select(this.element.find(\".x.brush\")[0])\n            .selectAll(\".resize\").append(\"rect\")\n            .attr('x', -3)\n            .attr('rx', 2)\n            .attr('ry', 2)\n            .attr(\"y\", (height / 2) - 15)\n            .attr(\"width\", 6)\n            .attr(\"fill\", \"lightgray\")\n            .attr(\"height\", 30);\n    };\n    return TimeScale;\n})();\nexports.TimeScale = TimeScale;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./visuals/timescale/TimeScale.ts\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./visuals/timescale/TimeScale.ts?");

/***/ },
/* 1 */
/***/ function(module, exports) {

	eval("/**\n * A mixin that adds support for event emitting\n */\nvar EventEmitter = (function () {\n    function EventEmitter() {\n        this.listeners = {};\n    }\n    /**\n     * Adds an event listener for the given event\n     */\n    EventEmitter.prototype.on = function (name, handler) {\n        var _this = this;\n        var listeners = this.listeners[name] = this.listeners[name] || [];\n        listeners.push(handler);\n        return {\n            destroy: function () {\n                _this.off(name, handler);\n            }\n        };\n    };\n    /**\n     * Removes an event listener for the given event\n     */\n    EventEmitter.prototype.off = function (name, handler) {\n        var listeners = this.listeners[name];\n        if (listeners) {\n            var idx = listeners.indexOf(handler);\n            if (idx >= 0) {\n                listeners.splice(idx, 1);\n            }\n        }\n    };\n    /**\n     * Raises the given event\n     */\n    /*protected*/ EventEmitter.prototype.raiseEvent = function (name) {\n        var _this = this;\n        var args = [];\n        for (var _i = 1; _i < arguments.length; _i++) {\n            args[_i - 1] = arguments[_i];\n        }\n        var listeners = this.listeners[name];\n        if (listeners) {\n            listeners.forEach(function (l) {\n                l.apply(_this, args);\n            });\n        }\n    };\n    return EventEmitter;\n})();\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.default = EventEmitter;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./base/EventEmitter.ts\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./base/EventEmitter.ts?");

/***/ }
/******/ ])
});
;