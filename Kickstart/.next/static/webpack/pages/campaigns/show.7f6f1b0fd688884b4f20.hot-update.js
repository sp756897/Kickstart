self["webpackHotUpdate_N_E"]("pages/campaigns/show",{

/***/ "./pages/campaigns/show.js":
/*!*********************************!*\
  !*** ./pages/campaigns/show.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../Ethereum/campaign */ "./Ethereum/campaign.js");
/* harmony import */ var _Ethereum_web3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../Ethereum/web3 */ "./Ethereum/web3.js");
/* module decorator */ module = __webpack_require__.hmd(module);










var _jsxFileName = "E:\\Projects\\Blockchain\\Kickstart\\pages\\campaigns\\show.js";

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var CampaignShow = /*#__PURE__*/function (_Component) {
  (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(CampaignShow, _Component);

  var _super = _createSuper(CampaignShow);

  function CampaignShow() {
    var _this;

    (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__.default)(this, CampaignShow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__.default)((0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this), "renderCards", function () {
      var _this$props = _this.props,
          minimumContribution = _this$props.minimumContribution,
          balance = _this$props.balance,
          requestsCount = _this$props.requestsCount,
          approversCount = _this$props.approversCount,
          manager = _this$props.manager;
      var items = [{
        header: manager,
        meta: "Address of Manager",
        description: "Manager created this campaign and creates requests",
        style: {
          overflowWrap: "break-word"
        }
      }, {
        header: balance,
        meta: "Balance",
        description: "Balance"
      }, {
        header: minimumContribution,
        meta: "Minimum Contribution",
        description: "Minimum Contribution"
      }, {
        header: approversCount,
        meta: "Count of Approvers",
        description: "Count of Approvers"
      }, {
        header: requestsCount,
        meta: "Count of Requests",
        description: "Count of Requests"
      }];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_15__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 16
      }, (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this));
    });

    return _this;
  }

  (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CampaignShow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_12__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: "Campaign Show"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }, this);
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(props) {
        var campaign, summary;
        return E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                campaign = (0,_Ethereum_campaign__WEBPACK_IMPORTED_MODULE_13__.default)(props.query.address);
                _context.next = 3;
                return campaign.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt("return", {
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(react__WEBPACK_IMPORTED_MODULE_10__.Component);

/* harmony default export */ __webpack_exports__["default"] = (CampaignShow);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Z1NBYVksWUFBSztBQUFBLHdCQVFYLE1BQUtDLEtBUk07QUFBQSxVQUdYQyxtQkFIVyxlQUdYQSxtQkFIVztBQUFBLFVBSVhDLE9BSlcsZUFJWEEsT0FKVztBQUFBLFVBS1hDLGFBTFcsZUFLWEEsYUFMVztBQUFBLFVBTVhDLGNBTlcsZUFNWEEsY0FOVztBQUFBLFVBT1hDLE9BUFcsZUFPWEEsT0FQVztBQVVmLFVBQU1DLEtBQUssR0FBRyxDQUNWO0FBQ0FDLGNBQU0sRUFBRUYsT0FEUjtBQUVBRyxZQUFJLEVBQUUsb0JBRk47QUFHQUMsbUJBQVcsRUFBRSxvREFIYjtBQUlBQyxhQUFLLEVBQUU7QUFBQ0Msc0JBQVksRUFBQztBQUFkO0FBSlAsT0FEVSxFQU9WO0FBQ0lKLGNBQU0sRUFBRUwsT0FEWjtBQUVJTSxZQUFJLEVBQUUsU0FGVjtBQUdJQyxtQkFBVyxFQUFFO0FBSGpCLE9BUFUsRUFZVjtBQUNJRixjQUFNLEVBQUVOLG1CQURaO0FBRUlPLFlBQUksRUFBRSxzQkFGVjtBQUdJQyxtQkFBVyxFQUFFO0FBSGpCLE9BWlUsRUFpQlY7QUFDSUYsY0FBTSxFQUFFSCxjQURaO0FBRUlJLFlBQUksRUFBRSxvQkFGVjtBQUdJQyxtQkFBVyxFQUFFO0FBSGpCLE9BakJVLEVBc0JWO0FBQ0lGLGNBQU0sRUFBRUosYUFEWjtBQUVJSyxZQUFJLEVBQUUsbUJBRlY7QUFHSUMsbUJBQVcsRUFBRTtBQUhqQixPQXRCVSxDQUFkO0FBNkJBLDBCQUFPLDhEQUFDLDBEQUFEO0FBQVksYUFBSyxFQUFFSDtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNKQUFQO0FBQ0gsSzs7Ozs7Ozs2QkFFTztBQUNKLDBCQUNJLDhEQUFDLHdEQUFEO0FBQUEsZ0NBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosRUFFSyxLQUFLTSxXQUFMLEVBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREo7QUFNSDs7OztnVEE3RDRCWixLOzs7Ozs7QUFDbkJhLHdCLEdBQVdDLDREQUFRLENBQUNkLEtBQUssQ0FBQ2UsS0FBTixDQUFZQyxPQUFiLEM7O3VCQUNISCxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLFVBQWpCLEdBQThCQyxJQUE5QixFOzs7QUFBaEJDLHVCO2lEQUNDO0FBQ0huQixxQ0FBbUIsRUFBR21CLE9BQU8sQ0FBQyxDQUFELENBRDFCO0FBRUhsQix5QkFBTyxFQUFHa0IsT0FBTyxDQUFDLENBQUQsQ0FGZDtBQUdIakIsK0JBQWEsRUFBR2lCLE9BQU8sQ0FBQyxDQUFELENBSHBCO0FBSUhoQixnQ0FBYyxFQUFHZ0IsT0FBTyxDQUFDLENBQUQsQ0FKckI7QUFLSGYseUJBQU8sRUFBR2UsT0FBTyxDQUFDLENBQUQ7QUFMZCxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUpZQyw2Qzs7QUFpRTNCLCtEQUFldEIsWUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYW1wYWlnbnMvc2hvdy43ZjZmMWIwZmQ2ODg4ODRiNGYyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCAnc2VtYW50aWMtdWktY3NzL3NlbWFudGljLm1pbi5jc3MnXHJcbmltcG9ydCB7Q2FyZH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCJcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIlxyXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4uLy4uL0V0aGVyZXVtL2NhbXBhaWduXCJcclxuaW1wb3J0IHdlYjMgZnJvbSBcIi4uLy4uL0V0aGVyZXVtL3dlYjNcIlxyXG5cclxuY2xhc3MgQ2FtcGFpZ25TaG93IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhwcm9wcyl7XHJcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcclxuICAgICAgICBjb25zdCBzdW1tYXJ5ID0gYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5nZXRTdW1tYXJ5KCkuY2FsbCgpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb24gOiBzdW1tYXJ5WzBdLFxyXG4gICAgICAgICAgICBiYWxhbmNlIDogc3VtbWFyeVsxXSxcclxuICAgICAgICAgICAgcmVxdWVzdHNDb3VudCA6IHN1bW1hcnlbMl0sXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50IDogc3VtbWFyeVszXSxcclxuICAgICAgICAgICAgbWFuYWdlciA6IHN1bW1hcnlbNF1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyQ2FyZHMgPSAoKSA9PntcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBtaW5pbXVtQ29udHJpYnV0aW9uLFxyXG4gICAgICAgICAgICBiYWxhbmNlLFxyXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudCxcclxuICAgICAgICAgICAgbWFuYWdlclxyXG4gICAgICAgIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjcmVhdGVzIHJlcXVlc3RzXCIsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7b3ZlcmZsb3dXcmFwOlwiYnJlYWstd29yZFwifSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBiYWxhbmNlLFxyXG4gICAgICAgICAgICAgICAgbWV0YTogXCJCYWxhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJCYWxhbmNlXCIgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBoZWFkZXI6IG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgICAgICBtZXRhOiBcIk1pbmltdW0gQ29udHJpYnV0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNaW5pbXVtIENvbnRyaWJ1dGlvblwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGhlYWRlcjogYXBwcm92ZXJzQ291bnQsXHJcbiAgICAgICAgICAgICAgICBtZXRhOiBcIkNvdW50IG9mIEFwcHJvdmVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ291bnQgb2YgQXBwcm92ZXJzXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaGVhZGVyOiByZXF1ZXN0c0NvdW50LFxyXG4gICAgICAgICAgICAgICAgbWV0YTogXCJDb3VudCBvZiBSZXF1ZXN0c1wiLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQ291bnQgb2YgUmVxdWVzdHNcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgzPkNhbXBhaWduIFNob3c8L2gzPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7Il0sInNvdXJjZVJvb3QiOiIifQ==