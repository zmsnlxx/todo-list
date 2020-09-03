import Vue from 'vue'
import { Button, Cell, CellGroup, Tabbar, TabbarItem, NavBar, Image as VanImage, Form, Field, Icon, ActionSheet, DatetimePicker, Popup, Area, RadioGroup, Radio, Tab, Tabs, NoticeBar, Empty } from 'vant'

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
Vue.use(ActionSheet);
Vue.use(DatetimePicker);
Vue.use(Popup);
Vue.use(Area);
Vue.use(RadioGroup);
Vue.use(Radio);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(NoticeBar);
Vue.use(Empty);

import IconFont from './TodoIconFont.vue'
import TopBar from './TodoTopBar.vue'

Vue.component('Icon', IconFont);
Vue.component('TopBar', TopBar);
