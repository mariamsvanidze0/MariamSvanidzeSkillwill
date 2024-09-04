import React, { useId } from 'react';

function EmailForm() {
  const id = useId();

  return (
    <form>
      <label htmlFor={`${id}-email`}>Email:</label>
      <input id={`${id}-email`} type="email" />
      <label htmlFor={`${id}-subject`}>Subject:</label>
      <input id={`${id}-subject`} type="text" />
    </form>
  );
}

export default EmailForm;
