import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import path from "path";
import { JSDOM } from "jsdom";
import cheerio from "cheerio";
(async () => {
  //   const pdfLoader = new PDFLoader(
  //     path.join(__dirname, "../../public/Justin_Rich_Resume.pdf"),
  //     {
  //       splitPages: false,
  //     }
  //   );
  //   const doc = await pdfLoader.load();
  //   console.log("pdf", doc[0].pageContent);
  const response = await fetch("https://www.linkedin.com/in/jcrich/", {
    method: "GET",
  });
  const text = await response.text();
  const $ = cheerio.load(text);
  const profileCard = $('[data-view-name="profile-card"]');
  console.log("LINKEDIN", text.replace(/(\r\n|\n|\r)/gm, ""));
  profileCard.each((element) => {
    console.log("LINKEDIN", element.toString());
  });
  process.exit();
})();

export const BS = "";
