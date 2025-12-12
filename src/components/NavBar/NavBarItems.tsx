"use client";
import Link from "next/link"
import { useSearchParams } from "next/navigation";

interface navItems {
    title: string,
    param: string
}

export default function NavBarItems({title, param}: navItems) {
    const searchParams = useSearchParams();
    const genre = searchParams.get('genre')
  return (
    <div>
      <Link className={`hover:text-amber-600 font-semibold
      ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg':
         ''}`}
        href={`/?genre=${param}`}>
        {title}
      </Link>
    </div>
  )
}
