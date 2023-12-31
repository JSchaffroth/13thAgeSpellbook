////////////////////////////////////////////////////////////////////////
//                         Checkbox Code                              //
////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', function()
{
	// Retrieve all checkboxes
	const checkboxes = document.querySelectorAll('input[type="checkbox"][data-label-id]');

	// Attach event listeners to checkboxes to save their states
	checkboxes.forEach(function(checkbox) {
		checkbox.addEventListener('change', saveCheckboxState);
	});
	
	// Load checkbox states when the page loads
	loadCheckboxStates();
});
	
// Saves checkbox states to local storage
function saveCheckboxState() 
{
	const checkbox = this;
	const labelId = checkbox.dataset.labelId;
	localStorage.setItem(`${labelId}_checkbox`, checkbox.checked);

	if (checkbox.checked) 
	{
		const labelElement = document.querySelector(`label[for="${checkbox.id}"]`);
		localStorage.setItem(`${labelId}_labelText`, labelElement.innerHTML);
	} 
	else 
	{
		localStorage.removeItem(`${labelId}_labelText`);
	}
}
	
// Loads checkbox states from local storage
function loadCheckboxStates() 
{
	const checkboxes = document.querySelectorAll('input[type="checkbox"][data-label-id]');

	checkboxes.forEach(function(checkbox) 
	{
		const labelId = checkbox.dataset.labelId;
		checkbox.checked = localStorage.getItem(`${labelId}_checkbox`) === 'true';
		
		if (checkbox.checked)
		{
			const labelElement = document.querySelector(`label[for="${checkbox.id}"]`);
			const labelText = localStorage.getItem(`${labelId}_labelText`);
			labelElement.innerHTML = labelText;
		}
	});
}