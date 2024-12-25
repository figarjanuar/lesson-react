import { cn } from "@/lib/utils"

type MainProps = {
  children: React.ReactNode
}

export default function Main({ children }: MainProps) {
  return (
    <main className={cn("py-8")}>
      <div className="container">
        {children}
      </div>
    </main>
  )
}