export const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const pageSize = parseInt(params.get("pageSize") || "10", 10);
  const page = parseInt(params.get("page") || "1", 10);

  return {
    pageSize: isNaN(pageSize) ? 10 : pageSize,
    page: isNaN(page) ? 1 : page,
  };
};
