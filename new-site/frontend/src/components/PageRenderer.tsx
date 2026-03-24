'use client'

import { useContent } from '../contexts/ContentContext'
import HomePage from './HomePage'
import GuidePage from './GuidePage'
import BadgeArcadePage from './BadgeArcadePage'
import OtherPage from './OtherPage'
import ProgressPage from './ProgressPage'

export default function PageRenderer() {
  const { currentPage } = useContent()

  switch (currentPage) {
    case 'home':
      return <HomePage />
    case 'guide':
      return <GuidePage />
    case 'badgearcade':
      return <BadgeArcadePage />
    case 'other':
      return <OtherPage />
    case 'progress':
      return <ProgressPage />
    default:
      return <HomePage />
  }
}
