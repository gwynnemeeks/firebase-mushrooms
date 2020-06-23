const finderMaker = (finders) => {
  const domString = `
  <div class="col-3">
  <div class="card myco-card" id=${finders.id}>
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
