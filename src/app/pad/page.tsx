import { createMetadata } from "utils/createMetadata";

import { Pad } from "./Pad";

export const metadata = createMetadata({
  appleTouchIcon: "/apple-touch-icon-pad.png",
});

export default function PadPage() {
  return <Pad />;
}
