// var storedItem = localStorage.getItem("storedItem");

// function save(){
    
//     var item = document.getElementById("post").value;

//     localStorage.setItem("storedItem", item);
//     document.getElementById("savedText").innerHTML = item + " SAVED";
// }

// function get(){

//     var currentStoredItem = localStorage.getItem("storedItem");

//     document.getElementById("openedText").innerHTML = storedItem + " OPENED";
//     if (currentStoredItem) {
        
//         document.getElementById("openedText").textContent = currentStoredItem + " OPENED";
//     }

//     else {
//         document.getElementById("openedText").textContent = "No saved posts found.";
//     }

// }

// The above code was deprecated because it was only being used to
// further my understanding of the local data saving process and now I will be saving with actual SQLite.

async function save() {
    const item = document.getElementById("post").value;
    if (!item.trim()) return alert("Write something first.");

    const response = await fetch('/api/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: item })
    });
    
    if ((await response.json()).success) {
        document.getElementById("savedText").innerHTML = item + " SAVED TO DATABASE";
    } else {
        document.getElementById("savedText").innerHTML = item + " UNABLE TO SAVE TO DATABASE";
    }
}

// async function get() {
//     const response = await fetch('/api/latest');
//     const data = await response.json();
    

//     if (data.found) {
//         document.getElementById("openedText").textContent = data.content + " OPENED FROM DATABASE";
//         document.getElementById("post").value = data.content;
//     } else {
//         document.getElementById("openedText").textContent = "No saved posts found.";
//     }
// }

// The above code is depricated because I want to move the draft pulling to a button input for the last draft.

async function get() {
    const response = await fetch('/api/latest');
    const data = await response.json();
    

    if (data.found) {
        document.getElementById("openedText").textContent = "\n" + " LAST DRAFT OPENED FROM DATABASE";
        document.getElementById("post").value = data.content;
    } else {
        document.getElementById("openedText").textContent = "No saved posts found.";
    }
}