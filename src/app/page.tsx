import Results from "@/components/MovieSection/Results";

const API_KEY = process.env.API_KEY;

export default async function Page({ searchParams }: { searchParams: Promise<any> }) {
  const params = await searchParams; // ★ must await
  const genre = params.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return (
    <div>
      <Results results={data.results} />
    </div>
  );
}
