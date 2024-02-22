/* Here we have a file containing a collection of utility functions crucial for our app.
These functions enhance code cleanliness and organization, without directly impacting the core business logic.
For instance, we might include date formatting, currency conversion, and object data extraction.
By leveraging these utilities, we streamline our codebase, ensuring clarity and maintainability. */

// Sets an 'error' state on an HTML input element.
export function setErrorInput(input: Element) {
    input.classList.add('error');
    input.classList.remove('success');
    input.nextElementSibling?.classList.remove('hide');
  }
  
  // Sets a 'success' state on an HTML input element.
  export function setSuccessInput(input: Element) {
    input.classList.remove('error');
    input.classList.add('success');
    input.nextElementSibling?.classList.add('hide');
  }
  
  // Resets the state of an HTML input element to its default state.
  export function resetInput(input: Element) {
    input.classList.remove('error');
    input.classList.remove('success');
    input.nextElementSibling?.classList.add('hide');
  }
  
  // Resets multiple HTML input elements to their default state.
  export function resetForm(inputs: HTMLInputElement[]) { // ! changed from'Element' to HTMLIpuntElement
    inputs.forEach((input) => {
      input.value = '';
      resetInput(input);
    });
  }
  
  // Returns a list of simulated users.
export async function getUsers() {
    return [
      {
        id: "1",
        Name: "Anna",
        password: "pass123",
        cart: [],
        wishlist: [],
        email: "anna@example.com",
      },
      {
        id: "2",
        Name: "Brian",
        password: "pass456",
        cart: [],
        wishlist: [],
        email: "brian@example.com",
      },
      {
        id: "3",
        Name: "Catherine",
        password: "pass789",
        cart: [],
        wishlist: [],
        email: "catherine@example.com",
      },
    ];
  }  