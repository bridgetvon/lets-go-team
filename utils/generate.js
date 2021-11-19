//generate page template 

//make a section for manager q's
const generateTeam = team => {
const generateManager = function (manager) {
    return `
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Role</h5>
        <p class="card-text">Id:${manager.id}</p>
        <p class="card-text">Email:${manager.email}</p>
        <p class="card-text">Office Number:${manager.officeNumber}</p>
      </div>
    </div>
  </div>
    `;
}

const generateEngineer = teamArray => {
    return `
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Role</h5>
        <p class="card-text">Id:${engineer.id}</p>
        <p class="card-text">Email:${engineer.email}</p>
        <p class="card-text">GitHub:${engineer.gitHub}</p>
      </div>
    </div>
  </div>
    `;
}

const generateIntern = function (intern) {
    return `
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Role</h5>
        <p class="card-text">Id:${intern.id}</p>
        <p class="card-text">Email:${intern.email}</p>
        <p class="card-text">School:${intern.school}</p>
      </div>
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
      <div class="row">
      ${generateTeam(team)}
      </div>
      </div>
       
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>

  </body>
  
 
  </html>
    `;
};