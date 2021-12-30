import { fetch } from 'undici';

export async function makeRequest() {
  const res = await fetch('https://api.github.com/repos/octocat/hello-world');
  const data = await res.json();
  return data;
}

export function add(a, b) {
  return a + b;
}