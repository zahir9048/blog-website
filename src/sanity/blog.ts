export default {
  name: "blog",
  type: "document",
  title: "Blog",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "desc",
      type: "string",
      title: "Description",
      validation: (rule: any) => [
        rule
          .required()
          .min(10)
          .error("Min of 10 letters description required"),
        rule.max(500).error("Max. description length is 500"),
      ]
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "category",
      type: "string",
      title: "category",
    },
    {
      name: "excerpt",
      type: "string",
      title: "excerpt",
      validation: (rule: any) => [
        rule
          .required()
          .min(10)
          .error("An excerpt of min. 10 characters is required"),
        rule.max(50).warning("Shorter excerpts are usually better"),
      ],
    },
    {
      name: "date_posted",
      type: "date",
      title: "Date Posted",
      validation: (rule:any) => rule.required()
    },
  ],
};
