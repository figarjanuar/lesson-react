import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className={cn("bg-gray-200 py-2 text-center text-sm fixed w-full bottom-0")}>
      <div className="container">
        <p>&copy; {new Date().getFullYear()} Aplikasi Resep</p>
      </div>
    </footer>
  )
}
