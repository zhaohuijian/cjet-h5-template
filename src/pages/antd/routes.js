import { lazy } from 'react';

const Flex = lazy(() => import('./routes/Flex'))
const WingBlank = lazy(() => import('./routes/WingBlank'))
const WhiteSpace = lazy(() => import('./routes/WhiteSpace'))

const Button = lazy(() => import('./routes/Button'))
const Checkbox = lazy(() => import('./routes/Checkbox'))
const Calendar = lazy(() => import('./routes/Calendar'))
const DatePickerView = lazy(() => import('./routes/DatePickerView'))
const DatePicker = lazy(() => import('./routes/DatePicker'))
const InputItem = lazy(() => import('./routes/InputItem'))

const Home = lazy(() => import('./routes/home'))

export default [
  /**
   * 布局
   */
  { path: '/Flex', name: 'Flex', component: Flex },
  { path: '/WingBlank', name: 'WingBlank', component: WingBlank },
  { path: '/WhiteSpace', name: 'WhiteSpace', component: WhiteSpace },

  /**
   * 数据录入
   */
  { path: '/Button', name: 'Button', component: Button },
  { path: '/Checkbox', name: 'Checkbox', component: Checkbox },
  { path: '/Calendar', name: 'Calendar', component: Calendar },
  { path: '/DatePickerView', name: 'DatePickerView', component: DatePickerView },
  { path: '/DatePicker', name: 'DatePicker', component: DatePicker },
  { path: '/InputItem', name: 'InputItem', component: InputItem },

  /**
   * 首页 注意：根必须放在最后一个
   */
  { path: '/', name: 'home', component: Home }
]
