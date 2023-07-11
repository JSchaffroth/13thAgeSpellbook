////////////////////////////////////////////////////////////////////////
//                         Checkbox Code                              //
////////////////////////////////////////////////////////////////////////

function saveToCompendium(obj)
{
	if (obj.checked)
	{
		alert("Yes checked " + obj.id);
	}
	
}

// Retrieve checkbox elements
const barbarian_0 = document.getElementById('barbarian_barbarianRage');
	
// Saves checkbox state to local storage
function saveCheckboxStates()
{
	localStorage.setItem('barbarian_barbarianRage', barbarian_0.checked);
}
	
// Loads checkbox states from local storage
function loadCheckboxStates()
{
	barbarian_0.checked = localStorage.getItem('barbarian_barbarianRage') === 'true';
}
	
// Attache event listeners to checkboxes to save their states
barbarian_0.addEventListener('change', saveCheckboxStates);
	
// Load checkbox states when the page loads
window.addEventListener('load', loadCheckboxStates);