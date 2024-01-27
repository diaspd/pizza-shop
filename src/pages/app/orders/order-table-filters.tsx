import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function OrderTableFilters() {
  return (
    <form className="flex flex-col items-start gap-2 lg:flex-row lg:items-center">
      <span className="text-sm font-semibold">Filtros:</span>
      <Input placeholder="ID do pedido" className="h-8 lg:w-auto" />
      <Input placeholder="Nome do cliente" className="h-8 lg:w-[500px]" />

      <Select defaultValue="all">
        <SelectTrigger className="h-8 lg:w-[250px]">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">Todos status</SelectItem>
          <SelectItem value="pending">Pendente</SelectItem>
          <SelectItem value="canceled">Cancelado</SelectItem>
          <SelectItem value="processing">Em preparo</SelectItem>
          <SelectItem value="delivering">Em entrega</SelectItem>
          <SelectItem value="delivered">Entregue</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex w-full gap-2">
        <Button
          type="submit"
          variant="secondary"
          size="xs"
          className="w-full lg:w-auto"
        >
          <Search className="mr-2 h-4 w-4" />
          Filtrar resultados
        </Button>

        <Button
          type="button"
          variant="outline"
          size="xs"
          className="w-full lg:w-auto"
        >
          <X className="mr-2 h-4 w-4" />
          Remover Filtros
        </Button>
      </div>
    </form>
  )
}
