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
const barbarian_box_0 = document.getElementById('barbarian_barbarianRage');

// Retrieve label elements
const barbarian_label_0 = document.querySelector('label[for="barbarian_barbarianRage"]');
	
// Saves checkbox state to local storage
function saveCheckboxStates()
{
	localStorage.setItem('barbarian_boxCheck_0', barbarian_box_0.checked);
	
	if (!barbarian_box_0.checked)
		localStorage.removeItem('barbarian_labelText_0');
}

// Saves label text to local storage
function saveLabelText()
{
	localStorage.setItem('barbarian_labelText_0', barbarian_label_0.textContent);
}

// Save label text
saveLabelText();
	
// Loads checkbox states from local storage
function loadCheckboxStates()
{
	barbarian_box_0.checked = localStorage.getItem('barbarian_boxCheck_0') === 'true';
}
	
// Attach event listeners to checkboxes to save their states
barbarian_box_0.addEventListener('change', saveCheckboxStates);
	
// Load checkbox states when the page loads
window.addEventListener('load', loadCheckboxStates);