import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    cell: "",
    cars: "",
    hobbies: [],
    socialMediaHours: "",
  });

  const onChange = (e) => {
    const { name, type, value, checked } = e.target;

    // Handle different input types in a single function
    setForm((prev) => {
      if (type === "checkbox" && name === "hobbies") {
        // Toggle hobbies in the array
        return {
          ...prev,
          hobbies: checked
            ? [...prev.hobbies, value] // Add hobby if checked
            : prev.hobbies.filter((hobby) => hobby !== value), // Remove hobby if unchecked
        };
      }

      // Handle all other input types
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  return (
    <>
      <form className="flex flex-col">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={onChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
        />
        <input
          name="cell"
          placeholder="Cell"
          value={form.cell}
          onChange={onChange}
        />
        <div>
          <label htmlFor="cars">Please select your car:</label>
          <select name="cars" id="cars" value={form.cars} onChange={onChange}>
            <option value="">Select a car</option>
            <option value="Toyota">Toyota</option>
            <option value="BYD">BYD</option>
            <option value="Tesla">Tesla</option>
          </select>
        </div>

        {/* Hobbies Checkboxes */}
        <div>
          <label>Hobbies:</label>
          <label htmlFor="tennis">
            <input
              type="checkbox"
              name="hobbies"
              value="tennis"
              id="tennis"
              checked={form.hobbies.includes("tennis")}
              onChange={onChange}
            />
            Tennis
          </label>
          <label htmlFor="reading">
            <input
              type="checkbox"
              name="hobbies"
              value="reading"
              id="reading"
              checked={form.hobbies.includes("reading")}
              onChange={onChange}
            />
            Reading
          </label>
          <label htmlFor="coding">
            <input
              type="checkbox"
              name="hobbies"
              value="coding"
              id="coding"
              checked={form.hobbies.includes("coding")}
              onChange={onChange}
            />
            Coding
          </label>
        </div>

        {/* Social Media Hours Radio Buttons */}
        <div>
          <label>Social Media Usage (hrs per day):</label>
          <label htmlFor="less1">
            <input
              type="radio"
              name="socialMediaHours"
              value="Less than 1 hour"
              id="less1"
              checked={form.socialMediaHours === "Less than 1 hour"}
              onChange={onChange}
            />
            Less than 1 hour
          </label>
          <label htmlFor="1to3">
            <input
              type="radio"
              name="socialMediaHours"
              value="1 to 3 hours"
              id="1to3"
              checked={form.socialMediaHours === "1 to 3 hours"}
              onChange={onChange}
            />
            1 to 3 hours
          </label>
          <label htmlFor="more3">
            <input
              type="radio"
              name="socialMediaHours"
              value="More than 3 hours"
              id="more3"
              checked={form.socialMediaHours === "More than 3 hours"}
              onChange={onChange}
            />
            More than 3 hours
          </label>
        </div>
      </form>
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </>
  );
};

export default Contact;
