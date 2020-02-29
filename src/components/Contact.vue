<template>
  <div id="contact">
    <div style="text-align:center">
      <h2>Contact Us</h2>
    </div>
    <div class="row">
      <div class="column">
        <form class="contact-form" @submit="checkForm"
        method="sendEmail"
        novalidate="true">

        <p v-if="errors.length">
           <b>Please correct the following error(s):</b>
           <ul> <li v-for="error in errors" :key="error"></li></ul></p>
    <p><label for="email">E-mail Adress:</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="e-mail adress"
            placeholder="Example@e-mail.com"/></p>
          <p>
          <label for="subject">Subject:</label>
          <textarea
            id="subject"
            v-model="subject"
            type="text"
            name="subject"
            placeholder="Write something..."
            style="height:170px"
          ></textarea>
          </p>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import swal from "sweetalert";

export default {
  name: "Contact",
  
         

  data() {
    return {
    errors:[],
    email: "",
    subject: ""
  };  
},
  

     methods: {
    checkForm: function (e) {
      e.preventDefault();
      this.errors =[];
     
      if(!this.subject) {
        this.errors.push("Please Write a Message.");
      }
      if(!this.email) {
        this.errors.push("Email required.");
      } else if (!this.validEmail(this.email)){
        this.errors.push("Valid Email requierd.");
      }

       if (!this.errors.length){
         return true;
      }
     },
           
     validEmail: function (email) {
             var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
             return re.test(email);
             },

    
    sendEmail: e => {
      //  console.log(this.email);
     
emailjs
        .sendForm(
          "contact_service",
          "contact_form",
          e.target,
          "user_4zO9NX0sUjYdSzKpYw8HA"
        )
        .then(result => {
          swal(
            "Thank you for contacting us!",
            "Your message will be processed soon !",
            "success"
          );
         ("SUCCESS!", result.status, result.text);
        }),
      []}
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

input[type="text"],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
}

input[type="submit"] {
  position: relative;
  left: 190px;
  background-color: blur;
  color: black;
  padding: 12px 20px;
  width: 34%;
  border: none;
  cursor: pointer;
}

input[type="submit"]:hover {
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
  input[type="submit"] {
    width: 100%;
    left: 1px;
    margin-top: 0;
  }
}
</style>
