export async function fetcher<T>(url: string, delay = 1000): Promise<T> {
  // Simulate network latency for realism
  await new Promise((resolve) => setTimeout(resolve, delay));

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function mockFetcher<T>(data: T, delay = 1000): Promise<T> {
  // Mock fetcher with simulated delay
  await new Promise((resolve) => setTimeout(resolve, delay));
  return data;
}
