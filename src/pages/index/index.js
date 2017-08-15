// index.js
import { $counter } from '../../components/index';
Page({
  data: {
    itemList: [{
      name: '苹果',
      count: 1
    }, {
      name: '西瓜',
      count: 0
    }, {
      name: '桃子',
      count: 2
    }]
  },
  onLoad() {
    let totalCount = 0;
    this.data.itemList.forEach(({count}, idx) => {
      totalCount += count;
      $counter.init('item' + idx, {
        data: {
          count
        },
        $on: {
          decrease() {
            this.setData({
              totalCount: this.data.totalCount - 1
            });
          },
          increase() {
            this.setData({
              totalCount: this.data.totalCount + 1
            });
          }
        }
      });
    });
    this.setData({
      totalCount
    });
  }
});
