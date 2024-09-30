import React from 'react'

const Dashboard = React.lazy(() => import('./Sports/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./Sports/theme/colors/Colors'))
const Typography = React.lazy(() => import('./Sports/theme/typography/Typography'))

// cricket
const Accordion = React.lazy(() => import('./Sports/cricket/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./Sports/cricket/fithness/Breadcrumbs'))
const Cards = React.lazy(() => import('./Sports/cricket/cards/Cards'))
const Carousels = React.lazy(() => import('./Sports/cricket/carousels/Carousels'))
const Collapses = React.lazy(() => import('./Sports/cricket/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./Sports/cricket/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./Sports/cricket/navs/Navs'))
const Paginations = React.lazy(() => import('./Sports/cricket/paginations/Paginations'))
const Placeholders = React.lazy(() => import('./Sports/cricket/placeholders/Placeholders'))
const Popovers = React.lazy(() => import('./Sports/cricket/popovers/Popovers'))
const Progress = React.lazy(() => import('./Sports/cricket/progress/Progress'))
const Spinners = React.lazy(() => import('./Sports/cricket/spinners/Spinners'))
const Tabs = React.lazy(() => import('./Sports/cricket/tabs/Tabs'))
const Tables = React.lazy(() => import('./Sports/cricket/tables/Tables'))
const Tooltips = React.lazy(() => import('./Sports/cricket/tooltips/Tooltips'))


const Csports = React.lazy(() => import('./Sports/Football/sports/sports'))
const Cfithness = React.lazy(() => import('./Sports/Football/fithness/fithness'))
const Cstrenght = React.lazy(() => import('./Sports/Football/strenght/strenght'))
const Cyoga = React.lazy(() => import('./Sports/Football/yoga/yoga'))
const Cendurance = React.lazy(() => import('./Sports/Football/endurance/endurance'))
const Cskill = React.lazy(() => import('./Sports/Football/skill/skill'))
const Ctest = React.lazy(() => import('./Sports/Football/test/test'))
const Cagility = React.lazy(() => import('./Sports/Football/agility/agility'))
// const videoanalysis = React.lazy(() => import('./Sports/Football/videoanalysis/videoanalysis'))
// const personallession = React.lazy(() => import('./Sports/Football/personallession/personallession'))




// Football
const Buttons = React.lazy(() => import('./Sports/Football/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./Sports/Football/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./Sports/Football/dropdowns/Dropdowns'))

const Sports = React.lazy(() => import('./Sports/Football/sports/sports'))
const fithness = React.lazy(() => import('./Sports/Football/fithness/fithness'))
const strenght = React.lazy(() => import('./Sports/Football/strenght/strenght'))
const yoga = React.lazy(() => import('./Sports/Football/yoga/yoga'))
const endurance = React.lazy(() => import('./Sports/Football/endurance/endurance'))
const skill = React.lazy(() => import('./Sports/Football/skill/skill'))
const test = React.lazy(() => import('./Sports/Football/test/test'))
const agility = React.lazy(() => import('./Sports/Football/agility/agility'))
// const videoanalysis = React.lazy(() => import('./Sports/Football/videoanalysis/videoanalysis'))
// const personallession = React.lazy(() => import('./Sports/Football/personallession/personallession'))

//gym
const ChecksRadios = React.lazy(() => import('./Sports/gym/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./Sports/gym/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./Sports/gym/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./Sports/gym/input-group/InputGroup'))
const Layout = React.lazy(() => import('./Sports/gym/layout/Layout'))
const Range = React.lazy(() => import('./Sports/gym/range/Range'))
const Select = React.lazy(() => import('./Sports/gym/select/Select'))
const Validation = React.lazy(() => import('./Sports/gym/validation/Validation'))

const Charts = React.lazy(() => import('./Sports/charts/Charts'))

const Gsports = React.lazy(() => import('./Sports/gym/sports/sports'))
const Gfithness = React.lazy(() => import('./Sports/Football/fithness/fithness'))
const Gstrenght = React.lazy(() => import('./Sports/Football/strenght/strenght'))
const Gyoga = React.lazy(() => import('./Sports/Football/yoga/yoga'))
const Gendurance = React.lazy(() => import('./Sports/Football/endurance/endurance'))
const Gskill = React.lazy(() => import('./Sports/Football/skill/skill'))
const Gtest = React.lazy(() => import('./Sports/Football/test/test'))
const Gagility = React.lazy(() => import('./Sports/Football/agility/agility'))
// const videoanalysis = React.lazy(() => import('./Sports/Football/videoanalysis/videoanalysis'))
// const personallession = React.lazy(() => import('./Sports/Football/personallession/personallession'))

//YOGA
const Ysports = React.lazy(() => import('./Sports/yoga/sports/sports'))
const Yfithness = React.lazy(() => import('./Sports/yoga/fithness/fithness'))
const Ystrenght = React.lazy(() => import('./Sports/yoga/strenght/strenght'))
const Yyoga = React.lazy(() => import('./Sports/yoga/yoga/yoga'))
const Yendurance = React.lazy(() => import('./Sports/yoga/endurance/endurance'))
const Yskill = React.lazy(() => import('./Sports/yoga/skill/skill'))
const Ytest = React.lazy(() => import('./Sports/yoga/test/test'))
const Yagility = React.lazy(() => import('./Sports/yoga/agility/agility'))
// const videoanalysis = React.lazy(() => import('./Sports/Football/videoanalysis/videoanalysis'))
// const personallession = React.lazy(() => import('./Sports/Football/personallession/personallession'))

//Badminton
const Bsports = React.lazy(() => import('./Sports/Badminton/sports/sports'))
const Bfithness = React.lazy(() => import('./Sports/Badminton/fithness/fithness'))
const Bstrenght = React.lazy(() => import('./Sports/Badminton/strenght/strenght'))
const Byoga = React.lazy(() => import('./Sports/Badminton/yoga/yoga'))
const Bendurance = React.lazy(() => import('./Sports/Badminton/endurance/endurance'))
const Bskill = React.lazy(() => import('./Sports/Badminton/skill/skill'))
const Btest = React.lazy(() => import('./Sports/Badminton/test/test'))
const Bagility = React.lazy(() => import('./Sports/Badminton/agility/agility'))
// const videoanalysis = React.lazy(() => import('./Sports/Football/videoanalysis/videoanalysis'))
// const personallession = React.lazy(() => import('./Sports/Football/personallession/personallession'))

//Swimming
const Ssports = React.lazy(() => import('./Sports/Swimming/sports/sports'))
const Sfithness = React.lazy(() => import('./Sports/Swimming/fithness/fithness'))
const Sstrenght = React.lazy(() => import('./Sports/Swimming/strenght/strenght'))
const Syoga = React.lazy(() => import('./Sports/Swimming/yoga/yoga'))
const Sendurance = React.lazy(() => import('./Sports/Swimming/endurance/endurance'))
const Sskill = React.lazy(() => import('./Sports/Swimming/skill/skill'))
const Stest = React.lazy(() => import('./Sports/Swimming/test/test'))
const Sagility = React.lazy(() => import('./Sports/Swimming/agility/agility'))
// const videoanalysis = React.lazy(() => import('./Sports/Football/videoanalysis/videoanalysis'))
// const personallession = React.lazy(() => import('./Sports/Football/personallession/personallession'))


// Icons
const CoreUIIcons = React.lazy(() => import('./Sports/Badminton/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./Sports/Badminton/flags/Flags'))
const Brands = React.lazy(() => import('./Sports/Badminton/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./Sports/Swimming/alerts/Alerts'))
const Badges = React.lazy(() => import('./Sports/Swimming/badges/Badges'))
const Modals = React.lazy(() => import('./Sports/Swimming/modals/Modals'))
const Toasts = React.lazy(() => import('./Sports/Swimming/toasts/Toasts'))

const Widgets = React.lazy(() => import('./Sports/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/theme', name: 'Theme', element: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', element: Colors },
  { path: '/theme/typography', name: 'Typography', element: Typography },
  { path: '/base', name: 'Base', element: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', element: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', element: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', element: Cards },
  { path: '/base/carousels', name: 'Carousel', element: Carousels },
  { path: '/base/collapses', name: 'Collapse', element: Collapses },
  { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  { path: '/base/navs', name: 'Navs', element: Navs },
  { path: '/base/paginations', name: 'Paginations', element: Paginations },
  { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  { path: '/base/popovers', name: 'Popovers', element: Popovers },
  { path: '/base/progress', name: 'Progress', element: Progress },
  { path: '/base/spinners', name: 'Spinners', element: Spinners },
  { path: '/base/tabs', name: 'Tabs', element: Tabs },
  { path: '/base/tables', name: 'Tables', element: Tables },
  { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  //CRICKET
  { path: '/Csports/Csports', name: 'Csports', element: Csports },
  { path: '/Cfithness/Cfithness', name: 'Cfithness', element: Cfithness },
  { path: '/Cstrenght/Cstrenght', name: 'Cstrenght', element: Cstrenght },
  { path: '/Cyoga/Cyoga', name: 'Cyoga', element: Cyoga },
  { path: '/Cendurance/Cendurance', name: 'Cendurance', element: Cendurance },
  { path: '/Cskill/Cskill', name: 'Cskill', element: Cskill },
  { path: '/Ctest/Ctest', name: 'test', element: Ctest },
  { path: '/Cagility/Cagility', name: 'Cagility', element: Cagility },
  // { path: '/sports/sports', name: 'sports', element: Sports },
  // { path: '/sports/sports', name: 'sports', element: Sports },


//football
  { path: '/sports/sports', name: 'sports', element: Sports },
  { path: '/fithness/fithness', name: 'fithness', element: fithness },
  { path: '/strenght/strenght', name: 'strenght', element: strenght },
  { path: '/yoga/yoga', name: 'yoga', element: yoga },
  { path: '/endurance/endurance', name: 'endurance', element: endurance },
  { path: '/skill/skill', name: 'skill', element: skill },
  { path: '/test/test', name: 'test', element: test },
  { path: '/agility/agility', name: 'agility', element: agility },
  // { path: '/sports/sports', name: 'sports', element: Sports },
  // { path: '/sports/sports', name: 'sports', element: Sports },

  //gym
  { path: '/sports/sports', name: 'sports', element: Gsports },
  { path: '/Gfithness/Gfithness', name: 'Gfithness', element: Gfithness },
  { path: '/Gstrenght/Gstrenght', name: 'Gstrenght', element: Gstrenght },
  { path: '/Gyoga/Gyoga', name: 'Gyoga', element: Gyoga },
  { path: '/Gendurance/Gendurance', name: 'Gendurance', element: Gendurance },
  { path: '/Gskill/Gskill', name: 'Gskill', element: Gskill },
  { path: '/Gtest/Gtest', name: 'Gtest', element: Gtest },
  { path: '/Gagility/Gagility', name: 'Gagility', element: Gagility },
  // { path: '/sports/sports', name: 'sports', element: Sports },
  // { path: '/sports/sports', name: 'sports', element: Sports },

  //YOGA
  { path: '/Ysports/Ysports', name: 'Ysports', element: Ysports },
  { path: '/Yfithness/Yfithness', name: 'Yfithness', element: Yfithness },
  { path: '/Ystrenght/Ystrenght', name: 'Ystrenght', element: Ystrenght },
  { path: '/Yyoga/Yyoga', name: 'Yyoga', element: Yyoga },
  { path: '/Yendurance/Yendurance', name: 'YGendurance', element: Yendurance },
  { path: '/Yskill/Yskill', name: 'Yskill', element: Yskill },
  { path: '/Ytest/Ytest', name: 'test', element: Ytest },
  { path: '/Yagility/Yagility', name: 'Yagility', element: Yagility },
  // { path: '/sports/sports', name: 'sports', element: Sports },
  // { path: '/sports/sports', name: 'sports', element: Sports },

  //Badminton
  { path: '/Bsports/Bsports', name: 'Bsports', element: Bsports },
  { path: '/Bfithness/Bfithness', name: 'Bfithness', element: Bfithness },
  { path: '/Bstrenght/Bstrenght', name: 'Bstrenght', element: Bstrenght },
  { path: '/Byoga/Byoga', name: 'Byoga', element: Byoga },
  { path: '/Bendurance/Bendurance', name: 'Bendurance', element: Bendurance },
  { path: '/Bskill/Bskill', name: 'Bskill', element: Bskill },
  { path: '/Btest/Btest', name: 'Btest', element: Btest },
  { path: '/Bagility/Bagility', name: 'Bagility', element: Bagility },
  // { path: '/sports/sports', name: 'sports', element: Sports },
  // { path: '/sports/sports', name: 'sports', element: Sports },

  //Swimming
  { path: '/Ssports/Ssports', name: 'Ssports', element: Ssports },
  { path: '/Sfithness/Sfithness', name: 'Sfithness', element: Sfithness },
  { path: '/Sstrenght/Sstrenght', name: 'Sstrenght', element: Sstrenght },
  { path: '/Syoga/Syoga', name: 'Syoga', element: Syoga },
  { path: '/Sendurance/Sendurance', name: 'Sendurance', element: Sendurance },
  { path: '/Sskill/Sskill', name: 'Sskill', element: Sskill },
  { path: '/Stest/Stest', name: 'Stest', element: Stest },
  { path: '/Sagility/Sagility', name: 'Sagility', element: Sagility },
  // { path: '/sports/sports', name: 'sports', element: Sports },
  // { path: '/sports/sports', name: 'sports', element: Sports },




  { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  { path: '/forms/select', name: 'Select', element: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  { path: '/forms/range', name: 'Range', element: Range },
  { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', element: Layout },
  { path: '/forms/validation', name: 'Validation', element: Validation },
  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  { path: '/notifications/badges', name: 'Badges', element: Badges },
  { path: '/notifications/modals', name: 'Modals', element: Modals },
  { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
