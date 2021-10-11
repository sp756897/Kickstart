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
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.js");
/* harmony import */ var _Ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../Ethereum/campaign */ "./Ethereum/campaign.js");
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
      var items = {
        header: manager,
        meta: "Address of Manager",
        description: "Manager created this campaign and create requests"
      };
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 16
      }, (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__.default)(_this));
    });

    return _this;
  }

  (0,E_Projects_Blockchain_Kickstart_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__.default)(CampaignShow, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_11__.default, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h3", {
          children: "Campaign Show"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 17
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
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
                campaign = (0,_Ethereum_campaign__WEBPACK_IMPORTED_MODULE_12__.default)(props.query.address);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInJlbmRlckNhcmRzIiwiY2FtcGFpZ24iLCJDYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFk7Ozs7Ozs7Ozs7Ozs7Ozs7Z1NBYVksWUFBSztBQUFBLHdCQVFYLE1BQUtDLEtBUk07QUFBQSxVQUdYQyxtQkFIVyxlQUdYQSxtQkFIVztBQUFBLFVBSVhDLE9BSlcsZUFJWEEsT0FKVztBQUFBLFVBS1hDLGFBTFcsZUFLWEEsYUFMVztBQUFBLFVBTVhDLGNBTlcsZUFNWEEsY0FOVztBQUFBLFVBT1hDLE9BUFcsZUFPWEEsT0FQVztBQVVmLFVBQU1DLEtBQUssR0FBRztBQUNWQyxjQUFNLEVBQUVGLE9BREU7QUFFVkcsWUFBSSxFQUFFLG9CQUZJO0FBR1ZDLG1CQUFXLEVBQUU7QUFISCxPQUFkO0FBT0EsMEJBQU8sOERBQUMsMERBQUQ7QUFBWSxhQUFLLEVBQUVIO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0pBQVA7QUFDSCxLOzs7Ozs7OzZCQUVPO0FBQ0osMEJBQ0ksOERBQUMsd0RBQUQ7QUFBQSxnQ0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixFQUVLLEtBQUtJLFdBQUwsRUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESjtBQU1IOzs7O2dUQXZDNEJWLEs7Ozs7OztBQUNuQlcsd0IsR0FBV0MsNERBQVEsQ0FBQ1osS0FBSyxDQUFDYSxLQUFOLENBQVlDLE9BQWIsQzs7dUJBQ0hILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMsVUFBakIsR0FBOEJDLElBQTlCLEU7OztBQUFoQkMsdUI7aURBQ0M7QUFDSGpCLHFDQUFtQixFQUFHaUIsT0FBTyxDQUFDLENBQUQsQ0FEMUI7QUFFSGhCLHlCQUFPLEVBQUdnQixPQUFPLENBQUMsQ0FBRCxDQUZkO0FBR0hmLCtCQUFhLEVBQUdlLE9BQU8sQ0FBQyxDQUFELENBSHBCO0FBSUhkLGdDQUFjLEVBQUdjLE9BQU8sQ0FBQyxDQUFELENBSnJCO0FBS0hiLHlCQUFPLEVBQUdhLE9BQU8sQ0FBQyxDQUFEO0FBTGQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFKWUMsNkM7O0FBMkMzQiwrREFBZXBCLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuY2I5ZDliYjQ5ZDM5ODUwODllNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0NhcmR9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9FdGhlcmV1bS9jYW1wYWlnblwiXHJcblxyXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbiA6IHN1bW1hcnlbMF0sXHJcbiAgICAgICAgICAgIGJhbGFuY2UgOiBzdW1tYXJ5WzFdLFxyXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50IDogc3VtbWFyeVsyXSxcclxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQgOiBzdW1tYXJ5WzNdLFxyXG4gICAgICAgICAgICBtYW5hZ2VyIDogc3VtbWFyeVs0XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcyA9ICgpID0+e1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgIGJhbGFuY2UsXHJcbiAgICAgICAgICAgIHJlcXVlc3RzQ291bnQsXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgICAgICBtYW5hZ2VyXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0ge1xyXG4gICAgICAgICAgICBoZWFkZXI6IG1hbmFnZXIsXHJcbiAgICAgICAgICAgIG1ldGE6IFwiQWRkcmVzcyBvZiBNYW5hZ2VyXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk1hbmFnZXIgY3JlYXRlZCB0aGlzIGNhbXBhaWduIGFuZCBjcmVhdGUgcmVxdWVzdHNcIixcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cclxuICAgIH07XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuKFxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPGgzPkNhbXBhaWduIFNob3c8L2gzPlxyXG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FyZHMoKX1cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7Il0sInNvdXJjZVJvb3QiOiIifQ==