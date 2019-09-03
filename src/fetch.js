export default async function() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("success");
    }, 3000);
  });
}
