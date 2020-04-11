import axios from 'axios';

export default {
    sendEmail: function(emailData) {
        console.log('made it this far');
        console.log(emailData);
        return axios.post("/email", emailData);
    }
}