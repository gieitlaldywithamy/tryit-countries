import { PerPageOptions } from "../lib/PaginationState";

export const updateURLSearchParams = ({
  page,
  perPage,
}: {
  page: number;
  perPage: PerPageOptions;
}) => {
  const params = new URLSearchParams(window.location.search);
  params.set("page", page.toString());
  params.set("perPage", perPage.toString());
  window.history.pushState(
    {},
    "",
    `${window.location.pathname}?${params.toString()}`
  );
};
