/**
 * Created by SQ04 on 8/22/2016.
 * Theophilus Omoregbee <theo4u@ymail.com>
 */
System.register(['./TodoServices', './DataAccess'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var TodoServices_1, DataAccess_1;
    var App;
    return {
        setters:[
            function (TodoServices_1_1) {
                TodoServices_1 = TodoServices_1_1;
            },
            function (DataAccess_1_1) {
                DataAccess_1 = DataAccess_1_1;
            }],
        execute: function() {
            App = (function (_super) {
                __extends(App, _super);
                function App() {
                    _super.call(this);
                    this.totalBadge = document.getElementById('totalBadge');
                    this.input = document.getElementById('input');
                    this.addBtn = document.getElementById('addBtn');
                    this.deleteBtn = document.getElementById('deleteBtn');
                    this.resetBtn = document.getElementById('resetBtn');
                    this.list = document.getElementById('items');
                    //bind events
                    this.bindEvents();
                    //fetch Record
                    this.fetch();
                }
                App.prototype.bindEvents = function () {
                    var _this = this;
                    //()=>{} helps us to access our this of the parent class
                    this.addBtn.addEventListener('click', function () { _this.addTodo(); });
                    this.deleteBtn.addEventListener('click', function () { _this.deleteTodo(); });
                    this.resetBtn.addEventListener('click', function () { _this.resetTodo(); });
                };
                App.prototype.addTodo = function () {
                    if (this.input.value == "")
                        throw new Error('Input Is Required');
                    this.addRecord({ name: this.input.value.trim(), completed: false, dateAdded: new Date() });
                    this.input.value = "";
                    this.fetch();
                };
                App.prototype.deleteTodo = function () {
                    console.log('DELETE TODO', this.input);
                    console.log(new FormData(document.getElementById("form")));
                };
                App.prototype.resetTodo = function () {
                    if (confirm('Are You Sure You Want To Reset This Todo List')) {
                        this.reset();
                        this.fetch();
                    }
                };
                App.prototype.fetch = function () {
                    var record = this.getRecords();
                    var UI = "";
                    for (var _i = 0, record_1 = record; _i < record_1.length; _i++) {
                        var value = record_1[_i];
                        UI += "<li class=\"list-group-item\">\n                      <input type=\"checkbox\" name=\"todo[]\" value=\"" + value.name + "\" class=\"check\"> " + value.name + " \n                      <span class=\"pull-right\">\n                        <span class=\"badge\">" + TodoServices_1.dateFormatter(new Date(value.dateAdded.toString())) + "</span>\n                        <button class=\"btn btn-danger btn-xs\" onclick=\"this.deleteItem(" + value.name + ")\"><span class=\"glyphicon glyphicon-remove\"></span></button>\n                      </span>\n                      \n                   </li>";
                    }
                    this.list.innerHTML = UI;
                    //update our total counter
                    this.totalBadge.innerText = record.length.toString();
                };
                return App;
            }(DataAccess_1.DataAccess));
            new App();
        }
    }
});
//# sourceMappingURL=app.js.map