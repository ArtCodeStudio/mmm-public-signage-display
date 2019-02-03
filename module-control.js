/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/module-control.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/module-control.ts":
/*!*******************************!*\
  !*** ./src/module-control.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
Module.register('module-control', {
    defaults: {
        text: 'Hello World!',
    },
    init() {
        Log.log(`[${this.name}] init`);
    },
    loaded(callback) {
        Log.log(`[${this.name}] loaded`);
        callback();
    },
    start() {
        Log.log(`[${this.name}] started`, MM);
    },
    getScripts() {
        return [this.file('js/module-control.js')];
    },
    getStyles() {
        return [this.file('css/module-control.css')];
    },
    getHeader() {
        Log.log(`[${this.name}] getHeader`);
        return this.data.header;
    },
    getTemplate() {
        Log.log(`[${this.name}] getTemplate`);
        return '<div>Hello {{text | safe}}</div>';
    },
    getTemplateData() {
        Log.log(`[${this.name}] getTemplateData`);
        return this.config;
    },
    notificationReceived(notification, payload, sender) {
        Log.log(`[${this.name}] notificationReceived ${notification}`);
    },
    socketNotificationReceived(notification, payload) {
        Log.log(`[${this.name}] notificationReceived ${notification}`);
    },
    suspend() {
        Log.log(`[${this.name}] suspend`);
    },
    resume() {
        Log.log(`[${this.name}] resume`);
    },
});


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS1jb250cm9sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQSxNQUFNLENBQUMsUUFBUSxDQUFDLGdCQUFnQixFQUFFO0lBRWhDLFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxjQUFjO0tBQ3JCO0lBTUQsSUFBSTtRQUNGLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBU0QsTUFBTSxDQUFDLFFBQW9CO1FBQ3pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQztRQUNqQyxRQUFRLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFPRCxLQUFLO1FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBU0QsVUFBVTtRQUNSLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBU0QsU0FBUztRQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBb0NELFNBQVM7UUFDUCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksYUFBYSxDQUFDLENBQUM7UUFDcEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMxQixDQUFDO0lBRUQsV0FBVztRQUNULEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxlQUFlLENBQUMsQ0FBQztRQUN0QyxPQUFPLGtDQUFrQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxlQUFlO1FBQ2IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLG1CQUFtQixDQUFDLENBQUM7UUFDMUMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFTRCxvQkFBb0IsQ0FBSSxZQUFvQixFQUFFLE9BQVUsRUFBRSxNQUFZO1FBQ3BFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSwwQkFBMEIsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBT0QsMEJBQTBCLENBQUksWUFBb0IsRUFBRSxPQUFVO1FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSwwQkFBMEIsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBTUQsT0FBTztRQUNMLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBTUQsTUFBTTtRQUNKLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxVQUFVLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0YsQ0FBQyxDQUFDIiwiZmlsZSI6Im1vZHVsZS1jb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvbW9kdWxlLWNvbnRyb2wudHNcIik7XG4iLCJpbXBvcnQgeyBJTU1Mb2csIElNTU1vZHVsZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFnaWNNaXJyb3JIZWxwZXIge1xuICBnZXRNb2R1bGVzKCk6IElNTU1vZHVsZVtdO1xufVxuXG5kZWNsYXJlIGNvbnN0IE1vZHVsZTogSU1NTW9kdWxlO1xuZGVjbGFyZSBjb25zdCBMb2c6IElNTUxvZztcbmRlY2xhcmUgY29uc3QgTU06IE1hZ2ljTWlycm9ySGVscGVyO1xuXG5Nb2R1bGUucmVnaXN0ZXIoJ21vZHVsZS1jb250cm9sJywge1xuICAvLyBEZWZhdWx0IG1vZHVsZSBjb25maWcuXG4gIGRlZmF1bHRzOiB7XG4gICAgdGV4dDogJ0hlbGxvIFdvcmxkIScsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgbW9kdWxlIGdldHMgaW5zdGFudGlhdGVkLlxuICAgKiBJbiBtb3N0IGNhc2VzIHlvdSBkbyBub3QgbmVlZCB0byBzdWJjbGFzcyB0aGlzIG1ldGhvZC5cbiAgICovXG4gIGluaXQoKTogdm9pZCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gaW5pdGApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgd2hlbiBhIG1vZHVsZSBpcyBsb2FkZWQuXG4gICAqIFN1YnNlcXVlbnQgbW9kdWxlcyBpbiB0aGUgY29uZmlnIGFyZSBub3QgeWV0IGxvYWRlZC5cbiAgICogVGhlIGNhbGxiYWNrIGZ1bmN0aW9uIE1VU1QgYmUgY2FsbGVkIHdoZW4gdGhlIG1vZHVsZSBpcyBkb25lIGxvYWRpbmcuXG4gICAqIEluIG1vc3QgY2FzZXMgeW91IGRvIG5vdCBuZWVkIHRvIHN1YmNsYXNzIHRoaXMgbWV0aG9kLlxuICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICovXG4gIGxvYWRlZChjYWxsYmFjazogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIExvZy5sb2coYFske3RoaXMubmFtZX1dIGxvYWRlZGApO1xuICAgIGNhbGxiYWNrKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGFsbCBtb2R1bGVzIGFyZSBsb2FkZWQgYW4gdGhlIHN5c3RlbSBpcyByZWFkeSB0byBib290IHVwLlxuICAgKiBLZWVwIGluIG1pbmQgdGhhdCB0aGUgZG9tIG9iamVjdCBmb3IgdGhlIG1vZHVsZSBpcyBub3QgeWV0IGNyZWF0ZWQuXG4gICAqIFRoZSBzdGFydCBtZXRob2QgaXMgYSBwZXJmZWN0IHBsYWNlIHRvIGRlZmluZSBhbnkgYWRkaXRpb25hbCBtb2R1bGUgcHJvcGVydGllcy5cbiAgICovXG4gIHN0YXJ0KCk6IHZvaWQge1xuICAgIExvZy5sb2coYFske3RoaXMubmFtZX1dIHN0YXJ0ZWRgLCBNTSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBnZXRTY3JpcHRzIG1ldGhvZCBpcyBjYWxsZWQgdG8gcmVxdWVzdCBhbnkgYWRkaXRpb25hbCBzY3JpcHRzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQuXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aGVyZWZvcmUgcmV0dXJuIGFuIGFycmF5IHdpdGggc3RyaW5ncy5cbiAgICogSWYgeW91IHdhbnQgdG8gcmV0dXJuIGEgZnVsbCBwYXRoIHRvIGEgZmlsZSBpbiB0aGUgbW9kdWxlIGZvbGRlciwgdXNlIHRoZSBgdGhpcy5maWxlKCdmaWxlbmFtZS5qcycpYCBtZXRob2QuXG4gICAqIEluIGFsbCBjYXNlcyB0aGUgbG9hZGVyIHdpbGwgb25seSBsb2FkIGEgZmlsZSBvbmNlLlxuICAgKiBJdCBldmVuIGNoZWNrcyBpZiB0aGUgZmlsZSBpcyBhdmFpbGFibGUgaW4gdGhlIGRlZmF1bHQgdmVuZG9yIGZvbGRlci5cbiAgICovXG4gIGdldFNjcmlwdHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbdGhpcy5maWxlKCdqcy9tb2R1bGUtY29udHJvbC5qcycpXTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGdldFN0eWxlcyBtZXRob2QgaXMgY2FsbGVkIHRvIHJlcXVlc3QgYW55IGFkZGl0aW9uYWwgc3R5bGVzaGVldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZC5cbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBzdHJpbmdzLlxuICAgKiBJZiB5b3Ugd2FudCB0byByZXR1cm4gYSBmdWxsIHBhdGggdG8gYSBmaWxlIGluIHRoZSBtb2R1bGUgZm9sZGVyLCB1c2UgdGhlIGB0aGlzLmZpbGUoJ2ZpbGVuYW1lLmNzcycpYCBtZXRob2QuXG4gICAqIEluIGFsbCBjYXNlcyB0aGUgbG9hZGVyIHdpbGwgb25seSBsb2FkIGEgZmlsZSBvbmNlLlxuICAgKiBJdCBldmVuIGNoZWNrcyBpZiB0aGUgZmlsZSBpcyBhdmFpbGFibGUgaW4gdGhlIGRlZmF1bHQgdmVuZG9yIGZvbGRlci5cbiAgICovXG4gIGdldFN0eWxlcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFt0aGlzLmZpbGUoJ2Nzcy9tb2R1bGUtY29udHJvbC5jc3MnKV07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBnZXRUcmFuc2xhdGlvbnMgbWV0aG9kIGlzIGNhbGxlZCB0byByZXF1ZXN0IHRyYW5zbGF0aW9uIGZpbGVzIHRoYXQgbmVlZCB0byBiZSBsb2FkZWQuXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aGVyZWZvcmUgcmV0dXJuIGEgZGljdGlvbmFyeSB3aXRoIHRoZSBmaWxlcyB0byBsb2FkLCBpZGVudGlmaWVkIGJ5IHRoZSBjb3VudHJ5J3Mgc2hvcnQgbmFtZS5cbiAgICogSWYgdGhlIG1vZHVsZSBkb2VzIG5vdCBoYXZlIGFueSBtb2R1bGUgc3BlY2lmaWMgdHJhbnNsYXRpb25zLCB0aGUgZnVuY3Rpb24gY2FuIGp1c3QgYmUgb21pdHRlZCBvciByZXR1cm4gYGZhbHNlYC5cbiAgICovXG4gIC8vIGdldFRyYW5zbGF0aW9ucygpIHtcbiAgLy8gICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBnZXRUcmFuc2xhdGlvbnNgKTtcbiAgLy8gICByZXR1cm4ge1xuICAvLyAgICAgZW46ICd0cmFuc2xhdGlvbnMvZW4uanNvbicsXG4gIC8vICAgICBkZTogJ3RyYW5zbGF0aW9ucy9kZS5qc29uJ1xuICAvLyAgIH1cbiAgLy8gfSxcblxuICAvKipcbiAgICogV2hlbmV2ZXIgdGhlIE1hZ2ljTWlycm9yIG5lZWRzIHRvIHVwZGF0ZSB0aGUgaW5mb3JtYXRpb24gb24gc2NyZWVuXG4gICAqIChiZWNhdXNlIGl0IHN0YXJ0cywgb3IgYmVjYXVzZSB5b3VyIG1vZHVsZSBhc2tlZCBhIHJlZnJlc2ggdXNpbmcgdGhpcy51cGRhdGVEb20oKSksXG4gICAqIHRoZSBzeXN0ZW0gY2FsbHMgdGhlIGdldERvbSBtZXRob2QuIFRoaXMgbWV0aG9kIHNob3VsZCB0aGVyZWZvcmUgcmV0dXJuIGEgZG9tIG9iamVjdC5cbiAgICovXG4gIC8vIGdldERvbSgpOiBIVE1MRWxlbWVudCB7XG4gIC8vICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gZ2V0RG9tYCk7XG4gIC8vICAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyAgIHdyYXBwZXIuaW5uZXJIVE1MID0gJ0hlbGxvIHdvcmxkISc7XG4gIC8vICAgcmV0dXJuIHdyYXBwZXI7XG4gIC8vIH0sXG5cbiAgLyoqXG4gICAqIFdoZW5ldmVyIHRoZSBNYWdpY01pcnJvciBuZWVkcyB0byB1cGRhdGUgdGhlIGluZm9ybWF0aW9uIG9uIHNjcmVlbiAoYmVjYXVzZSBpdCBzdGFydHMsXG4gICAqIG9yIGJlY2F1c2UgeW91ciBtb2R1bGUgYXNrZWQgYSByZWZyZXNoIHVzaW5nIGB0aGlzLnVwZGF0ZURvbSgpYCksXG4gICAqIHRoZSBzeXN0ZW0gY2FsbHMgdGhlIGdldEhlYWRlciBtZXRob2QgdG8gcmV0cmlldmUgdGhlIG1vZHVsZSdzIGhlYWRlci5cbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yIHJldHVybiBhIHN0cmluZy4gSWYgdGhpcyBtZXRob2QgaXMgbm90IHN1YmNsYXNzZWQsXG4gICAqIHRoaXMgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIHVzZXIncyBjb25maWd1cmVkIGhlYWRlci5cbiAgICpcbiAgICogSWYgeW91IHdhbnQgdG8gdXNlIHRoZSBvcmlnaW5hbCB1c2VyJ3MgY29uZmlndXJlZCBoZWFkZXIsIHJlZmVyZW5jZSBgdGhpcy5kYXRhLmhlYWRlcmAuXG4gICAqL1xuICBnZXRIZWFkZXIoKTogc3RyaW5nIHtcbiAgICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBnZXRIZWFkZXJgKTtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmhlYWRlcjtcbiAgfSxcblxuICBnZXRUZW1wbGF0ZSgpOiBzdHJpbmcge1xuICAgIExvZy5sb2coYFske3RoaXMubmFtZX1dIGdldFRlbXBsYXRlYCk7XG4gICAgcmV0dXJuICc8ZGl2PkhlbGxvIHt7dGV4dCB8IHNhZmV9fTwvZGl2Pic7XG4gIH0sXG5cbiAgZ2V0VGVtcGxhdGVEYXRhKCk6IG9iamVjdCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gZ2V0VGVtcGxhdGVEYXRhYCk7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGF0IE1hZ2ljTWlycm9yIGNvcmUgaGFzIHRoZSBhYmlsaXR5IHRvIHNlbmQgbm90aWZpY2F0aW9ucyB0byBtb2R1bGVzLlxuICAgKiBPciBldmVuIGJldHRlcjogdGhlIG1vZHVsZXMgaGF2ZSB0aGUgcG9zc2liaWxpdHkgdG8gc2VuZCBub3RpZmljYXRpb25zIHRvIG90aGVyIG1vZHVsZXMuXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb24gVGhlIG5vdGlmaWNhdGlvbiBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gcGF5bG9hZCBUaGUgcGF5bG9hZCBvZiBhIG5vdGlmaWNhdGlvbi5cbiAgICogQHBhcmFtIHNlbmRlciBoZSBzZW5kZXIgb2YgdGhlIG5vdGlmaWNhdGlvbi4gSWYgdGhpcyBhcmd1bWVudCBpcyBgdW5kZWZpbmVkYCwgdGhlIHNlbmRlciBvZiB0aGUgbm90aWZpZmljdGlvbiBpcyB0aGUgY29yZSBzeXN0ZW0uXG4gICAqL1xuICBub3RpZmljYXRpb25SZWNlaXZlZDxUPihub3RpZmljYXRpb246IHN0cmluZywgcGF5bG9hZDogVCwgc2VuZGVyPzogYW55KTogdm9pZCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gbm90aWZpY2F0aW9uUmVjZWl2ZWQgJHtub3RpZmljYXRpb259YCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gdXNpbmcgYSBub2RlX2hlbHBlciwgdGhlIG5vZGUgaGVscGVyIGNhbiBzZW5kIHlvdXIgbW9kdWxlIG5vdGlmaWNhdGlvbnMuXG4gICAqIEBwYXJhbSBub3RpZmljYXRpb24gVGhlIG5vdGlmaWNhdGlvbiBpZGVudGlmaWVyLlxuICAgKiBAcGFyYW0gcGF5bG9hZCBUaGUgcGF5bG9hZCBvZiBhIG5vdGlmaWNhdGlvbi5cbiAgICovXG4gIHNvY2tldE5vdGlmaWNhdGlvblJlY2VpdmVkPFQ+KG5vdGlmaWNhdGlvbjogc3RyaW5nLCBwYXlsb2FkOiBUKTogdm9pZCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gbm90aWZpY2F0aW9uUmVjZWl2ZWQgJHtub3RpZmljYXRpb259YCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gYSBtb2R1bGUgaXMgaGlkZGVuICh1c2luZyB0aGUgbW9kdWxlLmhpZGUoKSBtZXRob2QpLCB0aGUgc3VzcGVuZCgpIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC5cbiAgICogQnkgc3ViY2xhc3NpbmcgdGhpcyBtZXRob2QgeW91IGNhbiBwZXJmb3JtIHRhc2tzIGxpa2UgaGFsdGluZyB0aGUgdXBkYXRlIHRpbWVycy5cbiAgICovXG4gIHN1c3BlbmQoKTogdm9pZCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gc3VzcGVuZGApO1xuICB9LFxuXG4gIC8qKlxuICAgKiBXaGVuIGEgbW9kdWxlIGlzIHJlcXVlc3RlZCB0byBiZSBzaG93biAodXNpbmcgdGhlIG1vZHVsZS5zaG93KCkgbWV0aG9kKSwgdGhlIHJlc3VtZSgpIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC5cbiAgICogQnkgc3ViY2xhc3NpbmcgdGhpcyBtZXRob2QgeW91IGNhbiBwZXJmb3JtIHRhc2tzIHJlc3RhcnRpbmcgdGhlIHVwZGF0ZSB0aW1lcnMuXG4gICAqL1xuICByZXN1bWUoKTogdm9pZCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gcmVzdW1lYCk7XG4gIH0sXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=