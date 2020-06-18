module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/elements/AppBar/component.js":
/*!*************************************************!*\
  !*** ./components/elements/AppBar/component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AppBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _elements_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/Search */ "./components/elements/Search/index.js");
/* harmony import */ var _material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/AddOutlined */ "@material-ui/icons/AddOutlined");
/* harmony import */ var _material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function AppBar(props) {
  const {
    classes,
    handleClickAdd,
    handleChange
  } = props;
  return __jsx("div", {
    className: classes.display
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Typography"], {
    className: classes.title,
    variant: "h4"
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: classes.link,
    href: '/'
  }, "A Job Thing"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    className: classes.rightObject
  }, __jsx(_elements_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
    handleChange: handleChange
  }), __jsx("button", {
    className: classes.button,
    onClick: () => handleClickAdd()
  }, __jsx(_material_ui_icons_AddOutlined__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.icon
  }))));
}
AppBar.defaultProps = {
  handleClickAdd: () => {},
  handleChange: () => {}
};
AppBar.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  handleClickAdd: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./components/elements/AppBar/index.js":
/*!*********************************************!*\
  !*** ./components/elements/AppBar/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./components/elements/AppBar/component.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/elements/AppBar/styles.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./components/elements/AppBar/styles.js":
/*!**********************************************!*\
  !*** ./components/elements/AppBar/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  '@media screen and (max-width: 768px)': {
    display: {
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: 20,
      paddingRight: 20,
      textAlign: 'center'
    },
    rightObject: {
      width: '100%'
    }
  },
  display: {
    display: 'flex'
  },
  title: {
    color: 'white',
    marginLeft: 20,
    marginTop: 7
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  icon: {
    color: '#f48fb1'
  },
  button: {
    border: '1px solid rgb(24, 51, 88)',
    borderRadius: 5,
    backgroundColor: '#303030',
    height: 38,
    textTransform: 'none',
    textAlign: 'right',
    color: 'white',
    margin: 8
  },
  rightObject: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: '10px',
    marginLeft: 'auto'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/elements/CardDetails/component.js":
/*!******************************************************!*\
  !*** ./components/elements/CardDetails/component.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CardDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardHeader */ "@material-ui/core/CardHeader");
/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ "@material-ui/icons/ExpandMore");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_icons_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/LocationOnOutlined */ "@material-ui/icons/LocationOnOutlined");
/* harmony import */ var _material_ui_icons_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_QueryBuilderOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/QueryBuilderOutlined */ "@material-ui/icons/QueryBuilderOutlined");
/* harmony import */ var _material_ui_icons_QueryBuilderOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_QueryBuilderOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/VisibilityOutlined */ "@material-ui/icons/VisibilityOutlined");
/* harmony import */ var _material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_PhoneEnabledOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/PhoneEnabledOutlined */ "@material-ui/icons/PhoneEnabledOutlined");
/* harmony import */ var _material_ui_icons_PhoneEnabledOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneEnabledOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ChatOutlined */ "@material-ui/icons/ChatOutlined");
/* harmony import */ var _material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/EmailOutlined */ "@material-ui/icons/EmailOutlined");
/* harmony import */ var _material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



















function CardDetails(props) {
  const {
    classes,
    title,
    location,
    description,
    type,
    contact,
    requirements,
    company,
    responsibilities,
    benefit,
    nationality,
    views
  } = props;
  const {
    0: expanded,
    1: setExpanded
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.root
  }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_3___default.a, {
    avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_7___default.a, {
      "aria-label": "logo",
      className: classes.avatar
    }, "A"),
    action: __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
      variant: "body2",
      className: classes.display
    }, __jsx(_material_ui_icons_QueryBuilderOutlined__WEBPACK_IMPORTED_MODULE_13___default.a, {
      className: classes.icon
    }), type), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
      variant: "body2",
      className: classes.display
    }, __jsx(_material_ui_icons_VisibilityOutlined__WEBPACK_IMPORTED_MODULE_14___default.a, {
      className: classes.icon
    }), views)),
    title: __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
      variant: "h5"
    }, title), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
      variant: "body1"
    }, company)),
    subheader: __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.display,
      variant: "body2"
    }, __jsx(_material_ui_icons_LocationOnOutlined__WEBPACK_IMPORTED_MODULE_12___default.a, {
      className: classes.icon
    }), location)
  }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2"
  }, description), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.list,
    variant: "body2"
  }, "Language:", __jsx("ul", null, requirements.language.map((item, id) => {
    return __jsx("li", {
      key: id
    }, item);
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2"
  }, "Requirements:", __jsx("ul", null, requirements.items.map((item, id) => {
    return __jsx("li", {
      key: id
    }, item);
  }))), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "body2"
  }, "Nationality: ", nationality)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_18__["Grid"], {
    className: classes.collapse
  }, __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5___default.a, {
    disableSpacing: true
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, null, "Open for details", __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.expand, {
      [classes.expandOpen]: expanded
    }),
    onClick: handleExpandClick,
    "aria-expanded": expanded,
    "aria-label": "show more"
  }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default.a, null)))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_6___default.a, {
    in: expanded,
    timeout: "auto",
    unmountOnExit: true
  }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.text,
    variant: "body2"
  }, "Responsibilities"), __jsx("ul", null, responsibilities.map((item, id) => {
    return __jsx("li", {
      key: id
    }, item);
  }))), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.text,
    variant: "body2"
  }, "Benefit"), __jsx("ul", null, benefit.map((item, id) => {
    return __jsx("li", {
      key: id
    }, item);
  })))), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.contact
  }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.display,
    variant: "body2"
  }, __jsx(_material_ui_icons_PhoneEnabledOutlined__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: classes.icon
  }), ' ', contact.phone), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.display,
    variant: "body2"
  }, __jsx(_material_ui_icons_ChatOutlined__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: classes.icon
  }), " ", contact.whatsapp), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.display,
    variant: "body2"
  }, __jsx(_material_ui_icons_EmailOutlined__WEBPACK_IMPORTED_MODULE_17___default.a, {
    className: classes.icon
  }), " ", contact.email))));
}
CardDetails.defaultProps = {
  title: 'Text',
  company: 'Text',
  location: 'Text',
  type: 'Text',
  description: 'Text',
  language: ['Text', 'Text'],
  items: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text'],
  responsibilities: ['Text', 'Text', 'Text', 'Text'],
  benefit: ['Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text', 'Text'],
  nationality: 'Text',
  views: 0,
  contact: {
    phone: '',
    whatsapp: '',
    email: ''
  },
  requirements: {
    language: ['Text', 'Text'],
    items: ['Text', 'Text']
  }
};
CardDetails.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  company: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  type: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  location: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  language: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string),
  items: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string),
  responsibilities: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string),
  benefit: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string),
  nationality: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
  views: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.number,
  contact: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    phone: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    whatsapp: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string,
    email: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string
  }),
  requirements: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.shape({
    language: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string),
    items: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.string)
  })
};

/***/ }),

/***/ "./components/elements/CardDetails/index.js":
/*!**************************************************!*\
  !*** ./components/elements/CardDetails/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./components/elements/CardDetails/component.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/elements/CardDetails/styles.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./components/elements/CardDetails/styles.js":
/*!***************************************************!*\
  !*** ./components/elements/CardDetails/styles.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  '@media screen and (max-width: 768px)': {
    root: {
      maxWidth: '320px !important',
      margin: 5
    },
    contact: {
      flexWrap: 'wrap'
    }
  },
  root: {
    width: 960,
    backgroundColor: '#303030',
    color: 'white',
    textAlign: 'left',
    padding: 10,
    marginTop: 20
  },
  collapse: {
    padding: 10,
    paddingBottom: 0
  },
  list: {
    marginTop: 10
  },
  text: {
    marginTop: -10
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9

  },
  header: {
    color: 'white'
  },
  expand: {
    transform: 'rotate(0deg)',
    color: 'white',
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: '#f48fb1'
  },
  display: {
    display: 'flex'
  },
  icon: {
    color: '#f48fb1',
    marginLeft: -5,
    marginRight: 5
  },
  contact: {
    display: 'flex',
    justifyContent: 'space-between'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/elements/Footer/component.js":
/*!*************************************************!*\
  !*** ./components/elements/Footer/component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Footer(props) {
  const {
    year,
    classes
  } = props;
  return __jsx("div", {
    className: classes.footer
  }, "Made by", ' ', __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: classes.link,
    href: "https://github.com/krnwbsn"
  }, "Krina Wibisana"), ' ', year);
}
Footer.defaultProps = {
  year: 2020
};
Footer.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  year: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};

/***/ }),

/***/ "./components/elements/Footer/index.js":
/*!*********************************************!*\
  !*** ./components/elements/Footer/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./components/elements/Footer/component.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/elements/Footer/styles.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./components/elements/Footer/styles.js":
/*!**********************************************!*\
  !*** ./components/elements/Footer/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  footer: {
    marginTop: 240,
    marginBottom: 20
  },
  link: {
    color: '#f48fb1',
    textDecoration: 'none'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/elements/Search/component.js":
/*!*************************************************!*\
  !*** ./components/elements/Search/component.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Search; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Search(props) {
  const {
    classes,
    label,
    handleChange
  } = props;
  return __jsx("div", null, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__["TextField"], {
    className: classes.search,
    id: "outlined-basic",
    label: label,
    margin: "dense",
    onChange: handleChange,
    placeholder: "Search",
    variant: "outlined"
  }));
}
Search.defaultProps = {
  label: '',
  handleChange: () => {}
};
Search.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  handleChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./components/elements/Search/index.js":
/*!*********************************************!*\
  !*** ./components/elements/Search/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./components/elements/Search/component.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/elements/Search/styles.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./components/elements/Search/styles.js":
/*!**********************************************!*\
  !*** ./components/elements/Search/styles.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  search: {
    background: 'white',
    color: 'grey',
    height: '38px',
    width: '200px',
    borderRadius: 5
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./components/pages/JobDetails/actions.js":
/*!************************************************!*\
  !*** ./components/pages/JobDetails/actions.js ***!
  \************************************************/
/*! exports provided: getDataById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDataById", function() { return getDataById; });
/* harmony import */ var _configs_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../configs/services */ "./configs/services.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


const getDataById = async id => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(`${_configs_services__WEBPACK_IMPORTED_MODULE_0__["default"].GET_JOB_BY_ID(id)}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

/***/ }),

/***/ "./components/pages/JobDetails/component.js":
/*!**************************************************!*\
  !*** ./components/pages/JobDetails/component.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return JobDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_AppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/AppBar */ "./components/elements/AppBar/index.js");
/* harmony import */ var _elements_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/Footer */ "./components/elements/Footer/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _elements_CardDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/CardDetails */ "./components/elements/CardDetails/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./actions */ "./components/pages/JobDetails/actions.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function JobDetails(props) {
  const {
    0: data,
    1: setData
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    loadDataById();
  }, []);

  const loadDataById = async () => {
    const {
      id
    } = next_router__WEBPACK_IMPORTED_MODULE_6___default.a.query;
    const data = await Object(_actions__WEBPACK_IMPORTED_MODULE_7__["getDataById"])(id);
    setData(data);
  };

  const {
    classes
  } = props;

  const handleBack = () => {
    next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/');
  }; // console.log(data.requirements.items);


  return __jsx("div", {
    className: classes.root
  }, __jsx("div", {
    className: classes.bar
  }, __jsx("div", null, __jsx(_elements_AppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    handleClickLink: handleBack
  })), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
    container: true,
    justify: "center"
  }, __jsx(_elements_CardDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: data.title,
    company: data.company,
    location: data.location,
    type: data.type,
    description: data.description,
    contact: data.employer_contact,
    requirements: data.requirements,
    responsibilities: data.responsibilites,
    benefit: data.benefit,
    nationality: data.nationality,
    views: data.views
  })), __jsx(_elements_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
}
JobDetails.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};

/***/ }),

/***/ "./components/pages/JobDetails/index.js":
/*!**********************************************!*\
  !*** ./components/pages/JobDetails/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component */ "./components/pages/JobDetails/component.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./components/pages/JobDetails/styles.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["withStyles"])(_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(_component__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./components/pages/JobDetails/styles.js":
/*!***********************************************!*\
  !*** ./components/pages/JobDetails/styles.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#121212'
  },
  bar: {
    paddingTop: 20,
    textAlign: 'center',
    backgroundColor: '#121212',
    color: 'white'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (styles);

/***/ }),

/***/ "./configs/services.js":
/*!*****************************!*\
  !*** ./configs/services.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const API_URL = 'http://private-27298f-frontendtestmaukerja.apiary-mock.com';
const services = {
  GET_JOB_LIST: `${API_URL}/jobs`,
  CREATE_JOB_LIST: `${API_URL}/jobs`,
  GET_JOB_BY_ID: id => `${API_URL}/job/${id}`,
  UPDATE_JOB_BY_ID: id => `${API_URL}/job/${id}`,
  REMOVE_JOB: id => `${API_URL}/job/${id}`
};
/* harmony default export */ __webpack_exports__["default"] = (services);

/***/ }),

/***/ "./pages/jobdetails/[id].js":
/*!**********************************!*\
  !*** ./pages/jobdetails/[id].js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_pages_JobDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/pages/JobDetails */ "./components/pages/JobDetails/index.js");

/* harmony default export */ __webpack_exports__["default"] = (_components_pages_JobDetails__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ 4:
/*!****************************************!*\
  !*** multi ./pages/jobdetails/[id].js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/krinawibisana/Documents/ajobthing-test/src/pages/jobdetails/[id].js */"./pages/jobdetails/[id].js");


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardHeader":
/*!***********************************************!*\
  !*** external "@material-ui/core/CardHeader" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardHeader");

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Collapse");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/AddOutlined":
/*!*************************************************!*\
  !*** external "@material-ui/icons/AddOutlined" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/AddOutlined");

/***/ }),

/***/ "@material-ui/icons/ChatOutlined":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ChatOutlined" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ChatOutlined");

/***/ }),

/***/ "@material-ui/icons/EmailOutlined":
/*!***************************************************!*\
  !*** external "@material-ui/icons/EmailOutlined" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/EmailOutlined");

/***/ }),

/***/ "@material-ui/icons/ExpandMore":
/*!************************************************!*\
  !*** external "@material-ui/icons/ExpandMore" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "@material-ui/icons/LocationOnOutlined":
/*!********************************************************!*\
  !*** external "@material-ui/icons/LocationOnOutlined" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/LocationOnOutlined");

/***/ }),

/***/ "@material-ui/icons/PhoneEnabledOutlined":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/PhoneEnabledOutlined" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/PhoneEnabledOutlined");

/***/ }),

/***/ "@material-ui/icons/QueryBuilderOutlined":
/*!**********************************************************!*\
  !*** external "@material-ui/icons/QueryBuilderOutlined" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/QueryBuilderOutlined");

/***/ }),

/***/ "@material-ui/icons/VisibilityOutlined":
/*!********************************************************!*\
  !*** external "@material-ui/icons/VisibilityOutlined" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/VisibilityOutlined");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map