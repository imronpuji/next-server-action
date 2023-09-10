async function fetcher<T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data?: null | string | FormData | [] | {},
): Promise<T | null> {
  let token = '';
  if (typeof Window !== 'undefined') {
    token = localStorage.getItem('token') as string;
  }

  const options: {
    method: string;
    headers: {
      'Content-Type': string;
      Authorization?: string;
    };
    body?: null | string | FormData;
  } = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (token) {
    options.headers.Authorization = token;
  }

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACK_END_URL}${url}`,
      options,
    );

    if (!response?.ok) {
      throw await response.json();
    }
    return response.json();
  } catch (error: unknown) {
    throw await error;
  }
}

export default fetcher;
