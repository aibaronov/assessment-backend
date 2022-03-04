const goobers = []
let globalID = 0;

module.exports = {

    register: (req, res) =>{
        console.log("Registering Goober");
        let newGoober = req.body;
        newGoober.id = globalID;
        goobers.push(req.body);
        console.log(goobers);
        res.status(200).send(req.body);
        globalID++;
    },

    update: (req, res) => {
        console.log("Updating Goober");

        let index = goobers.findIndex(goober => +goober.id === +id);
        const {firstName, lastName, email} = req.body;
        goobers[index].firstName = firstName;
        goobers[index].lastName = lastName;
        goobers[index].email = email;
        console.log(`first name updated to: ${firstName}`);
        console.log(`last Name name updated to: ${lastName}`);
        console.log(`email updated to: ${email}`)

    }



}