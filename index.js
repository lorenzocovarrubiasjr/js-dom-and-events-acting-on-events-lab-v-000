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

};

function addNewLiOnClick() {

};

function clearEmployeeListOnLinkClick() {

};
