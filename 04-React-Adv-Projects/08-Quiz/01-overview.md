# Quiz App

## Workflow

Form Page => Loading Status => Question[0] ... Question[n] => Modal => Form Page ...

Setup a global context to handle variables which are used among different pages

## Change Questions

using a state value, e.g index to control the question array can access one question item each time

## HTML code to text

```javascript
<h2 dangerouslySetInnerHTML={{ __html: question }} />
```

## Switch status for HTML elements in CSS

```javascript
<div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
```

## Forms in React

select and input form when using onChange() event handler to accept changes:

```javascript
const handleChange = (event) => {
  // console.log(event.target.name)
  const name = event.target.name;
  const value = event.target.value;
  setQuizForm({ ...quizForm, [name]: value });
};
```

```javascript
<form className='setup-form'>
  <h2>setup quiz</h2>

  {/* amount */}
  <div className='form-control'>
    <label htmlFor='amount'>number of questions</label>
    <input
      type='number'
      name='amount'
      id='amount'
      className='form-input'
      value={quizForm.amount}
      min={1}
      max={50}
      onChange={handleChange}></input>
  </div>

  {/* category */}
  <div className='form-control'>
    <label htmlFor='category'>category</label>
    <select
      name='category'
      id='category'
      className='form-input'
      value={quizForm.category}
      onChange={handleChange}>
      <option value='sports'>sports</option>
      <option value='history'>history</option>
      <option value='politics'>politics</option>
    </select>
  </div>

  {/* difficulty */}
  <div className='form-control'>
    <label htmlFor='difficulty'>select difficulty</label>
    <select
      name='difficulty'
      id='difficulty'
      className='form-input'
      value={quizForm.difficulty}
      onChange={handleChange}>
      <option value='easy'>easy</option>
      <option value='medium'>medium</option>
      <option value='hard'>hard</option>
    </select>
  </div>

  <button type='submit' className='submit-btn' onClick={handleSubmit}>
    start
  </button>
</form>
```
