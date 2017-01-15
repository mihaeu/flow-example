// @flow

class Animal {
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  name() {
    return this._name;
  }
}

module.exports = Animal;