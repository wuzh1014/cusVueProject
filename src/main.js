import Vue from 'vue'
import App from './App'
import router from './router/'
import './config/http'
import './config/flexible'
import './config/fastclick'
// import AtComponents from 'at-ui'
// import 'at-ui-style'

// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Pagination,
  Dialog,
  // Autocomplete,
  // Dropdown,
  // DropdownMenu,
  // DropdownItem,
  // Menu,
  // Submenu,
  // MenuItem,
  // MenuItemGroup,
  Input,
  InputNumber,
  // Radio,
  // RadioGroup,
  // RadioButton,
  Checkbox,
  CheckboxButton,
  CheckboxGroup,
  // Switch,
  Select,
  Option,
  // OptionGroup,
  Button,
  // ButtonGroup,
  Table,
  TableColumn,
  DatePicker,
  // TimeSelect,
  // TimePicker,
  // Popover,
  // Tooltip,
  // Breadcrumb,
  // BreadcrumbItem,
  // Form,
  // FormItem,
  // Tabs,
  // TabPane,
  Tag,
  // Tree,
  // Alert,
  // Slider,
  // Icon,
  Row,
  Col,
  // Upload,
  // Progress,
  // Badge,
  Card,
  // Rate,
  // Steps,
  // Step,
  Carousel,
  CarouselItem,
  // Collapse,
  // CollapseItem,
  // Cascader,
  // ColorPicker,
  // Transfer,
  Container,
  Header,
  // Aside,
  Main,
  // Footer,
  // Loading,
  MessageBox,
  Message,
  // Notification
} from 'element-ui'

Vue.use(Pagination)
Vue.use(Dialog)
// Vue.use(Autocomplete)
// Vue.use(Dropdown)
// Vue.use(DropdownMenu)
// Vue.use(DropdownItem)
// Vue.use(Menu)
// Vue.use(Submenu)
// Vue.use(MenuItem)
// Vue.use(MenuItemGroup)
Vue.use(Input)
Vue.use(InputNumber)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(RadioButton)
Vue.use(Checkbox)
Vue.use(CheckboxButton)
Vue.use(CheckboxGroup)
// Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
// Vue.use(OptionGroup)
Vue.use(Button)
// Vue.use(ButtonGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(DatePicker)
// Vue.use(TimeSelect)
// Vue.use(TimePicker)
// Vue.use(Popover)
// Vue.use(Tooltip)
// Vue.use(Breadcrumb)
// Vue.use(BreadcrumbItem)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(Tabs)
// Vue.use(TabPane)
Vue.use(Tag)
// Vue.use(Tree)
// Vue.use(Alert)
// Vue.use(Slider)
// Vue.use(Icon)
Vue.use(Row)
Vue.use(Col)
// Vue.use(Upload)
// Vue.use(Progress)
// Vue.use(Badge)
Vue.use(Card)
// Vue.use(Rate)
// Vue.use(Steps)
// Vue.use(Step)
Vue.use(Carousel)
Vue.use(CarouselItem)
// Vue.use(Collapse)
// Vue.use(CollapseItem)
// Vue.use(Cascader)
// Vue.use(ColorPicker)
Vue.use(Container)
Vue.use(Header)
// Vue.use(Aside)
Vue.use(Main)
// Vue.use(Footer)
//
// Vue.use(Loading.directive)
//
// Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox
// Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
// Vue.prototype.$prompt = MessageBox.prompt
// Vue.prototype.$notify = Notification
Vue.prototype.$message = Message

// Vue.use(AtComponents)
// Vue.use(ElementUI)
import $ from 'jquery'

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function() {
    FastClick.attach(document.body);
  }, false);
}


window.onload = function () {
    document.addEventListener('touchstart',function (event) {
        if(event.touches.length>1){
            event.preventDefault();
        }
    })
    var lastTouchEnd=0;
    document.addEventListener('touchend',function (event) {
        var now=(new Date()).getTime();
        if(now-lastTouchEnd<=300){
            event.preventDefault();
        }
        lastTouchEnd=now;
    },false)
}
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
})





