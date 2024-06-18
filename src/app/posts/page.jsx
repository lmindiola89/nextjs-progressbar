async function loadPosts() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
}

async function PostsPage() {
  // await loadPosts();
  return (
    <section className="flex justify-center items-center h-[calc(100vh-3rem)]">
      <div className="text-xl">PostsPage</div>
    </section>
  );
}

export default PostsPage;
