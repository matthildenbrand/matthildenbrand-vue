const description =
  "Technologist based out of San Luis Obispo, CA. Always looking out for what will be the next latest and greatest.";

const title = "Matt Hildenbrand - Technologist";

const imgURL = "https://www.matthildenbrand.com/img/me.png";

const metaData = [
  {
    name: "description",
    content: description,
  },
  {
    name: "twitter:card",
    content: "summary",
  },
  {
    name: "twitter:site",
    content: "@publisher_handle",
  },
  {
    name: "twitter:title",
    content: title,
  },
  {
    name: "twitter:description",
    content: description,
  },
  {
    name: "twitter:creator",
    content: "@author_handle",
  },
  {
    name: "twitter:image",
    content: imgURL,
  },
  {
    property: "og:title",
    content: title,
  },
  {
    property: "og:type",
    content: "article",
  },
  {
    property: "og:url",
    content: "https://www.matthildenbrand.com",
  },
  {
    property: "og:image",
    content: imgURL,
  },
  {
    property: "og:description",
    content: description,
  },
  {
    property: "og:site_name",
    content: "Matt Hildenbrand",
  },
  {
    property: "og:admins",
    content: "Facebook numeric ID",
  },
];

export default () => {
  return metaData;
};
