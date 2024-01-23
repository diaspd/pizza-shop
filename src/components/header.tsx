import { Home, PizzaIcon } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Separator } from '@/components/ui/separator'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <PizzaIcon className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link to="/">
            <Home className="h-4 w-4" />
            Início
          </Link>
        </nav>
      </div>
    </div>
  )
}
