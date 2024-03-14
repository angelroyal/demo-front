import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Esto es una prueba
      <Link href="/help">ver mas</Link>
    </main>
  );
}
