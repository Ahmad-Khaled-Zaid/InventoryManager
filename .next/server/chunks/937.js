"use strict";
exports.id = 937;
exports.ids = [937];
exports.modules = {

/***/ 568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Header(props) {
  const logout = () => {
    localStorage.removeItem("accessToken");
    window.location.href = '/Login';
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
    className: "flex justify-between px-4 py-3 bg-green-500 text-gray-50 dark:bg-gray-800",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "flex justify-between font-serif text-3xl font-bold",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: "items-center mr-1 rounded-lg",
        width: 65,
        src: "https://icon-library.com/images/inventory-management-icon/inventory-management-icon-7.jpg"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "mt-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: " INVENTER "
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "font-sans text-xs font-bold text-green-800",
          children: " Management System "
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        onClick: logout,
        type: "submit",
        className: "inline-block px-8 py-2 mt-2 font-semibold text-white bg-green-500 border-2 border-white rounded-full hover:bg-white hover:border-green-500 hover:text-green-500 ",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          children: "Logout"
        })
      })
    })]
  });
}

/***/ }),

/***/ 135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SideBar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);


function SideBar() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("aside", {
    class: "w-64",
    "aria-label": "Sidebar",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      class: "overflow-y-auto py-4 px-3 bg-white rounded dark:bg-gray-800 w-60 h-full shadow-md absolute ",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
        class: "space-y-2",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "\\",
            class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-500 hover:text-white",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
              "aria-hidden": "true",
              class: "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-white dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              class: "ml-3",
              children: "Dashboard"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "Inventory",
            class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-500 hover:text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
              "aria-hidden": "true",
              class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              class: "flex-1 ml-3 whitespace-nowrap",
              children: "Inventory"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "Invoices",
            class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-500 hover:text-white",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
              "aria-hidden": "true",
              class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              class: "flex-1 ml-3 whitespace-nowrap",
              children: "Invoices"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "Users",
            class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-500 hover:text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
              "aria-hidden": "true",
              class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                d: "M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z",
                "clip-rule": "evenodd"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              class: "flex-1 ml-3 whitespace-nowrap",
              children: "Users"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "Shop",
            class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-500 hover:text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
              "aria-hidden": "true",
              class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                d: "M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z",
                "clip-rule": "evenodd"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              class: "flex-1 ml-3 whitespace-nowrap",
              children: "Shops"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "UserActivity",
            class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-500 hover:text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
              "aria-hidden": "true",
              class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                d: "M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z",
                "clip-rule": "evenodd"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              class: "flex-1 ml-3 whitespace-nowrap",
              children: "User Activity"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
            href: "Group",
            class: "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-green-500 hover:text-white",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
              "aria-hidden": "true",
              class: "flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
              fill: "currentColor",
              viewBox: "0 0 20 20",
              xmlns: "http://www.w3.org/2000/svg",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                "fill-rule": "evenodd",
                d: "M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z",
                "clip-rule": "evenodd"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
              class: "flex-1 ml-3 whitespace-nowrap",
              children: "Groups"
            })]
          })
        })]
      })
    })]
  });
}

/***/ }),

/***/ 103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bW": () => (/* binding */ getAuthToken),
/* harmony export */   "hI": () => (/* binding */ authHandler),
/* harmony export */   "ni": () => (/* binding */ logOut)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const getAuthToken = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return null;
  }

  return {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  };
};
const logOut = () => {
  localStorage.removeItem("accessToken");
  window.location.href = '/Login';
};
const authHandler = async () => {
  const headers = getAuthToken();

  if (!headers) {
    return null;
  }

  const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("https://inventer-ms.herokuapp.com/user/me", headers).catch(e => {});

  if (response) {
    return response.data; // console.log(response)
  }

  return null;
};

/***/ })

};
;