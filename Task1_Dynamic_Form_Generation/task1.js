function addField(type) {
    const form = document.getElementById('df');
    const field = document.createElement('div');
    field.classList.add('ff');
    if (type === 'checkbox' || type === 'radio' || type==='text') {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = type;
      label.appendChild(document.createTextNode(type.charAt(0).toUpperCase() + type.slice(1)+":"));
      label.appendChild(input);
      field.appendChild(label);
    }  
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delbtn');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function() {
    deleteField(field);
  };
  field.appendChild(deleteBtn);
    form.appendChild(field);
    
  }
  function removeField() {
    const form = document.getElementById('df');
    const fields = form.getElementsByClassName('ff');
    if (fields.length > 0) {
      form.removeChild(fields[fields.length - 1]);
    }
  }
  function deleteField(field) {
    const form = document.getElementById('df');
    form.removeChild(field);
  }