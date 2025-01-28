import "@logseq/libs";

import React from "react";
import * as ReactDOM from "react-dom/client";
// import App from "./App";
// import "./index.css";

import { logseq as PL } from "../package.json";

// @ts-expect-error
const css = (t, ...args) => String.raw(t, ...args);

const pluginId = PL.id;

function main() {
  console.info(`#${pluginId}: MAIN`);
  const root = ReactDOM.createRoot(document.getElementById("app")!);

  // root.render(
    // <React.StrictMode>
      // <App />
    // </React.StrictMode>
  // );

  // function createModel() {
    // return {
      // show() {
        // logseq.showMainUI();
      // },
    // };
  // }

  // logseq.provideModel(createModel());
  // logseq.setMainUIInlineStyle({
    // zIndex: 11,
  // });

  // const openIconName = "template-plugin-open";

  // logseq.provideStyle(css`
    // .${openIconName} {
      // opacity: 0.55;
      // font-size: 20px;
      // margin-top: 4px;
    // }

    // .${openIconName}:hover {
      // opacity: 0.9;
    // }
  // `);
  
  // Highlighters
  logseq.provideStyle(css`
    .white-theme,
    html[data-theme=light] {
      --mark-red: #ff7070;
      --mark-orange: #ffb86c;
      --mark-yellow: #fff3a3;
      --mark-green: #a3ffc4;
      --mark-teal: #b2f4e4;
      --mark-sky: #afe6fd;
      --mark-blue: #87c3ff;
      --mark-purple: #d2b3ff;
      --mark-pink: #ffb5db;
      --mark-gray: #cfcfcf;
      
      --mark-decoration-red: ;
      --mark-decoration-orange: ;
      --mark-decoration-yellow: ;
      --mark-decoration-green: ;
      --mark-decoration-teal: ;
      --mark-decoration-sky: ;
      --mark-decoration-blue: ;
      --mark-decoration-purple: ;
      --mark-decoration-pink: ;
      --mark-decoration-gray: ;

      --mark-text-color: ;
      --mark-decoration: ;
      --mark-thickness: ;
      --mark-border-radius: 4px;

      --span-red: #ff0000;
      --span-orange: #ff8400;
      --span-yellow: #ffdd00;
      --span-green: #00ff5b;
      --span-teal: #00f4b9;
      --span-sky: #00b2fd;
      --span-blue: #0080ff;
      --span-purple: #6800ff;
      --span-pink: #ff0083;
      --span-gray: #808080;
    }

    .dark-theme,
    html[data-theme=dark] {  
      --mark-red: #ff7070;
      --mark-orange: #ffb86c;
      --mark-yellow: #fff3a3;
      --mark-green: #a3ffc4;
      --mark-teal: #b2f4e4;
      --mark-sky: #afe6fd;
      --mark-blue: #87c3ff;
      --mark-purple: #d2b3ff;
      --mark-pink: #ffb5db;
      --mark-gray: #cacfd9;

      --mark-decoration-red: ;
      --mark-decoration-orange: ;
      --mark-decoration-yellow: ;
      --mark-decoration-green: ;
      --mark-decoration-teal: ;
      --mark-decoration-sky: ;
      --mark-decoration-blue: ;
      --mark-decoration-purple: ;
      --mark-decoration-pink: ;
      --mark-decoration-gray: ;

      --mark-text-color: ;
      --mark-decoration: ;
      --mark-thickness: ;
      --mark-border-radius: 4px;

      --span-red: #ff0000;
      --span-orange: #ff8400;
      --span-yellow: #ffdd00;
      --span-green: #00ff5b;
      --span-teal: #00f4b9;
      --span-sky: #00b2fd;
      --span-blue: #0080ff;
      --span-purple: #6800ff;
      --span-pink: #ff0083;
      --span-gray: #808080;
    }
    mark.red{
      background-color: var(--mark-red) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-red);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.orange{
      background-color: var(--mark-orange) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-orange);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.yellow{
      background-color: var(--mark-yellow) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-yellow);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.green{
      background-color: var(--mark-green) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-green);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.teal{
      background-color: var(--mark-teal) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-green);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.sky{
      background-color: var(--mark-sky) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-green);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.blue{
      background-color: var(--mark-blue) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-blue);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.purple{
      background-color: var(--mark-purple) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-purple);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.pink{
      background-color: var(--mark-pink) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-pink);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
    mark.grey, mark.gray{
      background-color: var(--mark-gray) !important;
      color: var(--mark-text-color);
      text-decoration: var(--mark-decoration);
      text-decoration-color: var(--mark-decoration-grey);
      text-decoration-thickness:  var(--mark-thickness);
      text-decoration-skip-ink: none;
      border-radius: var(--mark-border-radius);
    }
  `);

  // Text Color
  logseq.provideStyle(css`
    span.red{
      color: var(--span-red);
    }
    span.orange{
      color: var(--span-orange);
    }
    span.yellow{
      color: var(--span-yellow);
    }
    span.green{
      color: var(--span-green);
    }
    span.teal{
      color: var(--span-teal);
    }
    span.sky{
      color: var(--span-sky);
    }
    span.blue{
      color: var(--span-blue);
    }
    span.purple{
      color: var(--span-purple);
    }
    span.pink{
      color: var(--span-pink);
    }
    span.grey, span.gray{
      color: var(--span-gray);
    }
  `);
  // logseq.App.registerUIItem("toolbar", {
    // key: openIconName,
    // template: `
    // <a data-on-click="show">
        // <div class="${openIconName}">⚙️</div>
    // </a>    
// `,
  // });
  logseq.Editor.registerSlashCommand("Red Highlighter", [
    ["editor/input", "<mark class='red'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Red Text", [
    ["editor/input", "<span class='red'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Orange Highlighter", [
    ["editor/input", "<mark class='orange'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Orange Text", [
    ["editor/input", "<span class='orange'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Yellow Highlighter", [
    ["editor/input", "<mark class='yellow'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Yellow Text", [
    ["editor/input", "<span class='yellow'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Green Highlighter", [
    ["editor/input", "<mark class='green'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Green Text", [
    ["editor/input", "<span class='green'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Teal Highlighter", [
    ["editor/input", "<mark class='teal'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Teal Text", [
    ["editor/input", "<span class='teal'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Sky Highlighter", [
    ["editor/input", "<mark class='sky'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Sky Text", [
    ["editor/input", "<span class='sky'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Blue Highlighter", [
    ["editor/input", "<mark class='blue'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Blue Text", [
    ["editor/input", "<span class='blue'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Purple Highlighter", [
    ["editor/input", "<mark class='purple'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Purple Text", [
    ["editor/input", "<span class='purple'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Pink Highlighter ", [
    ["editor/input", "<mark class='pink'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Pink Text ", [
    ["editor/input", "<span class='pink'></span>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Gray Highlighter", [
    ["editor/input", "<mark class='gray'></mark>", {"backward-pos": 7}],
  ])
  logseq.Editor.registerSlashCommand("Gray Text", [
    ["editor/input", "<span class='gray'></span>", {"backward-pos": 7}],
  ])
}

logseq.ready(main).catch(console.error);
