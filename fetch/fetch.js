let users = ['lili-legran', 'rin-st'];

async function getUsers(names) {
    
  let url = 'https://api.github.com/users/';
  let newUrls = names.map(el =>  url + el);
  console.log(newUrls);
  let promises = newUrls.map(el => fetch(el).then(response => response.json()));
  try{
    let data = await Promise.all(promises);
    let updData = data.map(el => {
      if (el.message === 'Not Found') {
        return null;
      }
      return el;
    });
  return updData;
  
  } catch (err) {
  return null;
  }
}

getUsers(users);
