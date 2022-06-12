import React from 'react';

const Contact=()=>{
return(
  <div className='container m-5' >

<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label"><b>Awais Sir Enter Ur Email</b></label>
  <input type="email" class="form-control"
   id="exampleFormControlInput1"
    placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"><b>Awais Sir Enter Ur Description</b></label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" 
   placeholder="My name is Awais,i am studing software engineering from pucit 
   and i am live in lahore,i work with focus and full dedicated... "
  ></textarea>
</div>

</div>
)
}
export default Contact;