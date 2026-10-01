// Start the bag count at 0
var bagCount =0;
 
// Find the "Bag (0)" link in the header
var bagLink = document.querySelector('a[aria-label^="Shopping bag"]');
 
// When someone clicks the bag link, increase the count by 1
bagLink.onclick = function (event) {
    event.preventDefault(); // stop the link from jumping to "#bag"
 
    bagCount = bagCount + 1;
    bagLink.textContent = "Bag (" + bagCount + ")";
};
 
// ---------------------------------------------
// 2. Search button
// ---------------------------------------------
var searchLink = document.querySelector('a[aria-label="Search the store"]');
 
searchLink.onclick = function (event) {
    event.preventDefault(); // stop the link from jumping to "#search"
 
    var searchTerm = prompt("What are you looking for?");
 
    if (searchTerm) {
        alert("You searched for: " + searchTerm);
    }
};
 
// ---------------------------------------------
// 3. Highlight the nav link you clicked
// ---------------------------------------------
// Grab all the main navigation links (New in / Collection / Journal)
var navLinks = document.querySelectorAll('nav[aria-label="Primary navigation"] a');
 
// Loop through each link and give it a click handler
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = function () {
        // Remove the highlight from every nav link first
        for (var j = 0; j < navLinks.length; j++) {
            navLinks[j].classList.remove("bg-black", "text-white");
        }
 
        // Add the highlight to the one that was just clicked
        this.classList.add("bg-black", "text-white");
    };
}
 
// ---------------------------------------------
// 4. "Explore the collection" button
// ---------------------------------------------
var exploreLink = document.querySelector('a[href="#collection"].mt-8');
 
if (exploreLink) {
    exploreLink.onclick = function () {
        console.log("User clicked Explore the collection");
    };
}
 