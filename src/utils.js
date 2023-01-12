const paginate = (followers) => {
  const itemsPerPage = 10;
  const pages = Math.ceil(followers.length / itemsPerPage);

  const newFollowers = Array.from({ length: pages }, (_, i) => {
    const start = i * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
  return newFollowers;
};
export default paginate;