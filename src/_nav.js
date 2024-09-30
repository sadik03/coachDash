import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Home',
  },
  {
    component: CNavItem,
    name: 'Attendance',
    to: '/theme/colors',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Training Videos',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View lession plan',
    to: '/theme/viewlession',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'SPORTS',
  },

  {
    component: CNavGroup,
    name: 'View All Sports',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavGroup,
        name: 'Cricket',
        to: '/base',
        icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'sports',
            to: '/base/accordion',
          },
          {
            component: CNavItem,
            name: 'fithness',
            to: '/base/breadcrumbs',
          },
          {
            component: CNavItem,
            name: 'strenght',
            to: '/base/cards',
          },
          {
            component: CNavItem,
            name: 'yoga',
            to: '/base/carousels',
          },
          {
            component: CNavItem,
            name: 'endurance',
            to: '/base/collapses',
          },
          {
            component: CNavItem,
            name: 'skill',
            to: '/base/ListGroup',
          },
          {
            component: CNavItem,
            name: 'test',
            to: '/base/navs',
          },
          {
            component: CNavItem,
            name: 'agility',
            to: '/base/paginations',
          },
          {
            component: CNavItem,
            name: 'video analysis',
            to: '/base/spinners',
          },
          {
            component: CNavItem,
            name: 'personal lession',
            to: '/base/popovers',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Football',
        to: '/buttons',
        icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'sports',
            to: '/sports/sports',
          },
          {
            component: CNavItem,
            name: 'fithness',
            to: '/fithness/fithness',
          },
          {
            component: CNavItem,
            name: 'strenght',
            to: '/strenght/strenght',
          },
          {
            component: CNavItem,
            name: 'yoga',
            to: '/yoga/yoga',
          },
          {
            component: CNavItem,
            name: 'endurance',
            to: '/endurance/endurance',
          },
          {
            component: CNavItem,
            name: 'skill',
            to: '/skill/skill',
          },
          {
            component: CNavItem,
            name: 'test',
            to: '/test/test',
          },
          {
            component: CNavItem,
            name: 'agility',
            to: '/agility/agility',
          },
          {
            component: CNavItem,
            name: 'video analysis',
            to: '/buttons/dropdowns',
          },
          {
            component: CNavItem,
            name: 'personal lession',
            to: '/buttons/dropdowns',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Gym',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'sports',
            to: '/sports/sports',
          },
          {
            component: CNavItem,
            name: 'fithness',
            to: '/Gfithness/Gfithness',
          },
          {
            component: CNavItem,
            name: 'strenght',
            to: '/Gstrenght/Gstrenght',
          },
          {
            component: CNavItem,
            name: 'yoga',
            to: '/Gyoga/Gyoga',
          },
          {
            component: CNavItem,
            name: 'endurance',
            to: '/Gendurance/Gendurance',
          },
          {
            component: CNavItem,
            name: 'skill',
            to: '/Gskill/Gskill',
          },
          {
            component: CNavItem,
            name: 'test',
            to: '/Gtest/Gtest',
          },
          {
            component: CNavItem,
            name: 'agility',
            to: '/Gagility/Gagility',
          },
          {
            component: CNavItem,
            name: 'video analysis',
            to: '/buttons/dropdowns',
          },
          {
            component: CNavItem,
            name: 'personal lession',
            to: '/buttons/dropdowns',
          },
        ],
      },

      //yoga
      {
        component: CNavGroup,
        name: 'Yoga',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'sports',
            to: '/Ysports/Ysports',
          },
          {
            component: CNavItem,
            name: 'fithness',
            to: '/Yfithness/Yfithness',
          },
          {
            component: CNavItem,
            name: 'strenght',
            to: '/Ystrenght/Ystrenght',
          },
          {
            component: CNavItem,
            name: 'yoga',
            to: '/Yyoga/Yyoga',
          },
          {
            component: CNavItem,
            name: 'endurance',
            to: '/Yendurance/Yendurance',
          },
          {
            component: CNavItem,
            name: 'skill',
            to: '/Yskill/Yskill',
          },
          {
            component: CNavItem,
            name: 'test',
            to: '/Ytest/Ytest',
          },
          {
            component: CNavItem,
            name: 'agility',
            to: '/Yagility/Yagility',
          },
          {
            component: CNavItem,
            name: 'video analysis',
            to: '/Ybuttons/Ydropdowns',
          },
          {
            component: CNavItem,
            name: 'personal lession',
            to: '/Ybuttons/Ydropdowns',
          },
        ],
      },
    
      {
        //BADMINTON
        component: CNavGroup,
        name: 'Badminton',
        icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'sports',
            to: '/Bsports/Bsports',
          },
          {
            component: CNavItem,
            name: 'fithness',
            to: '/Bfithness/Bfithness',
          },
          {
            component: CNavItem,
            name: 'strenght',
            to: '/Bstrenght/Bstrenght',
          },
          {
            component: CNavItem,
            name: 'yoga',
            to: '/Byoga/Byoga',
          },
          {
            component: CNavItem,
            name: 'endurance',
            to: '/Bendurance/Bendurance',
          },
          {
            component: CNavItem,
            name: 'skill',
            to: '/Bskill/Bskill',
          },
          {
            component: CNavItem,
            name: 'test',
            to: '/Btest/Btest',
          },
          {
            component: CNavItem,
            name: 'agility',
            to: '/Bagility/Bagility',
          },
          {
            component: CNavItem,
            name: 'video analysis',
            to: '/Bbuttons/Bdropdowns',
          },
          {
            component: CNavItem,
            name: 'personal lession',
            to: '/Bbuttons/Bdropdowns',
          },
        ],
      },
      {
        component: CNavGroup,
        name: 'Swimming',
        icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'sports',
            to: '/Ssports/Ssports',
          },
          {
            component: CNavItem,
            name: 'fithness',
            to: '/Sfithness/Sfithness',
          },
          {
            component: CNavItem,
            name: 'strenght',
            to: '/Sstrenght/Sstrenght',
          },
          {
            component: CNavItem,
            name: 'yoga',
            to: '/Syoga/Syoga',
          },
          {
            component: CNavItem,
            name: 'endurance',
            to: '/Sendurance/Sendurance',
          },
          {
            component: CNavItem,
            name: 'skill',
            to: '/Sskill/Sskill',
          },
          {
            component: CNavItem,
            name: 'test',
            to: '/Stest/Stest',
          },
          {
            component: CNavItem,
            name: 'agility',
            to: '/Sagility/Sagility',
          },
          {
            component: CNavItem,
            name: 'video analysis',
            to: '/buttons/dropdowns',
          },
          {
            component: CNavItem,
            name: 'personal lession',
            to: '/buttons/dropdowns',
          },
        ],
      },
    ],
  },

  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  {
    component: CNavTitle,
    name: 'Extras',
  },
  // {
  //   component: CNavGroup,
  //   name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Login',
  //       to: '/login',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Register',
  //       to: '/register',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 404',
  //       to: '/404',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Error 500',
  //       to: '/500',
  //     },
  //   ],
  // },
  {
    component: CNavItem,
    name: 'One to One With Student',
    to: '/extra/onetoone',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'View Students Feedback',
    to: '/extra/studentfeedback',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Innovation',
    to: '/extra/Innovation',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavItem,
  //   name: 'Maintenance Chart',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Maintenance Chart',
    to: '/extra/Maintenance',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
]

export default _nav
