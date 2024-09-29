const fs = require("fs");

fs.writeFile("hey.txt", "helllloooooooooooooo", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("donw");
  }
});

fs.appendFile("hey.txt", "helllloodfssafcsfoooooooooooo", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("donw");
  }
});


fs.rename("hey.txt", "ho.txt", function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("donw");
  }
});

//Copy One file to Another

// fs.copyFile("hey.txt", "helllloooooooooooooo.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("donw");
//   }
// });

//Delete a File

// fs.unlink("helllloooooooooooooo.txt", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("donddddddddddddd");
//   }
// });


//remove dir


// fs.rm("./copy", {recursive:true},function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("donddddddddddddd");
//   }
// });


fs.readFile('ho.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});