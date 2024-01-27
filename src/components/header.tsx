import { Pizza } from 'lucide-react'

import { AccountMenu } from './account-menu'
import { HeaderNav } from './header-nav'
import { ModeToggle } from './theme/theme-toggle'
import { Separator } from './ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-3 px-6 sm:gap-6">
        <div>
          <Pizza className="h-6 w-6" />
        </div>

        <Separator orientation="vertical" className="h-6" />

        <HeaderNav />

        <div className="ml-auto flex items-center gap-2">
          <ModeToggle />

          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
