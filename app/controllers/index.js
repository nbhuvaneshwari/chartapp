import Ember from 'ember';

export default Ember.Controller.extend({
  init: function() {
    this._super.apply(this, arguments);
    var self = this;
  },

  data: {
    columns: [
       ['data1', 30, 200, 100, 400, 150, 250],
       ['data2', 130, 100, 140, 200, 150, 50],
       ['data3', 30,300, 170, 250, 150, 40],
       ['data4', 40,100,170, 150, 150, 20]
    ],
 //   columns: [
 //     ['data1', 30, 40],
 //     ['data2', 120, 60],
 //   ],
   type: 'pie',
   bar: {
      width: 50
   }
  }
});
