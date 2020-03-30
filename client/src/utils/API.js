import axios from 'axios';

export default {
    sendEmail: function(emailData) {
        const dataObj = {...emailData};
        console.log('made it this far');
        console.log(dataObj);
        return axios.post('/api/send/email', dataObj);
    }
}