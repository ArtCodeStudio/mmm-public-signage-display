!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),console.log("[module-control] Module",Module,Module.register),Module.register("module-control",{defaults:{text:"Hello World!"},init(){Log.log(`[${this.name}] init`)},loaded(e){Log.log(`[${this.name}] loaded`),e()},start(){Log.log(`[${this.name}] started`,MM)},getScripts(){return[this.file("js/module-control.js")]},getStyles(){return[this.file("css/module-control.css")]},getHeader(){return Log.log(`[${this.name}] getHeader`),this.data.header},getTemplate(){return Log.log(`[${this.name}] getTemplate`),"<div>Hello {{text | safe}}</div>"},getTemplateData(){return Log.log(`[${this.name}] getTemplateData`),this.config},notificationReceived(e,t,o){Log.log(`[${this.name}] notificationReceived ${e}`)},socketNotificationReceived(e,t){Log.log(`[${this.name}] notificationReceived ${e}`)},suspend(){Log.log(`[${this.name}] suspend`)},resume(){Log.log(`[${this.name}] resume`)}})}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZHVsZS1jb250cm9sLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiY29uc29sZSIsImxvZyIsIk1vZHVsZSIsInJlZ2lzdGVyIiwiZGVmYXVsdHMiLCJ0ZXh0IiwiW29iamVjdCBPYmplY3RdIiwiTG9nIiwidGhpcyIsImNhbGxiYWNrIiwiTU0iLCJmaWxlIiwiZGF0YSIsImhlYWRlciIsImNvbmZpZyIsIm5vdGlmaWNhdGlvbiIsInBheWxvYWQiLCJzZW5kZXIiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEVBQUEsR0FHQSxTQUFBQyxFQUFBQyxHQUdBLEdBQUFGLEVBQUFFLEdBQ0EsT0FBQUYsRUFBQUUsR0FBQUMsUUFHQSxJQUFBQyxFQUFBSixFQUFBRSxHQUFBLENBQ0FHLEVBQUFILEVBQ0FJLEdBQUEsRUFDQUgsUUFBQSxJQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxFQUFBLENBQTBDSyxZQUFBLEVBQUFDLElBQUFMLEtBSzFDWixFQUFBa0IsRUFBQSxTQUFBaEIsR0FDQSxvQkFBQWlCLGVBQUFDLGFBQ0FOLE9BQUFDLGVBQUFiLEVBQUFpQixPQUFBQyxZQUFBLENBQXdEQyxNQUFBLFdBRXhEUCxPQUFBQyxlQUFBYixFQUFBLGNBQWlEbUIsT0FBQSxLQVFqRHJCLEVBQUFzQixFQUFBLFNBQUFELEVBQUFFLEdBRUEsR0FEQSxFQUFBQSxJQUFBRixFQUFBckIsRUFBQXFCLElBQ0EsRUFBQUUsRUFBQSxPQUFBRixFQUNBLEtBQUFFLEdBQUEsaUJBQUFGLFFBQUFHLFdBQUEsT0FBQUgsRUFDQSxJQUFBSSxFQUFBWCxPQUFBWSxPQUFBLE1BR0EsR0FGQTFCLEVBQUFrQixFQUFBTyxHQUNBWCxPQUFBQyxlQUFBVSxFQUFBLFdBQXlDVCxZQUFBLEVBQUFLLFVBQ3pDLEVBQUFFLEdBQUEsaUJBQUFGLEVBQUEsUUFBQU0sS0FBQU4sRUFBQXJCLEVBQUFVLEVBQUFlLEVBQUFFLEVBQUEsU0FBQUEsR0FBZ0gsT0FBQU4sRUFBQU0sSUFBcUJDLEtBQUEsS0FBQUQsSUFDckksT0FBQUYsR0FJQXpCLEVBQUE2QixFQUFBLFNBQUExQixHQUNBLElBQUFTLEVBQUFULEtBQUFxQixXQUNBLFdBQTJCLE9BQUFyQixFQUFBLFNBQzNCLFdBQWlDLE9BQUFBLEdBRWpDLE9BREFILEVBQUFVLEVBQUFFLEVBQUEsSUFBQUEsR0FDQUEsR0FJQVosRUFBQWEsRUFBQSxTQUFBaUIsRUFBQUMsR0FBc0QsT0FBQWpCLE9BQUFrQixVQUFBQyxlQUFBMUIsS0FBQXVCLEVBQUFDLElBR3REL0IsRUFBQWtDLEVBQUEsR0FJQWxDLElBQUFtQyxFQUFBLG1GQzVFQUMsUUFBUUMsSUFBSSwwQkFBMkJDLE9BQVFBLE9BQU9DLFVBTXRERCxPQUFPQyxTQUFTLGlCQUFrQixDQUVoQ0MsU0FBVSxDQUNSQyxLQUFNLGdCQU9SQyxPQUNFQyxJQUFJTixRQUFRTyxLQUFLakMsZUFVbkIrQixPQUFPRyxHQUNMRixJQUFJTixRQUFRTyxLQUFLakMsZ0JBQ2pCa0MsS0FRRkgsUUFDRUMsSUFBSU4sUUFBUU8sS0FBS2pDLGdCQUFpQm1DLEtBVXBDSixhQUNFLE1BQU8sQ0FBQ0UsS0FBS0csS0FBSywwQkFVcEJMLFlBQ0UsTUFBTyxDQUFDRSxLQUFLRyxLQUFLLDRCQXFDcEJMLFlBRUUsT0FEQUMsSUFBSU4sUUFBUU8sS0FBS2pDLG1CQUNWaUMsS0FBS0ksS0FBS0MsUUFHbkJQLGNBRUUsT0FEQUMsSUFBSU4sUUFBUU8sS0FBS2pDLHFCQUNWLG9DQUdUK0Isa0JBRUUsT0FEQUMsSUFBSU4sUUFBUU8sS0FBS2pDLHlCQUNWaUMsS0FBS00sUUFVZFIscUJBQXdCUyxFQUFzQkMsRUFBWUMsR0FDeERWLElBQUlOLFFBQVFPLEtBQUtqQyw4QkFBOEJ3QyxNQVFqRFQsMkJBQThCUyxFQUFzQkMsR0FDbERULElBQUlOLFFBQVFPLEtBQUtqQyw4QkFBOEJ3QyxNQU9qRFQsVUFDRUMsSUFBSU4sUUFBUU8sS0FBS2pDLGtCQU9uQitCLFNBQ0VDLElBQUlOLFFBQVFPLEtBQUtqQyIsImZpbGUiOiJtb2R1bGUtY29udHJvbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCB7IExvZyBhcyBNTUxvZywgTW9kdWxlIGFzIE1NTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vbW9kdWxlLXR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBNYWdpY01pcnJvckhlbHBlciB7XG4gIGdldE1vZHVsZXMoKTogQXJyYXk8dHlwZW9mIE1NTW9kdWxlPlxufVxuXG5jb25zb2xlLmxvZygnW21vZHVsZS1jb250cm9sXSBNb2R1bGUnLCBNb2R1bGUsIE1vZHVsZS5yZWdpc3Rlcik7XG5cbmRlY2xhcmUgY29uc3QgTW9kdWxlOiB0eXBlb2YgTU1Nb2R1bGU7XG5kZWNsYXJlIGNvbnN0IExvZzogdHlwZW9mIE1NTG9nO1xuZGVjbGFyZSBjb25zdCBNTTogTWFnaWNNaXJyb3JIZWxwZXI7XG5cbk1vZHVsZS5yZWdpc3RlcihcIm1vZHVsZS1jb250cm9sXCIsIHtcbiAgLy8gRGVmYXVsdCBtb2R1bGUgY29uZmlnLlxuICBkZWZhdWx0czoge1xuICAgIHRleHQ6IFwiSGVsbG8gV29ybGQhXCJcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gYSBtb2R1bGUgZ2V0cyBpbnN0YW50aWF0ZWQuXG4gICAqIEluIG1vc3QgY2FzZXMgeW91IGRvIG5vdCBuZWVkIHRvIHN1YmNsYXNzIHRoaXMgbWV0aG9kLlxuICAgKi9cbiAgaW5pdCgpOiB2b2lkIHtcbiAgICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBpbml0YCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGlzIGNhbGxlZCB3aGVuIGEgbW9kdWxlIGlzIGxvYWRlZC5cbiAgICogU3Vic2VxdWVudCBtb2R1bGVzIGluIHRoZSBjb25maWcgYXJlIG5vdCB5ZXQgbG9hZGVkLlxuICAgKiBUaGUgY2FsbGJhY2sgZnVuY3Rpb24gTVVTVCBiZSBjYWxsZWQgd2hlbiB0aGUgbW9kdWxlIGlzIGRvbmUgbG9hZGluZy5cbiAgICogSW4gbW9zdCBjYXNlcyB5b3UgZG8gbm90IG5lZWQgdG8gc3ViY2xhc3MgdGhpcyBtZXRob2QuXG4gICAqIEBwYXJhbSBjYWxsYmFja1xuICAgKi9cbiAgbG9hZGVkKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gbG9hZGVkYCk7XG4gICAgY2FsbGJhY2soKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhpcyBtZXRob2QgaXMgY2FsbGVkIHdoZW4gYWxsIG1vZHVsZXMgYXJlIGxvYWRlZCBhbiB0aGUgc3lzdGVtIGlzIHJlYWR5IHRvIGJvb3QgdXAuXG4gICAqIEtlZXAgaW4gbWluZCB0aGF0IHRoZSBkb20gb2JqZWN0IGZvciB0aGUgbW9kdWxlIGlzIG5vdCB5ZXQgY3JlYXRlZC5cbiAgICogVGhlIHN0YXJ0IG1ldGhvZCBpcyBhIHBlcmZlY3QgcGxhY2UgdG8gZGVmaW5lIGFueSBhZGRpdGlvbmFsIG1vZHVsZSBwcm9wZXJ0aWVzLlxuICAgKi9cbiAgc3RhcnQoKTogdm9pZCB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gc3RhcnRlZGAsIE1NKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGdldFNjcmlwdHMgbWV0aG9kIGlzIGNhbGxlZCB0byByZXF1ZXN0IGFueSBhZGRpdGlvbmFsIHNjcmlwdHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZC5cbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBzdHJpbmdzLlxuICAgKiBJZiB5b3Ugd2FudCB0byByZXR1cm4gYSBmdWxsIHBhdGggdG8gYSBmaWxlIGluIHRoZSBtb2R1bGUgZm9sZGVyLCB1c2UgdGhlIGB0aGlzLmZpbGUoJ2ZpbGVuYW1lLmpzJylgIG1ldGhvZC5cbiAgICogSW4gYWxsIGNhc2VzIHRoZSBsb2FkZXIgd2lsbCBvbmx5IGxvYWQgYSBmaWxlIG9uY2UuXG4gICAqIEl0IGV2ZW4gY2hlY2tzIGlmIHRoZSBmaWxlIGlzIGF2YWlsYWJsZSBpbiB0aGUgZGVmYXVsdCB2ZW5kb3IgZm9sZGVyLlxuICAgKi9cbiAgZ2V0U2NyaXB0cygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW3RoaXMuZmlsZShcImpzL21vZHVsZS1jb250cm9sLmpzXCIpXTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGdldFN0eWxlcyBtZXRob2QgaXMgY2FsbGVkIHRvIHJlcXVlc3QgYW55IGFkZGl0aW9uYWwgc3R5bGVzaGVldHMgdGhhdCBuZWVkIHRvIGJlIGxvYWRlZC5cbiAgICogVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yZSByZXR1cm4gYW4gYXJyYXkgd2l0aCBzdHJpbmdzLlxuICAgKiBJZiB5b3Ugd2FudCB0byByZXR1cm4gYSBmdWxsIHBhdGggdG8gYSBmaWxlIGluIHRoZSBtb2R1bGUgZm9sZGVyLCB1c2UgdGhlIGB0aGlzLmZpbGUoJ2ZpbGVuYW1lLmNzcycpYCBtZXRob2QuXG4gICAqIEluIGFsbCBjYXNlcyB0aGUgbG9hZGVyIHdpbGwgb25seSBsb2FkIGEgZmlsZSBvbmNlLlxuICAgKiBJdCBldmVuIGNoZWNrcyBpZiB0aGUgZmlsZSBpcyBhdmFpbGFibGUgaW4gdGhlIGRlZmF1bHQgdmVuZG9yIGZvbGRlci5cbiAgICovXG4gIGdldFN0eWxlcygpOiBBcnJheTxzdHJpbmc+IHtcbiAgICByZXR1cm4gW3RoaXMuZmlsZShcImNzcy9tb2R1bGUtY29udHJvbC5jc3NcIildO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZ2V0VHJhbnNsYXRpb25zIG1ldGhvZCBpcyBjYWxsZWQgdG8gcmVxdWVzdCB0cmFuc2xhdGlvbiBmaWxlcyB0aGF0IG5lZWQgdG8gYmUgbG9hZGVkLlxuICAgKiBUaGlzIG1ldGhvZCBzaG91bGQgdGhlcmVmb3JlIHJldHVybiBhIGRpY3Rpb25hcnkgd2l0aCB0aGUgZmlsZXMgdG8gbG9hZCwgaWRlbnRpZmllZCBieSB0aGUgY291bnRyeSdzIHNob3J0IG5hbWUuXG4gICAqIElmIHRoZSBtb2R1bGUgZG9lcyBub3QgaGF2ZSBhbnkgbW9kdWxlIHNwZWNpZmljIHRyYW5zbGF0aW9ucywgdGhlIGZ1bmN0aW9uIGNhbiBqdXN0IGJlIG9taXR0ZWQgb3IgcmV0dXJuIGBmYWxzZWAuXG4gICAqL1xuICAvLyBnZXRUcmFuc2xhdGlvbnMoKSB7XG4gIC8vICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gZ2V0VHJhbnNsYXRpb25zYCk7XG4gIC8vICAgcmV0dXJuIHtcbiAgLy8gICAgIGVuOiBcInRyYW5zbGF0aW9ucy9lbi5qc29uXCIsXG4gIC8vICAgICBkZTogXCJ0cmFuc2xhdGlvbnMvZGUuanNvblwiXG4gIC8vICAgfVxuICAvLyB9LFxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciB0aGUgTWFnaWNNaXJyb3IgbmVlZHMgdG8gdXBkYXRlIHRoZSBpbmZvcm1hdGlvbiBvbiBzY3JlZW5cbiAgICogKGJlY2F1c2UgaXQgc3RhcnRzLCBvciBiZWNhdXNlIHlvdXIgbW9kdWxlIGFza2VkIGEgcmVmcmVzaCB1c2luZyB0aGlzLnVwZGF0ZURvbSgpKSxcbiAgICogdGhlIHN5c3RlbSBjYWxscyB0aGUgZ2V0RG9tIG1ldGhvZC4gVGhpcyBtZXRob2Qgc2hvdWxkIHRoZXJlZm9yZSByZXR1cm4gYSBkb20gb2JqZWN0LlxuICAgKi9cbiAgLy8gZ2V0RG9tKCk6IEhUTUxFbGVtZW50IHtcbiAgLy8gICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBnZXREb21gKTtcbiAgLy8gICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgLy8gICB3cmFwcGVyLmlubmVySFRNTCA9ICdIZWxsbyB3b3JsZCEnO1xuICAvLyAgIHJldHVybiB3cmFwcGVyO1xuICAvLyB9LFxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciB0aGUgTWFnaWNNaXJyb3IgbmVlZHMgdG8gdXBkYXRlIHRoZSBpbmZvcm1hdGlvbiBvbiBzY3JlZW4gKGJlY2F1c2UgaXQgc3RhcnRzLFxuICAgKiBvciBiZWNhdXNlIHlvdXIgbW9kdWxlIGFza2VkIGEgcmVmcmVzaCB1c2luZyBgdGhpcy51cGRhdGVEb20oKWApLFxuICAgKiB0aGUgc3lzdGVtIGNhbGxzIHRoZSBnZXRIZWFkZXIgbWV0aG9kIHRvIHJldHJpZXZlIHRoZSBtb2R1bGUncyBoZWFkZXIuXG4gICAqIFRoaXMgbWV0aG9kIHNob3VsZCB0aGVyZWZvciByZXR1cm4gYSBzdHJpbmcuIElmIHRoaXMgbWV0aG9kIGlzIG5vdCBzdWJjbGFzc2VkLFxuICAgKiB0aGlzIGZ1bmN0aW9uIHdpbGwgcmV0dXJuIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBoZWFkZXIuXG4gICAqIFxuICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgdGhlIG9yaWdpbmFsIHVzZXIncyBjb25maWd1cmVkIGhlYWRlciwgcmVmZXJlbmNlIGB0aGlzLmRhdGEuaGVhZGVyYC5cbiAgICovXG4gIGdldEhlYWRlcigpOiBzdHJpbmcge1xuICAgIExvZy5sb2coYFske3RoaXMubmFtZX1dIGdldEhlYWRlcmApO1xuICAgIHJldHVybiB0aGlzLmRhdGEuaGVhZGVyO1xuICB9LFxuXG4gIGdldFRlbXBsYXRlKCk6IHN0cmluZyB7XG4gICAgTG9nLmxvZyhgWyR7dGhpcy5uYW1lfV0gZ2V0VGVtcGxhdGVgKTtcbiAgICByZXR1cm4gJzxkaXY+SGVsbG8ge3t0ZXh0IHwgc2FmZX19PC9kaXY+JztcbiAgfSxcblxuICBnZXRUZW1wbGF0ZURhdGEoKTogb2JqZWN0IHtcbiAgICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBnZXRUZW1wbGF0ZURhdGFgKTtcbiAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoYXQgTWFnaWNNaXJyb3IgY29yZSBoYXMgdGhlIGFiaWxpdHkgdG8gc2VuZCBub3RpZmljYXRpb25zIHRvIG1vZHVsZXMuXG4gICAqIE9yIGV2ZW4gYmV0dGVyOiB0aGUgbW9kdWxlcyBoYXZlIHRoZSBwb3NzaWJpbGl0eSB0byBzZW5kIG5vdGlmaWNhdGlvbnMgdG8gb3RoZXIgbW9kdWxlcy5cbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbiBUaGUgbm90aWZpY2F0aW9uIGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSBwYXlsb2FkIFRoZSBwYXlsb2FkIG9mIGEgbm90aWZpY2F0aW9uLlxuICAgKiBAcGFyYW0gc2VuZGVyIGhlIHNlbmRlciBvZiB0aGUgbm90aWZpY2F0aW9uLiBJZiB0aGlzIGFyZ3VtZW50IGlzIGB1bmRlZmluZWRgLCB0aGUgc2VuZGVyIG9mIHRoZSBub3RpZmlmaWN0aW9uIGlzIHRoZSBjb3JlIHN5c3RlbS5cbiAgICovXG4gIG5vdGlmaWNhdGlvblJlY2VpdmVkPFQ+KG5vdGlmaWNhdGlvbjogc3RyaW5nLCBwYXlsb2FkOiBULCBzZW5kZXI/OiBhbnkpOiB2b2lkIHtcbiAgICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBub3RpZmljYXRpb25SZWNlaXZlZCAke25vdGlmaWNhdGlvbn1gKTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB1c2luZyBhIG5vZGVfaGVscGVyLCB0aGUgbm9kZSBoZWxwZXIgY2FuIHNlbmQgeW91ciBtb2R1bGUgbm90aWZpY2F0aW9ucy5cbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvbiBUaGUgbm90aWZpY2F0aW9uIGlkZW50aWZpZXIuXG4gICAqIEBwYXJhbSBwYXlsb2FkIFRoZSBwYXlsb2FkIG9mIGEgbm90aWZpY2F0aW9uLlxuICAgKi9cbiAgc29ja2V0Tm90aWZpY2F0aW9uUmVjZWl2ZWQ8VD4obm90aWZpY2F0aW9uOiBzdHJpbmcsIHBheWxvYWQ6IFQpOiB2b2lkIHtcbiAgICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBub3RpZmljYXRpb25SZWNlaXZlZCAke25vdGlmaWNhdGlvbn1gKTtcbiAgfSxcblxuICAvKipcbiAgICogV2hlbiBhIG1vZHVsZSBpcyBoaWRkZW4gKHVzaW5nIHRoZSBtb2R1bGUuaGlkZSgpIG1ldGhvZCksIHRoZSBzdXNwZW5kKCkgbWV0aG9kIHdpbGwgYmUgY2FsbGVkLlxuICAgKiBCeSBzdWJjbGFzc2luZyB0aGlzIG1ldGhvZCB5b3UgY2FuIHBlcmZvcm0gdGFza3MgbGlrZSBoYWx0aW5nIHRoZSB1cGRhdGUgdGltZXJzLlxuICAgKi9cbiAgc3VzcGVuZCgpOiB2b2lkIHtcbiAgICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSBzdXNwZW5kYCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gYSBtb2R1bGUgaXMgcmVxdWVzdGVkIHRvIGJlIHNob3duICh1c2luZyB0aGUgbW9kdWxlLnNob3coKSBtZXRob2QpLCB0aGUgcmVzdW1lKCkgbWV0aG9kIHdpbGwgYmUgY2FsbGVkLlxuICAgKiBCeSBzdWJjbGFzc2luZyB0aGlzIG1ldGhvZCB5b3UgY2FuIHBlcmZvcm0gdGFza3MgcmVzdGFydGluZyB0aGUgdXBkYXRlIHRpbWVycy5cbiAgICovXG4gIHJlc3VtZSgpOiB2b2lkIHtcbiAgICBMb2cubG9nKGBbJHt0aGlzLm5hbWV9XSByZXN1bWVgKTtcbiAgfSxcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=