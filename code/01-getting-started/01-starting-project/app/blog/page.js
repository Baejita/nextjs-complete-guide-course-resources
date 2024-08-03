import Link from "next/link";

function page() {
  return (
    <div>
      <h1>Blog</h1>
      <Link href="blog/post-1">
        <p>post-1</p>
      </Link>
      <Link href="/blog/post-2">
        <p>post-2</p>
      </Link>
    </div>
  );
}

export default page;
