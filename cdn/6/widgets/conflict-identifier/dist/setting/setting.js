System.register(["jimu-core/emotion","jimu-core","jimu-ui/advanced/setting-components"],function(e,t){var i={},s={},r={};return{setters:[function(e){i.jsx=e.jsx,i.jsxs=e.jsxs},function(e){s.css=e.css},function(e){r.MapWidgetSelector=e.MapWidgetSelector}],execute:function(){e((()=>{var e={244(e){"use strict";e.exports=s},386(e){"use strict";e.exports=i},298(e){"use strict";e.exports=r}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,n),r.exports}n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="";var o={};return n.p=window.jimuConfig.baseUrl,(()=>{"use strict";n.r(o),n.d(o,{__set_webpack_public_path__:()=>a,default:()=>r});var e=n(386),t=n(244),i=n(298);const s=t.css`
  .setting-section {
    padding: 14px;
    h4 {
      font-size: 14px;
      margin: 0 0 8px;
      color: #333;
    }
    p {
      font-size: 12px;
      color: #666;
      margin: 0 0 10px;
    }
  }
`;function r(t){return(0,e.jsxs)("div",{css:s,children:[(0,e.jsxs)("div",{className:"setting-section",children:[(0,e.jsx)("h4",{children:"Map Connection"}),(0,e.jsx)("p",{children:"Select the Map widget that contains your maritime use-category feature layers. The Conflict Identifier will read layers from this map and draw conflict zones on it."}),(0,e.jsx)(i.MapWidgetSelector,{onSelect:e=>{t.onSettingChange({id:t.id,useMapWidgetIds:e})},useMapWidgetIds:t.useMapWidgetIds})]}),(0,e.jsxs)("div",{className:"setting-section",children:[(0,e.jsx)("h4",{children:"Layer Mapping"}),(0,e.jsxs)("p",{children:["Your feature layer titles must match the keys in the compatibility matrix. Edit the ",(0,e.jsx)("code",{children:"TITLE_TO_KEY"})," mapping in ",(0,e.jsx)("code",{children:"widget.tsx"})," if your layer titles differ from the defaults."]})]}),(0,e.jsxs)("div",{className:"setting-section",children:[(0,e.jsx)("h4",{children:"About"}),(0,e.jsx)("p",{children:"The Conflict Identifier performs pairwise spatial intersections between selected feature layers and classifies each overlap using a four-level compatibility matrix (Compatible, Conditional, Incompatible, Prohibited) based on Greek Maritime Spatial Planning legislation."})]})]})}function a(e){n.p=e}})(),o})())}}});