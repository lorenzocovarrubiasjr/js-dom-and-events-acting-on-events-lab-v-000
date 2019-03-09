function preventRefreshOnSubmit(){
    document.querySelector('form').addEventListener('submit', function(event){
      event.preventDefault()
    })
}

preventRefreshOnSubmit()

function retrieveEmployeeInformation() {
  const doc = document.querySelector('form input');
  return doc.value;
};

function addNewElementAsLi() {
  const element = document.createElement("LI");
  const value = document.createTextNode(retrieveEmployeeInformation());
  element.append(value);
  document.querySelector('.employee-list').appendChild(element);
};

function addNewLiOnClick() {
  const submit = document.querySelector('input[type="submit"]');
  submit.addEventListener('click', function(){
    addNewElementAsLi();
    const doc = document.querySelector('form input')
    doc.value = '';
  })
};

function clearEmployeeListOnLinkClick() {

};
