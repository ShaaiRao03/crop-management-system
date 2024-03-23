// Sidebar
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
 

// Inventory 
function activateAll(){ 
  document.getElementById('all-table').style.display = 'table';
  document.getElementById('crop-table').style.display = 'none'; 
  document.getElementById("fertilizer-table").style.display = 'none'; 

  document.getElementById('allButton').classList.add('highlight');  
  document.getElementById('cropButton').classList.remove('highlight');
  document.getElementById('fertilizerButton').classList.remove('highlight');
}

function activateCrop(){
  document.getElementById('all-table').style.display = 'none';
  document.getElementById('crop-table').style.display = 'table'; 
  document.getElementById("fertilizer-table").style.display = 'none'; 

  document.getElementById('cropButton').classList.add('highlight');
  document.getElementById('allButton').classList.remove('highlight');
  document.getElementById('fertilizerButton').classList.remove('highlight');
}

function activateFertilizer(){ 
  document.getElementById('all-table').style.display = 'none';
  document.getElementById('crop-table').style.display = 'none'; 
  document.getElementById("fertilizer-table").style.display = 'table'; 

  document.getElementById('fertilizerButton').classList.add('highlight');
  document.getElementById('allButton').classList.remove('highlight');
  document.getElementById('cropButton').classList.remove('highlight');
}


// Pop up in task management
function openPopup() {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('overlay').style.display = 'block';
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
}

function submitInput() {
  var association = document.getElementById('association').value;
  var dueDate = document.getElementById('dueDate').value;
  var status = document.getElementById('status').value;
  var assignee = document.getElementById('assignee').value;
  // Do something with the inputs, for example:
  console.log("Association:", association);
  console.log("Due Date:", dueDate);
  console.log("Status:", status);
  console.log("Assignee:", assignee);
  closePopup(); // Close the popup after submitting
}

function deleteTask() {
  // Add functionality to delete the task
  console.log("Task deleted");
  closePopup(); // Close the popup after deleting
}