const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
  addOrChange(key, value) {
    this[key] = value;
  },
  show() {
    for (const key of Object.keys(this)) {
      console.log(`${key}:${this[key]}`);
    }
  },
  begin() {
    this.addOrChange('mood', 'happy');
    this.addOrChange('hobby', 'skydiving');
    this.addOrChange('premium', false);
    this.show();
  },
};
user.begin();
