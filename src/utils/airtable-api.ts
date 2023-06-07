import Airtable from "airtable";
import dotenv from "dotenv";

dotenv.config();

export const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.AIRTABLE_BASE_ID!
);

export async function fetchWords(): Promise<any[]> {
  const result: any[] = [];
  await base("Words")
    .select({
      maxRecords: 500,
      view: "Grid view",
    })
    .eachPage((words, fetchNextPage) => {
      words.forEach((item) => {
        const { id, fields } = item;

        // eslint-disable-next-line functional/immutable-data
        result.push({
          id,
          name: fields["Name"],
          category: fields["Category"],
          level: fields["Level"],
        });
      });

      fetchNextPage();
    });
  return result;
}
