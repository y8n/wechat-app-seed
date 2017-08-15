import utils from '../tools/utils';

/**
 * 组件基础class
 */
class Component {

  $$listeners = {};

  constructor(options) {
    this.options = options;
    this.page = getCurrentPages()[getCurrentPages().length - 1];
    this._bindListeners(options.$on);
  }

  setData(key, value) {
    if (utils.isUndefined(value)) {
      value = key;
      key = '';
    }
    this.page.setData.call(this.page, {
      [`${this.scope}${key ? '.' + key : ''}`]: value
    });
  }

  /**
   * 绑定事件
   * @param listeners
   * @private
   */
  _bindListeners(listeners) {
    if (!listeners) {
      return;
    }
    for (let name in listeners) {
      if (listeners.hasOwnProperty(name)) {
        this.$$listeners[name] = listeners[name];
      }
    }
  }

  /**
   * 触发事件
   * @param name
   * @param detail
   */
  $emit(name, detail = null) {
    let $$listeners = this.$$listeners;
    if (!$$listeners[name] || !utils.isFn($$listeners[name])) {
      return;
    }
    $$listeners[name].call(this.page, {
      type: name,
      detail
    });
  }

  /**
   * 绑定事件，在模板中要使用对应的key
   * @param methods
   * @private
   */
  _bindMethods(methods) {
    let scope = this.scope;
    if (!scope) {
      return;
    }
    for (let key in methods) {
      if (methods.hasOwnProperty(key) && utils.isFn(methods[key])) {
        this.setData(key, `${scope}.${key}`);
        this.page[`${scope}.${key}`] = methods[key].bind(this);
      }
    }
  }

  /**
   * 获取组件数据，如果没有key，返回所有数据
   * @param key
   * @returns {*}
   */
  getData(key) {
    let data = this.page.data;
    let name = this.scope && this.scope.split('.');

    name.forEach(value => {
      data = data[value];
    });

    return utils.isDefined(key) ? data[key] : data;
  }
}
export default Component;
