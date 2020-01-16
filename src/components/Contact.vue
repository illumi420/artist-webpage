<template>
  <div id="contact">
    
    
        <div style="text-align:center">
            <h2>Contact Us</h2>
        </div>
        <div class="row">
            <div class="column">
                 <form class="contact-form" @submit.prevent="sendEmail">
                    <label for="E-mail">E-mail Adress:</label>
                    <input type="text" id="E-mail" name="e-mail adress" placeholder="Example@e-mail.com">
                    <label for="subject">Subject:</label>
                    <textarea id="subject" name="subject" placeholder="Write something..." style="height:170px"></textarea>
                    <input type="submit" value="Submit">
                </form>
            </div>
        </div>
    </div>
  


</template>

<script>
export default {
  name: 'Contact',
  // how to define component's local variables
 
}
</script>

<script>
import emailjs from 'emailjs-com';

export default {
  methods: {
    sendEmail: (e) => {
      emailjs.sendForm('contact_service', 'contact_form', e.target, 'user_4zO9NX0sUjYdSzKpYw8HA')
        .then((result) => {
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            console.log('FAILED...', error);
        });
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
/* Style Contactus */

body {
    font-family: Arial, Helvetica, sans-serif;
}

* {
    box-sizing: border-box;
}


/* Style inputs*/

input[type=text],
select,
textarea {
    width: 100%;
    padding: 12px;
    border: 1px solid #ccc;
    margin-top: 6px;
    margin-bottom: 16px;
    resize: vertical;
}

input[type=submit] {
    position: relative;
    left: 190px;
    background-color: blur;
    color: black;
    padding: 12px 20px;
    width: 34%;
    border: none;
    cursor: pointer;
}

input[type=submit]:hover {
    background-color: #45a049;
}


/* Style container/contact section */

#contact {
    border-radius: 5px;
    background-color: blur;
    padding: 10px;
    margin: 60px;
}


/* floating column */

.column {
    position: relative;
    right: -300px;
    width: 50%;
    margin-top: 6px;
    padding: 20px;
}


/* Responsive layout */

@media screen and (max-width: 800px) {
    .column {
        width: 100%;
        right: -25px;
        margin-top: 0;
    }
    input[type=submit] {
        width: 100%;
        left: 1px;
        margin-top: 0;
    }
}


</style>
