export default (ctx, html) => html`
<div class="container" >
  <div class="jumbotron">
    <div class="row">
      <div class="col-md-6">
        <h1>Aofl-JS 3.x</h1>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="run" @click=${ctx.run}>Create 1,000 rows</button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary btn-block" id="runlots" @click=${ctx.runLots}>Create 10,000 rows</button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary
                        btn-block" id="add" @click=${ctx.add}>Append 1,000 rows</button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary
                        btn-block" id="update" @click=${ctx.update10th}>Update every 10th row</button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary
                        btn-block" id="clear" @click=${ctx.clear}>Clear</button>
          </div>
          <div class="col-sm-6 smallpad">
            <button type="button" class="btn btn-primary
                        btn-block" id="swaprows" @click=${ctx.swapRows}>Swap Rows</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <table class="table table-hover table-striped test-data">
    <tbody>${ctx.data.map((item, index) => html`
      <tr id=${item.id} class=${item.selected ? 'danger' : ''} data-index="${index}" @click="${ctx.select}">
        <td class="col-md-1">${item.id}</td>
        <td class="col-md-4">
          <a>${item.label}</a>
        </td>
        <td class="col-md-1" data-index="${index}" @click="${ctx.del}">
          <a>
            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>
          </a>
        </td>
        <td class="col-md-6"></td>
      </tr>`)}
    </tbody>
  </table>
  <span class="preloadicon glyphicon glyphicon-remove" aria-hidden="true"></span>
</div>
`;
