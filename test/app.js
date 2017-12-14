import Flow from "../src";

let flow = new Flow("ws://127.0.0.1:1200");
flow.subscribe(message => document.write(`${message.Message}<br />`));