const menuItems = document.querySelectorAll(".MenuItems");
const firstNameInput = document.querySelector('input[name="first_name"]');
const lastNameInput = document.querySelector('input[name="last_name"]');

function validateForm() {
  if (firstNameInput.value == "" || lastNameInput.value == "") {
    alert("Please provide your first and last name.");
    return false;
  }

  let hasQuantityGreaterThanZero = false;

  menuItems.forEach((item) => {
    const quantitySelect = item.querySelector(".quantity");
    const selectedQuantity = parseInt(quantitySelect.value, 10);

    if (selectedQuantity > 0) {
      hasQuantityGreaterThanZero = true;
      return;
    }
  });

  if (!hasQuantityGreaterThanZero) {
    alert("Please select at least one item.");
    return false;
  }
}
