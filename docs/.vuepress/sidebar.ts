import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/guide/": [
    "Database",
    "Computer Network",
    "network",
    "Design Pattern",
    "Git-ComdLine-REST",
    "Operating Systems",
    "Deep_into_OperatingSystem",
    "Python Handbook",
  ],
  "/posts/": [
    "article1", 
    "article2",
    "article3",
    {
      text: "暑期集训",
      icon: "note",
      collapsable: true,
      prefix: "/posts/training",
      children: [
          "716-717","718-719","720-721","722-723","724-725","726-727","728-729","730-731","801-805","806-809","810-811","812-813","815-816"
      ],
    },
    {
      text: "文章",
      icon: "note",
      collapsable: true,
      prefix: "/posts/",
      children: [
        {
          text: "文章 3-4",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article3", "article4"],
        },
        {
          text: "文章 5-12",
          icon: "note",
          collapsable: true,
          children: [
            {
              text: "文章 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8","article9", "article10", "article11", "article12"],
            },
            {
              text: "文章 9-12",
              icon: "note",
              collapsable: true,
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
  ],
  /*"/about-the-author/": [
    {
      text: "个人经历",
      icon: "zuozhe",
      collapsable: false,
      children: [
        "internet-addiction-teenager",
        "javaguide-100k-star",
        "feelings-after-one-month-of-induction-training",
        "feelings-of-half-a-year-from-graduation-to-entry",
      ],
    },
    {
      text: "杂谈",
      icon: "chat",
      collapsable: false,
      children: [
        "my-article-was-stolen-and-made-into-video-and-it-became-popular",
        "dog-that-copies-other-people-essay",
        "zhishixingqiu-two-years",
      ],
    },
  ],*/
});
