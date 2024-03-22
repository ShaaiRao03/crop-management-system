function toggleSublist(index, clickedItem, event) {
  event.preventDefault(); // Prevent default behavior of anchor tag
  var sublist = document.getElementsByClassName("sublist")[index];
  var menuItems = document.getElementsByClassName("menu-item");
  var subItems = sublist ? sublist.getElementsByClassName("sub-item") : [];

  // Deactivate all menu items and sublists
  deactivateAllActive(); 

  // Activate the clicked menu item and sublist 
  sublist && sublist.classList.toggle("active");
  clickedItem.classList.toggle("active");  

  // Activate the first sub-item by default
  if (subItems.length > 0) { 
    subItems[0].classList.add("active");
  }

  // Fetch content from the specified page
  var pageURL = clickedItem.getAttribute("href");
  console.log(pageURL)
  fetchPageContent(pageURL); 
}  

function fetchPageContent(pageURL) { 
  fetch(pageURL)
    .then(response => response.text())
    .then(data => {
      var doc = new DOMParser().parseFromString(data, 'text/html');
      var newContent = doc.querySelector("#main-content").innerHTML;
      document.getElementById("main-content").innerHTML = newContent;
    })
    .catch(error => console.error('Error fetching page content:', error));
}

function activateSubItem(clickedItem) { 
  event.preventDefault(); // Prevent default behavior of anchor tag 
  var subItems = document.querySelectorAll(".sub-item"); 
  
  // Deactivate all other sub-items
  for (var i = 0; i < subItems.length; i++) {
    if (subItems[i] !== clickedItem) {
      subItems[i].classList.remove("active");
    }
  }
  var pageURL = clickedItem.getAttribute("href");
  console.log(pageURL)
  fetchPageContent(pageURL); 
  clickedItem.classList.add("active"); 
}

function deactivateAllActive() {
  var activeItems = document.querySelectorAll('.active');
  for (var i = 0; i < activeItems.length; i++) {
    activeItems[i].classList.remove("active");
  }
}