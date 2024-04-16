async function getOnlineSending(id) {
  const response = await fetch(
    "https://script.google.com/macros/s/AKfycbznGEw4pyLsQ1s4mvwC6SbbuIZheRzJ6ujlq1jOg594fmAHQFaCJaDMUTQOjR2CXkzX5g/exec",
    {
      method: "POST",
      body: JSON.stringify({ id: id }),
    }
  );
  var data = await response.json();
  console.log(data);
  return data;
}

getOnlineSending(26680);
