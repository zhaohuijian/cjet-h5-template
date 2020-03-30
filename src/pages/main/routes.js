import { lazy } from 'react';

const Flex = lazy(() => import('./routes/Flex'))
const WingBlank = lazy(() => import('./routes/WingBlank'))
const WhiteSpace = lazy(() => import('./routes/WhiteSpace'))

const Button = lazy(() => import('./routes/Button'))
const Checkbox = lazy(() => import('./routes/Checkbox'))
const Calendar = lazy(() => import('./routes/Calendar'))
const InputItem = lazy(() => import('./routes/InputItem'))

const Home = lazy(() => import('./routes/home'))

// import Flex from './routes/Flex'
// import WingBlank from './routes/WingBlank'
// import WhiteSpace from './routes/WhiteSpace'

// import Button from './routes/Button'
// import Checkbox from './routes/Checkbox'
// import Calendar from './routes/Calendar'
// import InputItem from './routes/InputItem'

// import Home from './routes/home'

export default [
  { path: '/Flex', name: 'Flex', component: Flex },
  { path: '/WingBlank', name: 'WingBlank', component: WingBlank },
  { path: '/WhiteSpace', name: 'WhiteSpace', component: WhiteSpace },

  { path: '/Button', name: 'Button', component: Button },
  { path: '/Checkbox', name: 'Checkbox', component: Checkbox },
  { path: '/Calendar', name: 'Calendar', component: Calendar },
  { path: '/InputItem', name: 'InputItem', component: InputItem },

  { path: '/', name: 'home', component: Home }
]
