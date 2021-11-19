//generate page template 

//make a section for manager q's
const generateTeam = team => {
const generateManager = function (manager) {
    return `
    <div class="card header" style="width: 18rem;">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${manager.id}</li>
          <li class="list-group-item">${manager.email}</li>
          <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
    `;
}

const generateEngineer = teamArray => {
    return `
    <div class="card header" style="width: 18rem;">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${engineer.id}</li>
          <li class="list-group-item">${engineer.email}</li>
          <li class="list-group-item">${engineer.officeNumber}</li>
        </ul>
      </div>
    </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="card header" style="width: 18rem;">
    <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${intern.id}</li>
          <li class="list-group-item">${intern.email}</li>
          <li class="list-group-item">${intern.officeNumber}</li>
        </ul>
      </div>
    </div>
    `;
}
};

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang="en"> 

   <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>letsgoteam</title>
  <!-- CSS only -->
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   <link rel="stylesheet" href="style.css">
      </head>

  <body>
      <header>My Team</header>
      <div>
      ${generateTeam(team)}
      </div>
       
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
  
 
  </html>
    `;
};