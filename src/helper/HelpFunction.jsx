/* export function makeid(length) {
  let result = [];
  let characters = "0123456789";
  let charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result.push(
      characters.charAt(Math.floor(Math.random() * charactersLength))
    );
  }
  return result.join("");
}
 */

export const Email = (email) => {
  let aux = "";
  for (let i = 0; i < email.length; i++) {
    if (email[i] !== "@") {
      aux += email[i];
    } else {
      return aux;
      break;
    }
  }
};
