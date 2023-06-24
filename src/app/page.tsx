import { shuffle } from "lodash";

import { Home } from "app/Home";
import { fetchWords } from "utils/airtable-api";
import { createMetadata } from "utils/createMetadata";

export const metadata = createMetadata();

async function fetchData() {
  return await fetchWords();
}

export default async function IndexPage() {
  const words = await fetchData();

  return <Home words={shuffle(words)} />;
}
