import React__default, { useState, useRef, useEffect, Fragment, createElement } from 'react';
import { Transition, Switch, RadioGroup, Popover } from '@headlessui/react';
import { useClickAway } from 'react-use';
import * as iconFa from 'react-icons/fa';
import * as iconAi from 'react-icons/ai';
import * as iconBs from 'react-icons/bs';
import * as iconBi from 'react-icons/bi';
import * as iconCi from 'react-icons/ci';
import * as iconDi from 'react-icons/di';
import * as iconFi from 'react-icons/fi';
import * as iconFc from 'react-icons/fc';
import * as iconGi from 'react-icons/gi';
import * as iconGo from 'react-icons/go';
import * as iconGr from 'react-icons/gr';
import * as iconHi from 'react-icons/hi';
import * as iconHi2 from 'react-icons/hi2';
import * as iconIm from 'react-icons/im';
import * as iconIo from 'react-icons/io';
import * as iconIo5 from 'react-icons/io5';
import * as iconMd from 'react-icons/md';
import * as iconRx from 'react-icons/rx';
import * as iconRi from 'react-icons/ri';
import * as iconSi from 'react-icons/si';
import * as iconSl from 'react-icons/sl';
import * as iconTb from 'react-icons/tb';
import * as iconTfi from 'react-icons/tfi';
import * as iconTi from 'react-icons/ti';
import * as iconVsc from 'react-icons/vsc';
import * as iconWi from 'react-icons/wi';
import * as iconCg from 'react-icons/cg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import create from 'zustand';
import { set, get, del } from 'object-path';
import { produce } from 'immer';
import { GithubPicker, PhotoshopPicker, ChromePicker, SketchPicker } from 'react-color';
import ColorPicker, { useColorPicker } from 'react-best-gradient-color-picker';
import Select from 'react-select';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
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
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var validationUtil = function validationUtil(rule, value, comparisonValue) {
  switch (rule) {
    case 'equals':
      return value === comparisonValue;
    case 'notEquals':
      return value !== comparisonValue;
    case 'greaterThan':
      return value > comparisonValue;
    case 'lessThan':
      return value < comparisonValue;
    case 'greaterThanOrEqual':
      return value >= comparisonValue;
    case 'lessThanOrEqual':
      return value <= comparisonValue;
    case 'includes':
      return value.includes(comparisonValue);
    case 'startsWith':
      return value.startsWith(comparisonValue);
    case 'endsWith':
      return value.endsWith(comparisonValue);
    case 'regex':
      return new RegExp(comparisonValue).test(value);
    case 'isEmpty':
      return !value || Array.isArray(value) && value.length === 0;
    case 'isNotEmpty':
      return value && !(Array.isArray(value) && value.length === 0);
    default:
      return false;
  }
};

var TabLayout = function TabLayout(props) {
  var _useState = useState(0),
    activeTab = _useState[0],
    setActiveTab = _useState[1];
  var handleTabClick = function handleTabClick(e, index) {
    e.preventDefault();
    setActiveTab(index);
  };
  var classes = ' bg-none text-gray-900 p-4 w-full rounded-xl';
  var getClass = function getClass(_index) {
    if (activeTab === _index) {
      return classes + ' border-b-2 border-blue-500 bg-[#ffffffee]';
    }
    return classes;
  };
  return React__default.createElement("div", {
    className: " " + props.className + " w-ful shadow bg-[#00000011] rounded-xl pb-2"
  }, React__default.createElement("div", {
    className: "flex just cursor-pointer w-full rounded-2xl p-2 bg-[#00000011]"
  }, props.tabs.map(function (tab, index) {
    return React__default.createElement("div", {
      key: index,
      onClick: function onClick(e) {
        return handleTabClick(e, index);
      },
      className: getClass(index)
    }, tab.title);
  })), React__default.createElement("div", null, props.tabs.map(function (tab, index) {
    return React__default.createElement("div", {
      key: index
    }, React__default.createElement(Transition, {
      show: activeTab === index,
      enter: "transition-opacity duration-75",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition-opacity duration-150",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }, React__default.createElement("div", {
      className: "mt-4"
    }, tab.content)));
  })));
};

var icons = /*#__PURE__*/_extends({}, iconFa, iconAi, iconBs, iconBi, iconCi, iconDi, iconFi, iconFc, iconGi, iconGo, iconGr, iconHi, iconHi2, iconIm, iconIo, iconIo5, iconMd, iconRx, iconRi, iconSi, iconSl, iconTb, iconTfi, iconTi, iconVsc, iconWi, iconCg);
var iconType = /*#__PURE__*/Object.keys(icons).reduce(function (acc, key) {
  acc[key] = key;
  return acc;
}, {});
var Icon = function Icon(props) {
  var Icon = icons[props.name];
  if (!Icon) return null;
  return React__default.createElement(Icon, {
    size: props.size,
    color: props.color,
    className: props.className,
    "aria-hidden": true
  });
};

var Button = function Button(props) {
  var clickHandler = function clickHandler() {
    if (props.clickHandler) {
      props.clickHandler(props.id);
    }
  };
  return React__default.createElement("button", {
    className: "" + (props == null ? void 0 : props.className),
    onClick: clickHandler
  }, props.icon && React__default.createElement(Icon, {
    name: props.icon,
    color: props.color,
    size: props.size
  }), props.label);
};
var ButtonWithConfirm = function ButtonWithConfirm(props) {
  var _useState = useState(false),
    confirm = _useState[0],
    setConfirm = _useState[1];
  var ref = useRef(null);
  useClickAway(ref, function () {
    setConfirm(false);
  });
  var clickHandler = function clickHandler() {
    if (confirm) {
      props.clickHandler(props.id);
      setConfirm(false);
    } else {
      setConfirm(true);
    }
  };
  var getIconName = function getIconName() {
    if (confirm) {
      return React__default.createElement(Icon, {
        name: iconType.BiCheck,
        color: props.color,
        size: props.size
      }); //;
    } else if (props.icon) {
      return React__default.createElement(Icon, {
        name: props.icon,
        color: props.color,
        size: props.size
      }); //;
    }

    return null;
  };
  return React__default.createElement("button", {
    ref: ref,
    className: "" + (props == null ? void 0 : props.className),
    onClick: clickHandler
  }, getIconName(), props.label);
};
var ButtonAdd = function ButtonAdd(props) {
  return React__default.createElement(Button, Object.assign({
    icon: iconType.BiPlus,
    size: 18,
    color: '#333'
  }, props, {
    label: '',
    className: "p-1 px-4 bg-white rounded-lg shadow-md text-center"
  }));
};
var ButtonDelete = function ButtonDelete(props) {
  return React__default.createElement(ButtonWithConfirm, Object.assign({
    icon: iconType.MdOutlineDeleteForever,
    size: 18,
    color: '#ff0000'
  }, props, {
    label: '',
    className: "p-1 px-4 bg-white rounded-lg shadow-md text-center"
  }));
};

var AccordionLayout = function AccordionLayout(props) {
  var _useState = useState({}),
    itemStates = _useState[0],
    setItemState = _useState[1];
  var handleClick = function handleClick(e, _index) {
    var _extends2;
    e.preventDefault();
    setItemState(_extends({}, itemStates, (_extends2 = {}, _extends2[_index] = !itemStates[_index], _extends2)));
  };
  var classes = 'flex items-center justify-between text-gray-900 p-4 flex just cursor-pointer w-full rounded-2xl bg-[#00000011]';
  var getClass = function getClass(_index) {
    if (itemStates[_index]) {
      return classes + 'cursor-pointer w-full border-b-2 p-4 border-blue-500';
    }
    return classes;
  };
  return React__default.createElement("div", {
    className: " " + props.className + " w-full shadow  bg-[#00000011] rounded-xl p-2"
  }, props.tabs.map(function (tab, _index) {
    return React__default.createElement("div", {
      key: _index,
      className: _index === props.tabs.length - 1 ? '' : 'mb-4  '
    }, React__default.createElement("div", {
      className: getClass(_index)
    }, React__default.createElement("div", {
      key: _index,
      onClick: function onClick(e) {
        return handleClick(e, _index);
      },
      className: "flex-grow"
    }, tab.title), React__default.createElement("div", {
      className: " w-[20px] mr-[30px]"
    }, tab.deleteHandler && React__default.createElement(ButtonDelete, {
      clickHandler: tab.deleteHandler
    }))), React__default.createElement(Transition, {
      show: itemStates[_index] || false,
      enter: "transition-opacity duration-75",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "transition-opacity duration-150",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0"
    }, React__default.createElement("div", {
      className: "mt-4"
    }, tab.content)));
  }));
};

var SlidesLayout = function SlidesLayout(props) {
  var _useState = useState({}),
    itemStates = _useState[0],
    setItemState = _useState[1];
  var handleClick = function handleClick(e, _index) {
    var _extends2;
    e.preventDefault();
    setItemState(_extends({}, itemStates, (_extends2 = {}, _extends2[_index] = !itemStates[_index], _extends2)));
  };
  var classes = 'bg-gray-100 text-gray-900 p-4';
  var getClass = function getClass(_index) {
    if (itemStates[_index]) {
      return classes + 'border-b-2 border-blue-500';
    }
    return classes;
  };
  return React__default.createElement("div", null, React__default.createElement(Swiper, {
    spaceBetween: 50,
    slidesPerView: 3,
    onSlideChange: function onSlideChange() {
      return console.log('slide change');
    },
    onSwiper: function onSwiper(swiper) {
      return console.log(swiper);
    }
  }, props.tabs.map(function (tab, _index) {
    return React__default.createElement(SwiperSlide, {
      key: _index
    }, React__default.createElement("div", {
      key: _index,
      onClick: function onClick(e) {
        return handleClick(e, _index);
      },
      className: getClass(_index)
    }, tab.title), React__default.createElement("div", {
      className: "mt-4"
    }, tab.content));
  })));
};

function SwitchInput() {
  var _useState = useState(false),
    enabled = _useState[0],
    setEnabled = _useState[1];
  return React__default.createElement(Switch, {
    checked: enabled,
    onChange: setEnabled,
    className: (enabled ? 'bg-teal-900' : 'bg-teal-700') + "\n          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
  }, React__default.createElement("span", {
    className: "sr-only"
  }, "Use setting"), React__default.createElement("span", {
    "aria-hidden": "true",
    className: (enabled ? 'translate-x-9' : 'translate-x-0') + "\n            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
  }));
}

function RadioInput(props) {
  var _useState = useState(props.options[0]),
    selected = _useState[0],
    setSelected = _useState[1];
  return React__default.createElement("div", {
    className: ""
  }, React__default.createElement("div", {
    className: "w-full max-w-md"
  }, React__default.createElement(RadioGroup, {
    value: selected,
    onChange: setSelected
  }, React__default.createElement(RadioGroup.Label, {
    className: "sr-only"
  }, "Server size"), React__default.createElement("div", {
    className: "space-y-2"
  }, props.options.map(function (item) {
    return React__default.createElement(RadioGroup.Option, {
      key: item.value,
      value: item.label,
      className: function className(_ref) {
        var active = _ref.active,
          checked = _ref.checked;
        return (active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : '') + "\n                  " + (checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white') + "\n                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none";
      }
    }, function (_ref2) {
      var checked = _ref2.checked;
      return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
        className: "flex w-full items-center justify-between"
      }, React__default.createElement("div", {
        className: "flex items-center"
      }, React__default.createElement("div", {
        className: "text-sm"
      }, React__default.createElement(RadioGroup.Label, {
        as: "p",
        className: "font-medium  " + (checked ? 'text-white' : 'text-gray-900')
      }, item.name), React__default.createElement(RadioGroup.Description, {
        as: "span",
        className: "inline " + (checked ? 'text-sky-100' : 'text-gray-500')
      }, React__default.createElement("span", null, item.value, "/", item.label), ' ', React__default.createElement("span", {
        "aria-hidden": "true"
      }, "\xB7"), ' ', React__default.createElement("span", null, item.label)))), checked && React__default.createElement("div", {
        className: "shrink-0 text-white"
      }, React__default.createElement(CheckIcon, {
        className: "h-6 w-6"
      }))));
    });
  })))));
}
function CheckIcon(props) {
  return React__default.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    fill: "none"
  }, props), React__default.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 12,
    fill: "#fff",
    opacity: "0.2"
  }), React__default.createElement("path", {
    d: "M7 13l3 3 7-7",
    stroke: "#fff",
    strokeWidth: 1.5,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}

var SliderRangeInput = function SliderRangeInput(_ref) {
  var _ref$min = _ref.min,
    min = _ref$min === void 0 ? 0 : _ref$min,
    _ref$max = _ref.max,
    max = _ref$max === void 0 ? 100 : _ref$max,
    _ref$step = _ref.step,
    step = _ref$step === void 0 ? 1 : _ref$step,
    _ref$initialMinValue = _ref.initialMinValue,
    initialMinValue = _ref$initialMinValue === void 0 ? 0 : _ref$initialMinValue,
    _ref$initialMaxValue = _ref.initialMaxValue,
    initialMaxValue = _ref$initialMaxValue === void 0 ? 100 : _ref$initialMaxValue,
    onChange = _ref.onChange;
  var _useState = useState(initialMinValue),
    minValue = _useState[0],
    setMinValue = _useState[1];
  var _useState2 = useState(initialMaxValue),
    maxValue = _useState2[0],
    setMaxValue = _useState2[1];
  var handleMinChange = function handleMinChange(event) {
    var newValue = parseInt(event.target.value, 10);
    if (newValue <= maxValue) {
      setMinValue(newValue);
      onChange(newValue, maxValue);
    }
  };
  var handleMaxChange = function handleMaxChange(event) {
    var newValue = parseInt(event.target.value, 10);
    if (newValue >= minValue) {
      setMaxValue(newValue);
      onChange(minValue, newValue);
    }
  };
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: minValue,
    onChange: handleMinChange,
    className: "w-full h-2 bg-gray-300 rounded-full outline-none appearance-none cursor-pointer transition duration-200 ease-in hover:bg-blue-400 focus:bg-blue-500",
    style: {
      background: "linear-gradient(to right, #3b82f6 0%, #3b82f6 " + (minValue - min) / (max - min) * 100 + "%, #e5e7eb " + (minValue - min) / (max - min) * 100 + "%, #e5e7eb 100%)"
    }
  }), React__default.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: maxValue,
    onChange: handleMaxChange,
    className: "w-full h-2 bg-gray-300 rounded-full outline-none appearance-none cursor-pointer transition duration-200 ease-in hover:bg-blue-400 focus:bg-blue-500",
    style: {
      background: "linear-gradient(to right, #e5e7eb 0%, #e5e7eb " + (maxValue - min) / (max - min) * 100 + "%, #3b82f6 " + (maxValue - min) / (max - min) * 100 + "%, #3b82f6 100%)"
    }
  }), React__default.createElement("div", {
    className: "text-xs font-semibold text-gray-600 mt-1"
  }, minValue, " - ", maxValue));
};

var LayoutCard = function LayoutCard(props) {
  return React__default.createElement("div", {
    className: "p-4 pt-2 bg-white shadow m-4 rounded-md  flex-grow " + (props == null ? void 0 : props.className)
  }, props.children);
};

var CollapseLayout = function CollapseLayout(props) {
  var _useState = useState(false),
    isOpen = _useState[0],
    setOpen = _useState[1];
  var classes = isOpen ? ' w-full shadow  bg-[#00000011] rounded-xl p-[2px] ' : ' w-full shadow  bg-[#00000011] p-4 ';
  return React__default.createElement("div", {
    className: props.inArray ? '' : "mb-10 mt-2"
  }, props.title && React__default.createElement("div", {
    onClick: function onClick(e) {
      return setOpen(!isOpen);
    },
    className: "mb-2 flex justify-between items-center cursor-pointer"
  }, React__default.createElement("h3", null, props.title), isOpen ? React__default.createElement(Icon, {
    name: iconType.FaChevronRight,
    "aria-hidden": "true",
    className: ""
  }) : React__default.createElement(Icon, {
    name: iconType.FaChevronDown,
    "aria-hidden": "true",
    className: ""
  })), React__default.createElement("div", {
    className: " " + props.className + " " + classes
  }, React__default.createElement(Transition, {
    show: !isOpen,
    enter: "transition-opacity duration-75",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "transition-opacity duration-150",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default.createElement("div", {
    className: "mt-4"
  }, props.children))));
};

var useDataformStore = /*#__PURE__*/create(function (set$1, get$1) {
  return {
    data: {},
    refreshList: {},
    setStateItem: function setStateItem(item) {
      return set$1(function (state) {
        return _extends({}, item);
      });
    },
    setData: function setData(keyPath, value) {
      return set$1(function (state) {
        var data = produce(state.data, function (draft) {
          set(draft, keyPath, value);
        });
        console.log(data);
        return {
          data: data
        };
      });
    },
    getData: function getData(keyPath) {
      var _get = get$1(),
        data = _get.data;
      return get(data, keyPath);
    },
    addArrayItem: function addArrayItem(keyPath, defaultItem) {
      return set$1(function (state) {
        var _extends2;
        var data = produce(state.data, function (draft) {
          var current = get(draft, keyPath);
          if (current) {
            current.push(defaultItem);
          } else {
            set(draft, keyPath, [defaultItem]);
          }
        });
        console.log(keyPath, data);
        return {
          data: data,
          refreshList: _extends({}, state.refreshList, (_extends2 = {}, _extends2[keyPath] = Date.now(), _extends2))
        };
        // setFormData((prevFormData: any) => {
        //     const newFormData = { ...prevFormData };
        //     const keyParts = keyPath.split('.');
        //     let current = newFormData;
        //     keyParts.forEach((keyPart, index) => {
        //         if (index === keyParts.length - 1) {
        //             current[keyPart] = current[keyPart] || [];
        //             current[keyPart].push('');
        //         } else {
        //             if (!current[keyPart]) {
        //                 current[keyPart] = [];
        //             }
        //             current = current[keyPart];
        //         }
        //     });
        //     return newFormData;
        // });
      });
    },

    removeArrayItem: function removeArrayItem(keyPath, index) {
      return set$1(function (state) {
        var _extends3;
        var data = produce(state.data, function (draft) {
          del(draft, keyPath + '.' + index);
        });
        // setFormData((prevFormData: any) => {
        //     const newFormData = { ...prevFormData };
        //     const keyParts = keyPath.split('.');
        //     let current = newFormData;
        //     keyParts.forEach((keyPart, idx) => {
        //         if (idx === keyParts.length - 1) {
        //             current[keyPart].splice(index, 1);
        //         } else {
        //             current = current[keyPart];
        //         }
        //     });
        //     return newFormData;
        // });
        return {
          data: data,
          refreshList: _extends({}, state.refreshList, (_extends3 = {}, _extends3[keyPath] = Date.now(), _extends3))
        };
      });
    },
    handleValidation: function handleValidation(prop, event) {
      if (!prop.validation) return true;
      var validationResult = prop.validation.every(function (ruleObj) {
        return validationUtil(ruleObj.rule, event.target.value, ruleObj.value);
      });
      return null;
    }
  };
});

var RenderArray = function RenderArray(props) {
  var prop = props.prop,
    keyPath = props.keyPath;
  var shouldNotUpdate = function shouldNotUpdate(prev, next) {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[keyPath] !== next.refreshList[keyPath]) return false;
    return true;
  };
  var _useDataformStore = useDataformStore(function (state) {
      return state;
    }, shouldNotUpdate),
    getData = _useDataformStore.getData,
    addArrayItem = _useDataformStore.addArrayItem,
    removeArrayItem = _useDataformStore.removeArrayItem,
    refreshList = _useDataformStore.refreshList;
  var _useState = useState({}),
    itemStates = _useState[0],
    setItemState = _useState[1];
  var _useState2 = useState(),
    arrayItems = _useState2[0],
    setArrayItems = _useState2[1];
  var handleClick = function handleClick(e, _index) {
    var _extends2;
    e.preventDefault();
    setItemState(_extends({}, itemStates, (_extends2 = {}, _extends2[_index] = !itemStates[_index], _extends2)));
  };
  useEffect(function () {
    setArrayItems(getData(keyPath) || []);
  }, [refreshList[keyPath]]);
  var inlineDelete = prop.items.type !== 'object' && prop.items.type !== 'array';
  var classes = 'flex items-center justify-between text-gray-900 p-4 flex just cursor-pointer w-full rounded-2xl bg-[#00000011]';
  var getClass = function getClass(_index) {
    if (itemStates[_index]) {
      return classes + 'cursor-pointer w-full border-b-2 p-4 border-blue-500';
    }
    return classes;
  };
  var propType = prop.items.type;
  var defaultItem = propType === 'object' ? {} : propType === 'array' ? [] : '';
  var arrayComponent;
  if (['number', 'string'].includes(propType)) {
    arrayComponent = arrayItems == null ? void 0 : arrayItems.map(function (item, _index) {
      var _properties;
      return React__default.createElement("div", {
        key: _index,
        className: "flex items-center  text-slate-500 "
      }, ' ', React__default.createElement("span", {
        className: "drag-handle cursor-grab mr-2 "
      }, React__default.createElement(Icon, {
        color: "#888",
        name: iconType.MdDragIndicator
      })), _index + 1, renderProperties({
        properties: (_properties = {}, _properties[_index] = _extends({}, prop.items, {
          title: ''
        }), _properties),
        parentKeyPath: "" + keyPath,
        index: _index
      }), ' ', React__default.createElement("div", {
        className: " w-[20px] mr-[30px]"
      }, React__default.createElement(ButtonDelete, {
        clickHandler: function clickHandler() {
          return removeArrayItem(keyPath, _index);
        }
      })));
    });
  } else {
    arrayComponent = arrayItems == null ? void 0 : arrayItems.map(function (item, _index) {
      var _properties2;
      return React__default.createElement("div", {
        key: _index,
        className: _index === arrayItems.length - 1 ? '' : 'mb-4  '
      }, React__default.createElement("div", {
        className: getClass(_index)
      }, React__default.createElement("div", {
        key: _index,
        onClick: function onClick(e) {
          return handleClick(e, _index);
        },
        className: "flex-grow"
      }, prop.title + ' ' + (_index + 1)), React__default.createElement("div", {
        className: " w-[20px] mr-[30px]"
      }, React__default.createElement(ButtonDelete, {
        clickHandler: function clickHandler() {
          return removeArrayItem(keyPath, _index);
        }
      }))), React__default.createElement(Transition, {
        show: itemStates[_index] || false,
        enter: "transition-opacity duration-75",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "transition-opacity duration-150",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0"
      }, React__default.createElement("div", {
        className: "mt-4"
      }, React__default.createElement("div", {
        key: keyPath + "." + _index,
        className: inlineDelete ? ' flex justify-between items-center mr-7 d gap-2 ' : ''
      }, renderProperties({
        properties: (_properties2 = {}, _properties2[_index] = prop.items, _properties2),
        parentKeyPath: "" + keyPath,
        index: _index
      })))));
    });
  }
  return React__default.createElement("div", {
    key: keyPath,
    className: " mb-10"
  }, React__default.createElement("h3", {
    className: "mb-2"
  }, prop.title), React__default.createElement("div", {
    className: "  w-full shadow  bg-[#00000011] rounded-xl p-2"
  }, arrayComponent), React__default.createElement("div", {
    className: "flex items-center justify-center my-2"
  }, ' ', React__default.createElement(ButtonAdd, {
    clickHandler: function clickHandler() {
      return addArrayItem(keyPath, defaultItem);
    }
  })));
};

var CheckboxInput = function CheckboxInput(props) {
  var _useState = useState([]),
    checked = _useState[0],
    setChecked = _useState[1];
  var _useDataformStore = useDataformStore(function (state) {
      return {
        setStateItem: state.setStateItem
      };
    }),
    setStateItem = _useDataformStore.setStateItem;
  var handleClick = function handleClick(e, _value) {
    if (checked.includes(_value)) {
      setChecked(checked.filter(function (value) {
        return value !== _value;
      }));
    } else {
      if (props.maxItems && checked.length >= props.maxItems) {
        setStateItem({
          notice: {
            message: 'max item reached'
          }
        });
        return;
      }
      setChecked([].concat(checked, [_value]));
    }
  };
  var options = props.options;
  options = (typeof options === 'string' ? options.split(',').map(function (item) {
    return {
      label: item,
      value: item
    };
  }) : props.options) || [];
  return React__default.createElement("div", null, props.label && React__default.createElement("legend", {
    className: "text-base font-semibold leading-6 text-gray-900"
  }, props.label), options.map(function (option, index) {
    return React__default.createElement("div", {
      className: "relative flex items-start pb-4 pt-3.5 cursor-pointer",
      onClick: function onClick(e) {
        return handleClick(e, option.value);
      }
    }, option.image && React__default.createElement("img", {
      className: "h-12 w-12 flex-none rounded-full bg-gray-50",
      src: option.image,
      alt: ""
    }), React__default.createElement("div", {
      className: "min-w-0 flex-1 text-sm leading-6"
    }, option.label && React__default.createElement("label", {
      htmlFor: "candidates",
      className: "font-medium text-gray-900"
    }, ' ', option.label, ' '), option.description && React__default.createElement("p", {
      id: "candidates-description",
      className: "text-gray-500"
    }, ' ', option.description, ' ')), React__default.createElement("div", {
      className: "ml-3 flex h-6 items-center"
    }, React__default.createElement("input", {
      id: "candidates",
      "aria-describedby": "candidates-description",
      name: "candidates",
      type: "checkbox",
      className: "h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600",
      checked: checked.includes(option.value),
      onChange: function onChange() {}
    })));
  }), React__default.createElement("div", null, React__default.createElement("h2", {
    className: "text-sm font-medium text-gray-500"
  }, "Pinned Projects"), React__default.createElement("ul", {
    role: "list",
    className: "mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
  }, projects.map(function (project) {
    return React__default.createElement("li", {
      key: project.name,
      className: "col-span-1 flex rounded-md shadow-sm"
    }, React__default.createElement("div", {
      className: classNames(project.bgColor, 'flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white')
    }, project.initials), React__default.createElement("div", {
      className: "flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white"
    }, React__default.createElement("div", {
      className: "flex-1 truncate px-4 py-2 text-sm"
    }, React__default.createElement("a", {
      href: project.href,
      className: "font-medium text-gray-900 hover:text-gray-600"
    }, project.name), React__default.createElement("p", {
      className: "text-gray-500"
    }, project.members, " Members")), React__default.createElement("div", {
      className: "flex-shrink-0 pr-2"
    }, React__default.createElement("button", {
      type: "button",
      className: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    }, React__default.createElement("span", {
      className: "sr-only"
    }, "Open options"), React__default.createElement(Icon, {
      name: iconType.BiDotsVerticalRounded,
      className: "h-5 w-5",
      "aria-hidden": "true"
    })))));
  }))));
};
var projects = [{
  name: 'Graph API',
  initials: 'GA',
  href: '#',
  members: 16,
  bgColor: 'bg-pink-600'
}, {
  name: 'Component Design',
  initials: 'CD',
  href: '#',
  members: 12,
  bgColor: 'bg-purple-600'
}, {
  name: 'Templates',
  initials: 'T',
  href: '#',
  members: 16,
  bgColor: 'bg-yellow-500'
}, {
  name: 'React Components',
  initials: 'RC',
  href: '#',
  members: 8,
  bgColor: 'bg-green-500'
}];
function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }
  return classes.filter(Boolean).join(' ');
}
// export const CheckboxInput = (props: { label: string, keyPath: string }) => {
//     const [checked, setChecked] = useState(false);
//     const handleClick = (e) => {
//         setChecked(!checked);
//         console.log(e)
//     };
//     return (
//         <div className="flex items-center cursor-pointer" onClick={handleClick}>
//             <input
//                 type="checkbox"
//                 className="hidden"
//                 checked={checked}
//                 onChange={() => { }}
//             />
//             {checked ? (
//                 <AiOutlineCheckSquare className="text-xl" />
//             ) : (
//                 <AiOutlineSnippets className="text-xl" />
//             )}
//             <label className="ml-1">{props.label}</label>
//         </div>
//     );
// };

var toTitleCase = function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
var isEmpty = function isEmpty(obj) {
  if (typeof obj === 'function') return false;
  if (typeof obj === 'boolean' || typeof obj === 'number') return false;
  if (typeof obj === 'string' && obj.length > 0) return false;
  if (Array.isArray(obj) && obj.length > 0) return false;
  if (obj !== null && typeof obj === 'object' && Object.keys(obj).length > 0) return false;
  return true;
};

var CommonColorPicker = function CommonColorPicker(props) {
  var _useState = useState('000000'),
    colorTemp = _useState[0],
    setColorTemp = _useState[1];
  var _useState2 = useState('rgba(255, 255, 255, 1)'),
    gradient = _useState2[0],
    setGradient = _useState2[1];
  var _useState3 = useState(false),
    show = _useState3[0],
    setShow = _useState3[1];
  var _useColorPicker = useColorPicker(gradient, setGradient),
    valueToHex = _useColorPicker.valueToHex,
    rgbaArr = _useColorPicker.rgbaArr;
  var _useState4 = useState(props.color || '#000'),
    setColor = _useState4[1];
  useEffect(function () {
    setColorTemp(props.color);
  }, [props.color]);
  var handleChangeComplete = function handleChangeComplete(_color) {
    var rgb = "rgba(" + Object.values(_color.rgb).join(',') + ")";
    if (props.updateColor) props.updateColor(_color);
    setColor(rgb);
  };
  var handleGradientChange = function handleGradientChange(_color) {
    setGradient(_color);
    var gColor = {
      hex: valueToHex(),
      rgb: rgbaArr
    };
    if (_color.includes('gradient')) {
      gColor['gradient'] = _color;
    }
    if (props.updateColor) props.updateColor(gColor);
  };
  var handleChange = function handleChange(_color) {
    var rgb = "rgba(" + Object.values(_color.rgb).join(',') + ")";
    setColorTemp(rgb);
  };
  var getPicker = function getPicker() {
    var selPicker;
    switch (props.type) {
      case 'sketch':
        selPicker = React__default.createElement(SketchPicker, {
          className: "sketch-picker",
          onChangeComplete: handleChangeComplete,
          color: colorTemp || '#000',
          onChange: handleChange
        });
        break;
      case 'chrome':
        selPicker = React__default.createElement(ChromePicker, {
          className: "chrome-picker",
          onChangeComplete: handleChangeComplete,
          color: colorTemp || '#000',
          onChange: handleChange
        });
        break;
      case 'photoshop':
        selPicker = React__default.createElement(PhotoshopPicker, {
          className: "photoshop-picker",
          onChangeComplete: handleChangeComplete,
          color: colorTemp || '#000',
          onChange: handleChange
        });
        break;
      case 'gradient':
        selPicker = React__default.createElement("div", {
          className: "p-2 shadow bg-white border-gray-100 border-2"
        }, React__default.createElement(ColorPicker, {
          value: gradient,
          onChange: handleGradientChange
        }));
        break;
      default:
        selPicker = React__default.createElement(GithubPicker, {
          className: "github-picker",
          onChangeComplete: handleChangeComplete,
          color: colorTemp || '#000',
          onChange: handleChange
        });
        break;
    }
    if (props.useFloatBox) {
      return React__default.createElement("div", {
        style: {
          position: 'absolute',
          top: '20px',
          left: '25px',
          zIndex: 100
        }
      }, selPicker);
    } else {
      return selPicker;
    }
  };
  var toggleButton = function toggleButton() {
    return React__default.createElement("div", {
      className: "color-picker-toggle"
    }, React__default.createElement("button", {
      className: props.className,
      onClick: function onClick(e) {
        return setShow(!show);
      },
      style: {
        backgroundColor: colorTemp
      }
    }), show && getPicker());
  };
  return React__default.createElement("div", {
    className: "color-picker-wrapper"
  }, props.toggle ? toggleButton() : getPicker());
};

function SelectInput(props) {
  var _useState = useState(null),
    selectedOption = _useState[0],
    setSelectedOption = _useState[1];
  return React__default.createElement("div", {
    className: "App"
  }, React__default.createElement(Select, {
    defaultValue: selectedOption,
    onChange: setSelectedOption,
    options: props.options,
    isClearable: true,
    isMulti: true
  }));
}

var Label = function Label(props) {
  return React__default.createElement("label", {
    htmlFor: props.id,
    className: " " + (props == null ? void 0 : props.className) + " whitespace-nowrap text-sm transition-all duration-300 " + (props.isFocused ? 'text-blue-500' : 'text-gray-500')
  }, props.label);
};

var NumberInput = function NumberInput(_ref) {
  var min = _ref.min,
    max = _ref.max,
    step = _ref.step,
    initialValue = _ref.initialValue,
    onChange = _ref.onChange;
  var _useState = useState(initialValue),
    value = _useState[0],
    setValue = _useState[1];
  var handleChange = function handleChange(event) {
    var newValue = parseInt(event.target.value, 10);
    if ((min === undefined || newValue >= min) && (max === undefined || newValue <= max)) {
      setValue(newValue);
      onChange(newValue);
    }
  };
  var increment = function increment() {
    var newValue = value + step;
    if (max === undefined || newValue <= max) {
      setValue(newValue);
      onChange(newValue);
    }
  };
  var decrement = function decrement() {
    var newValue = value - step;
    if (min === undefined || newValue >= min) {
      setValue(newValue);
      onChange(newValue);
    }
  };
  return React__default.createElement("div", {
    className: "flex items-center justify-between w-full"
  }, React__default.createElement("button", {
    onClick: decrement,
    className: "bg-blue-400 text-white p-2 rounded-l focus:outline-none"
  }, "-"), React__default.createElement("input", {
    type: "number",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: handleChange,
    className: "w-full text-center border-t border-b border-blue-400 focus:border-blue-500 focus:outline-none"
  }), React__default.createElement("button", {
    onClick: increment,
    className: "bg-blue-400 text-white p-2 rounded-r focus:outline-none"
  }, "+"));
};

var Input = function Input(props) {
  var onFocus = props.onFocus,
    type = props.type,
    onChange = props.onChange,
    value = props.value,
    onBlur = props.onBlur,
    label = props.label,
    className = props.className;
  var _className = className + " ";
  return React__default.createElement("input", Object.assign({}, props, {
    onFocus: onFocus,
    type: type,
    onChange: onChange,
    value: value,
    onBlur: onBlur,
    className: _className,
    placeholder: label
  }));
};

var basicElementList = {
  input: Input,
  textarea: Input,
  select: SelectInput,
  slider: SliderRangeInput,
  radio: RadioInput,
  checkbox: CheckboxInput
};

var _excluded = ["keyPath", "label", "labelPosition", "placeholderInside", "icon", "type", "controlType", "errorMessage", "className"];
var BasicElement = function BasicElement(_ref) {
  var _ref$keyPath = _ref.keyPath,
    keyPath = _ref$keyPath === void 0 ? '' : _ref$keyPath,
    _ref$label = _ref.label,
    label = _ref$label === void 0 ? '' : _ref$label,
    _ref$labelPosition = _ref.labelPosition,
    labelPosition = _ref$labelPosition === void 0 ? 'inline' : _ref$labelPosition,
    _ref$icon = _ref.icon,
    icon = _ref$icon === void 0 ? undefined : _ref$icon,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'string' : _ref$type,
    _ref$controlType = _ref.controlType,
    controlType = _ref$controlType === void 0 ? 'input' : _ref$controlType,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === void 0 ? '' : _ref$errorMessage,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    props = _objectWithoutPropertiesLoose(_ref, _excluded);
  var shouldNotUpdate = function shouldNotUpdate(prev, next) {
    if (prev.timestamp !== next.timestamp) return false;
    if (prev.refreshList[keyPath] !== next.refreshList[keyPath]) return false;
    return true;
  };
  var _useDataformStore = useDataformStore(function (state) {
      return state;
    }, shouldNotUpdate),
    getData = _useDataformStore.getData,
    setData = _useDataformStore.setData;
  var _useState = useState(getData(keyPath)),
    value = _useState[0],
    setValue = _useState[1];
  var _useState2 = useState(false),
    isFocused = _useState2[0],
    setIsFocused = _useState2[1];
  var onFocus = function onFocus() {
    setIsFocused(true);
  };
  var onBlur = function onBlur() {
    setIsFocused(false);
  };
  var onChange = function onChange(e) {
    setValue(e.target.value);
    setData(keyPath, e.target.value);
  };
  var onChangeNumber = function onChangeNumber(_value) {
    setValue(_value);
    setData(keyPath, _value);
  };
  var Element = basicElementList[controlType] || basicElementList['input'];
  var labelControl = React__default.createElement(Label, {
    key: keyPath + '-label',
    id: props.keyPath,
    isFocused: isFocused,
    label: label,
    position: labelPosition,
    className: "" + (['left', 'inline'].includes(labelPosition) ? ' w-[200px]' : '')
  });
  return React__default.createElement("div", {
    key: keyPath,
    className: className + " relative " + (labelPosition === 'right' ? ' flex items-center gap-2' : '')
  }, labelPosition === 'top' && label && labelControl, React__default.createElement("div", {
    className: "flex items-center w-full gap-2 "
  }, labelPosition === 'left' && label && labelControl, icon && React__default.createElement("div", {
    className: " text-gray-500 p-2 transition-all duration-300  rounded bg-[#faf0e1cc] " + (isFocused ? 'text-blue-500' : '')
  }, React__default.createElement(Icon, {
    name: icon,
    color: "ff0000",
    size: 24
  })), labelPosition === 'inline' && label && labelControl, type === 'number' && React__default.createElement(NumberInput, {
    initialValue: undefined,
    onChange: onChangeNumber,
    step: 0
  }), React__default.createElement(Element, Object.assign({}, props, {
    onFocus: onFocus,
    type: type,
    onChange: onChange,
    value: value,
    onBlur: onBlur,
    className: "block w-full px-4 py-2 mt-1 border bg-[#ffffffcc]  border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300",
    placeholder: label || ''
  }))), (labelPosition === 'bottom' || labelPosition === 'right') && label && labelControl, errorMessage && React__default.createElement("div", {
    className: "mt-2 text-sm text-red-600"
  }, errorMessage));
};

var resolveOptions = function resolveOptions(keyPath, schema) {
  if (schema["enum"] && typeof schema["enum"] === 'string') {
    return schema["enum"].split(',').map(function (item) {
      return {
        label: item,
        value: item
      };
    });
  }
  if (schema["enum"] && Array.isArray(schema["enum"]) && typeof schema["enum"][0] === 'string') {
    return schema["enum"].map(function (item) {
      return {
        label: item,
        value: item
      };
    });
  }
  return schema["enum"];
};

var emojiMartCustom = [{
  id: 'fontAwesome',
  name: 'Font Awesome',
  emojis: /*#__PURE__*/Object.keys(iconFa).map(function (key) {
    var Icon = iconFa[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      group: 'fontAwesome',
      emoticons: [],
      keywords: ['fontAwesome', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'antDesign',
  name: 'Ant Design',
  emojis: /*#__PURE__*/Object.keys(iconAi).map(function (key) {
    var Icon = iconAi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['Ant', 'Design', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'bootstrap',
  name: 'Bootstrap',
  emojis: /*#__PURE__*/Object.keys(iconBs).map(function (key) {
    var Icon = iconBs[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['Bootstrap', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'boxIcons',
  name: 'BoxIcons',
  emojis: /*#__PURE__*/Object.keys(iconBi).map(function (key) {
    var Icon = iconBi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['BoxIcons', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'circum',
  name: 'Circum',
  emojis: /*#__PURE__*/Object.keys(iconCi).map(function (key) {
    var Icon = iconCi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['Circum', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'devicons',
  name: 'Devicons',
  emojis: /*#__PURE__*/Object.keys(iconDi).map(function (key) {
    var Icon = iconDi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['Devicons', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'feather',
  name: 'Feather',
  emojis: /*#__PURE__*/Object.keys(iconFi).map(function (key) {
    var Icon = iconFi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['feather', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'flatColor',
  name: 'Flat Color',
  emojis: /*#__PURE__*/Object.keys(iconFc).map(function (key) {
    var Icon = iconFc[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['flat color', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'game',
  name: 'Games',
  emojis: /*#__PURE__*/Object.keys(iconGi).map(function (key) {
    var Icon = iconGi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['game', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'github',
  name: 'Github',
  emojis: /*#__PURE__*/Object.keys(iconGo).map(function (key) {
    var Icon = iconGo[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['github', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'grommet',
  name: 'Grommet',
  emojis: /*#__PURE__*/Object.keys(iconGr).map(function (key) {
    var Icon = iconGr[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['grommet', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'heroicons',
  name: 'Heroicons',
  emojis: /*#__PURE__*/Object.keys(iconHi).map(function (key) {
    var Icon = iconHi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['heroicons', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'heroicons2',
  name: 'Heroicons 2',
  emojis: /*#__PURE__*/Object.keys(iconHi2).map(function (key) {
    var Icon = iconHi2[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['heroicons2', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'icoMoon',
  name: 'IcoMoon',
  emojis: /*#__PURE__*/Object.keys(iconIm).map(function (key) {
    var Icon = iconIm[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['icoMoon', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'ionicons',
  name: 'Ionicons',
  emojis: /*#__PURE__*/Object.keys(iconIo).map(function (key) {
    var Icon = iconIo[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['ionicons', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'ionicons5',
  name: 'Ionicons',
  emojis: /*#__PURE__*/Object.keys(iconIo5).map(function (key) {
    var Icon = iconIo5[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['ionicons5', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'materialDesign',
  name: 'Material Design',
  emojis: /*#__PURE__*/Object.keys(iconMd).map(function (key) {
    var Icon = iconMd[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['materialDesign', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'radix',
  name: 'Radix',
  emojis: /*#__PURE__*/Object.keys(iconRx).map(function (key) {
    var Icon = iconRx[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['radix', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'remix',
  name: 'Remix',
  emojis: /*#__PURE__*/Object.keys(iconRi).map(function (key) {
    var Icon = iconRi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['remix', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'simple',
  name: 'Simple',
  emojis: /*#__PURE__*/Object.keys(iconSi).map(function (key) {
    var Icon = iconSi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['simple', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'simpleLine',
  name: 'Simple Line',
  emojis: /*#__PURE__*/Object.keys(iconSl).map(function (key) {
    var Icon = iconSl[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['simpleLine', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'tabler',
  name: 'Tabler',
  emojis: /*#__PURE__*/Object.keys(iconTb).map(function (key) {
    var Icon = iconTb[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['tabler', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'themify',
  name: 'Themify',
  emojis: /*#__PURE__*/Object.keys(iconTfi).map(function (key) {
    var Icon = iconTfi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['themify', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'typicons',
  name: 'Typicons',
  emojis: /*#__PURE__*/Object.keys(iconTi).map(function (key) {
    var Icon = iconTi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['typicons', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'vSCode',
  name: 'VS Code',
  emojis: /*#__PURE__*/Object.keys(iconVsc).map(function (key) {
    var Icon = iconVsc[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['vSCode', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'weather',
  name: 'Weather',
  emojis: /*#__PURE__*/Object.keys(iconWi).map(function (key) {
    var Icon = iconWi[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['weather', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}, {
  id: 'ccc-gg',
  name: 'css.gg',
  emojis: /*#__PURE__*/Object.keys(iconCg).map(function (key) {
    var Icon = iconCg[key];
    var svgString = renderToStaticMarkup(React__default.createElement(Icon, null));
    var encodedSVG = encodeURIComponent(svgString);
    var dataURL = "data:image/svg+xml;charset=UTF-8," + encodedSVG;
    return {
      id: key,
      name: key,
      colons: ":" + key + ":",
      emoticons: [],
      keywords: ['css.gg', key],
      skins: [{
        src: dataURL
      }]
    };
  })
}];

function IconPicker() {
  var _useState = useState(),
    value = _useState[0],
    setValue = _useState[1];
  var handleEmojiSelect = function handleEmojiSelect(emoji) {
    if (emoji.src) {
      setValue(React__default.createElement(Icon, {
        name: emoji.id,
        size: 20
      }));
    } else {
      setValue(emoji["native"]);
    }
  };
  return React__default.createElement("div", {
    className: " "
  }, React__default.createElement(Popover, {
    className: "relative"
  }, function (_ref) {
    var open = _ref.open;
    return React__default.createElement(React__default.Fragment, null, React__default.createElement(Popover.Button, {
      className: "   " + (open ? '' : 'text-opacity-90') + "   group w-full justify-between inline-flex items-center rounded-md px-3 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    }, React__default.createElement("span", {
      className: "flex gap-4 items-center"
    }, "Pick ", React__default.createElement("span", {
      className: "p-2 shadow-md bg-slate-50"
    }, value)), React__default.createElement(ChevronDownIcon, {
      className: (open ? '' : 'text-opacity-70') + "   ml-2 h-5 w-5 text-orange-600 transition duration-150 ease-in-out group-hover:text-opacity-80",
      "aria-hidden": "true"
    })), React__default.createElement(Transition, {
      as: Fragment,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 translate-y-1",
      enterTo: "opacity-100 translate-y-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-y-0",
      leaveTo: "opacity-0 translate-y-1"
    }, React__default.createElement(Popover.Panel, {
      className: "absolute "
    }, React__default.createElement(Picker, {
      data: data,
      onEmojiSelect: handleEmojiSelect,
      custom: emojiMartCustom
    }))));
  }));
}

var renderProperties = function renderProperties(props) {
  var properties = props.properties,
    parentKeyPath = props.parentKeyPath,
    getData = props.getData,
    index = props.index;
  if (!properties) return null;
  var groups = {};
  return Object.entries(properties).map(function (_ref) {
    var key = _ref[0],
      prop = _ref[1];
    var keyPath = parentKeyPath ? parentKeyPath + "." + key : key;
    // Add support for conditional renderingå
    if (getData) {
      var _prop$condition;
      var conditionValue = getData(prop == null ? void 0 : (_prop$condition = prop.condition) == null ? void 0 : _prop$condition.field);
      if (prop.condition && !validationUtil(prop.condition.rule, conditionValue, prop.condition.value)) {
        return null;
      }
    }
    // Add support for different layouts (Tabs, Accordion, Stepper, Collapsible)
    // ...
    // Other input rendering logic (objects, arrays, etc.) goes here
    var controlType = prop['x-control'];
    // const layout = prop['x-layout'] || {};
    var groupKey = prop['x-group'] || '';
    // const controlWrapperStyle = {
    //     width: layout.width || 'auto'
    // };
    if (!groups[groupKey]) {
      groups[groupKey] = [];
    }
    // Custom keyword: x-displayIf
    // if (fieldSchema['x-displayIf']) {
    //     const displayConfig = fieldSchema['x-displayIf'];
    //     const compareValue = getValueAtPath(formData, displayConfig.field);
    //     if (displayConfig.condition === 'notEquals' && value === compareValue) {
    //         return false; // Field should not be displayed
    //     }
    // }
    if (prop.layout && prop.layout.type === 'tabs') {
      return React__default.createElement("div", {
        key: keyPath,
        className: " mb-10"
      }, React__default.createElement("h3", {
        className: "mb-2"
      }, prop.title), React__default.createElement(TabLayout, {
        key: keyPath,
        tabs: prop.layout.tabs.map(function (tab) {
          return {
            title: tab.title,
            content: renderProperties({
              properties: tab.properties,
              parentKeyPath: keyPath
            })
          };
        })
      }));
    }
    if (prop.layout && prop.layout.type === 'accordion') {
      return React__default.createElement("div", {
        key: keyPath,
        className: " mb-10"
      }, React__default.createElement("h3", {
        className: "mb-2"
      }, prop.title), React__default.createElement(AccordionLayout, {
        key: keyPath,
        tabs: prop.layout.tabs.map(function (tab) {
          return {
            title: tab.title,
            content: renderProperties({
              properties: tab.properties,
              parentKeyPath: keyPath
            })
          };
        })
      }));
    }
    if (prop.layout && prop.layout.type === 'slides') {
      return React__default.createElement(SlidesLayout, {
        key: keyPath,
        tabs: prop.layout.tabs.map(function (tab) {
          return {
            title: tab.title,
            content: renderProperties({
              properties: tab.properties,
              parentKeyPath: keyPath
            })
          };
        })
      });
    }
    if (prop.type === 'object' && prop.properties) {
      return React__default.createElement("div", {
        key: keyPath
      }, React__default.createElement(CollapseLayout, {
        title: prop.title,
        inArray: !isNaN(index)
      }, renderProperties({
        properties: prop.properties,
        parentKeyPath: keyPath,
        index: index
      })));
    }
    if (prop.type === 'array' && prop.items) {
      var options = resolveOptions(keyPath, prop);
      if (isEmpty(options)) {
        return React__default.createElement(RenderArray, {
          prop: prop,
          keyPath: keyPath
        });
      } else {
        var maxItems = prop.maxItems,
          minItems = prop.minItems;
        var title = prop.title || toTitleCase(keyPath.split('.').pop());
        if (controlType === 'checkbox') {
          return React__default.createElement(CheckboxInput, {
            maxItems: maxItems,
            label: title,
            minItems: minItems,
            keyPath: keyPath,
            options: options
          });
        } else {
          return React__default.createElement(SelectInput, {
            keyPath: keyPath,
            options: options
          });
        }
      }
    }
    // const hasError = errors ? errors[keyPath] : null;
    if (groupKey) {
      groups[groupKey].push(renderInput(keyPath, prop, getData));
      return React__default.createElement(LayoutCard, {
        key: keyPath
      }, Object.values(groups).map(function (group, index) {
        return React__default.createElement("div", {
          key: index,
          className: "form-row flex gap-4"
        }, group);
      }));
    }
    return React__default.createElement(LayoutCard, {
      key: keyPath
    }, ' ', renderInput(keyPath, prop, getData));
  });
};
var renderInput = function renderInput(keyPath, prop, getData) {
  var controlType = prop['x-control'];
  var labelPosition = prop['x-label-position'] || undefined;
  if (prop['enum'] && !controlType) {
    controlType = 'select';
  }
  var title = typeof prop.title === 'undefined' ? toTitleCase(keyPath.split('.').pop()) : prop.title;
  var icon = prop['x-icon'];
  if (controlType === 'select') {
    // Handle cascading dropdowns
    if (prop['x-enumVar'] && prop['x-enumPath']) {
      var pathParts = prop['x-enumPath'].split('.');
      var optionsSource = getData('');
      for (var _iterator = _createForOfIteratorHelperLoose(pathParts), _step; !(_step = _iterator()).done;) {
        var _optionsSource;
        var part = _step.value;
        optionsSource = (_optionsSource = optionsSource) == null ? void 0 : _optionsSource[part];
      }
      // return (
      //     <div key={keyPath}>
      //         <label htmlFor={keyPath}>{prop.title}</label>
      //         <select
      //             id={keyPath}
      //             value={formData[keyPath] || ''}
      //             onChange={(event) => handleChange(setFormData, keyPath, event.target.value)}
      //         >
      //             <option value="">Select {prop.title}</option>
      //             {options.map((option) => (
      //                 <option key={option} value={option}>
      //                     {option}
      //                 </option>
      //             ))}
      //         </select>
      //     </div>
      // );
    }

    var options = prop['enum'] ? prop['enum'].map(function (item) {
      return {
        label: item,
        value: item
      };
    }) : [];
    return React__default.createElement(SelectInput, {
      options: options
    });
  }
  if (controlType === 'switch' || prop.type === 'boolean') {
    return React__default.createElement(SwitchInput, null);
  }
  if (controlType === 'icon-picker') {
    return React__default.createElement(IconPicker, null);
  }
  if (controlType === 'checkbox') {
    return React__default.createElement(CheckboxInput, {
      label: prop.title,
      keyPath: keyPath
    });
  }
  if (controlType === 'color') {
    return React__default.createElement(CommonColorPicker, {
      updateColor: null,
      color: '#000',
      type: "github"
    });
  }
  if (controlType === 'slider') {
    return React__default.createElement(SliderRangeInput, {
      min: 0,
      max: 10,
      initialMinValue: 2,
      onChange: function onChange(e) {
        return console.log(e);
      }
    });
  }
  if (controlType === 'radio') {
    var _options2 = prop['enum'] ? prop['enum'].map(function (item) {
      return {
        label: item,
        value: item
      };
    }) : [];
    return React__default.createElement(RadioInput, {
      options: _options2
    });
  }
  var className = prop['x-group'] ? 'w-full' : '';
  return React__default.createElement(BasicElement, {
    keyPath: keyPath,
    key: keyPath,
    label: title,
    labelPosition: labelPosition,
    type: prop.type,
    controlType: controlType,
    icon: icon,
    className: className
  });
};

function Notification() {
  var _useState = useState(true),
    show = _useState[0],
    setShow = _useState[1];
  var _useDataformStore = useDataformStore(function (state) {
      return {
        notice: state.notice
      };
    }),
    notice = _useDataformStore.notice;
  useEffect(function () {
    setShow(true);
    setTimeout(function () {
      setShow(false);
    }, 30000);
  }, [notice]);
  return React__default.createElement(React__default.Fragment, null, React__default.createElement("div", {
    "aria-live": "assertive",
    className: "pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
  }, React__default.createElement("div", {
    className: "flex w-full flex-col items-center space-y-4 sm:items-end"
  }, React__default.createElement(Transition, {
    show: show,
    as: Fragment,
    enter: "transform ease-out duration-300 transition",
    enterFrom: "translate-y-8 opacity-0 sm:translate-y-0 sm:translate-x-2",
    enterTo: "translate-y-5 opacity-100 sm:translate-x-0",
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, React__default.createElement("div", {
    className: "pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50 "
  }, React__default.createElement("div", {
    className: "p-4"
  }, React__default.createElement("div", {
    className: "flex items-start"
  }, React__default.createElement("div", {
    className: "flex-shrink-0"
  }, React__default.createElement(CheckCircleIcon, {
    className: "h-6 w-6 text-green-400",
    "aria-hidden": "true"
  })), React__default.createElement("div", {
    className: "ml-3 w-0 flex-1 pt-0.5"
  }, React__default.createElement("p", {
    className: "text-sm font-medium text-gray-900"
  }, "Successfully saved!"), React__default.createElement("p", {
    className: "mt-1 text-sm text-gray-500"
  }, "Anyone with a link can now view this file.")), React__default.createElement("div", {
    className: "ml-4 flex flex-shrink-0"
  }, React__default.createElement("button", {
    type: "button",
    className: "inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    onClick: function onClick() {
      setShow(false);
    }
  }, React__default.createElement("span", {
    className: "sr-only"
  }, "Close"), React__default.createElement(XMarkIcon, {
    className: "h-5 w-5",
    "aria-hidden": "true"
  }))))))))));
}

var CustomJsonSchemaForm = function CustomJsonSchemaForm(_ref) {
  var schema = _ref.schema,
    onSubmit = _ref.onSubmit;
  var shouldNotUpdate = function shouldNotUpdate(prev, next) {
    if (prev.timestamp !== next.timestamp) return false;
    return true;
  };
  var _useDataformStore = useDataformStore(function (state) {
      return state;
    }, shouldNotUpdate),
    getData = _useDataformStore.getData;
  var handleSubmit = function handleSubmit(event) {
    event.preventDefault();
    onSubmit({});
  };
  return createElement("div", {
    className: "w-full h-full"
  }, createElement("form", {
    onSubmit: handleSubmit,
    className: "pb-[200px]"
  }, renderProperties({
    properties: schema.properties,
    parentKeyPath: '',
    getData: getData
  }), createElement("button", {
    type: "submit"
  }, "Submit")), createElement(Notification, null));
};

// Delete me
var Dataform = function Dataform(props) {
  return createElement(CustomJsonSchemaForm, Object.assign({}, props));
};

export { Dataform };
//# sourceMappingURL=dataform.esm.js.map
