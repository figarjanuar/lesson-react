import { cn } from "@/lib/utils"

type HeaderProps = {
  title: string
}


export default function Header({title}: HeaderProps) {
  return (
    <header className={cn("bg-gray-100 py-4 sticky top-0")}>
      <div className="container">
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
    </header>
  )
}
