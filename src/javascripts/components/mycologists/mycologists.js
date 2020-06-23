const FinderMaker = (finders) => {
    const domString = `
  <div class="col-3">
  <div class="card">
    <div class="card-body">
    <div class="card-header">${finders.name}</div>
      <p class="card-text">This finders is ${finders.age}</p>
      </div>
      </div>
  </div>
  `;
  
    return domString;
  };
  
  export default { finderMaker };