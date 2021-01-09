class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  //stored in the nested array
  set(key, value) {
    //get the index with hash function
    let index = this._hash(key);
    //if the slot is empty create new nested array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //push the key:value as an array in the main array
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    //find the index
    let index = this._hash(key);
    //if there is something
    if (this.keyMap[index]) {
      //traverse the inner array
      for (let i = 0; i < this.keyMap[index].length; i++) {
        //if the key is found in the inner array
        if (this.keyMap[index][i][0] === key) {
          //get just one value
          return this.keyMap[index][i][1];
        }
      }
    }
    return null;
  }

  keys() {
    return this.keyMap.flat().map(([key]) => key);
  }
  values() {
    let sorted = this.keyMap
      .flat()
      .map((x) => x[1])
      .sort();
    let unique = sorted.filter((item, i) => item !== sorted[i + 1]);
    return unique;
  }
}

let ht = new HashTable(17);
ht.set("purple", "#DDA0DD");
ht.set("plumeee", "#DDA0DD");
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("plum", "#DDA0DD");

ht.set("plumsss", "#DDA0DD");
console.log(ht.get("plum"));
// console.log(ht.get("olive"));
console.log(JSON.stringify(ht, null, 2));
// console.log(ht.keys());
console.log(ht.values());
console.log(ht.keys());
