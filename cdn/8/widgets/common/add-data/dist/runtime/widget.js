System.register(["jimu-core/emotion","jimu-core","jimu-ui","jimu-ui/basic/item-selector","jimu-ui/basic/copy-button","jimu-theme"],function(e,t){var a={},o={},r={},n={},i={},l={};return{setters:[function(e){a.jsx=e.jsx,a.jsxs=e.jsxs},function(e){o.AppMode=e.AppMode,o.BaseVersionManager=e.BaseVersionManager,o.DataSourceManager=e.DataSourceManager,o.DataSourceStatus=e.DataSourceStatus,o.DataSourceTypes=e.DataSourceTypes,o.DataSourcesChangeMessage=e.DataSourcesChangeMessage,o.DataSourcesChangeType=e.DataSourcesChangeType,o.ExportFormat=e.ExportFormat,o.Immutable=e.Immutable,o.MessageManager=e.MessageManager,o.MutableStoreManager=e.MutableStoreManager,o.React=e.React,o.ReactRedux=e.ReactRedux,o.ServiceManager=e.ServiceManager,o.SupportedItemTypes=e.SupportedItemTypes,o.SupportedLayerServiceTypes=e.SupportedLayerServiceTypes,o.WidgetState=e.WidgetState,o.classNames=e.classNames,o.css=e.css,o.dataSourceUtils=e.dataSourceUtils,o.defaultMessages=e.defaultMessages,o.esri=e.esri,o.focusElementInKeyboardMode=e.focusElementInKeyboardMode,o.getAppStore=e.getAppStore,o.hooks=e.hooks,o.i18n=e.i18n,o.indexedDBUtils=e.indexedDBUtils,o.loadArcGISJSAPIModule=e.loadArcGISJSAPIModule,o.loadArcGISJSAPIModules=e.loadArcGISJSAPIModules,o.moduleLoader=e.moduleLoader,o.polished=e.polished,o.requestUtils=e.requestUtils,o.utils=e.utils,o.uuidv1=e.uuidv1},function(e){r.Alert=e.Alert,r.Button=e.Button,r.CollapsablePanel=e.CollapsablePanel,r.DataActionList=e.DataActionList,r.DataActionListStyle=e.DataActionListStyle,r.Dropdown=e.Dropdown,r.DropdownButton=e.DropdownButton,r.DropdownItem=e.DropdownItem,r.DropdownMenu=e.DropdownMenu,r.FOCUSABLE_CONTAINER_CLASS=e.FOCUSABLE_CONTAINER_CLASS,r.FloatingPanel=e.FloatingPanel,r.Icon=e.Icon,r.Input=e.Input,r.Label=e.Label,r.Loading=e.Loading,r.LoadingType=e.LoadingType,r.MobilePanel=e.MobilePanel,r.NumericInput=e.NumericInput,r.PanelHeader=e.PanelHeader,r.Paper=e.Paper,r.Popper=e.Popper,r.Select=e.Select,r.Tab=e.Tab,r.Tabs=e.Tabs,r.TextInput=e.TextInput,r.Tooltip=e.Tooltip,r.UrlInput=e.UrlInput,r.defaultMessages=e.defaultMessages,r.useTrapFocusLoop=e.useTrapFocusLoop},function(e){n.ItemCategory=e.ItemCategory,n.ItemSelector=e.ItemSelector,n.ItemSelectorMode=e.ItemSelectorMode},function(e){i.CopyButton=e.CopyButton},function(e){l.useTheme=e.useTheme}],execute:function(){e((()=>{var e={33e3(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 13 16"><path fill="#076FE5" d="M9.4 0H0v16h13V3.6zM12 15H1V1h7v4h4zm0-11H9V1h.31L12 3.69z" opacity=".6"></path></svg>'},79097(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#076FE5" d="M15.29 1H3v22h18V6.709zM20 22H4V2h10v6h6zm0-15h-5V2h.2L20 6.8zm-6 4h-4v-1H7v3h1v4H7v3h3v-1h4v1h3v-3h-1v-4h1v-3h-3zm2 0v1h-1v-1zm-8 0h1v1H8zm1 8H8v-1h1zm7 0h-1v-1h1zm-1-2h-1v1h-4v-1H9v-4h1v-1h4v1h1z" opacity=".8"></path></svg>'},87722(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32"><path fill="#076FE5" fill-rule="evenodd" d="M27 13.018V9.699L19.3 2H5v11.018H2.018v14.964H5V30h22v-2.018h2.982V13.018zM19 3l7 7h-7zM6 3h12v8h8v2.018H6zm20 26H6v-1.018h20zm3.018-1.982H2.982V13.982h26.036zM8.85 23.268a3.179 3.179 0 1 1 4.495-4.495l-.707.707a2.18 2.18 0 1 0-3.08 3.082 2.23 2.23 0 0 0 3.08 0l.707.707a3.177 3.177 0 0 1-4.495-.001m13.19.716L19.666 18h1.076l1.768 4.453L24.304 18h1.078l-2.412 5.986zm-4.074-1.523a.84.84 0 0 0-.04-.684 1.33 1.33 0 0 0-.947-.477c-1.289-.198-1.953-.784-1.974-1.743a1.66 1.66 0 0 1 .48-1.2c.34-.354.81-.555 1.3-.557a2.11 2.11 0 0 1 1.902 1.102l-.85.526a1.12 1.12 0 0 0-1.05-.628.8.8 0 0 0-.58.249.67.67 0 0 0-.202.476c.004.206.014.616 1.126.786a2.19 2.19 0 0 1 1.652.952c.265.467.31 1.026.126 1.53a2.13 2.13 0 0 1-2.104 1.307 2.32 2.32 0 0 1-2.146-1.24l.864-.505a1.34 1.34 0 0 0 1.282.745c.482.049.944-.206 1.16-.64zM4.5 23.5a1 1 0 1 1 2 0 1 1 0 0 1-2 0" clip-rule="evenodd"></path></svg>'},48091(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path fill="#076FE5" d="M3 18H2v-7h1v4.293L5.293 13h1.414L4.85 14.857 7.006 18H5.793l-1.662-2.424L3 16.707zm13-7v7h1v-7zm-8 2v5h1v-3a1 1 0 1 1 2 0v3h1v-3a1 1 0 0 1 2 0v3h1v-3a1.991 1.991 0 0 0-3.5-1.309 1.96 1.96 0 0 0-2.5-.413V13zm13-6.291V23H3v-4h1v3h16V8h-6V2H4v8H3V1h12.29zM20 6.8 15.2 2H15v5h5z" opacity=".8"></path></svg>'},85978(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M12 0h4v16H0v-4h12z"></path><path fill="#FFF" d="M13 1h2v14H1v-2h12z"></path></svg>'},34163(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 10"><path fill="#B6B6B6" d="M10 2.778V0L0 10h2.778zM10 5.607 5.607 10H10z"></path></svg>'},56499(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m6.036 12.157 8.01-8.01a.5.5 0 1 1 .707.707l-8.01 8.01a1 1 0 0 1-1.415 0L1.146 8.682a.5.5 0 1 1 .708-.707z"></path></svg>'},39524(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M7.5 1.5a.5.5 0 0 1 1 0v2.8a.5.5 0 0 1-1 0zm6.028.874a.5.5 0 0 1 .062.705l-1.414 1.685a.5.5 0 1 1-.766-.643l1.414-1.685a.5.5 0 0 1 .704-.062m-10.352.062a.5.5 0 1 0-.766.643l1.414 1.685a.5.5 0 0 0 .766-.643zM6.244 10.6H5.43zM.961 9.8h4.88c.211 0 .359.19.359.4q0 .207.045.4a1.8 1.8 0 0 0 3.51 0h.814a2.6 2.6 0 0 1-5.139 0H.8v3.6h14.4v-3.6H9.755q.045-.194.045-.4c0-.21.148-.4.358-.4h4.881l-2.267-3.4H3.228zm11.81-4.2a.8.8 0 0 1 .666.356l2.429 3.642a.8.8 0 0 1 .134.444V14.2a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1-.8-.8v-4.158a.8.8 0 0 1 .134-.444l2.429-3.642a.8.8 0 0 1 .665-.356z" clip-rule="evenodd"></path></svg>'},30655(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M2.146 4.653a.485.485 0 0 1 .708 0L8 10.24l5.146-5.587a.485.485 0 0 1 .708 0 .54.54 0 0 1 0 .738l-5.5 5.956a.485.485 0 0 1-.708 0l-5.5-5.956a.54.54 0 0 1 0-.738" clip-rule="evenodd"></path></svg>'},94064(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M13.854 11.347a.486.486 0 0 1-.708 0L8 5.76l-5.146 5.587a.485.485 0 0 1-.708 0 .54.54 0 0 1 0-.738l5.5-5.956a.485.485 0 0 1 .708 0l5.5 5.956a.54.54 0 0 1 0 .738" clip-rule="evenodd"></path></svg>'},62838(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="m8.745 8 6.1 6.1a.527.527 0 1 1-.745.746L8 8.746l-6.1 6.1a.527.527 0 1 1-.746-.746l6.1-6.1-6.1-6.1a.527.527 0 0 1 .746-.746l6.1 6.1 6.1-6.1a.527.527 0 0 1 .746.746z"></path></svg>'},12046(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M11.227 1.312c-.404-.404-1.045-.417-1.432-.03L2.49 8.587l-.48 2.674a.637.637 0 0 0 .73.73l2.673-.48 7.305-7.306c.387-.387.374-1.028-.03-1.431zm-8.114 9.575.32-1.781 4.991-4.992 1.462 1.462-4.992 4.991zm7.473-6.012 1.402-1.4-1.462-1.463-1.401 1.402z" clip-rule="evenodd"></path><path fill="#000" d="M1.5 14a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1z"></path></svg>'},23662(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M7.5 0a.5.5 0 0 0-.5.5V7H.5a.5.5 0 0 0 0 1H7v6.5a.5.5 0 0 0 1 0V8h6.5a.5.5 0 0 0 0-1H8V.5a.5.5 0 0 0-.5-.5"></path></svg>'},50170(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" fill-rule="evenodd" d="M12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0m-1.27 4.936a6.5 6.5 0 1 1 .707-.707l4.136 4.137a.5.5 0 1 1-.707.707z" clip-rule="evenodd"></path></svg>'},9044(e){e.exports='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#000" d="M6 6.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-1 0zM9.5 6a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5"></path><path fill="#000" fill-rule="evenodd" d="M11 0H5a1 1 0 0 0-1 1v2H.5a.5.5 0 0 0 0 1h1.6l.81 11.1a1 1 0 0 0 .995.9h8.19a1 1 0 0 0 .995-.9L13.9 4h1.6a.5.5 0 0 0 0-1H12V1a1 1 0 0 0-1-1m0 3V1H5v2zm1.895 1h-9.79l.8 11h8.19z" clip-rule="evenodd"></path></svg>'},79244(e){"use strict";e.exports=o},67386(e){"use strict";e.exports=a},1888(e){"use strict";e.exports=l},14321(e){"use strict";e.exports=r},48407(e){"use strict";e.exports=i},56340(e){"use strict";e.exports=n}},t={};function s(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,s),r.exports}s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.p="";var c={};return s.p=window.jimuConfig.baseUrl,(()=>{"use strict";s.r(c),s.d(c,{__set_webpack_public_path__:()=>ia,default:()=>ra});var e=s(67386),t=s(79244),a=s(14321),o=s(39524),r=s.n(o),n=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const i=a=>{const o=window.SVG,{className:i}=a,l=n(a,["className"]),s=(0,t.classNames)("jimu-icon jimu-icon-component",i);return o?(0,e.jsx)(o,Object.assign({className:s,src:r()},l)):(0,e.jsx)("svg",Object.assign({className:s},l))},l={_widgetLabel:"Add Data",urlType:"Type",arcgisUrl:"ArcGIS Server Web Service",csvUrl:"CSV Layer",geojsonUrl:"GeoJSON Layer",kmlUrl:"KML Layer",wfsUrl:"WFS OGC Web Service",wmsUrl:"WMS OGC Web Service",wmtsUrl:"WMTS OGC Web Service",dropOrBrowse:"Drop or browse",defaultPlaceholderText:"There is currently no added data.",dropOrBrowseToUpload:"Drop or browse to upload",upload:"Upload",notSupportedFileTypeError:"The file type of {fileName} is not supported.",failedToUploadError:"The file {fileName} cannot be successfully uploaded.",exceedMaxSizeError:"The file size of {fileName} exceeds the maximum limit.",exceedMaxRecordsError:"The number of records in {fileName} exceeds the maximum threshold.",exceedMaxFileNumberError:"The number of files exceeds the allowed limit.",cannotBeAddedError:"{layerName} cannot be added. Support for adding this type is not yet available.",supportedTypesHint:"Supported formats: Shapefile, CSV, KML, GeoJSON, GPX, FGDB.",fileIsUploading:"{fileName} is being uploaded",filesAreUploading:"{number} files are being uploaded",clickToAddData:"Click to add data",sampleUrl:"Sample URL",fileHasNoValidData:"The file {fileName} does not contain any valid data.",multiFilesNotSupportedFileTypeError:"Unsupported type: The file type for {number} file(s) is not supported.",multiFilesFailedToUploadError:"Upload failed: Unable to upload {number} file(s).",multiFilesExceedMaxRecordsError:"Too many records: The limit for {number} file(s) has been exceeded.",multiFilesExceedMaxSizeError:"File size too large: The limit of {number} file(s) has been exceeded.",multiFilesHasNoValidData:"Invalid data: No valid data found for {number} file(s).",confirmZipType:"Confirm data type for ZIP files",fileGeodatabase:"File geodatabase"};var d=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})},u=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const p=new Map,m=new Map,f=e=>{if(!e||"object"!=typeof e)return!1;const t=e;return!!t.layerDefinition&&!!t.featureSet},v=e=>{var t;if(!(null===(t=null==e?void 0:e.isDataSourceSet)||void 0===t?void 0:t.call(e)))return;const a=e.getDataSourceJson(),o=null==a?void 0:a.childDataSourceJsons;o&&e.getChildDataSources().forEach(e=>{const t=e.jimuChildId,a=t?o[t]:null,r=Array.isArray(null==a?void 0:a.data)?a.data[0]:null,n=(f(r)?r:null)||m.get(e.id),i=m.has(e.id);n&&((null==a?void 0:a.isDataInDataSourceInstance)||i)&&y(e,n)})},y=(e,t)=>{var a,o,r;if(!e)return;const n=t||m.get(e.id)||(Array.isArray(null===(o=null===(a=null==e?void 0:e.getDataSourceJson)||void 0===a?void 0:a.call(e))||void 0===o?void 0:o.data)?e.getDataSourceJson().data[0]:null);if(!f(n))return;const i=e;if("function"!=typeof i.setLayerDefinition||"function"!=typeof i.setSourceRecords)return;i.setLayerDefinition(n.layerDefinition),n.popupInfo&&"function"==typeof i.setPopupInfo&&i.setPopupInfo(n.popupInfo);const l=((null===(r=n.featureSet)||void 0===r?void 0:r.features)||[]).map(e=>{return i.buildRecord((t=e)?Object.assign(Object.assign({},t),{attributes:Object.assign({},t.attributes||{}),geometry:t.geometry?Object.assign(Object.assign({},t.geometry),{spatialReference:t.geometry.spatialReference?Object.assign({},t.geometry.spatialReference):t.geometry.spatialReference}):t.geometry}):t);var t});i.setSourceRecords(l)},h=(e,a)=>d(void 0,void 0,void 0,function*(){const[o,r,n,i,l]=a,s={FeatureLayer:r,Graphic:n,Field:i,jsonUtils:l},c=(null==e?void 0:e.childDataSourceJsons)||{},u=yield Promise.all(Object.entries(c).map(e=>d(void 0,[e],void 0,function*([e,o]){if(!o)return null;const r=e||(null==o?void 0:o.layerId)||(null==o?void 0:o.id);if((null==o?void 0:o.type)===t.DataSourceTypes.GroupLayer||(null==o?void 0:o.childDataSourceJsons)){const e=yield h(o,a);return e&&r&&(e.id=r),e}const n=m.get(o.id)||(Array.isArray(null==o?void 0:o.data)?o.data[0]:null);if(!f(n))return null;const i=o.label||o.sourceLabel;return((e,t,a,o)=>{var r,n,i;const{FeatureLayer:l,Graphic:s,Field:c,jsonUtils:d}=e,u=null==t?void 0:t.layerDefinition,p=null==t?void 0:t.featureSet;if(!u)return null;const m=null===(r=null==u?void 0:u.drawingInfo)||void 0===r?void 0:r.renderer;return new l({id:o,source:(null===(n=null==p?void 0:p.features)||void 0===n?void 0:n.map(e=>s.fromJSON(e)))||[],objectIdField:null==u?void 0:u.objectIdField,fields:null===(i=null==u?void 0:u.fields)||void 0===i?void 0:i.map(e=>c.fromJSON(e)),sourceJSON:u,title:(null==u?void 0:u.name)||a,renderer:m?d.fromJSON(m):void 0})})(s,n,i,r)}))),p=u.filter(Boolean);return new o({title:(null==e?void 0:e.label)||(null==e?void 0:e.sourceLabel),layers:p})}),g=e=>d(void 0,void 0,void 0,function*(){const a=yield(0,t.loadArcGISJSAPIModules)(["esri/layers/GroupLayer","esri/layers/FeatureLayer","esri/Graphic","esri/layers/support/Field","esri/renderers/support/jsonUtils"]);return h(e.getDataSourceJson(),a)}),x=e=>d(void 0,void 0,void 0,function*(){var a,o,r,n;if(!(null===(a=null==e?void 0:e.isDataSourceSet)||void 0===a?void 0:a.call(e)))return;const i=e.getDataSourceJson();if((null==i?void 0:i.type)!==t.DataSourceTypes.GroupLayer||(null==i?void 0:i.url)||(null==i?void 0:i.itemId))return;const l=p.get(e.id)||(e=>{const t=null==e?void 0:e.childDataSourceJsons;if(!t)return null;const a=[],o=e=>{Object.values(e).forEach(e=>{if(null==e?void 0:e.childDataSourceJsons)return void o(e.childDataSourceJsons);const t=Array.isArray(null==e?void 0:e.data)?e.data[0]:null;(null==t?void 0:t.layerDefinition)&&(null==t?void 0:t.featureSet)&&a.push({layerDefinition:t.layerDefinition,featureSet:t.featureSet,popupInfo:t.popupInfo})})};return o(t),a.length?{layers:a}:null})(i),s=e;((e,t)=>{var a;null===(a=e.setItemInfo)||void 0===a||a.call(e,{type:"Feature Collection",typeKeywords:1===t?["Singlelayer"]:[]})})(s,(null===(o=null==l?void 0:l.layers)||void 0===o?void 0:o.length)||e.getChildDataSources().length);const c=yield g(e);if(!c)return;null===(n=(r=s).setJimuChildIdAsLayerId)||void 0===n||n.call(r,c,s),s.layer=c,s.createJSAPILayerByDataSource=()=>g(e).then(e=>{var t,a;return null===(a=(t=s).setJimuChildIdAsLayerId)||void 0===a||a.call(t,e,s),e});const u="__exb_kml_child_ds_hydrate_patched__",m=s;if(!m[u]&&"function"==typeof m.createChildDataSourceById){const e=m.createChildDataSourceById.bind(s);m[u]=!0,m.createChildDataSourceById=(...a)=>d(void 0,void 0,void 0,function*(){var o,r;const n=yield e(...a),i=null===(o=null==n?void 0:n.getDataSourceJson)||void 0===o?void 0:o.call(n);return(null===(r=null==n?void 0:n.isDataSourceSet)||void 0===r?void 0:r.call(n))&&(null==i?void 0:i.type)===t.DataSourceTypes.GroupLayer&&!(null==i?void 0:i.url)&&!(null==i?void 0:i.itemId)?(yield x(n),v(n)):y(n),v(s),n})}});var b=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})};function S(e){return t.DataSourceManager.getInstance().getDataSource(e)}function w(e,a,o){const r=new t.DataSourcesChangeMessage(e,a,o);t.MessageManager.getInstance().publishMessage(r)}const j=(e,a)=>e.map(e=>{const o=Object.assign({},e.dataSourceJson);return o.disableExport=a.disableExport,o.disableExport||(o.exportOptions={formats:Object.values(t.ExportFormat).filter(e=>{var t;return!(null===(t=a.notAllowedExportFormat)||void 0===t?void 0:t.includes(e))})}),Object.assign(Object.assign({},e),{dataSourceJson:o})}),I=e=>{var a;const o=e.getDataSourceJson(),r=null===(a=e.getAllChildDataSources)||void 0===a?void 0:a.call(e);(null==r?void 0:r.length)>0&&r.forEach(e=>{const a=e.getDataSourceJson(),r=("function"==typeof(null==a?void 0:a.without)?a.without("data"):a).set("disableExport",o.disableExport).set("exportOptions",o.exportOptions);t.DataSourceManager.getInstance().updateDataSourceByDataSourceJson(e,r)})};function N(e,a,o){return b(this,arguments,void 0,function*(e,a,o,r=!0){if(!e||0===e.length)return Promise.resolve([]);let n,i,l,s;if(e.some(e=>e.restLayer)){const e=yield(0,t.loadArcGISJSAPIModules)(["esri/layers/FeatureLayer","esri/Graphic","esri/layers/support/Field","esri/renderers/support/jsonUtils"]);n=e[0],i=e[1],l=e[2],s=e[3]}const c=j(e,o),d=[],y=c.map(e=>{var a,o,r,c,v,y,h;if(e.restLayer&&n&&i&&l&&s){const u=null===(o=null===(a=e.restLayer.layerDefinition)||void 0===a?void 0:a.drawingInfo)||void 0===o?void 0:o.renderer,p={id:e.dataSourceJson.id,dataSourceJson:(0,t.Immutable)(e.dataSourceJson),layer:new n({source:(null===(c=null===(r=e.restLayer.featureSet)||void 0===r?void 0:r.features)||void 0===c?void 0:c.map(e=>i.fromJSON(e)))||[],objectIdField:null===(v=e.restLayer.layerDefinition)||void 0===v?void 0:v.objectIdField,fields:null===(h=null===(y=e.restLayer.layerDefinition)||void 0===y?void 0:y.fields)||void 0===h?void 0:h.map(e=>l.fromJSON(e)),sourceJSON:e.restLayer.layerDefinition,title:e.dataSourceJson.label||e.dataSourceJson.sourceLabel,renderer:u?s.fromJSON(u):void 0})};return d.push(p),p}const g=e.dataSourceJson,{dataSourceJson:x,itemData:b}=(e=>{const t=null==e?void 0:e.childDataSourceJsons;if(!t)return{dataSourceJson:e,itemData:null};const a=[],o=e=>{const t={};return Object.keys(e).forEach(r=>{const n=e[r];if(null==n?void 0:n.childDataSourceJsons)return void(t[r]=Object.assign(Object.assign({},n),{childDataSourceJsons:o(n.childDataSourceJsons)}));const i=Array.isArray(null==n?void 0:n.data)?n.data[0]:null;if(f(i)&&(a.push({layerDefinition:i.layerDefinition,featureSet:i.featureSet,popupInfo:i.popupInfo}),(null==n?void 0:n.id)&&m.set(n.id,i)),n){const{data:e}=n,a=u(n,["data"]);t[r]=a}}),t},r=o(t);if(!a.length)return{dataSourceJson:e,itemData:null};const n={layers:a};return(null==e?void 0:e.id)&&p.set(e.id,n),{dataSourceJson:Object.assign(Object.assign({},e),{childDataSourceJsons:r}),itemData:n}})(g);return{id:x.id,dataSourceJson:(0,t.Immutable)(x),itemData:b}});return yield Promise.allSettled(d.filter(e=>e.layer).map(e=>b(this,void 0,void 0,function*(){var t;const a=null===(t=e.layer.sourceJSON)||void 0===t?void 0:t.capabilities;a&&(yield e.layer.load(),e.layer.sourceJSON.capabilities=a)}))),Promise.allSettled(y.map(e=>b(this,void 0,void 0,function*(){const a=yield t.DataSourceManager.getInstance().createDataSource(e),o=e.dataSourceJson;return(null==o?void 0:o.type)===t.DataSourceTypes.GroupLayer&&(null==o?void 0:o.childDataSourceJsons)&&!(null==o?void 0:o.url)&&!(null==o?void 0:o.itemId)&&(yield x(a)),a.isDataSourceSet()&&!a.areChildDataSourcesCreated()&&(yield a.childDataSourcesReady()),a}))).then(e=>e.filter(e=>"fulfilled"===e.status).map(e=>e.value)).then(o=>b(this,void 0,void 0,function*(){return o.forEach(e=>{v(e)}),yield Promise.allSettled(o.map(e=>x(e))),o.forEach(e=>{I(e)}),r&&o.length>0&&w(a,t.DataSourcesChangeType.Create,o),o.length<e.length?Promise.reject(new Error("Failed to create some data source.")):o}))})}function O(e){return b(this,void 0,void 0,function*(){return e&&0!==e.length?Promise.resolve().then(()=>{e.forEach(e=>{const a=S(e.dataSourceJson.id);a&&(t.DataSourceManager.getInstance().updateDataSourceByDataSourceJson(a,(0,t.Immutable)(e.dataSourceJson)),I(a))})}):Promise.resolve()})}function D(e,a,o=!0){const r=e.map(e=>S(e)).filter(e=>!!e);return o&&r.length>0&&w(a,t.DataSourcesChangeType.Remove,r),Promise.resolve().then(()=>{(e=>{e.forEach(e=>{e.isDataSourceSet()&&e.getAllChildDataSources().forEach(e=>{m.delete(e.id)})}),e.forEach(e=>{p.delete(e.id)})})(r),e.forEach(e=>{t.MutableStoreManager.getInstance().updateStateValue("setFilter",e,null),t.DataSourceManager.getInstance().destroyDataSource(e)})})}function M(e){var t;e.stopPropagation(),e.preventDefault(),null===(t=e.nativeEvent)||void 0===t||t.stopImmediatePropagation()}function C(e){const a=t.React.useRef(null),o=t.React.useRef(null);return Object.is(o.current,e)||(a.current=o.current,o.current=e),a.current}function T(e,t){return`add-data-${e}-${t}-${(new Date).getTime()}`}function F(e,a){return b(this,void 0,void 0,function*(){var o,r,n,i;if(1===((null==a?void 0:a.layers)||[]).concat((null==a?void 0:a.tables)||[]).length&&(1===(null===(o=null==a?void 0:a.layers)||void 0===o?void 0:o.length)&&(null===(n=null===(r=null==a?void 0:a.layers)||void 0===r?void 0:r[0])||void 0===n?void 0:n.type)===t.SupportedLayerServiceTypes.FeatureLayer||1===(null===(i=null==a?void 0:a.tables)||void 0===i?void 0:i.length))){const o=function(e,t){var a;return`${e}/${(null===(a=((null==t?void 0:t.layers)||[]).concat((null==t?void 0:t.tables)||[])[0])||void 0===a?void 0:a.id)||0}`}(e,a);return{url:o,layerDefinition:yield t.ServiceManager.getInstance().fetchServiceInfo(o).then(e=>e.definition)}}return null})}var z=s(23662),L=s.n(z),E=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const J=a=>{const o=window.SVG,{className:r}=a,n=E(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:L()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))};var R=s(56340);const A=()=>[{type:R.ItemCategory.MyContent,customLabel:"",enabled:!0,id:R.ItemCategory.MyContent},{type:R.ItemCategory.MyGroup,customLabel:"",enabled:!0,id:R.ItemCategory.MyGroup},{type:R.ItemCategory.MyOrganization,customLabel:"",enabled:!0,id:R.ItemCategory.MyOrganization},{type:R.ItemCategory.OrganizationContent,customLabel:"",enabled:!0,id:R.ItemCategory.OrganizationContent},{type:R.ItemCategory.Public,customLabel:"",enabled:!0,id:R.ItemCategory.Public},{type:R.ItemCategory.LivingAtlas,customLabel:"",enabled:!0,id:R.ItemCategory.LivingAtlas}],P=(e,t)=>((e,t)=>{var a;if(e.type!==R.ItemCategory.Curated)return t;const o=Number(null===(a=e.id.split("_"))||void 0===a?void 0:a.pop());return!o||o<2?t:`${t} ${o}`})(t,e((e=>{switch(e){case R.ItemCategory.MyContent:return"myContent";case R.ItemCategory.MyGroup:return"myGroup";case R.ItemCategory.MyOrganization:return"myOrganization";case R.ItemCategory.OrganizationContent:return"organizationContent";case R.ItemCategory.Public:return"public";case R.ItemCategory.LivingAtlas:return"livingAtlas";case R.ItemCategory.Curated:return"curated"}})(t.type)));var k=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})};const U=t.dataSourceUtils.dataSourceJsonCreator,{useMemo:B,useState:G}=t.React,{useSelector:V}=t.ReactRedux,H=(0,t.Immutable)([t.SupportedItemTypes.FeatureService,t.SupportedItemTypes.MapService,t.SupportedItemTypes.SceneService,t.SupportedItemTypes.FeatureCollection,t.SupportedItemTypes.ImageService,t.SupportedItemTypes.VectorTileService,t.SupportedItemTypes.CSV,t.SupportedItemTypes.GeoJSON,t.SupportedItemTypes.KML,t.SupportedItemTypes.WFS,t.SupportedItemTypes.WMS,t.SupportedItemTypes.WMTS,t.SupportedItemTypes.GroupLayer]),W=o=>{const{className:r="",widgetId:n,multiDataOptions:i,portalUrl:s,nextOrder:c,onChange:d,itemCategoriesInfo:u,displayedItemTypeCategories:p}=o,m=V(e=>e.dataSourcesInfo),[f,v]=G([]),y=B(()=>(0,t.Immutable)(i.filter(e=>{var a;const o=null===(a=null==m?void 0:m[e.dataSourceJson.id])||void 0===a?void 0:a.instanceStatus;return e.dataSourceJson.itemId&&(!o||o===t.DataSourceStatus.NotCreated)}).map(e=>e.dataSourceJson.itemId).concat(f)),[i,m,f]),h=B(()=>(0,t.Immutable)(i.map(e=>e.dataSourceJson.itemId).filter(e=>!y.some(t=>t===e))),[i,y]),g=t.hooks.useTranslation(a.defaultMessages,l),x=(()=>{const[e,a]=t.React.useState([]);return t.React.useEffect(()=>{"true"===t.utils.readLocalStorage("restrictEnterpriseOnly")&&a([R.ItemCategory.Public,R.ItemCategory.LivingAtlas])},[]),e})(),b=B(()=>u?u.filter(e=>e.enabled&&!x.includes(e.type)).map(e=>({id:e.id,type:e.type,customLabel:e.customLabel||P(g,e),curatedFilter:e.curatedFilter})).asMutable():void 0,[u,x,g]);return(0,e.jsx)("div",{className:`data-item-search w-100 h-100 ${r}`,css:$,children:(0,e.jsx)(R.ItemSelector,{mode:R.ItemSelectorMode.Simple,itemType:H,itemTypeCategory:p,portalUrl:s,isMultiple:!0,onSelect:(e,a)=>k(void 0,void 0,void 0,function*(){if(i.some(e=>{var t;return(null===(t=e.dataSourceJson)||void 0===t?void 0:t.itemId)===a.id}))return;v(f.concat(null==a?void 0:a.id));const e=yield function(e,a){return k(this,void 0,void 0,function*(){var o,r,n;try{if(!a)return Promise.resolve(null);if(a.type===t.SupportedItemTypes.FeatureService&&a.url&&/^(http(s)?:)?\/\//.test(a.url)){const i=a.url.split("?")[0].replace(/^http:/,"https:").replace(/\/$/,""),l=yield t.ServiceManager.getInstance().fetchServiceInfo(i).then(e=>e.definition);let s,c;const d={itemId:a.id,portalUrl:a.portalUrl};if(t.dataSourceUtils.isSupportedSingleArcGISLayerService(a.url))s=a.url,c=l;else{const e=((null==l?void 0:l.layers)||[]).concat((null==l?void 0:l.tables)||[]),t=yield F(i,l);t&&(s=t.url,c=t.layerDefinition,d.sourceLabel=a.title||(null===(o=e[0])||void 0===o?void 0:o.name))}if(s&&c)return null===(n=null===(r=U.createDataSourceJsonByLayerDefinition(e,c,s))||void 0===r?void 0:r.merge(d))||void 0===n?void 0:n.asMutable({deep:!0})}return Promise.resolve(U.createDataSourceJsonByItemInfo(e,a,a.portalUrl).asMutable({deep:!0}))}catch(e){return console.error("Failed to create data source",e),Promise.resolve(null)}})}(T(n,c),a);v(f.filter(e=>e!==(null==a?void 0:a.id))),d(i.concat({dataSourceJson:e,order:c}).filter(e=>!!e.dataSourceJson))}),onRemove:(e,t)=>{d(i.filter(e=>e.dataSourceJson.itemId!==t.id))},selectedItems:h,loadingItems:y,itemCategoriesInfo:b,disableDetailPopper:!0,allowAllSceneService:!0,showItemTypeCategoryFilter:!0,enableContentSortInSimpleMode:!0,disableDefaultSortSetting:!0})})};const $=t.css`
  position: relative;
`;var _=s(48407),K=s(50170),q=s.n(K),Z=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const X=a=>{const o=window.SVG,{className:r}=a,n=Z(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:q()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))};var Y=s(56499),Q=s.n(Y),ee=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const te=a=>{const o=window.SVG,{className:r}=a,n=ee(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:Q()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))};var ae=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})};const{useState:oe,useMemo:re,useRef:ne,useEffect:ie,useCallback:le}=t.React,se=1e3,ce={width:240,height:600},de=o=>{const{open:r,url:n,reference:i,translate:l,onConfirm:s,onClose:c,onError:d,failedToFetchMessage:u}=o,[p,m]=oe(!1),[f,v]=oe([]),[y,h]=oe(""),[g,x]=oe(null),[b,S]=oe(se),w=ne(null),[j,I]=oe(ce),N=le(e=>ae(void 0,void 0,void 0,function*(){m(!0);try{const a=yield(0,t.loadArcGISJSAPIModule)("esri/layers/ogc/wfsUtils"),o=yield a.getCapabilities(e),r=((null==o?void 0:o.featureTypes)||[]).filter(e=>!!(null==e?void 0:e.name));if(!r.length)throw new Error("NoFeatureTypes");v(r),x(r[0].name),w.current=e}catch(e){d(u),c()}finally{m(!1)}}),[u,c,d]);ie(()=>{r&&n&&(h(""),n!==w.current&&(v([]),x(null),S(se),N(n)))},[r,n,N]);const O=le(()=>{const e=null==i?void 0:i.current;if(!e)return;const t=e.getBoundingClientRect();(null==t?void 0:t.width)&&(null==t?void 0:t.height)&&I({width:Math.round(t.width),height:Math.round(t.height)})},[i]);ie(()=>{if(!r)return;if(O(),!(null==i?void 0:i.current)||"undefined"==typeof ResizeObserver)return;const e=new ResizeObserver(()=>{O()});return e.observe(i.current),()=>{e.disconnect()}},[r,i,O]);const D=re(()=>{const e=y.trim().toLowerCase();return e?f.filter(t=>{var a,o;const r=(null===(a=null==t?void 0:t.name)||void 0===a?void 0:a.toLowerCase())||"",n=(null===(o=null==t?void 0:t.title)||void 0===o?void 0:o.toLowerCase())||"";return r.includes(e)||n.includes(e)}):f},[f,y]);return r?(0,e.jsx)(a.Popper,{open:r,toggle:c,reference:i,placement:"top-start",offsetOptions:[0,-j.height],css:ue,autoFocus:!1,trapFocus:!1,forceLatestFocusElements:!0,children:(0,e.jsxs)("div",{className:"wfs-layer-popper",style:{width:j.width,height:j.height},children:[(0,e.jsx)(a.PanelHeader,{title:l("addLayer"),className:"p-4",showClose:!1,level:1}),(0,e.jsxs)("div",{className:"wfs-layer-content",children:[(0,e.jsx)("div",{className:"url-input-label",children:l("selectLayer")}),(0,e.jsx)(a.TextInput,{className:"wfs-layer-search",allowClear:!0,prefix:(0,e.jsx)(X,{size:"s"}),value:y,onChange:e=>{h(e.target.value)},placeholder:l("SearchLabel")}),(0,e.jsxs)("div",{className:"wfs-layer-list",role:"listbox","aria-label":l("selectLayer"),children:[p&&(0,e.jsx)("div",{className:"wfs-layer-loading",children:(0,e.jsx)(a.Loading,{className:"wfs-layer-loading-spinner",type:a.LoadingType.Donut,width:24,height:24})}),!p&&0===D.length&&(0,e.jsx)("div",{className:"wfs-layer-empty",children:l("noAvailableLayers")}),!p&&D.map(o=>{const r=o.title||o.name,n=o.name===g;return(0,e.jsx)(a.Tooltip,{title:r,enterDelay:1e3,enterNextDelay:1e3,children:(0,e.jsxs)("button",{type:"button",className:(0,t.classNames)("wfs-layer-item",{selected:n}),onClick:()=>{x(o.name)},role:"option","aria-selected":n,children:[(0,e.jsx)("span",{className:(0,t.classNames)("wfs-layer-item-icon",{selected:n}),children:(0,e.jsx)(te,{size:"s"})}),(0,e.jsx)("span",{className:"wfs-layer-item-label",children:r})]},o.name)})})]}),(0,e.jsxs)("div",{className:"wfs-layer-max-record",children:[(0,e.jsx)("div",{className:"url-input-label wfs-layer-max-record-label",children:l("maximumRecordCount")}),(0,e.jsx)(a.NumericInput,{size:"sm",min:1,max:3e4,showHandlers:!0,value:b,onChange:e=>{"number"!=typeof e||isNaN(e)?S(se):S(Math.min(3e4,Math.max(1,Math.floor(e))))},"aria-label":l("maximumRecordCount")})]}),(0,e.jsxs)("div",{className:"wfs-layer-actions",children:[(0,e.jsx)(a.Button,{type:"primary",className:"w-100 mb-2",disabled:!g,onClick:()=>{g&&s({layerName:g,maxRecordCount:b})},children:l("ok")}),(0,e.jsx)(a.Button,{className:"w-100",onClick:c,children:l("cancel")})]})]})]})}):null},ue=t.css`
  z-index: 2;
  background: none;
  border: none;
  box-shadow: none;
  overflow: visible;
  .wfs-layer-popper {
    color: var(--sys-color-surface-overlay-text);
    display: flex;
    flex-direction: column;
    background: var(--sys-color-surface-overlay);
    border-width: 1px;
    border-style: solid;
    border-color: var(--sys-color-divider-secondary);
    border-radius: var(--sys-shape-2);
    box-shadow: var(--sys-shadow-2);
    .panel-header {
      .title {
        color: var(--sys-color-surface-overlay-text);
      }
      .jimu-btn {
        color: var(--sys-color-action-text);
      }
    }
    .url-input-label {
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--sys-color-surface-overlay-text);
    }
  }
  .wfs-layer-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 0 16px 16px 16px;
    .wfs-layer-search {
      .input-wrapper {
        border-bottom: none;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }
  }
  .wfs-layer-list {
    border: 1px solid var(--sys-color-divider-primary);
    border-radius: var(--sys-shape-1);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    max-height: 140px;
    overflow-y: auto;
    margin-bottom: 12px;
    position: relative;
  }
  .wfs-layer-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 8px 0 6px;
    height: 28px;
    line-height: 28px;
    background: none;
    border: 1px solid transparent;
    text-align: left;
    color: inherit;
    cursor: pointer;
  }
  .wfs-layer-item:hover {
    background: var(--sys-color-action-hover);
  }
  .wfs-layer-item-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    margin-right: 6px;
    opacity: 0;
  }
  .wfs-layer-item-icon.selected {
    opacity: 1;
  }
  .wfs-layer-item-label {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wfs-layer-empty {
    padding: 4px 8px;
    color: var(--sys-color-action-disabled-text);
  }
  .wfs-layer-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    padding: 12px 0;
  }
  .wfs-layer-max-record {
    margin-bottom: 12px;
  }
  .wfs-layer-max-record-label {
    margin-bottom: 6px;
  }
  .wfs-layer-actions {
    margin-top: auto;
  }
  .wfs-layer-actions .jimu-btn {
    justify-content: center;
  }
`;var pe=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})};const{useState:me,useMemo:fe,useRef:ve,useEffect:ye,useCallback:he}=t.React,ge={width:240,height:600},xe=o=>{const{open:r,url:n,reference:i,translate:l,onConfirm:s,onClose:c,onError:d,failedToFetchMessage:u}=o,[p,m]=me(!1),[f,v]=me([]),[y,h]=me(""),[g,x]=me(new Set),b=ve(null),[S,w]=me(ge),j=he(e=>pe(void 0,void 0,void 0,function*(){var a,o;m(!0);try{const r=new(yield(0,t.loadArcGISJSAPIModule)("esri/layers/WMSLayer"))({url:e});yield r.load();const n=((null===(a=r.allSublayers)||void 0===a?void 0:a.toArray())||(null===(o=r.sublayers)||void 0===o?void 0:o.toArray())||[]).filter(e=>null!=(null==e?void 0:e.id)).map(e=>({id:`${e.id}`,title:e.title,name:e.name}));if(!n.length)throw new Error("NoSublayers");v(n),x(new Set),b.current=e}catch(e){d(u),c()}finally{m(!1)}}),[u,c,d]);ye(()=>{r&&n&&(h(""),n!==b.current&&(v([]),x(new Set),j(n)))},[r,n,j]);const I=he(()=>{const e=null==i?void 0:i.current;if(!e)return;const t=e.getBoundingClientRect();(null==t?void 0:t.width)&&(null==t?void 0:t.height)&&w({width:Math.round(t.width),height:Math.round(t.height)})},[i]);ye(()=>{if(!r)return;if(I(),!(null==i?void 0:i.current)||"undefined"==typeof ResizeObserver)return;const e=new ResizeObserver(()=>{I()});return e.observe(i.current),()=>{e.disconnect()}},[r,i,I]);const N=fe(()=>{const e=y.trim().toLowerCase();return e?f.filter(t=>{var a,o;const r=(null===(a=t.name)||void 0===a?void 0:a.toLowerCase())||"",n=(null===(o=t.title)||void 0===o?void 0:o.toLowerCase())||"";return r.includes(e)||n.includes(e)||t.id.includes(e)}):f},[f,y]),O=f.length>0&&g.size===f.length;return r?(0,e.jsx)(a.Popper,{open:r,toggle:c,reference:i,placement:"top-start",offsetOptions:[0,-S.height],css:be,autoFocus:!1,trapFocus:!1,forceLatestFocusElements:!0,children:(0,e.jsxs)("div",{className:"wms-layer-popper",style:{width:S.width,height:S.height},children:[(0,e.jsx)(a.PanelHeader,{title:l("addLayer"),className:"p-4",showClose:!1,level:1}),(0,e.jsxs)("div",{className:"wms-layer-content",children:[(0,e.jsx)("div",{className:"url-input-label",children:l("selectLayersToAdd")}),(0,e.jsx)(a.TextInput,{className:"wms-layer-search",allowClear:!0,prefix:(0,e.jsx)(X,{size:"s"}),value:y,onChange:e=>{h(e.target.value)},placeholder:l("SearchLabel")}),(0,e.jsxs)("div",{className:"wms-layer-list",role:"listbox","aria-label":l("selectLayer"),children:[p&&(0,e.jsx)("div",{className:"wms-layer-loading",children:(0,e.jsx)(a.Loading,{className:"wms-layer-loading-spinner",type:a.LoadingType.Donut,width:24,height:24})}),!p&&0===N.length&&(0,e.jsx)("div",{className:"wms-layer-empty",children:l("noAvailableLayers")}),!p&&N.map(o=>{const r=o.title||o.name||o.id,n=g.has(o.id);return(0,e.jsx)(a.Tooltip,{title:r,enterDelay:1e3,enterNextDelay:1e3,children:(0,e.jsxs)("button",{type:"button",className:(0,t.classNames)("wms-layer-item",{selected:n}),onClick:()=>{var e;e=o.id,x(t=>{const a=new Set(t);return a.has(e)?a.delete(e):a.add(e),a})},role:"option","aria-selected":n,children:[(0,e.jsx)("span",{className:(0,t.classNames)("wms-layer-item-icon",{selected:n}),children:(0,e.jsx)(te,{size:"s"})}),(0,e.jsx)("span",{className:"wms-layer-item-label",children:r})]},o.id)})})]}),(0,e.jsx)(a.Button,{className:"wms-layer-select-toggle",variant:"text",color:"primary",disabled:p||0===f.length,onClick:()=>{x(O?new Set:new Set(f.map(e=>e.id)))},children:l(O?"deselectAll":"selectAll")}),(0,e.jsxs)("div",{className:"wms-layer-actions",children:[(0,e.jsx)(a.Button,{type:"primary",className:"w-100 mb-2",disabled:!g.size,onClick:()=>{if(!g.size)return;const e=f.filter(e=>g.has(e.id)).map(e=>e.id);s({layerId:e.join("-")})},children:l("ok")}),(0,e.jsx)(a.Button,{className:"w-100",onClick:c,children:l("cancel")})]})]})]})}):null},be=t.css`
  z-index: 2;
  background: none;
  border: none;
  box-shadow: none;
  overflow: visible;
  .wms-layer-popper {
    color: var(--sys-color-surface-overlay-text);
    display: flex;
    flex-direction: column;
    background: var(--sys-color-surface-overlay);
    border-width: 1px;
    border-style: solid;
    border-color: var(--sys-color-divider-secondary);
    border-radius: var(--sys-shape-2);
    box-shadow: var(--sys-shadow-2);
    .panel-header {
      .title {
        color: var(--sys-color-surface-overlay-text);
      }
      .jimu-btn {
        color: var(--sys-color-action-text);
      }
    }
    .url-input-label {
      font-size: 13px;
      font-weight: 500;
      margin-bottom: 8px;
      color: var(--sys-color-surface-overlay-text);
    }
  }
  .wms-layer-content {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    padding: 0 16px 16px 16px;
    .wms-layer-search {
      .input-wrapper {
        border-bottom: none;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
      }
    }
  }
  .wms-layer-list {
    border: 1px solid var(--sys-color-divider-primary);
    border-radius: var(--sys-shape-1);
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    max-height: 140px;
    overflow-y: auto;
    margin-bottom: 12px;
    position: relative;
  }
  .wms-layer-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 8px 0 6px;
    height: 28px;
    line-height: 28px;
    background: none;
    border: 1px solid transparent;
    text-align: left;
    color: inherit;
    cursor: pointer;
  }
  .wms-layer-item:hover {
    background: var(--sys-color-action-hover);
  }
  .wms-layer-item-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    margin-right: 6px;
    opacity: 0;
  }
  .wms-layer-item-icon.selected {
    opacity: 1;
  }
  .wms-layer-item-label {
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .wms-layer-empty {
    padding: 4px 8px;
    color: var(--sys-color-action-disabled-text);
  }
  .wms-layer-loading {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
    padding: 12px 0;
  }
  .wms-layer-actions {
    margin-top: auto;
  }
  .wms-layer-actions .jimu-btn {
    justify-content: center;
  }
  .wms-layer-select-toggle {
    padding: 0;
    width: auto;
    align-self: flex-start;
    margin-bottom: 12px;
  }
`;var Se=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})};const we=t.dataSourceUtils.dataSourceJsonCreator;var je;!function(e){e.NotSupportedType="addDataErrorNotSupported",e.FailedToFetch="invalidResourceItem",e.CannotBeAdded="cannotBeAddedError"}(je||(je={}));const{useState:Ie,useMemo:Ne,useRef:Oe,useEffect:De,useCallback:Me}=t.React;var Ce;!function(e){e.ArcGISWebService="arcgisUrl",e.WMS="wmsUrl",e.WMTS="wmtsUrl",e.WFS="wfsUrl",e.KML="kmlUrl",e.CSV="csvUrl",e.GeoJSON="geojsonUrl"}(Ce||(Ce={}));const Te={[Ce.ArcGISWebService]:"https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0",[Ce.WMS]:"https://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?service=WMS&request=GetCapabilities",[Ce.WMTS]:"https://wayback.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/WMTS/1.0.0/default028mm/MapServer/tile/45134/%7Blevel%7D/%7Brow%7D/%7Bcol%7D",[Ce.WFS]:"https://dservices.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/services/JapanPrefectures2018/WFSServer",[Ce.KML]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_animated.kml",[Ce.CSV]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv",[Ce.GeoJSON]:"https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson"},Fe=["https"],ze=o=>{const{className:r="",widgetId:n,onChange:i,setErrorMsg:s,nextOrder:c,multiDataOptions:d,popperReference:u}=o,p=t.hooks.useTranslation(t.defaultMessages,a.defaultMessages,l),[m,f]=Ie(Ce.ArcGISWebService),[v,y]=Ie({value:"",valid:!0}),[h,g]=Ie(!1),[x,b]=Ie(!1),[S,w]=Ie(!1),j=Oe(null),I=Oe(null),N=Oe(null),O=null!=u?u:I,D=Le(null==v?void 0:v.value),M=Ne(()=>{const e={};return Object.values(Ce).forEach(t=>{e[t]=p(t)}),e},[p]),C=e=>{const a=function(e,a){if(!e||!a)return!0;const o=Le(e);if(!o)return!1;return a!==Ce.ArcGISWebService?/^https:\/\//.test(o):t.dataSourceUtils.isSupportedArcGISService(o)||Ee(o)}(e,m);return{valid:a,msg:!a&&p("invalidUrlMessage")}};De(()=>{m!==Ce.WFS&&x&&b(!1),m!==Ce.WMS&&S&&w(!1)},[m,x,S]),De(()=>{const e=null==v?void 0:v.value;(x||S)&&N.current&&e!==N.current&&(b(!1),w(!1)),N.current=e},[null==v?void 0:v.value,x,S]);const F=Me(()=>{b(!0)},[]),z=Me(()=>{b(!1)},[]),L=Me(()=>{w(!0)},[]),E=Me(()=>{w(!1)},[]),J=`add-data-${n}-sample-url-content`;return(0,e.jsxs)("div",{className:`data-url-input w-100 h-100 p-4 ${r}`,css:Ae,children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"url-input-label",children:p("urlType")}),(0,e.jsxs)(a.Dropdown,{className:"w-100",activeIcon:!0,menuRole:"listbox","aria-label":p("urlType"),children:[(0,e.jsx)(a.DropdownButton,{size:"sm",className:"text-left",role:"combobox",children:M[m]}),(0,e.jsx)(a.DropdownMenu,{children:Object.keys(M).map((t,o)=>(0,e.jsx)(a.DropdownItem,{active:m===t,onClick:()=>{var e;(e=t)!==m&&(f(e),y({value:"",valid:v.valid}))},children:M[t]},o))})]})]}),(0,e.jsxs)("div",{className:"mt-4",children:[(0,e.jsx)("div",{className:"url-input-label",children:p("url")}),(0,e.jsx)(a.UrlInput,{className:(0,t.classNames)({"with-error":!v.valid}),height:80,schemes:Fe,value:v.value,checkValidityOnChange:C,checkValidityOnAccept:C,onChange:e=>{y(e)},"aria-label":p("url")})]}),(0,e.jsx)("div",{className:"mt-4",children:(0,e.jsx)(a.Button,{onClick:()=>Se(void 0,void 0,void 0,function*(){var e;const a=null==v?void 0:v.value,o=Le(a);if(o)if(o!==a&&y({value:o,valid:v.valid}),m!==Ce.WFS)if(m!==Ce.WMS)try{g(!0);const e=yield Re(T(n,c),o,m);if(j.current=e,e.type===t.DataSourceTypes.GroupLayer)throw new Error(je.CannotBeAdded);e&&i(d.concat({dataSourceJson:e,order:c}))}catch(t){t.message===je.NotSupportedType?s(p(je.NotSupportedType)):t.message===je.CannotBeAdded?s(p(je.CannotBeAdded,{layerName:null===(e=j.current)||void 0===e?void 0:e.sourceLabel})):s(p(je.FailedToFetch))}finally{j.current=null,g(!1)}else L();else F()}),type:"primary",disabled:!v.value||!v.valid||x||S,className:"px-4 w-100",title:p("add"),"aria-label":p("add"),ref:I,children:p("add")})}),(0,e.jsx)(de,{open:x,url:D,reference:O,translate:p,onConfirm:e=>Se(void 0,void 0,void 0,function*(){const t=Le(null==v?void 0:v.value);if(t&&(null==e?void 0:e.layerName))try{g(!0);const a="wfs-laye-option",o=yield Re(T(n,c),t,Ce.WFS,{layerName:e.layerName,maxRecordCount:e.maxRecordCount,query:{id:a,label:a,maximum:e.maxRecordCount}});o&&i(d.concat({dataSourceJson:o,order:c}))}catch(e){s(p(je.FailedToFetch))}finally{g(!1),b(!1)}}),onClose:z,onError:s,failedToFetchMessage:p(je.FailedToFetch)}),(0,e.jsx)(xe,{open:S,url:D,reference:O,translate:p,onConfirm:e=>Se(void 0,void 0,void 0,function*(){const t=Le(null==v?void 0:v.value);if(t&&(null==e?void 0:e.layerId))try{g(!0);const a=yield Re(T(n,c),t,Ce.WMS,{layerId:e.layerId});a&&i(d.concat({dataSourceJson:a,order:c}))}catch(e){s(p(je.FailedToFetch))}finally{g(!1),w(!1)}}),onClose:E,onError:s,failedToFetchMessage:p(je.FailedToFetch)}),(0,e.jsxs)("div",{className:"mt-4",children:[(0,e.jsxs)("div",{className:"url-input-label mb-1 d-flex align-items-center sample-url-title",role:"group","aria-label":p("sampleUrl"),children:[p("sampleUrl"),(0,e.jsx)(_.CopyButton,{text:Te[m],"aria-describedby":J})]}),(0,e.jsx)("div",{className:"sample-url",id:J,children:Te[m]})]}),h&&(0,e.jsx)("div",{className:"upload-loading-container",children:(0,e.jsx)("div",{className:"upload-loading-content",children:(0,e.jsx)(a.Loading,{className:"upload-loading",type:a.LoadingType.Primary,width:30,height:28})})})]})};function Le(e){var t;return null!==(t=null==e?void 0:e.trim())&&void 0!==t?t:""}function Ee(e){return!(!e||!/^https:\/\//.test(e))&&/\/content\/items\/.+\/resources\/styles\/root.json/.test(e)}const Je={[Ce.CSV]:t.DataSourceTypes.CSV,[Ce.GeoJSON]:t.DataSourceTypes.GeoJSON,[Ce.KML]:t.DataSourceTypes.KML,[Ce.WFS]:t.DataSourceTypes.WFS,[Ce.WMS]:t.DataSourceTypes.WMS,[Ce.WMTS]:t.DataSourceTypes.WMTS};function Re(e,a,o,r){return Se(this,void 0,void 0,function*(){const n=Le(a);if(!n||!o)return Promise.reject(new Error("Need URL."));if(a=n.replace(/^http:/,"https:"),Object.keys(Je).some(e=>e===o)){const t=o===Ce.WFS?r:null;return{id:e,type:Je[o],sourceLabel:(null==t?void 0:t.layerName)||a.split("?")[0].split("/").filter(e=>!!e).reverse()[0],url:a,query:null==t?void 0:t.query,layerId:null==r?void 0:r.layerId}}return o===Ce.ArcGISWebService?Ee(a=a.split("?")[0])?function(e,a){return Se(this,void 0,void 0,function*(){if(!e||!a)return Promise.reject(new Error(je.NotSupportedType));const o=e.match(new RegExp("(?<portalUrl>.+)content/items/.+/resources/styles/root.json")).groups.portalUrl,r=e.match(new RegExp(".+/content/items/(?<itemId>.+)/resources/styles/root.json")).groups.itemId,n=yield t.requestUtils.requestWrapper(o,e=>t.esri.restPortal.getItem(r,{portal:o,authentication:e}));return"Vector Tile Service"!==n.type?Promise.reject(new Error(je.NotSupportedType)):{id:a,type:t.DataSourceTypes.VectorTileService,sourceLabel:n.title,url:e,itemId:r,portalUrl:o.replace("/sharing/rest/","")}})}(a,e):function(e,a){return Se(this,void 0,void 0,function*(){if(!e||!a)return Promise.reject(new Error(je.NotSupportedType));const o=yield t.ServiceManager.getInstance().fetchServiceInfo(e).then(e=>e.definition);let r=e,n=o;if(t.dataSourceUtils.isSupportedWholeArcGISService(e)&&we.getDataSourceTypeFromArcGISWholeServiceUrl(e)===t.DataSourceTypes.FeatureService){const t=e.split("?")[0].replace(/^http:/,"https:").replace(/\/$/,""),a=yield F(t,o);a&&(r=a.url,n=a.layerDefinition)}return function(e,t,a){var o;const r=null===(o=we.createDataSourceJsonByLayerDefinition(e,a,t))||void 0===o?void 0:o.asMutable({deep:!0});if(r)return r;throw new Error(je.FailedToFetch)}(a,r,n)})}(a,e):Promise.reject(new Error(je.NotSupportedType))})}const Ae=t.css`
  position: relative;
  overflow: auto;

  .upload-loading-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
  .upload-loading-content {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .sample-url {
    font-style: italic;
    font-weight: 400;
    font-size: 13px;
    word-break: break-all;
    color: var(--sys-color-surface-overlay-text);
  }

  .url-input.with-error {
    margin-bottom: 60px;
  }
  .url-input-label {
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 8px;
    color: var(--sys-color-surface-overlay-text);
  }
  .sample-url-title {
    justify-content: space-between;
  }
  .jimu-dropdown-button {
    color: var(--sys-color-surface-overlay-text);
  }
`;var Pe,ke=s(1888),Ue=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})};!function(e){e.CSV="csv",e.GeoJson="geojson",e.Shapefile="shapefile",e.KML="kml",e.GPX="gpx",e.FileGeoDatabase="fileGeodatabase"}(Pe||(Pe={}));const Be=[Pe.Shapefile,Pe.FileGeoDatabase],Ge={[Pe.CSV]:10485760,[Pe.GeoJson]:10485760,[Pe.Shapefile]:2097152,[Pe.FileGeoDatabase]:10485760,[Pe.KML]:10485760,[Pe.GPX]:10485760};var Ve;!function(e){e.NotSupportedType="notSupportedFileTypeError",e.FailedToUpload="failedToUploadError",e.ExceedMaxSize="exceedMaxSizeError",e.ExceedMaxRecords="exceedMaxRecordsError",e.NoValidData="fileHasNoValidData",e.ExceedMaxFileNumber="exceedMaxFileNumberError"}(Ve||(Ve={}));const He=new Map([[Ve.NotSupportedType,"multiFilesNotSupportedFileTypeError"],[Ve.FailedToUpload,"multiFilesFailedToUploadError"],[Ve.ExceedMaxSize,"multiFilesExceedMaxSizeError"],[Ve.ExceedMaxRecords,"multiFilesExceedMaxRecordsError"],[Ve.NoValidData,"multiFilesHasNoValidData"]]),We=4e3,{useState:$e,useEffect:_e,useMemo:Ke,useRef:qe}=t.React,Ze=/iPad|iPhone|iPod/.test(window.navigator.userAgent)?void 0:Object.values(Pe).map(e=>Qe(e)).join(","),Xe=o=>{const{className:r="",onChange:n,setErrorMsg:i,nextOrder:c,portalUrl:d,widgetId:u,multiDataOptions:p,onlyOneTab:m}=o,f=t.hooks.useTranslation(t.defaultMessages,a.defaultMessages,l),v=Ke(()=>`${u}-drag-to-upload`,[u]),y=Ke(()=>`${u}-click-to-upload`,[u]),[h,g]=$e(!1),x=qe(null),b=qe([]);_e(()=>{n(p)},[p,n]);const S=qe(null),w=e=>Ue(void 0,void 0,void 0,function*(){var a;if(!e.type)throw new Error(Ve.NotSupportedType);if(e.size>Ge[e.type])throw new Error(Ve.ExceedMaxSize);const o=yield function(e,a){return Ue(this,void 0,void 0,function*(){var o,r,n,i,l,s,c,d,u,p;const m=yield(0,t.loadArcGISJSAPIModule)("esri/request");if(e.type===Pe.KML){const a=function(){var e,a,o;const r=null===(a=null===(e=(0,t.getAppStore)().getState())||void 0===e?void 0:e.portalSelf)||void 0===a?void 0:a.isPortal;if(r){return`${null===(o=(0,t.getAppStore)().getState())||void 0===o?void 0:o.portalUrl}/sharing/kml`}const n=window.jimuConfig.hostEnv;return`https://utility${"dev"===n?"devext":"qa"===n?"qa":""}.arcgis.com/sharing/kml`}(),o=yield function(e){return new Promise(t=>{const a=new FileReader;a.onload=e=>{t(e.target.result)},a.readAsText(e.data.get("file"))})}(e),r=yield m(a,{query:{kmlString:encodeURIComponent(o),model:"simple",folders:""},responseType:"json"});return null==r?void 0:r.data}let f={},v=null;if(e.type!==Pe.GPX){if((null===(r=null===(o=(0,t.getAppStore)().getState())||void 0===o?void 0:o.portalSelf)||void 0===r?void 0:r.isPortal)&&e.type===Pe.GeoJson)f={targetSR:{wkid:102100,latestWkid:3857},type:e.type,maxRecordCount:We};else{e.type===Pe.Shapefile&&(v=yield function(e){return Ue(this,void 0,void 0,function*(){try{const{JSZip:a}=yield t.moduleLoader.loadModule("jimu-core/jszip"),o=yield a.loadAsync(e),r=Object.keys(o.files).find(e=>e.toLowerCase().endsWith(".prj"));if(!r)return null;const n=yield o.files[r].async("string"),i=n.match(/AUTHORITY\["EPSG","(\d+)"\]/);return i?{wkid:Number(i[1])}:{wkt:n}}catch(e){return console.error("Error extracting projection from zip:",e),null}})}(e.data.get("file")));const o=`${a}/sharing/rest/content/features/analyze`;e.data.set("analyzeParameters",JSON.stringify({targetSR:v,enableGlobalGeocoding:!0,sourceLocale:null!==(i=null===(n=(0,t.getAppStore)().getState().appContext)||void 0===n?void 0:n.locale)&&void 0!==i?i:"en"}));const r=yield m(o,{body:e.data,method:"post"});e.data.delete("analyzeParameters"),f=null===(l=null==r?void 0:r.data)||void 0===l?void 0:l.publishParameters}}const y=`${a}/sharing/rest/content/features/generate`;e.data.set("publishParameters",JSON.stringify(Object.assign(Object.assign({},f),{name:e.name,maxRecordCount:e.type===Pe.CSV?f.maxRecordCount:We,targetSR:v})));const h=yield m(y,{body:e.data,method:"post"});return e.data.delete("publishParameters"),(null===(s=null==h?void 0:h.data)||void 0===s?void 0:s.featureCollection)&&(null===(u=null===(d=null===(c=null==h?void 0:h.data)||void 0===c?void 0:c.featureCollection)||void 0===d?void 0:d.layers)||void 0===u||u.forEach(t=>{var a,o,r,n;null===(o=null===(a=t.featureSet)||void 0===a?void 0:a.features)||void 0===o||o.forEach(e=>{var a,o;null===(o=null===(a=t.layerDefinition)||void 0===a?void 0:a.fields)||void 0===o||o.forEach(t=>{var a;const o=null===(a=e.attributes)||void 0===a?void 0:a[t.name];if("esriFieldTypeSmallInteger"===t.type){if("boolean"==typeof o)return void(e.attributes[t.name]=o?1:0);"number"!=typeof o&&(e.attributes[t.name]=null)}})}),(null===(n=null===(r=t.layerDefinition)||void 0===r?void 0:r.name)||void 0===n?void 0:n.includes(e.name))||(t.layerDefinition.name=`${e.name} - ${t.layerDefinition.name}`)})),null===(p=null==h?void 0:h.data)||void 0===p?void 0:p.featureCollection})}(e,d),r=(null==o?void 0:o.featureCollection)||o,n=e.type===Pe.KML?(null==r?void 0:r.layers)||[]:null===(a=null==r?void 0:r.layers)||void 0===a?void 0:a.filter(e=>{var t,a;return(null===(a=null===(t=null==e?void 0:e.featureSet)||void 0===t?void 0:t.features)||void 0===a?void 0:a.length)>0});if(!(null==n?void 0:n.length))throw new Error(Ve.NoValidData);if(e.type===Pe.KML){const a=o,r=T(u,c),i=(null==a?void 0:a.folders)||[],l=new Map;i.forEach(e=>l.set(e.id,e));const s=e=>e.replace("esriGeometry","").toLowerCase(),d=new Map;n.forEach((e,t)=>{var a,o,r;null==(null===(a=null==e?void 0:e.layerDefinition)||void 0===a?void 0:a.id)&&(e.layerDefinition.id=t);const n=(null===(o=e.layerDefinition)||void 0===o?void 0:o.geometryType)||(null===(r=e.featureSet)||void 0===r?void 0:r.geometryType);n&&!d.has(n)&&d.set(n,e)});const p=new Map;n.forEach(e=>{var t,a,o,r;const n=(null===(t=e.layerDefinition)||void 0===t?void 0:t.geometryType)||(null===(a=e.featureSet)||void 0===a?void 0:a.geometryType);if(!n)return;const i=new Map;null===(r=null===(o=e.featureSet)||void 0===o?void 0:o.features)||void 0===r||r.forEach(e=>{var t;const a=null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.id;"number"==typeof a&&i.set(a,e)}),p.set(n,i)});const m=(e,a,o,r,n,i)=>{const l=d.get(a);if(!l)return null;const s=Object.assign({},l.layerDefinition),c=function(e,a){var o;const r={};return null===(o=null==e?void 0:e.fields)||void 0===o||o.forEach(e=>{const a=t.dataSourceUtils.convertFieldToJimuField(e,null,null);a&&(r[a.jimuName]=a)}),{label:null==e?void 0:e.name,childId:a,jimuChildId:a,idField:null==e?void 0:e.objectIdField,fields:r}}(s,i),u=t.dataSourceUtils.getChildDataSourceId(e,i),m=p.get(a)||new Map,f=o.map(e=>m.get(e)).filter(Boolean);return{jimuChildId:i,childJson:{id:u,type:t.DataSourceTypes.FeatureLayer,sourceLabel:r,label:r,layerId:i,geometryType:null==s?void 0:s.geometryType,isDataInDataSourceInstance:!0,schema:c,data:[{layerDefinition:s,featureSet:Object.assign(Object.assign({},l.featureSet),{features:f})}]}}},f=(e,a,o)=>{const r={};a.forEach(a=>{const o=l.get(a);if(!o)return;const n=`g${o.id}`,i=t.dataSourceUtils.getChildDataSourceId(e,n),s=[],c=new Set,d=o.subFolderIds||[];for(let e=0;e<d.length;e++){const t=d[e];c.has(t)||(c.add(t),s.push(t))}const u=o.featureInfos||[];for(let e=0;e<u.length;e++){const t=u[e];if("Folder"!==(null==t?void 0:t.type))continue;const a=t.id;c.has(a)||(c.add(a),s.push(a))}const p=f(i,s,(o.featureInfos||[]).filter(e=>"Folder"!==e.type));r[n]={id:i,type:t.DataSourceTypes.GroupLayer,sourceLabel:o.name,label:o.name,childDataSourceJsons:p}});const n=new Map;return(o||[]).forEach(e=>{if("Folder"===(null==e?void 0:e.type))return;const t=n.get(e.type)||[];t.push(e.id),n.set(e.type,t)}),Array.from(n.entries()).forEach(([t,a],o)=>{const n=s(t),i=n.charAt(0).toUpperCase()+n.slice(1),l=e.split("-").pop()||"root",c=m(e,t,a,i,o,`l${l}-${n}`);c&&(r[c.jimuChildId]=c.childJson)}),r},v=i.filter(e=>null==e.parentFolderId||-1===e.parentFolderId).map(e=>e.id),y=((null==a?void 0:a.featureInfos)||[]).filter(e=>"Folder"!==e.type),h=i.length>0?f(r,v,y):n.reduce((e,t,a)=>{var o,n,i;const l=(null===(o=t.layerDefinition)||void 0===o?void 0:o.geometryType)||(null===(n=t.featureSet)||void 0===n?void 0:n.geometryType),c=((null===(i=t.featureSet)||void 0===i?void 0:i.features)||[]).map(e=>{var t;return null===(t=null==e?void 0:e.attributes)||void 0===t?void 0:t.id}).filter(e=>"number"==typeof e),d=s(l),u=d.charAt(0).toUpperCase()+d.slice(1),p=m(r,l,c,u,a,`lroot-${d}`);return p&&(e[p.jimuChildId]=p.childJson),e},{});return[{dataSourceJson:{id:r,type:t.DataSourceTypes.GroupLayer,sourceLabel:e.name,label:e.name,childDataSourceJsons:h},order:c}]}return n.map((a,o)=>{var r;return{dataSourceJson:{id:T(u,c+o),type:t.DataSourceTypes.FeatureLayer,sourceLabel:(null===(r=a.layerDefinition)||void 0===r?void 0:r.name)||(0===o?e.name:`${e.name} ${o}`)},order:c+o,restLayer:Object.assign(Object.assign({},a),{layerDefinition:Object.assign(Object.assign({},a.layerDefinition),{capabilities:"Query, Editing, Create, Delete, Update, Extract"})})}})}),[j,I]=$e(null),[N,O]=$e([]),[D,C]=$e(!1),F=e=>{if(!e.target.files)return;I(null);const a=new Map,o=Array.from(e.target.files);if(o.length>30)a.set(Ve.ExceedMaxFileNumber,[]),E(a);else{const e=o.map(e=>function(e){const a=function(e){if(Ye(e))return null;return Object.values(Pe).find(t=>null==e?void 0:e.endsWith(Qe(t)))||null}(e.name),o=a?e.name.replace(`.${a}`,""):e.name.replace(/\.zip$/i,""),r=new FormData;r.set("file",e),a&&r.set("filetype",a);return r.set("f","json"),{id:(0,t.uuidv1)(),type:a,isZip:Ye(e.name),name:o,data:r,size:e.size}}(e));x.current=e;e.filter(e=>e.isZip).length>0?(O(e),C(!0)):L(e)}},z=N.filter(e=>e.isZip).every(e=>!!e.type),L=e=>Ue(void 0,void 0,void 0,function*(){g(!0);let t=[];const a=new Map;yield Promise.allSettled(e.map(e=>w(e))).then(o=>{o.forEach((o,r)=>{var n;const i=e[r];if(b.current.some(e=>e.id===i.id))b.current=b.current.filter(e=>e.id!==i.id);else if("fulfilled"===o.status)(null===(n=o.value)||void 0===n?void 0:n.length)&&(t=t.concat(o.value));else{const e=(e=>{var t,a,o,r;return e.message===Ve.NotSupportedType?Ve.NotSupportedType:e.message===Ve.ExceedMaxSize||(null===(o=null===(a=null===(t=e.details)||void 0===t?void 0:t.messages)||void 0===a?void 0:a[0])||void 0===o?void 0:o.includes("max size"))?Ve.ExceedMaxSize:e.message===Ve.ExceedMaxRecords||(null===(r=e.message)||void 0===r?void 0:r.includes("maximum number"))?Ve.ExceedMaxRecords:e.message===Ve.NoValidData?Ve.NoValidData:Ve.FailedToUpload})(o.reason);a.set(e,a.has(e)?a.get(e).concat(i.name):[i.name])}})}),(null==t?void 0:t.length)>0&&n(p.concat(t)),g(!1),E(a)}),E=e=>{if(e.size>0){const t=Array.from(e.keys()).map(t=>{const a=e.get(t);return a.length?1===a.length&&1===e.size?{errStr:f(t,{fileName:a[0]})}:{errStr:f(He.get(t),{number:a.length}),details:a}:{errStr:f(t)}});1!==t.length||t[0].details?I(t.map(e=>Object.assign(Object.assign({},e),{open:!0}))):i(t[0].errStr)}x.current=null,S.current.value=null},R=qe(null);(0,a.useTrapFocusLoop)(R,!0,!0,!0,D);t.hooks.useUpdateEffect(()=>{!h&&S.current&&(0,t.focusElementInKeyboardMode)(S.current)},[h]);const[A,P]=$e(!1),k=(0,ke.useTheme)(),U=qe(null);_e(()=>{if(null==j?void 0:j.length){const e=setTimeout(()=>{U.current===e&&(I(null),U.current=null)},5e3);U.current=e}},[j]);const B=(t=!1)=>{var a,o,r;const n=null===(a=x.current)||void 0===a?void 0:a.length,i=n>1,l=i?"filesAreUploading":"fileIsUploading",s=i?"number":"fileName",c=i?n:null===(r=null===(o=x.current)||void 0===o?void 0:o[0])||void 0===r?void 0:r.name;return f(l,{[s]:!i&&t?(0,e.jsx)("div",{className:"w-100 multiple-lines-truncate font-16",children:c}):c})},G=`add-data-${u}-supported-types-desc`,V=`add-data-${u}-upload-area-desc`,H=`add-data-${u}-uploading-text-container`;return(0,e.jsxs)("div",{className:`data-file-upload w-100 h-100 pb-4 pt-6 px-4 d-flex ${r}`,css:et(m),children:[(0,e.jsxs)("div",{className:"supported-type-icons d-flex justify-content-around align-items-center px-6 mb-4",children:[(0,e.jsx)(a.Icon,{width:13,height:16,icon:s(33e3)}),(0,e.jsx)(a.Icon,{width:24,height:24,icon:s(79097)}),(0,e.jsx)(a.Icon,{width:32,height:32,icon:s(87722)}),(0,e.jsx)(a.Icon,{width:24,height:24,icon:s(48091)}),(0,e.jsx)(a.Icon,{width:13,height:16,icon:s(33e3)})]}),(0,e.jsx)("div",{className:"supported-types",id:G,children:f("supportedTypesHint")}),(0,e.jsxs)("div",{className:"mt-4 drag-area-container",children:[(0,e.jsxs)(a.Label,{for:v,className:"drag-area text-center d-flex",children:[(0,e.jsx)("div",{className:"font-14",id:V,children:f("dropOrBrowseToUpload")}),(0,e.jsxs)("div",{className:"upload-btn-container mt-4",title:f("upload"),"aria-live":"assertive",children:[(0,e.jsxs)(a.Label,{for:y,className:"upload-btn text-center mb-0 text-truncate",css:A?t.css`outline: ${t.polished.rem(2)} solid ${k.sys.color.primary.dark}`:"",children:[(0,e.jsx)(J,{size:15,className:"mr-2"}),(0,e.jsx)("span",{children:f("upload")})]}),(0,e.jsx)("input",{id:y,title:"",className:"upload-btn-file-input",type:"file",accept:Ze,onChange:F,tabIndex:h?-1:0,ref:S,multiple:!0,onFocus:()=>{P(!0)},onBlur:()=>{P(!1)},"aria-describedby":`${V} ${G}`})]})]}),(0,e.jsx)(a.Input,{id:v,onClick:M,title:"",className:"drag-area-file-input",type:"file",accept:Ze,onChange:F,tabIndex:-1})]}),h&&(0,e.jsx)("div",{className:"upload-loading-container",title:B(),"aria-live":"assertive",children:(0,e.jsxs)("div",{className:"upload-loading-content d-flex flex-column",children:[(0,e.jsx)("div",{className:"w-100 px-4 upload-loading-file-name d-flex justify-content-center align-items-center",children:(0,e.jsx)("div",{className:"w-100 font-14 text-center",id:H,children:B(!0)})}),(0,e.jsx)(a.Loading,{className:"upload-loading",type:a.LoadingType.Secondary,width:30,height:28}),(0,e.jsx)("div",{className:"upload-loading-btn",children:(0,e.jsx)(a.Button,{type:"danger",onClick:()=>{b.current=b.current.concat(x.current),x.current=null,g(!1)},ref:e=>{(0,t.focusElementInKeyboardMode)(e)},"aria-describedby":H,children:f("cancel")})})]})}),D&&(0,e.jsx)("div",{className:"confirm-zip-container p-3",ref:R,role:"dialog","aria-label":f("confirmZipType"),"aria-modal":"true",children:(0,e.jsxs)("div",{className:"confirm-zip-content h-100 d-flex flex-column pt-3 pb-4 px-4",role:"",children:[(0,e.jsx)("div",{className:"title mb-4",children:f("confirmZipType")}),(0,e.jsx)("div",{className:"zip-files-content",children:N.map((t,o)=>{var r;return t.isZip&&(0,e.jsxs)("div",{children:[(0,e.jsx)("div",{className:"file-name text-truncate",title:t.name,children:t.name}),(0,e.jsx)(a.Select,{className:"mb-3",size:"sm",value:null!==(r=t.type)&&void 0!==r?r:"",placeholder:f("selectType"),onChange:(e,t)=>{((e,t)=>{const a=[...N];a[e].type=t,a[e].data.set("filetype",t),O(a)})(o,t)},"aria-label":t.name,children:Be.map(t=>(0,e.jsx)("option",{value:t,children:t===Pe.Shapefile?"Shapefile":f(t)},t))})]},t.id)})}),(0,e.jsxs)("div",{className:"footer pt-4",children:[(0,e.jsx)(a.Button,{className:"w-100",type:"primary",size:"sm",onClick:()=>{z&&(L(N),C(!1),x.current=N)},disabled:!z,children:f("ok")}),(0,e.jsx)(a.Button,{className:"w-100",type:"default",size:"sm",onClick:()=>{const e=N.filter(e=>!e.isZip);L(e),C(!1),x.current=e},children:f("cancel")})]})]})}),(null==j?void 0:j.length)&&(0,e.jsx)("div",{className:"errors-container",children:j.map((t,o)=>{var r;return(0,e.jsx)(a.Alert,{className:"w-100 mb-2",closable:!0,withIcon:!0,form:"basic",type:"warning",title:t.errStr,open:t.open,onClose:()=>{(e=>{const t=[...j];t[e].open=!1,t.every(e=>!e.open)?I(null):I(t)})(o)},children:(null===(r=t.details)||void 0===r?void 0:r.length)&&(0,e.jsx)("div",{className:"collapse-panel-container mt-2",children:(0,e.jsx)(a.CollapsablePanel,{label:f("details"),children:t.details.map((t,a)=>(0,e.jsx)("p",{className:"mb-1",children:t},a))})})},t.errStr)})})]})};function Ye(e){return null==e?void 0:e.toLowerCase().endsWith(".zip")}function Qe(e){return e===Pe.Shapefile||e===Pe.FileGeoDatabase?".zip":`.${e}`}const et=e=>t.css`
  flex-direction: column;
  color: var(--sys-color-surface-overlay-hint);

  .font-14 {
    font-size: 14px;
  }

  .font-16 {
    font-size: 16px;
    font-weight: 500;
  }
  .confirm-zip-container {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    color: var(--sys-color-surface-overlay-text);
    z-index: 20;
    .confirm-zip-content {
      background-color: var(--sys-color-surface-overlay);
      .title {
        font-family: var(--sys-typography-title2-font-family);
        font-weight: var(--sys-typography-title2-font-weight);
        font-size: var(--sys-typography-title2-font-size);
        line-height: var(--sys-typography-title2-line-height);
      }
      .zip-files-content {
        flex: 1;
        overflow-y: auto;
        .file-name {
          margin-bottom: var(--sys-spacing-1);
          font-family: var(--sys-typography-title3-font-family);
          font-weight: var(--sys-typography-title3-font-weight);
          font-size: var(--sys-typography-title3-font-size);
          line-height: var(--sys-typography-title3-line-height);
        }

      }
      .footer {
        .jimu-btn:first-of-type {
          margin-bottom: 6px;
        }
      }
    }
  }

  .upload-loading-container {
    position: absolute;
    top: ${e?"56px":"89px"};
    bottom: 0;
    right: 0;
    left: 0;
    background-color: var(--sys-color-surface-overlay);
    z-index: 2;
    .upload-loading-content {
      height: calc(100% - 60px);
      padding-top: 80px;
      color: var(--sys-color-surface-overlay-text);
      .upload-loading-file-name {
        height: 100px;
        word-break: break-word;
        overflow: hidden;
      }
      .upload-loading {
        position: relative;
        height: 146px;
      }
      .upload-loading-btn {
        height: 32px;
        margin-top: 10px;
        text-align: center;
        button.btn-danger {
          background-color: var(--sys-color-error-main);
          border: 0;
        }
      }
    }
  }

  .supported-type-icons svg {
    color: var(--sys-color-primary-main);
  }

  .supported-types {
    font-size: 13px;
  }

  .drag-area-container {
    width: 100%;
    flex: 1
  }
  .drag-area {
    border: 1px dashed var(--sys-color-divider-secondary);
    width: 100%;
    height: 100%;
    user-select: none;
    flex-direction: column;
    justify-content: center;
  }
  .upload-btn {
    border: 1px solid var(--sys-color-divider-secondary);
    color: var(--sys-color-surface-overlay-text);
    background-color: var(--sys-color-primary-text);
    border-radius: 2px;
    line-height: 28px;
    padding-left: 16px;
    padding-right: 16px;
    height: 30px;
    user-select: none;
    max-width: 100%;
  }
  .upload-btn-container {
    line-height: 0;
    width: max-content;
    margin: 0 auto;
  }
  .upload-btn-container:hover {
    .upload-btn {
      background-color: var(--sys-color-action-hover) !important;
    }
  }
  .drag-area-container, .upload-btn-container {
    position: relative;
    display: inline-block;
    z-index: 1;
  }
  .upload-btn-file-input, .drag-area-file-input {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
  }
  .upload-btn-file-input {
    cursor: pointer;
  }

  .errors-container {
    position: absolute;
    top: ${e?"56px":"89px"};
    left: 0;
    right: 0;
    z-index: 2;
    max-height: 100%;
    overflow-y: auto;
    .jimu-alert-panel-title {
      font-size: 13px;
      font-weight: 400;
    }
    .jimu-alert-panel-left-part {
      flex: 1;
    }
    .jimu-alert-message {
      flex: 1;
      color: var(--sys-color-surface-overlay-text);
    }
    .jimu-alert-action {
      color: var(--sys-color-action-text);
    }
    .collapse-label {
      font-size: 13px;
      .title {
        color: var(--sys-color-surface-overlay-text) !important;
      }
    }
    .collapse-panel-container {
      margin: 0 -30px 0 -28px;
      border-top: 1px solid var(--sys-color-divider-tertiary);
      .jimu-collapsable-action .jimu-btn {
        color: var(--sys-color-action-text);
      }
    }
  }

`;var tt=s(30655),at=s.n(tt),ot=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const rt=a=>{const o=window.SVG,{className:r}=a,n=ot(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:at()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))};var nt=s(94064),it=s.n(nt),lt=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const st=a=>{const o=window.SVG,{className:r}=a,n=lt(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:it()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))};var ct=s(62838),dt=s.n(ct),ut=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const pt=a=>{const o=window.SVG,{className:r}=a,n=ut(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:dt()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))},{useState:mt,useEffect:ft}=t.React,{useSelector:vt}=t.ReactRedux,yt=o=>{const{multiDataOptions:r,widgetId:n,doneButtonRef:i,config:l,onFinish:s,onRemove:c,setErrorMsg:d}=o,u=t.hooks.useTranslation(a.defaultMessages),[p,m]=mt(!1),[f,v]=mt(!1),y=C(r);ft(()=>{D(((null==y?void 0:y.filter(e=>!r.some(t=>t.dataSourceJson.id===e.dataSourceJson.id)))||[]).map(e=>e.dataSourceJson.id),n,!1),v(!0);N(r.filter(e=>!(null==y?void 0:y.some(t=>e.dataSourceJson.id===t.dataSourceJson.id))),n,l,!1).catch(e=>{d(u("dataSourceCreateError"))}).finally(()=>{v(!1)})},[n,r,y,d,u,l]);const h=()=>{s(r)},g=u("numSelected",{number:r.length}),x=u(p?"collapse":"expand");return(0,e.jsx)("div",{className:"data-collapse",css:gt,children:r.length>0&&(0,e.jsxs)("div",{className:"data-container p-4",children:[(0,e.jsxs)("div",{className:"d-flex justify-content-between align-items-center",children:[(0,e.jsxs)("div",{className:"d-flex align-items-center n-selected",role:"group","aria-label":g,children:[(0,e.jsx)("span",{className:"text-truncate",title:g,children:g}),(0,e.jsx)(a.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,onClick:()=>{m(!p)},title:x,"aria-label":x,"aria-expanded":p,children:p?(0,e.jsx)(rt,{size:"s",color:"var(--sys-color-surface-overlay-text)"}):(0,e.jsx)(st,{size:"s",color:"var(--sys-color-surface-overlay-text)"})})]}),(0,e.jsx)("div",{className:"small-done-btn",children:!p&&(0,e.jsx)(a.Button,{onClick:h,disabled:f,type:"primary",className:"text-truncate w-100 px-2",title:u("done"),ref:i,children:u("done")})})]}),p&&(0,e.jsx)("div",{className:"data-items mt-4",role:"list",children:r.map((a,o)=>(0,e.jsx)(ht,{widgetId:n,isLoading:f,onRemove:c,dsJson:(0,t.Immutable)(a.dataSourceJson)},o))}),p&&(0,e.jsx)("div",{className:"big-done-btn w-100",children:(0,e.jsx)(a.Button,{onClick:h,disabled:f,type:"primary",className:"text-truncate w-100",title:u("done"),"aria-label":u("done"),ref:i,children:u("done")})})]})})};function ht({widgetId:o,dsJson:r,isLoading:n,onRemove:i}){const l=t.hooks.useTranslation(a.defaultMessages),s=t.i18n.getIntl(),c=S(r.id),d=vt(e=>{var t;return null===(t=e.dataSourcesInfo)||void 0===t?void 0:t[r.id]}),u=d?d.instanceStatus===t.DataSourceStatus.CreateError:!c&&!n,p=d?d.instanceStatus===t.DataSourceStatus.NotCreated:!c&&n,m=`add-data-${o}-collapse-panel-list-item-${r.id}`;return(0,e.jsxs)("div",{className:"d-flex align-items-center justify-content-between w-100 data-item",role:"listitem",children:[(0,e.jsxs)("div",{className:"d-flex align-items-center flex-grow-1 text-truncate",title:t.dataSourceUtils.getDsTypeString(null==r?void 0:r.type,s),children:[u&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-error",children:(0,e.jsx)(a.Alert,{className:"flex-shrink-0",css:t.css`padding-left: 0 !important; padding-right: 0 !important;`,buttonType:"tertiary",form:"tooltip",size:"small",type:"error",text:l("dataSourceCreateError")})}),p&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-loading",children:(0,e.jsx)(a.Loading,{type:a.LoadingType.Donut,width:16,height:16})}),!u&&!p&&(0,e.jsx)("div",{className:"d-flex justify-content-center align-items-center flex-shrink-0 data-thumbnail",children:(0,e.jsx)(a.Icon,{icon:t.dataSourceUtils.getDsIcon(r),color:"var(--sys-color-primary-text)",size:"12"})}),(0,e.jsx)("div",{className:"flex-grow-1 text-truncate pl-2 data-label",title:r.label||r.sourceLabel,id:m,children:r.label||r.sourceLabel})]}),(0,e.jsx)("div",{className:"d-flex align-items-center flex-shrink-0",children:(0,e.jsx)(a.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,onClick:()=>{i(r.id)},title:l("remove"),"aria-label":l("remove"),"aria-describedby":m,children:(0,e.jsx)(pt,{size:14,color:"var(--sys-color-surface-overlay-text)"})})})]})}const gt=t.css`
  .data-container {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 0;
    box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.16) !important;
    border: 0 !important;
    background: var(--sys-color-surface-overlay);
    color: var(--sys-color-surface-overlay-text);
    z-index: 10;
    .n-selected {
      font-size: 14px;
      max-width: 130px;
    }
    .data-items {
      max-height: 500px;
      overflow-y: auto;
      overflow-x: hidden;
      .data-thumbnail {
        width:  26px;
        height:  26px;
        background-color: var(--sys-color-info-main);
      }
      .data-loading, .data-error {
        position: relative;
        width: 24px;
        height: 24px;
        border: 1px solid var(--sys-color-info-main);
      }
      .data-label {
        font-size: 13px;
      }
      .data-item {
        height: 26px;
        margin-bottom: 12px;
      }
    }
    .small-done-btn {
      max-width: 90px;
    }
  }
`,xt=t.React.memo(o=>{const{isRuntime:r}=o,n=s(r?34163:85978);return(0,e.jsx)("div",{className:(0,t.classNames)("resize-handle d-flex",{"p-1":r}),children:(0,e.jsx)(a.Icon,{icon:n,size:r?10:16,currentColor:!1})})}),{useState:bt,useMemo:St,useRef:wt,useCallback:jt,useEffect:It}=t.React,Nt=["search","url","file"],Ot={width:240,height:600},Dt=o=>{const{portalUrl:r,widgetId:n,buttonSize:i,hiddenTabs:s,popperReference:c,nextOrder:d,config:u,onFinish:p,itemCategoriesInfo:m,hidePopper:f,buttonDescribedby:v,displayedItemTypeCategories:y,panelSize:h,onResizeStop:g}=o,[x,b]=bt(!1),[S,w]=bt(null),[j,I]=bt([]),[N,O]=bt([]),[D,M]=bt([]),C=St(()=>j.concat(N).concat(D).sort((e,t)=>e.order-t.order),[j,N,D]),T=St(()=>C.length>0?Math.max(...C.map(e=>e.order))+1:d,[C,d]),F=St(()=>Nt.filter(e=>!(null==s?void 0:s.some(t=>e===t))),[s]),z=t.hooks.useTranslation(a.defaultMessages,t.defaultMessages,l),L=wt(null),E=t.hooks.useCheckSmallBrowserSizeMode(),[R,A]=bt(!1),P=t.ReactRedux.useSelector(e=>e.appRuntimeInfo.appMode===t.AppMode.Run),k=(0,e.jsx)(xt,{isRuntime:P,isResizing:R}),U=P?["bottom-left","bottom-right"]:["top-left","top-right","bottom-left","bottom-right"],B=P?["bottom-left"]:[],G=wt(null);It(()=>{"sm"===i&&(0,t.focusElementInKeyboardMode)(G.current)},[]),It(()=>{S&&!L.current&&(L.current=setTimeout(()=>{w(null),L.current=null},5e3))},[S]);const V=e=>{j.some(t=>t.dataSourceJson.id===e)&&I(j.filter(t=>t.dataSourceJson.id!==e)),N.some(t=>t.dataSourceJson.id===e)&&O(N.filter(t=>t.dataSourceJson.id!==e)),D.some(t=>t.dataSourceJson.id===e)&&M(D.filter(t=>t.dataSourceJson.id!==e))},H=e=>{p(e),$()},W=wt(null),$=jt(()=>{const e=!x;b(e),e||(I([]),O([]),M([]),G.current&&(0,t.focusElementInKeyboardMode)(G.current))},[x]);It(()=>{!E&&f&&x&&$()},[f]);const _=t.ReactRedux.useSelector(e=>e.appRuntimeInfo.currentPageId);t.hooks.useUpdateEffect(()=>{x&&$()},[_]);const K=wt(null),q=wt(null),Z=wt(null),X=null!=h?h:Ot;It(()=>{var e,t;q.current=x&&null!==(t=null===(e=W.current)||void 0===e?void 0:e.querySelector(".action-close"))&&void 0!==t?t:null},[x]);const Y=()=>(0,e.jsx)(Ct,{errorMsg:S,translate:z,tabs:F,onFinish:H,onRemove:V,portalUrl:r,widgetId:n,nextOrder:T,multiDataOptions:C,multiDataOptionsFromSearch:j,multiDataOptionsFromUrl:N,multiDataOptionsFromFile:D,setErrorMsg:w,setMultiDataOptionsFromSearch:I,setMultiDataOptionsFromUrl:O,setMultiDataOptionsFromFile:M,itemCategoriesInfo:m,containerRef:K,panelRef:W,doneButtonInCollapseRef:Z,displayedItemTypeCategories:y,config:u});return(0,e.jsxs)("div",{className:"add-data-popper",css:Tt,children:["lg"===i&&(0,e.jsx)(a.Button,{type:"primary",className:"flex-grow-1 text-center",onClick:$,"aria-label":z("clickToAddData"),ref:G,title:z("clickToAddData"),"aria-haspopup":"dialog","aria-describedby":v,children:(0,e.jsxs)("div",{className:"w-100 px-2 d-flex align-items-center justify-content-center",children:[(0,e.jsx)(J,{size:"m",className:"mr-2"}),(0,e.jsx)("div",{className:"text-truncate",children:z("clickToAddData")})]})}),"sm"===i&&(0,e.jsx)(a.Button,{type:"primary",className:"d-flex justify-content-center align-items-center small-add-btn",onClick:$,"aria-label":z("clickToAddData"),ref:G,title:z("clickToAddData"),"aria-haspopup":"dialog",children:(0,e.jsx)(J,{size:"m",className:"m-0"})}),E?(0,e.jsx)(a.MobilePanel,{open:x,onClose:$,title:z("addData"),children:Y()}):(0,e.jsx)(a.FloatingPanel,{open:x,reference:c,placement:"right-start",ref:W,css:Ft,className:a.FOCUSABLE_CONTAINER_CLASS,"aria-label":z("addData"),headerTitle:z("addData"),headerClassName:"add-data-panel-header",onHeaderClose:$,dragBounds:"body",defaultSize:X,minSize:Ot,resizeHandle:k,resizeHandles:U,transparentResizeHandles:B,onResize:()=>{A(!0)},onResizeStop:e=>{null==g||g(e),A(!1)},onKeyDown:e=>{var a,o;if("Escape"===e.key){if(!(null===(a=W.current)||void 0===a?void 0:a.contains(e.target)))return;if(e.target!==q.current){const a=!!(null===(o=e.target)||void 0===o?void 0:o.closest(".data-item-search")),r=C.length>0,n=a&&r&&Z.current&&!Z.current.disabled?Z.current:q.current;n&&(0,t.focusElementInKeyboardMode)(n)}}},children:Y()})]})},Mt=({tab:t,portalUrl:a,widgetId:o,nextOrder:r,multiDataOptionsFromSearch:n,multiDataOptionsFromUrl:i,multiDataOptionsFromFile:l,setMultiDataOptionsFromSearch:s,setMultiDataOptionsFromUrl:c,setMultiDataOptionsFromFile:d,setErrorMsg:u,itemCategoriesInfo:p,className:m,displayedItemTypeCategories:f,onlyOneTab:v,popperReference:y})=>"search"===t?(0,e.jsx)(W,{className:m,portalUrl:a,widgetId:o,onChange:s,nextOrder:r,multiDataOptions:n,itemCategoriesInfo:p,displayedItemTypeCategories:f}):"url"===t?(0,e.jsx)(ze,{className:m,widgetId:o,onChange:c,nextOrder:r,multiDataOptions:i,setErrorMsg:u,popperReference:y}):"file"===t?(0,e.jsx)(Xe,{className:m,portalUrl:a,widgetId:o,nextOrder:r,onChange:d,multiDataOptions:l,setErrorMsg:u,onlyOneTab:v}):void 0,Ct=({errorMsg:o,translate:r,tabs:n,onFinish:i,onRemove:l,portalUrl:s,widgetId:c,nextOrder:d,multiDataOptions:u,multiDataOptionsFromSearch:p,multiDataOptionsFromUrl:m,multiDataOptionsFromFile:f,setMultiDataOptionsFromSearch:v,setMultiDataOptionsFromUrl:y,setMultiDataOptionsFromFile:h,setErrorMsg:g,itemCategoriesInfo:x,containerRef:b,panelRef:S,doneButtonInCollapseRef:w,displayedItemTypeCategories:j,config:I})=>(0,e.jsxs)("div",{ref:b,css:t.css`
    width: 100%;
    height: 100%;
    .add-data-popper-content {
      height: ${u.length?"calc(100% - 64px)":"100%"};
    }
    .tab-content {
      overflow: hidden;
    }
    .jimu-nav {
      border-bottom: 1px solid var(--sys-color-divider-secondary);
      .jimu-nav-link {
        &.active, &:hover:not(.active) {
          color: var(--sys-color-primary-main);
        }
        &.active {
          border-color: var(--sys-color-primary-main);
        }
      }
    }
    .multiple-lines-truncate {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      word-break: break-word;
      word-wrap: break-word;
    }
    .item-selector-search {
      .text-input-prefix {
        svg {
          margin-left: 0 !important;
          color: var(--sys-color-action-input-field-placeholder) !important;
        }
      }
    }
  `,children:[(0,e.jsxs)("div",{className:"add-data-popper-content",children:[n.length>1&&(0,e.jsx)(a.Tabs,{type:"underline",className:"w-100 h-100",fill:!0,defaultValue:n[0],children:n.map((t,o)=>(0,e.jsx)(a.Tab,{id:t,title:r(t),children:(0,e.jsx)(Mt,{tab:t,portalUrl:s,widgetId:c,nextOrder:d,setErrorMsg:g,multiDataOptionsFromSearch:p,multiDataOptionsFromUrl:m,multiDataOptionsFromFile:f,setMultiDataOptionsFromSearch:v,setMultiDataOptionsFromUrl:y,setMultiDataOptionsFromFile:h,itemCategoriesInfo:x,displayedItemTypeCategories:j,onlyOneTab:!1,popperReference:S})},o))}),1===n.length&&(0,e.jsx)("div",{className:"w-100 h-100",children:(0,e.jsx)(Mt,{tab:n[0],portalUrl:s,widgetId:c,nextOrder:d,setErrorMsg:g,multiDataOptionsFromSearch:p,multiDataOptionsFromUrl:m,multiDataOptionsFromFile:f,setMultiDataOptionsFromSearch:v,setMultiDataOptionsFromUrl:y,setMultiDataOptionsFromFile:h,itemCategoriesInfo:x,displayedItemTypeCategories:j,onlyOneTab:!0,popperReference:S})}),o&&(0,e.jsx)(a.Alert,{className:"w-100",css:t.css`position: absolute; top: ${1===n.length?"56px":"89px"}; left: 0; right: 0; z-index: 1;`,closable:!0,form:"basic",onClose:()=>{g(null)},open:!0,text:o,type:"warning",withIcon:!0})]}),(0,e.jsx)(yt,{multiDataOptions:u,widgetId:c,doneButtonRef:w,config:I,onFinish:i,onRemove:l,setErrorMsg:g})]}),Tt=t.css`
  .small-add-btn {
    border-radius: 16px;
    width: 32px;
    height: 32px;
    padding: 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }
`,Ft=t.css`
  background: var(--sys-color-surface-overlay);
  .add-data-panel-header {
    background: var(--sys-color-surface-overlay);
    color: var(--sys-color-surface-overlay-text);
    .title {
      font-family: var(--sys-typography-title1-font-family);
      font-size: var(--sys-typography-title1-font-size);
    }
    .jimu-btn {
      color: var(--sys-color-action-text);
    }
  }
`;var zt=s(9044),Lt=s.n(zt),Et=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const Jt=a=>{const o=window.SVG,{className:r}=a,n=Et(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:Lt()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))};var Rt=s(12046),At=s.n(Rt),Pt=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(e,o[r])&&(a[o[r]]=e[o[r]])}return a};const kt=a=>{const o=window.SVG,{className:r}=a,n=Pt(a,["className"]),i=(0,t.classNames)("jimu-icon jimu-icon-component",r);return o?(0,e.jsx)(o,Object.assign({className:i,src:At()},n)):(0,e.jsx)("svg",Object.assign({className:i},n))},{useLayoutEffect:Ut,useState:Bt,useRef:Gt,useMemo:Vt}=t.React,{useSelector:Ht}=t.ReactRedux,Wt=o=>{const{multiDataOptions:r,enableDataAction:n,isLoading:i,onRemoveData:l,onChangeData:s,widgetId:c,disableRenaming:d}=o,u=t.hooks.useTranslation(a.defaultMessages,t.defaultMessages),[p,m]=Bt(null),f=Gt(null),v=Ht(e=>e.dataSourcesInfo),y=C(f),h=t.i18n.getIntl(),g=(0,ke.useTheme)(),x=_t(g);Ut(()=>{p&&f.current&&(null==y?void 0:y.current)!==f.current&&((0,t.focusElementInKeyboardMode)(f.current),f.current.select())},[f,y,p]);const b=e=>{m((null==p?void 0:p.dataSourceJson.id)===(null==e?void 0:e.dataSourceJson.id)?null:e)};return(0,e.jsx)("ul",{className:"data-list",css:x,children:r.map((o,r)=>{var m;const y=S(o.dataSourceJson.id),g=null==v?void 0:v[o.dataSourceJson.id],x=g?g.instanceStatus===t.DataSourceStatus.CreateError:!y&&!i,w=g?g.instanceStatus===t.DataSourceStatus.NotCreated:!y&&i,j=(null==p?void 0:p.dataSourceJson.id)===o.dataSourceJson.id,I=o.dataSourceJson.label||o.dataSourceJson.sourceLabel,N=t.dataSourceUtils.getDsTypeString(null===(m=o.dataSourceJson)||void 0===m?void 0:m.type,h),O=n&&y;return(0,e.jsxs)("li",{className:(0,t.classNames)("d-flex justify-content-between align-items-center data-item",{"pt-3":0!==r}),"aria-label":`${N} ${I}`,role:"group",children:[(0,e.jsxs)("div",{className:"flex-grow-1 text-truncate d-flex justify-content-start align-items-center",children:[w&&(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-center align-items-center mr-1 data-item-loading",children:(0,e.jsx)(a.Loading,{type:a.LoadingType.Donut,width:16,height:16})}),(0,e.jsxs)("div",{className:"flex-grow-1 text-truncate d-flex align-items-center",title:N,children:[!w&&(0,e.jsx)("div",{className:"flex-shrink-0 d-flex justify-content-center align-items-center data-thumbnail",children:(0,e.jsx)(a.Icon,{icon:t.dataSourceUtils.getDsIcon((0,t.Immutable)(o.dataSourceJson)),color:"var(--sys-color-primary-text)",size:"12"})}),x&&(0,e.jsx)(a.Alert,{className:"flex-shrink-0 ml-2 mr-1",css:t.css`padding-left: 0 !important; padding-right: 0 !important;`,variant:"text",form:"tooltip",size:"small",type:"error",text:u("dataSourceCreateError")}),(0,e.jsx)("div",{className:(0,t.classNames)("flex-grow-1 text-truncate data-label",{"pl-2":!x}),title:p?"":I,children:j?(0,e.jsx)(a.TextInput,{className:"w-100",size:"sm",defaultValue:I,onAcceptValue:e=>{((e,t)=>{b(e),s(Object.assign(Object.assign({},e),{dataSourceJson:Object.assign(Object.assign({},e.dataSourceJson),{label:t})}))})(o,e)},ref:f}):I})]})]}),(0,e.jsxs)("div",{className:"flex-shrink-0 d-flex justify-content-end align-items-center data-item-operations",children:[!d&&!w&&!x&&(0,e.jsx)(a.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,title:u("rename"),"aria-label":u("rename"),onClick:()=>{b(o)},onKeyDown:e=>{"Enter"===e.key&&e.preventDefault()},onKeyUp:e=>{var t;t=o,"Enter"===e.key&&b(t)},children:(0,e.jsx)(kt,{size:"m"})}),O&&(0,e.jsx)(a.DataActionList,{widgetId:c,dataSets:[{dataSource:y,records:[],name:y.getDataSourceJson().label||y.getDataSourceJson().sourceLabel}],listStyle:a.DataActionListStyle.Dropdown,buttonSize:"sm",buttonType:"tertiary",hideGroupTitle:!0,buttonClassName:"jimu-outline-inside"}),(0,e.jsx)(a.Button,{className:"jimu-outline-inside",type:"tertiary",size:"sm",icon:!0,onClick:()=>{l(o.dataSourceJson.id)},title:u("remove"),"aria-label":u("remove"),children:(0,e.jsx)(Jt,{size:"m"})})]})]},o.dataSourceJson.id)})})},$t=t.css`
  max-height: calc(100% - 35px);
  overflow: auto;

  margin-bottom: 38px;
  padding-left: 0;

  .data-item {
    width: 100%;
    overflow: hidden;
  }
  .data-item-loading {
    position: relative;
    width: 24px;
    height: 24px;
    border: 1px solid var(--sys-color-info-main);
  }
  .data-thumbnail {
    width:  26px;
    height:  26px;
    background-color: var(--sys-color-info-main);
  }
  .data-label {
    font-size: 13px;
    color: var(--sys-color-surface-paper-text);
  }
  .jimu-button-color-error {
    color: var(--sys-color-error-main);
  }
  .data-item-operations {
    .jimu-btn svg {
      color: var(--sys-color-surface-paper-text);
    }
  }
  .jimu-input .input-wrapper {
    color: var(--sys-color-surface-paper-text);
  }
`,_t=e=>Vt(()=>t.css`
    ${$t}
    .data-item-operations .data-action-dropdown .data-action-button{
      &:focus,
      &:focus-visible {
        outline-offset: -2px;
      }
      border: 0;
    }
  `,[]);class Kt extends t.BaseVersionManager{constructor(){super(...arguments),this.versions=[{version:"1.12.0",description:"Allow to configure curated filter",upgrader:e=>e.disableAddBySearch||e.itemCategoriesInfo?e:e.set("itemCategoriesInfo",A())}]}}const qt=new Kt;var Zt=function(e,t,a,o){return new(a||(a=Promise))(function(r,n){function i(e){try{s(o.next(e))}catch(e){n(e)}}function l(e){try{s(o.throw(e))}catch(e){n(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof a?t:new a(function(e){e(t)})).then(i,l)}s((o=o.apply(e,t||[])).next())})};const{useState:Xt,useEffect:Yt,useMemo:Qt,useRef:ea,useCallback:ta}=t.React,aa=!window.jimuConfig.isInBuilder,oa=o=>{var r;const{portalUrl:n,id:s,enableDataAction:c=!0,config:d,mutableStateProps:u,builderSupportModules:p}=o,m=(e=>t.React.useMemo(()=>e.disableAddBySearch||e.itemCategoriesInfo?e.itemCategoriesInfo:(0,t.Immutable)(A()),[e.disableAddBySearch,e.itemCategoriesInfo]))(d),f=Qt(()=>(null==u?void 0:u.multiDataOptions)||[],[null==u?void 0:u.multiDataOptions]),v=ta(e=>{t.MutableStoreManager.getInstance().updateStateValue(s,"multiDataOptions",e)},[s]),y=t.hooks.useTranslation(a.defaultMessages,l),[h,g]=Xt(!1),x=Qt(()=>{const e=[];return d.disableAddBySearch&&e.push("search"),d.disableAddByUrl&&e.push("url"),d.disableAddByFile&&e.push("file"),e},[d.disableAddBySearch,d.disableAddByUrl,d.disableAddByFile]),b=Qt(()=>f.length>0?Math.max(...f.map(e=>e.order))+1:0,[f]),I=t.React.useRef(null),D=ea(null),M=null===(r=null==p?void 0:p.jimuForBuilderLib)||void 0===r?void 0:r.getAppConfigAction;Yt(()=>(D.current=new t.indexedDBUtils.IndexedDBCache(s,"add-data","added-data"),aa&&D.current.init().then(()=>Zt(void 0,void 0,void 0,function*(){const e=yield D.current.getAll();e.length>0&&(g(!0),N(e,s,d).catch(e=>{console.error("Failed to create data source",e)}).finally(()=>{g(!1)}),v(e.sort((e,t)=>e.order-t.order)))})).catch(e=>{console.error("Failed to read cache.",e)}),()=>{D.current.close()}),[s,v]);const C=e=>{D.current.initialized()&&D.current.putAll(e.map(e=>({key:e.dataSourceJson.id,value:e}))),g(!0),N(e,s,d).catch(e=>{console.error("Failed to create data source",e)}).finally(()=>{g(!1)}),v(f.concat(e))};t.hooks.useUpdateEffect(()=>{((e,t)=>{O(j(e,t))})(f,d)},[d.disableExport,d.notAllowedExportFormat]);const T=ta(e=>{if(!window.jimuConfig.isInBuilder||!M||!e)return;const t=null==d?void 0:d.panelSize;if((null==t?void 0:t.width)===e.width&&(null==t?void 0:t.height)===e.height)return;const a=d.set("panelSize",e);M().editWidgetConfig(s,a).exec()},[d,M,s]),F=t.ReactRedux.useSelector(e=>{var t;const a=null==e?void 0:e.widgetsRuntimeInfo;return null===(t=null==a?void 0:a[s])||void 0===t?void 0:t.state}),z=Qt(()=>F===t.WidgetState.Closed,[F]),L=`${s}-placeholder`;return(0,e.jsxs)(a.Paper,{className:"widget-add-data jimu-widget d-flex align-items-center justify-content-center",css:na,ref:I,shape:"none",children:[0===f.length&&(0,e.jsxs)("div",{className:"no-data-placeholder w-100",children:[(0,e.jsx)("div",{className:"no-data-placeholder-icon",children:(0,e.jsx)(i,{size:32})}),(0,e.jsx)("div",{className:"no-data-placeholder-text",id:L,children:(0,e.jsx)("span",{children:d.placeholderText||y("defaultPlaceholderText")})}),(0,e.jsx)("div",{className:"no-data-placeholder-btn",children:(0,e.jsx)(Dt,{buttonSize:"lg",portalUrl:n,widgetId:s,onFinish:C,hiddenTabs:x,popperReference:I,nextOrder:b,config:d,itemCategoriesInfo:m,hidePopper:z,buttonDescribedby:L,displayedItemTypeCategories:d.displayedItemTypeCategories,panelSize:null==d?void 0:d.panelSize,onResizeStop:T})})]}),f.length>0&&(0,e.jsxs)("div",{className:"w-100 h-100 p-4",children:[(0,e.jsx)(Wt,{multiDataOptions:f,enableDataAction:c,isLoading:h,widgetId:s,disableRenaming:d.disableRenaming,onRemoveData:e=>{D.current.initialized()&&D.current.deleteAll([e]),v(f.filter(t=>t.dataSourceJson.id!==e)),w(s,t.DataSourcesChangeType.Remove,[S(e)])},onChangeData:e=>{D.current.initialized()&&D.current.put(e.dataSourceJson.id,e),g(!0),O([e]).catch(e=>{console.error("Failed to update data source",e)}).finally(()=>{g(!1)}),v(f.map(t=>t.dataSourceJson.id===e.dataSourceJson.id?e:t))}}),(0,e.jsx)("div",{className:"w-100 d-flex justify-content-end add-by-search-samll",children:(0,e.jsx)(Dt,{buttonSize:"sm",portalUrl:n,widgetId:s,onFinish:C,hiddenTabs:x,popperReference:I,nextOrder:b,config:d,itemCategoriesInfo:m,hidePopper:z,displayedItemTypeCategories:d.displayedItemTypeCategories,panelSize:null==d?void 0:d.panelSize,onResizeStop:T})})]})]})};oa.versionManager=qt;const ra=oa,na=t.css`
  position: relative;

  .add-by-search-samll {
    position: absolute;
    bottom: 10px;
    right: 15px;
  }

  .no-data-placeholder {
    padding: 8px;
    .no-data-placeholder-text, .no-data-placeholder-icon, .no-data-placeholder-btn{
      display: table;
      margin: 0 auto;
    }
    .no-data-placeholder-text {
      color: var(--sys-color-surface-paper-hint);
      font-size: 0.8125rem;
      margin-top: 1rem;
      text-align: center;
    }
    .no-data-placeholder-icon {
      color: var(--sys-color-surface-paper-hint);
    }
    .no-data-placeholder-btn {
      margin-top: 1rem;
    }
  }
`;function ia(e){s.p=e}})(),c})())}}});