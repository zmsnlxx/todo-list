import Vue from 'vue'
import { Button, Cell, CellGroup, Tabbar, TabbarItem, NavBar, Image as VanImage, Form, Field, Icon } from 'vant'

Vue.use(Button)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(VanImage);
Vue.use(Form);
Vue.use(Field);
Vue.use(Icon);

import IconFont from './IconFont.vue'
import TopBar from './TopBar.vue'

Vue.component('Icon', IconFont);
Vue.component('TopBar', TopBar);
