import { LinkedList } from "./LinkedList.js";

function init() {
  const ll = new LinkedList(1);
  ll.push(2);
  ll.push(3);

  print(ll.findMiddleNode());
}

function print(obj) {
  console.log("print==>", obj ? JSON.stringify(obj) : obj);
}

init();
