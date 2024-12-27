import { cn } from "@/lib/utils"
import { RootState } from "@/store"
import { useSelector } from "react-redux"

type HeaderProps = {
  title: string
}


export default function Header({title}: HeaderProps) {
  const { user } = useSelector((state: RootState) => state.auth)

  return (
    <header className={cn("bg-gray-100 py-4 sticky top-0")}>
      <div className="container">
        <h1 className="text-2xl font-bold">{user ? user.username : title}</h1>
      </div>
    </header>
  )
}
