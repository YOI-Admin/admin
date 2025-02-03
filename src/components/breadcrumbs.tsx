import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "~/components/ui/breadcrumb"

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Breadcrumb className="m-6">
      <BreadcrumbList>
      {items.map((item, index) => (
        <BreadcrumbItem key={item.href}>
          <BreadcrumbLink href={item.href}>
            {item.label}
          </BreadcrumbLink>
          {index < items.length - 1 && <BreadcrumbSeparator />}
        </BreadcrumbItem>
      ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}