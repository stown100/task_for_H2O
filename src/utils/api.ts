class Api {
  private url: string;

  constructor({ url }: { url: string }) {
    this.url = url;
  }

  getUsers(
    sortParam: { name: string; order: boolean },
    pagination: { page: number; limit: number },
    searchParam: string
  ) {
    return fetch(
      `${this.url}users?sortBy=${sortParam.name}&order=${
        sortParam.order ? "desc" : ""
      }&page=${pagination.page}&limit=${pagination.limit}&name=${searchParam}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(this._handleResponse);
  }

  private _handleResponse(res: Response) {
    if (res.ok) {
      return res.json();
    }
    // если ошибка, отклоняем промис
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

export const api = new Api({
  url: "https://641de2fd0596099ce156cb4d.mockapi.io/api/",
});
