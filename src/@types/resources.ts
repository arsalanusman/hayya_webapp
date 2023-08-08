import authentication from "../../public/locales/en/authentication.json";
import hayyaWithMe from "../../public/locales/en/hayya-with-me.json";
import ko from "../../public/locales/en/ko.json";
import myHayya from "../../public/locales/en/my-hayya.json";

import common from "../../public/locales/en/common.json";
import footer from "../../public/locales/en/footer.json";
import header from "../../public/locales/en/header.json";
import homepage from "../../public/locales/en/homepage.json";
import secondpage from "../../public/locales/en/second-page.json";

const resources = {
  authentication,
  "hayya-with-me": hayyaWithMe,
  ko: ko,
  "my-hayya": myHayya,
  common,
  homepage,
  footer,
  header: header,
  "second-page": secondpage,
} as const;

export default resources;
