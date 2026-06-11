async function loadTarot() {
  const response =
    await fetch("./data/tarot.json");

  return await response.json();
}