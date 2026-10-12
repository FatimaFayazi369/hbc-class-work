
import { useEffect, useState } from "react";

function Users() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          "https://openlibrary.org/books/OL1M/lists.json"
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch data. Status: ${response.status}`
          );
        }

        const data = await response.json();

        if (!Array.isArray(data.entries)) {
          throw new Error("Invalid data received from the API.");
        }

        setEntries(data.entries);
      } catch (err) {
        setError(err.message || "Something went wrong.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Open Library Lists</h1>

      {entries.length === 0 ? (
        <p>No lists found.</p>
      ) : (
        entries.map((entry) => (
          <div key={entry.url}>
            <h3>{entry.name}</h3>
            <p>Last updated: {entry.last_update}</p>
            <p>Seeds: {entry.seed_count}</p>
            <p>Editions: {entry.edition_count}</p>
            <a
              href={`https://openlibrary.org${entry.url}`}
              target="_blank"
              rel="noreferrer"
            >
              View list
            </a>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Users;