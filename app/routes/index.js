import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    var d = this.get('ajax').request('/marks');
    return d;
    return {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 130, 100, 140, 200, 150, 50],
        ['data3', 30,300, 170, 250, 150, 40],
        ['data4', 40,100,170, 150, 150, 20]
      ],
      type: 'pie',
      bar: {
        width: 50
      }
    };
  }
});
