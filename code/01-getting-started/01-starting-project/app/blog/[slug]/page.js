function page({ params }) {
  return (
    <main>
      This is blog page ...
      <h2>Title: {params.title}</h2>
      <p>Content: {params.slug}</p>
    </main>
  );
}

export default page;
