import axios from "axios";
import { WebPDFLoader } from "langchain/document_loaders/web/pdf";
export const pdfTextFromUrl = async (url: string) => {
  try {
    const response = await axios({
      url: url,
      method: "GET",
      responseType: "arraybuffer",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/pdf",
      },
    });
    const blob = new Blob([response.data], {
      type: "application/pdf",
    });
    const loader = new WebPDFLoader(blob, { splitPages: false });
    const [document] = await loader.load();
    return document.pageContent ?? "";
  } catch (e) {
    const error = e as Error;
    console.log(error);
    throw error;
  }
};
