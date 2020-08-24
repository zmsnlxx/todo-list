import Vue from 'vue'
import { Button, Cell, CellGroup, Tabbar, TabbarItem } from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Tabbar);
Vue.use(TabbarItem);
import IconFont from './IconFont.vue'
Vue.component('Icon', IconFont);
