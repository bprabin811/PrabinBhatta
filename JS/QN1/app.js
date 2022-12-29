const MyLibrary = (function() {
    // Private variables and functions
    let elementClass = "";
  
    function changeClass(element, newClass) {
      element.className = newClass;
    }
  
    function getDataSet(element) {
      return element.dataset;
    }
  
    function injectElement(tag, className, parent) {
      const element = document.createElement(tag);
      element.className = className;
      parent.appendChild(element);
    }
  
    function makeRequest(url, method, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.onload = function() {
        if (xhr.status === 200) {
          callback(xhr.response);
        }
      };
      xhr.send();
    }
  
    function getInputValue(input) {
      return input.value;
    }
  
    function setInputValue(input, value) {
      input.value = value;
    }
  
    // Revealing module pattern: return an object with public methods
    return {
      changeClass: changeClass,
      getDataSet: getDataSet,
      injectElement: injectElement,
      makeRequest: makeRequest,
      getInputValue: getInputValue,
      setInputValue: setInputValue
    };
  })();
  
  