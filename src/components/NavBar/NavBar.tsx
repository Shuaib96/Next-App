import NavBarItems from "./NavBarItems";

export default function NavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-600 lg:text-lg justify-center gap-6 p-4">
      <NavBarItems title="Trending" param="fetchTrending" />
      <NavBarItems title="Top Rated" param="fetchTopRated" />
    </div>
  )
}
