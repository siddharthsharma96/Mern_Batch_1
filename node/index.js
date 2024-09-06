const fs = require("fs");
const http = require("http");
const url = require("url");
const replaceTemplate = require("./modules/replaceTemplate");

// blocking synchronous

// const readDataUsingSync = fs.readFileSync("./txt/read-this.txt", "utf-8");
// console.log(readDataUsingSync);

// fs.writeFileSync(
//   "./txt/output.txt",
//   "Hi myself siddharth sharma from codehubnexus"
// );

// Non-blocking asynchrous way

// fs.readFile("./txt/output.txt", "utf-8", (err, data) => {
//   if (err) return console.log("ERROR 💥", err);
//   console.log(data);
//   fs.writeFile(
//     "./txt/output.txt",
//     `${data}\nThis is  from non blocking code `,
//     "utf-8",
//     (err) => {
//       if (err) return console.log("ERROR 💥", err);
//       console.log("Data added successfully");
//     }
//   );
// });

// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   if (err) return console.log("ERROR 💥", err);
//   //   console.log(data);
//   fs.readFile(`./txt/${data}.txt`, "utf-8", (err1, data1) => {
//     if (err) return console.log("ERROR 💥", err1);
//     // console.log(data1);
//     fs.readFile("./txt/append.txt", "utf-8", (err2, data2) => {
//       if (err) return console.log("ERROR 💥", err2);
//       //   console.log(data2);
//       fs.writeFile(
//         "./txt/output.txt",
//         `${data}\n${data1}\n ${data2}`,
//         "utf-8",
//         (err3) => {
//           if (err) return console.log("ERROR 💥", err3);
//           console.log("all the data added in to a new file");
//         }
//       );
//     });
//   });
// });

// fs.writeFile(
//   "./txt/output.txt",
//   "This from non blocking code",
//   "utf-8",
//   (err) => {
//     if (err) return console.log("ERROR 💥", err);
//     console.log("Data added successfully");
//   }
// );

// console.log("Reading files");
// 6,16,19

// /Server /////////////////

// 1xx : providing some information
// 2xx: Success
// 3xx: redirection
// 4xx:client error
// 5xx:Server Error
const overview = fs.readFileSync("./templates/overview.html", "utf-8");
const card = fs.readFileSync("./templates/card.html", "utf-8");
const product = fs.readFileSync("./templates/product.html", "utf-8");
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`);
const data_obj = JSON.parse(data);
// console.log(data_obj);
// const replaceTemplate =

const server = http.createServer((req, res) => {
  //   console.log(req.url);
  const { query, pathname } = url.parse(req.url, true);
  //   console.log(data1);

  //   console.log(query, pathname);
  //   res.end("At About Page");
  if (pathname === "/" || pathname === "/overview") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    const cardHtml = data_obj.map((el) => replaceTemplate(card, el)).join(" ");
    // console.log(cardHtml);

    const output = overview.replace("{%PRODUCT_CARDS%}", cardHtml);

    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    // console.log(query);
    const productDetail = data_obj[query.id];
    const output = replaceTemplate(product, productDetail);
    res.end(output);
  } else if (pathname === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end(`<h1>Page Not found</h1>`);
  }
});

const PORT_NO = 8000;
server.listen(PORT_NO, "127.0.0.1", () => {
  console.log("Server started on ", PORT_NO);
});
