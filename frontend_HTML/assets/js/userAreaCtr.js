function fetchGetHtml(file) {
  
  return fetch(`${file}.html`)
    .then(resp => resp.text()) 
      .then(html => {
        document.querySelector('.columns').innerHTML = html;
        window.location.href = `${window.location.href}#${file}`
      })
    .catch(err => {
      document.querySelector('.columns').innerHTML = `
        <p class=" title is-4 has-text-danger"> 
          Deu ruim pae: [ERR: ${err}]
        </p>`
      });
}

function onclickMenuOptions() {
  const menuOptions = Array.prototype.slice.call(document.querySelectorAll('[itemid]'), 0);

  if(menuOptions.length > 0) {
    menuOptions.forEach( el => {
      el.addEventListener('click', async event => {
        let htmlId;

        if(!event.target.children.length)
          htmlId = event.target.parentNode.attributes.itemid.value;
        else
          htmlId = event.target.attributes.itemid.value;

        return await fetchGetHtml(htmlId);
      })
    });
  }
}

document.addEventListener('DOMContentLoaded', async() => {
  await fetchGetHtml('userOptions');
  onclickMenuOptions();
});

var detectBackOrForward = function(onBack, onForward) {
  var hashHistory = [window.location.hash];
  var historyLength = window.history.length;

  return function() {
    var hash = window.location.hash, length = window.history.length;
    if (hashHistory.length && historyLength == length) {
      if (hashHistory[hashHistory.length - 2] == hash) {
        hashHistory = hashHistory.slice(0, -1);
        onBack();
      } else {
        hashHistory.push(hash);
        onForward();
      }
    } else {
      hashHistory.push(hash);
      historyLength = length;
    }
  }
};

window.addEventListener("hashchange", detectBackOrForward(
  function() { console.log("back") },
  function() { console.log("forward") }
));