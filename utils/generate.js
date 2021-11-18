//generate page template 

//make a section for manager q's

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

const generateEngineer = function (engineer) {
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