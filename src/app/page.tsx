import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <Link href="/documents/123">Click me</Link>
    </div>
  );
};

export default Home;
