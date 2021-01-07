import Vue from 'vue'
import Badge from './components/badge/Badge.vue'
import BadgeSlots from './components/badge/BadgeSlots.vue'

//import BadgeUI from './components/test/BadgeUI.vue'
//import BadgeUITest from './components/test/BadgeUITest.vue'

//Vue.config.productionTip = false

//new Vue({
//    render: h => h(BadgeUITest),
//}).$mount('#app')

const components = [
    Badge,
    BadgeSlots,
];

Object.keys(components).forEach(idx => {
    Vue.component(components[idx].name, components[idx]);
});

export default components;