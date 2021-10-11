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
      var items = [{
        header: manager,
        meta: "Address of Manager",
        description: "Manager created this campaign and create requests",
        style: {
          overflowWrap: "break-word"
        }
      }];
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_13__.Card.Group, {
        items: items
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
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
          lineNumber: 44,
          columnNumber: 17
        }, this), this.renderCards()]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanMiXSwibmFtZXMiOlsiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtaW5pbXVtQ29udHJpYnV0aW9uIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJkZXNjcmlwdGlvbiIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwicmVuZGVyQ2FyZHMiLCJjYW1wYWlnbiIsIkNhbXBhaWduIiwicXVlcnkiLCJhZGRyZXNzIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsWTs7Ozs7Ozs7Ozs7Ozs7OztnU0FhWSxZQUFLO0FBQUEsd0JBUVgsTUFBS0MsS0FSTTtBQUFBLFVBR1hDLG1CQUhXLGVBR1hBLG1CQUhXO0FBQUEsVUFJWEMsT0FKVyxlQUlYQSxPQUpXO0FBQUEsVUFLWEMsYUFMVyxlQUtYQSxhQUxXO0FBQUEsVUFNWEMsY0FOVyxlQU1YQSxjQU5XO0FBQUEsVUFPWEMsT0FQVyxlQU9YQSxPQVBXO0FBVWYsVUFBTUMsS0FBSyxHQUFHLENBQ1Y7QUFDQUMsY0FBTSxFQUFFRixPQURSO0FBRUFHLFlBQUksRUFBRSxvQkFGTjtBQUdBQyxtQkFBVyxFQUFFLG1EQUhiO0FBSUFDLGFBQUssRUFBRTtBQUFDQyxzQkFBWSxFQUFDO0FBQWQ7QUFKUCxPQURVLENBQWQ7QUFTQSwwQkFBTyw4REFBQywwREFBRDtBQUFZLGFBQUssRUFBRUw7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxzSkFBUDtBQUNILEs7Ozs7Ozs7NkJBRU87QUFDSiwwQkFDSSw4REFBQyx3REFBRDtBQUFBLGdDQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLEVBRUssS0FBS00sV0FBTCxFQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKO0FBTUg7Ozs7Z1RBekM0QlosSzs7Ozs7O0FBQ25CYSx3QixHQUFXQyw0REFBUSxDQUFDZCxLQUFLLENBQUNlLEtBQU4sQ0FBWUMsT0FBYixDOzt1QkFDSEgsUUFBUSxDQUFDSSxPQUFULENBQWlCQyxVQUFqQixHQUE4QkMsSUFBOUIsRTs7O0FBQWhCQyx1QjtpREFDQztBQUNIbkIscUNBQW1CLEVBQUdtQixPQUFPLENBQUMsQ0FBRCxDQUQxQjtBQUVIbEIseUJBQU8sRUFBR2tCLE9BQU8sQ0FBQyxDQUFELENBRmQ7QUFHSGpCLCtCQUFhLEVBQUdpQixPQUFPLENBQUMsQ0FBRCxDQUhwQjtBQUlIaEIsZ0NBQWMsRUFBR2dCLE9BQU8sQ0FBQyxDQUFELENBSnJCO0FBS0hmLHlCQUFPLEVBQUdlLE9BQU8sQ0FBQyxDQUFEO0FBTGQsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFKWUMsNkM7O0FBNkMzQiwrREFBZXRCLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FtcGFpZ25zL3Nob3cuMTY2Y2IzNjBjNWJhZmY2MTVjODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQge0NhcmR9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCJcclxuaW1wb3J0IENhbXBhaWduIGZyb20gXCIuLi8uLi9FdGhlcmV1bS9jYW1wYWlnblwiXHJcblxyXG5jbGFzcyBDYW1wYWlnblNob3cgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcclxuICAgICAgICBjb25zdCBjYW1wYWlnbiA9IENhbXBhaWduKHByb3BzLnF1ZXJ5LmFkZHJlc3MpO1xyXG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSBhd2FpdCBjYW1wYWlnbi5tZXRob2RzLmdldFN1bW1hcnkoKS5jYWxsKCk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbWluaW11bUNvbnRyaWJ1dGlvbiA6IHN1bW1hcnlbMF0sXHJcbiAgICAgICAgICAgIGJhbGFuY2UgOiBzdW1tYXJ5WzFdLFxyXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50IDogc3VtbWFyeVsyXSxcclxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnQgOiBzdW1tYXJ5WzNdLFxyXG4gICAgICAgICAgICBtYW5hZ2VyIDogc3VtbWFyeVs0XVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJDYXJkcyA9ICgpID0+e1xyXG5cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIG1pbmltdW1Db250cmlidXRpb24sXHJcbiAgICAgICAgICAgIGJhbGFuY2UsXHJcbiAgICAgICAgICAgIHJlcXVlc3RzQ291bnQsXHJcbiAgICAgICAgICAgIGFwcHJvdmVyc0NvdW50LFxyXG4gICAgICAgICAgICBtYW5hZ2VyXHJcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGhlYWRlcjogbWFuYWdlcixcclxuICAgICAgICAgICAgbWV0YTogXCJBZGRyZXNzIG9mIE1hbmFnZXJcIixcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWFuYWdlciBjcmVhdGVkIHRoaXMgY2FtcGFpZ24gYW5kIGNyZWF0ZSByZXF1ZXN0c1wiLFxyXG4gICAgICAgICAgICBzdHlsZToge292ZXJmbG93V3JhcDpcImJyZWFrLXdvcmRcIn1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICB9O1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxoMz5DYW1wYWlnbiBTaG93PC9oMz5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmRzKCl9XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25TaG93OyJdLCJzb3VyY2VSb290IjoiIn0=