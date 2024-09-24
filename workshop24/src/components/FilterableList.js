import React, { useState, useTransition, useDeferredValue } from 'react';

const data = Array.from({ length: 10000 }, (_, index) => `Item ${index + 1}`);

function FilterableList() {
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  const handleInputChange = (e) => {
    startTransition(() => {
      setQuery(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter items..."
        value={query}
        onChange={handleInputChange}
      />
      {isPending ? <p>Loading...</p> : null}
      <ul>
        {filteredData.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilterableList;
