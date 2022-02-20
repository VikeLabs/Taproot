exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 1260:
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8527:
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _extends.apply(this, arguments);
}

module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 417:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(1260);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 2220:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(8834);

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8834:
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8921)["default"]);

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 4582:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = (__webpack_require__(8921)["default"]);

var toPrimitive = __webpack_require__(4209);

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 8921:
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ 3357:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(9973);
} else {}


/***/ }),

/***/ 9973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var CellContainer = __webpack_require__(4377);
var CellLink = __webpack_require__(8247);
__webpack_require__(1260);
__webpack_require__(6689);
__webpack_require__(7024);
__webpack_require__(6613);
__webpack_require__(9097);
__webpack_require__(2744);
__webpack_require__(4106);
__webpack_require__(6378);
__webpack_require__(6661);
__webpack_require__(417);
__webpack_require__(4380);
__webpack_require__(8859);
__webpack_require__(2220);
__webpack_require__(9897);
__webpack_require__(9114);
__webpack_require__(851);
__webpack_require__(8527);
__webpack_require__(1853);
__webpack_require__(7330);
__webpack_require__(8158);
__webpack_require__(1610);
__webpack_require__(360);
__webpack_require__(2404);
__webpack_require__(5584);
__webpack_require__(42);
__webpack_require__(9200);
__webpack_require__(4626);
__webpack_require__(2016);
__webpack_require__(4432);
__webpack_require__(6762);
__webpack_require__(1286);
__webpack_require__(7343);
__webpack_require__(3160);
__webpack_require__(8986);

/** @jsxRuntime classic */
const Field = () => null;
const Cell = _ref => {
  let {
    item,
    field,
    linkTo
  } = _ref;
  let value = item[field.path] + '';
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, value) : core.jsx(CellContainer.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = _ref2 => {
  let {
    item,
    field
  } = _ref2;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    idFieldKind: config.fieldMeta.kind,
    defaultValue: undefined,
    deserialize: () => {},
    serialize: () => ({}),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: _ref3 => {
        let {
          type,
          value
        } = _ref3;

        if (type === 'not') {
          return {
            [config.path]: {
              not: {
                equals: value
              }
            }
          };
        }

        const valueWithoutWhitespace = value.replace(/\s/g, '');
        const key = type === 'is' ? 'equals' : type === 'not_in' ? 'notIn' : type;
        return {
          [config.path]: {
            [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',') : valueWithoutWhitespace
          }
        };
      },

      Label(_ref4) {
        let {
          label,
          value,
          type
        } = _ref4;
        let renderedValue = value.replace(/\s/g, '');

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ 7583:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(6689);
var core$1 = __webpack_require__(1138);
var toast = __webpack_require__(2744);
var loading = __webpack_require__(4106);
var modals = __webpack_require__(6378);
var apolloUploadClient = __webpack_require__(6661);
var _objectSpread = __webpack_require__(417);
var hashString = __webpack_require__(4380);
var core = __webpack_require__(6143);
__webpack_require__(8859);
__webpack_require__(2220);
__webpack_require__(9897);
var client = __webpack_require__(9114);
var adminMetaGraphql = __webpack_require__(851);
var dataGetter = __webpack_require__(9475);
__webpack_require__(9200);
__webpack_require__(4626);
__webpack_require__(2016);
__webpack_require__(4432);
__webpack_require__(6762);
__webpack_require__(1286);
__webpack_require__(7343);
__webpack_require__(3160);
__webpack_require__(8986);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var hashString__default = /*#__PURE__*/_interopDefault(hashString);

const expectedExports = new Set(['Cell', 'Field', 'controller', 'CardValue']);
const adminMetaLocalStorageKey = 'keystone.adminMeta';
let _mustRenderServerResult = true;

function useMustRenderServerResult() {
  let [, forceUpdate] = React.useState(0);
  React.useEffect(() => {
    _mustRenderServerResult = false;
    forceUpdate(1);
  }, []);

  if (typeof window === 'undefined') {
    return true;
  }

  return _mustRenderServerResult;
}

function useAdminMeta(adminMetaHash, fieldViews) {
  const adminMetaFromLocalStorage = React.useMemo(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const item = localStorage.getItem(adminMetaLocalStorageKey);

    if (item === null) {
      return;
    }

    try {
      let parsed = JSON.parse(item);

      if (parsed.hash === adminMetaHash) {
        return parsed.meta;
      }
    } catch (err) {
      return;
    }
  }, [adminMetaHash]); // it seems like Apollo doesn't skip the first fetch when using skip: true so we're using useLazyQuery instead

  const [fetchStaticAdminMeta, {
    data,
    error,
    called
  }] = client.useLazyQuery(adminMetaGraphql.staticAdminMetaQuery, {
    fetchPolicy: 'network-only'
  });
  let shouldFetchAdminMeta = adminMetaFromLocalStorage === undefined && !called;
  React.useEffect(() => {
    if (shouldFetchAdminMeta) {
      fetchStaticAdminMeta();
    }
  }, [shouldFetchAdminMeta, fetchStaticAdminMeta]);
  const runtimeAdminMeta = React.useMemo(() => {
    if ((!data || error) && !adminMetaFromLocalStorage) {
      return undefined;
    }

    const adminMeta = adminMetaFromLocalStorage ? adminMetaFromLocalStorage : data.keystone.adminMeta;
    const runtimeAdminMeta = {
      enableSessionItem: adminMeta.enableSessionItem,
      enableSignout: adminMeta.enableSignout,
      lists: {}
    };
    adminMeta.lists.forEach(list => {
      runtimeAdminMeta.lists[list.key] = _objectSpread(_objectSpread({}, list), {}, {
        gqlNames: core.getGqlNames({
          listKey: list.key,
          pluralGraphQLName: list.listQueryName
        }),
        fields: {}
      });
      list.fields.forEach(field => {
        var _field$itemView$field, _field$itemView;

        expectedExports.forEach(exportName => {
          if (fieldViews[field.viewsIndex][exportName] === undefined) {
            throw new Error(`The view for the field at ${list.key}.${field.path} is missing the ${exportName} export`);
          }
        });
        Object.keys(fieldViews[field.viewsIndex]).forEach(exportName => {
          if (!expectedExports.has(exportName) && exportName !== 'allowedExportsOnCustomViews') {
            throw new Error(`Unexpected export named ${exportName} from the view from the field at ${list.key}.${field.path}`);
          }
        });

        const views = _objectSpread({}, fieldViews[field.viewsIndex]);

        const customViews = {};

        if (field.customViewsIndex !== null) {
          const customViewsSource = fieldViews[field.customViewsIndex];
          const allowedExportsOnCustomViews = new Set(views.allowedExportsOnCustomViews);
          Object.keys(customViewsSource).forEach(exportName => {
            if (allowedExportsOnCustomViews.has(exportName)) {
              customViews[exportName] = customViewsSource[exportName];
            } else if (expectedExports.has(exportName)) {
              views[exportName] = customViewsSource[exportName];
            } else {
              throw new Error(`Unexpected export named ${exportName} from the custom view from field at ${list.key}.${field.path}`);
            }
          });
        }

        runtimeAdminMeta.lists[list.key].fields[field.path] = _objectSpread(_objectSpread({}, field), {}, {
          itemView: {
            fieldMode: (_field$itemView$field = (_field$itemView = field.itemView) === null || _field$itemView === void 0 ? void 0 : _field$itemView.fieldMode) !== null && _field$itemView$field !== void 0 ? _field$itemView$field : null
          },
          views,
          controller: fieldViews[field.viewsIndex].controller({
            listKey: list.key,
            fieldMeta: field.fieldMeta,
            label: field.label,
            path: field.path,
            customViews
          })
        });
      });
    });

    if (typeof window !== 'undefined' && !adminMetaFromLocalStorage) {
      localStorage.setItem(adminMetaLocalStorageKey, JSON.stringify({
        hash: hashString__default["default"](JSON.stringify(adminMeta)),
        meta: adminMeta
      }));
    }

    return runtimeAdminMeta;
  }, [data, error, adminMetaFromLocalStorage, fieldViews]);
  const mustRenderServerResult = useMustRenderServerResult();

  if (mustRenderServerResult) {
    return {
      state: 'loading'
    };
  }

  if (runtimeAdminMeta) {
    return {
      state: 'loaded',
      value: runtimeAdminMeta
    };
  }

  if (error) {
    return {
      state: 'error',
      error,
      refetch: () => {
        fetchStaticAdminMeta();
      }
    };
  }

  return {
    state: 'loading'
  };
}

function useLazyMetadata(query) {
  let result = client.useQuery(query, {
    errorPolicy: 'all',
    fetchPolicy: 'network-only'
  });
  return React.useMemo(() => {
    var _result$error, _result$error$network, _result$error2, _result$error$network2, _result$error3, _result$error$network3, _result$error4;

    let refetch = () => {
      result.refetch();
    };

    let dataGetter$1 = dataGetter.makeDataGetter(result.data, (_result$error = result.error) === null || _result$error === void 0 ? void 0 : _result$error.graphQLErrors);
    const authenticatedItemGetter = dataGetter$1.get('authenticatedItem');
    const keystoneMetaGetter = dataGetter$1.get('keystone');
    return {
      refetch,
      authenticatedItem: getAuthenticatedItem(result, authenticatedItemGetter.errors || ((_result$error$network = (_result$error2 = result.error) === null || _result$error2 === void 0 ? void 0 : _result$error2.networkError) !== null && _result$error$network !== void 0 ? _result$error$network : undefined)),
      visibleLists: getVisibleLists(result, keystoneMetaGetter.errors || ((_result$error$network2 = (_result$error3 = result.error) === null || _result$error3 === void 0 ? void 0 : _result$error3.networkError) !== null && _result$error$network2 !== void 0 ? _result$error$network2 : undefined)),
      createViewFieldModes: getCreateViewFieldModes(result, keystoneMetaGetter.errors || ((_result$error$network3 = (_result$error4 = result.error) === null || _result$error4 === void 0 ? void 0 : _result$error4.networkError) !== null && _result$error$network3 !== void 0 ? _result$error$network3 : undefined))
    };
  }, [result]);
}

function getCreateViewFieldModes(_ref, error) {
  let {
    data
  } = _ref;

  if (error) {
    return {
      state: 'error',
      error
    };
  }

  if (data) {
    const lists = {};
    data.keystone.adminMeta.lists.forEach(list => {
      lists[list.key] = {};
      list.fields.forEach(field => {
        lists[list.key][field.path] = field.createView.fieldMode;
      });
    });
    return {
      state: 'loaded',
      lists
    };
  }

  return {
    state: 'loading'
  };
}

function getVisibleLists(_ref2, error) {
  let {
    data
  } = _ref2;

  if (error) {
    return {
      state: 'error',
      error
    };
  }

  if (data) {
    const lists = new Set();
    data.keystone.adminMeta.lists.forEach(list => {
      if (!list.isHidden) {
        lists.add(list.key);
      }
    });
    return {
      state: 'loaded',
      lists
    };
  }

  return {
    state: 'loading'
  };
}

function getAuthenticatedItem(_ref3, error) {
  let {
    data
  } = _ref3;

  if (error) {
    return {
      state: 'error',
      error
    };
  }

  if (data) {
    if (!data.authenticatedItem || // this is for the case where there is a new type
    // in the AuthenticatedItem union and the query
    // that the admin ui has doesn't get the id
    // (yes, undefined is very specific and very intentional, it should not be checking for null)
    data.authenticatedItem.id === undefined) {
      return {
        state: 'unauthenticated'
      };
    }

    const labelField = Object.keys(data.authenticatedItem).filter(x => x !== '__typename' && x !== 'id')[0];
    return {
      state: 'authenticated',
      id: data.authenticatedItem.id,
      label: data.authenticatedItem[labelField] || data.authenticatedItem.id,
      listKey: data.authenticatedItem.__typename
    };
  }

  return {
    state: 'loading'
  };
}

const KeystoneContext = /*#__PURE__*/React.createContext(undefined);

function InternalKeystoneProvider(_ref) {
  let {
    adminConfig,
    fieldViews,
    adminMetaHash,
    children,
    lazyMetadataQuery,
    apiPath
  } = _ref;
  const adminMeta = useAdminMeta(adminMetaHash, fieldViews);
  const {
    authenticatedItem,
    visibleLists,
    createViewFieldModes,
    refetch
  } = useLazyMetadata(lazyMetadataQuery);

  const reinitContext = () => {
    var _adminMeta$refetch;

    adminMeta === null || adminMeta === void 0 ? void 0 : (_adminMeta$refetch = adminMeta.refetch) === null || _adminMeta$refetch === void 0 ? void 0 : _adminMeta$refetch.call(adminMeta);
    refetch();
  };

  if (adminMeta.state === 'loading') {
    return /*#__PURE__*/React__default["default"].createElement(core$1.Center, {
      fillView: true
    }, /*#__PURE__*/React__default["default"].createElement(loading.LoadingDots, {
      label: "Loading Admin Metadata",
      size: "large"
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(toast.ToastProvider, null, /*#__PURE__*/React__default["default"].createElement(modals.DrawerProvider, null, /*#__PURE__*/React__default["default"].createElement(KeystoneContext.Provider, {
    value: {
      adminConfig,
      adminMeta,
      fieldViews,
      authenticatedItem,
      reinitContext,
      visibleLists,
      createViewFieldModes,
      apiPath
    }
  }, children)));
}

const KeystoneProvider = props => {
  const apolloClient = React.useMemo(() => new client.ApolloClient({
    cache: new client.InMemoryCache(),
    link: apolloUploadClient.createUploadLink({
      uri: props.apiPath
    })
  }), [props.apiPath]);
  return /*#__PURE__*/React__default["default"].createElement(client.ApolloProvider, {
    client: apolloClient
  }, /*#__PURE__*/React__default["default"].createElement(InternalKeystoneProvider, props));
};
const useKeystone = () => {
  const value = React.useContext(KeystoneContext);

  if (!value) {
    throw new Error('useKeystone must be called inside a KeystoneProvider component');
  }

  if (value.adminMeta.state === 'error') {
    // If we get an "Access denied" error, it probably means the user doesn't have access to the
    // adminMeta but has navigated (probably client-side) to a page that requires it. We reload
    // the page so the server-side access control can run which should bounce them to the right
    // place (or display the no-access page)
    if (value.adminMeta.error.message === 'Access denied') {
      window.location.reload();
    }

    throw new Error('An error occurred when loading Admin Metadata');
  }

  return {
    adminConfig: value.adminConfig,
    adminMeta: value.adminMeta.value,
    authenticatedItem: value.authenticatedItem,
    visibleLists: value.visibleLists,
    createViewFieldModes: value.createViewFieldModes,
    apiPath: value.apiPath
  };
};
const useReinitContext = () => {
  const value = React.useContext(KeystoneContext);

  if (!value) {
    throw new Error('useReinitContext must be called inside a KeystoneProvider component');
  }

  return value.reinitContext;
};
const useRawKeystone = () => {
  const value = React.useContext(KeystoneContext);

  if (!value) {
    throw new Error('useRawKeystone must be called inside a KeystoneProvider component');
  }

  return value;
};
const useList = key => {
  const {
    adminMeta: {
      lists
    }
  } = useKeystone();

  if (lists[key]) {
    return lists[key];
  } else {
    throw new Error(`Invalid list key provided to useList: ${key}`);
  }
};

exports.KeystoneProvider = KeystoneProvider;
exports.useKeystone = useKeystone;
exports.useList = useList;
exports.useRawKeystone = useRawKeystone;
exports.useReinitContext = useReinitContext;


/***/ }),

/***/ 42:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectWithoutProperties = __webpack_require__(2220);
var router = __webpack_require__(1853);
var Link$1 = __webpack_require__(9097);
var React = __webpack_require__(6689);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var Link__default = /*#__PURE__*/_interopDefault(Link$1);
var React__default = /*#__PURE__*/_interopDefault(React);

const _excluded = ["href", "as", "replace", "scroll", "shallow", "prefetch"];
const Link = _ref => {
  let {
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Link__default["default"], {
    href: href,
    as: as,
    replace: replace,
    scroll: scroll,
    shallow: shallow,
    prefetch: prefetch
  }, /*#__PURE__*/React__default["default"].createElement("a", props));
};

Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () { return router.Router; }
}));
Object.defineProperty(exports, "createRouter", ({
  enumerable: true,
  get: function () { return router.createRouter; }
}));
Object.defineProperty(exports, "makePublicRouterInstance", ({
  enumerable: true,
  get: function () { return router.makePublicRouterInstance; }
}));
Object.defineProperty(exports, "useRouter", ({
  enumerable: true,
  get: function () { return router.useRouter; }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () { return router.withRouter; }
}));
exports.Link = Link;


/***/ }),

/***/ 4377:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(8527);
var _objectWithoutProperties = __webpack_require__(2220);
var core = __webpack_require__(1138);

const _excluded = ["children"];
/**
 * This is the component you should use when you want the standard padding around a cell value
 */

const CellContainer = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", _extends({
    css: {
      padding: spacing.small
    }
  }, props), children);
};

exports.CellContainer = CellContainer;


/***/ }),

/***/ 8247:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(8527);
var core = __webpack_require__(1138);
var adminUi_router_dist_keystone6CoreAdminUiRouter = __webpack_require__(42);

/**
 * This is the component you should use when linking a Cell to an item (i.e when the Cell supports
 * the linkTo prop)
 */

const CellLink = props => {
  const {
    colors,
    spacing
  } = core.useTheme();
  return core.jsx(adminUi_router_dist_keystone6CoreAdminUiRouter.Link, _extends({
    css: {
      color: colors.foreground,
      display: 'block',
      padding: spacing.small,
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      }
    }
  }, props));
};

exports.CellLink = CellLink;


/***/ }),

/***/ 8447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(6689);
var isDeepEqual = __webpack_require__(2404);
var core = __webpack_require__(1138);
var modals = __webpack_require__(6378);
var toast = __webpack_require__(2744);
var loading = __webpack_require__(4106);
var client = __webpack_require__(9114);
var adminUi_context_dist_keystone6CoreAdminUiContext = __webpack_require__(7583);
var Fields = __webpack_require__(3639);
var GraphQLErrorNotice = __webpack_require__(4259);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

/** @jsxRuntime classic */
function CreateItemDrawer(_ref) {
  let {
    listKey,
    onClose,
    onCreate
  } = _ref;
  const {
    createViewFieldModes
  } = adminUi_context_dist_keystone6CoreAdminUiContext.useKeystone();
  const list = adminUi_context_dist_keystone6CoreAdminUiContext.useList(listKey);
  const toasts = toast.useToasts();
  const [createItem, {
    loading: loading$1,
    error
  }] = client.useMutation(client.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        id
        label: ${list.labelField}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(list.fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: list.fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = React.useMemo(() => {
    const invalidFields = new Set();
    Object.keys(value).forEach(fieldPath => {
      const val = value[fieldPath].value;
      const validateFn = list.fields[fieldPath].controller.validate;

      if (validateFn) {
        const result = validateFn(val);

        if (result === false) {
          invalidFields.add(fieldPath);
        }
      }
    });
    return invalidFields;
  }, [list, value]);
  const [forceValidation, setForceValidation] = React.useState(false);
  return core.jsx(modals.Drawer, {
    title: `Create ${list.singular}`,
    width: "wide",
    actions: {
      confirm: {
        label: `Create ${list.singular}`,
        loading: loading$1,
        action: () => {
          const newForceValidation = invalidFields.size !== 0;
          setForceValidation(newForceValidation);
          if (newForceValidation) return;
          const data = {};
          Object.keys(list.fields).forEach(fieldPath => {
            const {
              controller
            } = list.fields[fieldPath];
            const serialized = controller.serialize(value[fieldPath].value);

            if (!isDeepEqual__default["default"](serialized, controller.serialize(controller.defaultValue))) {
              Object.assign(data, serialized);
            }
          });
          createItem({
            variables: {
              data
            }
          }).then(_ref2 => {
            let {
              data
            } = _ref2;
            const label = data.item.label || data.item.id;
            onCreate({
              id: data.item.id,
              label
            });
            toasts.addToast({
              title: label,
              message: 'Created Successfully',
              tone: 'positive'
            });
          }).catch(() => {});
        }
      },
      cancel: {
        label: 'Cancel',
        action: onClose
      }
    }
  }, createViewFieldModes.state === 'error' && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: createViewFieldModes.error instanceof Error ? createViewFieldModes.error : undefined,
    errors: createViewFieldModes.error instanceof Error ? undefined : createViewFieldModes.error
  }), createViewFieldModes.state === 'loading' && core.jsx(loading.LoadingDots, {
    label: "Loading create form"
  }), error && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(core.Box, {
    paddingY: "xlarge"
  }, core.jsx(Fields.Fields, {
    fields: list.fields,
    fieldModes: createViewFieldModes.state === 'loaded' ? createViewFieldModes.lists[list.key] : null,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    value: value,
    onChange: React.useCallback(getNewValue => {
      setValue(oldValues => getNewValue(oldValues));
    }, [])
  })));
}

exports.CreateItemDrawer = CreateItemDrawer;


/***/ }),

/***/ 3639:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _objectSpread = __webpack_require__(417);
var core = __webpack_require__(1138);
var React = __webpack_require__(6689);

const RenderField = /*#__PURE__*/React.memo(function RenderField(_ref) {
  let {
    field,
    value,
    autoFocus,
    forceValidation,
    onChange
  } = _ref;
  return core.jsx(field.views.Field, {
    field: field.controller,
    onChange: React.useMemo(() => {
      if (onChange === undefined) return undefined;
      return value => {
        onChange(val => _objectSpread(_objectSpread({}, val), {}, {
          [field.controller.path]: {
            kind: 'value',
            value
          }
        }));
      };
    }, [onChange, field.controller.path]),
    value: value,
    autoFocus: autoFocus,
    forceValidation: forceValidation
  });
});
function Fields(_ref2) {
  let {
    fields,
    value,
    fieldModes,
    forceValidation,
    invalidFields,
    onChange
  } = _ref2;
  const renderedFields = Object.keys(fields).filter(fieldPath => fieldModes === null || fieldModes[fieldPath] !== 'hidden').map((fieldPath, index) => {
    const field = fields[fieldPath];
    const val = value[fieldPath];
    const fieldMode = fieldModes === null ? 'edit' : fieldModes[fieldPath];

    if (val.kind === 'error') {
      return core.jsx("div", null, field.label, ": ", core.jsx("span", {
        css: {
          color: 'red'
        }
      }, val.errors[0].message));
    }

    return core.jsx(RenderField, {
      key: fieldPath,
      field: field,
      value: val.value,
      forceValidation: forceValidation && invalidFields.has(fieldPath),
      onChange: fieldMode === 'edit' ? onChange : undefined,
      autoFocus: index === 0
    });
  });
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, renderedFields, renderedFields.length === 0 && 'There are no fields that you can read or edit');
}

exports.Fields = Fields;


/***/ }),

/***/ 4259:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var core = __webpack_require__(1138);
var notice = __webpack_require__(5584);
var React = __webpack_require__(6689);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function GraphQLErrorNotice(_ref) {
  let {
    errors,
    networkError
  } = _ref;

  if (networkError) {
    return /*#__PURE__*/React__default["default"].createElement(notice.Notice, {
      tone: "negative",
      marginBottom: "large"
    }, networkError.message);
  }

  if (errors !== null && errors !== void 0 && errors.length) {
    return /*#__PURE__*/React__default["default"].createElement(core.Stack, {
      gap: "small",
      marginBottom: "large"
    }, errors.map(err => /*#__PURE__*/React__default["default"].createElement(notice.Notice, {
      tone: "negative"
    }, err.message)));
  }

  return null;
}

exports.GraphQLErrorNotice = GraphQLErrorNotice;


/***/ }),

/***/ 360:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var core = __webpack_require__(1138);
var button = __webpack_require__(7024);
var React = __webpack_require__(6689);
var client = __webpack_require__(9114);

/** @jsxRuntime classic */
const END_SESSION = client.gql`
  mutation EndSession {
    endSession
  }
`;

const SignoutButton = _ref => {
  let {
    children
  } = _ref;
  const [endSession, {
    loading,
    data
  }] = client.useMutation(END_SESSION);
  React.useEffect(() => {
    if (data !== null && data !== void 0 && data.endSession) {
      window.location.reload();
    }
  }, [data]);
  return core.jsx(button.Button, {
    size: "small",
    isLoading: loading,
    onClick: () => endSession()
  }, children || 'Sign out');
};

exports.SignoutButton = SignoutButton;


/***/ }),

/***/ 851:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var client = __webpack_require__(9114);

const staticAdminMetaQuery = client.gql`
  query StaticAdminMeta {
    keystone {
      __typename
      adminMeta {
        __typename
        enableSignout
        enableSessionItem
        lists {
          __typename
          key
          itemQueryName
          listQueryName
          initialSort {
            __typename
            field
            direction
          }
          path
          label
          singular
          plural
          description
          initialColumns
          pageSize
          labelField
          fields {
            __typename
            path
            label
            fieldMeta
            viewsIndex
            customViewsIndex
            search
            itemView {
              fieldMode
            }
          }
        }
      }
    }
  }
`; // generated by https://graphql-code-generator.com with these options:
// generates:
//   types.ts:
//     plugins:
//       - typescript-operations:
//           namingConvention: keep
//       - typescript:
//           enumsAsTypes: true
//           nonOptionalTypename: true
//           namingConvention: keep
//           noExport: true
//           avoidOptionals: true
//           scalars:
//             JSON: JSONValue

exports.staticAdminMetaQuery = staticAdminMetaQuery;


/***/ }),

/***/ 6143:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// TODO: don't duplicate this between here and packages/keystone/ListTypes/list.js
function getGqlNames(_ref) {
  let {
    listKey,
    pluralGraphQLName
  } = _ref;
  const lowerPluralName = pluralGraphQLName.slice(0, 1).toLowerCase() + pluralGraphQLName.slice(1);
  const lowerSingularName = listKey.slice(0, 1).toLowerCase() + listKey.slice(1);
  return {
    outputTypeName: listKey,
    itemQueryName: lowerSingularName,
    listQueryName: lowerPluralName,
    listQueryCountName: `${lowerPluralName}Count`,
    listOrderName: `${listKey}OrderByInput`,
    deleteMutationName: `delete${listKey}`,
    updateMutationName: `update${listKey}`,
    createMutationName: `create${listKey}`,
    deleteManyMutationName: `delete${pluralGraphQLName}`,
    updateManyMutationName: `update${pluralGraphQLName}`,
    createManyMutationName: `create${pluralGraphQLName}`,
    whereInputName: `${listKey}WhereInput`,
    whereUniqueInputName: `${listKey}WhereUniqueInput`,
    updateInputName: `${listKey}UpdateInput`,
    createInputName: `${listKey}CreateInput`,
    updateManyInputName: `${listKey}UpdateArgs`,
    relateToManyForCreateInputName: `${listKey}RelateToManyForCreateInput`,
    relateToManyForUpdateInputName: `${listKey}RelateToManyForUpdateInput`,
    relateToOneForCreateInputName: `${listKey}RelateToOneForCreateInput`,
    relateToOneForUpdateInputName: `${listKey}RelateToOneForUpdateInput`
  };
}

exports.getGqlNames = getGqlNames;


/***/ }),

/***/ 9475:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function dataGetterWithNoErrors(data, path) {
  return {
    data,
    path,

    get(field) {
      var _data$field;

      return dataGetterWithNoErrors((_data$field = data === null || data === void 0 ? void 0 : data[field]) !== null && _data$field !== void 0 ? _data$field : null, path.concat(field));
    }

  };
}

function dataGetterWithErrors(data, errors, path) {
  return {
    data,
    errors,
    path,

    get(field) {
      var _data$field2;

      const newPath = path.concat(field);
      const newItem = (_data$field2 = data === null || data === void 0 ? void 0 : data[field]) !== null && _data$field2 !== void 0 ? _data$field2 : null;
      let errorsForField = errors.filter(error => {
        if (error.path === undefined) {
          return true;
        }

        const errorPath = error.path;
        return newPath.every((value, index) => errorPath[index] === undefined || errorPath[index] === value);
      });

      if (errorsForField.length) {
        return dataGetterWithErrors(newItem, errors, newPath);
      }

      return dataGetterWithNoErrors(newItem, newPath);
    }

  };
}

function makeDataGetter(data, errors) {
  if (errors !== null && errors !== void 0 && errors.length) {
    return dataGetterWithErrors(data, errors, []);
  }

  return dataGetterWithNoErrors(data, []);
}

exports.makeDataGetter = makeDataGetter;


/***/ }),

/***/ 2088:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var weakMemoize = __webpack_require__(6059);
var graphql = __webpack_require__(7343);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var weakMemoize__default = /*#__PURE__*/_interopDefault(weakMemoize);

function extractRootFields(selectedFields, selectionSet) {
  selectionSet.selections.forEach(selection => {
    if (selection.kind === 'Field') {
      selectedFields.add(selection.alias ? selection.alias.value : selection.name.value);
    }

    if (selection.kind === 'InlineFragment') {
      extractRootFields(selectedFields, selection.selectionSet);
    } // FragmentSpread will never happen for the use cases of getRootFieldsFromSelection

  });
}

const getRootGraphQLFieldsFromFieldController = weakMemoize__default["default"](controller => {
  const ast = graphql.parse(`fragment X on Y {
  id
  ${controller.graphqlSelection}
  }`);
  const selectedFields = new Set();
  const fragmentNode = ast.definitions[0];
  extractRootFields(selectedFields, fragmentNode.selectionSet);
  return [...selectedFields];
});

exports.getRootGraphQLFieldsFromFieldController = getRootGraphQLFieldsFromFieldController;


/***/ }),

/***/ 9897:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var graphqlTsSchema = __webpack_require__(4432);
var graphqlTypeJson = __webpack_require__(6762);
var GraphQLUpload = __webpack_require__(1286);
var graphql = __webpack_require__(7343);
var Decimal$1 = __webpack_require__(9200);
var apiWithoutContext = __webpack_require__(2016);
var extend = __webpack_require__(3160);
var apiWithContext = __webpack_require__(8986);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var graphqlTsSchema__namespace = /*#__PURE__*/_interopNamespace(graphqlTsSchema);
var GraphQLUpload__default = /*#__PURE__*/_interopDefault(GraphQLUpload);

const JSON = graphqlTsSchema__namespace.graphql.scalar(graphqlTypeJson.GraphQLJSON);
const Upload = graphqlTsSchema__namespace.graphql.scalar(GraphQLUpload__default["default"]); // - Decimal.js throws on invalid inputs
// - Decimal.js can represent +Infinity and -Infinity, these aren't values in Postgres' decimal,
//   NaN is but Prisma doesn't support it
//   .isFinite refers to +Infinity, -Infinity and NaN

const Decimal = graphqlTsSchema__namespace.graphql.scalar(new graphql.GraphQLScalarType({
  name: 'Decimal',

  serialize(value) {
    if (!Decimal$1.Decimal.isDecimal(value)) {
      throw new graphql.GraphQLError(`unexpected value provided to Decimal scalar: ${value}`);
    }

    if (value.scaleToPrint !== undefined) {
      return value.toFixed(value.scaleToPrint);
    }

    return value.toString();
  },

  parseLiteral(value) {
    if (value.kind !== 'StringValue') {
      throw new graphql.GraphQLError('Decimal only accepts values as strings');
    }

    let decimal = new Decimal$1.Decimal(value.value);

    if (!decimal.isFinite()) {
      throw new graphql.GraphQLError('Decimal values must be finite');
    }

    return decimal;
  },

  parseValue(value) {
    if (Decimal$1.Decimal.isDecimal(value)) {
      if (!value.isFinite()) {
        throw new graphql.GraphQLError('Decimal values must be finite');
      }

      return value;
    }

    if (typeof value !== 'string') {
      throw new graphql.GraphQLError('Decimal only accepts values as strings');
    }

    let decimal = new Decimal$1.Decimal(value);

    if (!decimal.isFinite()) {
      throw new graphql.GraphQLError('Decimal values must be finite');
    }

    return decimal;
  }

})); // from https://github.com/excitement-engineer/graphql-iso-date/blob/master/src/utils/validator.js#L121
// this is also what prisma uses https://github.com/prisma/prisma/blob/20b58fe65d581bcb43c0d5c28d4b89cabc2d99b2/packages/client/src/runtime/utils/common.ts#L126-L128

const RFC_3339_REGEX = /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;

function parseDate(input) {
  if (!RFC_3339_REGEX.test(input)) {
    throw new graphql.GraphQLError('DateTime scalars must be in the form of a full ISO 8601 date-time string');
  }

  const parsed = new Date(input);

  if (isNaN(parsed.valueOf())) {
    throw new graphql.GraphQLError('DateTime scalars must be in the form of a full ISO 8601 date-time string');
  }

  return parsed;
}

const DateTime = graphqlTsSchema__namespace.graphql.scalar(new graphql.GraphQLScalarType({
  name: 'DateTime',
  specifiedByUrl: 'https://datatracker.ietf.org/doc/html/rfc3339#section-5.6',

  serialize(value) {
    if (!(value instanceof Date) || isNaN(value.valueOf())) {
      throw new graphql.GraphQLError(`unexpected value provided to DateTime scalar: ${value}`);
    }

    return value.toISOString();
  },

  parseLiteral(value) {
    if (value.kind !== 'StringValue') {
      throw new graphql.GraphQLError('DateTime only accepts values as strings');
    }

    return parseDate(value.value);
  },

  parseValue(value) {
    if (value instanceof Date) {
      return value;
    }

    if (typeof value !== 'string') {
      throw new graphql.GraphQLError('DateTime only accepts values as strings');
    }

    return parseDate(value);
  }

}));

var graphqlBoundToKeystoneContext = /*#__PURE__*/Object.freeze({
  __proto__: null,
  JSON: JSON,
  Upload: Upload,
  Decimal: Decimal,
  DateTime: DateTime,
  Boolean: apiWithoutContext.Boolean,
  Float: apiWithoutContext.Float,
  ID: apiWithoutContext.ID,
  Int: apiWithoutContext.Int,
  String: apiWithoutContext.String,
  'enum': apiWithoutContext["enum"],
  enumValues: apiWithoutContext.enumValues,
  arg: apiWithoutContext.arg,
  inputObject: apiWithoutContext.inputObject,
  list: apiWithoutContext.list,
  nonNull: apiWithoutContext.nonNull,
  scalar: apiWithoutContext.scalar,
  bindGraphQLSchemaAPIToContext: graphqlTsSchema.bindGraphQLSchemaAPIToContext,
  extend: extend.extend,
  wrap: extend.wrap,
  field: apiWithContext.field,
  fields: apiWithContext.fields,
  'interface': apiWithContext["interface"],
  interfaceField: apiWithContext.interfaceField,
  object: apiWithContext.object,
  union: apiWithContext.union
});

exports.DateTime = DateTime;
exports.Decimal = Decimal;
exports.JSON = JSON;
exports.Upload = Upload;
exports.graphqlBoundToKeystoneContext = graphqlBoundToKeystoneContext;


/***/ }),

/***/ 8859:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var graphqlTsSchema = __webpack_require__(9897);
var _objectSpread = __webpack_require__(417);
__webpack_require__(9200);
__webpack_require__(4626);
var apiWithoutContext = __webpack_require__(2016);

const orderDirectionEnum = apiWithoutContext["enum"]({
  name: 'OrderDirection',
  values: apiWithoutContext.enumValues(['asc', 'desc'])
});
const QueryMode = apiWithoutContext["enum"]({
  name: 'QueryMode',
  values: apiWithoutContext.enumValues(['default', 'insensitive'])
});
// fieldType(dbField)(fieldInfo) => { ...fieldInfo, dbField };
function fieldType(dbField) {
  return function (graphQLInfo) {
    return _objectSpread(_objectSpread({}, graphQLInfo), {}, {
      dbField
    });
  };
}

// (even though, yes, having EnumFilter by defined as EnumNullableFilter<Enum>, would be the same type but names would show up differently in editors for example)

function enumFilters(enumType) {
  const optional = apiWithoutContext.inputObject({
    name: `${enumType.graphQLType.name}NullableFilter`,
    fields: () => ({
      equals: apiWithoutContext.arg({
        type: enumType
      }),
      in: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      notIn: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      not: apiWithoutContext.arg({
        type: optional
      })
    })
  });
  const required = apiWithoutContext.inputObject({
    name: `${enumType.graphQLType.name}Filter`,
    fields: () => ({
      equals: apiWithoutContext.arg({
        type: enumType
      }),
      in: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      notIn: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      not: apiWithoutContext.arg({
        type: optional
      })
    })
  });
  const many = apiWithoutContext.inputObject({
    name: `${enumType.graphQLType.name}NullableListFilter`,
    fields: () => ({
      // can be null
      equals: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      // can be null
      has: apiWithoutContext.arg({
        type: enumType
      }),
      hasEvery: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      hasSome: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      isEmpty: apiWithoutContext.arg({
        type: enumType
      })
    })
  });
  return {
    optional,
    required,
    many
  };
}

// Do not manually modify this file, it is automatically generated by the package at /prisma-utils in this repo.
const StringNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'StringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    mode: apiWithoutContext.arg({
      type: QueryMode
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter$1
    })
  })
});
const NestedStringNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter$1
    })
  })
});
const StringFilter$1 = apiWithoutContext.inputObject({
  name: 'StringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    mode: apiWithoutContext.arg({
      type: QueryMode
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter$1
    })
  })
});
const NestedStringFilter$1 = apiWithoutContext.inputObject({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter$1
    })
  })
});
const StringNullableListFilter = apiWithoutContext.inputObject({
  name: 'StringNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const BoolNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'BooleanNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: BoolNullableFilter$1
    })
  })
});
const BoolFilter$1 = apiWithoutContext.inputObject({
  name: 'BooleanFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    not: apiWithoutContext.arg({
      type: BoolFilter$1
    })
  })
});
const BoolNullableListFilter = apiWithoutContext.inputObject({
  name: 'BooleanNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Boolean))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Boolean))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Boolean))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const IntNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'IntNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: IntNullableFilter$1
    })
  })
});
const IntFilter$1 = apiWithoutContext.inputObject({
  name: 'IntFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    not: apiWithoutContext.arg({
      type: IntFilter$1
    })
  })
});
const IntNullableListFilter = apiWithoutContext.inputObject({
  name: 'IntNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const FloatNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'FloatNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: FloatNullableFilter$1
    })
  })
});
const FloatFilter$1 = apiWithoutContext.inputObject({
  name: 'FloatFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    not: apiWithoutContext.arg({
      type: FloatFilter$1
    })
  })
});
const FloatNullableListFilter = apiWithoutContext.inputObject({
  name: 'FloatNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const DateTimeNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DateTimeNullableFilter$1
    })
  })
});
const DateTimeFilter$1 = apiWithoutContext.inputObject({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    not: apiWithoutContext.arg({
      type: DateTimeFilter$1
    })
  })
});
const DateTimeNullableListFilter = apiWithoutContext.inputObject({
  name: 'DateTimeNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const DecimalNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'DecimalNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DecimalNullableFilter$1
    })
  })
});
const DecimalFilter$1 = apiWithoutContext.inputObject({
  name: 'DecimalFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    not: apiWithoutContext.arg({
      type: DecimalFilter$1
    })
  })
});
const DecimalNullableListFilter = apiWithoutContext.inputObject({
  name: 'DecimalNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const String$1 = {
  optional: StringNullableFilter$1,
  required: StringFilter$1,
  many: StringNullableListFilter
};
const Boolean$1 = {
  optional: BoolNullableFilter$1,
  required: BoolFilter$1,
  many: BoolNullableListFilter
};
const Int$1 = {
  optional: IntNullableFilter$1,
  required: IntFilter$1,
  many: IntNullableListFilter
};
const Float$1 = {
  optional: FloatNullableFilter$1,
  required: FloatFilter$1,
  many: FloatNullableListFilter
};
const DateTime$1 = {
  optional: DateTimeNullableFilter$1,
  required: DateTimeFilter$1,
  many: DateTimeNullableListFilter
};
const Decimal$1 = {
  optional: DecimalNullableFilter$1,
  required: DecimalFilter$1,
  many: DecimalNullableListFilter
};

var postgresql = /*#__PURE__*/Object.freeze({
  __proto__: null,
  String: String$1,
  Boolean: Boolean$1,
  Int: Int$1,
  Float: Float$1,
  DateTime: DateTime$1,
  Decimal: Decimal$1,
  'enum': enumFilters
});

// Do not manually modify this file, it is automatically generated by the package at /prisma-utils in this repo.
const StringNullableFilter = apiWithoutContext.inputObject({
  name: 'StringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter
    })
  })
});
const NestedStringNullableFilter = apiWithoutContext.inputObject({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter
    })
  })
});
const StringFilter = apiWithoutContext.inputObject({
  name: 'StringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter
    })
  })
});
const NestedStringFilter = apiWithoutContext.inputObject({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter
    })
  })
});
const BoolNullableFilter = apiWithoutContext.inputObject({
  name: 'BooleanNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: BoolNullableFilter
    })
  })
});
const BoolFilter = apiWithoutContext.inputObject({
  name: 'BooleanFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    not: apiWithoutContext.arg({
      type: BoolFilter
    })
  })
});
const IntNullableFilter = apiWithoutContext.inputObject({
  name: 'IntNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: IntNullableFilter
    })
  })
});
const IntFilter = apiWithoutContext.inputObject({
  name: 'IntFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    not: apiWithoutContext.arg({
      type: IntFilter
    })
  })
});
const FloatNullableFilter = apiWithoutContext.inputObject({
  name: 'FloatNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: FloatNullableFilter
    })
  })
});
const FloatFilter = apiWithoutContext.inputObject({
  name: 'FloatFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    not: apiWithoutContext.arg({
      type: FloatFilter
    })
  })
});
const DateTimeNullableFilter = apiWithoutContext.inputObject({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DateTimeNullableFilter
    })
  })
});
const DateTimeFilter = apiWithoutContext.inputObject({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    not: apiWithoutContext.arg({
      type: DateTimeFilter
    })
  })
});
const DecimalNullableFilter = apiWithoutContext.inputObject({
  name: 'DecimalNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DecimalNullableFilter
    })
  })
});
const DecimalFilter = apiWithoutContext.inputObject({
  name: 'DecimalFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    not: apiWithoutContext.arg({
      type: DecimalFilter
    })
  })
});
const String = {
  optional: StringNullableFilter,
  required: StringFilter
};
const Boolean = {
  optional: BoolNullableFilter,
  required: BoolFilter
};
const Int = {
  optional: IntNullableFilter,
  required: IntFilter
};
const Float = {
  optional: FloatNullableFilter,
  required: FloatFilter
};
const DateTime = {
  optional: DateTimeNullableFilter,
  required: DateTimeFilter
};
const Decimal = {
  optional: DecimalNullableFilter,
  required: DecimalFilter
};

var sqlite = /*#__PURE__*/Object.freeze({
  __proto__: null,
  String: String,
  Boolean: Boolean,
  Int: Int,
  Float: Float,
  DateTime: DateTime,
  Decimal: Decimal,
  'enum': enumFilters
});

exports.QueryMode = QueryMode;
exports.fieldType = fieldType;
exports.orderDirectionEnum = orderDirectionEnum;
exports.postgresql = postgresql;
exports.sqlite = sqlite;


/***/ }),

/***/ 8270:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(6689);
var isDeepEqual = __webpack_require__(2404);
var getRootGraphQLFieldsFromFieldController = __webpack_require__(2088);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function deserializeValue(fields, itemGetter) {
  const value = {};
  Object.keys(fields).forEach(fieldKey => {
    const field = fields[fieldKey];
    const itemForField = {};
    const errors = new Set();

    for (const graphqlField of getRootGraphQLFieldsFromFieldController.getRootGraphQLFieldsFromFieldController(field.controller)) {
      const fieldGetter = itemGetter.get(graphqlField);

      if (fieldGetter.errors) {
        fieldGetter.errors.forEach(error => {
          errors.add(error);
        });
      }

      itemForField[graphqlField] = fieldGetter.data;
    }

    if (errors.size) {
      value[fieldKey] = {
        kind: 'error',
        errors: [...errors]
      };
    } else {
      value[fieldKey] = {
        kind: 'value',
        value: field.controller.deserialize(itemForField)
      };
    }
  });
  return value;
}
function serializeValueToObjByFieldKey(fields, value) {
  const obj = {};
  Object.keys(fields).map(fieldKey => {
    const val = value[fieldKey];

    if (val.kind === 'value') {
      obj[fieldKey] = fields[fieldKey].controller.serialize(val.value);
    }
  });
  return obj;
}

function useChangedFieldsAndDataForUpdate(fields, itemGetter, value) {
  const serializedValuesFromItem = React.useMemo(() => {
    const value = deserializeValue(fields, itemGetter);
    return serializeValueToObjByFieldKey(fields, value);
  }, [fields, itemGetter]);
  const serializedFieldValues = React.useMemo(() => {
    return serializeValueToObjByFieldKey(fields, value);
  }, [value, fields]);
  return React.useMemo(() => {
    let changedFields = new Set();
    Object.keys(serializedFieldValues).forEach(fieldKey => {
      let isEqual = isDeepEqual__default["default"](serializedFieldValues[fieldKey], serializedValuesFromItem[fieldKey]);

      if (!isEqual) {
        changedFields.add(fieldKey);
      }
    });
    const dataForUpdate = {};
    changedFields.forEach(fieldKey => {
      Object.assign(dataForUpdate, serializedFieldValues[fieldKey]);
    });
    return {
      changedFields: changedFields,
      dataForUpdate
    };
  }, [serializedFieldValues, serializedValuesFromItem]);
}

function useInvalidFields(fields, value) {
  return React.useMemo(() => {
    const invalidFields = new Set();
    Object.keys(value).forEach(fieldPath => {
      const val = value[fieldPath];

      if (val.kind === 'value') {
        const validateFn = fields[fieldPath].controller.validate;

        if (validateFn) {
          const result = validateFn(val.value);

          if (result === false) {
            invalidFields.add(fieldPath);
          }
        }
      }
    });
    return invalidFields;
  }, [fields, value]);
}

exports.deserializeValue = deserializeValue;
exports.serializeValueToObjByFieldKey = serializeValueToObjByFieldKey;
exports.useChangedFieldsAndDataForUpdate = useChangedFieldsAndDataForUpdate;
exports.useInvalidFields = useInvalidFields;


/***/ }),

/***/ 1839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(6689);

function useFormattedInput(config, _ref) {
  let {
    value,
    onChange,
    onBlur,
    onFocus
  } = _ref;

  // typeof value === 'string' implies the unparsed form
  // typeof value !== 'string' implies the parsed form
  if (typeof value === 'string' && typeof config.parse(value) !== 'string') {
    throw new Error(`Valid values must be passed in as a parsed value, not a raw value. The value you passed was \`${JSON.stringify(value)}\`, you should pass \`${JSON.stringify(config.parse(value))}\` instead`);
  }

  let [internalValueState, setInternalValueState] = React.useState(() => typeof value === 'string' ? value : config.format(value));
  const [isFocused, setIsFocused] = React.useState(false);

  if (typeof value === 'string' && value !== internalValueState) {
    setInternalValueState(value);
  } // If the value is not a string, we know it's in the parsed form


  if (typeof value !== 'string') {
    const formatted = config.format(value); // When the input is blurred, we want to show always show the formatted
    // version so if we're not focussed and the formatted version is different
    // to the current version, we need to update it.

    if (!isFocused && formatted !== internalValueState) {
      setInternalValueState(formatted);
    }

    const parsedInternal = config.parse(internalValueState); // We updating the internal value here because the
    // external value has changed.

    if (typeof parsedInternal !== 'string' && config.format(parsedInternal) !== formatted) {
      setInternalValueState(formatted);
    }
  }

  return {
    value: internalValueState,

    onChange(event) {
      const value = event.target.value;
      const parsed = config.parse(value);
      onChange(parsed);
      setInternalValueState(value);
    },

    onFocus(event) {
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
      setIsFocused(true);
    },

    onBlur(event) {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
      setIsFocused(false); // this isn't strictly necessary since we already do this in render
      // this just saves another rerender after setIsFocused(false)

      if (typeof value !== 'string') {
        setInternalValueState(config.format(value));
      }
    }

  };
}

exports.useFormattedInput = useFormattedInput;


/***/ }),

/***/ 9968:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5207);
} else {}


/***/ }),

/***/ 5207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(417);
var React = __webpack_require__(6689);
var button = __webpack_require__(7024);
var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var EyeIcon = __webpack_require__(9218);
var EyeOffIcon = __webpack_require__(1931);
var XIcon = __webpack_require__(3191);
var segmentedControl = __webpack_require__(4401);
var dumbPasswords = __webpack_require__(3647);
var CellContainer = __webpack_require__(4377);
__webpack_require__(8527);
__webpack_require__(2220);
__webpack_require__(1853);
__webpack_require__(9097);
__webpack_require__(1260);
__webpack_require__(6613);
__webpack_require__(2744);
__webpack_require__(4106);
__webpack_require__(6378);
__webpack_require__(6661);
__webpack_require__(4380);
__webpack_require__(8859);
__webpack_require__(9897);
__webpack_require__(9114);
__webpack_require__(851);
__webpack_require__(7330);
__webpack_require__(8158);
__webpack_require__(1610);
__webpack_require__(360);
__webpack_require__(2404);
__webpack_require__(5584);
__webpack_require__(9200);
__webpack_require__(4626);
__webpack_require__(2016);
__webpack_require__(4432);
__webpack_require__(6762);
__webpack_require__(1286);
__webpack_require__(7343);
__webpack_require__(3160);
__webpack_require__(8986);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var dumbPasswords__default = /*#__PURE__*/_interopDefault(dumbPasswords);

function validate(value, validation, fieldLabel) {
  if (value.kind === 'initial' && (value.isSet === null || value.isSet === true)) {
    return undefined;
  }

  if (value.kind === 'initial' && validation !== null && validation !== void 0 && validation.isRequired) {
    return `${fieldLabel} is required`;
  }

  if (value.kind === 'editing' && value.confirm !== value.value) {
    return `The passwords do not match`;
  }

  if (value.kind === 'editing') {
    const val = value.value;

    if (val.length < validation.length.min) {
      if (validation.length.min === 1) {
        return `${fieldLabel} must not be empty`;
      }

      return `${fieldLabel} must be at least ${validation.length.min} characters long`;
    }

    if (validation.length.max !== null && val.length > validation.length.max) {
      return `${fieldLabel} must be no longer than ${validation.length.min} characters`;
    }

    if (validation.match && !validation.match.regex.test(val)) {
      return validation.match.explanation;
    }

    if (validation.rejectCommon && dumbPasswords__default["default"].check(val)) {
      return `${fieldLabel} is too common and is not allowed`;
    }
  }

  return undefined;
}

function isSetText(isSet) {
  return isSet == null ? 'Access Denied' : isSet ? 'Is set' : 'Is not set';
}

const Field = _ref => {
  let {
    field,
    value,
    onChange,
    forceValidation,
    autoFocus
  } = _ref;
  const [showInputValue, setShowInputValue] = React.useState(false);
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const shouldShowValidation = forceValidation || touchedFirstInput && touchedSecondInput;
  const validationMessage = shouldShowValidation ? validate(value, field.validation, field.label) : undefined;
  const validation = validationMessage && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validationMessage);
  const inputType = showInputValue ? 'text' : 'password';
  return core.jsx(fields.FieldContainer, {
    as: "fieldset"
  }, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange === undefined ? isSetText(value.isSet) : value.kind === 'initial' ? core.jsx(React.Fragment, null, core.jsx(button.Button, {
    autoFocus: autoFocus,
    onClick: () => {
      onChange({
        kind: 'editing',
        confirm: '',
        value: '',
        isSet: value.isSet
      });
    }
  }, value.isSet ? 'Change Password' : 'Set Password'), validation) : core.jsx(core.Stack, {
    gap: "small"
  }, core.jsx("div", {
    css: {
      display: 'flex'
    }
  }, core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: `${field.path}-new-password`
  }, "New Password"), core.jsx(fields.TextInput, {
    id: `${field.path}-new-password`,
    autoFocus: true,
    invalid: validationMessage !== undefined,
    type: inputType,
    value: value.value,
    placeholder: "New Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedFirstInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: `${field.path}-confirm-password`
  }, "Confirm Password"), core.jsx(fields.TextInput, {
    id: `${field.path}-confirm-password`,
    invalid: validationMessage !== undefined,
    type: inputType,
    value: value.confirm,
    placeholder: "Confirm Password",
    onChange: event => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        confirm: event.target.value
      }));
    },
    onBlur: () => {
      setTouchedSecondInput(true);
    }
  }), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      setShowInputValue(!showInputValue);
    }
  }, core.jsx(core.VisuallyHidden, null, showInputValue ? 'Hide Text' : 'Show Text'), showInputValue ? core.jsx(EyeOffIcon.EyeOffIcon, null) : core.jsx(EyeIcon.EyeIcon, null)), core.jsx(Spacer, null), core.jsx(button.Button, {
    onClick: () => {
      onChange({
        kind: 'initial',
        isSet: value.isSet
      });
    }
  }, core.jsx(core.VisuallyHidden, null, "Cancel"), core.jsx(XIcon.XIcon, null))), validation));
};
const Cell = _ref2 => {
  var _item$field$path;

  let {
    item,
    field
  } = _ref2;
  return core.jsx(CellContainer.CellContainer, null, isSetText((_item$field$path = item[field.path]) === null || _item$field$path === void 0 ? void 0 : _item$field$path.isSet));
};
const CardValue = _ref3 => {
  var _item$field$path2;

  let {
    item,
    field
  } = _ref3;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), isSetText((_item$field$path2 = item[field.path]) === null || _item$field$path2 === void 0 ? void 0 : _item$field$path2.isSet));
};
const controller = config => {
  const validation = _objectSpread(_objectSpread({}, config.fieldMeta.validation), {}, {
    match: config.fieldMeta.validation.match === null ? null : {
      regex: new RegExp(config.fieldMeta.validation.match.regex.source, config.fieldMeta.validation.match.regex.flags),
      explanation: config.fieldMeta.validation.match.explanation
    }
  });

  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path} {isSet}`,
    validation,
    defaultValue: {
      kind: 'initial',
      isSet: false
    },
    validate: state => validate(state, validation, config.label) === undefined,
    deserialize: data => {
      var _data$config$path$isS, _data$config$path;

      return {
        kind: 'initial',
        isSet: (_data$config$path$isS = (_data$config$path = data[config.path]) === null || _data$config$path === void 0 ? void 0 : _data$config$path.isSet) !== null && _data$config$path$isS !== void 0 ? _data$config$path$isS : null
      };
    },
    serialize: value => {
      if (value.kind === 'initial') return {};
      return {
        [config.path]: value.value
      };
    },
    filter: config.fieldMeta.isNullable === false ? undefined : {
      Filter(props) {
        return core.jsx(segmentedControl.SegmentedControl, {
          selectedIndex: Number(props.value),
          onChange: value => {
            props.onChange(!!value);
          },
          segments: ['Is Not Set', 'Is Set']
        });
      },

      graphql: _ref4 => {
        let {
          value
        } = _ref4;
        return {
          [config.path]: {
            isSet: value
          }
        };
      },

      Label(_ref5) {
        let {
          value
        } = _ref5;
        return value ? 'is set' : 'is not set';
      },

      types: {
        is_set: {
          label: 'Is Set',
          initialValue: true
        }
      }
    }
  };
};

const Spacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      width: spacing.small,
      flexShrink: 0
    }
  });
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectWithoutProperties = __webpack_require__(2220);
var _toPropertyKey = __webpack_require__(4582);
__webpack_require__(4916);
var React = __webpack_require__(6689);
var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var uuid = __webpack_require__(5828);
var client = __webpack_require__(9114);

const _excluded = ["children"];

function useIntersectionObserver(cb, ref) {
  const cbRef = React.useRef(cb);
  React.useEffect(() => {
    cbRef.current = cb;
  });
  React.useEffect(() => {
    let observer = new IntersectionObserver(function () {
      return cbRef.current(...arguments);
    }, {});
    let node = ref.current;

    if (node !== null) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  }, [ref]);
}

const idValidators = {
  uuid: uuid.validate,

  cuid(value) {
    return value.startsWith('c');
  },

  autoincrement(value) {
    return /^\d+$/.test(value);
  }

};

function useDebouncedValue(value, limitMs) {
  const [debouncedValue, setDebouncedValue] = React.useState(() => value);
  React.useEffect(() => {
    let id = setTimeout(() => {
      setDebouncedValue(() => value);
    }, limitMs);
    return () => {
      clearTimeout(id);
    };
  }, [value, limitMs]);
  return debouncedValue;
}

function useFilter(search, list) {
  return React.useMemo(() => {
    let conditions = [];

    if (search.length) {
      const idFieldKind = list.fields.id.controller.idFieldKind;
      const trimmedSearch = search.trim();
      const isValidId = idValidators[idFieldKind](trimmedSearch);

      if (isValidId) {
        conditions.push({
          id: {
            equals: trimmedSearch
          }
        });
      }

      for (const field of Object.values(list.fields)) {
        if (field.search !== null) {
          conditions.push({
            [field.path]: {
              contains: trimmedSearch,
              mode: field.search === 'insensitive' ? 'insensitive' : undefined
            }
          });
        }
      }
    }

    return {
      OR: conditions
    };
  }, [search, list]);
}

const initialItemsToLoad = 10;
const subsequentItemsToLoad = 50;
const idField = '____id____';
const labelField = '____label____';
const LoadingIndicatorContext = /*#__PURE__*/React.createContext({
  count: 0,
  ref: () => {}
});
const RelationshipSelect = _ref => {
  var _data$items;

  let {
    autoFocus,
    controlShouldRenderValue,
    isDisabled,
    isLoading,
    list,
    placeholder,
    portalMenu,
    state,
    extraSelection = ''
  } = _ref;
  const [search, setSearch] = React.useState(''); // note it's important that this is in state rather than a ref
  // because we want a re-render if the element changes
  // so that we can register the intersection observer
  // on the right element

  const [loadingIndicatorElement, setLoadingIndicatorElement] = React.useState(null);
  const QUERY = client.gql`
    query RelationshipSelect($where: ${list.gqlNames.whereInputName}!, $take: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(where: $where, take: $take, skip: $skip) {
        ${idField}: id
        ${labelField}: ${list.labelField}
        ${extraSelection}
      }
      count: ${list.gqlNames.listQueryCountName}(where: $where)
    }
  `;
  const debouncedSearch = useDebouncedValue(search, 200);
  const where = useFilter(debouncedSearch, list);
  const link = client.useApolloClient().link; // we're using a local apollo client here because writing a global implementation of the typePolicies
  // would require making assumptions about how pagination should work which won't always be right

  const apolloClient = React.useMemo(() => new client.ApolloClient({
    link,
    cache: new client.InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            [list.gqlNames.listQueryName]: {
              keyArgs: ['where'],
              merge: (existing, incoming, _ref2) => {
                let {
                  args
                } = _ref2;
                const merged = existing ? existing.slice() : [];
                const {
                  skip
                } = args;

                for (let i = 0; i < incoming.length; ++i) {
                  merged[skip + i] = incoming[i];
                }

                return merged;
              }
            }
          }
        }
      }
    })
  }), [link, list.gqlNames.listQueryName]);
  const {
    data,
    error,
    loading,
    fetchMore
  } = client.useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: {
      where,
      take: initialItemsToLoad,
      skip: 0
    },
    client: apolloClient
  });
  const count = (data === null || data === void 0 ? void 0 : data.count) || 0;
  const options = (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map(_ref3 => {
    let {
      [idField]: value,
      [labelField]: label
    } = _ref3,
        data = _objectWithoutProperties(_ref3, [idField, labelField].map(_toPropertyKey));

    return {
      value,
      label: label || value,
      data
    };
  })) || [];
  const loadingIndicatorContextVal = React.useMemo(() => ({
    count,
    ref: setLoadingIndicatorElement
  }), [count]); // we want to avoid fetching more again and `loading` from Apollo
  // doesn't seem to become true when fetching more

  const [lastFetchMore, setLastFetchMore] = React.useState(null);
  useIntersectionObserver(_ref4 => {
    let [{
      isIntersecting
    }] = _ref4;
    const skip = data === null || data === void 0 ? void 0 : data.items.length;

    if (!loading && skip && isIntersecting && options.length < count && ((lastFetchMore === null || lastFetchMore === void 0 ? void 0 : lastFetchMore.extraSelection) !== extraSelection || (lastFetchMore === null || lastFetchMore === void 0 ? void 0 : lastFetchMore.where) !== where || (lastFetchMore === null || lastFetchMore === void 0 ? void 0 : lastFetchMore.list) !== list || (lastFetchMore === null || lastFetchMore === void 0 ? void 0 : lastFetchMore.skip) !== skip)) {
      const QUERY = client.gql`
              query RelationshipSelectMore($where: ${list.gqlNames.whereInputName}!, $take: Int!, $skip: Int!) {
                items: ${list.gqlNames.listQueryName}(where: $where, take: $take, skip: $skip) {
                  ${labelField}: ${list.labelField}
                  ${idField}: id
                  ${extraSelection}
                }
              }
            `;
      setLastFetchMore({
        extraSelection,
        list,
        skip,
        where
      });
      fetchMore({
        query: QUERY,
        variables: {
          where,
          take: subsequentItemsToLoad,
          skip
        }
      }).then(() => {
        setLastFetchMore(null);
      }).catch(() => {
        setLastFetchMore(null);
      });
    }
  }, {
    current: loadingIndicatorElement
  }); // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)

  if (error) {
    return core.jsx("span", null, "Error");
  }

  if (state.kind === 'one') {
    return core.jsx(LoadingIndicatorContext.Provider, {
      value: loadingIndicatorContextVal
    }, core.jsx(fields.Select // this is necessary because react-select passes a second argument to onInputChange
    // and useState setters log a warning if a second argument is passed
    , {
      onInputChange: val => setSearch(val),
      isLoading: loading || isLoading,
      autoFocus: autoFocus,
      components: relationshipSelectComponents,
      portalMenu: portalMenu,
      value: state.value ? {
        value: state.value.id,
        label: state.value.label,
        // @ts-ignore
        data: state.value.data
      } : null,
      options: options,
      onChange: value => {
        state.onChange(value ? {
          id: value.value,
          label: value.label,
          data: value.data
        } : null);
      },
      placeholder: placeholder,
      controlShouldRenderValue: controlShouldRenderValue,
      isClearable: controlShouldRenderValue,
      isDisabled: isDisabled
    }));
  }

  return core.jsx(LoadingIndicatorContext.Provider, {
    value: loadingIndicatorContextVal
  }, core.jsx(fields.MultiSelect // this is necessary because react-select passes a second argument to onInputChange
  // and useState setters log a warning if a second argument is passed
  , {
    onInputChange: val => setSearch(val),
    isLoading: loading || isLoading,
    autoFocus: autoFocus,
    components: relationshipSelectComponents,
    portalMenu: portalMenu,
    value: state.value.map(value => ({
      value: value.id,
      label: value.label,
      data: value.data
    })),
    options: options,
    onChange: value => {
      state.onChange(value.map(x => ({
        id: x.value,
        label: x.label,
        data: x.data
      })));
    },
    placeholder: placeholder,
    controlShouldRenderValue: controlShouldRenderValue,
    isClearable: controlShouldRenderValue,
    isDisabled: isDisabled
  }));
};
const relationshipSelectComponents = {
  MenuList: _ref5 => {
    let {
      children
    } = _ref5,
        props = _objectWithoutProperties(_ref5, _excluded);

    const {
      count,
      ref
    } = React.useContext(LoadingIndicatorContext);
    return core.jsx(fields.selectComponents.MenuList, props, children, core.jsx("div", {
      css: {
        textAlign: 'center'
      },
      ref: ref
    }, props.options.length < count && core.jsx("span", {
      css: {
        padding: 8
      }
    }, "Loading...")));
  }
};

exports.RelationshipSelect = RelationshipSelect;


/***/ }),

/***/ 9522:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(4606);
} else {}


/***/ }),

/***/ 4606:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(417);
var _extends = __webpack_require__(8527);
var React = __webpack_require__(6689);
var button = __webpack_require__(7024);
var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var modals = __webpack_require__(6378);
var adminUi_router_dist_keystone6CoreAdminUiRouter = __webpack_require__(42);
var adminUi_context_dist_keystone6CoreAdminUiContext = __webpack_require__(7583);
var client = __webpack_require__(9114);
var CellContainer = __webpack_require__(4377);
__webpack_require__(1260);
__webpack_require__(6613);
__webpack_require__(9097);
var _objectWithoutProperties = __webpack_require__(2220);
__webpack_require__(1853);
__webpack_require__(7330);
__webpack_require__(8158);
__webpack_require__(1610);
__webpack_require__(360);
var CreateItemDrawer = __webpack_require__(8447);
__webpack_require__(5584);
var tooltip = __webpack_require__(2518);
var loading = __webpack_require__(4106);
var dataGetter = __webpack_require__(9475);
var getRootGraphQLFieldsFromFieldController = __webpack_require__(2088);
var isDeepEqual = __webpack_require__(2404);
var fields_types_relationship_views_RelationshipSelect_dist_keystone6CoreFieldsTypesRelationshipViewsRelationshipSelect = __webpack_require__(24);
var toast = __webpack_require__(2744);
var Fields = __webpack_require__(3639);
var useInvalidFields = __webpack_require__(8270);
__webpack_require__(6661);
__webpack_require__(4380);
__webpack_require__(8859);
__webpack_require__(9897);
__webpack_require__(851);
var GraphQLErrorNotice = __webpack_require__(4259);
__webpack_require__(6143);
__webpack_require__(9200);
__webpack_require__(4626);
__webpack_require__(2016);
__webpack_require__(4432);
__webpack_require__(6762);
__webpack_require__(1286);
__webpack_require__(7343);
__webpack_require__(3160);
__webpack_require__(8986);
__webpack_require__(6059);
__webpack_require__(4582);
__webpack_require__(4916);
__webpack_require__(5828);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function useItemState(_ref) {
  let {
    selectedFields,
    localList,
    id,
    field
  } = _ref;
  const {
    data,
    error,
    loading
  } = client.useQuery(client.gql`query($id: ID!) {
  item: ${localList.gqlNames.itemQueryName}(where: {id: $id}) {
    id
    relationship: ${field.path} {
      ${selectedFields}
    }
  }
}`, {
    variables: {
      id
    },
    errorPolicy: 'all',
    skip: id === null
  });
  const {
    itemsArrFromData,
    relationshipGetter
  } = React.useMemo(() => {
    const dataGetter$1 = dataGetter.makeDataGetter(data, error === null || error === void 0 ? void 0 : error.graphQLErrors);
    const relationshipGetter = dataGetter$1.get('item').get('relationship');
    const isMany = Array.isArray(relationshipGetter.data);
    const itemsArrFromData = (isMany ? relationshipGetter.data.map((_, i) => relationshipGetter.get(i)) : [relationshipGetter]).filter(x => {
      var _x$data;

      return ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.id) != null;
    });
    return {
      relationshipGetter,
      itemsArrFromData
    };
  }, [data, error]);
  let [{
    items,
    itemsArrFromData: itemsArrFromDataState
  }, setItemsState] = React.useState({
    itemsArrFromData: [],
    items: {}
  });

  if (itemsArrFromDataState !== itemsArrFromData) {
    let newItems = {};
    itemsArrFromData.forEach(item => {
      var _items$item$data$id, _item$errors, _initialItemInState$e;

      const initialItemInState = (_items$item$data$id = items[item.data.id]) === null || _items$item$data$id === void 0 ? void 0 : _items$item$data$id.fromInitialQuery;

      if ((items[item.data.id] && initialItemInState || !items[item.data.id]) && (!initialItemInState || item.data !== initialItemInState.data || ((_item$errors = item.errors) === null || _item$errors === void 0 ? void 0 : _item$errors.length) !== ((_initialItemInState$e = initialItemInState.errors) === null || _initialItemInState$e === void 0 ? void 0 : _initialItemInState$e.length) || (item.errors || []).some((err, i) => {
        var _initialItemInState$e2;

        return err !== ((_initialItemInState$e2 = initialItemInState.errors) === null || _initialItemInState$e2 === void 0 ? void 0 : _initialItemInState$e2[i]);
      }))) {
        newItems[item.data.id] = {
          current: item,
          fromInitialQuery: item
        };
      } else {
        newItems[item.data.id] = items[item.data.id];
      }
    });
    items = newItems;
    setItemsState({
      items: newItems,
      itemsArrFromData
    });
  }

  return {
    items: React.useMemo(() => {
      const itemsToReturn = {};
      Object.keys(items).forEach(id => {
        itemsToReturn[id] = items[id].current;
      });
      return itemsToReturn;
    }, [items]),
    setItems: React.useCallback(items => {
      setItemsState(state => {
        let itemsForState = {};
        Object.keys(items).forEach(id => {
          var _state$items$id;

          if (items[id] === ((_state$items$id = state.items[id]) === null || _state$items$id === void 0 ? void 0 : _state$items$id.current)) {
            itemsForState[id] = state.items[id];
          } else {
            var _state$items$id2;

            itemsForState[id] = {
              current: items[id],
              fromInitialQuery: (_state$items$id2 = state.items[id]) === null || _state$items$id2 === void 0 ? void 0 : _state$items$id2.fromInitialQuery
            };
          }
        });
        return {
          itemsArrFromData: state.itemsArrFromData,
          items: itemsForState
        };
      });
    }, [setItemsState]),
    state: (() => {
      if (loading) {
        return {
          kind: 'loading'
        };
      }

      if (error !== null && error !== void 0 && error.networkError) {
        return {
          kind: 'error',
          message: error.networkError.message
        };
      }

      if (field.many && !relationshipGetter.data) {
        var _relationshipGetter$e;

        return {
          kind: 'error',
          message: ((_relationshipGetter$e = relationshipGetter.errors) === null || _relationshipGetter$e === void 0 ? void 0 : _relationshipGetter$e[0].message) || ''
        };
      }

      return {
        kind: 'loaded'
      };
    })()
  };
}
function useFieldsObj(list, fields) {
  return React.useMemo(() => {
    const editFields = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(fieldPath => {
      editFields[fieldPath] = list.fields[fieldPath];
    });
    return editFields;
  }, [fields, list.fields]);
}

function InlineEdit(_ref) {
  var _itemGetter$errors;

  let {
    fields,
    list,
    selectedFields,
    itemGetter,
    onCancel,
    onSave
  } = _ref;
  const fieldsObj = useFieldsObj(list, fields);
  const [update, {
    loading,
    error
  }] = client.useMutation(client.gql`mutation ($data: ${list.gqlNames.updateInputName}!, $id: ID!) {
          item: ${list.gqlNames.updateMutationName}(where: { id: $id }, data: $data) {
            ${selectedFields}
          }
        }`, {
    errorPolicy: 'all'
  });
  const [state, setValue] = React.useState(() => {
    const value = useInvalidFields.deserializeValue(fieldsObj, itemGetter);
    return {
      value,
      item: itemGetter.data
    };
  });

  if (state.item !== itemGetter.data && (_itemGetter$errors = itemGetter.errors) !== null && _itemGetter$errors !== void 0 && _itemGetter$errors.every(x => {
    var _x$path;

    return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) !== 1;
  })) {
    const value = useInvalidFields.deserializeValue(fieldsObj, itemGetter);
    setValue({
      value,
      item: itemGetter.data
    });
  }

  const {
    changedFields,
    dataForUpdate
  } = useInvalidFields.useChangedFieldsAndDataForUpdate(fieldsObj, itemGetter, state.value);
  const invalidFields = useInvalidFields.useInvalidFields(fieldsObj, state.value);
  const [forceValidation, setForceValidation] = React.useState(false);
  const toasts = toast.useToasts();
  const saveButtonProps = {
    isLoading: loading,
    weight: 'bold',
    size: 'small',
    tone: 'active',
    onClick: () => {
      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation);
      if (newForceValidation) return;
      update({
        variables: {
          data: dataForUpdate,
          id: itemGetter.get('id').data
        }
      }).then(_ref2 => {
        let {
          data,
          errors
        } = _ref2;
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
          var _x$path2;

          return ((_x$path2 = x.path) === null || _x$path2 === void 0 ? void 0 : _x$path2.length) === 1;
        });

        if (error) {
          toasts.addToast({
            title: 'Failed to update item',
            tone: 'negative',
            message: error.message
          });
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully'
          });
          onSave(dataGetter.makeDataGetter(data, errors).get('item'));
        }
      }).catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message
        });
      });
    },
    children: 'Save'
  };
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
    // which are handled seperately and do not indicate a failure to update the item
    ,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors.filter(x => {
      var _x$path3;

      return ((_x$path3 = x.path) === null || _x$path3 === void 0 ? void 0 : _x$path3.length) === 1;
    })
  }), core.jsx(Fields.Fields, {
    fieldModes: null,
    fields: fieldsObj,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: React.useCallback(value => {
      setValue(state => ({
        item: state.item,
        value: value(state.value)
      }));
    }, [setValue]),
    value: state.value
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, changedFields.size ? core.jsx(button.Button, saveButtonProps) : core.jsx(tooltip.Tooltip, {
    content: "No fields have been modified so you cannot save changes"
  }, props => core.jsx(button.Button, _extends({}, props, saveButtonProps, {
    // making onClick undefined instead of making the button disabled so the button can be focussed so keyboard users can see the tooltip
    onClick: undefined
  }))), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

/** @jsxRuntime classic */
function InlineCreate(_ref) {
  let {
    list,
    onCancel,
    onCreate,
    fields: fieldPaths,
    selectedFields
  } = _ref;
  const toasts = toast.useToasts();
  const fields = useFieldsObj(list, fieldPaths);
  const [createItem, {
    loading,
    error
  }] = client.useMutation(client.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = useInvalidFields.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = React.useState(false);

  const onCreateClick = () => {
    const newForceValidation = invalidFields.size !== 0;
    setForceValidation(newForceValidation);
    if (newForceValidation) return;
    const data = {};
    const allSerializedValues = useInvalidFields.serializeValueToObjByFieldKey(fields, value);
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const {
        controller
      } = fields[fieldPath];
      const serialized = allSerializedValues[fieldPath];

      if (!isDeepEqual__default["default"](serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized);
      }
    });
    createItem({
      variables: {
        data
      }
    }).then(_ref2 => {
      let {
        data,
        errors
      } = _ref2;
      // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
      // which are handled seperately and do not indicate a failure to update the item
      const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
        var _x$path;

        return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) === 1;
      });

      if (error) {
        toasts.addToast({
          title: 'Failed to create item',
          tone: 'negative',
          message: error.message
        });
      } else {
        toasts.addToast({
          title: data.item[list.labelField] || data.item.id,
          tone: 'positive',
          message: 'Saved successfully'
        });
        onCreate(dataGetter.makeDataGetter(data, errors).get('item'));
      }
    }).catch(err => {
      toasts.addToast({
        title: 'Failed to update item',
        tone: 'negative',
        message: err.message
      });
    });
  };

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(Fields.Fields, {
    fieldModes: null,
    fields: fields,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(core.Stack, {
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    isLoading: loading,
    size: "small",
    tone: "positive",
    weight: "bold",
    onClick: onCreateClick
  }, "Create ", list.singular), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

const _excluded = ["mode"];
const CardContainer = core.forwardRefWithAs((_ref, ref) => {
  let {
    mode = 'view'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    tones
  } = core.useTheme();
  const tone = tones[mode === 'edit' ? 'active' : mode === 'create' ? 'positive' : 'passive'];
  return core.jsx(core.Box, _extends({
    ref: ref,
    paddingLeft: "xlarge",
    css: {
      position: 'relative',
      ':before': {
        content: '" "',
        backgroundColor: tone.border,
        borderRadius: 4,
        width: 4,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
      }
    }
  }, props));
});
function Cards(_ref2) {
  var _displayOptions$inlin;

  let {
    localList,
    field,
    foreignList,
    id,
    value,
    onChange,
    forceValidation
  } = _ref2;
  const {
    displayOptions
  } = value;
  let selectedFields = [...new Set([...displayOptions.cardFields, ...(((_displayOptions$inlin = displayOptions.inlineEdit) === null || _displayOptions$inlin === void 0 ? void 0 : _displayOptions$inlin.fields) || [])])].map(fieldPath => {
    return foreignList.fields[fieldPath].controller.graphqlSelection;
  }).join('\n');

  if (!displayOptions.cardFields.includes('id')) {
    selectedFields += '\nid';
  }

  if (!displayOptions.cardFields.includes(foreignList.labelField) && foreignList.labelField !== 'id') {
    selectedFields += `\n${foreignList.labelField}`;
  }

  const {
    items,
    setItems,
    state: itemsState
  } = useItemState({
    selectedFields,
    localList,
    id,
    field
  });
  const client$1 = client.useApolloClient();
  const [isLoadingLazyItems, setIsLoadingLazyItems] = React.useState(false);
  const [showConnectItems, setShowConnectItems] = React.useState(false);
  const [hideConnectItemsLabel, setHideConnectItemsLabel] = React.useState('Cancel');
  const editRef = React.useRef(null);
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });
  React.useEffect(() => {
    if (value.itemsBeingEdited) {
      var _editRef$current;

      editRef === null || editRef === void 0 ? void 0 : (_editRef$current = editRef.current) === null || _editRef$current === void 0 ? void 0 : _editRef$current.focus();
    }
  }, [value]);

  if (itemsState.kind === 'loading') {
    return core.jsx("div", null, core.jsx(loading.LoadingDots, {
      label: `Loading items for ${field.label} field`
    }));
  }

  if (itemsState.kind === 'error') {
    return core.jsx("span", {
      css: {
        color: 'red'
      }
    }, itemsState.message);
  }

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, core.jsx(core.Stack, {
    as: "ul",
    gap: "xlarge",
    css: {
      padding: 0,
      marginBottom: 0,
      li: {
        listStyle: 'none'
      }
    }
  }, [...value.currentIds].map((id, index) => {
    const itemGetter = items[id];
    const isEditMode = !!(onChange !== undefined) && value.itemsBeingEdited.has(id);
    return core.jsx(CardContainer, {
      role: "status",
      mode: isEditMode ? 'edit' : 'view',
      key: id
    }, core.jsx(core.VisuallyHidden, {
      as: "h2"
    }, `${field.label} ${index + 1} ${isEditMode ? 'edit' : 'view'} mode`), isEditMode ? core.jsx(InlineEdit, {
      list: foreignList,
      fields: displayOptions.inlineEdit.fields,
      onSave: newItemGetter => {
        setItems(_objectSpread(_objectSpread({}, items), {}, {
          [id]: newItemGetter
        }));
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      },
      selectedFields: selectedFields,
      itemGetter: itemGetter,
      onCancel: () => {
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      }
    }) : core.jsx(React.Fragment, null, core.jsx(core.Stack, {
      gap: "xlarge"
    }, displayOptions.cardFields.map(fieldPath => {
      const field = foreignList.fields[fieldPath];
      const itemForField = {};

      for (const graphqlField of getRootGraphQLFieldsFromFieldController.getRootGraphQLFieldsFromFieldController(field.controller)) {
        const fieldGetter = itemGetter.get(graphqlField);

        if (fieldGetter.errors) {
          const errorMessage = fieldGetter.errors[0].message;
          return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), errorMessage);
        }

        itemForField[graphqlField] = fieldGetter.data;
      }

      return core.jsx(field.views.CardValue, {
        key: fieldPath,
        field: field.controller,
        item: itemForField
      });
    })), core.jsx(core.Stack, {
      across: true,
      gap: "small",
      marginTop: "xlarge"
    }, displayOptions.inlineEdit && onChange !== undefined && core.jsx(button.Button, {
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited: new Set([...value.itemsBeingEdited, id])
        }));
      },
      tone: "active"
    }, "Edit"), displayOptions.removeMode === 'disconnect' && onChange !== undefined && core.jsx(tooltip.Tooltip, {
      content: "This item will not be deleted. It will only be removed from this field."
    }, props => core.jsx(button.Button, _extends({
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        const currentIds = new Set(value.currentIds);
        currentIds.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          currentIds
        }));
      }
    }, props, {
      tone: "negative"
    }), "Remove")), displayOptions.linkToItem && core.jsx(button.Button, {
      size: "small",
      weight: "link",
      tone: "active",
      css: {
        textDecoration: 'none'
      },
      as: adminUi_router_dist_keystone6CoreAdminUiRouter.Link,
      href: `/${foreignList.path}/${id}`
    }, "View ", foreignList.singular, " details"))));
  })), onChange === undefined ? null : displayOptions.inlineConnect && showConnectItems ? core.jsx(CardContainer, {
    mode: "edit"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginY: "medium",
    across: true,
    css: {
      width: '100%',
      justifyContent: 'space-between',
      'div:first-of-type': {
        flex: '2'
      }
    }
  }, core.jsx(fields_types_relationship_views_RelationshipSelect_dist_keystone6CoreFieldsTypesRelationshipViewsRelationshipSelect.RelationshipSelect, {
    autoFocus: true,
    controlShouldRenderValue: isLoadingLazyItems,
    isDisabled: onChange === undefined,
    list: foreignList,
    isLoading: isLoadingLazyItems,
    placeholder: `Select a ${foreignList.singular}`,
    portalMenu: true,
    state: {
      kind: 'many',

      async onChange(options) {
        // TODO: maybe use the extraSelection prop on RelationshipSelect here
        const itemsToFetchAndConnect = [];
        options.forEach(item => {
          if (!value.currentIds.has(item.id)) {
            itemsToFetchAndConnect.push(item.id);
          }
        });

        if (itemsToFetchAndConnect.length) {
          try {
            const {
              data,
              errors
            } = await client$1.query({
              query: client.gql`query ($ids: [ID!]!) {
                      items: ${foreignList.gqlNames.listQueryName}(where: { id: { in: $ids }}) {
                        ${selectedFields}
                      }
                    }`,
              variables: {
                ids: itemsToFetchAndConnect
              }
            });

            if (isMountedRef.current) {
              const dataGetters = dataGetter.makeDataGetter(data, errors);
              const itemsDataGetter = dataGetters.get('items');

              let newItems = _objectSpread({}, items);

              let newCurrentIds = field.many ? new Set(value.currentIds) : new Set();

              if (Array.isArray(itemsDataGetter.data)) {
                itemsDataGetter.data.forEach((item, i) => {
                  if ((item === null || item === void 0 ? void 0 : item.id) != null) {
                    newCurrentIds.add(item.id);
                    newItems[item.id] = itemsDataGetter.get(i);
                  }
                });
              }

              if (newCurrentIds.size) {
                setItems(newItems);
                onChange(_objectSpread(_objectSpread({}, value), {}, {
                  currentIds: newCurrentIds
                }));
                setHideConnectItemsLabel('Done');
              }
            }
          } finally {
            if (isMountedRef.current) {
              setIsLoadingLazyItems(false);
            }
          }
        }
      },

      value: (() => {
        let options = [];
        Object.keys(items).forEach(id => {
          if (value.currentIds.has(id)) {
            options.push({
              id,
              label: id
            });
          }
        });
        return options;
      })()
    }
  }), core.jsx(button.Button, {
    onClick: () => setShowConnectItems(false)
  }, hideConnectItemsLabel))) : value.itemBeingCreated ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(InlineCreate, {
    selectedFields: selectedFields,
    fields: displayOptions.inlineCreate.fields,
    list: foreignList,
    onCancel: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false
      }));
    },
    onCreate: itemGetter => {
      const id = itemGetter.data.id;
      setItems(_objectSpread(_objectSpread({}, items), {}, {
        [id]: itemGetter
      }));
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false,
        currentIds: field.many ? new Set([...value.currentIds, id]) : new Set([id])
      }));
    }
  })) : displayOptions.inlineCreate || displayOptions.inlineConnect ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginTop: "medium",
    across: true
  }, displayOptions.inlineCreate && core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    tone: "positive",
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: true
      }));
    }
  }, "Create ", foreignList.singular), displayOptions.inlineConnect && core.jsx(button.Button, {
    size: "small",
    weight: "none",
    tone: "passive",
    onClick: () => {
      setShowConnectItems(true);
      setHideConnectItemsLabel('Cancel');
    }
  }, "Link existing ", foreignList.singular))) : null, forceValidation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, "You must finish creating and editing any related ", foreignList.label.toLowerCase(), " before saving the ", localList.singular.toLowerCase()));
}

function LinkToRelatedItems(_ref) {
  var _value$value;

  let {
    itemId,
    value,
    list,
    refFieldKey
  } = _ref;

  function constructQuery(_ref2) {
    let {
      refFieldKey,
      itemId,
      value
    } = _ref2;

    if (!!refFieldKey && itemId) {
      return `!${refFieldKey}_matches="${itemId}"`;
    }

    return `!id_in="${(value === null || value === void 0 ? void 0 : value.value).slice(0, 100).map(_ref3 => {
      let {
        id
      } = _ref3;
      return id;
    }).join(',')}"`;
  }

  const commonProps = {
    size: 'small',
    tone: 'active',
    weight: 'link'
  };

  if (value.kind === 'many') {
    const query = constructQuery({
      refFieldKey,
      value,
      itemId
    });
    return core.jsx(button.Button, _extends({}, commonProps, {
      as: adminUi_router_dist_keystone6CoreAdminUiRouter.Link,
      href: `/${list.path}?${query}`
    }), "View related ", list.plural);
  }

  return core.jsx(button.Button, _extends({}, commonProps, {
    as: adminUi_router_dist_keystone6CoreAdminUiRouter.Link,
    href: `/${list.path}/${(_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.id}`
  }), "View ", list.singular, " details");
}

const RelationshipLinkButton = _ref4 => {
  let {
    href,
    children
  } = _ref4;
  return core.jsx(button.Button, {
    css: {
      padding: 0,
      height: 'auto'
    },
    weight: "link",
    tone: "active",
    as: adminUi_router_dist_keystone6CoreAdminUiRouter.Link,
    href: href
  }, children);
};

const RelationshipDisplay = _ref5 => {
  let {
    list,
    value
  } = _ref5;

  if (value.kind === 'many') {
    if (value.value.length) {
      return core.jsx(core.Inline, {
        gap: "small"
      }, value.value.map(i => core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${i.id}`
      }, i.label)));
    } else {
      return core.jsx("div", null, "(No ", list.plural, ")");
    }
  } else {
    if (value.value) {
      return core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${value.value.id}`
      }, value.value.label);
    } else {
      return core.jsx("div", null, "(No ", list.singular, ")");
    }
  }
};

const Field = _ref6 => {
  var _value$value2;

  let {
    field,
    autoFocus,
    value,
    onChange,
    forceValidation
  } = _ref6;
  const keystone = adminUi_context_dist_keystone6CoreAdminUiContext.useKeystone();
  const foreignList = adminUi_context_dist_keystone6CoreAdminUiContext.useList(field.refListKey);
  const localList = adminUi_context_dist_keystone6CoreAdminUiContext.useList(field.listKey);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (value.kind === 'cards-view') {
    return core.jsx(fields.FieldContainer, {
      as: "fieldset"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx(Cards, {
      forceValidation: forceValidation,
      field: field,
      id: value.id,
      value: value,
      onChange: onChange,
      foreignList: foreignList,
      localList: localList
    }));
  }

  if (value.kind === 'count') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx("div", null, value.count === 1 ? `There is 1 ${foreignList.singular} ` : `There are ${value.count} ${foreignList.plural} `, "linked to this ", localList.singular));
  }

  const authenticatedItem = keystone.authenticatedItem;
  return core.jsx(fields.FieldContainer, {
    as: "fieldset"
  }, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(React.Fragment, null, core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(fields_types_relationship_views_RelationshipSelect_dist_keystone6CoreFieldsTypesRelationshipViewsRelationshipSelect.RelationshipSelect, {
    controlShouldRenderValue: true,
    autoFocus: autoFocus,
    isDisabled: onChange === undefined,
    list: foreignList,
    portalMenu: true,
    state: value.kind === 'many' ? {
      kind: 'many',
      value: value.value,

      onChange(newItems) {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: newItems
        }));
      }

    } : {
      kind: 'one',
      value: value.value,

      onChange(newVal) {
        if (value.kind === 'one') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: newVal
          }));
        }
      }

    }
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, !field.hideCreate && core.jsx(button.Button, {
    size: "small",
    disabled: isDrawerOpen,
    onClick: () => {
      setIsDrawerOpen(true);
    }
  }, "Create related ", foreignList.singular), authenticatedItem.state === 'authenticated' && authenticatedItem.listKey === field.refListKey && (value.kind === 'many' ? value.value.find(x => x.id === authenticatedItem.id) === undefined : ((_value$value2 = value.value) === null || _value$value2 === void 0 ? void 0 : _value$value2.id) !== authenticatedItem.id) && core.jsx(button.Button, {
    size: "small",
    isDisabled: onChange === undefined,
    onClick: () => {
      const val = {
        label: authenticatedItem.label,
        id: authenticatedItem.id
      };

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }, value.kind === 'many' ? 'Add ' : 'Set as ', authenticatedItem.label), !!(value.kind === 'many' ? value.value.length : value.kind === 'one' && value.value) && core.jsx(LinkToRelatedItems, {
    itemId: value.id,
    refFieldKey: field.refFieldKey,
    list: foreignList,
    value: value
  }))), core.jsx(modals.DrawerController, {
    isOpen: isDrawerOpen
  }, core.jsx(CreateItemDrawer.CreateItemDrawer, {
    listKey: foreignList.key,
    onClose: () => {
      setIsDrawerOpen(false);
    },
    onCreate: val => {
      setIsDrawerOpen(false);

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else if (value.kind === 'one') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }))) : core.jsx(RelationshipDisplay, {
    value: value,
    list: foreignList
  }));
};
const Cell = _ref7 => {
  let {
    field,
    item
  } = _ref7;
  const list = adminUi_context_dist_keystone6CoreAdminUiContext.useList(field.refListKey);
  const {
    colors
  } = core.useTheme();

  if (field.display === 'count') {
    var _item$;

    const count = (_item$ = item[`${field.path}Count`]) !== null && _item$ !== void 0 ? _item$ : 0;
    return core.jsx(CellContainer.CellContainer, null, count, " ", count === 1 ? list.singular : list.plural);
  }

  const data = item[field.path];
  const items = (Array.isArray(data) ? data : [data]).filter(item => item);
  const displayItems = items.length < 5 ? items : items.slice(0, 3);
  const overflow = items.length < 5 ? 0 : items.length - 3;
  const styles = {
    color: colors.foreground,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  };
  return core.jsx(CellContainer.CellContainer, null, displayItems.map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(adminUi_router_dist_keystone6CoreAdminUiRouter.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`,
    css: styles
  }, item.label || item.id))), overflow ? `, and ${overflow} more` : null);
};
const CardValue = _ref8 => {
  let {
    field,
    item
  } = _ref8;
  const list = adminUi_context_dist_keystone6CoreAdminUiContext.useList(field.refListKey);
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), (Array.isArray(data) ? data : [data]).filter(item => item).map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(adminUi_router_dist_keystone6CoreAdminUiRouter.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`
  }, item.label || item.id))));
};
const controller = config => {
  const cardsDisplayOptions = config.fieldMeta.displayMode === 'cards' ? {
    cardFields: config.fieldMeta.cardFields,
    inlineCreate: config.fieldMeta.inlineCreate,
    inlineEdit: config.fieldMeta.inlineEdit,
    linkToItem: config.fieldMeta.linkToItem,
    removeMode: config.fieldMeta.removeMode,
    inlineConnect: config.fieldMeta.inlineConnect
  } : undefined;
  return {
    refFieldKey: config.fieldMeta.refFieldKey,
    many: config.fieldMeta.many,
    listKey: config.listKey,
    path: config.path,
    label: config.label,
    display: config.fieldMeta.displayMode === 'count' ? 'count' : 'cards-or-select',
    refListKey: config.fieldMeta.refListKey,
    graphqlSelection: config.fieldMeta.displayMode === 'count' ? `${config.path}Count` : `${config.path} {
              id
              label: ${config.fieldMeta.refLabelField}
            }`,
    hideCreate: config.fieldMeta.hideCreate,
    // note we're not making the state kind: 'count' when ui.displayMode is set to 'count'.
    // that ui.displayMode: 'count' is really just a way to have reasonable performance
    // because our other UIs don't handle relationships with a large number of items well
    // but that's not a problem here since we're creating a new item so we might as well them a better UI
    defaultValue: cardsDisplayOptions !== undefined ? {
      kind: 'cards-view',
      currentIds: new Set(),
      id: null,
      initialIds: new Set(),
      itemBeingCreated: false,
      itemsBeingEdited: new Set(),
      displayOptions: cardsDisplayOptions
    } : config.fieldMeta.many ? {
      id: null,
      kind: 'many',
      initialValue: [],
      value: []
    } : {
      id: null,
      kind: 'one',
      value: null,
      initialValue: null
    },
    deserialize: data => {
      if (config.fieldMeta.displayMode === 'count') {
        var _data$;

        return {
          id: data.id,
          kind: 'count',
          count: (_data$ = data[`${config.path}Count`]) !== null && _data$ !== void 0 ? _data$ : 0
        };
      }

      if (cardsDisplayOptions !== undefined) {
        const initialIds = new Set((Array.isArray(data[config.path]) ? data[config.path] : data[config.path] ? [data[config.path]] : []).map(x => x.id));
        return {
          kind: 'cards-view',
          id: data.id,
          itemsBeingEdited: new Set(),
          itemBeingCreated: false,
          initialIds,
          currentIds: initialIds,
          displayOptions: cardsDisplayOptions
        };
      }

      if (config.fieldMeta.many) {
        let value = (data[config.path] || []).map(x => ({
          id: x.id,
          label: x.label || x.id
        }));
        return {
          kind: 'many',
          id: data.id,
          initialValue: value,
          value
        };
      }

      let value = data[config.path];

      if (value) {
        value = {
          id: value.id,
          label: value.label || value.id
        };
      }

      return {
        kind: 'one',
        id: data.id,
        value,
        initialValue: value
      };
    },
    filter: {
      Filter: _ref9 => {
        let {
          onChange,
          value
        } = _ref9;
        const foreignList = adminUi_context_dist_keystone6CoreAdminUiContext.useList(config.fieldMeta.refListKey);
        const {
          filterValues,
          loading
        } = useRelationshipFilterValues({
          value,
          list: foreignList
        });
        const state = {
          kind: 'many',
          value: filterValues,

          onChange(newItems) {
            onChange(newItems.map(item => item.id).join(','));
          }

        };
        return core.jsx(fields_types_relationship_views_RelationshipSelect_dist_keystone6CoreFieldsTypesRelationshipViewsRelationshipSelect.RelationshipSelect, {
          controlShouldRenderValue: true,
          list: foreignList,
          isLoading: loading,
          isDisabled: onChange === undefined,
          state: state
        });
      },
      graphql: _ref10 => {
        let {
          value
        } = _ref10;
        const foreignIds = getForeignIds(value);

        if (config.fieldMeta.many) {
          return {
            [config.path]: {
              some: {
                id: {
                  in: foreignIds
                }
              }
            }
          };
        }

        return {
          [config.path]: {
            id: {
              in: foreignIds
            }
          }
        };
      },

      Label(_ref11) {
        let {
          value
        } = _ref11;
        const foreignList = adminUi_context_dist_keystone6CoreAdminUiContext.useList(config.fieldMeta.refListKey);
        const {
          filterValues
        } = useRelationshipFilterValues({
          value,
          list: foreignList
        });

        if (!filterValues.length) {
          return `has no value`;
        }

        if (filterValues.length > 1) {
          const values = filterValues.map(i => i.label).join(', ');
          return `is in [${values}]`;
        }

        const optionLabel = filterValues[0].label;
        return `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: ''
        }
      }
    },

    validate(value) {
      return value.kind !== 'cards-view' || value.itemsBeingEdited.size === 0 && !value.itemBeingCreated;
    },

    serialize: state => {
      if (state.kind === 'many') {
        const newAllIds = new Set(state.value.map(x => x.id));
        const initialIds = new Set(state.initialValue.map(x => x.id));
        let disconnect = state.initialValue.filter(x => !newAllIds.has(x.id)).map(x => ({
          id: x.id
        }));
        let connect = state.value.filter(x => !initialIds.has(x.id)).map(x => ({
          id: x.id
        }));

        if (disconnect.length || connect.length) {
          let output = {};

          if (disconnect.length) {
            output.disconnect = disconnect;
          }

          if (connect.length) {
            output.connect = connect;
          }

          return {
            [config.path]: output
          };
        }
      } else if (state.kind === 'one') {
        var _state$initialValue;

        if (state.initialValue && !state.value) {
          return {
            [config.path]: {
              disconnect: true
            }
          };
        } else if (state.value && state.value.id !== ((_state$initialValue = state.initialValue) === null || _state$initialValue === void 0 ? void 0 : _state$initialValue.id)) {
          return {
            [config.path]: {
              connect: {
                id: state.value.id
              }
            }
          };
        }
      } else if (state.kind === 'cards-view') {
        let disconnect = [...state.initialIds].filter(id => !state.currentIds.has(id)).map(id => ({
          id
        }));
        let connect = [...state.currentIds].filter(id => !state.initialIds.has(id)).map(id => ({
          id
        }));

        if (config.fieldMeta.many) {
          if (disconnect.length || connect.length) {
            return {
              [config.path]: {
                connect: connect.length ? connect : undefined,
                disconnect: disconnect.length ? disconnect : undefined
              }
            };
          }
        } else if (connect.length) {
          return {
            [config.path]: {
              connect: connect[0]
            }
          };
        } else if (disconnect.length) {
          return {
            [config.path]: {
              disconnect: true
            }
          };
        }
      }

      return {};
    }
  };
};

function useRelationshipFilterValues(_ref12) {
  var _data$items;

  let {
    value,
    list
  } = _ref12;
  const foreignIds = getForeignIds(value);
  const where = {
    id: {
      in: foreignIds
    }
  };
  const query = client.gql`
    query FOREIGNLIST_QUERY($where: ${list.gqlNames.whereInputName}!) {
      items: ${list.gqlNames.listQueryName}(where: $where) {
        id 
        ${list.labelField}
      }
    }
  `;
  const {
    data,
    loading
  } = client.useQuery(query, {
    variables: {
      where
    }
  });
  return {
    filterValues: (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map(item => {
      return {
        id: item.id,
        label: item[list.labelField] || item.id
      };
    })) || foreignIds.map(f => ({
      label: f,
      id: f
    })),
    loading: loading
  };
}

function getForeignIds(value) {
  if (typeof value === 'string' && value.length > 0) {
    return value.split(',');
  }

  return [];
}

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ 1597:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(1495);
} else {}


/***/ }),

/***/ 1495:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(417);
var React = __webpack_require__(6689);
var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var segmentedControl = __webpack_require__(4401);
var button = __webpack_require__(7024);
var CellContainer = __webpack_require__(4377);
var CellLink = __webpack_require__(8247);
__webpack_require__(1260);
__webpack_require__(6613);
__webpack_require__(9097);
__webpack_require__(2744);
__webpack_require__(4106);
__webpack_require__(6378);
__webpack_require__(6661);
__webpack_require__(4380);
__webpack_require__(8859);
__webpack_require__(2220);
__webpack_require__(9897);
__webpack_require__(9114);
__webpack_require__(851);
__webpack_require__(8527);
__webpack_require__(1853);
__webpack_require__(7330);
__webpack_require__(8158);
__webpack_require__(1610);
__webpack_require__(360);
__webpack_require__(2404);
__webpack_require__(5584);
__webpack_require__(42);
__webpack_require__(9200);
__webpack_require__(4626);
__webpack_require__(2016);
__webpack_require__(4432);
__webpack_require__(6762);
__webpack_require__(1286);
__webpack_require__(7343);
__webpack_require__(3160);
__webpack_require__(8986);

const Field = _ref => {
  let {
    field,
    value,
    onChange,
    autoFocus,
    forceValidation
  } = _ref;
  const [hasChanged, setHasChanged] = React.useState(false);
  const validationMessage = (hasChanged || forceValidation) && !validate(value, field.isRequired) ? core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, field.label, " is required") : null;
  return core.jsx(fields.FieldContainer, {
    as: field.displayMode === 'select' ? 'div' : 'fieldset'
  }, field.displayMode === 'select' ? core.jsx(React.Fragment, null, core.jsx(fields.FieldLabel, {
    htmlFor: field.path
  }, field.label), core.jsx(fields.Select, {
    id: field.path,
    isClearable: true,
    autoFocus: autoFocus,
    options: field.options,
    isDisabled: onChange === undefined,
    onChange: newVal => {
      onChange === null || onChange === void 0 ? void 0 : onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: newVal
      }));
      setHasChanged(true);
    },
    value: value.value,
    portalMenu: true
  }), validationMessage) : core.jsx(React.Fragment, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), core.jsx(core.Stack, {
    across: true,
    gap: "small",
    align: "center"
  }, core.jsx(segmentedControl.SegmentedControl, {
    segments: field.options.map(x => x.label),
    selectedIndex: value.value ? field.options.findIndex(x => x.value === value.value.value) : undefined,
    onChange: index => {
      onChange === null || onChange === void 0 ? void 0 : onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: field.options[index]
      }));
      setHasChanged(true);
    }
  }), value.value !== null && onChange !== undefined && core.jsx(button.Button, {
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: null
      }));
      setHasChanged(true);
    }
  }, "Clear")), validationMessage));
};
const Cell = _ref2 => {
  var _field$options$find;

  let {
    item,
    field,
    linkTo
  } = _ref2;
  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, label) : core.jsx(CellContainer.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = _ref3 => {
  var _field$options$find2;

  let {
    item,
    field
  } = _ref3;
  let value = item[field.path] + '';
  const label = (_field$options$find2 = field.options.find(x => x.value === value)) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};

function validate(value, isRequired) {
  if (isRequired) {
    // if you got null initially on the update screen, we want to allow saving
    // since the user probably doesn't have read access control
    if (value.kind === 'update' && value.initial === null) {
      return true;
    }

    return value.value !== null;
  }

  return true;
}

const controller = config => {
  var _config$fieldMeta$def, _optionsWithStringVal;

  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  })); // Transform from string value to type appropriate value

  const t = v => v === null ? null : config.fieldMeta.type === 'integer' ? parseInt(v) : v;

  const stringifiedDefault = (_config$fieldMeta$def = config.fieldMeta.defaultValue) === null || _config$fieldMeta$def === void 0 ? void 0 : _config$fieldMeta$def.toString();
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      kind: 'create',
      value: (_optionsWithStringVal = optionsWithStringValues.find(x => x.value === stringifiedDefault)) !== null && _optionsWithStringVal !== void 0 ? _optionsWithStringVal : null
    },
    type: config.fieldMeta.type,
    displayMode: config.fieldMeta.displayMode,
    isRequired: config.fieldMeta.isRequired,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          const stringifiedOption = {
            label: option.label,
            value: option.value.toString()
          };
          return {
            kind: 'update',
            initial: stringifiedOption,
            value: stringifiedOption
          };
        }
      }

      return {
        kind: 'update',
        initial: null,
        value: null
      };
    },
    serialize: value => {
      var _value$value$value, _value$value;

      return {
        [config.path]: t((_value$value$value = (_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.value) !== null && _value$value$value !== void 0 ? _value$value$value : null)
      };
    },
    validate: value => validate(value, config.fieldMeta.isRequired),
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: _ref4 => {
        let {
          type,
          value: options
        } = _ref4;
        return {
          [config.path]: {
            [type === 'not_matches' ? 'notIn' : 'in']: options.map(x => t(x.value))
          }
        };
      },

      Label(_ref5) {
        let {
          type,
          value
        } = _ref5;

        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ 7073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(8891);
} else {}


/***/ }),

/***/ 8891:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(417);
var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var React = __webpack_require__(6689);
var CellContainer = __webpack_require__(4377);
var CellLink = __webpack_require__(8247);
__webpack_require__(1260);
__webpack_require__(7024);
__webpack_require__(6613);
__webpack_require__(9097);
__webpack_require__(2744);
__webpack_require__(4106);
__webpack_require__(6378);
__webpack_require__(6661);
__webpack_require__(4380);
__webpack_require__(8859);
__webpack_require__(2220);
__webpack_require__(9897);
__webpack_require__(9114);
__webpack_require__(851);
__webpack_require__(8527);
__webpack_require__(1853);
__webpack_require__(7330);
__webpack_require__(8158);
__webpack_require__(1610);
__webpack_require__(360);
__webpack_require__(2404);
__webpack_require__(5584);
__webpack_require__(42);
__webpack_require__(9200);
__webpack_require__(4626);
__webpack_require__(2016);
__webpack_require__(4432);
__webpack_require__(6762);
__webpack_require__(1286);
__webpack_require__(7343);
__webpack_require__(3160);
__webpack_require__(8986);

const Field = _ref => {
  let {
    field,
    value,
    onChange,
    autoFocus,
    forceValidation
  } = _ref;
  const {
    typography,
    fields: fields$1
  } = core.useTheme();
  const [shouldShowErrors, setShouldShowErrors] = React.useState(false);
  const validationMessages = validate(value, field.validation, field.label);
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, {
    gap: "small"
  }, field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
    id: field.path,
    autoFocus: autoFocus,
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      inner: {
        kind: 'value',
        value: event.target.value
      }
    })),
    value: value.inner.kind === 'null' ? '' : value.inner.value,
    disabled: value.inner.kind === 'null',
    onBlur: () => {
      setShouldShowErrors(true);
    }
  }) : core.jsx(fields.TextInput, {
    id: field.path,
    autoFocus: autoFocus,
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      inner: {
        kind: 'value',
        value: event.target.value
      }
    })),
    value: value.inner.kind === 'null' ? '' : value.inner.value,
    disabled: value.inner.kind === 'null',
    onBlur: () => {
      setShouldShowErrors(true);
    }
  }), field.isNullable && core.jsx(fields.Checkbox, {
    autoFocus: autoFocus,
    disabled: onChange === undefined,
    onChange: () => {
      if (value.inner.kind === 'value') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          inner: {
            kind: 'null',
            prev: value.inner.value
          }
        }));
      } else {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          inner: {
            kind: 'value',
            value: value.inner.prev
          }
        }));
      }
    },
    checked: value.inner.kind === 'null'
  }, core.jsx("span", {
    css: {
      fontWeight: typography.fontWeight.semibold,
      color: fields$1.labelColor
    }
  }, "Set field as null")), !!validationMessages.length && (shouldShowErrors || forceValidation) && validationMessages.map((message, i) => core.jsx("span", {
    key: i,
    css: {
      color: 'red'
    }
  }, message))) : value.inner.kind === 'null' ? null : value.inner.value);
};
const Cell = _ref2 => {
  let {
    item,
    field,
    linkTo
  } = _ref2;
  let value = item[field.path] + '';
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, value) : core.jsx(CellContainer.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = _ref3 => {
  let {
    item,
    field
  } = _ref3;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};

function validate(value, validation, fieldLabel) {
  // if the value is the same as the initial for an update, we don't want to block saving
  // since we're not gonna send it anyway if it's the same
  // and going "fix this thing that is unrelated to the thing you're doing" is bad
  // and also bc it could be null bc of read access control
  if (value.kind === 'update' && (value.initial.kind === 'null' && value.inner.kind === 'null' || value.initial.kind === 'value' && value.inner.kind === 'value' && value.inner.value === value.initial.value)) {
    return [];
  }

  if (value.inner.kind === 'null') {
    if (validation.isRequired) {
      return [`${fieldLabel} is required`];
    }

    return [];
  }

  const val = value.inner.value;
  let messages = [];

  if (validation.length.min !== null && val.length < validation.length.min) {
    if (validation.length.min === 1) {
      messages.push(`${fieldLabel} must not be empty`);
    } else {
      messages.push(`${fieldLabel} must be at least ${validation.length.min} characters long`);
    }
  }

  if (validation.length.max !== null && val.length > validation.length.max) {
    messages.push(`${fieldLabel} must be no longer than ${validation.length.min} characters`);
  }

  if (validation.match && !validation.match.regex.test(val)) {
    messages.push(validation.match.explanation || `${fieldLabel} must match ${validation.match.regex}`);
  }

  return messages;
}

function deserializeTextValue(value) {
  if (value === null) {
    return {
      kind: 'null',
      prev: ''
    };
  }

  return {
    kind: 'value',
    value
  };
}

const controller = config => {
  const validation = {
    isRequired: config.fieldMeta.validation.isRequired,
    length: config.fieldMeta.validation.length,
    match: config.fieldMeta.validation.match ? {
      regex: new RegExp(config.fieldMeta.validation.match.regex.source, config.fieldMeta.validation.match.regex.flags),
      explanation: config.fieldMeta.validation.match.explanation
    } : null
  };
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      kind: 'create',
      inner: deserializeTextValue(config.fieldMeta.defaultValue)
    },
    displayMode: config.fieldMeta.displayMode,
    isNullable: config.fieldMeta.isNullable,
    deserialize: data => {
      const inner = deserializeTextValue(data[config.path]);
      return {
        kind: 'update',
        inner,
        initial: inner
      };
    },
    serialize: value => ({
      [config.path]: value.inner.kind === 'null' ? null : value.inner.value
    }),
    validation,
    validate: val => validate(val, validation, config.label).length === 0,
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: _ref4 => {
        let {
          type,
          value
        } = _ref4;
        const isNot = type.startsWith('not_');
        const key = type === 'is_i' || type === 'not_i' ? 'equals' : type.replace(/_i$/, '').replace('not_', '').replace(/_([a-z])/g, (_, char) => char.toUpperCase());
        const filter = {
          [key]: value
        };
        return {
          [config.path]: _objectSpread(_objectSpread({}, isNot ? {
            not: filter
          } : filter), {}, {
            mode: config.fieldMeta.shouldUseModeInsensitive ? 'insensitive' : undefined
          })
        };
      },

      Label(_ref5) {
        let {
          label,
          value
        } = _ref5;
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ 2926:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(420);
} else {}


/***/ }),

/***/ 420:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _extends = __webpack_require__(8527);
var _objectSpread = __webpack_require__(417);
var React = __webpack_require__(6689);
var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var CellContainer = __webpack_require__(4377);
var CellLink = __webpack_require__(8247);
__webpack_require__(1260);
__webpack_require__(7024);
__webpack_require__(6613);
__webpack_require__(9097);
__webpack_require__(2744);
__webpack_require__(4106);
__webpack_require__(6378);
__webpack_require__(6661);
__webpack_require__(4380);
__webpack_require__(8859);
__webpack_require__(2220);
__webpack_require__(9897);
__webpack_require__(9114);
__webpack_require__(851);
__webpack_require__(1853);
__webpack_require__(7330);
__webpack_require__(8158);
__webpack_require__(1610);
__webpack_require__(360);
__webpack_require__(2404);
__webpack_require__(5584);
var utils = __webpack_require__(1839);
var dateFns = __webpack_require__(4146);
__webpack_require__(42);
__webpack_require__(9200);
__webpack_require__(4626);
__webpack_require__(2016);
__webpack_require__(4432);
__webpack_require__(6762);
__webpack_require__(1286);
__webpack_require__(7343);
__webpack_require__(3160);
__webpack_require__(8986);

const FULL_TIME_PATTERN = 'HH:mm:ss.SSS';

function formatFullTime(date) {
  return dateFns.format(date, FULL_TIME_PATTERN);
}

function formatTime(time) {
  const date = dateFns.parse(time, FULL_TIME_PATTERN, new Date());

  if (date.getMilliseconds() !== 0) {
    return dateFns.format(date, FULL_TIME_PATTERN);
  }

  if (date.getSeconds() !== 0) {
    return dateFns.format(date, 'HH:mm:ss');
  }

  return dateFns.format(date, 'HH:mm');
}
function parseTime(time) {
  for (const pattern of ['H:m:s.SSS', 'H:m:s', 'H:m', 'H']) {
    const parsed = dateFns.parse(time, pattern, new Date());

    if (dateFns.isValid(parsed)) {
      return dateFns.format(parsed, FULL_TIME_PATTERN);
    }
  }

  return undefined;
}
function constructTimestamp(_ref) {
  let {
    dateValue,
    timeValue
  } = _ref;
  return new Date(`${dateValue}T${timeValue}`).toISOString();
}
function deconstructTimestamp(value) {
  return {
    dateValue: dateFns.formatISO(new Date(value), {
      representation: 'date'
    }),
    timeValue: {
      kind: 'parsed',
      value: formatFullTime(new Date(value))
    }
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleString();
}

const Field = _ref => {
  var _value$value$dateValu, _field$fieldMeta$defa;

  let {
    field,
    value,
    onChange,
    forceValidation
  } = _ref;
  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;
  const validationMessages = showValidation ? validate(value, field.fieldMeta, field.label) : undefined;
  const timeInputProps = utils.useFormattedInput({
    format(_ref2) {
      let {
        value
      } = _ref2;

      if (value === null) {
        return '';
      }

      return formatTime(value);
    },

    parse(value) {
      value = value.trim();

      if (value === '') {
        return {
          kind: 'parsed',
          value: null
        };
      }

      const parsed = parseTime(value);

      if (parsed !== undefined) {
        return {
          kind: 'parsed',
          value: parsed
        };
      }

      return value;
    }

  }, {
    value: value.value.timeValue,

    onChange(timeValue) {
      onChange === null || onChange === void 0 ? void 0 : onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: _objectSpread(_objectSpread({}, value.value), {}, {
          timeValue
        })
      }));
    },

    onBlur() {
      setTouchedSecondInput(true);
    }

  });
  return core.jsx(fields.FieldContainer, {
    as: "fieldset"
  }, core.jsx(core.Stack, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: {
          dateValue: date,
          timeValue: typeof value.value.timeValue === 'object' && value.value.timeValue.value === null ? {
            kind: 'parsed',
            value: '00:00:00.000'
          } : value.value.timeValue
        }
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: _objectSpread(_objectSpread({}, value.value), {}, {
          dateValue: null
        })
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: (_value$value$dateValu = value.value.dateValue) !== null && _value$value$dateValu !== void 0 ? _value$value$dateValu : ''
  }), (validationMessages === null || validationMessages === void 0 ? void 0 : validationMessages.date) && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validationMessages.date)), core.jsx(core.Stack, null, core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: `${field.path}--time-input`
  }, `${field.label} time field`), core.jsx(fields.TextInput, _extends({
    id: `${field.path}--time-input`
  }, timeInputProps, {
    disabled: onChange === undefined,
    placeholder: "00:00"
  })), (validationMessages === null || validationMessages === void 0 ? void 0 : validationMessages.time) && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validationMessages.time))) : value.value.dateValue !== null && typeof value.value.timeValue === 'object' && value.value.timeValue.value !== null && core.jsx(core.Text, null, formatOutput(constructTimestamp({
    dateValue: value.value.dateValue,
    timeValue: value.value.timeValue.value
  }))), (value.kind === 'create' && typeof field.fieldMeta.defaultValue !== 'string' && ((_field$fieldMeta$defa = field.fieldMeta.defaultValue) === null || _field$fieldMeta$defa === void 0 ? void 0 : _field$fieldMeta$defa.kind) === 'now' || field.fieldMeta.updatedAt) && core.jsx(core.Text, null, "When this item is saved, this field will be set to the current date and time")));
};

function validate(value, fieldMeta, label) {
  var _fieldMeta$defaultVal;

  const val = value.value;
  const hasDateValue = val.dateValue !== null;
  const hasTimeValue = typeof val.timeValue === 'string' || typeof val.timeValue.value === 'string';
  const isValueEmpty = !hasDateValue && !hasTimeValue; // if we recieve null initially on the item view and the current value is null,
  // we should always allow saving it because:
  // - the value might be null in the database and we don't want to prevent saving the whole item because of that
  // - we might have null because of an access control error

  if (value.kind === 'update' && value.initial === null && isValueEmpty) {
    return undefined;
  }

  if (value.kind === 'create' && isValueEmpty && (typeof fieldMeta.defaultValue === 'object' && ((_fieldMeta$defaultVal = fieldMeta.defaultValue) === null || _fieldMeta$defaultVal === void 0 ? void 0 : _fieldMeta$defaultVal.kind) === 'now' || fieldMeta.updatedAt)) {
    return undefined;
  }

  if (fieldMeta.isRequired && isValueEmpty) {
    return {
      date: `${label} is required`
    };
  }

  if (hasDateValue && !hasTimeValue) {
    return {
      time: `${label} requires a time to be provided`
    };
  }

  const timeError = typeof val.timeValue === 'string' ? `${label} requires a valid time in the format hh:mm` : undefined;

  if (hasTimeValue && !hasDateValue) {
    return {
      date: `${label} requires a date to be selected`,
      time: timeError
    };
  }

  if (timeError) {
    return {
      time: timeError
    };
  }

  return undefined;
}

const Cell = _ref3 => {
  let {
    item,
    field,
    linkTo
  } = _ref3;
  let value = item[field.path];
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, formatOutput(value)) : core.jsx(CellContainer.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = _ref4 => {
  let {
    item,
    field
  } = _ref4;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), formatOutput(item[field.path]));
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    fieldMeta: config.fieldMeta,
    defaultValue: {
      kind: 'create',
      value: typeof config.fieldMeta.defaultValue === 'string' ? deconstructTimestamp(config.fieldMeta.defaultValue) : {
        dateValue: null,
        timeValue: {
          kind: 'parsed',
          value: null
        }
      }
    },
    deserialize: data => {
      const value = data[config.path];
      return {
        kind: 'update',
        initial: data[config.path],
        value: value ? deconstructTimestamp(value) : {
          dateValue: null,
          timeValue: {
            kind: 'parsed',
            value: null
          }
        }
      };
    },
    serialize: _ref5 => {
      let {
        value: {
          dateValue,
          timeValue
        }
      } = _ref5;

      if (dateValue && typeof timeValue === 'object' && timeValue.value !== null) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue: timeValue.value
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },
    validate: value => validate(value, config.fieldMeta, config.label) === undefined
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ 4592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(8527);
var _objectWithoutProperties = __webpack_require__(2220);
var core = __webpack_require__(1138);
var fields$1 = __webpack_require__(5007);
var React = __webpack_require__(6689);
var sanitizeUrl = __webpack_require__(9737);

function isValidURL(url) {
  return url === sanitizeUrl.sanitizeUrl(url);
}

const _excluded = ["children"];
const fields = {
  text(_ref) {
    let {
      label,
      defaultValue = ''
    } = _ref;
    return {
      kind: 'form',

      Input(_ref2) {
        let {
          value,
          onChange,
          autoFocus
        } = _ref2;
        return core.jsx(fields$1.FieldContainer, null, core.jsx(fields$1.FieldLabel, null, label), core.jsx(fields$1.TextInput, {
          autoFocus: autoFocus,
          value: value,
          onChange: event => {
            onChange(event.target.value);
          }
        }));
      },

      options: undefined,
      defaultValue,

      validate(value) {
        return typeof value === 'string';
      }

    };
  },

  url(_ref3) {
    let {
      label,
      defaultValue = ''
    } = _ref3;

    const validate = value => {
      return typeof value === 'string' && (value === '' || isValidURL(value));
    };

    return {
      kind: 'form',

      Input(_ref4) {
        let {
          value,
          onChange,
          autoFocus,
          forceValidation
        } = _ref4;
        const [blurred, setBlurred] = React.useState(false);
        const showValidation = forceValidation || blurred && !validate(value);
        return core.jsx(fields$1.FieldContainer, null, core.jsx(fields$1.FieldLabel, null, label), core.jsx(fields$1.TextInput, {
          onBlur: () => {
            setBlurred(true);
          },
          autoFocus: autoFocus,
          value: value,
          onChange: event => {
            onChange(event.target.value);
          }
        }), showValidation && core.jsx("span", {
          css: {
            color: 'red'
          }
        }, "Please provide a valid URL"));
      },

      options: undefined,
      defaultValue,
      validate
    };
  },

  select(_ref5) {
    let {
      label,
      options,
      defaultValue
    } = _ref5;
    const optionValuesSet = new Set(options.map(x => x.value));
    return {
      kind: 'form',

      Input(_ref6) {
        let {
          value,
          onChange,
          autoFocus
        } = _ref6;
        return core.jsx(fields$1.FieldContainer, null, core.jsx(fields$1.FieldLabel, null, label), core.jsx(fields$1.Select, {
          autoFocus: autoFocus,
          value: options.find(option => option.value === value) || null,
          onChange: option => {
            if (option) {
              onChange(option.value);
            }
          },
          options: options
        }));
      },

      options,
      defaultValue,

      validate(value) {
        return typeof value === 'string' && optionValuesSet.has(value);
      }

    };
  },

  multiselect(_ref7) {
    let {
      label,
      options,
      defaultValue
    } = _ref7;
    const valuesToOption = new Map(options.map(x => [x.value, x]));
    return {
      kind: 'form',

      Input(_ref8) {
        let {
          value,
          onChange,
          autoFocus
        } = _ref8;
        return core.jsx(fields$1.FieldContainer, null, core.jsx(fields$1.FieldLabel, null, label), core.jsx(fields$1.MultiSelect, {
          autoFocus: autoFocus,
          value: value.map(x => valuesToOption.get(x)),
          options: options,
          onChange: options => {
            onChange(options.map(x => x.value));
          }
        }));
      },

      options,
      defaultValue,

      validate(value) {
        return Array.isArray(value) && value.every(value => typeof value === 'string' && valuesToOption.has(value));
      }

    };
  },

  checkbox(_ref9) {
    let {
      label,
      defaultValue = false
    } = _ref9;
    return {
      kind: 'form',

      Input(_ref10) {
        let {
          value,
          onChange,
          autoFocus
        } = _ref10;
        return core.jsx(fields$1.FieldContainer, null, core.jsx(fields$1.Checkbox, {
          checked: value,
          autoFocus: autoFocus,
          onChange: event => {
            onChange(event.target.checked);
          }
        }, label));
      },

      options: undefined,
      defaultValue,

      validate(value) {
        return typeof value === 'boolean';
      }

    };
  },

  empty() {
    return {
      kind: 'form',

      Input() {
        return null;
      },

      options: undefined,
      defaultValue: undefined,

      validate(value) {
        return value === undefined;
      }

    };
  },

  child(options) {
    return {
      kind: 'child',
      options: options.kind === 'block' ? {
        kind: 'block',
        placeholder: options.placeholder,
        dividers: options.dividers,
        formatting: options.formatting === 'inherit' ? {
          blockTypes: 'inherit',
          headingLevels: 'inherit',
          inlineMarks: 'inherit',
          listTypes: 'inherit',
          alignment: 'inherit',
          softBreaks: 'inherit'
        } : options.formatting,
        links: options.links,
        relationships: options.relationships
      } : {
        kind: 'inline',
        placeholder: options.placeholder,
        formatting: options.formatting === 'inherit' ? {
          inlineMarks: 'inherit',
          softBreaks: 'inherit'
        } : options.formatting,
        links: options.links,
        relationships: options.relationships
      }
    };
  },

  object(value) {
    return {
      kind: 'object',
      value
    };
  },

  conditional(discriminant, values) {
    return {
      kind: 'conditional',
      discriminant,
      values: values
    };
  },

  relationship(_ref11) {
    let {
      relationship,
      label
    } = _ref11;
    return {
      kind: 'relationship',
      relationship,
      label
    };
  }

};
function component(options) {
  return options;
}
const NotEditable = _ref12 => {
  let {
    children
  } = _ref12,
      props = _objectWithoutProperties(_ref12, _excluded);

  return core.jsx("span", _extends({
    css: {
      userSelect: 'none'
    },
    contentEditable: false
  }, props), children);
};

exports.NotEditable = NotEditable;
exports.component = component;
exports.fields = fields;
exports.isValidURL = isValidURL;


/***/ }),

/***/ 6667:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(8527);
var core = __webpack_require__(1138);
var React = __webpack_require__(6689);
var isHotkey = __webpack_require__(481);
var slate = __webpack_require__(370);
var slateReact = __webpack_require__(9811);
var slateHistory = __webpack_require__(9116);
var popover = __webpack_require__(7330);
var tooltip = __webpack_require__(2518);
var LinkIcon = __webpack_require__(7760);
var Trash2Icon = __webpack_require__(6548);
var ExternalLinkIcon = __webpack_require__(2813);
var toolbar = __webpack_require__(8861);
var _objectSpread = __webpack_require__(417);
var api = __webpack_require__(4592);
var context = __webpack_require__(6752);
var RelationshipSelect = __webpack_require__(8375);
var _objectWithoutProperties = __webpack_require__(2220);
var fields = __webpack_require__(5007);
var button = __webpack_require__(7024);
var weakMemoize = __webpack_require__(6059);
var ColumnsIcon = __webpack_require__(4034);
var applyRef = __webpack_require__(6623);
var BoldIcon = __webpack_require__(8628);
var ItalicIcon = __webpack_require__(5493);
var PlusIcon = __webpack_require__(4940);
var ChevronDownIcon = __webpack_require__(4556);
var Maximize2Icon = __webpack_require__(1686);
var Minimize2Icon = __webpack_require__(1252);
var MoreHorizontalIcon = __webpack_require__(8158);
var CodeIcon = __webpack_require__(3551);
var AlignLeftIcon = __webpack_require__(8170);
var AlignRightIcon = __webpack_require__(2822);
var AlignCenterIcon = __webpack_require__(6424);
var MinusIcon = __webpack_require__(8385);
var matchSorter = __webpack_require__(5875);
var scrollIntoView = __webpack_require__(3324);
var mdASTUtilFromMarkdown = __webpack_require__(7709);
var autoLinkLiteralFromMarkdownExtension = __webpack_require__(6401);
var autoLinkLiteralMarkdownSyntax = __webpack_require__(5375);
var gfmStrikethroughFromMarkdownExtension = __webpack_require__(4805);
var gfmStrikethroughMarkdownSyntax = __webpack_require__(4495);
var definitions = __webpack_require__(4826);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var isHotkey__default = /*#__PURE__*/_interopDefault(isHotkey);
var weakMemoize__default = /*#__PURE__*/_interopDefault(weakMemoize);
var scrollIntoView__default = /*#__PURE__*/_interopDefault(scrollIntoView);
var mdASTUtilFromMarkdown__default = /*#__PURE__*/_interopDefault(mdASTUtilFromMarkdown);
var autoLinkLiteralFromMarkdownExtension__default = /*#__PURE__*/_interopDefault(autoLinkLiteralFromMarkdownExtension);
var autoLinkLiteralMarkdownSyntax__default = /*#__PURE__*/_interopDefault(autoLinkLiteralMarkdownSyntax);
var gfmStrikethroughFromMarkdownExtension__default = /*#__PURE__*/_interopDefault(gfmStrikethroughFromMarkdownExtension);
var gfmStrikethroughMarkdownSyntax__default = /*#__PURE__*/_interopDefault(gfmStrikethroughMarkdownSyntax);
var definitions__default = /*#__PURE__*/_interopDefault(definitions);

const paragraphElement = () => ({
  type: 'paragraph',
  children: [{
    text: ''
  }]
});
function withParagraphs(editor) {
  const {
    normalizeNode
  } = editor;

  editor.normalizeNode = entry => {
    const [node, path] = entry;

    if (slate.Editor.isEditor(node)) {
      let lastNode = node.children[node.children.length - 1];

      if ((lastNode === null || lastNode === void 0 ? void 0 : lastNode.type) !== 'paragraph') {
        slate.Transforms.insertNodes(editor, paragraphElement(), {
          at: [...path, node.children.length]
        });
        return;
      }
    }

    normalizeNode(entry);
  };

  return editor;
}

const allMarks = ['bold', 'italic', 'underline', 'strikethrough', 'code', 'superscript', 'subscript', 'keyboard'];
const isElementActive = (editor, format) => {
  const [match] = slate.Editor.nodes(editor, {
    match: n => n.type === format
  });
  return !!match;
};
function clearFormatting(editor) {
  slate.Transforms.unwrapNodes(editor, {
    match: node => node.type === 'heading' || node.type === 'blockquote' || node.type === 'code'
  });
  slate.Transforms.unsetNodes(editor, allMarks, {
    match: slate.Text.isText
  });
}
function moveChildren(editor, parent, to) {
  let shouldMoveNode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : () => true;
  const parentPath = slate.Path.isPath(parent) ? parent : parent[1];
  const parentNode = slate.Path.isPath(parent) ? slate.Node.get(editor, parentPath) : parent[0];
  if (!slate.Editor.isBlock(editor, parentNode)) return;

  for (let i = parentNode.children.length - 1; i >= 0; i--) {
    if (shouldMoveNode(parentNode.children[i])) {
      const childPath = [...parentPath, i];
      slate.Transforms.moveNodes(editor, {
        at: childPath,
        to
      });
    }
  }
} // this ensures that when changes happen, they are immediately shown
// this stops the problem of a cursor resetting to the end when a change is made
// because the changes are applied asynchronously

function useElementWithSetNodes(editor, element) {
  const [state, setState] = React.useState({
    element,
    elementWithChanges: element
  });

  if (state.element !== element) {
    setState({
      element,
      elementWithChanges: element
    });
  }

  const setNodes = changes => {
    slate.Transforms.setNodes(editor, changes, {
      at: slateReact.ReactEditor.findPath(editor, element)
    });
    setState({
      element,
      elementWithChanges: _objectSpread(_objectSpread({}, element), changes)
    });
  };

  return [state.elementWithChanges, setNodes];
}
function useEventCallback(callback) {
  const callbackRef = React.useRef(callback);
  const cb = React.useCallback(function () {
    return callbackRef.current(...arguments);
  }, []);
  React.useEffect(() => {
    callbackRef.current = callback;
  });
  return cb;
}
const IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);
const modifierKeyText = IS_MAC ? '⌘' : 'Ctrl';
const ForceValidationContext = /*#__PURE__*/React__default["default"].createContext(false);
const ForceValidationProvider = ForceValidationContext.Provider;
function useForceValidation() {
  return React.useContext(ForceValidationContext);
}
function insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, nodes) {
  var _pathRefForEmptyNodeA;

  let pathRefForEmptyNodeAtCursor;
  const entry = slate.Editor.above(editor, {
    match: node => node.type === 'heading' || node.type === 'paragraph'
  });

  if (entry && slate.Node.string(entry[0]) === '') {
    pathRefForEmptyNodeAtCursor = slate.Editor.pathRef(editor, entry[1]);
  }

  slate.Transforms.insertNodes(editor, nodes);
  let path = (_pathRefForEmptyNodeA = pathRefForEmptyNodeAtCursor) === null || _pathRefForEmptyNodeA === void 0 ? void 0 : _pathRefForEmptyNodeA.unref();

  if (path) {
    slate.Transforms.removeNodes(editor, {
      at: path
    }); // even though the selection is in the right place after the removeNodes
    // for some reason the editor blurs so we need to focus it again

    slateReact.ReactEditor.focus(editor);
  }
}
/**
 * This is equivalent to Editor.after except that it ignores points that have no content
 * like the point in a void text node, an empty text node and the last point in a text node
 */
// TODO: this would probably break if you were trying to get the last point in the editor?

function EditorAfterButIgnoringingPointsWithNoContent(editor, at) {
  let {
    distance = 1
  } = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const anchor = slate.Editor.point(editor, at, {
    edge: 'end'
  });
  const focus = slate.Editor.end(editor, []);
  const range = {
    anchor,
    focus
  };
  let d = 0;
  let target;

  for (const p of slate.Editor.positions(editor, {
    at: range
  })) {
    if (d > distance) {
      break;
    } // this is the important change


    const node = slate.Node.get(editor, p.path);

    if (node.text.length === p.offset) {
      continue;
    }

    if (d !== 0) {
      target = p;
    }

    d++;
  }

  return target;
}
function nodeTypeMatcher() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (args.length === 1) {
    const type = args[0];
    return node => node.type === type;
  }

  const set = new Set(args);
  return node => typeof node.type === 'string' && set.has(node.type);
}
function assert(condition) {
  if (!condition) {
    throw new Error('failed assert');
  }
}

const DocumentFieldRelationshipsContext = /*#__PURE__*/React.createContext({});
function useDocumentFieldRelationships() {
  return React.useContext(DocumentFieldRelationshipsContext);
}
const DocumentFieldRelationshipsProvider = DocumentFieldRelationshipsContext.Provider;
function withRelationship(editor) {
  const {
    isVoid,
    isInline
  } = editor;

  editor.isVoid = element => {
    return element.type === 'relationship' || isVoid(element);
  };

  editor.isInline = element => {
    return element.type === 'relationship' || isInline(element);
  };

  return editor;
}
function RelationshipButton(_ref) {
  let {
    onClose
  } = _ref;
  const {
    editor,
    relationships: {
      isDisabled
    }
  } = useToolbarState();
  const relationships = React.useContext(DocumentFieldRelationshipsContext);
  return core.jsx(React.Fragment, null, Object.entries(relationships).map(_ref2 => {
    let [key, relationship] = _ref2;
    if (relationship.kind === 'prop') return null;
    return core.jsx(toolbar.ToolbarButton, {
      key: key,
      isDisabled: isDisabled,
      onMouseDown: event => {
        event.preventDefault();
        slate.Transforms.insertNodes(editor, {
          type: 'relationship',
          relationship: key,
          data: null,
          children: [{
            text: ''
          }]
        });
        onClose();
      }
    }, relationship.label);
  }));
}
function RelationshipElement(_ref3) {
  let {
    attributes,
    children,
    element
  } = _ref3;
  const keystone = context.useKeystone();
  const editor = slateReact.useSlateStatic();
  const relationships = React.useContext(DocumentFieldRelationshipsContext);
  const relationship = relationships[element.relationship];
  return core.jsx("span", _extends({}, attributes, {
    css: {
      display: 'inline-flex',
      alignItems: 'center'
    }
  }), core.jsx("span", {
    contentEditable: false,
    css: {
      userSelect: 'none',
      width: 200,
      display: 'inline-block',
      paddingLeft: 4,
      paddingRight: 4,
      flex: 1
    }
  }, relationship ? core.jsx(RelationshipSelect.RelationshipSelect, {
    controlShouldRenderValue: true,
    isDisabled: false,
    list: keystone.adminMeta.lists[relationship.listKey],
    portalMenu: true,
    state: {
      kind: 'one',
      value: element.data === null ? null : {
        id: element.data.id,
        label: element.data.label || element.data.id
      },

      onChange(value) {
        const at = slateReact.ReactEditor.findPath(editor, element);

        if (value === null) {
          slate.Transforms.removeNodes(editor, {
            at
          });
        } else {
          slate.Transforms.setNodes(editor, {
            data: value
          }, {
            at
          });
        }
      }

    }
  }) : 'Invalid relationship'), core.jsx("span", {
    css: {
      flex: 0
    }
  }, children));
}

function getInitialValue(type, componentBlock, relationships) {
  const props = getInitialPropsValue({
    kind: 'object',
    value: componentBlock.props
  }, relationships);
  return {
    type: 'component-block',
    component: type,
    props,
    children: findChildPropPaths(props, componentBlock.props).map(x => ({
      type: `component-${x.options.kind}-prop`,
      propPath: x.path,
      children: [x.options.kind === 'block' ? {
        type: 'paragraph',
        children: [{
          text: ''
        }]
      } : {
        text: ''
      }]
    }))
  };
}
function getInitialPropsValue(prop, relationships) {
  switch (prop.kind) {
    case 'form':
      return prop.defaultValue;

    case 'child':
      return undefined;

    case 'relationship':
      return relationships[prop.relationship].many ? [] : null;

    case 'conditional':
      {
        const defaultValue = prop.discriminant.defaultValue;
        return {
          discriminant: defaultValue,
          value: getInitialPropsValue(prop.values[defaultValue], relationships)
        };
      }

    case 'object':
      {
        let obj = {};
        Object.keys(prop.value).forEach(key => {
          obj[key] = getInitialPropsValue(prop.value[key], relationships);
        });
        return obj;
      }
  }

  assertNever(prop);
}

function _findChildPropPaths(value, prop, path) {
  switch (prop.kind) {
    case 'form':
    case 'relationship':
      return [];

    case 'child':
      return [{
        path: path,
        options: prop.options
      }];

    case 'conditional':
      return _findChildPropPaths(value.value, prop.values[value.discriminant], path.concat('value'));

    case 'object':
      {
        let paths = [];
        Object.keys(prop.value).forEach(key => {
          paths.push(..._findChildPropPaths(value[key], prop.value[key], path.concat(key)));
        });
        return paths;
      }
  }
}

function findChildPropPaths(value, props) {
  let propPaths = _findChildPropPaths(value, {
    kind: 'object',
    value: props
  }, []);

  if (!propPaths.length) {
    return [{
      path: undefined,
      options: {
        kind: 'inline',
        placeholder: ''
      }
    }];
  }

  return propPaths;
}
function assertNever(arg) {
  throw new Error('expected to never be called but received: ' + JSON.stringify(arg));
}
function getPropsForConditionalChange(newValue, oldValue, prop, relationships) {
  if (newValue.discriminant !== oldValue.discriminant) {
    return {
      discriminant: newValue.discriminant,
      value: getInitialPropsValue(prop.values[newValue.discriminant], relationships)
    };
  } else {
    return newValue;
  }
}
function getDocumentFeaturesForChildField(editorDocumentFeatures, options) {
  var _options$formatting, _options$formatting3, _options$formatting4, _options$formatting5, _options$formatting6, _options$formatting7, _options$formatting8;

  // an important note for this: normalization based on document features
  // is done based on the document features returned here
  // and the editor document features
  // so the result for any given child prop will be the things that are
  // allowed by both these document features
  // AND the editor document features
  const inlineMarksFromOptions = (_options$formatting = options.formatting) === null || _options$formatting === void 0 ? void 0 : _options$formatting.inlineMarks;
  const inlineMarks = inlineMarksFromOptions === 'inherit' ? 'inherit' : Object.fromEntries(Object.keys(editorDocumentFeatures.formatting.inlineMarks).map(mark => {
    return [mark, !!(inlineMarksFromOptions || {})[mark]];
  }));

  if (options.kind === 'inline') {
    var _options$formatting2;

    return {
      kind: 'inline',
      inlineMarks,
      documentFeatures: {
        links: options.links === 'inherit',
        relationships: options.relationships === 'inherit'
      },
      softBreaks: ((_options$formatting2 = options.formatting) === null || _options$formatting2 === void 0 ? void 0 : _options$formatting2.softBreaks) === 'inherit'
    };
  }

  return {
    kind: 'block',
    inlineMarks,
    softBreaks: ((_options$formatting3 = options.formatting) === null || _options$formatting3 === void 0 ? void 0 : _options$formatting3.softBreaks) === 'inherit',
    documentFeatures: {
      layouts: [],
      dividers: options.dividers === 'inherit' ? editorDocumentFeatures.dividers : false,
      formatting: {
        alignment: ((_options$formatting4 = options.formatting) === null || _options$formatting4 === void 0 ? void 0 : _options$formatting4.alignment) === 'inherit' ? editorDocumentFeatures.formatting.alignment : {
          center: false,
          end: false
        },
        blockTypes: ((_options$formatting5 = options.formatting) === null || _options$formatting5 === void 0 ? void 0 : _options$formatting5.blockTypes) === 'inherit' ? editorDocumentFeatures.formatting.blockTypes : {
          blockquote: false,
          code: false
        },
        headingLevels: ((_options$formatting6 = options.formatting) === null || _options$formatting6 === void 0 ? void 0 : _options$formatting6.headingLevels) === 'inherit' ? editorDocumentFeatures.formatting.headingLevels : ((_options$formatting7 = options.formatting) === null || _options$formatting7 === void 0 ? void 0 : _options$formatting7.headingLevels) || [],
        listTypes: ((_options$formatting8 = options.formatting) === null || _options$formatting8 === void 0 ? void 0 : _options$formatting8.listTypes) === 'inherit' ? editorDocumentFeatures.formatting.listTypes : {
          ordered: false,
          unordered: false
        }
      },
      links: options.links === 'inherit',
      relationships: options.relationships === 'inherit'
    }
  };
}
function getChildFieldAtPropPath(_ref, values, props) {
  let [key, ...restOfPath] = _ref;
  let prop = props[key];

  if (!prop || prop.kind === 'form' || prop.kind === 'relationship') {
    return;
  }

  if (prop.kind === 'conditional') {
    const propVal = prop.values[values[key].discriminant];
    return getChildFieldAtPropPath(restOfPath, values, {
      value: propVal
    });
  }

  if (prop.kind === 'object') {
    return getChildFieldAtPropPath(restOfPath, values[key], prop.value);
  }

  return prop;
}
function clientSideValidateProp(prop, value) {
  switch (prop.kind) {
    case 'child':
    case 'relationship':
      {
        return true;
      }

    case 'form':
      {
        return prop.validate(value);
      }

    case 'conditional':
      {
        if (!prop.discriminant.validate(value.discriminant)) {
          return false;
        }

        return clientSideValidateProp(prop.values[value.discriminant], value.value);
      }

    case 'object':
      {
        for (const [key, childProp] of Object.entries(prop.value)) {
          if (!clientSideValidateProp(childProp, value[key])) {
            return false;
          }
        }

        return true;
      }
  }
}

function _getPreviewProps(prop, value, childrenByPath, path, relationships, onFormPropsChange) {
  switch (prop.kind) {
    case 'form':
      return {
        value,

        onChange(newValue) {
          onFormPropsChange(newValue);
        },

        options: prop.options
      };

    case 'child':
      return childrenByPath[JSON.stringify(path)];

    case 'object':
      {
        const previewProps = {};
        Object.keys(prop.value).forEach(key => {
          previewProps[key] = _getPreviewProps(prop.value[key], value[key], childrenByPath, path.concat(key), relationships, newVal => {
            onFormPropsChange(_objectSpread(_objectSpread({}, value), {}, {
              [key]: newVal
            }));
          });
        });
        return previewProps;
      }

    case 'relationship':
      {
        return {
          value,

          onChange(newValue) {
            onFormPropsChange(newValue);
          }

        };
      }

    case 'conditional':
      {
        return {
          discriminant: value.discriminant,

          onChange(newDiscriminant) {
            onFormPropsChange(getPropsForConditionalChange({
              discriminant: newDiscriminant,
              value: value.value
            }, value, prop, relationships));
          },

          options: prop.discriminant.options,
          value: _getPreviewProps(prop.values[value.discriminant], value.value, childrenByPath, path.concat('value'), relationships, val => {
            onFormPropsChange({
              discriminant: value.discriminant,
              value: val
            });
          })
        };
      }
  }
}

function createPreviewProps(element, componentBlock, childrenByPath, relationships, setNode) {
  return _getPreviewProps({
    kind: 'object',
    value: componentBlock.props
  }, element.props, childrenByPath, [], relationships, props => {
    setNode({
      props
    });
  });
}

// this is in a different component to the other form inputs because it uses useKeystone
// and we want to render the editor outside of the Admin UI on the docs site
// and a call to useKeystone will break on the docs site
function RelationshipFormInput(_ref) {
  let {
    prop,
    path,
    value,
    onChange,
    stringifiedPropPathToAutoFocus
  } = _ref;
  const relationships = useDocumentFieldRelationships();
  const keystone = context.useKeystone();
  const relationship = relationships[prop.relationship];
  const stringifiedPath = JSON.stringify(path);
  return /*#__PURE__*/React__default["default"].createElement(fields.FieldContainer, null, /*#__PURE__*/React__default["default"].createElement(fields.FieldLabel, null, prop.label), /*#__PURE__*/React__default["default"].createElement(RelationshipSelect.RelationshipSelect, {
    autoFocus: stringifiedPath === stringifiedPropPathToAutoFocus,
    controlShouldRenderValue: true,
    isDisabled: false,
    list: keystone.adminMeta.lists[relationship.listKey],
    extraSelection: relationship.selection || '',
    portalMenu: true,
    state: relationship.many ? {
      kind: 'many',
      value: value.map(x => ({
        id: x.id,
        label: x.label || x.id,
        data: x.data
      })),
      onChange
    } : {
      kind: 'one',
      value: value ? _objectSpread(_objectSpread({}, value), {}, {
        label: value.label || value.id
      }) : null,
      onChange
    }
  }));
}

function FormValueContent(_ref2) {
  let {
    prop,
    path,
    value,
    onChange,
    stringifiedPropPathToAutoFocus,
    forceValidation
  } = _ref2;
  const relationships = useDocumentFieldRelationships();
  if (prop.kind === 'child') return null;

  if (prop.kind === 'object') {
    return /*#__PURE__*/React__default["default"].createElement(core.Stack, {
      gap: "xlarge"
    }, Object.entries(prop.value).map(_ref3 => {
      let [key, propVal] = _ref3;
      return /*#__PURE__*/React__default["default"].createElement(FormValueContent, {
        key: key,
        forceValidation: forceValidation,
        stringifiedPropPathToAutoFocus: stringifiedPropPathToAutoFocus,
        path: path.concat(key),
        prop: propVal,
        value: value[key],
        onChange: val => {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            [key]: val
          }));
        }
      });
    }));
  }

  if (prop.kind === 'conditional') {
    return /*#__PURE__*/React__default["default"].createElement(core.Stack, {
      gap: "xlarge"
    }, /*#__PURE__*/React__default["default"].createElement(prop.discriminant.Input, {
      autoFocus: JSON.stringify(path.concat('discriminant')) === stringifiedPropPathToAutoFocus,
      value: value.discriminant,
      onChange: discriminant => {
        onChange(getPropsForConditionalChange({
          discriminant,
          value: value.value
        }, value, prop, relationships));
      },
      forceValidation: forceValidation && !prop.discriminant.validate(value)
    }), /*#__PURE__*/React__default["default"].createElement(FormValueContent, {
      forceValidation: forceValidation,
      stringifiedPropPathToAutoFocus: stringifiedPropPathToAutoFocus,
      path: path.concat('value'),
      prop: prop.values[value.discriminant],
      value: value.value,
      onChange: val => {
        onChange({
          discriminant: value.discriminant,
          value: val
        });
      }
    }));
  }

  if (prop.kind === 'relationship') {
    return /*#__PURE__*/React__default["default"].createElement(RelationshipFormInput, {
      prop: prop,
      path: path,
      value: value,
      onChange: onChange,
      stringifiedPropPathToAutoFocus: stringifiedPropPathToAutoFocus
    });
  }

  return /*#__PURE__*/React__default["default"].createElement(prop.Input, {
    autoFocus: JSON.stringify(path) === stringifiedPropPathToAutoFocus,
    value: value,
    onChange: onChange,
    forceValidation: forceValidation && !prop.validate(value)
  });
} // child as in the props are a tree and you want the children of a prop, not as in the kind === 'inline'

function getChildProps(prop, value) {
  if (prop.kind === 'conditional') {
    return {
      discriminant: prop.discriminant,
      value: prop.values[value.discriminant]
    };
  } else if (prop.kind === 'form' || prop.kind === 'child' || prop.kind === 'relationship') {
    return {};
  } else if (prop.kind === 'object') {
    return prop.value;
  } else {
    assertNever(prop); // TypeScript should understand that this will never happen but for some reason it doesn't

    return {};
  }
}

function findFirstFocusablePropPath(props, path, value) {
  for (const key of Object.keys(props)) {
    const prop = props[key];
    const newPath = path.concat(key);

    if (prop.kind === 'form' || prop.kind === 'relationship') {
      return newPath;
    }

    let children = getChildProps(prop, value[key]);
    const childFocusable = findFirstFocusablePropPath(children, newPath, value[key]);

    if (childFocusable) {
      return childFocusable;
    }
  }
}

function FormValue(_ref4) {
  let {
    value,
    onClose,
    onChange,
    componentBlock,
    isValid
  } = _ref4;
  const [forceValidation, setForceValidation] = React.useState(false);
  const focusablePath = JSON.stringify(findFirstFocusablePropPath(componentBlock.props, [], value));
  return /*#__PURE__*/React__default["default"].createElement(core.Stack, {
    gap: "xlarge",
    contentEditable: false
  }, /*#__PURE__*/React__default["default"].createElement(FormValueContent, {
    forceValidation: forceValidation,
    onChange: onChange,
    path: [],
    prop: {
      kind: 'object',
      value: componentBlock.props
    },
    value: value,
    stringifiedPropPathToAutoFocus: focusablePath
  }), /*#__PURE__*/React__default["default"].createElement(button.Button, {
    size: "small",
    tone: "active",
    weight: "bold",
    onClick: () => {
      if (isValid) {
        onClose();
      } else {
        setForceValidation(true);
      }
    }
  }, "Done"));
}

function areArraysEqual(arrA, arrB) {
  if (arrA.length !== arrB.length) {
    return false;
  }

  for (let i = 0; i < arrA.length; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}

function normalizeTextBasedOnInlineMarksAndSoftBreaks(_ref, editor, inlineMarks, softBreaks) {
  let [node, path] = _ref;
  const marksToRemove = Object.keys(node).filter(x => x !== 'text' && x !== 'insertMenu' && inlineMarks[x] !== true);

  if (marksToRemove.length) {
    slate.Transforms.unsetNodes(editor, marksToRemove, {
      at: path
    });
    return true;
  }

  if (!softBreaks) {
    const hasSoftBreaks = node.text.includes('\n');

    if (hasSoftBreaks) {
      const [parentNode] = slate.Editor.parent(editor, path);

      if (parentNode.type !== 'code') {
        for (const position of slate.Editor.positions(editor, {
          at: path
        })) {
          const character = slate.Node.get(editor, position.path).text[position.offset];

          if (character === '\n') {
            slate.Transforms.delete(editor, {
              at: position
            });
            return true;
          }
        }
      }
    }
  }

  return false;
}
function normalizeInlineBasedOnLinksAndRelationships(_ref2, editor, links, relationshipsEnabled, relationships) {
  let [node, path] = _ref2;

  if (node.type === 'link' && !links) {
    slate.Transforms.insertText(editor, ` (${node.href})`, {
      at: slate.Editor.end(editor, path)
    });
    slate.Transforms.unwrapNodes(editor, {
      at: path
    });
    return true;
  }

  if (node.type === 'relationship' && (!relationshipsEnabled || relationships[node.relationship] === undefined || relationships[node.relationship].kind !== 'inline')) {
    const data = node.data;

    if (data) {
      const relationship = relationships[node.relationship];
      slate.Transforms.insertText(editor, `${data.label || data.id || ''} (${(relationship === null || relationship === void 0 ? void 0 : relationship.kind) === 'inline' ? relationship.label : node.relationship}:${data.id || ''})`, {
        at: slate.Editor.before(editor, path)
      });
    }

    slate.Transforms.removeNodes(editor, {
      at: path
    });
    return true;
  }

  return false;
}
function normalizeElementBasedOnDocumentFeatures(_ref3, editor, _ref4, relationships) {
  let [node, path] = _ref3;
  let {
    formatting,
    dividers,
    layouts,
    links,
    relationships: relationshipsEnabled
  } = _ref4;

  if (node.type === 'heading' && (!formatting.headingLevels.length || !formatting.headingLevels.includes(node.level)) || node.type === 'ordered-list' && !formatting.listTypes.ordered || node.type === 'unordered-list' && !formatting.listTypes.unordered || node.type === 'code' && !formatting.blockTypes.code || node.type === 'blockquote' && !formatting.blockTypes.blockquote || node.type === 'layout' && (layouts.length === 0 || !layouts.some(layout => areArraysEqual(layout, node.layout)))) {
    slate.Transforms.unwrapNodes(editor, {
      at: path
    });
    return true;
  }

  if ((node.type === 'paragraph' || node.type === 'heading') && (!formatting.alignment.center && node.textAlign === 'center' || !formatting.alignment.end && node.textAlign === 'end' || 'textAlign' in node && node.textAlign !== 'center' && node.textAlign !== 'end')) {
    slate.Transforms.unsetNodes(editor, 'textAlign', {
      at: path
    });
    return true;
  }

  if (node.type === 'divider' && !dividers) {
    slate.Transforms.removeNodes(editor, {
      at: path
    });
    return true;
  }

  return normalizeInlineBasedOnLinksAndRelationships([node, path], editor, links, relationshipsEnabled, relationships);
}
function withDocumentFeaturesNormalization(documentFeatures, relationships, editor) {
  const {
    normalizeNode
  } = editor;

  const documentFeaturesForNormalization = _objectSpread(_objectSpread({}, documentFeatures), {}, {
    relationships: true
  });

  editor.normalizeNode = _ref5 => {
    let [node, path] = _ref5;

    if (slate.Text.isText(node)) {
      normalizeTextBasedOnInlineMarksAndSoftBreaks([node, path], editor, documentFeatures.formatting.inlineMarks, documentFeatures.formatting.softBreaks);
    } else if (slate.Element.isElement(node)) {
      normalizeElementBasedOnDocumentFeatures([node, path], editor, documentFeaturesForNormalization, relationships);
    }

    normalizeNode([node, path]);
  };

  return editor;
}

function getAncestorComponentBlock(editor) {
  if (editor.selection) {
    const ancestorEntry = slate.Editor.above(editor, {
      match: node => slate.Editor.isBlock(editor, node) && node.type !== 'paragraph'
    });

    if (ancestorEntry && (ancestorEntry[0].type === 'component-block-prop' || ancestorEntry[0].type === 'component-inline-prop')) {
      return {
        isInside: true,
        componentBlock: slate.Editor.parent(editor, ancestorEntry[1]),
        prop: ancestorEntry
      };
    }
  }

  return {
    isInside: false
  };
}

const alreadyNormalizedThings = new WeakMap();

function normalizeNodeWithinComponentProp(_ref, editor, fieldOptions, relationships) {
  let [node, path] = _ref;
  let alreadyNormalizedNodes = alreadyNormalizedThings.get(fieldOptions);

  if (!alreadyNormalizedNodes) {
    alreadyNormalizedNodes = new WeakSet();
    alreadyNormalizedThings.set(fieldOptions, alreadyNormalizedNodes);
  }

  if (alreadyNormalizedNodes.has(node)) {
    return false;
  }

  let didNormalization = false;

  if (fieldOptions.inlineMarks !== 'inherit' && slate.Text.isText(node)) {
    didNormalization = normalizeTextBasedOnInlineMarksAndSoftBreaks([node, path], editor, fieldOptions.inlineMarks, fieldOptions.softBreaks);
  }

  if (slate.Element.isElement(node)) {
    let childrenHasChanged = node.children.map((node, i) => normalizeNodeWithinComponentProp([node, [...path, i]], editor, fieldOptions, relationships)) // .map then .some because we don't want to exit early
    .some(x => x);

    if (fieldOptions.kind === 'block') {
      didNormalization = normalizeElementBasedOnDocumentFeatures([node, path], editor, fieldOptions.documentFeatures, relationships) || childrenHasChanged;
    } else {
      didNormalization = normalizeInlineBasedOnLinksAndRelationships([node, path], editor, fieldOptions.documentFeatures.links, fieldOptions.documentFeatures.relationships, relationships);
    }
  }

  if (didNormalization === false) {
    alreadyNormalizedNodes.add(node);
  }

  return didNormalization;
}

function withComponentBlocks(blockComponents, editorDocumentFeatures, relationships, editor) {
  // note that conflicts between the editor document features
  // and the child field document features are dealt with elsewhere
  const memoizedGetDocumentFeaturesForChildField = weakMemoize__default["default"](options => {
    return getDocumentFeaturesForChildField(editorDocumentFeatures, options);
  });
  const {
    normalizeNode,
    deleteBackward,
    insertBreak
  } = editor;

  editor.deleteBackward = unit => {
    if (editor.selection) {
      const ancestorComponentBlock = getAncestorComponentBlock(editor);

      if (ancestorComponentBlock.isInside && slate.Range.isCollapsed(editor.selection) && slate.Editor.isStart(editor, editor.selection.anchor, ancestorComponentBlock.prop[1]) && ancestorComponentBlock.prop[1][ancestorComponentBlock.prop[1].length - 1] === 0) {
        slate.Transforms.unwrapNodes(editor, {
          at: ancestorComponentBlock.componentBlock[1]
        });
        return;
      }
    }

    deleteBackward(unit);
  };

  editor.insertBreak = () => {
    const ancestorComponentBlock = getAncestorComponentBlock(editor);

    if (editor.selection && ancestorComponentBlock.isInside) {
      const {
        prop: [componentPropNode, componentPropPath],
        componentBlock: [componentBlockNode, componentBlockPath]
      } = ancestorComponentBlock;
      const isLastProp = componentPropPath[componentPropPath.length - 1] === componentBlockNode.children.length - 1;

      if (componentPropNode.type === 'component-block-prop') {
        const [[paragraphNode, paragraphPath]] = slate.Editor.nodes(editor, {
          match: node => node.type === 'paragraph'
        });
        const isLastParagraph = paragraphPath[paragraphPath.length - 1] === componentPropNode.children.length - 1;

        if (slate.Node.string(paragraphNode) === '' && isLastParagraph) {
          if (isLastProp) {
            slate.Transforms.moveNodes(editor, {
              at: paragraphPath,
              to: slate.Path.next(ancestorComponentBlock.componentBlock[1])
            });
          } else {
            // TODO: this goes to the start of the next block, is that right?
            // should we just insertBreak always here?
            slate.Transforms.move(editor, {
              distance: 1,
              unit: 'line'
            });
            slate.Transforms.removeNodes(editor, {
              at: paragraphPath
            });
          }

          return;
        }
      }

      if (componentPropNode.type === 'component-inline-prop') {
        slate.Editor.withoutNormalizing(editor, () => {
          slate.Transforms.splitNodes(editor, {
            always: true
          });
          const splitNodePath = slate.Path.next(componentPropPath);

          if (isLastProp) {
            slate.Transforms.moveNodes(editor, {
              at: splitNodePath,
              to: slate.Path.next(componentBlockPath)
            });
          } else {
            moveChildren(editor, splitNodePath, [...slate.Path.next(splitNodePath), 0]);
            slate.Transforms.removeNodes(editor, {
              at: splitNodePath
            });
          }
        });
        return;
      }
    }

    insertBreak();
  };

  editor.normalizeNode = entry => {
    const [node, path] = entry;

    if (slate.Element.isElement(node) || slate.Editor.isEditor(node)) {
      if (node.type === 'component-inline-prop' && !node.propPath && (node.children.length !== 1 || !slate.Text.isText(node.children[0]) || node.children[0].text !== '')) {
        slate.Transforms.removeNodes(editor, {
          at: path
        });
        return;
      }

      if (slate.Element.isElement(node) && node.type === 'component-block') {
        const componentBlock = blockComponents[node.component];

        if (componentBlock) {
          let missingKeys = new Map(findChildPropPaths(node.props, componentBlock.props).map(x => [JSON.stringify(x.path), x.options.kind]));
          node.children.forEach(node => {
            assert(node.type === 'component-block-prop' || node.type === 'component-inline-prop');
            missingKeys.delete(JSON.stringify(node.propPath));
          });

          if (missingKeys.size) {
            slate.Transforms.insertNodes(editor, [...missingKeys].map(_ref2 => {
              let [prop, kind] = _ref2;
              return {
                type: `component-${kind}-prop`,
                propPath: prop ? JSON.parse(prop) : prop,
                children: [{
                  text: ''
                }]
              };
            }), {
              at: [...path, node.children.length]
            });
            return;
          }

          let foundProps = new Set();
          let stringifiedInlinePropPaths = {};
          findChildPropPaths(node.props, blockComponents[node.component].props).forEach((x, index) => {
            stringifiedInlinePropPaths[JSON.stringify(x.path)] = {
              options: x.options,
              index
            };
          });

          for (const [index, childNode] of node.children.entries()) {
            if ( // children that are not these will be handled by
            // the generic allowedChildren normalization
            childNode.type === 'component-inline-prop' || childNode.type === 'component-block-prop') {
              const childPath = [...path, index];
              const stringifiedPropPath = JSON.stringify(childNode.propPath);

              if (stringifiedInlinePropPaths[stringifiedPropPath] === undefined) {
                slate.Transforms.removeNodes(editor, {
                  at: childPath
                });
                return;
              } else {
                if (foundProps.has(stringifiedPropPath)) {
                  slate.Transforms.removeNodes(editor, {
                    at: childPath
                  });
                  return;
                }

                foundProps.add(stringifiedPropPath);
                const propInfo = stringifiedInlinePropPaths[stringifiedPropPath];
                const expectedIndex = propInfo.index;

                if (index !== expectedIndex) {
                  slate.Transforms.moveNodes(editor, {
                    at: childPath,
                    to: [...path, expectedIndex]
                  });
                  return;
                }

                const expectedChildNodeType = `component-${propInfo.options.kind}-prop`;

                if (childNode.type !== expectedChildNodeType) {
                  slate.Transforms.setNodes(editor, {
                    type: expectedChildNodeType
                  }, {
                    at: childPath
                  });
                  return;
                }

                const documentFeatures = memoizedGetDocumentFeaturesForChildField(propInfo.options);

                if (normalizeNodeWithinComponentProp([childNode, childPath], editor, documentFeatures, relationships)) {
                  return;
                }
              }
            }
          }
        }
      }
    }

    normalizeNode(entry);
  };

  return editor;
}

const ComponentBlockContext = /*#__PURE__*/React.createContext({});
function getPlaceholderTextForPropPath(propPath, fields, formProps) {
  const prop = propPath[0];
  const field = fields[prop];

  if (field.kind === 'relationship' || field.kind === 'form') {
    throw new Error('unexpected prop field when finding placeholder text for child prop');
  }

  if (field.kind === 'object') {
    return getPlaceholderTextForPropPath(propPath.slice(1), field.value, formProps[prop]);
  }

  if (field.kind === 'conditional') {
    return getPlaceholderTextForPropPath(propPath.slice(1), {
      value: field.values[formProps[prop].discriminant]
    }, formProps[prop]);
  }

  return field.options.placeholder;
}
function ComponentInlineProp(props) {
  return core.jsx("span", props.attributes, props.children);
}
function insertComponentBlock(editor, componentBlocks, componentBlock, relationships) {
  let node = getInitialValue(componentBlock, componentBlocks[componentBlock], relationships);
  insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, node);
  const componentBlockEntry = slate.Editor.above(editor, {
    match: node => node.type === 'component-block'
  });

  if (componentBlockEntry) {
    const start = slate.Editor.start(editor, componentBlockEntry[1]);
    slate.Transforms.setSelection(editor, {
      anchor: start,
      focus: start
    });
  }
}
const BlockComponentsButtons = _ref => {
  let {
    onClose
  } = _ref;
  const editor = slateReact.useSlateStatic();
  const blockComponents = React.useContext(ComponentBlockContext);
  const relationships = useDocumentFieldRelationships();
  return core.jsx(React.Fragment, null, Object.keys(blockComponents).map(key => core.jsx(toolbar.ToolbarButton, {
    key: key,
    onMouseDown: event => {
      event.preventDefault();
      insertComponentBlock(editor, blockComponents, key, relationships);
      onClose();
    }
  }, blockComponents[key].label)));
};
const ComponentBlocksElement = _ref2 => {
  let {
    attributes,
    children,
    element: __elementToGetPath
  } = _ref2;
  const editor = slateReact.useSlateStatic();
  const focused = slateReact.useFocused();
  const selected = slateReact.useSelected();
  const [editMode, setEditMode] = React.useState(false);
  const [currentElement, setElement] = useElementWithSetNodes(editor, __elementToGetPath);
  const {
    colors,
    fields,
    spacing,
    typography
  } = core.useTheme();
  const blockComponents = React.useContext(ComponentBlockContext);
  const componentBlock = blockComponents[currentElement.component];
  const isValid = React.useMemo(() => {
    return componentBlock ? clientSideValidateProp({
      kind: 'object',
      value: componentBlock.props
    }, currentElement.props) : true;
  }, [componentBlock, currentElement.props]);
  const documentFieldRelationships = useDocumentFieldRelationships();

  if (!componentBlock) {
    return core.jsx("div", {
      css: {
        border: 'red 4px solid',
        padding: spacing.medium
      }
    }, core.jsx("pre", {
      contentEditable: false,
      css: {
        userSelect: 'none'
      }
    }, `The block "${currentElement.component}" no longer exists.

Props:

${JSON.stringify(currentElement.props, null, 2)}

Content:`), children);
  }

  return core.jsx("div", _extends({
    "data-with-chrome": !componentBlock.chromeless,
    css: {
      marginBottom: spacing.xlarge,
      marginTop: spacing.xlarge,
      '&[data-with-chrome=true]': {
        paddingLeft: spacing.xlarge,
        position: 'relative',
        ':before': {
          content: '" "',
          backgroundColor: editMode ? colors.linkColor : colors.border,
          borderRadius: 4,
          width: 4,
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1
        }
      }
    }
  }, attributes), !componentBlock.chromeless && core.jsx(api.NotEditable, {
    css: {
      color: fields.legendColor,
      display: 'block',
      fontSize: typography.fontSize.small,
      fontWeight: typography.fontWeight.bold,
      lineHeight: 1,
      marginBottom: spacing.small,
      textTransform: 'uppercase'
    }
  }, componentBlock.label), editMode && core.jsx(FormValue, {
    isValid: isValid,
    componentBlock: componentBlock,
    onClose: () => {
      setEditMode(false);
    },
    value: currentElement.props,
    onChange: val => {
      setElement({
        props: val
      });
    }
  }), core.jsx("div", {
    css: {
      display: editMode ? 'none' : 'block',
      position: 'relative'
    }
  }, editMode ? children : core.jsx(ComponentBlockRender, {
    children: children,
    componentBlock: componentBlock,
    element: currentElement,
    onElementChange: setElement
  }), !editMode && (() => {
    const toolbarProps = createPreviewProps(currentElement, componentBlock, {}, documentFieldRelationships, setElement);
    const ChromefulToolbar = componentBlock.toolbar ? componentBlock.toolbar : DefaultToolbarWithChrome;
    const ChromelessToolbar = componentBlock.chromeless && componentBlock.toolbar ? componentBlock.toolbar : DefaultToolbarWithoutChrome;
    return componentBlock.chromeless ? focused && selected && core.jsx(toolbar.InlineDialog, {
      isRelative: true
    }, core.jsx(ChromelessToolbar, {
      onRemove: () => {
        const path = slateReact.ReactEditor.findPath(editor, __elementToGetPath);
        slate.Transforms.removeNodes(editor, {
          at: path
        });
      },
      props: toolbarProps
    })) : core.jsx(ChromefulToolbar, {
      isValid: isValid,
      onRemove: () => {
        const path = slateReact.ReactEditor.findPath(editor, __elementToGetPath);
        slate.Transforms.removeNodes(editor, {
          at: path
        });
      },
      onShowEditMode: () => {
        setEditMode(true);
      },
      props: toolbarProps
    });
  })()));
};

function DefaultToolbarWithChrome(_ref3) {
  let {
    onShowEditMode,
    onRemove,
    isValid
  } = _ref3;
  const theme = core.useTheme();
  return core.jsx(toolbar.ToolbarGroup, {
    as: api.NotEditable,
    marginTop: "small"
  }, core.jsx(toolbar.ToolbarButton, {
    onClick: () => {
      onShowEditMode();
    }
  }, "Edit"), core.jsx(toolbar.ToolbarSeparator, null), core.jsx(tooltip.Tooltip, {
    content: "Remove",
    weight: "subtle"
  }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
    variant: "destructive",
    onClick: () => {
      onRemove();
    }
  }, attrs), core.jsx(Trash2Icon.Trash2Icon, {
    size: "small"
  }))), !isValid && core.jsx(React.Fragment, null, core.jsx(toolbar.ToolbarSeparator, null), core.jsx("span", {
    css: {
      color: theme.palette.red500,
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing.small
    }
  }, "Please edit the form, there are invalid fields.")));
}

function DefaultToolbarWithoutChrome(_ref4) {
  let {
    onRemove
  } = _ref4;
  return core.jsx(tooltip.Tooltip, {
    content: "Remove",
    weight: "subtle"
  }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
    variant: "destructive",
    onMouseDown: event => {
      event.preventDefault();
      onRemove();
    }
  }, attrs), core.jsx(Trash2Icon.Trash2Icon, {
    size: "small"
  })));
}

function ComponentBlockRender(_ref5) {
  let {
    componentBlock,
    element,
    onElementChange,
    children
  } = _ref5;
  const childrenByPath = {};
  let maybeChild;
  children.forEach(child => {
    let stringified = JSON.stringify(child.props.children.props.element.propPath);

    if (stringified === undefined) {
      maybeChild = child;
    } else {
      childrenByPath[stringified] = child;
    }
  });
  const previewProps = createPreviewProps(element, componentBlock, childrenByPath, useDocumentFieldRelationships(), onElementChange);
  return core.jsx(React.Fragment, null, core.jsx(componentBlock.component, previewProps), core.jsx("span", {
    css: {
      display: 'none'
    }
  }, maybeChild));
}

const LayoutOptionsContext = /*#__PURE__*/React.createContext([]);
const LayoutOptionsProvider = LayoutOptionsContext.Provider; // UI Components

const LayoutContainer = _ref => {
  let {
    attributes,
    children,
    element
  } = _ref;
  const {
    spacing
  } = core.useTheme();
  const focused = slateReact.useFocused();
  const selected = slateReact.useSelected();
  const editor = slateReact.useSlateStatic();
  const layout = element.layout;
  const layoutOptions = React.useContext(LayoutOptionsContext);
  return core.jsx("div", _extends({
    css: {
      marginBottom: spacing.medium,
      marginTop: spacing.medium,
      position: 'relative'
    }
  }, attributes), core.jsx("div", {
    css: {
      columnGap: spacing.small,
      display: 'grid',
      gridTemplateColumns: layout.map(x => `${x}fr`).join(' ')
    }
  }, children), focused && selected && core.jsx(toolbar.InlineDialog, {
    isRelative: true
  }, core.jsx(toolbar.ToolbarGroup, null, layoutOptions.map((layoutOption, i) => core.jsx(toolbar.ToolbarButton, {
    isSelected: layoutOption.toString() === layout.toString(),
    key: i,
    onMouseDown: event => {
      event.preventDefault();
      const path = slateReact.ReactEditor.findPath(editor, element);
      slate.Transforms.setNodes(editor, {
        type: 'layout',
        layout: layoutOption
      }, {
        at: path
      });
    }
  }, makeLayoutIcon(layoutOption))), core.jsx(toolbar.ToolbarSeparator, null), core.jsx(tooltip.Tooltip, {
    content: "Remove",
    weight: "subtle"
  }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
    variant: "destructive",
    onMouseDown: event => {
      event.preventDefault();
      const path = slateReact.ReactEditor.findPath(editor, element);
      slate.Transforms.removeNodes(editor, {
        at: path
      });
    }
  }, attrs), core.jsx(Trash2Icon.Trash2Icon, {
    size: "small"
  }))))));
};
const LayoutArea = _ref2 => {
  let {
    attributes,
    children
  } = _ref2;
  const {
    colors,
    radii,
    spacing
  } = core.useTheme();
  return core.jsx("div", _extends({
    css: {
      border: `2px dashed ${colors.border}`,
      borderRadius: radii.small,
      paddingLeft: spacing.medium,
      paddingRight: spacing.medium
    }
  }, attributes), children);
};
const insertLayout = (editor, layout) => {
  insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, [{
    type: 'layout',
    layout,
    children: [{
      type: 'layout-area',
      children: [{
        type: 'paragraph',
        children: [{
          text: ''
        }]
      }]
    }]
  }]);
  const layoutEntry = slate.Editor.above(editor, {
    match: x => x.type === 'layout'
  });

  if (layoutEntry) {
    slate.Transforms.select(editor, [...layoutEntry[1], 0]);
  }
}; // Plugin

function withLayouts(editor) {
  const {
    normalizeNode,
    deleteBackward
  } = editor;

  editor.deleteBackward = unit => {
    if (editor.selection && slate.Range.isCollapsed(editor.selection) && // this is just an little optimisation
    // we're only doing things if we're at the start of a layout area
    // and the start of anything will always be offset 0
    // so we'll bailout if we're not at offset 0
    editor.selection.anchor.offset === 0) {
      const [aboveNode, abovePath] = slate.Editor.above(editor, {
        match: node => node.type === 'layout-area'
      }) || [editor, []];

      if (aboveNode.type === 'layout-area' && slate.Point.equals(slate.Editor.start(editor, abovePath), editor.selection.anchor)) {
        return;
      }
    }

    deleteBackward(unit);
  };

  editor.normalizeNode = entry => {
    const [node, path] = entry;

    if (slate.Element.isElement(node) && node.type === 'layout') {
      if (node.layout === undefined) {
        slate.Transforms.unwrapNodes(editor, {
          at: path
        });
        return;
      }

      if (node.children.length < node.layout.length) {
        slate.Transforms.insertNodes(editor, Array.from({
          length: node.layout.length - node.children.length
        }).map(() => ({
          type: 'layout-area',
          children: [paragraphElement()]
        })), {
          at: [...path, node.children.length]
        });
        return;
      }

      if (node.children.length > node.layout.length) {
        Array.from({
          length: node.children.length - node.layout.length
        }).map((_, i) => i).reverse().forEach(i => {
          const layoutAreaToRemovePath = [...path, i + node.layout.length];
          const child = node.children[i + node.layout.length];
          moveChildren(editor, layoutAreaToRemovePath, [...path, node.layout.length - 1, node.children[node.layout.length - 1].children.length], node => node.type !== 'paragraph' || slate.Node.string(child) !== '');
          slate.Transforms.removeNodes(editor, {
            at: layoutAreaToRemovePath
          });
        });
        return;
      }
    }

    normalizeNode(entry);
  };

  return editor;
} // Utils
// ------------------------------

function makeLayoutIcon(ratios) {
  const size = 16;
  const element = core.jsx("div", {
    role: "img",
    css: {
      display: 'grid',
      gridTemplateColumns: ratios.map(r => `${r}fr`).join(' '),
      gap: 2,
      width: size,
      height: size
    }
  }, ratios.map((_, i) => {
    return core.jsx("div", {
      key: i,
      css: {
        backgroundColor: 'currentcolor',
        borderRadius: 1
      }
    });
  }));
  return element;
}

const layoutsIcon = core.jsx(ColumnsIcon.ColumnsIcon, {
  size: "small"
});
const LayoutsButton = _ref3 => {
  let {
    layouts
  } = _ref3;
  const {
    editor,
    layouts: {
      isSelected
    }
  } = useToolbarState();
  return React.useMemo(() => core.jsx(tooltip.Tooltip, {
    content: "Layouts",
    weight: "subtle"
  }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
    isSelected: isSelected,
    onMouseDown: event => {
      event.preventDefault();

      if (isElementActive(editor, 'layout')) {
        slate.Transforms.unwrapNodes(editor, {
          match: node => node.type === 'layout'
        });
        return;
      }

      insertLayout(editor, layouts[0]);
    }
  }, attrs), layoutsIcon)), [editor, isSelected, layouts]);
};

const _excluded$1 = ["type"];
const isListType = type => type === 'ordered-list' || type === 'unordered-list';
const isListNode = node => isListType(node.type);
const toggleList = (editor, format) => {
  const listAbove = getListTypeAbove(editor);
  const isActive = isElementActive(editor, format) && (listAbove === 'none' || listAbove === format);
  slate.Editor.withoutNormalizing(editor, () => {
    slate.Transforms.unwrapNodes(editor, {
      match: isListNode,
      split: true,
      mode: isActive ? 'all' : 'lowest'
    });

    if (!isActive) {
      slate.Transforms.wrapNodes(editor, {
        type: format,
        children: []
      }, {
        match: x => x.type !== 'list-item-content' && slate.Editor.isBlock(editor, x)
      });
    }
  });
};

function getAncestorList(editor) {
  if (editor.selection) {
    const listItem = slate.Editor.above(editor, {
      match: nodeTypeMatcher('list-item')
    });
    const list = slate.Editor.above(editor, {
      match: isListNode
    });

    if (listItem && list) {
      return {
        isInside: true,
        listItem,
        list
      };
    }
  }

  return {
    isInside: false
  };
}

function withList(editor) {
  const {
    insertBreak,
    normalizeNode,
    deleteBackward
  } = editor;

  editor.deleteBackward = unit => {
    if (editor.selection) {
      const ancestorList = getAncestorList(editor);

      if (ancestorList.isInside && slate.Range.isCollapsed(editor.selection) && slate.Editor.isStart(editor, editor.selection.anchor, ancestorList.list[1])) {
        slate.Transforms.unwrapNodes(editor, {
          match: isListNode,
          split: true
        });
        return;
      }
    }

    deleteBackward(unit);
  };

  editor.insertBreak = () => {
    const [listItem] = slate.Editor.nodes(editor, {
      match: node => node.type === 'list-item',
      mode: 'lowest'
    });

    if (listItem && slate.Node.string(listItem[0]) === '') {
      slate.Transforms.unwrapNodes(editor, {
        match: isListNode,
        split: true
      });
      return;
    }

    insertBreak();
  };

  editor.normalizeNode = entry => {
    const [node, path] = entry;

    if (slate.Element.isElement(node) || slate.Editor.isEditor(node)) {
      const isElementBeingNormalizedAList = isListNode(node);

      for (const [childNode, childPath] of slate.Node.children(editor, path)) {
        const index = childPath[childPath.length - 1]; // merge sibling lists

        if (isListNode(childNode)) {
          var _node$children;

          if (((_node$children = node.children[childPath[childPath.length - 1] + 1]) === null || _node$children === void 0 ? void 0 : _node$children.type) === childNode.type) {
            const siblingNodePath = slate.Path.next(childPath);
            moveChildren(editor, siblingNodePath, [...childPath, childNode.children.length]);
            slate.Transforms.removeNodes(editor, {
              at: siblingNodePath
            });
            return;
          }

          if (isElementBeingNormalizedAList) {
            const previousChild = node.children[index - 1];

            if (slate.Element.isElement(previousChild)) {
              slate.Transforms.moveNodes(editor, {
                at: childPath,
                to: [...slate.Path.previous(childPath), previousChild.children.length - 1]
              });
            } else {
              slate.Transforms.unwrapNodes(editor, {
                at: childPath
              });
            }

            return;
          }
        }

        if (node.type === 'list-item' && childNode.type !== 'list-item-content' && index === 0 && slate.Editor.isBlock(editor, childNode)) {
          if (path[path.length - 1] !== 0) {
            const previousChild = slate.Node.get(editor, slate.Path.previous(path));

            if (slate.Element.isElement(previousChild)) {
              slate.Transforms.moveNodes(editor, {
                at: path,
                to: [...slate.Path.previous(path), previousChild.children.length]
              });
              return;
            }
          }

          slate.Transforms.unwrapNodes(editor, {
            at: childPath
          });
          return;
        }

        if (node.type === 'list-item' && childNode.type === 'list-item-content' && index !== 0) {
          slate.Transforms.splitNodes(editor, {
            at: childPath
          });
          return;
        }
      }
    }

    normalizeNode(entry);
  };

  return editor;
}
const ListButton = /*#__PURE__*/React.forwardRef(function ListButton(props, ref) {
  const {
    editor,
    lists: {
      [props.type === 'ordered-list' ? 'ordered' : 'unordered']: {
        isDisabled,
        isSelected
      }
    }
  } = useToolbarState();
  return React.useMemo(() => {
    const {
      type
    } = props,
          restProps = _objectWithoutProperties(props, _excluded$1);

    return core.jsx(toolbar.ToolbarButton, _extends({
      ref: ref,
      isDisabled: isDisabled,
      isSelected: isSelected,
      onMouseDown: event => {
        event.preventDefault();
        toggleList(editor, type);
      }
    }, restProps));
  }, [props, ref, isDisabled, isSelected, editor]);
});
function nestList(editor) {
  const block = slate.Editor.above(editor, {
    match: n => slate.Editor.isBlock(editor, n)
  });

  if (!block || block[0].type !== 'list-item-content') {
    return false;
  }

  const listItemPath = slate.Path.parent(block[1]); // we're the first item in the list therefore we can't nest

  if (listItemPath[listItemPath.length - 1] === 0) {
    return false;
  }

  const previousListItemPath = slate.Path.previous(listItemPath);
  const previousListItemNode = slate.Node.get(editor, previousListItemPath);

  if (previousListItemNode.children.length !== 1) {
    // there's a list nested inside our previous sibling list item so move there
    slate.Transforms.moveNodes(editor, {
      at: listItemPath,
      to: [...previousListItemPath, previousListItemNode.children.length - 1, previousListItemNode.children[previousListItemNode.children.length - 1].children.length]
    });
    return true;
  }

  const type = slate.Editor.parent(editor, slate.Path.parent(block[1]))[0].type;
  slate.Editor.withoutNormalizing(editor, () => {
    slate.Transforms.wrapNodes(editor, {
      type,
      children: []
    }, {
      at: listItemPath
    });
    slate.Transforms.moveNodes(editor, {
      to: [...previousListItemPath, previousListItemNode.children.length],
      at: listItemPath
    });
  });
  return true;
}
function unnestList(editor) {
  const block = slate.Editor.above(editor, {
    match: n => slate.Editor.isBlock(editor, n)
  });

  if (block && block[0].type === 'list-item-content') {
    slate.Transforms.unwrapNodes(editor, {
      match: isListNode,
      split: true
    });
    return true;
  }

  return false;
}

const ToolbarStateContext = /*#__PURE__*/React__default["default"].createContext(null);
function useToolbarState() {
  const toolbarState = React.useContext(ToolbarStateContext);

  if (!toolbarState) {
    throw new Error('ToolbarStateProvider must be used to use useToolbarState');
  }

  return toolbarState;
}
function getAncestorComponentChildFieldDocumentFeatures(editor, editorDocumentFeatures, componentBlocks) {
  const ancestorComponentProp = slate.Editor.above(editor, {
    match: nodeTypeMatcher('component-block-prop', 'component-inline-prop')
  });

  if (ancestorComponentProp) {
    const propPath = ancestorComponentProp[0].propPath;
    const ancestorComponent = slate.Editor.parent(editor, ancestorComponentProp[1]);

    if (ancestorComponent[0].type === 'component-block') {
      const component = ancestorComponent[0].component;
      const componentBlock = componentBlocks[component];

      if (componentBlock && propPath) {
        var _getChildFieldAtPropP;

        const options = (_getChildFieldAtPropP = getChildFieldAtPropPath(propPath, ancestorComponent[0].props, componentBlock.props)) === null || _getChildFieldAtPropP === void 0 ? void 0 : _getChildFieldAtPropP.options;

        if (options) {
          return getDocumentFeaturesForChildField(editorDocumentFeatures, options);
        }
      }
    }
  }
}
const createToolbarState = (editor, componentBlocks, editorDocumentFeatures) => {
  const locationDocumentFeatures = getAncestorComponentChildFieldDocumentFeatures(editor, editorDocumentFeatures, componentBlocks) || {
    kind: 'block',
    inlineMarks: 'inherit',
    documentFeatures: {
      dividers: true,
      formatting: {
        alignment: {
          center: true,
          end: true
        },
        blockTypes: {
          blockquote: true,
          code: true
        },
        headingLevels: [1, 2, 3, 4, 5, 6],
        listTypes: {
          ordered: true,
          unordered: true
        }
      },
      layouts: editorDocumentFeatures.layouts,
      links: true,
      relationships: true
    },
    softBreaks: true
  };
  let [maybeCodeBlockEntry] = slate.Editor.nodes(editor, {
    match: node => node.type !== 'code' && slate.Editor.isBlock(editor, node)
  });
  const editorMarks = slate.Editor.marks(editor) || {};
  const marks = Object.fromEntries(allMarks.map(mark => [mark, {
    isDisabled: locationDocumentFeatures.inlineMarks !== 'inherit' && !locationDocumentFeatures.inlineMarks[mark] || !maybeCodeBlockEntry,
    isSelected: !!editorMarks[mark]
  }])); // Editor.marks is "what are the marks that would be applied if text was inserted now"
  // that's not really the UX we want, if we have some a document like this
  // <paragraph>
  //   <text>
  //     <anchor />
  //     content
  //   </text>
  //   <text bold>bold</text>
  //   <text>
  //     content
  //     <focus />
  //   </text>
  // </paragraph>
  // we want bold to be shown as selected even though if you inserted text from that selection, it wouldn't be bold
  // so we look at all the text nodes in the selection to get their marks
  // but only if the selection is expanded because if you're in the middle of some text
  // with your selection collapsed with a mark but you've removed it(i.e. editor.removeMark)
  // the text nodes you're in will have the mark but the ui should show the mark as not being selected

  if (editor.selection && slate.Range.isExpanded(editor.selection)) {
    for (const node of slate.Editor.nodes(editor, {
      match: slate.Text.isText
    })) {
      for (const key of Object.keys(node[0])) {
        if (key === 'insertMenu' || key === 'text') {
          continue;
        }

        if (key in marks) {
          marks[key].isSelected = true;
        }
      }
    }
  }

  let [headingEntry] = slate.Editor.nodes(editor, {
    match: nodeTypeMatcher('heading')
  });
  let [listEntry] = slate.Editor.nodes(editor, {
    match: isListNode
  });
  let [alignableEntry] = slate.Editor.nodes(editor, {
    match: nodeTypeMatcher('paragraph', 'heading')
  }); // (we're gonna use markdown here because the equivelant slate structure is quite large and doesn't add value here)
  // let's imagine a document that looks like this:
  // - thing
  //   1. something<cursor />
  // in the toolbar, you don't want to see that both ordered and unordered lists are selected
  // you want to see only ordered list selected, because
  // - you want to know what list you're actually in, you don't really care about the outer list
  // - when you want to change the list to a unordered list, the unordered list button should be inactive to show you can change to it

  const listTypeAbove = getListTypeAbove(editor);
  return {
    marks,
    textStyles: {
      selected: headingEntry ? headingEntry[0].level : 'normal',
      allowedHeadingLevels: locationDocumentFeatures.kind === 'block' && !listEntry ? locationDocumentFeatures.documentFeatures.formatting.headingLevels : []
    },
    relationships: {
      isDisabled: !locationDocumentFeatures.documentFeatures.relationships
    },
    code: {
      isSelected: isElementActive(editor, 'code'),
      isDisabled: !(locationDocumentFeatures.kind === 'block' && locationDocumentFeatures.documentFeatures.formatting.blockTypes.code)
    },
    lists: {
      ordered: {
        isSelected: isElementActive(editor, 'ordered-list') && (listTypeAbove === 'none' || listTypeAbove === 'ordered-list'),
        isDisabled: !(locationDocumentFeatures.kind === 'block' && locationDocumentFeatures.documentFeatures.formatting.listTypes.ordered && !headingEntry)
      },
      unordered: {
        isSelected: isElementActive(editor, 'unordered-list') && (listTypeAbove === 'none' || listTypeAbove === 'unordered-list'),
        isDisabled: !(locationDocumentFeatures.kind === 'block' && locationDocumentFeatures.documentFeatures.formatting.listTypes.unordered && !headingEntry)
      }
    },
    alignment: {
      isDisabled: !alignableEntry && !(locationDocumentFeatures.kind === 'block' && locationDocumentFeatures.documentFeatures.formatting.alignment),
      selected: (alignableEntry === null || alignableEntry === void 0 ? void 0 : alignableEntry[0].textAlign) || 'start'
    },
    blockquote: {
      isDisabled: !(locationDocumentFeatures.kind === 'block' && locationDocumentFeatures.documentFeatures.formatting.blockTypes.blockquote),
      isSelected: isElementActive(editor, 'blockquote')
    },
    layouts: {
      isSelected: isElementActive(editor, 'layout')
    },
    links: {
      isDisabled: !editor.selection || slate.Range.isCollapsed(editor.selection) || !locationDocumentFeatures.documentFeatures.links,
      isSelected: isElementActive(editor, 'link')
    },
    editor,
    dividers: {
      isDisabled: locationDocumentFeatures.kind === 'inline' || !locationDocumentFeatures.documentFeatures.dividers
    },
    clearFormatting: {
      isDisabled: !(Object.values(marks).some(x => x.isSelected) || !!hasBlockThatClearsOnClearFormatting(editor))
    },
    editorDocumentFeatures
  };
};

function hasBlockThatClearsOnClearFormatting(editor) {
  const [node] = slate.Editor.nodes(editor, {
    match: node => node.type === 'heading' || node.type === 'code' || node.type === 'blockquote'
  });
  return !!node;
}

function getListTypeAbove(editor) {
  const listAbove = slate.Editor.above(editor, {
    match: isListNode
  });

  if (!listAbove) {
    return 'none';
  }

  return listAbove[0].type;
}
const ToolbarStateProvider = _ref => {
  let {
    children,
    componentBlocks,
    editorDocumentFeatures,
    relationships
  } = _ref;
  const editor = slateReact.useSlate();
  return /*#__PURE__*/React__default["default"].createElement(DocumentFieldRelationshipsProvider, {
    value: relationships
  }, /*#__PURE__*/React__default["default"].createElement(LayoutOptionsProvider, {
    value: editorDocumentFeatures.layouts
  }, /*#__PURE__*/React__default["default"].createElement(ComponentBlockContext.Provider, {
    value: componentBlocks
  }, /*#__PURE__*/React__default["default"].createElement(ToolbarStateContext.Provider, {
    value: createToolbarState(editor, componentBlocks, editorDocumentFeatures)
  }, children))));
};

const isLinkActive = editor => {
  return isElementActive(editor, 'link');
};

const wrapLink = (editor, url) => {
  if (isLinkActive(editor)) {
    slate.Transforms.unwrapNodes(editor, {
      match: n => n.type === 'link'
    });
    return;
  }

  const {
    selection
  } = editor;
  const isCollapsed = selection && slate.Range.isCollapsed(selection);

  if (isCollapsed) {
    slate.Transforms.insertNodes(editor, {
      type: 'link',
      href: url,
      children: [{
        text: url
      }]
    });
  } else {
    slate.Transforms.wrapNodes(editor, {
      type: 'link',
      href: url,
      children: [{
        text: ''
      }]
    }, {
      split: true
    });
  }
};
const LinkElement = _ref => {
  let {
    attributes,
    children,
    element: __elementForGettingPath
  } = _ref;
  const {
    typography
  } = core.useTheme();
  const editor = slateReact.useSlateStatic();
  const [currentElement, setNode] = useElementWithSetNodes(editor, __elementForGettingPath);
  const href = currentElement.href;
  const selected = slateReact.useSelected();
  const focused = slateReact.useFocused();
  const [focusedInInlineDialog, setFocusedInInlineDialog] = React.useState(false); // we want to show the link dialog when the editor is focused and the link element is selected
  // or when the input inside the dialog is focused so you would think that would look like this:
  // (selected && focused) || focusedInInlineDialog
  // this doesn't work though because the blur will happen before the focus is inside the inline dialog
  // so this component would be rendered and focused would be false so the input would be removed so it couldn't be focused
  // to fix this, we delay our reading of the updated `focused` value so that we'll still render the dialog
  // immediately after the editor is blurred but before the input has been focused

  const [delayedFocused, setDelayedFocused] = React.useState(false);
  React.useEffect(() => {
    const id = setTimeout(() => {
      setDelayedFocused(focused);
    }, 0);
    return () => {
      clearTimeout(id);
    };
  }, [focused]);
  const [localForceValidation, setLocalForceValidation] = React.useState(false);
  const {
    dialog,
    trigger
  } = popover.useControlledPopover({
    isOpen: selected && focused || focusedInInlineDialog,
    onClose: () => {}
  }, {
    placement: 'bottom-start',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  });
  const unlink = useEventCallback(() => {
    slate.Transforms.unwrapNodes(editor, {
      at: slateReact.ReactEditor.findPath(editor, __elementForGettingPath)
    });
  });
  const forceValidation = useForceValidation();
  const showInvalidState = api.isValidURL(href) ? false : forceValidation || localForceValidation;
  return core.jsx("span", _extends({}, attributes, {
    css: {
      position: 'relative',
      display: 'inline-block'
    }
  }), core.jsx("a", _extends({}, trigger.props, {
    css: {
      color: showInvalidState ? 'red' : undefined
    },
    ref: trigger.ref,
    href: href
  }), children), (selected && delayedFocused || focusedInInlineDialog) && core.jsx(core.Portal, null, core.jsx(toolbar.InlineDialog, _extends({}, dialog.props, {
    ref: dialog.ref,
    onFocus: () => {
      setFocusedInInlineDialog(true);
    },
    onBlur: () => {
      setFocusedInInlineDialog(false);
      setLocalForceValidation(true);
    }
  }), core.jsx("div", {
    css: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, core.jsx(toolbar.ToolbarGroup, null, core.jsx("input", {
    css: {
      fontSize: typography.fontSize.small,
      width: 240
    },
    value: href,
    onChange: event => {
      setNode({
        href: event.target.value
      });
    }
  }), core.jsx(tooltip.Tooltip, {
    content: "Open link in new tab",
    weight: "subtle"
  }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
    as: "a",
    onMouseDown: event => {
      event.preventDefault();
    },
    href: href,
    target: "_blank",
    rel: "noreferrer",
    variant: "action"
  }, attrs), externalLinkIcon)), separator, core.jsx(UnlinkButton, {
    onUnlink: unlink
  })), showInvalidState && core.jsx("span", {
    css: {
      color: 'red'
    }
  }, "Please enter a valid URL")))));
};
const separator = core.jsx(toolbar.ToolbarSeparator, null);
const externalLinkIcon = core.jsx(ExternalLinkIcon.ExternalLinkIcon, {
  size: "small"
});
const UnlinkButton = /*#__PURE__*/React.memo(function UnlinkButton(_ref2) {
  let {
    onUnlink
  } = _ref2;
  return core.jsx(tooltip.Tooltip, {
    content: "Unlink",
    weight: "subtle"
  }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
    variant: "destructive",
    onMouseDown: event => {
      event.preventDefault();
      onUnlink();
    }
  }, attrs), core.jsx(Trash2Icon.Trash2Icon, {
    size: "small"
  })));
});
let linkIcon = core.jsx(LinkIcon.LinkIcon, {
  size: "small"
});
const LinkButton = /*#__PURE__*/React.forwardRef(function LinkButton(props, ref) {
  const {
    editor,
    links: {
      isDisabled,
      isSelected
    }
  } = useToolbarState();
  return React.useMemo(() => core.jsx(toolbar.ToolbarButton, _extends({
    ref: ref,
    isDisabled: isDisabled,
    isSelected: isSelected,
    onMouseDown: event => {
      event.preventDefault();
      wrapLink(editor, '');
    }
  }, props), linkIcon), [isSelected, isDisabled, editor, props, ref]);
});
const linkButton = core.jsx(tooltip.Tooltip, {
  content: "Link",
  weight: "subtle"
}, attrs => core.jsx(LinkButton, attrs));
const markdownLinkPattern = /(^|\s)\[(.+?)\]\((\S+)\)$/;
function withLink(editorDocumentFeatures, componentBlocks, editor) {
  const {
    insertText,
    isInline,
    normalizeNode
  } = editor;

  editor.isInline = element => {
    return element.type === 'link' ? true : isInline(element);
  };

  if (editorDocumentFeatures.links) {
    editor.insertText = text => {
      insertText(text);
      if (text !== ')' || !editor.selection) return;
      const startOfBlock = slate.Editor.start(editor, slate.Editor.above(editor, {
        match: node => slate.Editor.isBlock(editor, node)
      })[1]);
      const startOfBlockToEndOfShortcutString = slate.Editor.string(editor, {
        anchor: editor.selection.anchor,
        focus: startOfBlock
      });
      const match = markdownLinkPattern.exec(startOfBlockToEndOfShortcutString);
      if (!match) return;
      const ancestorComponentChildFieldDocumentFeatures = getAncestorComponentChildFieldDocumentFeatures(editor, editorDocumentFeatures, componentBlocks);

      if ((ancestorComponentChildFieldDocumentFeatures === null || ancestorComponentChildFieldDocumentFeatures === void 0 ? void 0 : ancestorComponentChildFieldDocumentFeatures.documentFeatures.links) === false) {
        return;
      }

      const [, maybeWhitespace, linkText, href] = match; // by doing this, the insertText(')') above will happen in a different undo than the link replacement
      // so that means that when someone does an undo after this
      // it will undo to the state of "[content](link)" rather than "[content](link" (note the missing closing bracket)

      editor.history.undos.push([]);
      const startOfShortcut = match.index === 0 ? startOfBlock : EditorAfterButIgnoringingPointsWithNoContent(editor, startOfBlock, {
        distance: match.index
      });
      const startOfLinkText = EditorAfterButIgnoringingPointsWithNoContent(editor, startOfShortcut, {
        distance: maybeWhitespace === '' ? 1 : 2
      });
      const endOfLinkText = EditorAfterButIgnoringingPointsWithNoContent(editor, startOfLinkText, {
        distance: linkText.length
      });
      slate.Transforms.delete(editor, {
        at: {
          anchor: endOfLinkText,
          focus: editor.selection.anchor
        }
      });
      slate.Transforms.delete(editor, {
        at: {
          anchor: startOfShortcut,
          focus: startOfLinkText
        }
      });
      slate.Transforms.wrapNodes(editor, {
        type: 'link',
        href,
        children: []
      }, {
        at: {
          anchor: editor.selection.anchor,
          focus: startOfShortcut
        },
        split: true
      });
      const nextNode = slate.Editor.next(editor);

      if (nextNode) {
        slate.Transforms.select(editor, nextNode[1]);
      }
    };
  }

  editor.normalizeNode = _ref3 => {
    let [node, path] = _ref3;

    if (node.type === 'link' && slate.Node.string(node) === '') {
      slate.Transforms.unwrapNodes(editor, {
        at: path
      });
      return;
    }

    normalizeNode([node, path]);
  };

  return editor;
}

const insertBlockquote = editor => {
  const isActive = isElementActive(editor, 'blockquote');

  if (isActive) {
    slate.Transforms.unwrapNodes(editor, {
      match: node => node.type === 'blockquote'
    });
  } else {
    slate.Transforms.wrapNodes(editor, {
      type: 'blockquote',
      children: []
    });
  }
};

function getDirectBlockquoteParentFromSelection(editor) {
  if (!editor.selection) return {
    isInside: false
  };
  const [, parentPath] = slate.Editor.parent(editor, editor.selection);
  const [maybeBlockquoteParent, maybeBlockquoteParentPath] = slate.Editor.parent(editor, parentPath);
  const isBlockquote = maybeBlockquoteParent.type === 'blockquote';
  return isBlockquote ? {
    isInside: true,
    path: maybeBlockquoteParentPath
  } : {
    isInside: false
  };
}

function withBlockquote(editor) {
  const {
    insertBreak,
    deleteBackward
  } = editor;

  editor.deleteBackward = unit => {
    if (editor.selection) {
      const parentBlockquote = getDirectBlockquoteParentFromSelection(editor);

      if (parentBlockquote.isInside && slate.Range.isCollapsed(editor.selection) && // the selection is at the start of the paragraph
      editor.selection.anchor.offset === 0 && // it's the first paragraph in the panel
      editor.selection.anchor.path[editor.selection.anchor.path.length - 2] === 0) {
        slate.Transforms.unwrapNodes(editor, {
          match: node => node.type === 'blockquote',
          split: true
        });
        return;
      }
    }

    deleteBackward(unit);
  };

  editor.insertBreak = () => {
    const panel = getDirectBlockquoteParentFromSelection(editor);

    if (editor.selection && panel.isInside) {
      const [node, nodePath] = slate.Editor.node(editor, editor.selection);

      if (slate.Path.isDescendant(nodePath, panel.path) && slate.Node.string(node) === '') {
        slate.Transforms.unwrapNodes(editor, {
          match: node => node.type === 'blockquote',
          split: true
        });
        return;
      }
    }

    insertBreak();
  };

  return editor;
}
const BlockquoteElement = _ref => {
  let {
    attributes,
    children
  } = _ref;
  const {
    colors,
    spacing
  } = core.useTheme();
  return core.jsx("blockquote", _extends({
    css: {
      borderLeft: '3px solid #CBD5E0',
      color: colors.foregroundDim,
      margin: 0,
      padding: `0 ${spacing.xlarge}px`
    }
  }, attributes), children);
};

const BlockquoteButton = _ref2 => {
  let {
    attrs
  } = _ref2;
  const {
    editor,
    blockquote: {
      isDisabled,
      isSelected
    }
  } = useToolbarState();
  return React.useMemo(() => core.jsx(toolbar.ToolbarButton, _extends({
    isSelected: isSelected,
    isDisabled: isDisabled,
    onMouseDown: event => {
      event.preventDefault();
      insertBlockquote(editor);
    }
  }, attrs), core.jsx(QuoteIcon, null)), [editor, attrs, isDisabled, isSelected]);
};

const blockquoteButton = core.jsx(tooltip.Tooltip, {
  content: core.jsx(React.Fragment, null, "Quote", core.jsx(toolbar.KeyboardInTooltip, null, '> ')),
  weight: "subtle"
}, attrs => core.jsx(BlockquoteButton, {
  attrs: attrs
}));

const QuoteIcon = () => core.jsx(IconBase, null, core.jsx("path", {
  d: "M11.3031 2C9.83843 2 8.64879 3.22321 8.64879 4.73171C8.64879 6.23928 9.83843 7.46342 11.3031 7.46342C13.8195 7.46342 12.3613 12.2071 9.18767 12.7012C9.03793 12.7239 8.90127 12.7995 8.80243 12.9143C8.70358 13.029 8.64908 13.1754 8.64879 13.3268C8.64879 13.7147 8.99561 14.0214 9.37973 13.9627C15.148 13.0881 17.1991 2.00093 11.3031 2.00093V2ZM3.65526 2C2.18871 2 1 3.22228 1 4.73171C1 6.23835 2.18871 7.46155 3.65526 7.46155C6.17067 7.46155 4.71252 12.2071 1.53888 12.7012C1.3893 12.7239 1.25277 12.7993 1.15394 12.9139C1.05511 13.0285 1.00051 13.1746 1 13.3259C1 13.7137 1.34682 14.0205 1.73001 13.9617C7.50016 13.0872 9.55128 2 3.65526 2Z"
}));

function withCodeBlock(editor) {
  const {
    insertBreak,
    normalizeNode
  } = editor;

  editor.insertBreak = () => {
    const [node, path] = slate.Editor.above(editor, {
      match: n => slate.Editor.isBlock(editor, n)
    }) || [editor, []];

    if (node.type === 'code' && slate.Text.isText(node.children[0])) {
      const text = node.children[0].text;

      if (text[text.length - 1] === '\n' && editor.selection && slate.Range.isCollapsed(editor.selection) && slate.Point.equals(slate.Editor.end(editor, path), editor.selection.anchor)) {
        insertBreak();
        slate.Transforms.setNodes(editor, {
          type: 'paragraph',
          children: []
        });
        slate.Transforms.delete(editor, {
          distance: 1,
          at: {
            path: [...path, 0],
            offset: text.length - 1
          }
        });
        return;
      }

      editor.insertText('\n');
      return;
    }

    insertBreak();
  };

  editor.normalizeNode = _ref => {
    let [node, path] = _ref;

    if (node.type === 'code' && slate.Element.isElement(node)) {
      for (const [index, childNode] of node.children.entries()) {
        if (!slate.Text.isText(childNode)) {
          if (editor.isVoid(childNode)) {
            slate.Transforms.removeNodes(editor, {
              at: [...path, index]
            });
          } else {
            slate.Transforms.unwrapNodes(editor, {
              at: [...path, index]
            });
          }

          return;
        }

        const marks = Object.keys(childNode).filter(x => x !== 'text');

        if (marks.length) {
          slate.Transforms.unsetNodes(editor, marks, {
            at: [...path, index]
          });
          return;
        }
      }
    }

    normalizeNode([node, path]);
  };

  return editor;
}

function CodeButton(_ref2) {
  let {
    attrs
  } = _ref2;
  const {
    editor,
    code: {
      isDisabled,
      isSelected
    }
  } = useToolbarState();
  return React.useMemo(() => core.jsx(toolbar.ToolbarButton, _extends({
    isSelected: isSelected,
    isDisabled: isDisabled,
    onMouseDown: event => {
      event.preventDefault();

      if (isSelected) {
        slate.Transforms.unwrapNodes(editor, {
          match: node => node.type === 'code'
        });
      } else {
        slate.Transforms.wrapNodes(editor, {
          type: 'code',
          children: [{
            text: ''
          }]
        });
      }
    }
  }, attrs), core.jsx(CodeIcon.CodeIcon, {
    size: "small"
  })), [isDisabled, isSelected, attrs, editor]);
}

const codeButton = core.jsx(tooltip.Tooltip, {
  weight: "subtle",
  content: core.jsx(React.Fragment, null, "Code block ", core.jsx(toolbar.KeyboardInTooltip, null, "```"))
}, attrs => core.jsx(CodeButton, {
  attrs: attrs
}));

const TextAlignMenu = _ref => {
  let {
    alignment
  } = _ref;
  const [showMenu, setShowMenu] = React.useState(false);
  const {
    dialog,
    trigger
  } = popover.useControlledPopover({
    isOpen: showMenu,
    onClose: () => setShowMenu(false)
  }, {
    placement: 'bottom-start',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  });
  return core.jsx("div", {
    css: {
      display: 'inline-block',
      position: 'relative'
    }
  }, core.jsx(tooltip.Tooltip, {
    content: "Text alignment",
    weight: "subtle"
  }, attrs => core.jsx(TextAlignButton, {
    attrs: attrs,
    onToggle: () => {
      setShowMenu(x => !x);
    },
    trigger: trigger,
    showMenu: showMenu
  })), showMenu ? core.jsx(toolbar.InlineDialog, _extends({
    ref: dialog.ref
  }, dialog.props), core.jsx(TextAlignDialog, {
    alignment: alignment,
    onClose: () => {
      setShowMenu(false);
    }
  })) : null);
};

function TextAlignDialog(_ref2) {
  let {
    alignment,
    onClose
  } = _ref2;
  const {
    alignment: {
      selected
    },
    editor
  } = useToolbarState();
  const alignments = ['start', ...Object.keys(alignment).filter(key => alignment[key])];
  return core.jsx(toolbar.ToolbarGroup, null, alignments.map(alignment => core.jsx(tooltip.Tooltip, {
    key: alignment,
    content: `Align ${alignment}`,
    weight: "subtle"
  }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
    isSelected: selected === alignment,
    onMouseDown: event => {
      event.preventDefault();

      if (alignment === 'start') {
        slate.Transforms.unsetNodes(editor, 'textAlign', {
          match: node => node.type === 'paragraph' || node.type === 'heading'
        });
      } else {
        slate.Transforms.setNodes(editor, {
          textAlign: alignment
        }, {
          match: node => node.type === 'paragraph' || node.type === 'heading'
        });
      }

      onClose();
    }
  }, attrs), alignmentIcons[alignment]))));
}

const alignmentIcons = {
  start: core.jsx(AlignLeftIcon.AlignLeftIcon, {
    size: "small"
  }),
  center: core.jsx(AlignCenterIcon.AlignCenterIcon, {
    size: "small"
  }),
  end: core.jsx(AlignRightIcon.AlignRightIcon, {
    size: "small"
  })
};

function TextAlignButton(props) {
  const {
    alignment: {
      isDisabled,
      selected
    }
  } = useToolbarState();
  return React.useMemo(() => core.jsx(toolbar.ToolbarButton, _extends({
    isDisabled: isDisabled,
    isPressed: props.showMenu,
    onMouseDown: event => {
      event.preventDefault();
      props.onToggle();
    }
  }, props.attrs, props.trigger.props, {
    ref: applyRef.applyRefs(props.attrs.ref, props.trigger.ref)
  }), alignmentIcons[selected], downIcon$1), [isDisabled, selected, props]);
}

const downIcon$1 = core.jsx(ChevronDownIcon.ChevronDownIcon, {
  size: "small"
});

const minusIcon = /*#__PURE__*/React__default["default"].createElement(MinusIcon.MinusIcon, {
  size: "small"
});
function insertDivider(editor) {
  insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
    type: 'divider',
    children: [{
      text: ''
    }]
  });
  slate.Editor.insertNode(editor, {
    type: 'paragraph',
    children: [{
      text: ''
    }]
  });
}

const DividerButton = _ref => {
  let {
    attrs
  } = _ref;
  const {
    editor,
    dividers: {
      isDisabled
    }
  } = useToolbarState();
  return React.useMemo(() => /*#__PURE__*/React__default["default"].createElement(toolbar.ToolbarButton, _extends({
    isDisabled: isDisabled,
    onMouseDown: event => {
      event.preventDefault();
      insertDivider(editor);
    }
  }, attrs), minusIcon), [editor, isDisabled, attrs]);
};

const dividerButton = /*#__PURE__*/React__default["default"].createElement(tooltip.Tooltip, {
  content: /*#__PURE__*/React__default["default"].createElement(React.Fragment, null, "Divider", /*#__PURE__*/React__default["default"].createElement(toolbar.KeyboardInTooltip, null, "---")),
  weight: "subtle"
}, attrs => /*#__PURE__*/React__default["default"].createElement(DividerButton, {
  attrs: attrs
}));
function withDivider(editor) {
  const {
    isVoid
  } = editor;

  editor.isVoid = node => {
    return node.type === 'divider' || isVoid(node);
  };

  return editor;
}

const _excluded = ["type"],
      _excluded2 = ["ref"];
function Toolbar(_ref) {
  let {
    documentFeatures,
    viewState
  } = _ref;
  const relationship = React.useContext(DocumentFieldRelationshipsContext);
  const blockComponent = React.useContext(ComponentBlockContext);
  const hasBlockItems = Object.entries(relationship).length || Object.keys(blockComponent).length;
  return core.jsx(ToolbarContainer, null, !!documentFeatures.formatting.headingLevels.length && core.jsx(React.Fragment, null, core.jsx(HeadingMenu, {
    headingLevels: documentFeatures.formatting.headingLevels
  }), core.jsx(toolbar.ToolbarSeparator, null)), Object.values(documentFeatures.formatting.inlineMarks).some(x => x) && core.jsx(React.Fragment, null, core.jsx(InlineMarks, {
    marks: documentFeatures.formatting.inlineMarks
  }), core.jsx(toolbar.ToolbarSeparator, null)), (documentFeatures.formatting.alignment.center || documentFeatures.formatting.alignment.end) && core.jsx(TextAlignMenu, {
    alignment: documentFeatures.formatting.alignment
  }), documentFeatures.formatting.listTypes.unordered && core.jsx(tooltip.Tooltip, {
    content: core.jsx(React.Fragment, null, "Bullet List ", core.jsx(toolbar.KeyboardInTooltip, null, "- ")),
    weight: "subtle"
  }, attrs => core.jsx(ListButton, _extends({
    type: "unordered-list"
  }, attrs), core.jsx(BulletListIcon, null))), documentFeatures.formatting.listTypes.ordered && core.jsx(tooltip.Tooltip, {
    content: core.jsx(React.Fragment, null, "Numbered List ", core.jsx(toolbar.KeyboardInTooltip, null, "1. ")),
    weight: "subtle"
  }, attrs => core.jsx(ListButton, _extends({
    type: "ordered-list"
  }, attrs), core.jsx(NumberedListIcon, null))), (documentFeatures.formatting.alignment.center || documentFeatures.formatting.alignment.end || documentFeatures.formatting.listTypes.unordered || documentFeatures.formatting.listTypes.ordered) && core.jsx(toolbar.ToolbarSeparator, null), documentFeatures.dividers && dividerButton, documentFeatures.links && linkButton, documentFeatures.formatting.blockTypes.blockquote && blockquoteButton, !!documentFeatures.layouts.length && core.jsx(LayoutsButton, {
    layouts: documentFeatures.layouts
  }), documentFeatures.formatting.blockTypes.code && codeButton, !!hasBlockItems && core.jsx(InsertBlockMenu, null), core.jsx(toolbar.ToolbarSeparator, null), React.useMemo(() => {
    const ExpandIcon = viewState !== null && viewState !== void 0 && viewState.expanded ? Minimize2Icon.Minimize2Icon : Maximize2Icon.Maximize2Icon;
    return viewState && core.jsx(tooltip.Tooltip, {
      content: viewState.expanded ? 'Collapse' : 'Expand',
      weight: "subtle"
    }, attrs => core.jsx(toolbar.ToolbarButton, _extends({
      onMouseDown: event => {
        event.preventDefault();
        viewState.toggle();
      }
    }, attrs), core.jsx(ExpandIcon, {
      size: "small"
    })));
  }, [viewState]));
}
/* UI Components */

const MarkButton = /*#__PURE__*/React.forwardRef(function MarkButton(props, ref) {
  const {
    editor,
    marks: {
      [props.type]: {
        isDisabled,
        isSelected
      }
    }
  } = useToolbarState();
  return React.useMemo(() => {
    const restProps = _objectWithoutProperties(props, _excluded);

    return core.jsx(toolbar.ToolbarButton, _extends({
      ref: ref,
      isDisabled: isDisabled,
      isSelected: isSelected,
      onMouseDown: event => {
        event.preventDefault();

        if (isSelected) {
          slate.Editor.removeMark(editor, props.type);
        } else {
          slate.Editor.addMark(editor, props.type, true);
        }
      }
    }, restProps));
  }, [editor, isDisabled, isSelected, props, ref]);
});

const ToolbarContainer = _ref2 => {
  let {
    children
  } = _ref2;
  const {
    colors,
    spacing
  } = core.useTheme();
  return core.jsx("div", {
    css: {
      backgroundColor: colors.background,
      boxShadow: `0 1px ${colors.border}, 0 -1px ${colors.border}`,
      paddingBottom: spacing.small,
      paddingTop: spacing.small,
      position: 'sticky',
      top: 0,
      zIndex: 2
    }
  }, core.jsx(toolbar.ToolbarGroup, null, children));
};

const downIcon = core.jsx(ChevronDownIcon.ChevronDownIcon, {
  size: "small"
});

function HeadingButton(_ref3) {
  let {
    trigger,
    onToggleShowMenu,
    showMenu
  } = _ref3;
  const {
    textStyles
  } = useToolbarState();
  let buttonLabel = textStyles.selected === 'normal' ? 'Normal text' : 'Heading ' + textStyles.selected;
  const isDisabled = textStyles.allowedHeadingLevels.length === 0;
  return React.useMemo(() => core.jsx(toolbar.ToolbarButton, _extends({
    ref: trigger.ref,
    isPressed: showMenu,
    isDisabled: isDisabled,
    onMouseDown: event => {
      event.preventDefault();
      onToggleShowMenu();
    },
    style: {
      textAlign: 'left',
      width: 116
    }
  }, trigger.props), core.jsx("span", {
    css: {
      flex: 1
    }
  }, buttonLabel), downIcon), [buttonLabel, trigger, showMenu, onToggleShowMenu, isDisabled]);
}

const HeadingMenu = _ref4 => {
  let {
    headingLevels
  } = _ref4;
  const [showMenu, setShowMenu] = React.useState(false);
  const {
    dialog,
    trigger
  } = popover.useControlledPopover({
    isOpen: showMenu,
    onClose: () => setShowMenu(false)
  }, {
    placement: 'bottom-start',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  });
  return core.jsx("div", {
    css: {
      display: 'inline-block',
      position: 'relative'
    }
  }, core.jsx(HeadingButton, {
    showMenu: showMenu,
    trigger: trigger,
    onToggleShowMenu: () => {
      setShowMenu(x => !x);
    }
  }), showMenu ? core.jsx(toolbar.InlineDialog, _extends({
    ref: dialog.ref
  }, dialog.props), core.jsx(HeadingDialog, {
    headingLevels: headingLevels,
    onCloseMenu: () => {
      setShowMenu(false);
    }
  })) : null);
};

function HeadingDialog(_ref5) {
  let {
    headingLevels,
    onCloseMenu
  } = _ref5;
  const {
    editor,
    textStyles
  } = useToolbarState();
  return core.jsx(toolbar.ToolbarGroup, {
    direction: "column"
  }, headingLevels.map(hNum => {
    let Tag = `h${hNum}`;
    const isSelected = textStyles.selected === hNum;
    return core.jsx(toolbar.ToolbarButton, {
      key: hNum,
      isSelected: isSelected,
      onMouseDown: event => {
        event.preventDefault();

        if (isSelected) {
          slate.Transforms.unwrapNodes(editor, {
            match: n => n.type === 'heading'
          });
        } else {
          slate.Transforms.setNodes(editor, {
            type: 'heading',
            level: hNum
          }, {
            match: node => node.type === 'paragraph' || node.type === 'heading'
          });
        }

        onCloseMenu();
      }
    }, core.jsx(Tag, null, "Heading ", hNum));
  }));
}

function InsertBlockMenu() {
  const [showMenu, setShowMenu] = React.useState(false);
  const {
    dialog,
    trigger
  } = popover.useControlledPopover({
    isOpen: showMenu,
    onClose: () => setShowMenu(false)
  }, {
    placement: 'bottom-start',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  });
  return core.jsx("div", {
    css: {
      display: 'inline-block',
      position: 'relative'
    }
  }, core.jsx(tooltip.Tooltip, {
    content: core.jsx(React.Fragment, null, "Insert ", core.jsx(toolbar.KeyboardInTooltip, null, "/")),
    weight: "subtle"
  }, _ref6 => {
    let {
      ref
    } = _ref6,
        attrs = _objectWithoutProperties(_ref6, _excluded2);

    return core.jsx(toolbar.ToolbarButton, _extends({
      ref: applyRef.applyRefs(ref, trigger.ref),
      isPressed: showMenu,
      onMouseDown: event => {
        event.preventDefault();
        setShowMenu(v => !v);
      }
    }, trigger.props, attrs), core.jsx(PlusIcon.PlusIcon, {
      size: "small",
      style: {
        strokeWidth: 3
      }
    }), core.jsx(ChevronDownIcon.ChevronDownIcon, {
      size: "small"
    }));
  }), showMenu ? core.jsx(toolbar.InlineDialog, _extends({
    ref: dialog.ref
  }, dialog.props), core.jsx(toolbar.ToolbarGroup, {
    direction: "column"
  }, core.jsx(RelationshipButton, {
    onClose: () => setShowMenu(false)
  }), core.jsx(BlockComponentsButtons, {
    onClose: () => setShowMenu(false)
  }))) : null);
}

function InlineMarks(_ref7) {
  let {
    marks
  } = _ref7;
  const [showMenu, setShowMenu] = React.useState(false);
  const {
    dialog,
    trigger
  } = popover.useControlledPopover({
    isOpen: showMenu,
    onClose: () => setShowMenu(false)
  }, {
    placement: 'bottom-start',
    modifiers: [{
      name: 'offset',
      options: {
        offset: [0, 8]
      }
    }]
  });
  return core.jsx(React.Fragment, null, marks.bold && core.jsx(tooltip.Tooltip, {
    content: core.jsx(React.Fragment, null, "Bold", core.jsx(toolbar.KeyboardInTooltip, null, modifierKeyText, "B")),
    weight: "subtle"
  }, attrs => core.jsx(MarkButton, _extends({
    type: "bold"
  }, attrs), core.jsx(BoldIcon.BoldIcon, {
    size: "small",
    style: {
      strokeWidth: 3
    }
  }))), marks.italic && core.jsx(tooltip.Tooltip, {
    content: core.jsx(React.Fragment, null, "Italic", core.jsx(toolbar.KeyboardInTooltip, null, modifierKeyText, "I")),
    weight: "subtle"
  }, attrs => core.jsx(MarkButton, _extends({
    type: "italic"
  }, attrs), core.jsx(ItalicIcon.ItalicIcon, {
    size: "small"
  }))), core.jsx(tooltip.Tooltip, {
    content: "More formatting",
    weight: "subtle"
  }, attrs => core.jsx(MoreFormattingButton, {
    isOpen: showMenu,
    onToggle: () => {
      setShowMenu(v => !v);
    },
    trigger: trigger,
    attrs: attrs
  })), showMenu && core.jsx(MoreFormattingDialog, {
    onCloseMenu: () => {
      setShowMenu(false);
    },
    dialog: dialog,
    marks: marks
  }));
}

function MoreFormattingDialog(_ref8) {
  let {
    dialog,
    marks,
    onCloseMenu
  } = _ref8;
  // not doing optimisations in here because this will only render when it's open
  // which will be rare and you won't be typing while it's open
  const {
    editor,
    clearFormatting: {
      isDisabled
    }
  } = useToolbarState();
  return core.jsx(toolbar.InlineDialog, _extends({
    onMouseDown: event => {
      if (event.target.nodeName === 'BUTTON') {
        onCloseMenu();
      }
    },
    ref: dialog.ref
  }, dialog.props), core.jsx(toolbar.ToolbarGroup, {
    direction: "column"
  }, marks.underline && core.jsx(MarkButton, {
    type: "underline"
  }, core.jsx(ContentInButtonWithShortcut, {
    content: "Underline",
    shortcut: `${modifierKeyText}U`
  })), marks.strikethrough && core.jsx(MarkButton, {
    type: "strikethrough"
  }, "Strikethrough"), marks.code && core.jsx(MarkButton, {
    type: "code"
  }, "Code"), marks.keyboard && core.jsx(MarkButton, {
    type: "keyboard"
  }, "Keyboard"), marks.subscript && core.jsx(MarkButton, {
    type: "subscript"
  }, "Subscript"), marks.superscript && core.jsx(MarkButton, {
    type: "superscript"
  }, "Superscript"), core.jsx(toolbar.ToolbarButton, {
    isDisabled: isDisabled,
    onMouseDown: event => {
      event.preventDefault();
      clearFormatting(editor);
    }
  }, core.jsx(ContentInButtonWithShortcut, {
    content: "Clear Formatting",
    shortcut: `${modifierKeyText}\\`
  }))));
}

function ContentInButtonWithShortcut(_ref9) {
  let {
    content,
    shortcut
  } = _ref9;
  const theme = core.useTheme();
  return core.jsx("span", {
    css: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%'
    }
  }, core.jsx("span", null, content), core.jsx("kbd", {
    css: {
      fontFamily: 'inherit',
      marginLeft: theme.spacing.small,
      padding: theme.spacing.xxsmall,
      paddingLeft: theme.spacing.xsmall,
      paddingRight: theme.spacing.xsmall,
      backgroundColor: theme.palette.neutral400,
      borderRadius: theme.radii.xsmall,
      color: theme.colors.foregroundDim,
      whiteSpace: 'pre'
    }
  }, shortcut));
}

function MoreFormattingButton(_ref10) {
  let {
    onToggle,
    isOpen,
    trigger,
    attrs
  } = _ref10;
  const {
    marks
  } = useToolbarState();
  const isActive = marks.strikethrough.isSelected || marks.underline.isSelected || marks.code.isSelected || marks.keyboard.isSelected || marks.subscript.isSelected || marks.superscript.isSelected;
  return React.useMemo(() => core.jsx(toolbar.ToolbarButton, _extends({
    isPressed: isOpen,
    isSelected: isActive,
    onMouseDown: event => {
      event.preventDefault();
      onToggle();
    }
  }, trigger.props, attrs, {
    ref: applyRef.applyRefs(attrs.ref, trigger.ref)
  }), core.jsx(MoreHorizontalIcon.MoreHorizontalIcon, {
    size: "small"
  })), [isActive, onToggle, isOpen, trigger, attrs]);
} // Custom (non-feather) Icons
// ------------------------------


const IconBase = props => core.jsx("svg", _extends({
  "aria-hidden": "true",
  fill: "currentColor",
  focusable: "false",
  height: "16",
  role: "presentation",
  viewBox: "0 0 16 16",
  width: "16"
}, props));

const BulletListIcon = () => core.jsx(IconBase, null, core.jsx("path", {
  d: "M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"
}));

const NumberedListIcon = () => core.jsx(IconBase, null, core.jsx("path", {
  d: "M2.003 2.5a.5.5 0 00-.723-.447l-1.003.5a.5.5 0 00.446.895l.28-.14V6H.5a.5.5 0 000 1h2.006a.5.5 0 100-1h-.503V2.5zM5 3.25a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 3.25zm0 5a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5A.75.75 0 015 8.25zm0 5a.75.75 0 01.75-.75h8.5a.75.75 0 010 1.5h-8.5a.75.75 0 01-.75-.75zM.924 10.32l.003-.004a.851.851 0 01.144-.153A.66.66 0 011.5 10c.195 0 .306.068.374.146a.57.57 0 01.128.376c0 .453-.269.682-.8 1.078l-.035.025C.692 11.98 0 12.495 0 13.5a.5.5 0 00.5.5h2.003a.5.5 0 000-1H1.146c.132-.197.351-.372.654-.597l.047-.035c.47-.35 1.156-.858 1.156-1.845 0-.365-.118-.744-.377-1.038-.268-.303-.658-.484-1.126-.484-.48 0-.84.202-1.068.392a1.858 1.858 0 00-.348.384l-.007.011-.002.004-.001.002-.001.001a.5.5 0 00.851.525zM.5 10.055l-.427-.26.427.26z"
}));

const headingStylesMap = {
  h1: {
    fontSize: '2.2rem'
  },
  h2: {
    fontSize: '1.8rem'
  },
  h3: {
    fontSize: '1.5rem'
  },
  h4: {
    fontSize: '1.2rem'
  },
  h5: {
    fontSize: '0.83rem'
  },
  h6: {
    fontSize: '0.67rem'
  }
};
const HeadingElement = _ref => {
  let {
    attributes,
    children,
    element
  } = _ref;
  const Tag = `h${element.level}`;
  const headingStyle = headingStylesMap[Tag];
  return core.jsx(Tag, _extends({}, attributes, {
    css: _objectSpread(_objectSpread({}, headingStyle), {}, {
      textAlign: element.textAlign
    })
  }), children);
};
function withHeading(editor) {
  const {
    insertBreak
  } = editor;

  editor.insertBreak = () => {
    insertBreak();
    const entry = slate.Editor.above(editor, {
      match: n => n.type === 'heading'
    });
    if (!entry || !editor.selection || !slate.Range.isCollapsed(editor.selection)) return;
    const path = entry[1];

    if ( // we want to unwrap the heading when the user inserted a break at the end of the heading
    // when the user inserts a break at the end of a heading, the new heading
    // that we want to unwrap will be empty so the end will be equal to the selection
    slate.Point.equals(slate.Editor.end(editor, path), editor.selection.anchor)) {
      slate.Transforms.unwrapNodes(editor, {
        at: path
      });
      return;
    } // we also want to unwrap the _previous_ heading when the user inserted a break
    // at the start of the heading, essentially just inserting an empty paragraph above the heading


    if (!slate.Path.hasPrevious(path)) return;
    const previousPath = slate.Path.previous(path);
    const previousNode = slate.Node.get(editor, previousPath);

    if (previousNode.type === 'heading' && previousNode.children.length === 1 && slate.Text.isText(previousNode.children[0]) && previousNode.children[0].text === '') {
      slate.Transforms.unwrapNodes(editor, {
        at: previousPath
      });
    }
  };

  return editor;
}

// and TS doesn't understand the type narrowing when doing a spread for some reason
// so that's why things aren't being spread in some cases

const renderElement = props => {
  switch (props.element.type) {
    case 'layout':
      return core.jsx(LayoutContainer, {
        attributes: props.attributes,
        children: props.children,
        element: props.element
      });

    case 'layout-area':
      return core.jsx(LayoutArea, props);

    case 'code':
      return core.jsx(CodeElement, props);

    case 'component-block':
      {
        return core.jsx(ComponentBlocksElement, {
          attributes: props.attributes,
          children: props.children,
          element: props.element
        });
      }

    case 'component-inline-prop':
    case 'component-block-prop':
      return core.jsx(ComponentInlineProp, props);

    case 'heading':
      return core.jsx(HeadingElement, {
        attributes: props.attributes,
        children: props.children,
        element: props.element
      });

    case 'link':
      return core.jsx(LinkElement, {
        attributes: props.attributes,
        children: props.children,
        element: props.element
      });

    case 'ordered-list':
      return core.jsx("ol", props.attributes, props.children);

    case 'unordered-list':
      return core.jsx("ul", props.attributes, props.children);

    case 'list-item':
      return core.jsx("li", props.attributes, props.children);

    case 'list-item-content':
      return core.jsx("span", props.attributes, props.children);

    case 'blockquote':
      return core.jsx(BlockquoteElement, props);

    case 'relationship':
      return core.jsx(RelationshipElement, {
        attributes: props.attributes,
        children: props.children,
        element: props.element
      });

    case 'divider':
      return core.jsx(DividerElement, props);

    default:
      return core.jsx("p", _extends({
        css: {
          textAlign: props.element.textAlign
        }
      }, props.attributes), props.children);
  }
};
/* Block Elements */

const CodeElement = _ref => {
  let {
    attributes,
    children
  } = _ref;
  const {
    colors,
    radii,
    spacing,
    typography
  } = core.useTheme();
  return core.jsx("pre", _extends({
    spellCheck: "false",
    css: {
      backgroundColor: colors.backgroundDim,
      border: `1px solid ${colors.border}`,
      borderRadius: radii.xsmall,
      fontFamily: typography.fontFamily.monospace,
      fontSize: typography.fontSize.small,
      padding: `${spacing.small}px ${spacing.medium}px`
    }
  }, attributes), core.jsx("code", {
    css: {
      fontFamily: 'inherit'
    }
  }, children));
};

const DividerElement = _ref2 => {
  let {
    attributes,
    children
  } = _ref2;
  const {
    colors,
    spacing
  } = core.useTheme();
  const selected = slateReact.useSelected();
  return core.jsx("div", _extends({}, attributes, {
    css: {
      paddingBottom: spacing.medium,
      paddingTop: spacing.medium,
      marginBottom: spacing.medium,
      marginTop: spacing.medium,
      caretColor: 'transparent'
    }
  }), core.jsx("hr", {
    css: {
      backgroundColor: selected ? colors.linkColor : colors.border,
      border: 0,
      height: 2
    }
  }), children);
};

const allMarkdownShortcuts = {
  bold: ['**', '__'],
  italic: ['*', '_'],
  strikethrough: ['~~'],
  code: ['`']
};

function applyMark(editor, mark, shortcutText, startOfStartPoint) {
  // so that this starts a new undo group
  editor.history.undos.push([]);
  const startPointRef = slate.Editor.pointRef(editor, startOfStartPoint);
  slate.Transforms.delete(editor, {
    at: editor.selection.anchor,
    distance: shortcutText.length,
    reverse: true
  });
  slate.Transforms.delete(editor, {
    at: startOfStartPoint,
    distance: shortcutText.length
  });
  slate.Transforms.setNodes(editor, {
    [mark]: true
  }, {
    match: slate.Text.isText,
    split: true,
    at: {
      anchor: startPointRef.unref(),
      focus: editor.selection.anchor
    }
  }); // once you've ended the shortcut, you're done with the mark
  // so we need to remove it so the text you insert after doesn't have it

  editor.removeMark(mark);
}

function withMarks(editorDocumentFeatures, componentBlocks, editor) {
  const {
    insertText,
    insertBreak
  } = editor;

  editor.insertBreak = () => {
    insertBreak();
    const marksAfterInsertBreak = slate.Editor.marks(editor);
    if (!marksAfterInsertBreak || !editor.selection) return;
    const parentBlock = slate.Editor.above(editor, {
      match: node => slate.Editor.isBlock(editor, node)
    });
    if (!parentBlock) return;
    const point = EditorAfterButIgnoringingPointsWithNoContent(editor, editor.selection.anchor);
    const marksAfterInsertBreakArr = Object.keys(marksAfterInsertBreak);

    if (!point || !slate.Path.isDescendant(point.path, parentBlock[1])) {
      for (const mark of marksAfterInsertBreakArr) {
        editor.removeMark(mark);
      }

      return;
    }

    const textNode = slate.Node.get(editor, point.path);

    for (const mark of marksAfterInsertBreakArr) {
      if (!textNode[mark]) {
        editor.removeMark(mark);
      }
    }
  };

  const selectedMarkdownShortcuts = {};
  const enabledMarks = editorDocumentFeatures.formatting.inlineMarks;
  Object.keys(allMarkdownShortcuts).forEach(mark => {
    if (enabledMarks[mark]) {
      selectedMarkdownShortcuts[mark] = allMarkdownShortcuts[mark];
    }
  });
  if (Object.keys(selectedMarkdownShortcuts).length === 0) return editor;

  editor.insertText = text => {
    insertText(text);

    if (editor.selection && slate.Range.isCollapsed(editor.selection)) {
      for (const [mark, shortcuts] of Object.entries(selectedMarkdownShortcuts)) {
        for (const shortcutText of shortcuts) {
          if (text === shortcutText[shortcutText.length - 1]) {
            // this function is not inlined because
            // https://github.com/swc-project/swc/issues/2622
            const startOfBlock = getStartOfBlock(editor);
            let startOfBlockToEndOfShortcutString = slate.Editor.string(editor, {
              anchor: editor.selection.anchor,
              focus: startOfBlock
            });
            const hasWhitespaceBeforeEndOfShortcut = /\s/.test(startOfBlockToEndOfShortcutString.substr(-shortcutText.length - 1, 1));
            const endOfShortcutContainsExpectedContent = shortcutText === startOfBlockToEndOfShortcutString.slice(-shortcutText.length);

            if (hasWhitespaceBeforeEndOfShortcut || !endOfShortcutContainsExpectedContent) {
              continue;
            }

            const strToMatchOn = startOfBlockToEndOfShortcutString.slice(0, -shortcutText.length - 1); // TODO: use regex probs

            for (const [offsetFromStartOfBlock] of [...strToMatchOn].reverse().entries()) {
              const expectedShortcutText = strToMatchOn.substr(offsetFromStartOfBlock, shortcutText.length);

              if (expectedShortcutText !== shortcutText) {
                continue;
              }

              const startOfStartOfShortcut = offsetFromStartOfBlock === 0 ? startOfBlock : EditorAfterButIgnoringingPointsWithNoContent(editor, startOfBlock, {
                distance: offsetFromStartOfBlock
              });
              const endOfStartOfShortcut = slate.Editor.after(editor, startOfStartOfShortcut, {
                distance: shortcutText.length
              });

              if (offsetFromStartOfBlock !== 0 && !/\s/.test(slate.Editor.string(editor, {
                anchor: slate.Editor.before(editor, startOfStartOfShortcut, {
                  unit: 'character'
                }),
                focus: startOfStartOfShortcut
              }))) {
                continue;
              }

              const contentBetweenShortcuts = slate.Editor.string(editor, {
                anchor: endOfStartOfShortcut,
                focus: editor.selection.anchor
              }).slice(0, -shortcutText.length);

              if (contentBetweenShortcuts === '' || /\s/.test(contentBetweenShortcuts[0])) {
                continue;
              } // this is a bit of a weird one
              // let's say you had <text>__thing _<cursor /></text> and you insert `_`.
              // without the below, that would turn into <text italic>_thing _<cursor /></text>
              // but it's probably meant to be bold but it's not because of the space before the ending _
              // there's probably a better way to do this but meh, this works


              if (mark === 'italic' && (contentBetweenShortcuts[0] === '_' || contentBetweenShortcuts[0] === '*')) {
                continue;
              }

              const ancestorComponentChildFieldDocumentFeatures = getAncestorComponentChildFieldDocumentFeatures(editor, editorDocumentFeatures, componentBlocks);

              if (ancestorComponentChildFieldDocumentFeatures && ancestorComponentChildFieldDocumentFeatures.inlineMarks !== 'inherit' && ancestorComponentChildFieldDocumentFeatures.inlineMarks[mark] === false) {
                continue;
              }

              applyMark(editor, mark, shortcutText, startOfStartOfShortcut);
              return;
            }
          }
        }
      }
    }
  };

  return editor;
}

function getStartOfBlock(editor) {
  return slate.Editor.start(editor, slate.Editor.above(editor, {
    match: node => slate.Editor.isBlock(editor, node)
  })[1]);
}

let noop = () => {};

function getOptions(toolbarState, componentBlocks, relationships) {
  const options = [...Object.entries(relationships).filter(x => x[1].kind === 'inline').map(_ref => {
    let [relationship, {
      label
    }] = _ref;
    return {
      label,
      insert: editor => {
        slate.Transforms.insertNodes(editor, {
          type: 'relationship',
          relationship,
          data: null,
          children: [{
            text: ''
          }]
        });
      }
    };
  }), ...Object.keys(componentBlocks).map(key => ({
    label: componentBlocks[key].label,
    insert: editor => {
      insertComponentBlock(editor, componentBlocks, key, relationships);
    }
  })), ...toolbarState.textStyles.allowedHeadingLevels.map(level => ({
    label: `Heading ${level}`,

    insert(editor) {
      insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
        type: 'heading',
        level,
        children: [{
          text: ''
        }]
      });
    }

  })), !toolbarState.blockquote.isDisabled && toolbarState.editorDocumentFeatures.formatting.blockTypes.blockquote && {
    label: 'Blockquote',

    insert(editor) {
      insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
        type: 'blockquote',
        children: [{
          text: ''
        }]
      });
    }

  }, !toolbarState.code.isDisabled && toolbarState.editorDocumentFeatures.formatting.blockTypes.code && {
    label: 'Code block',

    insert(editor) {
      insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
        type: 'code',
        children: [{
          text: ''
        }]
      });
    }

  }, !toolbarState.dividers.isDisabled && toolbarState.editorDocumentFeatures.dividers && {
    label: 'Divider',

    insert(editor) {
      insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
        type: 'divider',
        children: [{
          text: ''
        }]
      });
    }

  }, !!toolbarState.editorDocumentFeatures.layouts.length && {
    label: 'Layout',

    insert(editor) {
      insertLayout(editor, toolbarState.editorDocumentFeatures.layouts[0]);
    }

  }, !toolbarState.lists.ordered.isDisabled && toolbarState.editorDocumentFeatures.formatting.listTypes.ordered && {
    label: 'Numbered List',
    keywords: ['ordered list'],

    insert(editor) {
      insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
        type: 'ordered-list',
        children: [{
          text: ''
        }]
      });
    }

  }, !toolbarState.lists.unordered.isDisabled && toolbarState.editorDocumentFeatures.formatting.listTypes.unordered && {
    label: 'Bullet List',
    keywords: ['unordered list'],

    insert(editor) {
      insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, {
        type: 'unordered-list',
        children: [{
          text: ''
        }]
      });
    }

  }];
  return options.filter(x => typeof x !== 'boolean');
}

function insertOption(editor, text, option) {
  const path = slateReact.ReactEditor.findPath(editor, text);
  slate.Transforms.delete(editor, {
    at: {
      focus: slate.Editor.start(editor, path),
      anchor: slate.Editor.end(editor, path)
    }
  });
  option.insert(editor);
} // TODO: the changing width of the menu when searching isn't great


function InsertMenu(_ref2) {
  let {
    children,
    text
  } = _ref2;
  const toolbarState = useToolbarState();
  const {
    editor,
    relationships: {
      isDisabled: relationshipsDisabled
    }
  } = toolbarState;
  const {
    dialog,
    trigger
  } = popover.useControlledPopover({
    isOpen: true,
    onClose: noop
  }, {
    placement: 'bottom-start'
  });
  const componentBlocks = React.useContext(ComponentBlockContext);
  const relationships = useDocumentFieldRelationships();
  const options = matchSorter.matchSorter(getOptions(toolbarState, componentBlocks, relationshipsDisabled ? {} : relationships), text.text.slice(1), {
    keys: ['label', 'keywords']
  });
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  if (options.length && selectedIndex >= options.length) {
    setSelectedIndex(0);
  }

  const stateRef = React.useRef({
    selectedIndex,
    options,
    text
  });
  React.useEffect(() => {
    stateRef.current = {
      selectedIndex,
      options,
      text
    };
  });
  const dialogRef = React.useRef(null);
  React.useEffect(() => {
    var _dialogRef$current, _dialogRef$current$ch;

    const element = (_dialogRef$current = dialogRef.current) === null || _dialogRef$current === void 0 ? void 0 : (_dialogRef$current$ch = _dialogRef$current.children) === null || _dialogRef$current$ch === void 0 ? void 0 : _dialogRef$current$ch[selectedIndex];

    if (dialogRef.current && element) {
      scrollIntoView__default["default"](element, {
        scrollMode: 'if-needed',
        boundary: dialogRef.current,
        block: 'nearest'
      });
    }
  }, [selectedIndex]);
  React.useEffect(() => {
    const domNode = slateReact.ReactEditor.toDOMNode(editor, editor);

    let listener = event => {
      if (event.defaultPrevented) return;

      switch (event.key) {
        case 'ArrowDown':
          {
            if (stateRef.current.options.length) {
              event.preventDefault();
              setSelectedIndex(stateRef.current.selectedIndex === stateRef.current.options.length - 1 ? 0 : stateRef.current.selectedIndex + 1);
            }

            return;
          }

        case 'ArrowUp':
          {
            if (stateRef.current.options.length) {
              event.preventDefault();
              setSelectedIndex(stateRef.current.selectedIndex === 0 ? stateRef.current.options.length - 1 : stateRef.current.selectedIndex - 1);
            }

            return;
          }

        case 'Enter':
          {
            const option = stateRef.current.options[stateRef.current.selectedIndex];

            if (option) {
              insertOption(editor, stateRef.current.text, option);
              event.preventDefault();
            }

            return;
          }

        case 'Escape':
          {
            const path = slateReact.ReactEditor.findPath(editor, stateRef.current.text);
            slate.Transforms.unsetNodes(editor, 'insertMenu', {
              at: path
            });
            event.preventDefault();
            return;
          }
      }
    };

    domNode.addEventListener('keydown', listener);
    return () => {
      domNode.removeEventListener('keydown', listener);
    };
  }, [editor]);
  const DIALOG_HEIGHT = 300;
  return core.jsx(React.Fragment, null, core.jsx("span", _extends({}, trigger.props, {
    css: {
      color: 'blue'
    },
    ref: trigger.ref
  }), children), core.jsx(core.Portal, null, core.jsx(toolbar.InlineDialog, _extends({
    contentEditable: false
  }, dialog.props, {
    css: {
      display: options.length ? undefined : 'none',
      userSelect: 'none',
      maxHeight: DIALOG_HEIGHT
    },
    ref: dialog.ref
  }), core.jsx("div", {
    ref: dialogRef,
    css: {
      overflowY: 'auto',
      maxHeight: DIALOG_HEIGHT - 8 * 2
    }
  }, options.map((option, index) => core.jsx(toolbar.ToolbarButton, {
    key: option.label,
    isPressed: index === selectedIndex,
    onMouseEnter: () => {
      setSelectedIndex(index);
    },
    onMouseDown: event => {
      event.preventDefault();
      insertOption(editor, text, option);
    }
  }, option.label))))));
}
const nodeListsWithoutInsertMenu = new WeakSet();
const nodesWithoutInsertMenu = new WeakSet();

function findPathWithInsertMenu(node, path) {
  if (slate.Text.isText(node)) {
    return node.insertMenu ? path : undefined;
  }

  if (nodeListsWithoutInsertMenu.has(node.children)) {
    return;
  }

  for (const [index, child] of node.children.entries()) {
    if (nodesWithoutInsertMenu.has(child)) continue;
    let maybePath = findPathWithInsertMenu(child, [...path, index]);

    if (maybePath) {
      return maybePath;
    }

    nodesWithoutInsertMenu.add(child);
  }

  nodeListsWithoutInsertMenu.add(node.children);
}

function removeInsertMenuMarkWhenOutsideOfSelection(editor) {
  var _Editor$marks;

  const path = findPathWithInsertMenu(editor, []);

  if (path && !((_Editor$marks = slate.Editor.marks(editor)) !== null && _Editor$marks !== void 0 && _Editor$marks.insertMenu) && (!editor.selection || !slate.Path.equals(editor.selection.anchor.path, path) || !slate.Path.equals(editor.selection.focus.path, path))) {
    slate.Transforms.unsetNodes(editor, 'insertMenu', {
      at: path
    });
    return true;
  }

  return false;
}

function withInsertMenu(editor) {
  const {
    normalizeNode,
    apply,
    insertText
  } = editor;

  editor.normalizeNode = _ref3 => {
    let [node, path] = _ref3;

    if (slate.Text.isText(node) && node.insertMenu) {
      if (node.text[0] !== '/') {
        slate.Transforms.unsetNodes(editor, 'insertMenu', {
          at: path
        });
        return;
      }

      const whitespaceMatch = /\s/.exec(node.text);

      if (whitespaceMatch) {
        slate.Transforms.unsetNodes(editor, 'insertMenu', {
          at: {
            anchor: {
              path,
              offset: whitespaceMatch.index
            },
            focus: slate.Editor.end(editor, path)
          },
          match: slate.Text.isText,
          split: true
        });
        return;
      }
    }

    if (slate.Editor.isEditor(editor) && removeInsertMenuMarkWhenOutsideOfSelection(editor)) {
      return;
    }

    normalizeNode([node, path]);
  };

  editor.apply = op => {
    apply(op); // we're calling this here AND in normalizeNode
    // because normalizeNode won't be called on selection changes
    // but apply will
    // we're still calling this from normalizeNode though because we want it to happen
    // when normalization happens

    if (op.type === 'set_selection') {
      removeInsertMenuMarkWhenOutsideOfSelection(editor);
    }
  };

  editor.insertText = text => {
    insertText(text);

    if (editor.selection && text === '/') {
      const startOfBlock = slate.Editor.start(editor, slate.Editor.above(editor, {
        match: node => slate.Editor.isBlock(editor, node)
      })[1]);
      const before = slate.Editor.before(editor, editor.selection.anchor, {
        unit: 'character'
      });

      if (before && (slate.Point.equals(startOfBlock, before) || before.offset !== 0 && /\s/.test(slate.Node.get(editor, before.path).text[before.offset - 1]))) {
        slate.Transforms.setNodes(editor, {
          insertMenu: true
        }, {
          at: {
            anchor: before,
            focus: editor.selection.anchor
          },
          match: slate.Text.isText,
          split: true
        });
      }
    }
  };

  return editor;
}

/** @jsxRuntime classic */

function Placeholder(_ref) {
  let {
    placeholder,
    children
  } = _ref;
  const [width, setWidth] = React.useState(0);
  return core.jsx("span", {
    css: {
      position: 'relative',
      display: 'inline-block',
      width
    }
  }, core.jsx("span", {
    contentEditable: false,
    style: {
      position: 'absolute',
      pointerEvents: 'none',
      display: 'inline-block',
      left: 0,
      top: 0,
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      opacity: '0.5',
      userSelect: 'none',
      fontStyle: 'normal',
      fontWeight: 'normal',
      textDecoration: 'none',
      textAlign: 'left'
    }
  }, core.jsx("span", {
    ref: node => {
      if (node) {
        const offsetWidth = node.offsetWidth;

        if (offsetWidth !== width) {
          setWidth(offsetWidth);
        }
      }
    }
  }, placeholder)), children);
}

const Leaf = _ref2 => {
  let {
    leaf,
    text,
    children,
    attributes
  } = _ref2;
  const {
    colors,
    radii,
    spacing,
    typography
  } = core.useTheme();
  const {
    underline,
    strikethrough,
    bold,
    italic,
    code,
    keyboard,
    superscript,
    subscript,
    placeholder,
    insertMenu
  } = leaf;

  if (placeholder !== undefined) {
    children = core.jsx(Placeholder, {
      placeholder: placeholder
    }, children);
  }

  if (insertMenu) {
    children = core.jsx(InsertMenu, {
      text: text
    }, children);
  }

  if (code) {
    children = core.jsx("code", {
      css: {
        backgroundColor: colors.backgroundDim,
        borderRadius: radii.xsmall,
        display: 'inline-block',
        fontFamily: typography.fontFamily.monospace,
        fontSize: typography.fontSize.small,
        padding: `0 ${spacing.xxsmall}px`
      }
    }, children);
  }

  if (bold) {
    children = core.jsx("strong", null, children);
  }

  if (strikethrough) {
    children = core.jsx("s", null, children);
  }

  if (italic) {
    children = core.jsx("em", null, children);
  }

  if (keyboard) {
    children = core.jsx("kbd", null, children);
  }

  if (superscript) {
    children = core.jsx("sup", null, children);
  }

  if (subscript) {
    children = core.jsx("sub", null, children);
  }

  if (underline) {
    children = core.jsx("u", null, children);
  }

  return core.jsx("span", attributes, children);
};

const renderLeaf = props => {
  return core.jsx(Leaf, props);
};

function withSoftBreaks(isShiftPressedRef, editor) {
  const {
    insertBreak
  } = editor; // TODO: should soft breaks only work in particular places

  editor.insertBreak = () => {
    if (isShiftPressedRef.current) {
      slate.Transforms.insertText(editor, '\n');
    } else {
      insertBreak();
    }
  };

  return editor;
}
function useKeyDownRef(targetKey) {
  const ref = React.useRef(false);
  React.useEffect(() => {
    const handleKeyDown = e => {
      if (e.key !== targetKey) return;
      ref.current = true;
    };

    const handleKeyUp = e => {
      if (e.key !== targetKey) return;
      ref.current = false;
    };

    document.addEventListener('keydown', handleKeyDown, {
      passive: true
    });
    document.addEventListener('keyup', handleKeyUp, {
      passive: true
    });
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKey]);
  return ref;
}

const shortcuts = {
  '...': '…',
  '-->': '→',
  '->': '→',
  '<-': '←',
  '<--': '←',
  '--': '–'
};
function withShortcuts(editor) {
  const {
    insertText
  } = editor;

  editor.insertText = text => {
    insertText(text);

    if (text === ' ' && editor.selection && slate.Range.isCollapsed(editor.selection)) {
      const selectionPoint = editor.selection.anchor;
      const ancestorBlock = slate.Editor.above(editor, {
        match: node => slate.Editor.isBlock(editor, node)
      });

      if (ancestorBlock) {
        Object.keys(shortcuts).forEach(shortcut => {
          const pointBefore = slate.Editor.before(editor, selectionPoint, {
            unit: 'character',
            distance: shortcut.length + 1
          });

          if (pointBefore && slate.Path.isDescendant(pointBefore.path, ancestorBlock[1])) {
            const range = {
              anchor: selectionPoint,
              focus: pointBefore
            };
            const str = slate.Editor.string(editor, range);

            if (str.substr(0, shortcut.length) === shortcut) {
              editor.history.undos.push([]);
              slate.Transforms.select(editor, range);
              editor.insertText(shortcuts[shortcut] + ' ');
            }
          }
        });
      }
    }
  };

  return editor;
}

function withBlockMarkdownShortcuts(documentFeatures, componentBlocks, editor) {
  const {
    insertText
  } = editor;
  const shortcuts = Object.create(null);

  const editorDocumentFeaturesForNormalizationToCheck = _objectSpread(_objectSpread({}, documentFeatures), {}, {
    relationships: true
  });

  let addShortcut = function (text, insert, shouldBeEnabledInComponentBlock) {
    let type = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'paragraph';
    if (!shouldBeEnabledInComponentBlock(editorDocumentFeaturesForNormalizationToCheck)) return;
    const trigger = text[text.length - 1];

    if (!shortcuts[trigger]) {
      shortcuts[trigger] = Object.create(null);
    }

    shortcuts[trigger][text] = {
      insert,
      type,
      shouldBeEnabledInComponentBlock
    };
  };

  addShortcut('1. ', () => {
    slate.Transforms.wrapNodes(editor, {
      type: 'ordered-list',
      children: []
    }, {
      match: n => slate.Editor.isBlock(editor, n)
    });
  }, features => features.formatting.listTypes.ordered);
  addShortcut('- ', () => {
    slate.Transforms.wrapNodes(editor, {
      type: 'unordered-list',
      children: []
    }, {
      match: n => slate.Editor.isBlock(editor, n)
    });
  }, features => features.formatting.listTypes.unordered);
  addShortcut('* ', () => {
    slate.Transforms.wrapNodes(editor, {
      type: 'unordered-list',
      children: []
    }, {
      match: n => slate.Editor.isBlock(editor, n)
    });
  }, features => features.formatting.listTypes.unordered);
  documentFeatures.formatting.headingLevels.forEach(level => {
    addShortcut('#'.repeat(level) + ' ', () => {
      slate.Transforms.setNodes(editor, {
        type: 'heading',
        level
      }, {
        match: node => node.type === 'paragraph' || node.type === 'heading'
      });
    }, features => features.formatting.headingLevels.includes(level), 'heading-or-paragraph');
  });
  addShortcut('> ', () => {
    slate.Transforms.wrapNodes(editor, {
      type: 'blockquote',
      children: []
    }, {
      match: node => node.type === 'paragraph'
    });
  }, features => features.formatting.blockTypes.blockquote);
  addShortcut('```', () => {
    slate.Transforms.wrapNodes(editor, {
      type: 'code',
      children: []
    }, {
      match: node => node.type === 'paragraph'
    });
  }, features => features.formatting.blockTypes.code);
  addShortcut('---', () => {
    insertDivider(editor);
  }, features => features.dividers);

  editor.insertText = text => {
    insertText(text);
    const shortcutsForTrigger = shortcuts[text];

    if (shortcutsForTrigger && editor.selection && slate.Range.isCollapsed(editor.selection)) {
      const {
        anchor
      } = editor.selection;
      const block = slate.Editor.above(editor, {
        match: node => slate.Editor.isBlock(editor, node)
      });
      if (!block || block[0].type !== 'paragraph' && block[0].type !== 'heading') return;
      const start = slate.Editor.start(editor, block[1]);
      const range = {
        anchor,
        focus: start
      };
      const shortcutText = slate.Editor.string(editor, range);
      const shortcut = shortcutsForTrigger[shortcutText];

      if (!shortcut || shortcut.type === 'paragraph' && block[0].type !== 'paragraph') {
        return;
      }

      const locationDocumentFeatures = getAncestorComponentChildFieldDocumentFeatures(editor, documentFeatures, componentBlocks);

      if (locationDocumentFeatures && (locationDocumentFeatures.kind === 'inline' || !shortcut.shouldBeEnabledInComponentBlock(locationDocumentFeatures.documentFeatures))) {
        return;
      } // so that this starts a new undo group


      editor.history.undos.push([]);
      slate.Transforms.select(editor, range);
      slate.Transforms.delete(editor);
      shortcut.insert();
    }
  };

  return editor;
}

// a v important note
// marks in the markdown ast/html are represented quite differently to how they are in slate
// if you had the markdown **something https://keystonejs.com something**
// the bold node is the parent of the link node
// but in slate, marks are only represented on text nodes
const currentlyActiveMarks = new Set();
const currentlyDisabledMarks = new Set();
function addMarkToChildren(mark, cb) {
  const wasPreviouslyActive = currentlyActiveMarks.has(mark);
  currentlyActiveMarks.add(mark);

  try {
    return cb();
  } finally {
    if (!wasPreviouslyActive) {
      currentlyActiveMarks.delete(mark);
    }
  }
}
function addMarksToChildren(marks, cb) {
  const marksToRemove = new Set();

  for (const mark of marks) {
    if (!currentlyActiveMarks.has(mark)) {
      marksToRemove.add(mark);
    }

    currentlyActiveMarks.add(mark);
  }

  try {
    return cb();
  } finally {
    for (const mark of marksToRemove) {
      currentlyActiveMarks.delete(mark);
    }
  }
}
function forceDisableMarkForChildren(mark, cb) {
  const wasPreviouslyDisabled = currentlyDisabledMarks.has(mark);
  currentlyDisabledMarks.add(mark);

  try {
    return cb();
  } finally {
    if (!wasPreviouslyDisabled) {
      currentlyDisabledMarks.delete(mark);
    }
  }
}
function getTextNodeForCurrentlyActiveMarks(text) {
  const node = {
    text
  };

  for (const mark of currentlyActiveMarks) {
    if (!currentlyDisabledMarks.has(mark)) {
      node[mark] = true;
    }
  }

  return node;
}

function getAlignmentFromElement(element) {
  const parent = element.parentElement; // confluence

  const attribute = parent === null || parent === void 0 ? void 0 : parent.getAttribute('data-align'); // note: we don't show html that confluence would parse as alignment
  // we could change that but meh
  // (they match on div.fabric-editor-block-mark with data-align)

  if (attribute === 'center' || attribute === 'end') {
    return attribute;
  }

  if (element instanceof HTMLElement) {
    // Google docs
    const textAlign = element.style.textAlign;

    if (textAlign === 'center') {
      return 'center';
    } // TODO: RTL things?


    if (textAlign === 'right' || textAlign === 'end') {
      return 'end';
    }
  }
} // See https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-8.html#distributive-conditional-types


const ELEMENT_TAGS = {
  A: el => ({
    type: 'link',
    href: el.getAttribute('href'),
    // underline is on links in Google Docs
    children: forceDisableMarkForChildren('underline', () => deserializeChildren$1(el.childNodes))
  }),
  BLOCKQUOTE: () => ({
    type: 'blockquote'
  }),
  H1: el => ({
    type: 'heading',
    level: 1,
    textAlign: getAlignmentFromElement(el)
  }),
  H2: el => ({
    type: 'heading',
    level: 2,
    textAlign: getAlignmentFromElement(el)
  }),
  H3: el => ({
    type: 'heading',
    level: 3,
    textAlign: getAlignmentFromElement(el)
  }),
  H4: el => ({
    type: 'heading',
    level: 4,
    textAlign: getAlignmentFromElement(el)
  }),
  H5: el => ({
    type: 'heading',
    level: 5,
    textAlign: getAlignmentFromElement(el)
  }),
  H6: el => ({
    type: 'heading',
    level: 6,
    textAlign: getAlignmentFromElement(el)
  }),
  IMG: el => ({
    type: 'paragraph',
    children: [{
      text: `<img alt=${JSON.stringify(el.getAttribute('alt') || '')} src=${JSON.stringify(el.getAttribute('src') || '')}>`
    }]
  }),
  LI: () => ({
    type: 'list-item'
  }),
  OL: () => ({
    type: 'ordered-list'
  }),
  P: el => ({
    type: 'paragraph',
    textAlign: getAlignmentFromElement(el)
  }),
  PRE: () => ({
    type: 'code'
  }),
  UL: () => ({
    type: 'unordered-list'
  }),
  HR: () => ({
    type: 'divider',
    children: [{
      text: ''
    }]
  })
};
const TEXT_TAGS = {
  CODE: 'code',
  DEL: 'strikethrough',
  S: 'strikethrough',
  STRIKE: 'strikethrough',
  EM: 'italic',
  I: 'italic',
  STRONG: 'bold',
  U: 'underline',
  SUP: 'superscript',
  SUB: 'subscript'
};

function marksFromElementAttributes(element) {
  const marks = new Set();

  if (element instanceof HTMLElement) {
    const style = element.style;
    const {
      nodeName
    } = element;
    const markFromNodeName = TEXT_TAGS[nodeName];

    if (markFromNodeName) {
      marks.add(markFromNodeName);
    }

    const {
      fontWeight,
      textDecoration,
      verticalAlign
    } = style;

    if (textDecoration === 'underline') {
      marks.add('underline');
    } else if (textDecoration === 'line-through') {
      marks.add('strikethrough');
    } // confluence


    if (nodeName === 'SPAN' && element.classList.contains('code')) {
      marks.add('code');
    } // Google Docs does weird things with <b>


    if (nodeName === 'B' && fontWeight !== 'normal') {
      marks.add('bold');
    } else if (typeof fontWeight === 'string' && (fontWeight === 'bold' || fontWeight === 'bolder' || fontWeight === '1000' || /^[5-9]\d{2}$/.test(fontWeight))) {
      marks.add('bold');
    }

    if (style.fontStyle === 'italic') {
      marks.add('italic');
    } // Google Docs uses vertical align for subscript and superscript instead of <sup> and <sub>


    if (verticalAlign === 'super') {
      marks.add('superscript');
    } else if (verticalAlign === 'sub') {
      marks.add('subscript');
    }
  }

  return marks;
}

function deserializeHTML(html) {
  const parsed = new DOMParser().parseFromString(html, 'text/html');
  return deserializeHTMLNode(parsed.body);
}
function deserializeHTMLNode(el) {
  if (el.nodeType === 3) {
    const text = el.textContent;

    if (!(text !== null && text !== void 0 && text.trim())) {
      return [];
    }

    return [getTextNodeForCurrentlyActiveMarks(text)];
  }

  if (el.nodeType !== 1) {
    return [];
  }

  let {
    nodeName
  } = el;

  if (nodeName === 'BR') {
    return [getTextNodeForCurrentlyActiveMarks('\n')];
  }

  const marks = marksFromElementAttributes(el); // Dropbox Paper displays blockquotes as lists for some reason

  if (el instanceof globalThis.Element && el.classList.contains('listtype-quote')) {
    marks.delete('italic');
    nodeName = 'BLOCKQUOTE';
  }

  return addMarksToChildren(marks, () => {
    if (ELEMENT_TAGS[nodeName]) {
      const attrs = ELEMENT_TAGS[nodeName](el);

      if (attrs.children) {
        return [attrs];
      }

      let children = deserializeChildren$1(el.childNodes);
      return [_objectSpread(_objectSpread({}, attrs), {}, {
        children: children
      })];
    }

    return deserializeChildren$1(el.childNodes);
  });
}

function deserializeChildren$1(nodes) {
  const outputNodes = [];

  for (const node of nodes) {
    const result = deserializeHTMLNode(node);

    if (result.length) {
      outputNodes.push(...result);
    }
  }

  if (!outputNodes.length) {
    outputNodes.push({
      text: ''
    });
  }

  return outputNodes;
}

const markdownConfig = {
  mdastExtensions: [autoLinkLiteralFromMarkdownExtension__default["default"], gfmStrikethroughFromMarkdownExtension__default["default"]],
  extensions: [autoLinkLiteralMarkdownSyntax__default["default"], gfmStrikethroughMarkdownSyntax__default["default"]()]
};
function deserializeMarkdown(markdown) {
  const root = mdASTUtilFromMarkdown__default["default"](markdown, markdownConfig);
  const getDefinition = definitions__default["default"](root);
  let nodes = root.children;

  if (nodes.length === 1 && nodes[0].type === 'paragraph') {
    nodes = nodes[0].children;
  }

  return deserializeChildren(nodes, getDefinition);
}

function deserializeChildren(nodes, getDefinition) {
  const outputNodes = [];

  for (const node of nodes) {
    const result = deserializeMarkdownNode(node, getDefinition);

    if (result.length) {
      outputNodes.push(...result);
    }
  }

  if (!outputNodes.length) {
    outputNodes.push({
      text: ''
    });
  }

  return outputNodes;
}

function deserializeMarkdownNode(node, getDefinition) {
  switch (node.type) {
    case 'blockquote':
      {
        return [{
          type: 'blockquote',
          children: deserializeChildren(node.children, getDefinition)
        }];
      }

    case 'linkReference':
      {
        var _getDefinition;

        return [{
          type: 'link',
          href: ((_getDefinition = getDefinition(node.identifier)) === null || _getDefinition === void 0 ? void 0 : _getDefinition.url) || '',
          children: deserializeChildren(node.children, getDefinition)
        }];
      }

    case 'link':
      {
        return [{
          type: 'link',
          href: node.url,
          children: deserializeChildren(node.children, getDefinition)
        }];
      }

    case 'code':
      {
        return [{
          type: 'code',
          children: [{
            text: node.value
          }]
        }];
      }

    case 'paragraph':
      {
        return [{
          type: 'paragraph',
          children: deserializeChildren(node.children, getDefinition)
        }];
      }

    case 'heading':
      {
        return [{
          type: 'heading',
          level: node.depth,
          children: deserializeChildren(node.children, getDefinition)
        }];
      }

    case 'list':
      {
        return [{
          type: node.ordered ? 'ordered-list' : 'unordered-list',
          children: deserializeChildren(node.children, getDefinition)
        }];
      }

    case 'imageReference':
      {
        var _getDefinition2;

        return [getTextNodeForCurrentlyActiveMarks(`![${node.alt || ''}](${((_getDefinition2 = getDefinition(node.identifier)) === null || _getDefinition2 === void 0 ? void 0 : _getDefinition2.url) || ''})`)];
      }

    case 'image':
      {
        return [getTextNodeForCurrentlyActiveMarks(`![${node.alt || ''}](${node.url})`)];
      }

    case 'listItem':
      {
        return [{
          type: 'list-item',
          children: deserializeChildren(node.children, getDefinition)
        }];
      }

    case 'thematicBreak':
      {
        return [{
          type: 'divider',
          children: [{
            text: ''
          }]
        }];
      }

    case 'break':
      {
        return [getTextNodeForCurrentlyActiveMarks('\n')];
      }

    case 'delete':
      {
        return addMarkToChildren('strikethrough', () => deserializeChildren(node.children, getDefinition));
      }

    case 'strong':
      {
        return addMarkToChildren('bold', () => deserializeChildren(node.children, getDefinition));
      }

    case 'emphasis':
      {
        return addMarkToChildren('italic', () => deserializeChildren(node.children, getDefinition));
      }

    case 'inlineCode':
      {
        return addMarkToChildren('code', () => [getTextNodeForCurrentlyActiveMarks(node.value)]);
      }
    // while it would be nice if we parsed the html here
    // it's a bit more complicated than just parsing the html
    // because an html node might just be an opening/closing node
    // but we just have an opening/closing node here
    // not the opening and closing and children

    case 'html':
    case 'text':
      {
        return [getTextNodeForCurrentlyActiveMarks(node.value)];
      }
  }

  return [];
}

function insertFragmentButDifferent(editor, nodes) {
  if (slate.Editor.isBlock(editor, nodes[0])) {
    insertNodesButReplaceIfSelectionIsAtEmptyParagraphOrHeading(editor, nodes);
  } else {
    slate.Transforms.insertFragment(editor, nodes);
  }
}

function withPasting(editor) {
  const {
    insertData,
    setFragmentData
  } = editor;

  editor.setFragmentData = data => {
    if (editor.selection) {
      data.setData('application/x-keystone-document-editor', 'true');
    }

    setFragmentData(data);
  };

  editor.insertData = data => {
    // this exists because behind the scenes, Slate sets the slate document
    // on the data transfer, this is great because it means when you copy and paste
    // something in the editor or between editors, it'll use the actual Slate data
    // rather than the serialized html so component blocks and etc. will work fine
    // we're setting application/x-keystone-document-editor
    // though so that we only accept slate data from Keystone's editor
    // because other editors will likely have a different structure
    // so we'll rely on the html deserialization instead
    // (note that yes, we do call insertData at the end of this function
    // which is where Slate's logic will run, it'll never do anything there though
    // since anything that will have slate data will also have text/html which we handle
    // before we call insertData)
    // TODO: handle the case of copying between editors with different components blocks
    // (right now, things will blow up in most cases)
    if (data.getData('application/x-keystone-document-editor') === 'true') {
      insertData(data);
      return;
    }

    const blockAbove = slate.Editor.above(editor, {
      match: node => slate.Editor.isBlock(editor, node)
    });

    if ((blockAbove === null || blockAbove === void 0 ? void 0 : blockAbove[0].type) === 'code') {
      const plain = data.getData('text/plain');
      editor.insertText(plain);
      return;
    }

    let vsCodeEditorData = data.getData('vscode-editor-data');

    if (vsCodeEditorData) {
      try {
        const vsCodeData = JSON.parse(vsCodeEditorData);

        if ((vsCodeData === null || vsCodeData === void 0 ? void 0 : vsCodeData.mode) === 'markdown' || (vsCodeData === null || vsCodeData === void 0 ? void 0 : vsCodeData.mode) === 'mdx') {
          const plain = data.getData('text/plain');

          if (plain) {
            const fragment = deserializeMarkdown(plain);
            insertFragmentButDifferent(editor, fragment);
            return;
          }
        }
      } catch (err) {
        console.log(err);
      }
    }

    let html = data.getData('text/html');

    if (html) {
      const fragment = deserializeHTML(html);
      insertFragmentButDifferent(editor, fragment);
      return;
    }

    const plain = data.getData('text/plain');

    if (plain) {
      const fragment = deserializeMarkdown(plain);
      insertFragmentButDifferent(editor, fragment);
      return;
    }

    insertData(data);
  };

  return editor;
}

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline'
};

function isMarkActive(editor, mark) {
  const marks = slate.Editor.marks(editor);

  if (marks !== null && marks !== void 0 && marks[mark]) {
    return true;
  } // see the stuff about marks in toolbar-state for why this is here


  for (const entry of slate.Editor.nodes(editor, {
    match: slate.Text.isText
  })) {
    if (entry[0][mark]) {
      return true;
    }
  }

  return false;
}

const getKeyDownHandler = editor => event => {
  if (event.defaultPrevented) return;

  for (const hotkey in HOTKEYS) {
    if (isHotkey__default["default"](hotkey, event.nativeEvent)) {
      event.preventDefault();
      const mark = HOTKEYS[hotkey];
      const isActive = isMarkActive(editor, mark);

      if (isActive) {
        slate.Editor.removeMark(editor, mark);
      } else {
        slate.Editor.addMark(editor, mark, true);
      }

      return;
    }
  }

  if (isHotkey__default["default"]('mod+\\', event.nativeEvent)) {
    clearFormatting(editor);
    return;
  }

  if (isHotkey__default["default"]('mod+k', event.nativeEvent)) {
    event.preventDefault();
    wrapLink(editor, '');
    return;
  }

  if (event.key === 'Tab') {
    if (event.shiftKey) {
      unnestList(editor);
    } else {
      nestList(editor);
    }

    event.preventDefault();
    return;
  }

  if (event.key === 'Tab' && editor.selection) {
    const layoutArea = slate.Editor.above(editor, {
      match: node => node.type === 'layout-area'
    });

    if (layoutArea) {
      const layoutAreaToEnter = event.shiftKey ? slate.Editor.before(editor, layoutArea[1], {
        unit: 'block'
      }) : slate.Editor.after(editor, layoutArea[1], {
        unit: 'block'
      });
      slate.Transforms.setSelection(editor, {
        anchor: layoutAreaToEnter,
        focus: layoutAreaToEnter
      });
      event.preventDefault();
    }
  }
};

function createDocumentEditor(documentFeatures, componentBlocks, relationships, isShiftPressedRef) {
  return withPasting(withSoftBreaks(isShiftPressedRef, withBlocksSchema(withLink(documentFeatures, componentBlocks, withList(withHeading(withRelationship(withInsertMenu(withComponentBlocks(componentBlocks, documentFeatures, relationships, withParagraphs(withShortcuts(withDivider(withLayouts(withMarks(documentFeatures, componentBlocks, withCodeBlock(withBlockMarkdownShortcuts(documentFeatures, componentBlocks, withBlockquote(withDocumentFeaturesNormalization(documentFeatures, relationships, slateHistory.withHistory(slateReact.withReact(slate.createEditor()))))))))))))))))))));
}
function DocumentEditor(_ref) {
  let {
    autoFocus,
    onChange,
    value,
    componentBlocks,
    relationships,
    documentFeatures
  } = _ref;
  const isShiftPressedRef = useKeyDownRef('Shift');
  const {
    colors,
    spacing
  } = core.useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const editor = React.useMemo(() => createDocumentEditor(documentFeatures, componentBlocks, relationships, isShiftPressedRef), [documentFeatures, componentBlocks, relationships, isShiftPressedRef]);
  return core.jsx("div", {
    css: [{
      display: 'flex',
      flexDirection: 'column'
    }, expanded && {
      background: colors.background,
      bottom: 0,
      left: 0,
      overflowY: 'auto',
      // required to keep the toolbar stuck in place
      position: 'absolute',
      right: 0,
      top: 0,
      zIndex: 100
    }]
  }, core.jsx(DocumentEditorProvider, {
    componentBlocks: componentBlocks,
    documentFeatures: documentFeatures,
    relationships: relationships,
    editor: editor,
    value: value,
    onChange: value => {
      onChange === null || onChange === void 0 ? void 0 : onChange(value); // this fixes a strange issue in Safari where the selection stays inside of the editor
      // after a blur event happens but the selection is still in the editor
      // so the cursor is visually in the wrong place and it inserts text backwards

      const selection = window.getSelection();

      if (selection && !slateReact.ReactEditor.isFocused(editor)) {
        const editorNode = slateReact.ReactEditor.toDOMNode(editor, editor);

        if (selection.anchorNode === editorNode) {
          slateReact.ReactEditor.focus(editor);
        }
      }
    }
  }, React.useMemo(() => core.jsx(Toolbar, {
    documentFeatures: documentFeatures,
    viewState: {
      expanded,
      toggle: () => {
        setExpanded(v => !v);
      }
    }
  }), [expanded, documentFeatures]), core.jsx(DocumentEditorEditable, {
    css: expanded && {
      marginLeft: spacing.medium,
      marginRight: spacing.medium
    },
    autoFocus: autoFocus,
    readOnly: onChange === undefined
  }), // for debugging
  false ));
}
function DocumentEditorProvider(_ref2) {
  let {
    children,
    editor,
    onChange,
    value,
    componentBlocks,
    documentFeatures,
    relationships
  } = _ref2;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const identity = React.useMemo(() => Math.random().toString(36), [editor]);
  return core.jsx(slateReact.Slate // this fixes issues with Slate crashing when a fast refresh occcurs
  , {
    key: identity,
    editor: editor,
    value: value,
    onChange: value => {
      onChange(value); // this fixes a strange issue in Safari where the selection stays inside of the editor
      // after a blur event happens but the selection is still in the editor
      // so the cursor is visually in the wrong place and it inserts text backwards

      const selection = window.getSelection();

      if (selection && !slateReact.ReactEditor.isFocused(editor)) {
        const editorNode = slateReact.ReactEditor.toDOMNode(editor, editor);

        if (selection.anchorNode === editorNode) {
          slateReact.ReactEditor.focus(editor);
        }
      }
    }
  }, core.jsx(ToolbarStateProvider, {
    componentBlocks: componentBlocks,
    editorDocumentFeatures: documentFeatures,
    relationships: relationships
  }, children));
}
function DocumentEditorEditable(props) {
  const editor = slateReact.useSlate();
  const componentBlocks = React.useContext(ComponentBlockContext);
  const onKeyDown = React.useMemo(() => getKeyDownHandler(editor), [editor]);
  return core.jsx(slateReact.Editable, _extends({
    decorate: React.useCallback(_ref3 => {
      let [node, path] = _ref3;
      let decorations = [];

      if (node.type === 'component-block') {
        if (node.children.length === 1 && slate.Element.isElement(node.children[0]) && node.children[0].type === 'component-inline-prop' && node.children[0].propPath === undefined) {
          return decorations;
        }

        node.children.forEach((child, index) => {
          if (slate.Node.string(child) === '' && slate.Element.isElement(child) && (child.type === 'component-block-prop' || child.type === 'component-inline-prop') && child.propPath !== undefined) {
            const start = slate.Editor.start(editor, [...path, index]);
            const placeholder = getPlaceholderTextForPropPath(child.propPath, componentBlocks[node.component].props, node.props);

            if (placeholder) {
              decorations.push({
                placeholder,
                anchor: start,
                focus: start
              });
            }
          }
        });
      }

      return decorations;
    }, [editor, componentBlocks]),
    css: styles,
    onKeyDown: onKeyDown,
    renderElement: renderElement,
    renderLeaf: renderLeaf
  }, props));
}

const orderedListStyles = ['lower-roman', 'decimal', 'lower-alpha'];
const unorderedListStyles = ['square', 'disc', 'circle'];
let styles = {
  flex: 1
};
let listDepth = 10;

while (listDepth--) {
  let arr = Array.from({
    length: listDepth
  });

  if (arr.length) {
    styles[arr.map(() => `ol`).join(' ')] = {
      listStyle: orderedListStyles[listDepth % 3]
    };
    styles[arr.map(() => `ul`).join(' ')] = {
      listStyle: unorderedListStyles[listDepth % 3]
    };
  }
}

function makeEditorSchema(obj) {
  let ret = {};
  Object.keys(obj).forEach(key => {
    const val = obj[key];

    if (val.kind === 'blocks') {
      ret[key] = {
        kind: 'blocks',
        allowedChildren: new Set(val.allowedChildren),
        blockToWrapInlinesIn: val.allowedChildren[0],
        invalidPositionHandleMode: val.invalidPositionHandleMode
      };
    } else {
      ret[key] = val;
    }
  });
  return ret;
}

const blockquoteChildren = ['paragraph', 'code', 'heading', 'ordered-list', 'unordered-list', 'divider'];
const paragraphLike = [...blockquoteChildren, 'blockquote'];
const insideOfLayouts = [...paragraphLike, 'component-block'];
const editorSchema = makeEditorSchema({
  editor: {
    kind: 'blocks',
    allowedChildren: [...insideOfLayouts, 'layout'],
    invalidPositionHandleMode: 'move'
  },
  layout: {
    kind: 'blocks',
    allowedChildren: ['layout-area'],
    invalidPositionHandleMode: 'move'
  },
  'layout-area': {
    kind: 'blocks',
    allowedChildren: insideOfLayouts,
    invalidPositionHandleMode: 'unwrap'
  },
  blockquote: {
    kind: 'blocks',
    allowedChildren: blockquoteChildren,
    invalidPositionHandleMode: 'move'
  },
  paragraph: {
    kind: 'inlines',
    invalidPositionHandleMode: 'unwrap'
  },
  code: {
    kind: 'inlines',
    invalidPositionHandleMode: 'move'
  },
  divider: {
    kind: 'inlines',
    invalidPositionHandleMode: 'move'
  },
  heading: {
    kind: 'inlines',
    invalidPositionHandleMode: 'unwrap'
  },
  'component-block': {
    kind: 'blocks',
    allowedChildren: ['component-block-prop', 'component-inline-prop'],
    invalidPositionHandleMode: 'move'
  },
  'component-inline-prop': {
    kind: 'inlines',
    invalidPositionHandleMode: 'unwrap'
  },
  'component-block-prop': {
    kind: 'blocks',
    allowedChildren: paragraphLike,
    invalidPositionHandleMode: 'unwrap'
  },
  'ordered-list': {
    kind: 'blocks',
    allowedChildren: ['list-item'],
    invalidPositionHandleMode: 'move'
  },
  'unordered-list': {
    kind: 'blocks',
    allowedChildren: ['list-item'],
    invalidPositionHandleMode: 'move'
  },
  'list-item': {
    kind: 'blocks',
    allowedChildren: ['list-item-content', 'ordered-list', 'unordered-list'],
    invalidPositionHandleMode: 'unwrap'
  },
  'list-item-content': {
    kind: 'inlines',
    invalidPositionHandleMode: 'unwrap'
  }
});

function withBlocksSchema(editor) {
  const {
    normalizeNode
  } = editor;

  editor.normalizeNode = _ref4 => {
    let [node, path] = _ref4;

    if (!slate.Text.isText(node) && node.type !== 'link' && node.type !== 'relationship') {
      const nodeType = slate.Editor.isEditor(node) ? 'editor' : node.type;

      if (typeof nodeType !== 'string' || editorSchema[nodeType] === undefined) {
        slate.Transforms.unwrapNodes(editor, {
          at: path
        });
        return;
      }

      const info = editorSchema[nodeType];

      for (const [index, childNode] of node.children.entries()) {
        const childPath = [...path, index];

        if (info.kind === 'inlines') {
          if (!slate.Text.isText(childNode) && !slate.Editor.isInline(editor, childNode)) {
            handleNodeInInvalidPosition(editor, [childNode, childPath], path);
            return;
          }
        } else {
          if (!slate.Editor.isBlock(editor, childNode) || // these checks are implicit in Editor.isBlock
          // but that isn't encoded in types so these will make TS happy
          childNode.type === 'link' || childNode.type === 'relationship') {
            slate.Transforms.wrapNodes(editor, {
              type: info.blockToWrapInlinesIn,
              children: []
            }, {
              at: childPath
            });
            return;
          }

          if (!info.allowedChildren.has(childNode.type)) {
            handleNodeInInvalidPosition(editor, [childNode, childPath], path);
            return;
          }
        }
      }
    }

    normalizeNode([node, path]);
  };

  return editor;
}

function handleNodeInInvalidPosition(editor, _ref5, parentPath) {
  let [node, path] = _ref5;
  const nodeType = node.type;
  const childNodeInfo = editorSchema[nodeType];

  if (!childNodeInfo || childNodeInfo.invalidPositionHandleMode === 'unwrap') {
    slate.Transforms.unwrapNodes(editor, {
      at: path
    });
    return;
  } // the parent of a block will never be an inline so this casting is okay


  const parentNode = slate.Node.get(editor, parentPath);
  const info = editorSchema[parentNode.type || 'editor'];

  if ((info === null || info === void 0 ? void 0 : info.kind) === 'blocks' && info.allowedChildren.has(nodeType)) {
    if (parentPath.length === 0) {
      slate.Transforms.moveNodes(editor, {
        at: path,
        to: [path[0] + 1]
      });
    } else {
      slate.Transforms.moveNodes(editor, {
        at: path,
        to: slate.Path.next(parentPath)
      });
    }

    return;
  }

  if (slate.Editor.isEditor(parentNode)) {
    slate.Transforms.moveNodes(editor, {
      at: path,
      to: [path[0] + 1]
    });
    slate.Transforms.unwrapNodes(editor, {
      at: [path[0] + 1]
    });
    return;
  }

  handleNodeInInvalidPosition(editor, [node, path], parentPath.slice(0, -1));
} // to print the editor schema in Graphviz if you want to visualize it
// function printEditorSchema(editorSchema: EditorSchema) {
//   return `digraph G {
//   concentrate=true;
//   ${Object.keys(editorSchema)
//     .map(key => {
//       let val = editorSchema[key];
//       if (val.kind === 'inlines') {
//         return `"${key}" -> inlines`;
//       }
//       if (val.kind === 'blocks') {
//         return `"${key}" -> {${[...val.allowedChildren].map(x => JSON.stringify(x)).join(' ')}}`;
//       }
//     })
//     .join('\n  ')}
// }`;
// }

exports.DocumentEditor = DocumentEditor;
exports.ForceValidationProvider = ForceValidationProvider;
exports.assertNever = assertNever;
exports.clientSideValidateProp = clientSideValidateProp;
exports.createDocumentEditor = createDocumentEditor;


/***/ }),

/***/ 8861:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(8527);
var _objectSpread = __webpack_require__(417);
var _objectWithoutProperties = __webpack_require__(2220);
var core = __webpack_require__(1138);
var React = __webpack_require__(6689);

const _excluded$1 = ["isRelative"];
const InlineDialog = /*#__PURE__*/React.forwardRef((_ref, ref) => {
  let {
    isRelative
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded$1);

  const {
    radii,
    spacing
  } = core.useTheme();
  const relativeStyles = isRelative ? {
    left: '50%',
    margin: spacing.small,
    transform: 'translateX(-50%)'
  } : {};
  return core.jsx("div", _extends({
    ref: ref,
    contentEditable: false,
    css: _objectSpread({
      background: 'white',
      borderRadius: radii.small,
      boxShadow: `rgba(9, 30, 66, 0.31) 0px 0px 1px, rgba(9, 30, 66, 0.25) 0px 4px 8px -2px`,
      padding: spacing.small,
      position: 'absolute',
      userSelect: 'none',
      zIndex: 1
    }, relativeStyles)
  }, props));
});

const _excluded = ["children", "direction"],
      _excluded2 = ["as", "isDisabled", "isPressed", "isSelected", "variant"];
// ------------------------------

const ToolbarSpacer = () => {
  const {
    spacing
  } = core.useTheme();
  return core.jsx("span", {
    css: {
      display: 'inline-block',
      width: spacing.large
    }
  });
};
const ToolbarSeparator = () => {
  const {
    colors,
    spacing
  } = core.useTheme();
  return core.jsx("span", {
    css: {
      alignSelf: 'stretch',
      background: colors.border,
      display: 'inline-block',
      marginLeft: spacing.xsmall,
      marginRight: spacing.xsmall,
      width: 1
    }
  });
}; // Groups
// ------------------------------

const autoFlowDirection = {
  column: 'row',
  row: 'column'
};
const ToolbarGroupContext = /*#__PURE__*/React.createContext({
  direction: 'row'
});

const useToolbarGroupContext = () => React.useContext(ToolbarGroupContext);

const ToolbarGroup = core.forwardRefWithAs((_ref, ref) => {
  let {
    children,
    direction = 'row'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    spacing
  } = core.useTheme();
  return core.jsx(ToolbarGroupContext.Provider, {
    value: {
      direction
    }
  }, core.jsx(core.Box, _extends({
    ref: ref,
    css: {
      display: 'inline-grid',
      gap: spacing.xxsmall,
      gridAutoFlow: autoFlowDirection[direction]
    }
  }, props), children));
}); // Buttons
// ------------------------------

const ToolbarButton = core.forwardRefWithAs(function ToolbarButton(_ref2, ref) {
  let {
    as: Tag = 'button',
    isDisabled,
    isPressed,
    isSelected,
    variant = 'default'
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded2);

  const extraProps = {};
  const {
    direction: groupDirection
  } = useToolbarGroupContext();
  const {
    colors,
    palette,
    radii,
    sizing,
    spacing,
    typography
  } = core.useTheme();

  if (Tag === 'button') {
    extraProps.type = 'button';
  }

  const variants = {
    default: {
      bgHover: palette.neutral200,
      bgActive: palette.neutral300,
      fg: palette.neutral800
    },
    action: {
      bgHover: palette.blue50,
      bgActive: palette.blue100,
      fg: palette.blue600
    },
    destructive: {
      bgHover: palette.red50,
      bgActive: palette.red100,
      fg: palette.red600
    }
  };
  const style = variants[variant];
  return core.jsx(Tag, _extends({}, extraProps, {
    ref: ref,
    disabled: isDisabled,
    "data-pressed": isPressed,
    "data-selected": isSelected,
    "data-display-mode": groupDirection,
    css: {
      alignItems: 'center',
      background: 0,
      border: 0,
      borderRadius: radii.xsmall,
      color: style.fg,
      cursor: 'pointer',
      display: 'flex',
      fontSize: typography.fontSize.small,
      fontWeight: typography.fontWeight.medium,
      height: sizing.medium,
      whiteSpace: 'nowrap',
      ':hover': {
        background: style.bgHover
      },
      ':active': {
        background: style.bgActive
      },
      '&:disabled': {
        color: colors.foregroundDisabled,
        pointerEvents: 'none'
      },
      '&[data-pressed=true]': {
        background: style.bgActive
      },
      '&[data-selected=true]': {
        background: colors.foregroundMuted,
        color: colors.background
      },
      // alternate styles within button group
      '&[data-display-mode=row]': {
        paddingLeft: spacing.small,
        paddingRight: spacing.small
      },
      '&[data-display-mode=column]': {
        paddingLeft: spacing.medium,
        paddingRight: spacing.medium
      }
    }
  }, props));
});
function KeyboardInTooltip(_ref3) {
  let {
    children
  } = _ref3;
  const theme = core.useTheme();
  return core.jsx("kbd", {
    css: {
      margin: 2,
      padding: theme.spacing.xxsmall,
      fontFamily: 'inherit',
      backgroundColor: theme.colors.foreground,
      borderRadius: theme.radii.xsmall,
      color: theme.colors.background,
      whiteSpace: 'pre'
    }
  }, children);
}

exports.InlineDialog = InlineDialog;
exports.KeyboardInTooltip = KeyboardInTooltip;
exports.ToolbarButton = ToolbarButton;
exports.ToolbarGroup = ToolbarGroup;
exports.ToolbarSeparator = ToolbarSeparator;
exports.ToolbarSpacer = ToolbarSpacer;


/***/ }),

/***/ 1005:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(5173);
} else {}


/***/ }),

/***/ 5173:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(1138);
var fields = __webpack_require__(5007);
var slate = __webpack_require__(370);
var documentRenderer = __webpack_require__(1816);
var weakMemoize = __webpack_require__(6059);
var components = __webpack_require__(961);
var index = __webpack_require__(6667);
var api = __webpack_require__(4592);
__webpack_require__(8527);
__webpack_require__(6689);
__webpack_require__(481);
__webpack_require__(9811);
__webpack_require__(9116);
__webpack_require__(7330);
__webpack_require__(2518);
__webpack_require__(7760);
__webpack_require__(6548);
__webpack_require__(2813);
__webpack_require__(8861);
__webpack_require__(417);
__webpack_require__(2220);
__webpack_require__(6752);
__webpack_require__(8375);
__webpack_require__(7024);
__webpack_require__(4034);
__webpack_require__(6623);
__webpack_require__(8628);
__webpack_require__(5493);
__webpack_require__(4940);
__webpack_require__(4556);
__webpack_require__(1686);
__webpack_require__(1252);
__webpack_require__(8158);
__webpack_require__(3551);
__webpack_require__(8170);
__webpack_require__(2822);
__webpack_require__(6424);
__webpack_require__(8385);
__webpack_require__(5875);
__webpack_require__(3324);
__webpack_require__(7709);
__webpack_require__(6401);
__webpack_require__(5375);
__webpack_require__(4805);
__webpack_require__(4495);
__webpack_require__(4826);
__webpack_require__(9737);

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var weakMemoize__default = /*#__PURE__*/_interopDefault(weakMemoize);

/** @jsxRuntime classic */
const Field = _ref => {
  let {
    field,
    value,
    onChange,
    autoFocus,
    forceValidation
  } = _ref;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(index.ForceValidationProvider, {
    value: !!forceValidation
  }, core.jsx(index.DocumentEditor, {
    autoFocus: autoFocus,
    value: value,
    onChange: onChange,
    componentBlocks: field.componentBlocks,
    relationships: field.relationships,
    documentFeatures: field.documentFeatures
  })));
};

const serialize = nodes => {
  return nodes.map(n => slate.Node.string(n)).join('\n');
};

const Cell = _ref2 => {
  var _item$field$path;

  let {
    item,
    field,
    linkTo
  } = _ref2;
  const value = (_item$field$path = item[field.path]) === null || _item$field$path === void 0 ? void 0 : _item$field$path.document;
  if (!value) return null;
  const plainText = serialize(value);
  const cutText = plainText.length > 100 ? plainText.slice(0, 100) + '...' : plainText;
  return linkTo ? core.jsx(components.CellLink, linkTo, cutText) : core.jsx(components.CellContainer, null, cutText);
};
Cell.supportsLinkTo = true;
const CardValue = _ref3 => {
  var _item$field$path2;

  let {
    item,
    field
  } = _ref3;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), core.jsx(documentRenderer.DocumentRenderer, {
    document: ((_item$field$path2 = item[field.path]) === null || _item$field$path2 === void 0 ? void 0 : _item$field$path2.document) || []
  }));
};
const allowedExportsOnCustomViews = ['componentBlocks'];
const controller = config => {
  const memoizedIsComponentBlockValid = weakMemoize__default["default"](componentBlock => weakMemoize__default["default"](props => index.clientSideValidateProp({
    kind: 'object',
    value: componentBlock.props
  }, props)));
  const componentBlocks = config.customViews.componentBlocks || {};
  const serverSideComponentBlocksSet = new Set(config.fieldMeta.componentBlocksPassedOnServer);
  const componentBlocksOnlyBeingPassedOnTheClient = Object.keys(componentBlocks).filter(x => !serverSideComponentBlocksSet.has(x));

  if (componentBlocksOnlyBeingPassedOnTheClient.length) {
    throw new Error(`(${config.listKey}:${config.path}) The following component blocks are being passed in the custom view but not in the server-side field config: ${JSON.stringify(componentBlocksOnlyBeingPassedOnTheClient)}`);
  }

  const clientSideComponentBlocksSet = new Set(Object.keys(componentBlocks));
  const componentBlocksOnlyBeingPassedOnTheServer = config.fieldMeta.componentBlocksPassedOnServer.filter(x => !clientSideComponentBlocksSet.has(x));

  if (componentBlocksOnlyBeingPassedOnTheServer.length) {
    throw new Error(`(${config.listKey}:${config.path}) The following component blocks are being passed in the server-side field config but not in the custom view: ${JSON.stringify(componentBlocksOnlyBeingPassedOnTheServer)}`);
  }

  const validateNode = weakMemoize__default["default"](node => {
    if (slate.Text.isText(node)) {
      return true;
    }

    if (node.type === 'component-block') {
      const componentBlock = componentBlocks[node.component];

      if (componentBlock) {
        if (!memoizedIsComponentBlockValid(componentBlock)(node.props)) {
          return false;
        }
      }
    }

    if (node.type === 'link' && (typeof node.href !== 'string' || !api.isValidURL(node.href))) {
      return false;
    }

    return node.children.every(node => validateNode(node));
  });
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: `${config.path} {document(hydrateRelationships: true)}`,
    componentBlocks: config.customViews.componentBlocks || {},
    documentFeatures: config.fieldMeta.documentFeatures,
    relationships: config.fieldMeta.relationships,
    defaultValue: [{
      type: 'paragraph',
      children: [{
        text: ''
      }]
    }],
    deserialize: data => {
      var _data$config$path;

      return ((_data$config$path = data[config.path]) === null || _data$config$path === void 0 ? void 0 : _data$config$path.document) || [{
        type: 'paragraph',
        children: [{
          text: ''
        }]
      }];
    },
    serialize: value => ({
      [config.path]: value
    }),

    validate(value) {
      return value.every(node => validateNode(node));
    }

  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.allowedExportsOnCustomViews = allowedExportsOnCustomViews;
exports.controller = controller;


/***/ }),

/***/ 1088:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _router = __webpack_require__(4000);
var _router1 = __webpack_require__(2203);
var _useIntersection = __webpack_require__(8599);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const prefetched = {};
function prefetch(router, href, as, options) {
    if (true) return;
    if (!(0, _router).isLocalURL(href)) return;
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    router.prefetch(href, as, options).catch((err)=>{
        if (false) {}
    });
    const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale;
    // Join on an invalid URI character
    prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}
function isModifiedEvent(event) {
    const { target  } = event.currentTarget;
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    // replace state instead of push if prop is present
    router[replace ? 'replace' : 'push'](href, as, {
        shallow,
        locale,
        scroll
    });
}
function Link(props) {
    if (false) {}
    const p = props.prefetch !== false;
    const router = (0, _router1).useRouter();
    const { href , as  } = _react.default.useMemo(()=>{
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
        return {
            href: resolvedHref,
            as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
        };
    }, [
        router,
        props.href,
        props.as
    ]);
    let { children , replace , shallow , scroll , locale  } = props;
    if (typeof children === 'string') {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (false) {} else {
        child = _react.default.Children.only(children);
    }
    const childRef = child && typeof child === 'object' && child.ref;
    const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
        rootMargin: '200px'
    });
    const setRef = _react.default.useCallback((el)=>{
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === 'function') childRef(el);
            else if (typeof childRef === 'object') {
                childRef.current = el;
            }
        }
    }, [
        childRef,
        setIntersectionRef
    ]);
    _react.default.useEffect(()=>{
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];
        if (shouldPrefetch && !isPrefetched) {
            prefetch(router, href, as, {
                locale: curLocale
            });
        }
    }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick: (e)=>{
            if (false) {}
            if (child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!e.defaultPrevented) {
                linkClicked(e, router, href, as, replace, shallow, scroll, locale);
            }
        }
    };
    childProps.onMouseEnter = (e)=>{
        if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
        }
        if ((0, _router).isLocalURL(href)) {
            prefetch(router, href, as, {
                priority: true
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (props.passHref || child.type === 'a' && !('href' in child.props)) {
        const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
        childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
    }
    return(/*#__PURE__*/ _react.default.cloneElement(child, childProps));
}
var _default = Link;
exports["default"] = _default; //# sourceMappingURL=link.js.map


/***/ }),

/***/ 6998:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
function removePathTrailingSlash(path) {
    return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash; //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 8817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.getMiddlewareManifest = getMiddlewareManifest;
exports.createRouteLoader = createRouteLoader;
var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(9565));
var _requestIdleCallback = __webpack_require__(1424);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ('future' in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)
    ).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
function hasPrefetch(link) {
    try {
        link = document.createElement('link');
        return(// with relList.support
        (!!window.MSInputMethodContext && !!document.documentMode) || link.relList.supports('prefetch'));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
    return new Promise((res, rej)=>{
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
            return res();
        }
        link = document.createElement('link');
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = undefined;
        link.onload = res;
        link.onerror = rej;
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement('script');
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)))
        ;
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms)
            );
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}
function getMiddlewareManifest() {
    if (self.__MIDDLEWARE_MANIFEST) {
        return Promise.resolve(self.__MIDDLEWARE_MANIFEST);
    }
    const onMiddlewareManifest = new Promise((resolve)=>{
        const cb = self.__MIDDLEWARE_MANIFEST_CB;
        self.__MIDDLEWARE_MANIFEST_CB = ()=>{
            resolve(self.__MIDDLEWARE_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onMiddlewareManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client middleware manifest')));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + '/_next/' + encodeURI(entry)
        );
        return {
            scripts: allFiles.filter((v)=>v.endsWith('.js')
            ),
            css: allFiles.filter((v)=>v.endsWith('.css')
            )
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src);
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector(`script[src^="${src}"]`)) {
                return Promise.resolve();
            }
            loadedScripts.set(src, prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to load stylesheet: ${href}`);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                })
            );
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()
            ).then((exports)=>({
                    component: exports && exports.default || exports,
                    exports: exports
                })
            , (err)=>({
                    error: err
                })
            ) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && 'resolve' in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts , css  })=>{
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet)), 
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        })
                    );
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint , styles  })=>{
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return 'error' in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve === null || devBuildPromiseResolve === void 0 ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script, 'script')
                ) : [])
            ).then(()=>{
                (0, _requestIdleCallback).requestIdleCallback(()=>this.loadRoute(route, true).catch(()=>{})
                );
            }).catch(()=>{});
        }
    };
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 2203:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "Router", ({
    enumerable: true,
    get: function() {
        return _router.default;
    }
}));
Object.defineProperty(exports, "withRouter", ({
    enumerable: true,
    get: function() {
        return _withRouter.default;
    }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports["default"] = void 0;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _router = _interopRequireDefault(__webpack_require__(4000));
var _routerContext = __webpack_require__(4964);
var _isError = _interopRequireDefault(__webpack_require__(274));
var _withRouter = _interopRequireDefault(__webpack_require__(6920));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const singletonRouter = {
    router: null,
    readyCallbacks: [],
    ready (cb) {
        if (this.router) return cb();
        if (false) {}
    }
};
// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = [
    'pathname',
    'route',
    'query',
    'asPath',
    'components',
    'isFallback',
    'basePath',
    'locale',
    'locales',
    'defaultLocale',
    'isReady',
    'isPreview',
    'isLocaleDomain',
    'domainLocales', 
];
const routerEvents = [
    'routeChangeStart',
    'beforeHistoryChange',
    'routeChangeComplete',
    'routeChangeError',
    'hashChangeStart',
    'hashChangeComplete', 
];
const coreMethodFields = [
    'push',
    'replace',
    'reload',
    'back',
    'prefetch',
    'beforePopState', 
];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
    get () {
        return _router.default.events;
    }
});
urlPropertyFields.forEach((field)=>{
    // Here we need to use Object.defineProperty because we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
        get () {
            const router = getRouter();
            return router[field];
        }
    });
});
coreMethodFields.forEach((field)=>{
    singletonRouter[field] = (...args)=>{
        const router = getRouter();
        return router[field](...args);
    };
});
routerEvents.forEach((event)=>{
    singletonRouter.ready(()=>{
        _router.default.events.on(event, (...args)=>{
            const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
            const _singletonRouter = singletonRouter;
            if (_singletonRouter[eventField]) {
                try {
                    _singletonRouter[eventField](...args);
                } catch (err) {
                    console.error(`Error when running the Router event: ${eventField}`);
                    console.error((0, _isError).default(err) ? `${err.message}\n${err.stack}` : err + '');
                }
            }
        });
    });
});
function getRouter() {
    if (!singletonRouter.router) {
        const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
        throw new Error(message);
    }
    return singletonRouter.router;
}
var _default = singletonRouter;
exports["default"] = _default;
function useRouter() {
    return _react.default.useContext(_routerContext.RouterContext);
}
function createRouter(...args) {
    singletonRouter.router = new _router.default(...args);
    singletonRouter.readyCallbacks.forEach((cb)=>cb()
    );
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
}
function makePublicRouterInstance(router) {
    const scopedRouter = router;
    const instance = {};
    for (const property of urlPropertyFields){
        if (typeof scopedRouter[property] === 'object') {
            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
            ;
            continue;
        }
        instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
    instance.events = _router.default.events;
    coreMethodFields.forEach((field)=>{
        instance[field] = (...args)=>{
            return scopedRouter[field](...args);
        };
    });
    return instance;
} //# sourceMappingURL=router.js.map


/***/ }),

/***/ 8599:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(6689);
var _requestIdleCallback = __webpack_require__(1424);
const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const unobserve = (0, _react).useRef();
    const [visible, setVisible] = (0, _react).useState(false);
    const [root, setRoot] = (0, _react).useState(rootRef ? rootRef.current : null);
    const setRef = (0, _react).useCallback((el)=>{
        if (unobserve.current) {
            unobserve.current();
            unobserve.current = undefined;
        }
        if (isDisabled || visible) return;
        if (el && el.tagName) {
            unobserve.current = observe(el, (isVisible)=>isVisible && setVisible(isVisible)
            , {
                root,
                rootMargin
            });
        }
    }, [
        isDisabled,
        root,
        rootMargin,
        visible
    ]);
    (0, _react).useEffect(()=>{
        if (!hasIntersectionObserver) {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true)
                );
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback)
                ;
            }
        }
    }, [
        visible
    ]);
    (0, _react).useEffect(()=>{
        if (rootRef) setRoot(rootRef.current);
    }, [
        rootRef
    ]);
    return [
        setRef,
        visible
    ];
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            let index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin
            );
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ''
    };
    let existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin
    );
    let instance;
    if (existing) {
        instance = observers.get(existing);
    } else {
        instance = observers.get(id);
        idList.push(id);
    }
    if (instance) {
        return instance;
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    observers.set(id, instance = {
        id,
        observer,
        elements
    });
    return instance;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 6920:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = withRouter;
var _react = _interopRequireDefault(__webpack_require__(6689));
var _router = __webpack_require__(2203);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function withRouter(ComposedComponent) {
    function WithRouterWrapper(props) {
        return(/*#__PURE__*/ _react.default.createElement(ComposedComponent, Object.assign({
            router: (0, _router).useRouter()
        }, props)));
    }
    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
    if (false) {}
    return WithRouterWrapper;
} //# sourceMappingURL=with-router.js.map


/***/ }),

/***/ 4000:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports["default"] = void 0;
var _normalizeTrailingSlash = __webpack_require__(6998);
var _routeLoader = __webpack_require__(8817);
var _isError = _interopRequireWildcard(__webpack_require__(274));
var _denormalizePagePath = __webpack_require__(562);
var _normalizeLocalePath = __webpack_require__(4014);
var _mitt = _interopRequireDefault(__webpack_require__(8020));
var _utils = __webpack_require__(9232);
var _isDynamic = __webpack_require__(1428);
var _parseRelativeUrl = __webpack_require__(1292);
var _querystring = __webpack_require__(979);
var _resolveRewrites = _interopRequireDefault(__webpack_require__(6052));
var _routeMatcher = __webpack_require__(4226);
var _routeRegex = __webpack_require__(5052);
var _getMiddlewareRegex = __webpack_require__(4365);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};
        if (obj != null) {
            for(var key in obj){
                if (Object.prototype.hasOwnProperty.call(obj, key)) {
                    var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};
                    if (desc.get || desc.set) {
                        Object.defineProperty(newObj, key, desc);
                    } else {
                        newObj[key] = obj[key];
                    }
                }
            }
        }
        newObj.default = obj;
        return newObj;
    }
}
let detectDomainLocale;
if (false) {}
const basePath =  false || '';
function buildCancellationError() {
    return Object.assign(new Error('Route Cancelled'), {
        cancelled: true
    });
}
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const pathname = pathNoQueryHash(path);
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash(`${prefix}${pathname}`) + path.substr(pathname.length);
}
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
function addLocale(path, locale, defaultLocale) {
    if (false) {}
    return path;
}
function delLocale(path, locale) {
    if (false) {}
    return path;
}
function pathNoQueryHash(path) {
    const queryIndex = path.indexOf('?');
    const hashIndex = path.indexOf('#');
    if (queryIndex > -1 || hashIndex > -1) {
        path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
    }
    return path;
}
function hasBasePath(path) {
    path = pathNoQueryHash(path);
    return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
    // we only add the basepath on relative urls
    return addPathPrefix(path, basePath);
}
function delBasePath(path) {
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = `/${path}`;
    return path;
}
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
    } catch (_) {
        return false;
    }
}
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = '';
    const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || '';
        const { repeat , optional  } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = `[${repeat ? '...' : ''}${param}]`;
        if (optional) {
            replaced = `${!value ? '/' : ''}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)
        ).join('/') : encodeURIComponent(value)) || '/');
    })) {
        interpolatedRoute = '' // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
}
function omitParmsFromQuery(query, params) {
    const filteredQuery = {};
    Object.keys(query).forEach((key)=>{
        if (!params.includes(key)) {
            filteredQuery[key] = query[key];
        }
    });
    return filteredQuery;
}
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split('?');
    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL('/', 'http://n');
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = '';
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
            const { result , params  } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _utils).formatWithValidation({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: omitParmsFromQuery(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_1) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
function stripOrigin(url) {
    const origin = (0, _utils).getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
    const origin = (0, _utils).getLocationOrigin();
    const hrefHadOrigin = resolvedHref.startsWith(origin);
    const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
    const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}
const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');
function fetchRetry(url, attempts, opts) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: 'same-origin'
    }).then((res)=>{
        if (!res.ok) {
            if (attempts > 1 && res.status >= 500) {
                return fetchRetry(url, attempts - 1, opts);
            }
            if (res.status === 404) {
                return res.json().then((data)=>{
                    if (data.notFound) {
                        return {
                            notFound: SSG_DATA_NOT_FOUND
                        };
                    }
                    throw new Error(`Failed to load static props`);
                });
            }
            throw new Error(`Failed to load static props`);
        }
        return opts.text ? res.text() : res.json();
    });
}
function fetchNextData(dataHref, isServerRender, text, inflightCache, persistCache) {
    const { href: cacheKey  } = new URL(dataHref, window.location.href);
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = fetchRetry(dataHref, isServerRender ? 3 : 1, {
        text
    }).catch((err)=>{
        // We should only trigger a server-side transition if this was caused
        // on a client-side transition. Otherwise, we'd get into an infinite
        // loop.
        if (!isServerRender) {
            (0, _routeLoader).markAssetError(err);
        }
        throw err;
    }).then((data)=>{
        if (!persistCache || "production" !== 'production') {
            delete inflightCache[cacheKey];
        }
        return data;
    }).catch((err)=>{
        delete inflightCache[cacheKey];
        throw err;
    });
}
class Router {
    constructor(pathname1, query1, as1, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview  }){
        // Static Data Cache
        this.sdc = {};
        // In-flight Server Data Requests, for deduping
        this.sdr = {};
        // In-flight middleware preflight requests
        this.sde = {};
        this._idx = 0;
        this.onPopState = (e)=>{
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname , query  } = this;
                this.changeState('replaceState', (0, _utils).formatWithValidation({
                    pathname: addBasePath(pathname),
                    query
                }), (0, _utils).getURL());
                return;
            }
            if (!state.__N) {
                return;
            }
            let forcedScroll;
            const { url , as , options , idx  } = state;
            if (false) {}
            this._idx = idx;
            const { pathname  } = (0, _parseRelativeUrl).parseRelativeUrl(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === addBasePath(this.asPath) && pathname === addBasePath(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change('replaceState', url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname1 !== '/_error') {
            var ref;
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP,
                __N_RSC: !!((ref = Component) === null || ref === void 0 ? void 0 : ref.__next_rsc__)
            };
        }
        this.components['/_app'] = {
            Component: App,
            styleSheets: []
        };
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath = basePath;
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
        if (false) {}
        this.state = {
            route,
            pathname: pathname1,
            query: query1,
            asPath: autoExportDynamic ? pathname1 : as1,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        if (false) {}
    }
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options = {}) {
        if (false) {}
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change('pushState', url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options = {}) {
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change('replaceState', url, as, options);
    }
    async change(method, url, as, options, forcedScroll) {
        if (!isLocalURL(url)) {
            window.location.href = url;
            return false;
        }
        const shouldResolveHref = options._h || options._shouldResolveHref || pathNoQueryHash(url) === pathNoQueryHash(as);
        const nextState = {
            ...this.state
        };
        // for static pages with query params in the URL we delay
        // marking the router ready until after the query is updated
        if (options._h) {
            this.isReady = true;
        }
        const prevLocale = nextState.locale;
        if (false) { var ref; }
        if (!options._h) {
            this.isSsr = false;
        }
        // marking route changes as a navigation start entry
        if (_utils.ST) {
            performance.mark('routeChange');
        }
        const { shallow =false , scroll =true  } = options;
        const routeProps = {
            shallow
        };
        if (this._inFlightRoute) {
            this.abortComponentLoad(this._inFlightRoute, routeProps);
        }
        as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
        const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, nextState.locale);
        this._inFlightRoute = as;
        let localeChange = prevLocale !== nextState.locale;
        // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.
        if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
            nextState.asPath = cleanedAs;
            Router.events.emit('hashChangeStart', as, routeProps);
            // TODO: do we need the resolved href when only a hash change?
            this.changeState(method, url, as, {
                ...options,
                scroll: false
            });
            if (scroll) {
                this.scrollToHash(cleanedAs);
            }
            this.set(nextState, this.components[nextState.route], null);
            Router.events.emit('hashChangeComplete', as, routeProps);
            return true;
        }
        let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
        let { pathname , query  } = parsed;
        // The build manifest needs to be loaded before auto-static dynamic pages
        // get their query parameters to allow ensuring they can be parsed properly
        // when rewritten to
        let pages, rewrites;
        try {
            [pages, { __rewrites: rewrites  }] = await Promise.all([
                this.pageLoader.getPageList(),
                (0, _routeLoader).getClientBuildManifest(),
                this.pageLoader.getMiddlewareList(), 
            ]);
        } catch (err) {
            // If we fail to resolve the page list or client-build manifest, we must
            // do a server-side transition:
            window.location.href = as;
            return false;
        }
        // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url
        if (!this.urlIsNew(cleanedAs) && !localeChange) {
            method = 'replaceState';
        }
        // we need to resolve the as value using rewrites for dynamic SSG
        // pages to allow building the data URL correctly
        let resolvedAs = as;
        // url and as should always be prefixed with basePath by this
        // point by either next/link or router.push/replace so strip the
        // basePath from the pathname to match the pages dir 1-to-1
        pathname = pathname ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname)) : pathname;
        if (shouldResolveHref && pathname !== '/_error') {
            options._shouldResolveHref = true;
            if (false) {} else {
                parsed.pathname = resolveDynamicRoute(pathname, pages);
                if (parsed.pathname !== pathname) {
                    pathname = parsed.pathname;
                    parsed.pathname = addBasePath(pathname);
                    url = (0, _utils).formatWithValidation(parsed);
                }
            }
        }
        if (!isLocalURL(as)) {
            if (false) {}
            window.location.href = as;
            return false;
        }
        resolvedAs = delLocale(delBasePath(resolvedAs), nextState.locale);
        /**
     * If the route update was triggered for client-side hydration and
     * the rendered route is not dynamic do not check the preflight
     * request as it is not necessary.
     */ if (options._h !== 1 || (0, _isDynamic).isDynamicRoute((0, _normalizeTrailingSlash).removePathTrailingSlash(pathname))) {
            const effect = await this._preflightRequest({
                as,
                cache: "production" === 'production',
                pages,
                pathname,
                query,
                locale: nextState.locale,
                isPreview: nextState.isPreview
            });
            if (effect.type === 'rewrite') {
                query = {
                    ...query,
                    ...effect.parsedAs.query
                };
                resolvedAs = effect.asPath;
                pathname = effect.resolvedHref;
                parsed.pathname = effect.resolvedHref;
                url = (0, _utils).formatWithValidation(parsed);
            } else if (effect.type === 'redirect' && effect.newAs) {
                return this.change(method, effect.newUrl, effect.newAs, options);
            } else if (effect.type === 'redirect' && effect.destination) {
                window.location.href = effect.destination;
                return new Promise(()=>{});
            } else if (effect.type === 'refresh' && as !== window.location.pathname) {
                window.location.href = as;
                return new Promise(()=>{});
            }
        }
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
        if ((0, _isDynamic).isDynamicRoute(route)) {
            const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
            const asPathname = parsedAs.pathname;
            const routeRegex = (0, _routeRegex).getRouteRegex(route);
            const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
            const shouldInterpolate = route === asPathname;
            const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
            if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param]
                );
                if (missingParams.length > 0) {
                    if (false) {}
                    throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
                }
            } else if (shouldInterpolate) {
                as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params)
                }));
            } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
            }
        }
        Router.events.emit('routeChangeStart', as, routeProps);
        try {
            var ref, ref1;
            let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps, nextState.locale, nextState.isPreview);
            let { error , props , __N_SSG , __N_SSP  } = routeInfo;
            // handle redirect on client-transition
            if ((__N_SSG || __N_SSP) && props) {
                if (props.pageProps && props.pageProps.__N_REDIRECT) {
                    const destination = props.pageProps.__N_REDIRECT;
                    // check if destination is internal (resolves to a page) and attempt
                    // client-navigation if it is falling back to hard navigation if
                    // it's not
                    if (destination.startsWith('/') && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                        const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                        parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                        const { url: newUrl , as: newAs  } = prepareUrlAs(this, destination, destination);
                        return this.change(method, newUrl, newAs, options);
                    }
                    window.location.href = destination;
                    return new Promise(()=>{});
                }
                nextState.isPreview = !!props.__N_PREVIEW;
                // handle SSG data 404
                if (props.notFound === SSG_DATA_NOT_FOUND) {
                    let notFoundRoute;
                    try {
                        await this.fetchComponent('/404');
                        notFoundRoute = '/404';
                    } catch (_) {
                        notFoundRoute = '/_error';
                    }
                    routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
                        shallow: false
                    }, nextState.locale, nextState.isPreview);
                }
            }
            Router.events.emit('beforeHistoryChange', as, routeProps);
            this.changeState(method, url, as, options);
            if (options._h && pathname === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
                // ensure statusCode is still correct for static 500 page
                // when updating query information
                props.pageProps.statusCode = 500;
            }
            // shallow routing is only allowed for same page URL changes.
            const isValidShallowRoute = options.shallow && nextState.route === route;
            var _scroll;
            const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
            const resetScroll = shouldScroll ? {
                x: 0,
                y: 0
            } : null;
            await this.set({
                ...nextState,
                route,
                pathname,
                query,
                asPath: cleanedAs,
                isFallback: false
            }, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch((e)=>{
                if (e.cancelled) error = error || e;
                else throw e;
            });
            if (error) {
                Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
                throw error;
            }
            if (false) {}
            Router.events.emit('routeChangeComplete', as, routeProps);
            return true;
        } catch (err1) {
            if ((0, _isError).default(err1) && err1.cancelled) {
                return false;
            }
            throw err1;
        }
    }
    changeState(method, url, as, options = {}) {
        if (false) {}
        if (method !== 'pushState' || (0, _utils).getURL() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            '', as);
        }
    }
    async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        if (err.cancelled) {
            // bubble up cancellation errors
            throw err;
        }
        if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
            Router.events.emit('routeChangeError', err, as, routeProps);
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as;
            // Changing the URL doesn't block executing the current code path.
            // So let's throw a cancellation error stop the routing logic.
            throw buildCancellationError();
        }
        try {
            let Component;
            let styleSheets;
            let props;
            if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
                ({ page: Component , styleSheets  } = await this.fetchComponent('/_error'));
            }
            const routeInfo = {
                props,
                Component,
                styleSheets,
                err,
                error: err
            };
            if (!routeInfo.props) {
                try {
                    routeInfo.props = await this.getInitialProps(Component, {
                        err,
                        pathname,
                        query
                    });
                } catch (gipErr) {
                    console.error('Error in error page `getInitialProps`: ', gipErr);
                    routeInfo.props = {};
                }
            }
            return routeInfo;
        } catch (routeInfoErr) {
            return this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ''), pathname, query, as, routeProps, true);
        }
    }
    async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps, locale, isPreview) {
        try {
            const existingRouteInfo = this.components[route];
            if (routeProps.shallow && existingRouteInfo && this.route === route) {
                return existingRouteInfo;
            }
            let cachedRouteInfo = undefined;
            // can only use non-initial route info
            // cannot reuse route info in development since it can change after HMR
            if ( true && existingRouteInfo && !('initial' in existingRouteInfo)) {
                cachedRouteInfo = existingRouteInfo;
            }
            const routeInfo = cachedRouteInfo || await this.fetchComponent(route).then((res)=>({
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP,
                    __N_RSC: !!res.page.__next_rsc__
                })
            );
            const { Component , __N_SSG , __N_SSP , __N_RSC  } = routeInfo;
            if (false) {}
            let dataHref;
            if (__N_SSG || __N_SSP || __N_RSC) {
                dataHref = this.pageLoader.getDataHref({
                    href: (0, _utils).formatWithValidation({
                        pathname,
                        query
                    }),
                    asPath: resolvedAs,
                    ssg: __N_SSG,
                    rsc: __N_RSC,
                    locale
                });
            }
            const props = await this._getData(()=>__N_SSG || __N_SSP ? fetchNextData(dataHref, this.isSsr, false, __N_SSG ? this.sdc : this.sdr, !!__N_SSG && !isPreview) : this.getInitialProps(Component, {
                    pathname,
                    query,
                    asPath: as,
                    locale,
                    locales: this.locales,
                    defaultLocale: this.defaultLocale
                })
            );
            if (__N_RSC) {
                const { fresh , data  } = await this._getData(()=>this._getFlightData(dataHref)
                );
                props.pageProps = Object.assign(props.pageProps, {
                    __flight_serialized__: data,
                    __flight_fresh__: fresh
                });
            }
            routeInfo.props = props;
            this.components[route] = routeInfo;
            return routeInfo;
        } catch (err) {
            return this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
        }
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components['/_app'].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split('#');
        const [newUrlNoHash, newHash] = as.split('#');
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ''] = as.split('#');
        // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers
        if (hash === '' || hash === 'top') {
            window.scrollTo(0, 0);
            return;
        }
        // First we check if the element by id is found
        const idEl = document.getElementById(hash);
        if (idEl) {
            idEl.scrollIntoView();
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(hash)[0];
        if (nameEl) {
            nameEl.scrollIntoView();
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ async prefetch(url, asPath = url, options = {}) {
        let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
        let { pathname , query  } = parsed;
        if (false) {}
        const pages = await this.pageLoader.getPageList();
        let resolvedAs = asPath;
        if (false) {} else {
            parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
            if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                url = (0, _utils).formatWithValidation(parsed);
            }
        }
        // Prefetch is not supported in development mode because it would trigger on-demand-entries
        if (false) {}
        const effects = await this._preflightRequest({
            as: addBasePath(asPath),
            cache: true,
            pages,
            pathname,
            query,
            locale: this.locale,
            isPreview: this.isPreview
        });
        if (effects.type === 'rewrite') {
            parsed.pathname = effects.resolvedHref;
            pathname = effects.resolvedHref;
            query = {
                ...query,
                ...effects.parsedAs.query
            };
            resolvedAs = effects.asPath;
            url = (0, _utils).formatWithValidation(parsed);
        }
        const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
        await Promise.all([
            this.pageLoader._isSsg(route).then((isSsg)=>{
                return isSsg ? fetchNextData(this.pageLoader.getDataHref({
                    href: url,
                    asPath: resolvedAs,
                    ssg: true,
                    locale: typeof options.locale !== 'undefined' ? options.locale : this.locale
                }), false, false, this.sdc, true) : false;
            }),
            this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route), 
        ]);
    }
    async fetchComponent(route) {
        let cancelled = false;
        const cancel = this.clc = ()=>{
            cancelled = true;
        };
        const handleCancelled = ()=>{
            if (cancelled) {
                const error = new Error(`Abort fetching component for route: "${route}"`);
                error.cancelled = true;
                throw error;
            }
            if (cancel === this.clc) {
                this.clc = null;
            }
        };
        try {
            const componentResult = await this.pageLoader.loadPage(route);
            handleCancelled();
            return componentResult;
        } catch (err) {
            handleCancelled();
            throw err;
        }
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error('Loading initial props cancelled');
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData(dataHref, true, true, this.sdc, false).then((serialized)=>{
            return {
                fresh: true,
                data: serialized
            };
        });
    }
    async _preflightRequest(options) {
        const cleanedAs = delLocale(hasBasePath(options.as) ? delBasePath(options.as) : options.as, options.locale);
        const fns = await this.pageLoader.getMiddlewareList();
        const requiresPreflight = fns.some(([middleware, isSSR])=>{
            return (0, _routeMatcher).getRouteMatcher((0, _getMiddlewareRegex).getMiddlewareRegex(middleware, !isSSR))(cleanedAs);
        });
        if (!requiresPreflight) {
            return {
                type: 'next'
            };
        }
        const preflight = await this._getPreflightData({
            preflightHref: options.as,
            shouldCache: options.cache,
            isPreview: options.isPreview
        });
        if (preflight.rewrite) {
            // for external rewrites we need to do a hard navigation
            // to the resource
            if (!preflight.rewrite.startsWith('/')) {
                return {
                    type: 'redirect',
                    destination: options.as
                };
            }
            const parsed = (0, _parseRelativeUrl).parseRelativeUrl((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.rewrite) ? delBasePath(preflight.rewrite) : preflight.rewrite, this.locales).pathname);
            const fsPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash(parsed.pathname);
            let matchedPage;
            let resolvedHref;
            if (options.pages.includes(fsPathname)) {
                matchedPage = true;
                resolvedHref = fsPathname;
            } else {
                resolvedHref = resolveDynamicRoute(fsPathname, options.pages);
                if (resolvedHref !== parsed.pathname && options.pages.includes(resolvedHref)) {
                    matchedPage = true;
                }
            }
            return {
                type: 'rewrite',
                asPath: parsed.pathname,
                parsedAs: parsed,
                matchedPage,
                resolvedHref
            };
        }
        if (preflight.redirect) {
            if (preflight.redirect.startsWith('/')) {
                const cleanRedirect = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath(hasBasePath(preflight.redirect) ? delBasePath(preflight.redirect) : preflight.redirect, this.locales).pathname);
                const { url: newUrl , as: newAs  } = prepareUrlAs(this, cleanRedirect, cleanRedirect);
                return {
                    type: 'redirect',
                    newUrl,
                    newAs
                };
            }
            return {
                type: 'redirect',
                destination: preflight.redirect
            };
        }
        // For SSR requests, they will be handled like normal pages.
        if (preflight.refresh && !preflight.ssr) {
            return {
                type: 'refresh'
            };
        }
        return {
            type: 'next'
        };
    }
    _getPreflightData(params) {
        const { preflightHref , shouldCache =false , isPreview  } = params;
        const { href: cacheKey  } = new URL(preflightHref, window.location.href);
        if ( true && !isPreview && shouldCache && this.sde[cacheKey]) {
            return Promise.resolve(this.sde[cacheKey]);
        }
        return fetch(preflightHref, {
            method: 'HEAD',
            credentials: 'same-origin',
            headers: {
                'x-middleware-preflight': '1'
            }
        }).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to preflight request`);
            }
            return {
                cache: res.headers.get('x-middleware-cache'),
                redirect: res.headers.get('Location'),
                refresh: res.headers.has('x-middleware-refresh'),
                rewrite: res.headers.get('x-middleware-rewrite'),
                ssr: !!res.headers.get('x-middleware-ssr')
            };
        }).then((data)=>{
            if (shouldCache && data.cache !== 'no-cache') {
                this.sde[cacheKey] = data;
            }
            return data;
        }).catch((err)=>{
            delete this.sde[cacheKey];
            throw err;
        });
    }
    getInitialProps(Component, ctx) {
        const { Component: App  } = this.components['/_app'];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    abortComponentLoad(as, routeProps) {
        if (this.clc) {
            Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
            this.clc();
            this.clc = null;
        }
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
}
Router.events = (0, _mitt).default();
exports["default"] = Router; //# sourceMappingURL=router.js.map


/***/ }),

/***/ 9097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(1088)


/***/ })

};
;