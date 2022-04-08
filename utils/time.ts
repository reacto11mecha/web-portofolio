import { DateTime } from "luxon";

export const getTime = () => {
  const past = DateTime.fromObject(
    JSON.parse(process.env.DATE_TIME as unknown as string),
    { zone: process.env.DATE_TIMEZONE }
  );
  const now = DateTime.now();

  const diff = now.diff(past, ["years"]);
  return Math.floor(diff.years);
};
