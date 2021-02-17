import { File } from "@bootcamp-elearning/models/file";

const createElementTagA = (url: string): HTMLAnchorElement => {
  const link = document.createElement("a");
  link.href = url;
  return link;
}

const buildUrlBase64 = (data: File): string => {
  const url = `data:${data.type};base64,${data.file}`;
  return url;
}

export { createElementTagA, buildUrlBase64 };

// const source = this.reportService.getDetailScore(this.idDetailClass, idUser);
//     const link = document.createElement("a");
//     link.href = source;
//     link.target = '_blank'

//     link.click();


//     function downloadFile(data: File, fileName: string) {
//       const source = `data:${data.type};base64,${data.file}`;
//       const link = document.createElement("a");
//       link.href = source;
//       link.download = `${fileName}`
//       link.click();
//     }