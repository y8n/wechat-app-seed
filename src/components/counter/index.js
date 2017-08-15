import Component from '../Component';
const context = '$counter';

class Counter extends Component {
  constructor(key, options = {}) {
    super(options);
    this.scope = `${context}.${key}`;
    this.initData(options);
    this.initMethods();
  }

  initMethods() {
    this._bindMethods({
      decreaseHandler() {
        let {count} = this.getData();
        count--;
        this.setData('count', count);
        this.$emit('decrease', count);
      },
      increaseHandler() {
        let {count} = this.getData();
        count++;
        this.setData('count', count);
        this.$emit('increase', count);
      }
    });
  }


  initData(options) {
    let count = options.data.count;
    this.setData({
      count
    });
  }

}
export default {
  init(key, options) {
    return new Counter(key, options);
  }
};
