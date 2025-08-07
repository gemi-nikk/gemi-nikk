// survey.js

// Dynamically create and insert the survey form
const formContainer = document.getElementById("creating-a-web-form");

formContainer.innerHTML = `
  <h1>Survey</h1>
  <p>Fields marked with a <span class="required-indicator">*</span> are required.</p>
  <form action="https://formspree.io/f/xvgradwn" method="post">
    <p>
      <label for="name_field">What is your name? <span class="required-indicator">*</span></label>
      <input type="text" id="name_field" name="name_field" required>
    </p>
    <p>
      <label for="email_field">What is your email? <span class="required-indicator">*</span></label>
      <input type="email" id="email_field" name="email_field" required>
    </p>
    <p>
      <label for="best_whole_number">Which whole number is best?</label>
      <input type="number" id="best_whole_number" name="best_whole_number" min="0">
    </p>
    <p>
      <label for="best_day">Which day is best?</label>
      <input type="date" id="best_day" name="best_day">
    </p>
    <p>
      <label for="best_bear">Which bear is best? <span class="required-indicator">*</span></label>
      <select id="best_bear" name="best_bear" required>
        <option value="">&nbsp;</option>
        <option value="Black">Black</option>
        <option value="Brown">Brown</option>
        <option value="Care">Care</option>
        <option value="Panda">Panda</option>
        <option value="Polar">Polar</option>
        <option value="Teddy">Teddy</option>
      </select>
    </p>
    <fieldset>
      <legend>Do you like radio buttons?</legend>
      <ul>
        <li><label><input type="radio" name="enjoys_radio_buttons" value="yes"> Yes</label></li>
        <li><label><input type="radio" name="enjoys_radio_buttons" value="no"> No</label></li>
        <li><label><input type="radio" name="enjoys_radio_buttons" value="?" checked> None of your business</label></li>
      </ul>
    </fieldset>
    <p>
      <label for="life_meaning">What is the meaning of life?</label>
      <textarea id="life_meaning" name="life_meaning" rows="5" cols="50" placeholder="enter the correct answer"></textarea>
    </p>
    <button type="submit">Send</button>
  </form>
`;
