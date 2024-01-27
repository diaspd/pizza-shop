import { ChevronDown, Home, UtensilsCrossed } from 'lucide-react'

import { NavLink } from './nav-link'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function HeaderNav() {
  return (
    <>
      <nav className="hidden items-center gap-2 space-x-6 sm:flex sm:flex-row">
        <NavLink to="/">
          <Home className="h-4 w-4" />
          Início
        </NavLink>

        <NavLink to="/orders">
          <UtensilsCrossed className="h-4 w-4" />
          Pedidos
        </NavLink>
      </nav>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex select-none items-center gap-2 sm:hidden"
          >
            Páginas
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end" className="lg:w-56">
          <DropdownMenuItem>
            <NavLink to="/">
              <Home className="h-4 w-4" />
              Início
            </NavLink>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <NavLink to="/orders">
              <UtensilsCrossed className="h-4 w-4" />
              Pedidos
            </NavLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
